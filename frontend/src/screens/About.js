import React from "react";
import img2 from '../img2.webp';
import { Col } from 'react-bootstrap';
import './App.css'

function About(){

    return (
        <div>
            <div id="about">
                <div className="container  py-5" style={{height:'720px'}}>
                    <div className="row" style={{marginTop:'40px'}}>
                        <div className="col-md-6">
                        <img src={img2} alt="About" className="w-78 mt-5 opacity-minimized"         style={{ borderRadius: '10px' }}
/>

                        </div>
                        <div className="col-md-6" style={{marginTop:'40px',alignItems:'center'}} >
                            {/* <h3 className="fs-5 mb-0">About Us</h3> */}
                            <h1 className="display-6 mb-2" style={{fontSize:'40px',color:'black'}}>Who <b> we </b> are </h1>
                            {/* <hr className="w-70"/> */}
                            <p className="lead mb-4" style={{ fontSize: '20px', marginLeft: '70px', width: '70%', color: 'black', textAlign: 'justify' }}>
                              Amirtham, which focuses on providing 100% natural palmyra pulp. Your commitment to offering a high-quality and pure product is commendable. Palmyra pulp, with its numerous benefits and applications, has gained recognition for its nutritional value and versatility.Palmyra fruit, also known as Palmyra palm or toddy palm, yields a nutritious paste rich in vitamins, minerals, and antioxidants. Consuming this paste promotes overall health and well-being by providing essential nutrients for the body's optimal functioning.
                            </p>
                      
                        </div>
                    </div>

                </div>
            </div>
     {/* <div className="container-xxl pt-5 pb-3 text-center" style={{marginLeft:'200px'}}>
  <div className="container">
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h1 className="mb-5" style={{marginLeft:'-350px'}}>Our Team Members</h1>
    </div>
    <div className="row g-4">
      <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.1s">
        <div className="team-item text-center rounded overflow-hidden">
          <div className="rounded-circle overflow-hidden m-4">
            <img className="img-fluid" src={img2} alt="" />
          </div>
          <h5 className="mb-0">Full Name</h5>
          <small>Designation</small>
          <div className="d-flex justify-content-center mt-3">
            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </Col>
      <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.3s">
        <div className="team-item text-center rounded overflow-hidden">
          <div className="rounded-circle overflow-hidden m-4">
            <img className="img-fluid" src={img2} alt="" />
          </div>
          <h5 className="mb-0">Full Name</h5>
          <small>Designation</small>
          <div className="d-flex justify-content-center mt-3">
            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </Col>
      <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.7s">
        <div className="team-item text-center rounded overflow-hidden">
          <div className="rounded-circle overflow-hidden m-4">
            <img className="img-fluid" src={img2} alt="" />
          </div>
          <h5 className="mb-0">Full Name</h5>
          <small>Designation</small>
          <div className="d-flex justify-content-center mt-3">
            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </Col>
    </div>
  </div>
</div> */}

            </div>
    );
}
export default About;