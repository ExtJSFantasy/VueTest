<template>
  <div class="hello">
    <input v-model="newItem" v-on:keyup.enter="addNew"/>
    <h1 v-html="msg"></h1>
    <h1 v-text="msg2"></h1>
    <ul>
      <li v-for="item in items" v-bind:class="{show:item.isY}" v-on:click="toDoSomething(item)">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  //ES6语法
  /*data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      msg2: '侬好'
    }
  }*/
  data: function(){
    return {
      msg: '<span style="color:red">Welcome to Your Vue.js App</span>',
      msg2: '你好ya',
      items:[
        {'name':'xiangdeshan','age':23,'isY':true},
        {'name':'xiangxin','age':27,'isY':false},
        {'name':'xiangying','age':25,'isY':true},
        {'name':'xiangzaisong','age':53,'isY':false}
      ],
      newItem:''
    }
  },
  methods:{
    toDoSomething: function (item) {
      item.isY = !item.isY;
      console.log(111111);
    },
    addNew:function () {
      console.log(this.newItem);
      //this.newItem = ''
      this.items.push({
        'name':this.newItem,'age':23,'isY':false
      })
      this.newItem = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.show{
  text-decoration: underline;
  text-decoration-color: red;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
