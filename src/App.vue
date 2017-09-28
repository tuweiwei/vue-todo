<template>
  <div id="app">
    <h1 v-text="title"></h1>
    
    <input v-model="newItem" @keyup.enter="addNew"/>
    <ul>
        <li v-for="item in items" :class="[liClass,{finished:item.isFinished}]" @click="toggleStatus(item)">代办事项：{{item.label}}</li>
    </ul>
  </div>
</template>

<script>

import Store from './store.js'

export default {
  data : function(){
         return {

             title : 'Simple on-line todo list',
             
             items : Store.fetch(),
             liClass : 'liClass',
             newItem : '',
         }

  },
  methods : {
      toggleStatus : function(e){
        e.isFinished = !e.isFinished;
      },
      addNew :       function(e){

          this.items.push({
             label : this.newItem, isFinished : false
          });
         
         
          this.newItem = '';
      }

  },

  watch : {
      'items' : {
         handler : function(value,oldValue){
          Store.save(value);
         
         },
         deep : true,
      },

      

  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li{
  list-style:none;
}
.liClass{
  cursor: pointer;
}
.finished{
  text-decoration:line-through;
}
</style>
