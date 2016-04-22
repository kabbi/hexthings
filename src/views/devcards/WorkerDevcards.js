import React, { Component } from 'react';
import { Button, Input } from 'react-bootstrap';

import Devcard from 'components/devcards/Devcard';
import css from 'styles/common-devcards.scss';

import DemoWorker from 'workers/devcards-demo';

export default class WorkerDevcards extends Component {
  state = {
    message: '',
    lastMessage: null,
    running: false,
  };

  handleStartWorker() {
    this.worker = new DemoWorker();
    this.worker.addEventListener('message', event => {
      const { data: lastMessage } = event;
      this.setState({ lastMessage });
    });
    this.setState({
      running: true,
    });
  }

  handleStopWorker() {
    this.worker.postMessage('exit');
    this.setState({
      running: false,
    });
  }

  handleTerminateWorker() {
    this.worker.terminate();
    this.setState({
      running: false,
    });
  }

  handleUpdateMessage({ target: { value: message } }) {
    this.setState({ message });
  }

  handleSendMessage() {
    const { message } = this.state;
    this.worker.postMessage(message);
  }

  render() {
    const { lastMessage, message, running } = this.state;
    return (
      <div>
        <Devcard id="worker/status">
          Last message received: <code>{JSON.stringify(lastMessage, null, 4)}</code>
          <br />
          Running: <code>{running.toString()}</code>
        </Devcard>
        <Devcard id="worker/control">
          <Input
            type="text"
            value={message}
            onChange={::this.handleUpdateMessage}
            placeholder="something you always wanted to tell"
          />
          <div className={css.toolbar}>
            <Button
              disabled={running}
              onClick={::this.handleStartWorker}
              className={css.toolbarButton}
              bsStyle="success"
            >
              start
            </Button>
            <Button
              disabled={!running}
              onClick={::this.handleStopWorker}
              className={css.toolbarButton}
              bsStyle="warning"
            >
              stop
            </Button>
            <Button
              disabled={!running}
              onClick={::this.handleTerminateWorker}
              className={css.toolbarButton}
              bsStyle="danger"
            >
              kill
            </Button>
            <Button
              disabled={!running}
              onClick={::this.handleSendMessage}
              className={css.toolbarButtonWide}
              bsStyle="primary"
            >
              Send message
            </Button>
          </div>
        </Devcard>
      </div>
    );
  }
}
