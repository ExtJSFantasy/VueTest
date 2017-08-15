<!-- html -->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--引入组件-->
    <hello></hello>
  </div>
</template>
<!-- js -->
<script>
/*导入组件*/
import Hello from './components/Hello'
//module.export = {}
export default {
  name: 'app',
  //引入组件
  components: {
    Hello
  }
}
</script>
<!-- css -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
