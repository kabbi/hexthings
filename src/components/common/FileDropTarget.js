import { NativeTypes } from 'react-dnd-html5-backend';
import React, { PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import classNames from 'classnames';

import css from './FileDropTarget.scss';

const FileDropTarget = ({ available, hover, children, connectDropTarget }) => connectDropTarget(
  <div className={css.container}>
    {children}
    <div
      className={classNames({
        [css.overlay]: true,
        [css.available]: available,
        [css.hover]: hover,
      })}
    />
  </div>
);

FileDropTarget.propTypes = {
  hover: PropTypes.bool,
  available: PropTypes.bool,
  children: PropTypes.node,
  onDrop: PropTypes.func,
};

// eslint-disable-next-line
export default DropTarget(
  NativeTypes.FILE, {
    drop(props, monitor) {
      props.onDrop(monitor.getItem());
    },
  }, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    available: monitor.canDrop(),
    hover: monitor.isOver(),
  })
)(FileDropTarget);
