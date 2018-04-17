import { HeadGoverness } from 'vue-kindergarten';

const LG = console.log; // eslint-disable-line no-console, no-unused-vars

export default class RouteGoverness extends HeadGoverness {
  constructor({ from, to, next }) {
    super();

    if (this) {
      this.next = next;
      this.from = from;
      this.to = to;
    }
  }

  guard(action) {
    this.next(super.isAllowed(action) ? undefined : '/');
  }
}
