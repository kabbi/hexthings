import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import Devcard from 'components/devcards/Devcard';
import CodeEditor from 'components/common/CodeEditor';
import { transform } from 'utils/Code';

export default class CodeDevcards extends Component {
  state = {
    code: 'console.log(`hello, world!`);',
    transformedCode: 'asd',
  };

  handleUpdateCode(code) {
    try {
      const transformedCode = transform(code, true);
      this.setState({ transformedCode });
    } catch (e) {
      // Do something
    }
    this.setState({ code });
  }

  render() {
    const { code, transformedCode } = this.state;
    return (
      <div>
        <Devcard id="code/transform">
          <Row>
            <Col md={6}>
              <CodeEditor value={code} onChange={::this.handleUpdateCode} />
            </Col>
            <Col md={6}>
              <CodeEditor value={transformedCode} readOnly />
            </Col>
          </Row>
        </Devcard>
      </div>
    );
  }
}
