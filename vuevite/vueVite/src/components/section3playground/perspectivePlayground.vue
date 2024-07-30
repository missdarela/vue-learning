<script setup>
// import 'css-doodle';

import { ref, computed } from "vue";

const perspective = ref(0);
const rotateX = ref(0);
const rotateY = ref(0);
const rotateZ = ref(0);
const red = ref(100);
const green = ref(40);
const blue = ref(0);

// const color = `rgb(${red.value},${green.value},${blue.value} )`

const box = computed(() => {
  return `
 transform: perspective(${perspective.value}px)
              rotateX(${rotateX.value}deg)
              rotateX(${rotateY.value}deg)
              rotateX(${rotateZ.value}deg)
  ,
  backgroundColor:rgb(${red.value},${green.value},${blue.value})
 `;
});
function reset() {
  perspective.value = 100;
  rotateX.value = 0;
  rotateY.value = 0;
  rotateZ.value = 0;
}
const copy = async () => {
  try {
    let text = `transform:${box.value}`;
    await navigator.clipboard.writeText(text);
    alert("copied");
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <main class="bg-black">
    <section class="settings">
      <div class="settings-container">
        <label>Perspective: {{ perspective }} px</label>
        <input type="range" min="0" max="999" v-model="perspective" />

        <label>RotateX: {{ rotateX }} deg </label>
        <input type="range" min="-180" max="180" v-model="rotateX" />

        <label>RotateY: {{ rotateY }} deg</label>
        <input type="range" min="-180" max="180" v-model="rotateY" />

        <label>RotateY: {{ rotateZ }} deg </label>
        <input type="range" min="-180" max="180" v-model="rotateZ" />

        <label>Background Color:</label>
        <label>{{ red }} Red</label>
        <input type="range" min="0" max="255" v-model="red" />

        <label>{{ green }} Green</label>
        <input type="range" min="0" max="255" v-model="green" />

        <label>{{ blue }} Blue</label>
        <input type="range" min="0" max="255" v-model="blue" />

        <button type="button" @click.prevent="reset">Reset</button>
        <button type="button" @click.prevent="copy">Copy</button>
      </div>
    </section>
    <section class="output">
      <div class="box-container">
        <div class="box" :style="box"></div>
      </div>
    </section>
  </main>
</template>

<style scoped>
html {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  padding: 0;
  margin: 0;
}
body {
  font-family: sans-serif;
  height: 100%;
  margin: 0;
  background: #261c33;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

h2 {
  color: #8d81f3;
  text-align: center;
  font-size: 40px;
  margin: 20px;
}
main {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 600px;
  max-width: 768px;
  margin: 0 auto;
  font-family: monospace, sans-serif;
  font-size: 22px;
}
main label {
  display: block;
}
main input[type="range"] {
  display: block;
  margin-bottom: 10px;
  width: 200px;
}
section.settings {
  width: 50%;
  z-index: 2;
}
.box-container {
  padding: 50px;
  border: 1px solid #8d81f3;
}
.box {
  width: 150px;
  height: 150px;
  background: #8d81f3;
}

button {
  background-color: #8d81f3;
  color: #fff;
  display: inline-block;
  font-size: 20px;
  padding: 10px;
  outline: none;
  border: none;
  margin-right: 10px;
}

label {
  color: #fff;
}
</style>
