import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Store } from '../Store';
import { getError } from '../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './admin.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'DELETE_REQUEST':
      return { ...state, loadingDelete: true, successDelete: false };
    case 'DELETE_SUCCESS':
      return {
        ...state,
        loadingDelete: false,
        successDelete: true,
      };
    case 'DELETE_FAIL':
      return { ...state, loadingDelete: false };
    case 'DELETE_RESET':
      return { ...state, loadingDelete: false, successDelete: false };
    default:
      return state;
  }
};
export default function OrderListScreen() {
  const navigate = useNavigate();
  const { state } = useContext(Store);
  const { userInfo } = state;
  const [{ loading, error, orders, loadingDelete, successDelete }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: '',
    });

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/orders`, {
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
    if (successDelete) {
      dispatch({ type: 'DELETE_RESET' });
    } else {
      fetchData();
    }
  }, [userInfo, successDelete]);

  const deleteHandler = async (order) => {
    if (window.confirm('Are you sure to delete?')) {
      try {
        dispatch({ type: 'DELETE_REQUEST' });
        await axios.delete(`/api/orders/${order._id}`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        toast.success('order deleted successfully');
        dispatch({ type: 'DELETE_SUCCESS' });
      } catch (err) {
        toast.error(getError(error));
        dispatch({
          type: 'DELETE_FAIL',
        });
      }
    }
  };


  return (
    <div className='oder-container '>
      <Helmet>
        <title >Orders</title>
      </Helmet>
      <h1 className='oder-heading' style={{fontSize:'30px'}}>Orders</h1>

      <button className="nav-dropdown-item" onClick={() => {window.location.href = '/admin/dashboard'}} style={{fontSize:'21px'}}>
  Dashboard
</button><br/>
      <button className="nav-dropdown-item" onClick={() => {window.location.href = '/admin/products'}} style={{fontSize:'21px'}}>
  Products
</button><br/>

<button className="nav-dropdown-item" onClick={() => {window.location.href = '/admin/users'}} style={{fontSize:'21px'}}>
  Users
</button><br></br>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr style={{fontSize:'18px'}}>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody style={{fontSize:'16px'}}>
          {orders.map((order, index) => (
    <tr key={order._id}>
      <td>{(index + 1).toString().padStart(3, '0')}</td>
      <td>{order.user ? order.user.name : 'DELETED USER'}</td>
      <td>{order.createdAt.substring(0, 10)}</td>
      <td>{order.totalPrice.toFixed(2)}</td>
      <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
      <td>
        {order.isDelivered ? order.deliveredAt.substring(0, 10) : 'No'}
      </td>

                <td>
                  <Button
                    type="button"
                    variant="light"
                    style={{backgroundColor:'gray',color:'white'}}

                    onClick={() => {
                      navigate(`/order/${order._id}`);
                    }}
                  >
                    Details
                  </Button>
                  &nbsp;
                  <Button
                    type="button"
                    variant="light"
                    style={{backgroundColor:'red',color:'white'}}

                    onClick={() => deleteHandler(order)}
                  >
<FontAwesomeIcon icon={faTrashAlt} style={{ fontSize: '24px' }} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
