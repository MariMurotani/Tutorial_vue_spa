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
import {NickNameHeader, InputText, InputButton} from './forms/Headers.js'

//  デフォルト値定義
export default {
  data () {
    return {

    }
  }
}

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
  background-color: white;
  border: solid 1px silver;
  border-radius: 0.5rem 0.5rem;
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;
  text-decoration: none;
}

</style>
