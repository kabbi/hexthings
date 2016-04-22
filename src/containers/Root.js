import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

@DragDropContext(HTML5Backend)
export default class Root extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired,
    store: PropTypes.object.isRequired,
  };

  renderContent() {
    return (
      <Router history={this.props.history}>
        {this.props.routes}
      </Router>
    );
  }

  renderDevTools() {
    if (__DEBUG__) {
      if (__DEBUG_NEW_WINDOW__) {
        if (!window.devToolsExtension) {
          require('utils/Redux').createDevToolsWindow(this.props.store);
        } else {
          window.devToolsExtension.open();
        }
      } else if (!window.devToolsExtension) {
        const DevTools = require('containers/DevTools').default;
        return <DevTools />;
      }
    }
    return null;
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          {this.renderContent()}
          {this.renderDevTools()}
        </div>
      </Provider>
    );
  }
}
