import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import puddu from  '../../src/images/puddu.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import kool2 from  '../../src/images/kool2.jpeg'

import cakeB from  '../../src/images/cakeB.jpeg'
import cakee from '../../src/images/cakee.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "../screens/Palmcake.css"
import { BsClock } from 'react-icons/bs';
import { CiAlarmOn} from "react-icons/ci";
import { GiCookingPot } from 'react-icons/gi';
import { FaBirthdayCake } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

import { GiCakeSlice } from 'react-icons/gi';
import "../screens/Paniyarampage.css"

const Palmpuddu = () => {
  return (
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
    Palm Pulp Milk Puddu
    </h1>
    {/* <hr style={{width:'460px'}}></hr> */}
    <div className="row" style={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.1)' }}>
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
      <p className="detail-value"  style={{fontWeight:'normal'}}>
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
      <FaUser style={{ width: '50px', height: '110px', color: 'teal', marginTop: '25px' }} />
      <p className="detail-value" style={{ marginTop: '30px',fontWeight:'normal' }} >
        10
      </p>
      <p className="detail-title">
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
  <li>1 cup rice flour</li>
  <br /> {/* Add line spacing here */}
  <li>1/2 cup jaggery (or to taste)</li>
  <br /> {/* Add line spacing here */}
  <li>1/4 cup grated coconut</li>
  <br /> {/* Add line spacing here */}
  <li>1/4 teaspoon cardamom powder
</li>
  <br /> {/* Add line spacing here */}
  <li>A pinch of salt
</li>
  <br />
  <li>Water, as needed
</li>
  <br />
  <li>3/4 teaspoon of vanilla extract
</li>
  <br />
  <li>A pinch of salt
</li>
  <br />
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
          In a mixing bowl, combine the rice flour and palmyra pulp. Mix well to form a smooth batter. Adjust the consistency by adding water if needed. The batter should be pourable but not too thin.            </div>
        </div>
        <br></br>
        <div className="step-wrapper col-12 d-flex flex-wrap pad-0">
          <div className="col-4 step-no" style={{fontWeight:'normal'}}>Step 2</div>
          <div className="col-8 step-details">
          In a separate saucepan, dissolve the jaggery in a little water and heat it until the jaggery melts completely. Strain the jaggery syrup to remove any impurities.                </div>
        <br></br>
        </div>
        <div className="step-wrapper col-12 d-flex flex-wrap pad-0">
          <div className="col-4 step-no" style={{fontWeight:'normal'}}>Step 3</div>
          <div className="col-8 step-details">  Add the jaggery syrup to the palmyra pulp batter and mix well.</div>
        </div>
                <br></br>

        <div className="step-wrapper col-12 d-flex flex-wrap pad-0">
          <div className="col-4 step-no" style={{fontWeight:'normal'}}>Step 4</div>
          <div className="col-8 step-details"> Place the batter on the stove and cook it on medium heat, stirring continuously to avoid lumps and sticking to the bottom of the pan.</div>
        </div>
                <br></br>

         <div className="step-wrapper col-12 d-flex flex-wrap pad-0">
          <div className="col-4 step-no" style={{fontWeight:'normal'}}>Step 5</div>
          <div className="col-8 step-details">  As the batter cooks, it will start to thicken. Continue cooking until the mixture reaches a thick, pudding-like consistency. This should take approximately 10-15 minutes.        </div>
        </div>
                <br></br>

         <div className="step-wrapper col-12 d-flex flex-wrap pad-0">
          <div className="col-4 step-no" style={{fontWeight:'normal'}}>Step 6</div>
          <div className="col-8 step-details"> Add the grated coconut, cardamom powder, and a pinch of salt to the mixture. Stir well to combine all the ingredients.</div>
        </div>
                <br></br>

         <div className="step-wrapper col-12 d-flex flex-wrap pad-0">
          <div className="col-4 step-no" style={{fontWeight:'normal'}}>Step 7</div>
          <div className="col-8 step-details">Cook the mixture for an additional 2-3 minutes, allowing the flavors to meld together.</div>
        </div>
                <br></br>

                <div className="step-wrapper col-12 d-flex flex-wrap pad-0">
          <div className="col-4 step-no" style={{fontWeight:'normal'}}>Step 8</div>
          <div className="col-8 step-details"> Remove the pan from heat and let the pudding cool slightly.</div>
        </div>
                <br></br>
                <div className="step-wrapper col-12 d-flex flex-wrap pad-0">
          <div className="col-4 step-no" style={{fontWeight:'normal'}}>Step 9</div>
          <div className="col-8 step-details">Once the pudding has cooled down, you can transfer it to serving bowls or moulds.</div>
        </div>
                <br></br>
                <div className="step-wrapper col-12 d-flex flex-wrap pad-0">
          <div className="col-4 step-no" style={{fontWeight:'normal'}}>Step 10</div>
          <div className="col-8 step-details">Allow the pudding to cool completely and set in the refrigerator for a few hours.</div>
        </div>
                <br></br>
                <div className="step-wrapper col-12 d-flex flex-wrap pad-0">
          <div className="col-4 step-no" style={{fontWeight:'normal'}}>Step 11</div>
          <div className="col-8 step-details">  Once chilled and set, you can garnish the pudding with additional grated coconut, nuts, or a sprinkle of cardamom powder, if desired.</div>
        </div>
                <br></br>
                <div className="step-wrapper col-12 d-flex flex-wrap pad-0">
          <div className="col-4 step-no" style={{fontWeight:'normal'}}>Step 12</div>
          <div className="col-8 step-details"> Serve the palmyra pulp pudding (puddu) chilled as a delicious and refreshing dessert.</div>
        </div>
                <br></br>
        
        </div>


        </div>
      </div>
        {/* <p style={{marginBottom:'50px',marginTop:'10px',marginLeft:'130px'}} > 
        Enjoy your homemade palmyra pulp milk puddu!</p>
    */}

    </Container>

//     <div>
      


//       
//           <div className="box bg-light p-4">
//             <p className="h3">Step 4</p>
//             <p className="h6" style={{  fontSize: '20px'}}>

//             Place the batter on the stove and cook it on medium heat, stirring continuously to avoid lumps and sticking to the bottom of the pan.

// </p>
//           </div>
    
//           <div className="box bg-light p-4">
//             <p className="h3">Step 5</p>
//             <p className="h6" style={{  fontSize: '20px'}}>

//             As the batter cooks, it will start to thicken. Continue cooking until the mixture reaches a thick, pudding-like consistency. This should take approximately 10-15 minutes.            </p>   
//         </div>
  
//         <div className="box bg-light p-4">
//             <p className="h3">Step 6</p>
//             <p className="h6" style={{  fontSize: '20px'}}>

//             Add the grated coconut, cardamom powder, and a pinch of salt to the mixture. Stir well to combine all the ingredients.            </p>   
//         </div>
    
//         <div className="box bg-light p-4">
//             <p className="h3">Step 7</p>
//             <p className="h6" style={{  fontSize: '20px'}}>
//             Cook the mixture for an additional 2-3 minutes, allowing the flavors to meld together.

// </p>
//       </div>

//       <div className="box bg-light p-4">
//             <p className="h3">Step 8</p>
//             <p className="h6" style={{  fontSize: '20px'}}>
//             Remove the pan from heat and let the pudding cool slightly.

// </p>
//       </div>


//         <div className="box bg-light p-4">
//             <p className="h3">Step 9</p>
//             <p className="h6" style={{  fontSize: '20px'}}>
//             Once the pudding has cooled down, you can transfer it to serving bowls or moulds.

// </p>
//       </div>

//       <div className="box bg-light p-4">
//             <p className="h3">Step 10</p>
//             <p className="h6" style={{  fontSize: '20px'}}>
//             Allow the pudding to cool completely and set in the refrigerator for a few hours.


// </p>
//       </div>

//       <div className="box bg-light p-4">
//             <p className="h3">Step 11</p>
//             <p className="h6" style={{  fontSize: '20px'}}>
//             Once chilled and set, you can garnish the pudding with additional grated coconut, nuts, or a sprinkle of cardamom powder, if desired.
// </p>
//       </div>

//       <div className="box bg-light p-4">
//             <p className="h3">Step 12</p>
//             <p className="h6" style={{  fontSize: '20px'}}>
//             Serve the palmyra pulp pudding (puddu) chilled as a delicious and refreshing dessert.
// </p>
//       </div>
//       <p className='h5 ' style={{marginBottom:'50px',marginTop:'50px'}}>Enjoy your homemade palmyra pulp puddu!
// </p></Col>
//         <Col sm></Col>
//       </Row>
//     </Container>  </div> */

  )
}

export default Palmpuddu
