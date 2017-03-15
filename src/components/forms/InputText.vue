<template>
  <input class="input" v-model="sharedState.state.property.nickname" placeholder="NICKNAMEを入力してください。">
</template>

<script>
//  インポートします。
import PropertyStore from '../../models/PropertyStore.js'

export default {
  name: 'nickname_input',
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
}
</script>
<style scoped>
.input{
  width: 40%;
  height:30pt;
}
</style>
