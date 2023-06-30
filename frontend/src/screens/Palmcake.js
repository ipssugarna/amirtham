import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cakeB from  '../../src/images/cakeB.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "../screens/Palmcake.css"
import { CiAlarmOn} from "react-icons/ci";
import { GiCookingPot } from 'react-icons/gi';
import { GiCakeSlice } from 'react-icons/gi';



const Palmcake = () => {
  return (
    <Container>
      <Row>
        <h1 style={{marginTop:'60px',marginBottom:'10px'}}></h1>
      </Row>
      <div class="container">
  <div class="row">
    <div class="col">
                      <div className="cake_hovor">
                          <img src={cakeB} alt="Avatar" className="cake_img"/>
                          
                  </div>
    </div>
    <div class="col">
      <br></br>
      <br></br>
    <div class="row">
    <h1 className='cake-head'>
    Palm Pulp Cake
    </h1>
    {/* <hr style={{width:'460px'}}></hr> */}
    <div className="row" style={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.1)' }}>
  <Row className="pad-0 d-flex flex-wrap recipe-inner-icon-wrapper" style={{ marginTop: '-30px' }}>
        <Col md={4} className="single-tile">
        <CiAlarmOn style={{ width:'80px',height:'160px', color: 'teal' }} />                  <p className="detail-value"  style={{fontWeight:'normal'}}>
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
        <GiCookingPot style={{width:'80px',height:'160px', color: 'teal' }} />
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

        < GiCakeSlice  style={{width:'80px',height:'160px', color: 'teal'}}/>
          <p className="detail-value"  style={{fontWeight:'normal'}}>
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
        <ul className="ingredient-list" style={{marginLeft:'130px', fontSize:'20px', fontWeight:'bold'}}>
  <li>750ml palm pulp (palmyra paste)</li>
  <br /> {/* Add line spacing here */}
  <li>2 cups all-purpose flour</li>
  <br /> {/* Add line spacing here */}
  <li>1 cup unsalted butter, softened</li>
  <br /> {/* Add line spacing here */}
  <li>4 eggs</li>
  <br /> {/* Add line spacing here */}
  <li>1 teaspoon baking powder</li>
  <br /> {/* Add line spacing here */}
  <li>1/2 teaspoon baking soda</li>
  <br /> {/* Add line spacing here */}
  <li>1/4 teaspoon salt</li>
  <br /> {/* Add line spacing here */}
  <li>1 teaspoon vanilla extract</li>
  <br /> {/* Add line spacing here */}
  <li>1/2 cup milk</li>
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
Preheat your oven to 350°F (175°C) and prepare your cake pans by greasing and flouring them.          </div>
        </div>
        <br></br>
        <div className="step-wrapper col-12 d-flex flex-wrap pad-0">
          <div className="col-4 step-no"  style={{fontWeight:'normal'}}>Step 2</div>
          <div className="col-8 step-details">
In a mixing bowl, cream together 750ml of palmyra paste and softened butter until light and fluffy.          </div>
        </div>
        <br></br>
        <div className="step-wrapper col-12 d-flex flex-wrap pad-0">
          <div className="col-4 step-no"  style={{fontWeight:'normal'}}>Step 3</div>
          <div className="col-8 step-details">Add the eggs one at a time to the palmyra paste and butter mixture, beating well after each addition.</div>
        </div>
                <br></br>

        <div className="step-wrapper col-12 d-flex flex-wrap pad-0">
          <div className="col-4 step-no"  style={{fontWeight:'normal'}}>Step 4</div>
          <div className="col-8 step-details">In a separate bowl, whisk together the all-purpose flour, baking powder, baking soda, and salt.</div>
        </div>
                <br></br>

         <div className="step-wrapper col-12 d-flex flex-wrap pad-0">
          <div className="col-4 step-no"  style={{fontWeight:'normal'}}>Step 5</div>
          <div className="col-8 step-details">Gradually add the dry ingredients to the palmyra paste mixture, alternating with milk. Begin and end with the dry ingredients, mixing well after each addition.</div>
        </div>
                <br></br>

         <div className="step-wrapper col-12 d-flex flex-wrap pad-0">
          <div className="col-4 step-no"  style={{fontWeight:'normal'}}>Step 6</div>
          <div className="col-8 step-details">Stir in any additional flavorings or mix-ins, such as vanilla extract or nuts, if desired.</div>
        </div>
                <br></br>

         <div className="step-wrapper col-12 d-flex flex-wrap pad-0">
          <div className="col-4 step-no"  style={{fontWeight:'normal'}}>Step 7</div>
          <div className="col-8 step-details">Pour the batter into the prepared cake pans, dividing it evenly between them.</div>
        </div>
                <br></br>

         <div className="step-wrapper col-12 d-flex flex-wrap pad-0">
          <div className="col-4 step-no"  style={{fontWeight:'normal'}}>Step 8</div>
          <div className="col-8 step-details">Bake in the preheated oven for approximately 30-35 minutes, or until a toothpick inserted into the center of the cakes comes out clean.
        </div>
        
        </div>
         <br></br>

         <div className="step-wrapper col-12 d-flex flex-wrap pad-0">
          <div className="col-4 step-no" style={{fontWeight:'normal'}}>Step 9</div>
          <div className="col-8 step-details">Remove the cakes from the oven and let them cool in the pans for about 10 minutes. Then, transfer them to a wire rack to cool completely before frosting or serving.</div>
        </div>
                <br></br>

        </div>
      </div>
    </div>

      <div>                     <h2 className="recipe-inner-second-title" style={{fontSize:'35px',color:'teal',marginLeft:'130px'  ,  fontWeight:'bolder'}}>Note :</h2>
  
         <p style={{marginBottom:'50px',marginTop:'10px',marginLeft:'130px'}} > The baking time may vary depending on your oven, so keep an eye on the cake as it bakes. Adjust the baking time accordingly to ensure it is fully cooked. Enjoy your homemade palmyra pulp cake!</p>
      </div>
    </Container>

  )
}

export default Palmcake
