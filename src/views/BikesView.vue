<template>
  <div>
    <BikeLinks v-for="data in data" />
  </div>
</template>

<script>
import BikeLinks from '@/components/BikesLinks.vue'
import json from '@/components/json/data.json'

export default {
  name: 'bikes',
  data(){
    return{
      data: json
    }
  },
  components: {
    bikeLinks
  }
}
</script>
