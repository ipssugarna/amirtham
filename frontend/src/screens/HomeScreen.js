import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import palm from "../palm.png";
import { BsArrowRight } from "react-icons/bs";
import { FaEye, FaPhoneAlt } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import hd from '../images/hd.jpeg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Parallax } from 'react-parallax';
import bg from '../images/hd2.jpeg';
import service from '../../src/images/service.jpeg';
import puddu from '../../src/images/puddu.jpeg'
import { Carousel, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'wow.js/css/libs/animate.css';

import palmImage from '../../src/palm.png';
import bot from '../../src/bot.webp';
import kool from '../../src/images/kool.jpeg';
import cakeB from '../../src/images/cakeB.jpeg';
import paniyaram from '../../src/images/paniyaram.jpeg';
import bot1 from '../../src/bot1.webp';
import Banner1 from '../../src/images/Banner1.png'
import Banner2 from '../../src/images/Banner2.png'
import Banner3 from '../../src/images/Banner3.png'
import Banner4 from '../../src/images/Banner4.png'
import ca1 from '../../src/ca1.jpeg'
import fru1 from '../../src/fru1.jpeg'
import bg3 from '../../src/bg3.png'
import bg4 from '../../src/bg4.jpeg'

import tree1 from '../../src/tree1.jpeg'

import './App.css';


const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};







function HomeScreen() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []);
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);


  return (
    <div>
      <Helmet>
        <title>Amirtham paste</title>

      </Helmet>

      {/* <Container> */}

      {/* <div style={{backgroundColor:"Orange",marginLeft:'-100px',marginRight:'-62px',alignItems:'center'}}></div> */}
       
            <Carousel>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src={ca1}
                  alt="Second slide"
                  style={{ maxHeight: '800px', maxWidth: '2000px' }} fluid

                />


{/* <Carousel.Caption className="caption-animation caption-box" style={{marginLeft:'710px'}}> */}
                  {/* <h4 style={{ fontWeight: 'bold',paddingBottom:'-5px', fontSize: '20px' }}>
                    Amirtham - Palm pulp    </h4>  <p style={{textAlign: 'center' , width: '500px', marginLeft: '100px', marginTop: '-15px', fontSize: '15px' }}>
                    <br />Palmyra paste is a good source of essential nutrients such as vitamins, minerals, and antioxidants, which contribute to overall health and well-being</p>
                  <button
                    onClick={() => window.location.href = '/product'}
                    style={{
                      backgroundColor: 'teal',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      fontSize: '16px',
                      width: '130px',
                      marginLeft: '-10px',
                      marginBottom: '150px',
                    }}
                    onMouseOver={(e) => { e.target.style.backgroundColor = '#FFA500'; }}
                    onMouseOut={(e) => { e.target.style.backgroundColor = 'teal'; }}
                  >
                    Shop Now
                  </button> */}
                {/* </Carousel.Caption> */}
                <Carousel.Caption className="caption-animation caption-box" >
                  <h4 style={{ fontWeight: 'bold',paddingBottom:'-5px', fontSize: '35px' }}>
                    Amirtham - Palm pulp    </h4>  <p style={{textAlign: 'justify' , width: '500px', marginTop: '-15px', fontSize: '20px',fontWeight:'normal',marginLeft:'50px' }}>
                    <br />Palmyra fruit, also known as Palmyra palm or toddy palm, yields a nutritious paste rich in vitamins, minerals, and antioxidants. Consuming this paste promotes overall health and well-being by providing essential nutrients for the body's optimal functioning.</p>
                  <button
                    onClick={() => window.location.href = '/product'}
                    style={{
                      backgroundColor: 'teal',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      fontSize: '16px',
                      width: '130px',
                      marginLeft: '-10px',
                      marginBottom: '150px',
                    }}
                    onMouseOver={(e) => { e.target.style.backgroundColor = '#FFA500'; }}
                    onMouseOut={(e) => { e.target.style.backgroundColor = 'teal'; }}
                  >
                    Shop Now
                  </button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src={bg4}
                  alt="Second slide"
                  style={{ maxHeight: '800px', maxWidth: '2000px' }}

                />

<Carousel.Caption className="caption-animation caption-box" >
                  <h4 style={{ fontWeight: 'bold',paddingBottom:'-5px', fontSize: '35px' }}>
                    Amirtham - Palm pulp    </h4>  <p style={{textAlign: 'justify' , width: '500px', marginTop: '-15px', fontSize: '20px',fontWeight:'normal',marginLeft:'50px' }}>
                    <br />Palmyra fruit, also known as Palmyra palm or toddy palm, yields a nutritious paste rich in vitamins, minerals, and antioxidants. Consuming this paste promotes overall health and well-being by providing essential nutrients for the body's optimal functioning.</p>
                  <button
                    onClick={() => window.location.href = '/product'}
                    style={{
                      backgroundColor: 'teal',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      fontSize: '16px',
                      width: '130px',
                      marginLeft: '-10px',
                      marginBottom: '150px',
                    }}
                    onMouseOver={(e) => { e.target.style.backgroundColor = '#FFA500'; }}
                    onMouseOut={(e) => { e.target.style.backgroundColor = 'teal'; }}
                  >
                    Shop Now
                  </button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={fru1}
                  alt="Third slide"

                  style={{ maxHeight: '800px', maxWidth: '2000px' }}
                />


<Carousel.Caption className="caption-animation caption-box" >
                  <h4 style={{ fontWeight: 'bold',paddingBottom:'-5px', fontSize: '35px' }}>
                    Amirtham - Palm pulp    </h4>  <p style={{textAlign: 'justify' , width: '500px', marginTop: '-15px', fontSize: '20px',fontWeight:'normal',marginLeft:'50px' }}>
                    <br />Palmyra fruit, also known as Palmyra palm or toddy palm, yields a nutritious paste rich in vitamins, minerals, and antioxidants. Consuming this paste promotes overall health and well-being by providing essential nutrients for the body's optimal functioning.</p>
                  <button
                    onClick={() => window.location.href = '/product'}
                    style={{
                      backgroundColor: 'teal',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      fontSize: '16px',
                      width: '130px',
                      marginLeft: '-10px',
                      marginBottom: '150px',
                    }}
                    onMouseOver={(e) => { e.target.style.backgroundColor = '#FFA500'; }}
                    onMouseOut={(e) => { e.target.style.backgroundColor = 'teal'; }}
                  >
                    Shop Now
                  </button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>






      <Container>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item rounded pt-3 border shadow"  >
                <div className="p-4" >
                  <i className="fas fa-3x fa-seedling mb-4" style={{ color: 'teal' }} ></i>
                  <h5 style={{ fontWeight: 'bold', color: 'teal', fontSize: '20px' }}>Rich in Nutrients</h5>
                  <p style={{ fontWeight: 'normal', fontSize: '16px' }}>
                    {/* Palmyra paste is nutrient-rich, containing vitamins, minerals, and antioxidants like B vitamins, iron, calcium, and potassium, supporting overall health */}
                    Supports overall health with vitamins, minerals, and antioxidants
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item rounded pt-3 border shadow" >
                <div className="p-4">
                  <i className="fas fa-3x fa-leaf  mb-4" style={{ color: 'teal' }}></i>
                  <h5 style={{ fontWeight: 'bold', color: 'teal', fontSize: '20px' }}>Natural Sweetener</h5>
                  <p style={{ fontWeight: 'normal', fontSize: '16px' }} >
                    {/* Palmyra paste is a natural, low-glycemic sweetener, suitable for diabetes management and reducing sugar consumption */}
                    Suitable for diabetes management, reduces sugar consumption
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item rounded pt-3 border shadow"  >
                <div className="p-4">
                  <i className="fas fa-3x fa-bolt  mb-4 " style={{ color: 'teal' }}></i>
                  <h5 style={{ fontWeight: 'bolder', fontSize: '20px', color: 'teal' }}>Boosts Energy</h5>
                  <p style={{ fontWeight: 'normal', fontSize: '16px' }}>
                    It contains natural sugars that provide a quick and sustained energy boost
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item rounded pt-3 border shadow"  >
                <div className="p-4">
                  <i className="fas fa-3x fa-stethoscope  mb-4 " style={{ color: 'teal' }}></i>
                  <h5 style={{ fontWeight: 'bold', color: 'teal', fontSize: '20px' }}>Digestive Health</h5>
                  <p style={{ fontWeight: 'normal', fontSize: '16px' }}>
                    High fiber aids digestion, relieves constipation, supports a healthy gut
                    {/* Palmyra paste is high in fiber, aiding digestion, relieving constipation, and supporting a healthy gut                  </p> */}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* services start */}
      <div className="container-xxl py-6" >
        <div className="container">
          <Row className="g-5">
            <Col lg={6} className="wow fadeInUp" data-wow-delay="0.1s">
              {/* <p className="text-black text-uppercase mb-2"> Our Services</p> */}
              <h1 className="display-6 mb-4" style={{ fontWeight: 'bold', color: 'teal', fontSize: '30px', textAlign: 'left' }}> Our Services</h1><hr style={{ width: '130px', marginTop: '-20px' }}></hr>
              <p style={{ fontSize: '22px', fontWeight: 'bold' }}>Welcome to Palmyra Paste Sales, your one-stop destination for quality products and recipe ideas. Enjoy convenient online ordering and doorstep delivery, supported by our excellent customer service.</p>
              <Row className="gy-5 gx-4" style={{ fontSize: '16px' }}>
                <Col sm={6} className="wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex align-items-center mb-1" style={{ fontSize: '16px' }}>
                    <div className="flex-shrink-0 btn-square  rounded-circle me-3">
                      <i className="fas fa-shopping-cart text-teal" style={{ color: 'teal' }}></i>
                    </div>
                    <h5 className="mb-0 ">Palmyra Paste Sales</h5>
                  </div>
                </Col>
                <Col sm={6} className="wow fadeIn" data-wow-delay="0.2s">
                  <div className="d-flex align-items-center mb-1" style={{ fontSize: '16px' }}>
                    <div className="flex-shrink-0 btn-square rounded-circle me-3">
                      <i className="fas fa-headset text-teal" style={{ color: 'teal' }}></i>
                    </div>

                    <h5 className="mb-0">Customer Support</h5>
                  </div>
                </Col>
                <Col sm={6} className="wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex align-items-center mb-1" style={{ fontSize: '16px' }}>
                    <div className="flex-shrink-0 btn-square  rounded-circle me-3">
                      <i className="fas fa-certificate text-teal" style={{ color: 'teal' }}></i>
                    </div>
                    <h5 className="mb-0 ">Quality Products</h5>
                  </div>
                </Col>
                <Col sm={6} className="wow fadeIn" data-wow-delay="0.2s">
                  <div className="d-flex align-items-center mb-1" style={{ fontSize: '16px' }}>
                    <div className="flex-shrink-0 btn-square rounded-circle me-3">
                      <i className="fas fa-bread-slice text-teal" style={{ color: 'teal' }}></i>
                    </div>

                    <h5 className="mb-0">Recipe Ideas</h5>
                  </div>
                </Col>
                <Col sm={6} className="wow fadeIn" data-wow-delay="0.3s">
                  <div className="d-flex align-items-center mb-1" style={{ fontSize: '16px' }}>
                    <div className="flex-shrink-0 btn-square  rounded-circle me-3">
                      <i className="fa fa-cart-plus text-teal" style={{ color: 'teal' }}></i>
                    </div>
                    <h5 className="mb-0">Online Order</h5>
                  </div>
                </Col>
                <Col sm={6} className="wow fadeIn" data-wow-delay="0.4s">
                  <div className="d-flex align-items-center mb-1" style={{ fontSize: '16px' }}>
                    <div className="flex-shrink-0 btn-square  rounded-circle me-3">
                      <i className="fa fa-truck text-teal" style={{ color: 'teal' }}></i>
                    </div>
                    <h5 className="mb-0">Home Delivery</h5>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={6} className="wow fadeInUp" data-wow-delay="0.5s">
              <Row className="img-twice position-relative h-100">
                <div >
                  <img
                    src={service}
                    alt="Product"
                    style={{ height: '450px', width: '600px' }}
                  />
                </div>
              </Row>
            </Col>

          </Row>
        </div>
      </div>
      {/* end services */}
      <br></br>
      <br></br>
      <div className=" text-light rounded-bottom  pt-2  mt-0 wow fadeInUp" data-wow-delay="0.1s" style={{ marginTop: '-240px' }} >
        <Row className="g-2 align-items-center" >
          <Col lg={6} style={{ paddingLeft: '40px', marginTop: '-3px' }}>
            <img
              className="d-block w-100"
              src={Banner1}
              alt="Second slide"
              style={{ marginLeft: '-15px', width: '80px' }}
            // style={{maxHeight: '740px', maxWidth: '1600px' }}

            />
            {/* <h1 className="display-4 text-light mb-0">Natural Palmyra Paste Available</h1> */}
          </Col>
          <Col lg={6} className="text-lg-end" style={{ marginTop: '-3px' }}>
            <img
              className="d-block w-100"
              src={Banner2}
              alt="Second slide"
              style={{ height: "310px", width: '70px', marginRight: '150px', paddingRight: '40px' }}

            />
          </Col>
        </Row>
      </div>

      <br></br>
      {/* <h1 className="display-6 mb-4">Palm Pulp Recipes</h1> */}
      <h1 className="display-6 mb-4" style={{ fontWeight: 'bold', color: 'teal', fontSize: '30px', textAlign: 'left',marginLeft:'20px' }}>Palm Pulp Recipes</h1><hr style={{ width: '130px', marginTop: '-20px',marginLeft:'20px' }}></hr>
      <br></br>

      {/* <h1 className="display-6 mb-4" style={{ fontWeight: 'bolder', color: 'teal', fontSize: '26px'}}>Palm Pulp Recipes</h1><hr style={{ width: '200px', marginLeft: '550px', marginTop: '-20px' }}></hr><br></br> */}

      <div className="container text-center">
        <div className="row">

          <div className="col mb-6">

            <div
              className="card"
              style={{ width: '25rem', height: '300px', position: 'relative' }}
            >
              <img src={paniyaram} className="card-img-top" alt="..." />
              <div
                className="card-body"
                style={{
                  position: 'absolute',
                  bottom: '0',
                  height: '130px',
                  left: '0',
                  right: '0',
                  zIndex: '1',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  opacity: '0',
                  transition: 'opacity 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
              >
                <h5 className="card-title" style={{ fontSize: '20px', color: 'teal' }}>Paniyaram</h5><hr style={{ width: '100px', marginLeft: '130px', marginTop: '-5px' }}></hr>
                <p className="card-text" style={{ fontSize: '16px', color: 'black', fontSize: '16px' }}>
                  Steps to make palm paniyaram
                </p>
                <Link to="/paniyaram" style={{ paddingTop: '-10px', marginTop: '-7px', color: 'black' }}>
                  <FontAwesomeIcon icon={faEye} />
                </Link>
              </div>
            </div>
          </div>

          <div className="col mb-6">
            <div
              className="card"
              style={{ width: '25rem', height: '300px', position: 'relative' }}
            >
              <img src={cakeB} className="card-img-top" alt="..." />
              <div
                className="card-body"
                style={{
                  position: 'absolute',
                  bottom: '0',
                  height: '130px',
                  left: '0',
                  right: '0',
                  zIndex: '1',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  opacity: '0',
                  transition: 'opacity 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
              >
                <h5 className="card-title" style={{ fontSize: '20px', color: 'teal' }}>Cake</h5><hr style={{ width: '100px', marginLeft: '130px', marginTop: '-5px' }}></hr>
                <p className="card-text" style={{ fontSize: '16px', color: 'black', fontSize: '16px' }}>
                  Steps to make palm cake
                </p>
                <Link to="/cake" style={{ paddingTop: '-10px', marginTop: '-7px', color: 'black' }}>
                  <FontAwesomeIcon icon={faEye} />
                </Link>
              </div>
            </div>
          </div>
          <div className="col mb-6">
            <div
              className="card"
              style={{ width: '25rem', height: '300px', position: 'relative' }}
            >
              <img src={kool} className="card-img-top" alt="..." />
              <div
                className="card-body"
                style={{
                  position: 'absolute',
                  bottom: '0',
                  height: '130px',
                  left: '0',
                  right: '0',
                  zIndex: '1',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  opacity: '0',
                  transition: 'opacity 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
              >
                <h5 className="card-title" style={{ fontSize: '20px', color: 'teal' }}>Milk Puddu</h5><hr style={{ width: '100px', marginLeft: '130px', marginTop: '-5px' }}></hr>
                <p className="card-text" style={{ fontSize: '16px', color: 'black', fontSize: '16px' }}>
                  Steps to make palm milk puddu
                </p>

                <Link to="/puddu" style={{ paddingTop: '-10px', marginTop: '-7px', color: 'black' }}>
                  <FontAwesomeIcon icon={faEye} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br></br>


    </Container >

     </div >
  );
}
export default HomeScreen;


