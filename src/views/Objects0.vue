<template>
  <div v-for="(item, index) in lists" class="list" :key="item.model">
    <RouterLink :to="'/' + item.model">
     {{ item.manufacturer }} {{ item.model }}
    </RouterLink>
  </div>
</template>

<script>
//import json from '@components/json/data.json'
export default {
  name: 'Objects',
  data() {
    return {
      lists: [],
    };
  },
  methods: {
    getObjects() {
       this.$http.get('./../assets/data.json')
          .then((response) => {
            console.log(response.body);
            this.lists = response.body.objects;
          })
    }
  },
  mounted() {
    this.getObjects();
    console.log(this.lists.model);
  }
};
</script>

<style scoped>

</style>
