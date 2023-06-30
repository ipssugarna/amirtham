import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import CheckoutSteps from '../components/CheckoutSteps';
import './ShippingAddressScreen.css'
import { Container } from 'react-bootstrap';

export default function ShippingAddressScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    fullBox,
    userInfo,
    cart: { shippingAddress },
  } = state;
  const [fullName, setFullName] = useState(shippingAddress.fullName || '');
  const [address, setAddress] = useState(shippingAddress.address || '');
  const [city, setCity] = useState(shippingAddress.city || '');
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ''
  );
  useEffect(() => {
    if (!userInfo) {
      navigate('/signin?redirect=/shipping');
    }
  }, [userInfo, navigate]);
  const [country, setCountry] = useState(shippingAddress.country || '');
  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: {
        fullName,
        address,
        city,
        postalCode,
        country,
        location: shippingAddress.location,
      },
    });
    localStorage.setItem(
      'shippingAddress',
      JSON.stringify({
        fullName,
        address,
        city,
        postalCode,
        country,
        location: shippingAddress.location,
      })
    );
    navigate('/payment');
  };

  useEffect(() => {
    ctxDispatch({ type: 'SET_FULLBOX_OFF' });
  }, [ctxDispatch, fullBox]);

  return (
    <Container>
    <div style={{height:'87vh'}}>
      <Helmet>
        <title>Shipping Address</title>
      </Helmet>
      <br></br><br></br>      <br></br>
<div style={{fontSize:'23px'}}>
      <CheckoutSteps step1 step2></CheckoutSteps>
      </div>
      <div >
        <h1 style={{marginTop:'20px',color:'black',fontSize:'30px',fontWeight:'bold'}}>Shipping Address</h1>
        {/* <hr style={{marginLeft:'550px',width:'180px'}}></hr>      <br></br> */}
        <br></br>

        <hr className='hr'></hr>
        </div>
        <div
  className="container "
  style={{
    marginTop: '-40px',
    fontSize: '23px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width:'300px',
    padding: '20px',width:'500px',height:'560px'
  }}
 
>        
        <Form onSubmit={submitHandler} >
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              pattern="[A-Za-z\s]+"
        title="Address should contain letters only"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              pattern="^(?=.*[a-zA-Z])[a-zA-Z0-9\s]+$"
              title="Address should contain at least one letter"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={city}
              onChange={(e) => setCity(e.target.value)}
              pattern="[A-Za-z\s]+"
              title="Address should contain letters only" 
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="postalCode">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              pattern="[A-Za-z\s]+"
              title="Address should contain letters only"
              required
            />
          </Form.Group>
          {/* <div className="mb-3">
            <Button
              id="chooseOnMap"
              type="button"
              variant="light"
              onClick={() => navigate('/map')}
            >
              Choose Location On Map
            </Button>
            {shippingAddress.location && shippingAddress.location.lat ? (
              <div>
                LAT: {shippingAddress.location.lat}
                LNG:{shippingAddress.location.lng}
              </div>
            ) : (
              <div>No location</div>
            )}
          </div> */}
<br></br>
          <div >
          <Button
  variant="primary"
  type="submit"
  className="button-hover"
  style={{
    backgroundColor: 'teal',
    color: 'white',
    width: '20%',
    fontSize: '16px',
    marginLeft: '180px',
    transition: 'background-color 0.3s ease',
  }}
>
  Continue
</Button>

            {/* <Button variant="primary" type="submit" style={{backgroundColor:'teal',color:'white',width:'20%',fontSize:'16px',marginLeft:'250px'}}>
              Continue
            </Button> */}
            
          </div>
        </Form>
      </div>
      <br></br>

    </div>
    </Container>
  );
}
