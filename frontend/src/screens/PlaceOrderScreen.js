import Axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import { Store } from '../Store';
import CheckoutSteps from '../components/CheckoutSteps';
import LoadingBox from '../components/LoadingBox';
import './PaymentMethod.css'
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faEye } from '@fortawesome/free-solid-svg-icons';




const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_REQUEST':
      return { ...state, loading: true };
    case 'CREATE_SUCCESS':
      return { ...state, loading: false };
    case 'CREATE_FAIL':
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default function PlaceOrderScreen() {
  const navigate = useNavigate();

  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: false,
  });

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100; // 123.2345 => 123.23
  cart.itemsPrice = round2(
    cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
  );
  cart.shippingPrice = round2(300);
  cart.taxPrice = 0;
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice ;

  const placeOrderHandler = async () => {
    try {
      dispatch({ type: 'CREATE_REQUEST' });

      const { data } = await Axios.post(
        '/api/orders',
        {
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          paymentMethod: cart.paymentMethod,
          itemsPrice: cart.itemsPrice,
          shippingPrice: cart.shippingPrice,
          taxPrice: cart.taxPrice,
          totalPrice: cart.totalPrice,
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      ctxDispatch({ type: 'CART_CLEAR' });
      dispatch({ type: 'CREATE_SUCCESS' });
      localStorage.removeItem('cartItems');
      navigate(`/order/${data.order._id}`);
    } catch (err) {
      dispatch({ type: 'CREATE_FAIL' });
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (!cart.paymentMethod) {
      navigate('/payment');
    }
  }, [cart, navigate]);

  return (
    <Container>      <br></br><br></br>
      <br></br>

    <div >
      <div style={{fontSize:'23px'}}>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      </div>
      <Helmet>
        <title>Preview Order</title>
      </Helmet>
      
<br></br>
      <h1 className="" style={{color:'black',fontSize:'30px',fontWeight:'bold'}}>Preview Order</h1>
      {/* <hr style={{marginLeft:'570px',width:'140px'}}></hr>      */}
      <br></br>

      <Row>
        {/* <Col md={2}></Col> */}
        <Col md={7} style={{marginLeft:'30px'}}>
        <div className="mb-3 payment-card">
        <div className="card-body">
  <h5 className="card-title" style={{fontWeight:'bold',fontSize:'23px'}}>Shipping</h5>
  <div className="card-text" style={{color:'black',fontSize:'20px',marginTop:'15px'}}>
    <strong>Name:</strong> {cart.shippingAddress.fullName} <br></br>
    <strong>Address: </strong> {cart.shippingAddress.address},<br></br>
    {cart.shippingAddress.city}, {cart.shippingAddress.postalCode},<br></br>
    {cart.shippingAddress.country} <br />
  </div><br></br>
  <div style={{ display: "inline-block", background: "teal", padding: "7px",width:'35px',height:'40px', borderRadius: "5px" }} className="icon-hover">
    <a href="/shipping" style={{ color: "white", textDecoration: "none" ,paddingLeft:'8px',fontSize:'23px'}}>  <FontAwesomeIcon
    icon={faEdit}
    style={{
      fontSize: '25px',
      marginLeft: '-10px',
      marginBottom: '30px',
    }}
  /></a>
  </div>
  </div>

    </div>

          {/* <Card className="mb-3">
            <Card.Body>
              <Card.Title>Payment</Card.Title>
              <Card.Text>
                <strong>Method:</strong> {cart.paymentMethod}
              </Card.Text>
              <Link to="/payment">Edit</Link>
            </Card.Body>
          </Card> */}
 <div className="mb-3 payment-card">
      <div className="card-body">
        <h5 className="card-title" style={{fontSize:'18px',fontWeight:'bold',fontSize:'23px'}}>Payment</h5><br></br>
        <div className="card-text" style={{color:'black',fontSize:'20px',marginTop:'-15px'}}>
          <strong>Method:</strong> {cart.paymentMethod}
        </div><br></br>
        <div style={{ display: "inline-block", background: "teal", padding: "7px",width:'35px',height:'40px', borderRadius: "5px" }} className="icon-hover">

        <a href="/payment" style={{ color: "white", textDecoration: "none" ,paddingLeft:'8px',fontSize:'23px',marginTop:'15px'}}> <FontAwesomeIcon icon={faEdit} style={{ fontSize: '25px',marginLeft:'-10px',marginBottom:'30px'}} /></a>
        </div>
      </div>
    </div>
          {/* <Card className="mb-3">
            <Card.Body>
              <Card.Title>Items</Card.Title>
              <ListGroup variant="flush">
                {cart.cartItems.map((item) => (
                  <ListGroup.Item key={item._id}>
                    <Row className="align-items-center">
                      <Col md={6}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid rounded img-thumbnail"
                        ></img>{' '}
                        <Link to={`/product/${item.slug}`}>{item.name}</Link>
                      </Col>
                      <Col md={3}>
                        <span>{item.quantity}</span>
                      </Col>
                      <Col md={3}>${item.price}</Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Link to="/cart">Edit</Link>
            </Card.Body>
          </Card> */}
<div className="mb-3 items-card">
      <div className="card-body">
        <h5 className="card-title" style={{fontSize:'23px'}}>Items</h5><br></br>
        <div className="list-group" style={{fontSize:'23px'}}>
          {cart.cartItems.map((item) => (
            <div className="list-group-item" key={item._id}>
              <div className="row align-items-center">
                <div className="col-md-6" >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="img-fluid rounded img-thumbnail"
                    style={{marginRight:'20px'}}
                  />
                  <Link to={`/product/${item.slug}`} style={{ textDecoration: "none",color:'black',paddingLeft:'20pxpx'}}>{item.name}       <FontAwesomeIcon icon={faEye} style={{ fontSize: '18px' }} />
</Link>
                </div>
                <div className="col-md-3">
                  <span>{item.quantity}</span>
                </div>
                <div className="col-md-3">Rs {item.price}</div>
              </div>
            </div>
          ))}
        </div><br></br>
        <div style={{ display: "inline-block", background:"teal", padding: "7px",width:'35px',height:'40px', borderRadius: "5px" }} className="icon-hover">

        <Link to="/cart" style={{ color: "white", textDecoration: "none" ,paddingLeft:'8px',fontSize:'23px'}}>      <FontAwesomeIcon icon={faEdit}  className="icon-hover"
 style={{ fontSize: '25px',marginLeft:'-10px',marginBottom:'30px' }} />
</Link>
     </div>
      </div>
    </div>

        </Col>
        <Col md={4}>
          {/* <Card>
            <Card.Body>
              <Card.Title>Order Summary</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Items</Col>
                    <Col>${cart.itemsPrice.toFixed(2)}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Shipping</Col>
                    <Col>${cart.shippingPrice.toFixed(2)}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Tax</Col>
                    <Col>${cart.taxPrice.toFixed(2)}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong> Order Total</strong>
                    </Col>
                    <Col>
                      <strong>${cart.totalPrice.toFixed(2)}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                      type="button"
                      onClick={placeOrderHandler}
                      disabled={cart.cartItems.length === 0}
                    >
                      Place Order
                    </Button>
                  </div>
                  {loading && <LoadingBox></LoadingBox>}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card> */}
          <div className="order-summary-card">
      <div className="card-body" style={{fontSize:'20px'}}>
        <h5 className="card-title" style={{fontSize:'23px'}}>Order Summary</h5><br></br>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col">Items</div>
              <div className="col">Rs {cart.itemsPrice.toFixed(2)}</div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="row">
              <div className="col">Shipping</div>
              <div className="col">Rs {cart.shippingPrice.toFixed(2)}</div>
            </div>
          </div>
          {/* <div className="list-group-item">
            <div className="row">
              <div className="col">Tax</div>
              <div className="col">${cart.taxPrice.toFixed(2)}</div>
            </div>
          </div> */}
          <div className="list-group-item">
            <div className="row">
              <div className="col">
                <strong>Order Total</strong>
              </div>
              <div className="col">
                <strong>Rs {cart.totalPrice.toFixed(2)}</strong>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="d-grid">
              
              <Button
                type="button"
                className="button-hover"

                style={{backgroundColor:'teal',color:'white',border:'none',width:'130px',marginLeft:'100px'}}
                onClick={placeOrderHandler}
                // disabled={cart.cartItems.length === 0}
              >
                Place Order
              </Button>
            </div>
            {/* {loading && <LoadingBox></LoadingBox>} */}
          </div>
        </div>
      </div>
    </div>
        </Col>
      </Row>
      <br></br><br></br>
      <br></br><br></br>

    </div>
    </Container>
  );
}
