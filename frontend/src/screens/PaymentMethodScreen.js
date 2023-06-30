import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CheckoutSteps from '../components/CheckoutSteps';
import { Store } from '../Store';
import './PaymentMethod.css'
import { Container } from 'react-bootstrap';

export default function PaymentMethodScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { shippingAddress, paymentMethod },
  } = state;

  const [paymentMethodName, setPaymentMethod] = useState(
    paymentMethod || 'PayPal'
  );

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate('/shipping');
    }
  }, [shippingAddress, navigate]);
  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName });
    localStorage.setItem('paymentMethod', paymentMethodName);
    navigate('/placeorder');
  };
  return (
    <Container>
    <div >
    <br></br><br></br>      <br></br>
    <div style={{fontSize:'23px'}}>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
     
      </div>
      <div className="container" style={{height:"41vh"}}>
        <Helmet>
          <title>Payment Method</title>
        </Helmet>
        
        <h1 style={{color:'black',fontSize:'24px',marginTop:'30px',fontSize:'30px',fontWeight:'bold'}}>Payment Method</h1>
<br></br>
        <Form
  onSubmit={submitHandler}
  className='form'
  style={{width:'400px',paddingLeft:'60px',    marginLeft: '450px',height:'195px',

    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    // padding: '20px',
  }}
>          <br></br>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="PayPal"
              label="PayPal"
              style={{marginBottom:'40px'}}
              value="PayPal"
              checked={paymentMethodName === 'PayPal'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
          {/* <div className="mb-3">
            <Form.Check
              type="radio"
              id="Stripe"
              label="Stripe"
              value="Stripe"
              checked={paymentMethodName === 'Stripe'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div> */}
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="cash on delivery"
              label="Cash on delivery"
              value="cash on delivery"
              checked={paymentMethodName === 'cash on delivery'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
<br></br>
          <div className="mb-3">
          <Button
  type="submit"
  className="button-hover"
  style={{
    backgroundColor: 'teal',
    color: 'white',
    width: '30%',
    fontSize: '16px',
    marginLeft: '80px',marginTop:'-40px',

    transition: 'background-color 0.3s ease',
  }}
>
  Continue
</Button>

            {/* <Button type="submit" style={{width:'20%',marginLeft:'250px',color:'white',backgroundColor:'teal'}}>Continue</Button> */}
          </div>
        </Form>
      </div>
      <br></br><br></br>
      <br></br><br></br>
      <br></br>

    </div>
    </Container>
  );
}
