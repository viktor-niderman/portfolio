<script setup lang="ts">
import {onMounted} from "vue";

const props = defineProps({
  msg: {type: Array, required: true}
});

const phrases = props.msg;
const chars = '!<>-_\\/[]{}—=+*^?#________';

onMounted(() => {
  let el = document.querySelector('.text') ?? document.createElement('div');
  let queue:any = [];
  let frame = 0;
  let frameRequest:any = null;
  let resolvePromise:any = null;

  let randomChar = () =>  {
    return chars[Math.floor(Math.random() * chars.length)]
  }

  class TextScramble {
    constructor() {
      this.update = this.update.bind(this)
    }
    setText(newText:any) {
      const oldText = el.innerHTML;
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => resolvePromise = resolve)
      queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(frameRequest)
      frame = 0
      this.update()
      return promise
    }
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = queue.length; i < n; i++) {
        let { from, to, start, end, char } = queue[i]
        if (frame >= end) {
          complete++
          output += to
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = randomChar()
            queue[i].char = char
          }
          output += `<span class="dud">${char}</span>`
        } else {
          output += from
        }
      }
      el.innerHTML = output
      if (complete === queue.length) {
        resolvePromise()
      } else {
        frameRequest = requestAnimationFrame(this.update)
        frame++
      }
    }

  }



  const fx = new TextScramble()

  let counter = 0
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 4000);
    })
    counter = (counter + 1) % phrases.length
  }

  next()
})
</script>

<template>
  <div class="cont">
    <div class="text" translate="no"></div>
  </div>
</template>

<style scoped>
.cont {
  font-family: 'Roboto Mono', monospace;
  /*background-color: #212121 !important;*/
  height: 100%;
  width: 100%;
  justify-content: left;
  align-items: center;
  display: flex;
}
.text {
  font-weight: 100;
  font-size: 22px;
  /*color: #FAFAFA;*/
}
.dud {
  /*color: #757575;*/
}
</style>
