import { Navbar } from 'react-bootstrap';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const CoreLayout = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          Hex Thing
        </Link>
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
);

CoreLayout.propTypes = {
  children: PropTypes.element,
};

export default CoreLayout;
