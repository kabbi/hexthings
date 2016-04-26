import { autorun, observable } from 'mobx';

import { transform } from 'utils/Code';

export default class Parser {
  @observable
  code = 'console.log(\'Commence the parsing!\');';

  @observable
  transformedCode = null;

  @observable
  transformError = null;

  transformTask = null;

  constructor() {
    this.transformTask = autorun(() => {
      try {
        this.transformError = null;
        this.transformedCode = transform(this.code);
      } catch (error) {
        this.transformError = error;
      }
    });
  }
}
