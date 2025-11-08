<script setup lang="ts">
import { onMounted, ref } from "vue";
import { gsap } from "gsap";

const showFrom = ref(false);

const boxRef = ref<HTMLElement | null>(null);
onMounted(() => {
  if (boxRef.value) {
    gsap.to(boxRef.value, {
      x: 200,
      borderRadius: "50%",
      background: "red",
      duration: 3,
      delay: 1,
      rotate: 360,
    });
  }
});
</script>

<template>
  <h1>From and To</h1>
  <hr />
  <br /><br />
  <button @click="showFrom = !showFrom">From To</button>

  <div v-if="showFrom">
    <div class="box blue" ref="boxRef">Animate Me</div>
  </div>
</template>

<style scoped>
.box {
  height: 80px;
  width: 80px;
}

.blue {
  background: blue;
}
</style>
