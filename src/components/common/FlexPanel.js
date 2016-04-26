import React, { Children, PropTypes } from 'react';
import { Panel } from 'react-bootstrap';

import css from './FlexPanel.scss';

const FlexPanel = ({ children, ...panelProps }) => (
  <div className={css.panel}>
    <Panel {...panelProps}>
      {Array.isArray(children) ? (
        Children.map(children, (child, index) => (
          React.isValidElement(child) ? (
            React.cloneElement(child, {
              ...child.props,
              key: index,
            })
          ) : child
        ))
      ) : children}
    </Panel>
  </div>
);

FlexPanel.propTypes = {
  children: PropTypes.node,
};

export default FlexPanel;
