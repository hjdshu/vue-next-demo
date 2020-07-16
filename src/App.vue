<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>x:{{x}}, y: {{y}}</p>
    <p>window.size: {{width + ',' + height}}</p>
    <button @click="addhello">addhello</button>
    <HelloWorld v-if="hello" msg="Welcome to Your Vue.js App"/>
    <Compx/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import useMousePosition from './hooks/useMousePosition'
import { usefilterName, useWindowSize } from './hooks/useCustom'
import Compx from './components/Compx'
import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Compx
  },
  setup () {
    let {x, y} = useMousePosition()
    let { width, height } = useWindowSize()
    let hello = ref(false)
    function addhello () {
      hello.value = true
    }
    
    return {
      hello,
      addhello,
      x,
      y,
      width,
      height
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
