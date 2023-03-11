<template>
  <div id="bikes">
    <div>
      {{ bikes.manufacturer }}
    </div>
    <div>
      {{ bikes.model }}
    </div>
  </div>
</template>

<script>
import json from './../assets/data.json'
export default {
  name: 'Bike',
  data() {
    return {
      model: this.$route.params.model,
      bike: {},
    };
  },
  mounted() {
    this.bike = json.bikes.find(item => item.manufacturer == this.$route.params.model)
  }
};
</script>
