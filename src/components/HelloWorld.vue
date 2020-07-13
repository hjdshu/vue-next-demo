<template>
  <div class="hello">
    <h1>{{msgCopy}}</h1>
    <h1>count: {{ count }}</h1>
    <button @click="add">add</button>

    <br>
    <br>

    <p>this is {{user.name}}</p>
    <p>he's age is {{user.age}}</p>
    <button @click="changeUser">changeUser</button>

    <p>x:{{x}}, y: {{y}}</p>
  </div>
</template>

<script>
import { ref, reactive, onMounted, watchEffect, computed } from 'vue'
import useMousePosition from '../hooks/useMousePosition'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup (props) {
    // let msgCopy = ''
    // watchEffect(() => {
    //   msgCopy = props.msg + 'copy'
    // })

    // reactive
    
    let msgCopy = computed(() => {
      return props.msg + 'copy'
    })

    let count = ref(0);

    function add() {
      count.value ++
    }

    let user = reactive({
      name: 'zhangsan',
      age: 26
    })

    function changeUser () {
      user.name = 'lisi'
      user.age = '24'
    }

    onMounted(() => {
      add()
    })

    let {x, y} = useMousePosition()

    return {
      count,
      add,
      user,
      changeUser,
      msgCopy,
      x,
      y
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
