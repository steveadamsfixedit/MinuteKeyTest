<template>
  <div>
    <ul>
      <li v-for="model in models">
        {{ model }}
      </li>
    </ul>
  </div>
</template>

<script>
import states from './json/data.json'
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
