import { observable } from 'mobx';

import Buffer from 'stores/Buffer';

class BufferStore {
  @observable
  buffers = [new Buffer('demo')];

  getById(id) {
    for (const buffer of this.buffers) {
      if (id === buffer.id) {
        return buffer;
      }
    }
    return null;
  }
}

export default new BufferStore();
