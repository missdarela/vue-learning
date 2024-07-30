<script setup>
// REACTIVITY
// ref takes count and returns the .value props
import Playground from "../components/section3playground/perspectivePlayground.vue"
import { reactive, ref, computed, watch } from "vue";

const state = reactive({ count: 0 });
const count = ref(1);
const url = ref("https://www.google.com");

// v-html
const rawHtml = ref("<a href='google.com'>click google</a>");
const obj = ref({
  nested: { count: 0 },
  arr: ["red", "green", "yellow"],
});
const fname = ref("Esther");
const mname = ref("Okon");
const lname = ref("Umoh");

// Events
const val = ref(0);
const increment = function () {
  return val.value++;
};

// computed properties with getter and setter
const fullName = computed({
  // getter
  get() {
    return fname.value + " " + mname.value + " " + lname.value;
  },
  // setter
  set(newValue) {
    // destructuring
    return ([fname.value, mname.value, lname.value] = newValue.split(" "));
  },
});

// update lastname/ passing data or args with events
const updateLastName = function (msg, event) {
  console.log(msg);
  lname.value = event.target.value;
};

// keyboard event modifiers
const updateMiddleName = function (event) {
  mname.value = event.target.value;
};

//WATCHERS
watch(count, () => {
  setTimeout(() => {
    count.value = 30;
    console.log("watch it");
  }, 3000);
});

// instead, use a getter:
watch(
  () => obj.count,
  (count) => {
    console.log(`Count is: ${count}`);
  }
);

// class binding
const isPurple = ref(false);
// tailwind class binding
const bg = ref('bg-red-300')

// style binding
const size = ref(150);

// conditional rendering
const mode = reactive(1);
const birds = reactive([
  "eagles","pigeon","parrots",
  "owl","chicken","vultures","dove"
])

const people = reactive([
  {name:"John", age:20},
  {name:"Rick", age:33},
  {name:"Amy", age:18}
]);
</script>

<template>
  <section class="p-10">
    <button class="bg-red-500 w-1/5 text-light rounded-full" @click="count++">
      {{ count }}
    </button>
    <br />
    <button
      class="bg-gray-500 w-1/5 text-light rounded-full"
      @click="state.count++"
    >
      {{ state.count }}
    </button>
    <a :href="url">click here</a>

    <!-------------------Outputting Raw HTML  ------------------>
    <h3 class="text-3xl text-blue-700" v-html="rawHtml"></h3>
    <h3 class="text-3xl">{{ rawHtml }}</h3>

    <!-----------------------V-MODEL  ------------------------------->
    <p class="text-green-600 text-4xl">{{ fullName }}</p>
    <hr />
    <label for="fname">FirstName</label><br />
    <input class="border-2" type="text" name="" id="" v-model="fname" /> <br />

    <!-- keyboarb event modifiers----------------------- -->
    <label for="fname">Middle Name</label><br />
    <input
      class="border-2"
      type="text"
      name=""
      id=""
      @keyup.enter="updateMiddleName"
      :value="mname"
    />
    <br />

    <label for="lname">LastName</label><br />
    <!-- passing data with $event/ event modifiers -->
    <input
      class="border-2"
      type="text"
      name=""
      id=""
      :value="lname"
      @input.prevent="updateLastName('lastname event triggered', $event)"
    />

    <!--------------------------------------Events  -------------->
    <p>{{ val }}</p>
    <button class="bg-green-600 p-2 text-white" @click.ctrl="increment">
      increment
    </button>
    <button class="bg-green-900 p-2 ml-5 text-white" @click="val--">
      decrement
    </button>

    <!-----------------Vmodel modifiers:number, lazy, trim------------------>
    <p class="text-xl font-bold">V-model modifiers</p>
    <br />
    <input class="border-2" type="number" v-model.number="val" /><br />
    <input class="border-2" type="text" v-model.lazy.trim="fname" />
    <br /><br />

    <!-------------Class Binding---------->
    <label for=""> <input type="checkbox" v-model="isPurple" /> Purple </label>
    <br /><br />

    <!-----------style binding ----------->
    <input :class="bg" class="border" type="number" v-model.number="size" />
    <div
      class="border rounded-full w-20 text-xl text-center p-4 bg-green-500 text-white"
      :class="{ purple: isPurple }"
      :style="[
        { width: size + 'px', height: size + 'px', lineHeight: size + 'px' },
        { transform: 'rotate(300deg)' },
      ]"
    >
      Hii
    </div>

    <!----------conditional rendering -------->
    <!-- <div class="text-xl"> -->
    <p v-if="mode == 1">v-if first</p>
    <div v-else-if="mode == 2">
      <h4>v-else-if follows v-if or another v-else-if</h4>
      <p>They have to be on the same level to work</p>
    </div>
    <p v-else>if v-if and v-else arent true</p>
  <!-- </div> -->
   <!--------v-show  -------->
   <i v-show="mode==1">v-show example</i>

    <select class="border p-5 m-10" name="" id="" v-model="mode">
      <option value="1">v-if</option>
      <option value="2">v-else-if</option>
      <option value="3">v-else</option>
    </select>

    
   <!-----------list rendering (v-for) ------->
   <ul>
    <li v-for="(bird,index) in birds" :key="index">
      {{ bird }}--{{ index }}
    </li>
   </ul>

   <ul>
    <li v-for="(person, key) in people" :key="key">
      {{ person.age }} <br/>
      {{ person.name }}
    </li>
   </ul>

<!--------playground -------- -->
<Playground/>

    
  </section>
</template>

<style scoped>
.purple {
  background-color: plum;
}
</style>
