import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const WelcomeView = () => (
  <div className="text-center">
    <h1>Welcome!</h1>
    <LinkContainer to="/demo">
      <Button>Go check some demo</Button>
    </LinkContainer>
  </div>
);

export default WelcomeView;
