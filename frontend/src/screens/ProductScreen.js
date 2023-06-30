import axios from 'axios';
import { useContext, useEffect, useReducer, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Rating from '../components/Rating';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { getError } from '../utils';
import loader from './Loader';
import { Store } from '../Store';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { toast } from 'react-toastify';
import { Container } from 'react-bootstrap';
import './App.css'

const reducer = (state, action) => {
  switch (action.type) {
    case 'REFRESH_PRODUCT':
      return { ...state, product: action.payload };
    case 'CREATE_REQUEST':
      return { ...state, loadingCreateReview: true };
    case 'CREATE_SUCCESS':
      return { ...state, loadingCreateReview: false };
    case 'CREATE_FAIL':
      return { ...state, loadingCreateReview: false };
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductScreen() {
  let reviewsRef = useRef();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [selectedImage, setSelectedImage] = useState('');

  const navigate = useNavigate();
  const params = useParams();
  const { slug } = params;

  const [{ loading, error, product, loadingCreateReview }, dispatch] =
    useReducer(reducer, {
      product: [],
      loading: true,
      error: '',
    });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData();
  }, [slug]);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    });
    window.alert('Product added to your cart');
    navigate('/Cart');
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!comment || !rating) {
      toast.error('Please enter comment and rating');
      return;
    }
    try {
      const { data } = await axios.post(
        `/api/products/${product._id}/reviews`,
        { rating, comment, name: userInfo.name },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );

      dispatch({
        type: 'CREATE_SUCCESS',
      });
      toast.success('Review submitted successfully');
      product.reviews.unshift(data.review);
      product.numReviews = data.numReviews;
      product.rating = data.rating;
      dispatch({ type: 'REFRESH_PRODUCT', payload: product });
      window.scrollTo({
        behavior: 'smooth',
        top: reviewsRef.current.offsetTop,
      });
    } catch (error) {
      toast.error(getError(error));
      dispatch({ type: 'CREATE_FAIL' });
    }
  };
  return loading ? (
<LoadingBox/>
    
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <Container>

      <section className="py-5" >
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
          {[product.image, ...product.images].map((x) => (
      <Col key={x}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button
            className="thumbnail"
            type="button"
            style={{ border: 'none', backgroundColor: 'transparent' }}
            onClick={() => setSelectedImage(x)}
          >
            <img src={x} alt="product" style={{ width: '500px' }} />
          </button>
        </div>
        {/* <p style={{fontSize:'18px',fontWeight:'normal'}}>Price : Rs {product.price}</p>
        <h4 style={{fontSize:'18px',fontWeight:'normal'}}>Description:</h4>
        <p style={{ fontSize: '18px', fontWeight: 'normal' }}>{product.description}</p> */}
      </Col>
    ))}
          </div>
          
          <div className="col-md-6">
            {/* <div className="small mb-1">SKU: BST-498</div> */}
            <h1 className="display-5 fw-bolder">{product.name}</h1>
            <div className="fs-5 mb-5">
              {/* <span className="text-decoration-line-through">$45.00</span> */}
              <span>Rs {product.price}</span>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
              <p className="lead" >
            {product.description}
            </p>
            </div>
            {/* <Rating rating={product.rating} numReviews={product.numReviews} /> */}

            
            <div className="d-flex">
              {/* <input
                className="form-control text-center me-3"
                id="inputQuantity"
                type="num"
                defaultValue="1"
                style={{ maxWidth: '3rem' }}
              /> */}
              {/* <button className="btn btn-outline-dark flex-shrink-0" type="button"> */}
                {/* <i className="bi-cart-fill me-1"></i> */}
 {product.countInStock > 0 && (
        <li className="list-group-item">
          <div className="d-grid">
          <button
  onClick={addToCartHandler}
  style={{border:'1px solid'}}
  className="btn btn-primary custom-button"
>
  Add to Cart
</button>

          </div>
        </li>

      )}            
        {/* </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    <div  >    <br></br>
    <br></br>


      <Row>
      <div  style={{marginTop:'-100px'}}>
        <h2 ref={reviewsRef}>Reviews</h2>
        <div className="mb-3">
          {product.reviews.length === 0 && (
            <MessageBox>There is no review</MessageBox>
          )}
        </div>
        <ListGroup>
          {product.reviews.map((review) => (
            <ListGroup.Item key={review._id}>
              <strong style={{fontWeight:'normal'}}>{review.name}</strong>
              <Rating rating={review.rating} caption=" "></Rating>
              <p  style={{fontWeight:'normal'}}>{review.createdAt.substring(0, 10)}</p>
              <p  style={{fontWeight:'normal'}}>{review.comment}</p>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className="my-3">
          {userInfo ? (
            <form onSubmit={submitHandler}>
              <h2>Write a customer review</h2>
              <Form.Group className="mb-3" controlId="rating">
                <Form.Label>Rating</Form.Label>
                <Form.Select
                  aria-label="Rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="1">1- Poor</option>
                  <option value="2">2- Fair</option>
                  <option value="3">3- Good</option>
                  <option value="4">4- Very good</option>
                  <option value="5">5- Excelent</option>
                </Form.Select>
              </Form.Group>
              <FloatingLabel
                controlId="floatingTextarea"
                label="Comments"
                className="mb-3" style={{fontWeight:'normal'}}
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </FloatingLabel>

              <div className="mb-3">
              <Button
  disabled={loadingCreateReview}
  type="submit"
  style={{
    backgroundColor: 'teal',
    color: 'white',
    width:'160px',
    marginLeft:'600px',
    transition: 'background-color 0.3s ease',
  }}
  className="hover-button"
>
  Submit
</Button>

                {loadingCreateReview && <LoadingBox></LoadingBox>}
              </div>
            </form>
          ) : (
            <MessageBox>
              Please{' '}
              <Link to={`/signin?redirect=/product/${product.slug}`}>
                Sign In
              </Link>{' '}
              to write a review
            </MessageBox>
          )}
        </div>
      </div>
        {/* <Col md={4} style={{marginTop:'20px',marginRight:'50px',marginLeft:'100px'}}>
          <ListGroup variant="flush">
              <Helmet>
                <title >{product.name}</title>
              </Helmet>
              <h1 style={{fontSize:'22px',fontWeight:'bold',marginLeft:'-210px'}}>{product.name}</h1><br></br>
              
             
              <div style={{
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
  borderRadius: '5px',
  padding: '10px'
}}>
  <Row xs={1} md={2} className="g-2">
   
    {[product.image, ...product.images].map((x) => (
      <Col key={x}> <br></br><br></br>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button
            className="thumbnail"
            type="button"
            style={{ border: 'none', backgroundColor: 'transparent' }}
            onClick={() => setSelectedImage(x)}
          >
            <img src={x} alt="product" style={{ width: '100%' }} />
          </button>
        </div>
        <p style={{fontSize:'18px',fontWeight:'normal'}}>Price : Rs {product.price}</p>
        <h4 style={{fontSize:'18px',fontWeight:'normal'}}>Description:</h4>
        <p style={{ fontSize: '18px', fontWeight: 'normal' }}>{product.description}</p>
      </Col>
    ))}
  </Row>
</div> */}
{/* <Row>  
  <Col md={13} style={{marginRight:'-70px', marginTop:'10px'}}>
          
          <div style={{   boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',   borderRadius: '5px',
}} >
  <div className="card-body">
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <Row>
          <Col style={{fontSize:'18px',fontWeight:'normal'}}>Price:</Col>
          <Col style={{fontSize:'18px',fontWeight:'normal'}}>Rs {product.price}</Col>
        </Row>
      </li>
      <li className="list-group-item">
       
        <Row>
  <Col xs={4} md={2}>Status:</Col>
  <Col xs={8} md={10} style={{textAlign:'right',marginLeft:'-30px'}}>
    {product.countInStock > 0 ? (
      <span className="badge bg-success">In Stock</span>
    ) : (
      <span className="badge bg-danger">Unavailable</span>
    )}
  </Col>
</Row>

      </li>
      {product.countInStock > 0 && (
        <li className="list-group-item">
          <div className="d-grid">
          <button
  onClick={addToCartHandler}
  style={{border:'1px solid'}}
  className="btn btn-primary custom-button"
>
  Add to Cart
</button>

          </div>
        </li>
      )}
    </ul>
  </div>
</div>

        </Col></Row> */}

            
          {/* </ListGroup>  */}
        {/* </Col> */}
        {/* <Col md={4}>
      <div className="my-3" style={{ width: '30%',width:'100%',marginLeft:'110px',  borderRadius: '5px',  
}}>
        <h2 ref={reviewsRef} style={{fontSize:'22px',fontWeight:'bold',}}>Reviews</h2>
        <div className="mb-3" style={{fontWeight:'normal'}}>
          {product.reviews.length === 0 && (
            <MessageBox>There is no review</MessageBox>
          )}
        </div>
        <ListGroup style={{boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)'}} >
          {product.reviews.map((review) => (
            <ListGroup.Item key={review._id} style={{fontSize:'16px',fontWeight:'normal'}}>
              <p style={{fontWeight:'normal'}}>{review.name}</p>
              <Rating rating={review.rating} style={{fontWeight:'normal'}} caption=" "></Rating>
              <p style={{fontWeight:'normal'}} >{review.createdAt.substring(0, 10)}</p>
              <p style={{fontWeight:'normal'}}>{review.comment}</p>
            </ListGroup.Item>
          ))}
        </ListGroup>
       
       <div className="my-3">
        <h2 ref={reviewsRef}>Reviews</h2>
        <div className="mb-3">
          {product.reviews.length === 0 && (
            <MessageBox>There is no review</MessageBox>
          )}
        </div>
        <ListGroup>
          {product.reviews.map((review) => (
            <ListGroup.Item key={review._id}>
              <strong>{review.name}</strong>
              <Rating rating={review.rating} caption=" "></Rating>
              <p>{review.createdAt.substring(0, 10)}</p>
              <p>{review.comment}</p>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className="my-3">
          {userInfo ? (
            <form onSubmit={submitHandler}>
              <h2>Write a customer review</h2>
              <Form.Group className="mb-3" controlId="rating">
                <Form.Label>Rating</Form.Label>
                <Form.Select
                  aria-label="Rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="1">1- Poor</option>
                  <option value="2">2- Fair</option>
                  <option value="3">3- Good</option>
                  <option value="4">4- Very good</option>
                  <option value="5">5- Excelent</option>
                </Form.Select>
              </Form.Group>
              <FloatingLabel
                controlId="floatingTextarea"
                label="Comments"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </FloatingLabel>

              <div className="mb-3">
                <Button disabled={loadingCreateReview} type="submit">
                  Submit
                </Button>
                {loadingCreateReview && <LoadingBox></LoadingBox>}
              </div>
            </form>
          ) : (
            <MessageBox>
              Please{' '}
              <Link to={`/signin?redirect=/product/${product.slug}`}>
                Sign In
              </Link>{' '}
              to write a review
            </MessageBox>
          )}
        </div>
      </div>
      </div>
      </Col> */}


      </Row>
   
       </div>
      
    </Container>
  );
}
export default ProductScreen;
