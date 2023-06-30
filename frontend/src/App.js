import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screens/HomeScreen';
//import contactScreen from './screens/ContactScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';

import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
//import Aboutus from './screens/aboutus';
import SigninScreen from './screens/SigninScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SignupScreen from './screens/SignupScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import PaniyaramPage from './screens/PaniyaramPage';
import Palmcake from './screens/Palmcake';
import Palmpuddu from './screens/Palmpuddu';
//import Button from 'react-bootstrap/Button';
import { getError } from './utils';
import axios from 'axios';
// import SearchBox frimport { Link } from 'react-router-dom';
import SearchScreen from './screens/SearchScreen';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardScreen from './screens/DashboardScreen';
// import ContactScreen from './screens/ContactScreen';
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import MapScreen from './screens/MapScreen';
import ForgetPasswordScreen from './screens/ForgetPasswordScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import ContactScreen from './screens/ContactScreen';
//import LinkButton from './link';
import { BsPersonCircle} from "react-icons/bs";
// import { Link } from 'react-router-dom';
// import { Navbar, Nav, NavDropdown, Badge } from 'react-bootstrap';
import "./App.css";
import Product from './screens/product';
import logod from './logod.jpeg';
import About from './screens/About';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
// import { Search } from '@material-ui/icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [scrollHeight, setScrollHeight] = useState(0);

  const navbarStyle = {
    backgroundColor: 'teal',
    height: scrollHeight > 0 ? '65px' : '53px', // Increase height by 12px when scrolling down
  };

  // const textCarousel = document.getElementById('text-carousel');
  // const textList = ['Experience the rich and authentic taste of Palmyra paste, right at your doorstep.', 'Bring home the flavors of the tropics with Palmyra paste.', 'Indulge in the goodness of nature with our all-natural Palmyra paste.', 'Transform your ordinary dishes into extraordinary creations with Palmyra paste.', 'The perfect blend of tradition and taste - Palmyra paste.', 'Make every meal a celebration with the authentic taste of Palmyra paste.', 'Experience the essence of Palmyra in every jar of our premium paste.'];
  // let index = 0;

  // function updateText() {
  //   textCarousel.textContent = textList[index];
  //   index = (index + 1) % textList.length;
  // }

  // setInterval(updateText, 3000);
  
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { fullBox, cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  const Container = styled.div`
    height:60px;
  `

  const Wrapper = styled.div`
    padding:6px 5px;
    display: flex;
    align-items:center;
    justify-content: space-between;
  `
  const Left = styled.div`
  flex:1;
  display:flex;
  `
  const Right = styled.div`
  flex:1;
  display:flex;
  align-items: center;
  justify-content: flex-end;

  `
  const MenuItem = styled.div`
  font-size:14px;
  cursor:pointer;
  margin-left: 35px;
  `



  const Center = styled.div`
  flex:1;
  // text-align:center;
  display:flex;

  `
 const Logo = styled.h1`
 font-weight: bold;
 `

 const RightAlignedContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: flex-end;
 

`;

const DropdownLink = styled(Link)`
 font-size: 18px;
 margin-right: 20px;
 color: black;
`;

const ShoppingCartLink = styled(Link)`
 font-size: 18px;
 margin-right: 20px;
 color: black;
`;

const ShoppingCartIcon = styled.i`
 color: black;
`;

useEffect(() => {
  const handleScroll = () => {
    setScrollHeight(window.pageYOffset);
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);
  // useEffect(() => {
  //   const scrollFunction = () => {
  //     if (
  //       document.body.scrollTop > 3 ||
  //       document.documentElement.scrollTop > 3
  //     ) {
  //       document.getElementById('navbar').style.top = '0';
  //     } else {
  //       document.getElementById('navbar').style.top = '-140px';
  //     }
  //   };

  //   window.onscroll = scrollFunction;

  //   return () => {
  //     window.onscroll = null;
  //   };
  // }, []);
//   useEffect(() => {
//   const scrollFunction = () => {
//     const navbar = document.getElementById('navbar');
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
//     if (scrollTop > 3) {
//       navbar.classList.add('show');
//     } else {
//       navbar.classList.remove('show');
//     }
//   };

//   window.addEventListener('scroll', scrollFunction);

//   return () => {
//     window.removeEventListener('scroll', scrollFunction);
//   };
// }, []);

  // useEffect(() => {
  //   const scrollFunction = () => {
  //     if (
  //       document.body.scrollTop > 3 ||
  //       document.documentElement.scrollTop > 3
  //     ) {
  //       document.getElementById('navbar').style.top = '0';
  //     } else {
  //       document.getElementById('navbar').style.top = '-140px';
  //     }
  //   };

  //   window.onscroll = scrollFunction;

  //   return () => {
  //     window.onscroll = null;
  //   };
  // }, []);
  return (
    <BrowserRouter>
      {/* <div
       className={
          sidebarIsOpen
            ? fullBox
              ? 'site-container active-cont d-flex flex-column full-box'
              : 'site-container active-cont d-flex flex-column'
            : fullBox
            ? 'site-container d-flex flex-column full-box'
            : 'site-container d-flex flex-column'
        } 
      >
     <ToastContainer position="bottom-center" limit={1} /> 
</div>  */}

       
  
    
<div style={{ position: 'fixed', top: '0', left: '0', width: '100%', zIndex: '9999' }}>

<header className="navbar">

  <div style={{ backgroundColor: 'black', height: '100px' }}>
 <Navbar
  id="navbar"
  className={scrollHeight > 0 ? 'scrolled' : ''}
  style={{ backgroundColor: 'teal', height: scrollHeight > 0 ? '65px' : '53px' }}
  variant="dark"
  expand="md"
  fixed="top"
>
    {/* <Navbar id="navbar" style={{ backgroundColor: 'teal', height: '53px',navbarStyle }} variant="dark" fluid> */}
      <Container className="container-md">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Link to="/" className="navbar-brand ms-auto">
          <img src={logod} height="50" width="100" alt="logo" />
        </Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ fontSize:'16px' }}>
            <Nav className="ml-auto justify-content-center topnav" >
           
  <Link
  to="/"
  className="nav-link me-4"
  style={{  color: 'white' }}
  activeClassName="active-link"
>
  Home
</Link>



              <Link to="/product" className="nav-link me-4" style={{ color: 'white' }}    activeClassName="active-link"    

>
                Products
              </Link>
              <Link to="/about" className="nav-link me-4" style={{   color: 'white'  }}  activeClassName="active-link"   
>
                About
              </Link>
              <Link to="/contact" className="nav-link me-4" style={{  color: 'white'  }}  activeClassName="active-link"   
>
                Contact
              </Link>
            </Nav>


            <RightAlignedContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="basic-nav-dropdown" style={{ marginRight: '20px', color: 'black' }}>
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>User Profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/orderhistory">
                    <NavDropdown.Item>Order History</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <Link className="dropdown-item" to="#signout" onClick={signoutHandler} style={{  color: 'black' }}>
                    Sign Out
                  </Link>
                </NavDropdown>
              ) : (
                <DropdownLink to="/signin">
                  <BsPersonCircle color="white" size={16} />
                </DropdownLink>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="admin-nav-dropdown" style={{  color: 'black' }}>
                  <LinkContainer to="/admin/dashboard">
                    <NavDropdown.Item>Dashboard</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/products">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orders">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/users">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
              <ShoppingCartLink to="/cart">
                <ShoppingCartIcon className="fa fa-shopping-cart" aria-hidden="true" style={{ color: 'white' }} />
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
              </ShoppingCartLink>
            </RightAlignedContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
</header>
</div>
    {/* <div class="container-xxl position-relative p-0">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                <a href="" class="navbar-brand p-0">
                    <h1 class="text-primary m-0"><i class="fa fa-utensils me-3"></i>Restoran</h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0 pe-4">
                        <a href="index.html" class="nav-item nav-link active">Home</a>
                        <a href="about.html" class="nav-item nav-link">About</a>
                        <a href="service.html" class="nav-item nav-link">Service</a>
                        <a href="menu.html" class="nav-item nav-link">Menu</a>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu m-0">
                                <a href="booking.html" class="dropdown-item">Booking</a>
                                <a href="team.html" class="dropdown-item">Our Team</a>
                                <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                            </div>
                        </div>
                        <a href="contact.html" class="nav-item nav-link">Contact</a>
                    </div>
                    <a href="" class="btn btn-primary py-2 px-4">Book A Table</a>
                </div>
            </nav>

            <div class="container-xxl py-5 bg-dark hero-header mb-5">
                <div class="container my-5 py-5">
                    <div class="row align-items-center g-5">
                        <div class="col-lg-6 text-center text-lg-start">
                            <h1 class="display-3 text-white animated slideInLeft">Enjoy Our<br/>Delicious Meal</h1>
                            <p class="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <a href="" class="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Book A Table</a>
                        </div>
                        <div class="col-lg-6 text-center text-lg-end overflow-hidden">
                            <img class="img-fluid" src="img/hero.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    */}
    


        
        <main>
        
            <Routes>

              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
               <Route path="/contact" element={<ContactScreen/>} /> 
               <Route path="/About" element={<About/>} /> 
              <Route path="/product" element={<Product />} />
              <Route path="/search" element={<SearchScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route
                path="/forget-password"
                element={<ForgetPasswordScreen />}
              />
              <Route
                path="/reset-password/:token"
                element={<ResetPasswordScreen />}
              />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfileScreen />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/map"
                element={
                  <ProtectedRoute>
                    <MapScreen />
                  </ProtectedRoute>
                }
              />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route
                path="/order/:id"
                element={
                  <ProtectedRoute>
                    <OrderScreen />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/orderhistory"
                element={
                  <ProtectedRoute>
                    <OrderHistoryScreen />
                  </ProtectedRoute>
                }
              ></Route>
               
              <Route
                path="/shipping"
                element={<ShippingAddressScreen />}
              ></Route>
              <Route path="/payment" element={<PaymentMethodScreen />}></Route>
              <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <DashboardScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/orders"
                element={
                  <AdminRoute>
                    <OrderListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/users"
                element={
                  <AdminRoute>
                    <UserListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/products"
                element={
                  <AdminRoute>
                    <ProductListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/product/:id"
                element={
                  <AdminRoute>
                    <ProductEditScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/user/:id"
                element={
                  <AdminRoute>
                    <UserEditScreen />
                  </AdminRoute>
                }
              ></Route>       <Route path="/paniyaram" element={<PaniyaramPage />} />   
<Route path="/cake" element={<Palmcake />} />   
<Route path="/puddu" element={<Palmpuddu />} />   


<Route
        path="/"
        element={<HomeScreen />}
      />            </Routes>
        </main>


        <div className="container-fluid  text-light footer footer-container " style={{ height:'300px',backgroundColor:'teal'}}>
      <div className="container " >
        <div className="row g-1">
          <div className="col-lg-2 col-md-6 " >
            <h4 className="section-title ff-secondary text-start  fw-normal mb-4" style={{fontWeight:'normal',fontSize:'20px'}}>Company</h4>
            <img src={logod} height="70" width="130" alt="logo" />

          </div>
          <div className="col-lg-5 col-md-6" >
            <h4 className="section-title ff-secondary text-start fw-normal mb-4" style={{fontWeight:'normal',fontSize:'20px'}}>About</h4>
            <p className="mb-2" style={{fontSize:'15px',fontWeight:'normal'}}>We produce pure palmyra pulp, carefully extracted to preserve its natural goodness, nutrition, and unique flavor.</p>
            
          </div>
        
          <div className="col-lg-3 col-md-6" >
            <h4 className="section-title ff-secondary text-start fw-normal mb-4" style={{fontWeight:'normal',fontSize:'20px'}}>Quick Links</h4>
             <a  href="/" style={{fontSize:'15px',fontWeight:'normal'}}>Home</a><br></br>
             <a  href="/product"style={{fontSize:'15px',fontWeight:'normal'}}>Products</a><br></br>
             <a  href="/about"style={{fontSize:'15px',fontWeight:'normal'}}>About</a><br></br>
             <a  href="/contact"style={{fontSize:'15px',fontWeight:'normal'}}>Contact</a><br></br>

            
          </div>
          <div className="col-lg-2 col-md-6" >
            <h4 className="section-title ff-secondary text-start fw-normal mb-4" style={{fontWeight:'normal',fontSize:'20px'}}>Contact</h4>
            <p className="mb-2" style={{fontSize:'15px',fontWeight:'normal'}}><i className="fa fa-map-marker-alt me-3"></i>Rasavin Road , Jaffna , Srilanka</p>
            <p className="mb-2"style={{fontSize:'15px',fontWeight:'normal'}}><i className="fa fa-phone-alt me-3"></i>+94 77 123 4567</p>
            <p className="mb-2"style={{fontSize:'15px',fontWeight:'normal'}}><i className="fa fa-envelope me-3"></i>amirtham@gmail.com</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social  rounded-circle me-2" href="" style={{fontSize:'15px'}}><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social  rounded-circle me-2" href="" style={{fontSize:'15px'}}><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social  rounded-circle me-2" href="" style={{fontSize:'15px'}}><i className="fab fa-youtube"></i></a>
              <a className="btn btn-outline-light btn-social  rounded-circle me-2" href="" style={{fontSize:'15px'}}><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="container">
        <div className="copyright">
          <div className="row" >
          <a href="https://wa.me/94778722865" target="_blank" className="whatsapp_float">
      <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" /></a>

            <div className="col-md-12 text-center text-md-center  mb-md-0" style={{alignItems:'center'}}>
            &copy; 2023 Sales Product Inc. All Rights Reserved.
            </div>
          
          </div>
        </div>
      </div>
    </div>

        
{/* <div style={{backgroundColor:'orange'}} >
    
<a href="https://wa.me/94778722865" target="_blank" className="whatsapp_float">
      <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" /></a>


<div style={{ textAlign: 'center', backgroundColor: '#dcf0fa' }}>
  <p>&copy; 2023 Sales Product Inc. All Rights Reserved.</p>
</div> */}

  {/* </div> */}
      
    </BrowserRouter>
  );
}

export default App;
