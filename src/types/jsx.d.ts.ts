// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Vue, { VNode } from 'vue';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    type Element = VNode;
    type ElementClass = Vue;
    interface IntrinsicElements {
      [elem: string]: unknown;
    }
  }
}
