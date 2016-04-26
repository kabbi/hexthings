import { observable } from 'mobx';
import { v4 } from 'node-uuid';

import Parser from 'stores/Parser';

export default class Buffer {
  id = null;

  @observable
  name = '<unnamed>';

  @observable
  parser = new Parser();

  @observable
  parseResult = null;

  @observable
  data = Uint8Array.of(0);

  @observable
  panelLayout = [{
    i: 'parserPanel',
    x: 0, y: 0,
    w: 6, h: 6,
  }, {
    i: 'dataPanel',
    x: 6, y: 0,
    w: 6, h: 6,
  }, {
    i: 'resultPanel',
    x: 0, y: 6,
    w: 6, h: 6,
  }, {
    i: 'tokensPanel',
    x: 6, y: 6,
    w: 6, h: 6,
  }];

  constructor(id = v4()) {
    this.id = id;
  }
}
