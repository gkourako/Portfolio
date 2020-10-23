import React from 'react';

import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBTypography,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
} from 'mdbreact';

import lucia from './lucia.JPG'

const Contact = props => {
  return (
  
       
          <MDBContainer id="follow">
            <MDBRow className='py-5'>
              <MDBCol md={6} className='text-left'>
                <MDBCard style={{ width: "22rem" }}>
                  <img className="img-fluid" alt="Saint Lucia" src={lucia}/>
                <MDBCardTitle className='py-2 px-2'>
                  My fundamental Quote   
                </MDBCardTitle>
                <MDBCardText className='py-2 px-2'>
                "Okay, Houston. As I stand out here in the wonders of the unknown at Hadley, I sort of realize there's a fundamental truth to our nature. Man <i>must</i> explore." - <i>Commander David Scott</i>
                </MDBCardText>
                </MDBCard>
              </MDBCol>
              <MDBCol md={6} className='text-center pt-2'>
                
                  <MDBTypography tag="h3"variant="display-3">Follow me!</MDBTypography>
                  <hr></hr>
                  
                  <MDBTypography tag="h4"variant="h3-responsive">GitHub </MDBTypography>
                  <a href="https://github.com/gkourako" target="blank">
                  <h1 className="display-1 black-text"><i class="fab fa-github-square"></i></h1>
                  </a>

                  <MDBTypography tag="h4"variant="h3-responsive">LinkedIn </MDBTypography>
                  <a href="https://www.linkedin.com/in/george-kourakos-93018a1a7/" target="blank">
                  <h1 className="display-1 black-text"><i class="fab fa-linkedin"></i></h1>
                  </a>

                  <MDBTypography tag="h4"variant="h3-responsive">My Resume </MDBTypography>
                  <a href="https://docs.google.com/document/d/13YPlR3AEZVHy36GWjtdSbdtoadFDP3QR4RcajiO3fLI/edit?usp=sharing" target="blank">
                  <h1 className="display-1 black-text"><i class="fas fa-file"></i></h1>
                  </a>
                  
                  
                
              </MDBCol>
            </MDBRow>
          </MDBContainer>
     
  )
}
export default Contact