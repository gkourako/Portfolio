import React from 'react';
import gk from './gk.jpg';
import {
  MDBCard,
  MDBCol,
  MDBContainer, 
  MDBRow,
} from 'mdbreact'
const AboutMe = () => {
  return (
    <MDBContainer>
      <hr></hr>
      <h2 className="h1-responsive font-weight-bold my-5 text-center" id="about">
      About Me
    </h2>
      <MDBRow>
        <MDBCol md={6}>
          <img className="img-fluid" src={gk} alt="Pins Mechanical Company"/>
        </MDBCol>
        <MDBCol md={6}>
          <h1 className="display-3">
            Who is George Kourakos?
          </h1>
          <p>A 1st generation American born and flourished in Charlotte, North Carolina.  A product of the “American Dream” and a visionary at heart.  On a mission to set the world on fire, create, explore, and live as much as he possibly can.  What is your Just Cause? </p>
        
        <p>Nice to meet you, I’m George and welcome to my portfolio.</p>  <p>Lets light the match</p>
        </MDBCol>
      </MDBRow>
      
    </MDBContainer>
  )
}
export default AboutMe;