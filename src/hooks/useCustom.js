import { ref, onMounted, onUnmounted, computed, watch, reactive, toRefs } from 'vue'

export const usefilterName = function (first, last) {
  let name = computed(() => {
    return first.value + '|' + last.value
  })
  return name
}

export const useWindowSize = function () {
  // let width = ref(window.innerWidth);
  // let height = ref(window.innerHeight);

  // window.onresize = function () {
  //   width.value = window.innerWidth
  //   height.value = window.innerHeight
  // }

  // return {
  //   width,
  //   height
  // }

  let size = reactive({
    width: window.innerWidth,
    height: window.innerHeight
  })

  window.onresize = function () {
    size.width = window.innerWidth
    size.height = window.innerHeight
  }

  return toRefs(size)
}
