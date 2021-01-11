import React from 'react';
import day from './day.png';
import qc from './beer.png';
import taste from './taste.png';
import sg from './sg.png';
import fast from './fast.png'
import './projects.css'

import {
  MDBContainer,
  MDBCol,
  MDBCard,
  MDBView,
  MDBMask,
  MDBTypography
} from "mdbreact";
const ProjectsPage = () => {
  return (
    <section className="text-center my-5">

      <MDBContainer className="d-flex flex-wrap">
        <MDBCol md="12" className="mb-4">
          <hr></hr>
          <h2 className="h1-responsive font-weight-bold text-center my-5" id="work">
            My Work
          </h2>
        </MDBCol>
        <MDBCol md="6" className="md-0 mb-4">
          <MDBCard >
            <a href="https://saint-george.herokuapp.com/" target="blank">
              <MDBView hover>
                <img className="img-fluid" alt="Saint George Athleisure" src={sg} />
                <MDBMask className="flex-center" overlay="black-strong">
                  <h1 className="white-text">Saint George Athleisure</h1>
                </MDBMask>
              </MDBView>
            </a>
          </MDBCard>
        </MDBCol>
        {/* Info */}
        <MDBCol md="6" className="md-0 mb-4">
          <MDBTypography tag='h2' variant="h2-responsive">
            Saint George Athleisure
            <small className="text-muted"><br></br>Exlcusive athleisure at its finest. <br></br>Slay Your Dragon</small>
          </MDBTypography>
          <p>
            A full-stack MERN application showcasing my experience with React. This is a real world e-commerce applicatiom including login capability,  add to cart, and a complete map of our database.
              <br></br>
            I co-led the front-end development of the application from UX/UI to mapping over our database.
            <a href="https://github.com/komplexnupe/saint-george" target="blank">  Our Github</a>
          </p>
        </MDBCol>
        {/* Project */}
        <MDBCol md="6" className="md-0 mb-4">
          <MDBCard >
            <a href="http://qctaste.herokuapp.com/" target="blank">
              <MDBView hover>
                <img className="img-fluid" alt="Queen City Taste" src={taste} />
                <MDBMask className="flex-center" overlay="black-strong">
                  <h1 className="white-text">Queen City Taste</h1>
                </MDBMask>
              </MDBView>
            </a>
          </MDBCard>
        </MDBCol>
        {/* Info */}
        <MDBCol md="6" className="md-0 mb-4">
          <MDBTypography tag='h2' variant="h2-responsive">
            Queen City Taste
            <small className="text-muted"><br></br> The Yelp for the Charlotte food industry</small>
          </MDBTypography>
          <p>This project is a yelp for Charlotte based restaurants. It is a login based and user input driven application.
          <br></br>
          I was responsible for the back-end of the project which involved writing routes, setting up our SQL database, as well as our login functions on the back-end.
          <a href="https://github.com/aleckbryson/qc-taste" target="blank">  Our Github</a>
          </p>
        </MDBCol>
        {/* Project */}
        <MDBCol md="6" className="md-0 mb-4">
          <MDBCard >
            <a href="https://aleckbryson.github.io/qc-wateringhole/" target="blank">
              <MDBView hover>
                <img className="img-fluid" alt="Queen City Watering Hole" src={qc} />
                <MDBMask className="flex-center" overlay="black-strong">
                  <h1 className="white-text">Queen City Watering Hole</h1>
                </MDBMask>
              </MDBView>
            </a>
          </MDBCard>
        </MDBCol>
        {/* Info */}
        <MDBCol md="6" className="md-0 mb-4">
          <MDBTypography tag='h2' variant="h2-responsive">
            Queen City Watering Hole
            <small className="text-muted"><br></br> The cities best breweries for fellowship and beer, just a click away</small>
          </MDBTypography>
          <p>	A Simple and effective way to find the closest micro-brewery to your current location and directions on how to get there. <br></br>In this application we used Bulma for our front end.  The server was built using express and I manipulated the Google Maps, LocationMatrix, and Brewery DB Api's.  
          <a href="https://github.com/aleckbryson/qc-wateringhole" target="blank">  Our Github</a>
          </p>
        </MDBCol>
      </MDBContainer>
    </section>
  );
}

export default ProjectsPage;

