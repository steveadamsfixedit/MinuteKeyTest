<template>
  <div model="datail">
    <div>
      {{ datail.model }}
    </div>
    <div>
      {{ datail.manufacturer }}
    </div>
  </div>
</template>

<script>
import json from '@/components/json/data.json'
export default {
  name: 'datail',
  data() {
    return {
      model: this.$route.params.model,
      datail: {},
    };
  },
  methods: {
    getDatails() {
       this.$http.get('/static/data.json/' + this.model)
          .then((response) => {
            console.log(response);
            this.datail = response.body.datails;
          })
    }
  },
  mounted() {
    this.getDatails();
  }
};
</script>
