import { observer } from 'mobx-react';
import React, { PropTypes } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import ProjectPropTypes from 'utils/PropTypes';

const BuffersNavs = observer(({ buffers }) => (
  <Nav bsStyle="pills">
    {buffers.map(buffer => (
      <LinkContainer key={buffer.id} to={`/${buffer.id}`}>
        <NavItem>{buffer.name}</NavItem>
      </LinkContainer>
    ))}
  </Nav>
));

BuffersNavs.propTypes = {
  // TODO: fix mobx array proptypes
  buffers: PropTypes.oneOfType([
    PropTypes.arrayOf(ProjectPropTypes.buffer.isRequired).isRequired,
    PropTypes.object.isRequired,
  ]).isRequired,
};

export default BuffersNavs;
