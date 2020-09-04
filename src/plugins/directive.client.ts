import Vue from 'vue';

Vue.directive('useInput', {
  bind: (el, binding, vnode) => {
    console.log(binding);
  },
  componentUpdated: () => {
    console.log(11);
  },
});
