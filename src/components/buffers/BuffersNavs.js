import React, { PropTypes } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

import ProjectPropTypes from 'utils/PropTypes';
import { selectors, actions } from 'redux/buffers';

const mapStateToProps = state => ({
  buffers: selectors.getBuffers(state),
});

const mapDispatchToProps = {
  removeBuffer: actions.remove,
};

const BuffersNavs = ({ buffers }) => (
  <Nav bsStyle="pills">
    {buffers.map(buffer => (
      <LinkContainer key={buffer.id} to={`/${buffer.id}`}>
        <NavItem>{buffer.name || '<unnamed>'}</NavItem>
      </LinkContainer>
    ))}
  </Nav>
);

BuffersNavs.propTypes = {
  buffers: PropTypes.arrayOf(ProjectPropTypes.buffer.isRequired).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BuffersNavs);
