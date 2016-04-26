import { observable } from 'mobx';

export default class ParseResult {
  @observable
  log = null;

  @observable
  result = null;

  @observable
  tokens = null;
}
