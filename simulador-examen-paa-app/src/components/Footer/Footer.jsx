import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

function MainFooter() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="/" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="/" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="/" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="/" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="/" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="/" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p>Empty.</p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="/" className="text-reset">
                  Angular
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="/" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                San Pedro Sula, Cortés, Honduras
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                jorgedd2001@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +504 9465-2115
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a
          className="text-reset fw-bold"
          href="https://github.com/JorgeML01"
          target="_blank"
        >
          Jorge Matute
        </a>
      </div>
    </MDBFooter>
  );
}

export default MainFooter;
