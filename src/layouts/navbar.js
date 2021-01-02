import React from 'react';
import { Nav,Navbar } from 'react-bootstrap';

export const NaviBar = () => (
  <div>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Stephen Yang</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/notes">Notes</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)
