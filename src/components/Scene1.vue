<template>
  <div class="scene1">
    <nickname-header></nickname-header>
    <input-text></input-text>
    <input-button></input-button>
  </div>
</template>

<script>
//  インポートします。
import Vue from 'vue'

//  データストア
var PropertyStore = {
  debug: true,
  state: {
    property: {
      type: '1',
      nickname: ''
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

//  デフォルト値定義
export default {
  data () {
    return {

    }
  }
}

//  ニックネーム表示用のヘッダーコンポーネントを作成
var NickNameHeader = Vue.extend({
  name: 'nickname_header',
  template: '<div class="nickname">{{ sharedState.property.nickname }}</div>',
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore.state
    }
  }
})
//  コンポーネントを登録
Vue.component('nickname-header', NickNameHeader)

//  インプットフォーム用のコンポーネントを作成
var InputText = Vue.extend({
  name: 'nickname_input',
  template: '<input class="input" v-model="sharedState.property.nickname" placeholder="NICKNAMEを入力してください。">',
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore.state
    }
  }
})
//  コンポーネントを登録
Vue.component('input-text', InputText)

//  ボタン用のコンポーネントを作成
var InputButton = Vue.extend({
  name: 'input-button',
  template: '<button class="button" v-on:click="validate">START</button>',
  methods: {
    validate: function (event) {
      console.log(this.$el)
    }
  }
})
//  コンポーネントを登録
Vue.component('input-button', InputButton)
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
