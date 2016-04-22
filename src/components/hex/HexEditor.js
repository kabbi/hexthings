import { AutoSizer, VirtualScroll } from 'react-virtualized';
import React, { PropTypes } from 'react';

import { formatHex, formatString } from 'utils/Hex';

import css from './HexEditor.scss';

const HexEditor = ({ data, bytesPerLine }) => (
  <AutoSizer>
    {/* eslint-disable react/prop-types */}
    {({ width, height }) => (
      <VirtualScroll
        className={css.container}
        rowHeight={20}
        rowsCount={Math.floor(data.length / bytesPerLine) + 1}
        rowRenderer={rowIndex => {
          const start = rowIndex * bytesPerLine;
          const end = (rowIndex + 1) * bytesPerLine;

          const values = [];
          for (let i = start; i < end; i++) {
            const hasMore = i < data.length;
            values.push(
              <span key={i} className={hasMore ? css.rowValue : css.rowNoValue}>
                {formatHex(data[i] || 0, 2)}
              </span>
            );
          }

          return (
            <div className={css.row}>
              <span className={css.rowOffset}>
                {formatHex(start, 8)}
              </span>
              <span>
                {values}
              </span>
              <span className={css.rowText}>
                {formatString(data, start, end)}
              </span>
            </div>
          );
        }}
        width={width}
        height={height}
      />
    )}
    {/* eslint-enable react/prop-types */}
  </AutoSizer>
);

HexEditor.propTypes = {
  data: PropTypes.instanceOf(Uint8Array).isRequired,
  bytesPerLine: PropTypes.number.isRequired,
};

HexEditor.defaultProps = {
  bytesPerLine: 16,
};

export default HexEditor;
