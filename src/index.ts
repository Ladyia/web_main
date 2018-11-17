import Vue from 'vue';
import tsElement from './components/tsElement.vue';

const v = new Vue({
  el: '#app',
  template: '<ts-element :message="msg"></ts-element>',
  data: {
      msg: 'Hello world!',
    },
  components: {
      tsElement,
    },
});
