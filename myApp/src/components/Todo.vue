<template>
<div class="todo">
  <h1>{{msg}}</h1>
    <input v-on:keyup.enter="addTodo()" type="text" v-model="todo" name="todo"/>
    <button type="submit primary" v-on:click="addTodo()">Submit</button>
    <div class="todoList">
      <ul>
        <li v-for="todo in todos" v-bind:key="todo.id">
          {{todo.title}} 
        <button type="submit" v-on:click="remove(todo.id)">Remove</button>
          
        </li>
      </ul>
    </div>
    <router-link to="/sds">
        <button type="submit" v-on:click="remove(todo.id)">Remove</button>
    </router-link>

    <b-table
      :items="items"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
    ></b-table>
</div>
</template>


<script>
export default {
  name: 'Todo',
  data () {
    return {
      msg: 'Todo',
      todo:'',
      todos:[],
      id: 0,
    }
  },
  methods: {
      addTodo: function() {
        let data = {
          id: this.id++,
          title: this.todo,
        }
        this.todos.push(data);
        this.todo = '';
      },
      remove: function(id){
        let todos = this.todos.filter(a => a.id !== id);
        this.todos = todos;
      }
  }
}
</script>

<style>
.todo {
  font-size: 12px;
}
</style>
