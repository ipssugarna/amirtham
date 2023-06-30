

import './App.css';

import { Container, Row, Col } from 'react-bootstrap';

function ContactScreen(){

        return (
         <div>
          <div className="container-xxl py-5">
      <Container>
        <div className="text-center " >
          <h5 className="  text-center " style={{marginTop:'40px',color:'teal',fontSize:'23px'}}>Contact Us</h5>
          <h1 className="mb-5" style={{fontSize:'30px',fontWeight:'bold'}}>Contact For Any Query</h1>
        </div>
        <Row className="g-4">
          <Col md={12}>
            <Row className="gy-4">
              <Col md={4}>
                <h5 className="section-title ff-secondary fw-normal text-start " style={{color:'teal',fontSize:'23px'}}>Address</h5>
                <p  style={{fontSize:'23px',fontWeight:'normal'}}>Rasavin Road , Jaffna , Srilanka</p>
              </Col>
              <Col md={4}>
                <h5 className="section-title ff-secondary fw-normal text-start " style={{color:'teal',fontSize:'23px'}}>Call</h5>
                <p style={{fontSize:'23px',fontWeight:'normal'}}>+94 77 123 4567</p> 
              </Col>
              <Col md={4}>
                <h5 className="section-title ff-secondary fw-normal text-start " style={{color:'teal',fontSize:'23px'}} >Email</h5>
                <p style={{fontSize:'23px',fontWeight:'normal'}}>amirtham@gmail.com</p>
              </Col>
            </Row>
          </Col>
          <Col md={6} className="wow fadeIn" data-wow-delay="0.1s">
  <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31129.715776570207!2d79.98411064701705!3d9.661630682056005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae29e70b7bb2b2b%3A0x49c32c91f51a8472!2sJaffna%2C%20Sri%20Lanka!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder="0" style={{ minHeight: '350px', border: '0' }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
</Col>

          <Col md={6}>
            <div className="wow fadeInUp" data-wow-delay="0.2s">
              <form>
                <Row className="g-3">
                  <Col md={6}>
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '150px' }}></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <button     className="button-hover btn btn-primary  " style={{backgroundColor:'teal',marginLeft:'250px',color:'white',border:'none',width:'130px'}} type="submit">Send Message</button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
            </div>
          );
        };
        
export default ContactScreen;