<template>
    <!-- <el-container>
        <el-header>Header</el-header>
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
                <el-main>Main:{{getMessage}}</el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-container> -->

<el-container class="app-container">
    <el-aside width="200px">
      <el-button @click="gotoRoute('home')">起始页</el-button>
      <el-button @click="gotoRoute('welcome')">欢迎页</el-button>
      <el-button @click="gotoRoute('user')">用户页</el-button>
    </el-aside>
    <el-container class="app-container">
      <el-header>{{getMessage}}</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>


<!-- <div>
  <el-button @click="dialogVisible = true">测试弹窗</el-button>

 <el-dialog
  title="测试弹窗" width="30%" 
  :visible.sync="dialogVisible"
  :before-close="handleClose">
  <span>{{getMessage}}</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog> 
</div> -->

</template>

<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";
import Vuex, { ActionTree, MutationTree } from 'vuex';
// import Router, { RouteConfig, Route, NavigationGuard } from "vue-router";
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from "element-ui";

Vue.use(ElementUI);
Vue.use(Vuex);
//Vue.use(Router);

// // Register the router hooks with their names
// Component.registerHooks([
//   'beforeRouteEnter',
//   'beforeRouteLeave',
//   'beforeRouteUpdate' // for vue-router 2.2+
// ]);

@Component
export default class tsElement extends Vue {
  @Prop()
  message!: string;

  get getMessage(): string {
    return this.$store.state.title;
    //return this.message;
  }

  handleClose(done: object) {
    console.log(done);
  }

  gotoRoute(page: string) {
    this.$router.push({ path: "/" + page });
  }

  data() {
    return {
      dialogVisible: false,
    };
  }
}
</script>

<style>
.app-container {
  position: relative;
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>


    


