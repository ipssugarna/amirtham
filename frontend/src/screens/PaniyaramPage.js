import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "../screens/Palmcake.css"
import { CiAlarmOn} from "react-icons/ci";
import { GiCookingPot } from 'react-icons/gi';
import kool2 from  '../../src/images/panankai3.jpeg'

import "../screens/Paniyarampage.css";
import { FaUser } from 'react-icons/fa';


const PaniyaramPage = () => {
  return(
    <Container style={{ fontFamily: "'Mogra', cursive"}}>
      <Row>
        <h1 style={{marginTop:'60px',marginBottom:'10px'}}></h1>
      </Row>
      <div class="container">
  <div class="row">
    <div class="col">
                      <div className="cake_hovor">
                         
                          <img  src={kool2} alt="Avatar" className="paniyaram_img"/>

                  </div><br></br>
                  <br></br>
    </div>
    <div class="col">
      <br></br>
      <br></br>
    <div class="row">
    <h1 className='paniyaram-head'>
    Palm Pulp Paniyaram
    </h1>
    {/* <hr style={{width:'460px'}}></hr> */}
    <div class="row" style={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.1)' }}>
  <Row className="pad-0 d-flex flex-wrap recipe-inner-icon-wrapper" style={{ marginTop: '-30px' }}>
    <Col md={4} className="single-tile">
      <CiAlarmOn style={{ width: '80px', height: '160px', color: 'teal' }} />
      <p className="detail-value"  style={{fontWeight:'normal'}}>
        30
        <span className="change_t_type1">
          Minutes
        </span>
      </p>
      <p className="detail-title">
        Preparation Time
      </p>
    </Col>
    <Col md={4} className="single-tile">
      <GiCookingPot style={{ width: '80px', height: '160px', color: 'teal' }} />
      <p className="detail-value" style={{fontWeight:'normal'}}>
        30
        <span className="change_t_type3">
          Minutes
        </span>
      </p>
      <p className="detail-title">
        Cooking Time
      </p>
    </Col>
    <Col md={4} className="single-tile">
      <FaUser style={{ width: '50px', height: '110px', color: 'teal', marginTop: '35px' }} />
      <p className="detail-value" style={{ marginTop: '25px',fontWeight:'normal'}} >
        10
      </p>
      <p className="detail-title" >
        Serving
      </p>
    </Col>
  </Row>
</div>

   
  </div>
    </div>
   
  </div>
  
</div>
     <div className="row">
      <div className="col-xl-6 col-md-12 col-12"  >
        <h2 className="recipe-inner-second-title" style={{marginLeft:'130px',fontSize:'35px',color:'teal',fontWeight:'bolder'}}>You will need</h2><hr style={{width:'200px',marginLeft:'130px'}}></hr><br></br>
        <ul className="ingredient-list" style={{ marginLeft: '130px', fontSize: '20px', fontWeight: 'bold' }}>
  <li>Palmyra pulp 750ml (3 Palmyra Fruits)</li>
  <br /> {/* Add line spacing here */}
  <li>Steamed flour – 600g</li>
  <br /> {/* Add line spacing here */}
  <li>Sugar – 300g</li>
  <br /> {/* Add line spacing here */}
  <li>Water – As you want</li>
  <br /> {/* Add line spacing here */}
  <li>Cooking oil – As you want</li>
  <br /> {/* Add line spacing here */}
</ul>


      </div>
      <div className="col-xl-6 col-md-12 col-12">
        <div className="col-12">
                  <h2 className="recipe-inner-second-title" style={{fontSize:'35px',color:'teal',fontWeight:'bolder'}}>Let’s make it</h2><hr style={{width:'200px'}}></hr><br></br>

        </div> 
        <div style={{fontSize:'20px', fontWeight:'bold'}}>
        <div className="step-wrapper col-12 d-flex flex-wrap pad-0">
          <div className="col-4 step-no" style={{fontWeight:'normal'}}>Step 1</div>
          <div className="col-8 step-details">
          Get ready with the steamed flour and sugar.
          </div>
        </div>
        <br></br>
        <div className="step-wrapper col-12 d-flex flex-wrap pad-0">
          <div className="col-4 step-no" style={{fontWeight:'normal'}}>Step 2</div>
          <div className="col-8 step-details">
          Cook the palmyra juice under medium flame for about 10 minutes. Stir frequently to avoid burning.        </div>
        <br></br>
        </div>
        <div className="step-wrapper col-12 d-flex flex-wrap pad-0">
          <div className="col-4 step-no" style={{fontWeight:'normal'}}>Step 3</div>
          <div className="col-8 step-details">Add sugar and cook again under medium flame for about 3 minutes.</div>
        </div>
                <br></br>

        <div className="step-wrapper col-12 d-flex flex-wrap pad-0">
          <div className="col-4 step-no" style={{fontWeight:'normal'}}>Step 4</div>
          <div className="col-8 step-details">Let the cooked palmyra juice cools down to room temperature.</div>
        </div>
                <br></br>

         <div className="step-wrapper col-12 d-flex flex-wrap pad-0">
          <div className="col-4 step-no" style={{fontWeight:'normal'}}>Step 5</div>
          <div className="col-8 step-details"> Now, add the steamed flour and mix everything well until totally dissolved.</div>
        </div>
                <br></br>

         <div className="step-wrapper col-12 d-flex flex-wrap pad-0">
          <div className="col-4 step-no" style={{fontWeight:'normal'}}>Step 6</div>
          <div className="col-8 step-details">Heat the oil in a deep frying pan. Take small portions of the batter and fry them as shown in the picture below.</div>
        </div>
                <br></br>

         <div className="step-wrapper col-12 d-flex flex-wrap pad-0">
          <div className="col-4 step-no" style={{fontWeight:'normal'}}>Step 7</div>
          <div className="col-8 step-details">Fry them until the balls turn to golden.</div>
        </div>
                <br></br>

        
        
        </div>


        </div>
      </div>
        <p style={{marginBottom:'50px',marginTop:'10px',marginLeft:'130px'}} > 
    Serve and enjoy this delicious Sri Lankan snack. If you want to feel its real taste, eat once the balls totally come to the room temperature, at least 3 hours after you fried.
So, what do you think about this panangai paniyaram snack? I hope you liked this unique Sri Lankan short-eat recipe. Don’t miss this tasty snack.</p>
   

    </Container>




 );


};

export default PaniyaramPage;
