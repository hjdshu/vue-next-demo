import { ref, onMounted, onUnmounted } from 'vue'

export default function useMousePositon () {
  let x = ref(0)
  let y = ref(0)

  let listenmove = function (e) {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', listenmove)
    console.log('mousemove init')
  })
  
  
  onUnmounted(() => {
    window.removeEventListener('mousemove', listenmove)
  })


  return {x, y}
}
