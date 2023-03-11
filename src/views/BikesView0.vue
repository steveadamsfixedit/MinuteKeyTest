<template>
  <div id="bikespage">
    <h1>Click a bike model below to load the details</h1>
    <div id="nav">
    <RouterLink :to="{ model: 'BikeDetail', params: { Model: BikeModel }}"></RouterLink>
      <RouterLink to="/bikes/model/:model">Bike 1</RouterLink> |
      <RouterLink to="/bikes/model/:model">Bike 2</RouterLink> |
      <RouterLink to="/bikes/model/:model">Bike 3</RouterLink> |
      <RouterLink to="/bikes/model/:model">Bike 4</RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<script>
import states from '../components/json/data.json'
export default {
  name: 'TheWelcome',
  computed: {
    models() {
      return states.bikes.map((item) => {
        return item.model
      })
    }
  }
}
</script>
