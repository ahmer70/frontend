import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Admin from '../Admin';

const AddFounder = ({ show, setShow, refresh }) => {
  return (
    <>


      <Offcanvas show={show} onHide={() => setShow(false)} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add New Founder</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

          <Admin setShow={(e) => setShow(e)} refresh={refresh} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default AddFounder