<template>
    <div class="todolist">
        <ol>
            <li v-for="todo in todos">
                {{ todo.text }}
            </li>
        </ol>
        <button @click="eClick()">事件</button>
    </div>
</template>

<script>
export default {
  name: 'indexP',
  data () {
    return {
       todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' }
        ]
    }
  },
  methods:{
    eClick(){
        alert(9999);
    }
  }
}
</script>
<style lang="scss">
    $margin50:50px;
    .todolist{
        text-align: left;
        margin:0 $margin50;
    }
    .todolist button{
        margin-left:$margin50;
    }
</style>