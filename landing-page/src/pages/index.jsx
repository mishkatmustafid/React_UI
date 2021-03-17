import React, { Component } from "react";
import { MDBContainer, MDBRow } from "mdbreact";
import "../static/css/index.css";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='container'>
        <MDBContainer>
          <MDBRow className='pb-5'>
            <div
              className='d-flex flex-column flex-md-row align-items-stretch justify-content-center'
              style={{ width: "100%" }}
            ></div>
          </MDBRow>
          {/* <CardCarousel team={this.state.team} className="mb-5" /> */}
        </MDBContainer>
        <div className='pattern' />
      </div>
    );
  }
}
