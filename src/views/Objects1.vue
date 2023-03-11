<template>
  <div class="about" id="objects" v-for="(item, index) in lists" :key="item.id">
    <RouterLink :to="'/bikes/' + item.id">
     {{ item.title }} {{ item.id }}
    </RouterLink>
  </div>
</template>

<script>
import json from '@/assets/data.json'
export default {
  name: 'Object',
  data() {
    return {
      id: this.$route.params.id,
      object: {},
    };
  },
  mounted() {
    this.object = json.objects.find(item => item.id == this.$route.params.id)
  }
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
