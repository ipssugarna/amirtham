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


export default function SigninScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post('/api/users/signin', {
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
    <Container className="small-container" style={{height:'713px'}}>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 style={{fontSize:'80px',marginTop:'60px',color:'teal'}}><i class='fas fa-user-circle'></i> </h1>
      <h2 style={{color:'teal',paddingLeft:'260px'}}>Sign In</h2><br></br>
      <Form onSubmit={submitHandler} style={{marginLeft:'150px',marginBottom:'-300px'}}>
        <Form.Group className="mb-3" controlId="email">
        <Form.Label >
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </Form.Label>
  <Form.Control
    type="email"
    
    required
    style={{ width: '300px',border:'1px black solid' }} // Adjust the width value as per your requirement
    onChange={(e) => setEmail(e.target.value)}
  />
        </Form.Group><br></br>
        <Form.Group className="mb-3" controlId="password">
        <Form.Label >
          <FontAwesomeIcon icon={faLock} /> Password
        </Form.Label>          <Form.Control
            type="password"
            style={{ width: '300px',border:'1px black solid' }}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group><br></br>
        <div>
          <Button type="submit" style={{width:'110px',backgroundColor:'teal',color:'white',marginLeft:'80px'}}>Sign In</Button><br></br>
        </div><br></br>
        <div className="mb-3" style={{textDecoration:'none'}}>
          New customer?{' '}
          <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
        </div><br></br>
        <div className="mb-3">
          Forget Password? <Link to={`/forget-password`}>Reset Password</Link>
        </div><br></br>
      </Form>

    </Container>
  );
}
