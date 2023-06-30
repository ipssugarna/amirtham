import React, { useContext, useEffect, useReducer } from 'react';
import Chart from 'react-google-charts';
import axios from 'axios';
import { Store } from '../Store';
import { getError } from '../utils';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './admin.css';
import Container from 'react-bootstrap/Container';


const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        summary: action.payload,
        loading: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function DashboardScreen() {
  const [{ loading, summary, error }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });
  const { state } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/api/orders/summary', {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(err),
        });
      }
    };
    fetchData();
  }, [userInfo]);

  return (

<div className="dashboard-container">
<div style={{marginTop: '40px', fontFamily: 'Urbanist, sans-serif'}}>
  <h1 className="dashboard-heading" style={{fontSize:'30px'}}>Dashboard</h1>
  <div className="nav-dropdown">
    <button className="nav-dropdown-item" onClick={() => {window.location.href = '/admin/products'}} style={{fontSize:'21px'}}>
      Products
    </button>
    <br/>
    <button className="nav-dropdown-item" onClick={() => {window.location.href = '/admin/orders'}}  style={{fontSize:'21px'}}>
      Orders
    </button>
    <br/>
    <button className="nav-dropdown-item" onClick={() => {window.location.href = '/admin/users'}}  style={{fontSize:'21px'}}>
      Users
    </button>
  </div><br></br>

  {loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <>
         <Row>
            <Col md={4}>
              <Card style={{background:'orange',width:'400px'}}>
                <Card.Body>
                  <Card.Title>
                    {summary.users && summary.users[0]
                      ? summary.users[0].numUsers
                      : 0}
                  </Card.Title>
                  <Card.Text style={{color:'black',fontSize:'20px',fontWeight:'normal'}}> Total number of users</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{background:'orange',width:'400px'}}>
                <Card.Body>
                  <Card.Title>
                    {summary.orders && summary.users[0]
                      ? summary.orders[0].numOrders
                      : 0}
                  </Card.Title>
                  <Card.Text  style={{color:'black',fontSize:'20px',fontWeight:'normal'}}>Total number of orders</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{background:'orange',width:'400px'}}>
                <Card.Body>
                  <Card.Title>
                    Rs.
                    {summary.orders && summary.users[0]
                      ? summary.orders[0].totalSales.toFixed(2)
                      : 0}
                  </Card.Title>
                  <Card.Text  style={{color:'black',fontSize:'20px',fontWeight:'normal'}} > Total revenue</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="sales-container my-3">
            <h2>Sales</h2>
            {summary.dailyOrders.length === 0 ? (
              <MessageBox className="no-sale-message">No Sale</MessageBox>
            ) : (
              <Chart
                className="chart"
                width="100%"
                height="400px"
                chartType="AreaChart"
                loader={<div>Loading Chart...</div>}
                data={[
                  ['Date', 'Sales'],
                  ...summary.dailyOrders.map((x) => [x._id, x.sales]),
                ]}
              ></Chart>
            )}
          </div>
          <br></br>
          <br></br>

    </>
  )}
</div>
</div> 

  

  );
}
