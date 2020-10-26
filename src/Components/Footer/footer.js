import React from "react";
import { 
  MDBCol, 
  MDBContainer, 
  MDBRow, 
  MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="elegant-color" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="12" className="text-center">
            <h5 className="title">Keep the fire burning <span className="orange-text"><i class="fas fa-fire"></i></span></h5>
            <p>
              georgekourakos4@gmail.com
            </p>
          </MDBCol>
          
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="www.gkourakos.com/"> gkourakos.com</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;