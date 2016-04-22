import React from 'react';
import { Route, IndexRoute } from 'react-router';

import CoreLayout from 'layouts/CoreLayout';
import DevcardsLayout from 'layouts/DevcardsLayout';
import BuffersLayout from 'layouts/BuffersLayout';

import HexEditorDevcards from 'views/devcards/HexEditorDevcards';
import FileDevcards from 'views/devcards/FileDevcards';
import WorkerDevcards from 'views/devcards/WorkerDevcards';
import CodeDevcards from 'views/devcards/CodeDevcards';

import BufferView from 'views/BufferView';
import WelcomeView from 'views/WelcomeView';

export default () => (
  <Route path="/" component={CoreLayout}>
    <Route path="devcards" component={DevcardsLayout}>
      <Route path="demo">
        <Route path="hex" component={HexEditorDevcards} />
        <Route path="files" component={FileDevcards} />
        <Route path="worker" component={WorkerDevcards} />
        <Route path="code" component={CodeDevcards} />
      </Route>
    </Route>
    <Route component={BuffersLayout}>
      <IndexRoute component={WelcomeView} />
      <Route path=":bufferId" component={BufferView} />
    </Route>
  </Route>
);
