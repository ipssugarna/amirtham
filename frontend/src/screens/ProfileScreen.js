import React, { useContext, useReducer, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import axios from 'axios';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true };
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false };
    case 'UPDATE_FAIL':
      return { ...state, loadingUpdate: false };

    default:
      return state;
  }
};

export default function ProfileScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [{ loadingUpdate }, dispatch] = useReducer(reducer, {
    loadingUpdate: false,
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        '/api/users/profile',
        {
          name,
          email,
          password,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: 'UPDATE_SUCCESS',
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      toast.success('User updated successfully');
  
      // Show "User updated successfully" message and navigate to home page after 5 seconds
      setTimeout(() => {
        toast.dismiss(); // Dismiss the current toast
        window.location.href = '/'; // Replace '/home' with the actual URL of your home page
      }, 5000);
    } catch (err) {
      dispatch({
        type: 'FETCH_FAIL',
      });
      toast.error(getError(err));
    }
  };

  
  return (
    <div className="container small-container" style={{marginTop:'10px' ,height:'80vh'}}>
      <Helmet>
        <title>User Profile</title>
      </Helmet><br></br>
      <h1>      <FontAwesomeIcon icon={faUserAlt} style={{ fontSize: '90px' }} />
</h1>
      <h1 className="my-3" style={{fontSize:'30px',fontWeight:'bold'}}>User Profile</h1>
      <form onSubmit={submitHandler} style={{marginBottom:'-400px',fontSize:'23px'}}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
           style={{border:'1px solid gray'}}

            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            style={{border:'1px solid gray'}}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
                      style={{border:'1px solid gray'}}

            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            style={{border:'1px solid gray'}}

            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <br></br>
        <div className="mb-3">

  <Button type="submit"         className="button-hover" style={{backgroundColor:'teal',color:'white',border:'none',width:'130px',marginLeft:'200px'}}

>
    Update
  </Button>
</div>

      </form>
    </div>
  );
}
