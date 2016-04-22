import React, { Component, PropTypes } from 'react';
import AceEditor from 'react-ace';

// TODO: remove once #95 is fixed
import 'brace/ext/language_tools';
import 'brace/theme/chrome';
import 'brace/mode/javascript';
import 'brace/mode/json';

import { randomId } from 'utils/Random';
import css from './CodeEditor.scss';

export default class Code extends Component {
  static propTypes = {
    mode: PropTypes.string,
    value: PropTypes.string,
    readOnly: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    mode: 'javascript',
  };

  componentWillMount() {
    this.id = randomId();
  }

  shouldComponentUpdate({ value: nextValue }) {
    const { value: currentValue } = this.props;
    return currentValue !== nextValue;
  }

  render() {
    const { mode, value, readOnly, onChange } = this.props;
    return (
      <AceEditor readOnly={readOnly}
        name={this.id}
        mode={mode}
        value={value}
        onChange={onChange}
        showGutter={false}
        showPrintMargin={false}
        highlightActiveLine={false}
        theme="chrome"
        width="100%" tabSize={2}
        minLines={1} maxLines={Infinity}
        className={readOnly ? css.hideSelection : ''}
        editorProps={{
          $blockScrolling: true,
        }}
      />
    );
  }
}
