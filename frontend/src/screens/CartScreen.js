import { useContext } from 'react';
import { Store } from '../Store';
import { Helmet } from 'react-helmet-async';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MessageBox from '../components/MessageBox';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../src/screens/CartScreen.css'

export default function CartScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`https://amrithamsrilankaa.onrender.com/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };
  const removeItemHandler = (item) => {
    ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  const checkoutHandler = () => {
    navigate('/signin?redirect=/shipping');
  };

  return (
    <div>
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      <div className="container">
        <hr></hr>
  <div style={{ marginTop: '50px', marginBottom: '40px', height: '60px', marginTop: '50px',marginLeft:'-150px',marginRight:'-63px'}}>
    <h1 style={{ color: "black", fontSize: '30px', fontWeight: 'bold', marginTop: '50px', paddingTop: '13px' }}>Shopping Cart</h1>
  </div>
  <Row style={{ marginBottom: '415px',fontSize:'20px' }}>
    {/* <Col md={1}></Col> */}
    <Col md={8} style={{marginLeft:'30px'}}>
      {cartItems.length === 0 ? (
        <MessageBox>
          Cart is empty. <Link to="/product">Go Shopping</Link>
        </MessageBox>
      ) : (
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item key={item._id}>
                <Row className="align-items-center">
                  <Col md={4} >
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded img-thumbnail"
                    ></img>{' '}
                    <Link to={`/product/${item.slug}`} style={{textDecoration:'none',color:'black',marginLeft:'5px',width:'160px'}}>{item.name}</Link>
                  </Col>
                  <Col md={3}>
                    <Button
                      onClick={() =>
                        updateCartHandler(item, item.quantity - 1)
                      }
                      variant="light"
                      disabled={item.quantity === 1}
                    >
                      <i className="fas fa-minus-circle"></i>
                    </Button>{' '}
                    <span>{item.quantity}</span>{' '}
                    <Button
                      variant="light"
                      onClick={() =>
                        updateCartHandler(item, item.quantity + 1)
                      }
                      disabled={item.quantity === item.countInStock}
                    >
                      <i className="fas fa-plus-circle"></i>
                    </Button>
                  </Col>
                  <Col md={3}>Rs {item.price}</Col>
                  <Col md={2}>
                    <Button
                      onClick={() => removeItemHandler(item)}
                      variant="light"
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
    </Col>
    <Col md={3} >
      <div style={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)' ,fontSize:'20px',width:'350px'}} >
        <div className="card-body" style={{ fontSize: '20px' }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h3 style={{ fontSize: '20px' }}>
                Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)} items):{' '}
                <span style={{ fontWeight: 'normal', color: 'black', marginLeft: '30px' }}>
                  Rs {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                </span>
              </h3>
            </li>
            <li className="list-group-item" style={{ fontSize: '16px' }}>
              <div>
              <button
  type="button"
  className="teal-button"
  onClick={checkoutHandler}
  style={{marginLeft:'10px',width:'230px'}}
  disabled={cartItems.length === 0}
>
  Proceed to Checkout
</button>

              </div>
            </li>
          </ul>
        </div>

      </div>
    </Col>
  </Row>
</div>

    </div>
  );
}
