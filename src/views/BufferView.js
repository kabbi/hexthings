import React, { Component, PropTypes } from 'react';
import { Row, Col, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';

import HexEditor from 'components/hex/HexEditor';
import CodeEditor from 'components/common/CodeEditor';

import { selectors, actions } from 'redux/buffers';
import ProjectPropTypes from 'utils/PropTypes';

import css from './BufferView.scss';

const mapStateToProps = (state, props) => ({
  currentBuffer: selectors.getBufferById(props.params.bufferId, state),
});

const mapDispatchToProps = {
  ...actions,
};

class BufferView extends Component {
  static propTypes = {
    params: PropTypes.shape({
      bufferId: PropTypes.string.isRequired,
    }).isRequired,
    currentBuffer: ProjectPropTypes.buffer.isRequired,
  };

  state = {
    parserCode: null,
  };

  componentWillMount() {
    const { parserCode } = this.props.currentBuffer;
    this.setState({ parserCode });
  }

  handleUpdateParserCode(parserCode) {
    this.setState({ parserCode });
  }

  render() {
    const { parserCode } = this.state;
    const { currentBuffer } = this.props;
    return (
      <Row>
        <Col>
          <Panel header="Your parser code" bsStyle="success">
            <CodeEditor value={parserCode} onChange={::this.handleUpdateParserCode} />
          </Panel>
          <Panel header="Your data" className={css.fullHeight}>
            <HexEditor data={currentBuffer.data} bytesPerLine={10} />
          </Panel>
          <Panel header="Parse results" className={css.fullHeight}>
            lalala
          </Panel>
          <Panel header="Parsed tokens" className={css.fullHeight}>
            allalal
          </Panel>
        </Col>
      </Row>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BufferView);
