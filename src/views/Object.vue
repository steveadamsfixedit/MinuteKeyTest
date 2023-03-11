<template>
  <div id="object">
    <div>
      {{ object.id }}
    </div>
    <div>
      {{ object.title }}
    </div>
  </div>
</template>

<script>
import json from '/src/assets/data.json'
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
