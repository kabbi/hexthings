import { observable } from 'mobx';

import BufferStore from './BufferStore';

class UIState {
  @observable
  currentBuffer = BufferStore.buffers[0];
}

export default new UIState();
