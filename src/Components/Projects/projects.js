import React from 'react';
import day from './day.png';
import qc from './beer.png';
import taste from './taste.png';
import sg from './sg.png';
import fast from './fast.png'
import './projects.css'

import { MDBContainer, MDBCol, MDBCard, MDBView, MDBMask } from "mdbreact";
const ProjectsPage = () => {
  return (
    <section className="text-center my-5">

      <MDBContainer className="d-flex flex-wrap">
        <MDBCol md="12" className="mb-4">
          <hr></hr>
          <h2 className="h1-responsive font-weight-bold text-center my-5" id="work">
            My Work
          </h2>
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
        <MDBCol md="6" className="md-0 mb-4">
          <MDBCard >
            <img className="img-fluid" alt="coming soon" src={day} />

          </MDBCard>
        </MDBCol>
        <MDBCol md="6" className="md-0 mb-4">
          <MDBCard >
            <img className="img-fluid" alt="coming soon" src={fast} />
          </MDBCard>
        </MDBCol>
      </MDBContainer>
    </section>
  );
}

export default ProjectsPage;

