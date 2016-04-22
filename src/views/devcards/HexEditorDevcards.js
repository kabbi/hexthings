import React, { Component } from 'react';

import Devcard from 'components/devcards/Devcard';
import HexEditor from 'components/hex/HexEditor';
import { randomData } from 'utils/Hex';
import css from 'styles/common-devcards.scss';

const TEST_DATA = Uint8Array.of(
  23, 123, 18, 0, 4, 222, 89, 100, 234, 254, 99,
  23, 123, 18, 0, 4, 222, 89, 100, 234, 254, 99,
);

const RANDOM_DATA = randomData(10e3);

export default class HexEditorDevcards extends Component {
  state = {
    data: randomData(2048),
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      const data = randomData(2048);
      this.setState({ data });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <Devcard id="simple-hex-view">
          <div className={css.fixedHeight}>
            <HexEditor data={TEST_DATA} />
          </div>
        </Devcard>
        <Devcard id="large-file-view">
          <div className={css.moreFixedHeight}>
            <HexEditor data={RANDOM_DATA} />
          </div>
        </Devcard>
        <Devcard id="changing-data-view">
          <div className={css.moreFixedHeight}>
            <HexEditor data={this.state.data} />
          </div>
        </Devcard>
      </div>
    );
  }
}
