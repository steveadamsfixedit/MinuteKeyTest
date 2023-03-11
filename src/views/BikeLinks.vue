<template>
  <RouterLink to='/bikes'>
    <div class="BikeLinks" v-bind:class="type">
      <h1>{{ title }}</h1>
    </div>
  </RouterLink>
</template>

<script>
export default {
  name: 'BikeLinks',
  props: {
    title: String,
    type: String
  }
}
</script>
