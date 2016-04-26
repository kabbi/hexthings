import { observer } from 'mobx-react';
import React, { PropTypes } from 'react';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';

import HexEditor from 'components/hex/HexEditor';
import CodeEditor from 'components/common/CodeEditor';
import FlexPanel from 'components/common/FlexPanel';

import BufferStore from 'stores/BufferStore';

// eslint-disable-next-line babel/new-cap
const ResponsiveReactGridLayout = WidthProvider(ReactGridLayout);

const BufferView = observer(({ params: { bufferId } }) => {
  const currentBuffer = BufferStore.getById(bufferId);
  if (!currentBuffer) {
    // TODO: better not found state
    return <div>Not found!</div>;
  }

  const { panelLayout, data, parser: { code, transformError } } = currentBuffer;

  const handleUpdateCode = newCode => {
    currentBuffer.parser.code = newCode;
  };

  return (
    <ResponsiveReactGridLayout
      layout={panelLayout.toJSON()}
      cols={12}
      rowHeight={30}
      draggableCancel=".panel-body"
      draggableHandle=".panel-heading"
      measureBeforeMount={false}
    >
      <FlexPanel
        key="parserPanel"
        header="Your parser code"
        bsStyle={transformError ? 'warning' : 'success'}
      >
        <CodeEditor value={code} onChange={handleUpdateCode} />
      </FlexPanel>
      <FlexPanel key="dataPanel" header="Your data">
        <HexEditor data={data} bytesPerLine={10} />
      </FlexPanel>
      <FlexPanel key="resultPanel" header="Parse results">
        <div>
          lalala
        </div>
      </FlexPanel>
      <FlexPanel key="tokensPanel" header="Parsed tokens">
        <div>
          lalala
        </div>
      </FlexPanel>
    </ResponsiveReactGridLayout>
  );
});

BufferView.propTypes = {
  params: PropTypes.shape({
    bufferId: PropTypes.string.isRequired,
  }).isRequired,
};

export default BufferView;
