import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import BuffersNavs from 'components/buffers/BuffersNavs';

import BufferStore from 'stores/BufferStore';

import css from './BuffersLayout.scss';

const BuffersLayout = ({ children }) => (
  <Grid>
    <Row>
      <Col className={css.container}>
        <BuffersNavs buffers={BufferStore.buffers} />
        <div className={css.container}>
          {children}
        </div>
      </Col>
    </Row>
  </Grid>
);

BuffersLayout.propTypes = {
  children: PropTypes.element,
};

export default BuffersLayout;
