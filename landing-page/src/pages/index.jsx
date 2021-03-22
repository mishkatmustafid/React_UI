import React, { Component } from "react";
import { MDBContainer, MDBRow } from "mdbreact";
import "../static/css/index.css";
import { HomeCard } from "../shared/card.jsx";
import { TopQuote, BottomQuote } from "../shared/quote.jsx";
import Layout from "../shared/base.jsx";
import Description from "../shared/description.jsx";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <TopQuote />
        <MDBContainer>
          <MDBRow className='pb-5'>
            <div
              className='d-flex flex-column flex-md-row align-items-stretch justify-content-center'
              style={{ width: "100%" }}
            >
              {/* <HomeCard
                name='Education'
                url='edu/exam/mcq/types/'
                icon='file-signature'
                className='col-md-3'
              ></HomeCard> */}
              <HomeCard
                name='Exam Preparation'
                url='edu/notes'
                icon='book-reader'
                className='col-md-3'
              ></HomeCard>
              <HomeCard
                name='Legal Services'
                url='drafting/'
                icon='pen-nib'
                className='col-md-3'
              ></HomeCard>
              <HomeCard
                name='Legal Research'
                url='drafting/'
                icon='pen-nib'
                className='col-md-3'
              ></HomeCard>
            </div>
          </MDBRow>
          <BottomQuote />
          <Description />
          {/* <CardCarousel team={this.state.team} className="mb-5" /> */}
        </MDBContainer>
        <div className='pattern' />
      </Layout>
    );
  }
}
