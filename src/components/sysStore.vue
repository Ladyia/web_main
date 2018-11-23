<script>
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const sysStore = new Vuex({
  state: {
    title: ""
  },
  mutations: {
    changeTitle(state, newTitle) {
      state.title = newTitle;
    }
  }
});
</script>

