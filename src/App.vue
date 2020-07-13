<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>x:{{x}}, y: {{y}}</p>
    <button @click="addhello">addhello</button>
    <HelloWorld v-if="hello" msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import useMousePosition from './hooks/useMousePosition'
import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup () {
    let {x, y} = useMousePosition()
    let hello = ref(false)
    function addhello () {
      hello.value = true
    }
    return {
      hello,
      addhello,
      x,
      y
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
