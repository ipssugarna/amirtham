import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import puddu from  '../../src/images/puddu.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const Pudding = () => {
  return (
    <div>
      <Container style={{ fontFamily: "'Mogra', cursive"}}>
      <Row>
        <Col sm={8}><img src={puddu}  alt="..."  style={{ height: '370px', width: '80%',marginLeft:'20px',marginTop:'50px'}} fluid/></Col>
        <Col sm={4}><p className='h2' style={{marginTop:'30px',marginLeft:'-100px'}}>Ingredients</p><ul className="list-unstyled section" style={{marginLeft:'-100px', lineHeight: '2' }} >
      <li style={{ listStyleType: 'disc' }}>750ml palm pulp</li>
      <li style={{ listStyleType: 'disc' }}>1 cup rice flour
</li>
      <li style={{ listStyleType: 'disc' }}>1/2 cup jaggery (or to taste)
</li>
      <li style={{ listStyleType: 'disc' }}>1/4 cup grated coconut

</li>

      <li style={{ listStyleType: 'disc' }}>1/4 teaspoon cardamom powder

</li>
      <li style={{ listStyleType: 'disc' }}>A pinch of salt

</li>
      <li style={{ listStyleType: 'disc' }}>Water, as needed
      </li>

      <li style={{ listStyleType: 'disc' }}>3/4 teaspoon of vanilla extract
</li>
      <li style={{ listStyleType: 'disc' }}>A pinch of salt
</li>
    </ul></Col>
    
      </Row>
      <Row>
        <Col sm>
          <div className="box bg-light p-4">
            <p className="h3">Step 1</p>
            <p className="h6" style={{  fontSize: '20px'}}>

            In a mixing bowl, combine the rice flour and palmyra pulp. Mix well to form a smooth batter. Adjust the consistency by adding water if needed. The batter should be pourable but not too thin.           </p>
          </div>

          <div className="box bg-light p-4">
            <p className="h3">Step 2</p>
            <p className="h6" style={{  fontSize: '20px'}}>

            In a separate saucepan, dissolve the jaggery in a little water and heat it until the jaggery melts completely. Strain the jaggery syrup to remove any impurities.            </p>
          </div>

          <div className="box bg-light p-4">
            <p className="h3">Step 3</p>
            <p className="h6" style={{  fontSize: '20px'}}>

            Add the jaggery syrup to the palmyra pulp batter and mix well.

</p>
          </div>

          <div className="box bg-light p-4">
            <p className="h3">Step 4</p>
            <p className="h6" style={{  fontSize: '20px'}}>

            Place the batter on the stove and cook it on medium heat, stirring continuously to avoid lumps and sticking to the bottom of the pan.

</p>
          </div>
    
          <div className="box bg-light p-4">
            <p className="h3">Step 5</p>
            <p className="h6" style={{  fontSize: '20px'}}>

            As the batter cooks, it will start to thicken. Continue cooking until the mixture reaches a thick, pudding-like consistency. This should take approximately 10-15 minutes.            </p>   
        </div>
  
        <div className="box bg-light p-4">
            <p className="h3">Step 6</p>
            <p className="h6" style={{  fontSize: '20px'}}>

            Add the grated coconut, cardamom powder, and a pinch of salt to the mixture. Stir well to combine all the ingredients.            </p>   
        </div>
    
        <div className="box bg-light p-4">
            <p className="h3">Step 7</p>
            <p className="h6" style={{  fontSize: '20px'}}>
            Cook the mixture for an additional 2-3 minutes, allowing the flavors to meld together.

</p>
      </div>

      <div className="box bg-light p-4">
            <p className="h3">Step 8</p>
            <p className="h6" style={{  fontSize: '20px'}}>
            Remove the pan from heat and let the pudding cool slightly.

</p>
      </div>


        <div className="box bg-light p-4">
            <p className="h3">Step 9</p>
            <p className="h6" style={{  fontSize: '20px'}}>
            Once the pudding has cooled down, you can transfer it to serving bowls or moulds.

</p>
      </div>

      <div className="box bg-light p-4">
            <p className="h3">Step 10</p>
            <p className="h6" style={{  fontSize: '20px'}}>
            Allow the pudding to cool completely and set in the refrigerator for a few hours.


</p>
      </div>

      <div className="box bg-light p-4">
            <p className="h3">Step 11</p>
            <p className="h6" style={{  fontSize: '20px'}}>
            Once chilled and set, you can garnish the pudding with additional grated coconut, nuts, or a sprinkle of cardamom powder, if desired.
</p>
      </div>

      <div className="box bg-light p-4">
            <p className="h3">Step 12</p>
            <p className="h6" style={{  fontSize: '20px'}}>
            Serve the palmyra pulp pudding (puddu) chilled as a delicious and refreshing dessert.
</p>
      </div>
      <p className='h5 ' style={{marginBottom:'50px',marginTop:'50px'}}>Enjoy your homemade palmyra pulp puddu!
</p></Col>
        <Col sm></Col>
      </Row>
    </Container>
    </div>
  )
}

export default PalmPudding
