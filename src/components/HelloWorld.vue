<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="text-blue text-sans text-xl">{{ msg }}</h1>
    <h3 class="text-base text-light text-red">This is a test project created for MinuteKey</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 300;
  font-size: 40px;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
