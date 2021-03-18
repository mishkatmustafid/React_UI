import React, { Component } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBIcon,
  MDBCardHeader,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBContainer,
} from "mdbreact";
import "../static/css/card.css";

export function HomeCard(props) {
  return (
    <MDBBtn
      rounded
      color='amber'
      className={`mb-3 mt-4 mx-2 btn-block ${props.className}`}
      href={props.url}
      onClick={props.onClick}
      style={props.style}
    >
      <MDBCardBody className='card-background px-lg-4 px-md-2 px-5'>
        <div className='d-flex justify-content-center'>
          <MDBIcon icon={props.icon} size='5x' style={{ color: "fff" }} />
        </div>
        <div className='p-3 m-3 text-center fw-bold'>{props.children}</div>
        <h5>{props.name}</h5>
      </MDBCardBody>
    </MDBBtn>
  );
}
