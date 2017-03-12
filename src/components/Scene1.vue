<template>
  <div class="scene1">
    <nickname-header></nickname-header>
    <input-text></input-text>
    <input-button></input-button>
  </div>
</template>

<script>
//  インポート
import Vue from 'vue'
import InputButton from './forms/InputButton'
import NickNameHeader from './forms/Header'
import InputText from './forms/InputText'
import PropertyStore from '../models/PropertyStore.js'

export default {
  created: function () {

  }
}
//  ユーザー情報取得
PropertyStore.dispatch('getUser')

//  コンポーネントを登録
Vue.component('nickname-header', NickNameHeader)
//  コンポーネントを登録
Vue.component('input-text', InputText)
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
</style>
