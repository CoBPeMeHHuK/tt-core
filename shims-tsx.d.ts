import Vue, { VNode } from 'vue';

declare global {
  namespace JSX {
    // tslint:disable no-empty-apiTransportInterface
    interface Element extends VNode {}
    // tslint:disable no-empty-apiTransportInterface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
