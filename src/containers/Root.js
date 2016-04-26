import DevTools from 'mobx-react-devtools';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import React, { PropTypes } from 'react';
import { Router } from 'react-router';

/* eslint-disable react/prefer-stateless-function */

@DragDropContext(HTML5Backend)
export default class Root extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired,
  };

  render() {
    return (
      <div style={{ height: '100%' }}>
        <Router history={this.props.history}>
          {this.props.routes}
        </Router>
        {__DEBUG__ && (
          <DevTools />
        )}
      </div>
    );
  }
}
