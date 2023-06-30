import Axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

export default function SignupScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    try {
      const { data } = await Axios.post('/api/users/signup', {
        name,
        email,
        password,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    } catch (err) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <Container>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <div >
      <h1 className="my-3" style={{color:'teal',fontSize:'20px',paddingTop:'60px',height:"230px"}}>Sign Up</h1>
      <Form onSubmit={submitHandler} style={{marginLeft:'500px',marginTop:'-120px'}}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label >Name</Form.Label>
          <Form.Control 
          style={{ width: '300px',border:'1px black solid' }}
           pattern="[A-Za-z]+"
           title="Name should only contain letters"
          onChange={(e) => setName(e.target.value)} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
        <Form.Label >
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </Form.Label>
          <Form.Control
          style={{ width: '300px',border:'1px black solid' }}
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
        <Form.Label >
          <FontAwesomeIcon icon={faLock} /> Password
        </Form.Label>
          <Form.Control
          style={{ width: '300px',border:'1px black solid' }}
            type="password"
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
            title="Password should contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number"
            required
            onChange={(e) => setPassword(e.target.value)}
          /><br></br>
          <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label >
          <FontAwesomeIcon icon={faLock} /> Confirm Password
        </Form.Label>
            <Form.Control
            style={{ width: '300px',border:'1px black solid' }}
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group>
        </Form.Group><br></br>
        <div className="mb-3">
          <Button type="submit"  style={{width:'110px',backgroundColor:'teal',color:'white',marginLeft:'80px'}}>Sign Up</Button>
        </div><br></br>
        <div className="mb-3">
          Already have an account?{' '}
          <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
        </div><br></br><br></br><br></br>
      </Form>
      </div>
    </Container>
  );
}
