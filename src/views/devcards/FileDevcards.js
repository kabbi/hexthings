import React, { Component } from 'react';

import Devcard from 'components/devcards/Devcard';
import HexEditor from 'components/hex/HexEditor';
import FileDropTarget from 'components/common/FileDropTarget';
import css from 'styles/common-devcards.scss';

export default class FileDevcards extends Component {
  state = {
    file: null,
    data: Uint8Array.of(0),
  };

  handleDrop({ files: [file] }) {
    this.setState({ file });
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const data = new Uint8Array(reader.result);
        this.setState({ data });
      };
      reader.readAsArrayBuffer(file);
    }
  }

  render() {
    const { file, data } = this.state;
    return (
      <div>
        <Devcard id="files/current">
          Last dropped file: {file && (
            <code>{file.name}, {file.size}, {file.lastModified}</code>
          )}
        </Devcard>
        <Devcard id="files/current/data">
          <FileDropTarget onDrop={::this.handleDrop}>
            <div className={css.fixedHeight}>
              <HexEditor data={data} />
            </div>
          </FileDropTarget>
        </Devcard>
      </div>
    );
  }
}
