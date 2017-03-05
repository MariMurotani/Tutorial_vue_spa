<template>
  <div class="scene1">
    {{ sharedState.props.type }}
    <div class="nickname">{{props.type}}A custom component!{{nickname}}</div>
    <input class="input" v-model="nickname" placeholder="NICKNAMEを入力してください。">
    <router-link to="/scene2" class="button">START</router-link>
    <input v-model="parentMsg">
    <child v-bind:my-message="parentMsg"></child>

  </div>
</template>

<script>

//  ストア
var store = {
  debug: true,
  state: {
    props: {
      type: '1',
      nickname: 'default nick name'
    }
  },
  setNickNameAction (newValue) {
    this.debug && console.log('setMessageAction triggered with', newValue)
    this.state.props.nickname = newValue
  },
  clearNickNameAction () {
    this.debug && console.log('clearMessageAction triggered')
    this.state.nickname = ''
  }
}

export default {
  data () {
    return {
      privateState: {},
      sharedState: store.state
    }
  }
}

import Vue from 'vue'
var MyComponent = Vue.extend({
  name: 'parentMsg',
  template: '<div id="nickname" class="nickname">A custom component!{{nickname}}</div>',
  data: function () {
    return {
      nickname: 'Hello!',
      parentMsg: ''
    }
  }
})

Vue.component('my-component', MyComponent)
Vue.component('child', {
  // JavaScript ではキャメルケース
  props: ['myMessage'],
  template: '<span>{{ myMessage }}</span>',
  data: function () {
    return {
      parentMsg: 'GoodEvening'
    }
  }
})

</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.scene1{
  font-size: 1.8rem;
  text-align: center;
a div p{
  display: block;
  margin: 0 auto;
  height:30pt;
}
}
.nickname{
  display: block;
  height: 3rem;
}
.input{
  width: 130pt;
  height:30pt;
}
.button {
  display: block;
  position: relative;
  margin: 0 auto;
  width: 70pt;
  border: solid 1px silver;
  border-radius: 0.5rem 0.5rem;
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;
  text-decoration: none;
}

</style>
