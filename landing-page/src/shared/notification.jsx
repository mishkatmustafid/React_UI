import React from 'react';
import { MDBNotification } from 'mdbreact';

export default function Notify(props) {
  return (
    <MDBNotification
    fade
    title={props.title}
    message={props.message}
    style
  );
}
