<template>
  <button class="button" v-on:click="validate">START</button>
</template>

<script>
//  インポートします。
import PropertyStore from '../../models/PropertyStore.js'

export default {
  name: 'input-button',
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  },
  methods: {
    validate: function (event) {
      try {
        this.$data.sharedState.dispatch('setUser')
        this.$router.push('/scene2')
      } catch (e) {
        alert(e.message)
      }
    }
  }
}
</script>
<style scoped>
.button {
  display: block;
  position: relative;
  margin: 0 auto;
  background-color: white;
  border: solid 1px silver;
  border-radius: 0.5rem 0.5rem;
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;
  text-decoration: none;
}
</style>
