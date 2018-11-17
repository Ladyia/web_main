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

  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header:{{getMessage}}</el-header>
      <el-main>Main:{{getMessage}}</el-main>
    </el-container>
  </el-container>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
//import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI);

@Component
export default class tsElement extends Vue {
  @Prop()
  message!: string;

  get getMessage(): string {
    return this.message;
  }
}
</script>

    


