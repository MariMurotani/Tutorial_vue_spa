<template>
  <div class="scene2">
    <h2>シーン２だよ</h2>
    <nickname-header></nickname-header>

  </div>
</template>

<script>
//  インポート
import Vue from 'vue'
import {NickNameHeader} from './forms/Headers.js'

//  デフォルト値定義
export default {
  data () {
    return {

    }
  }
}
//  コンポーネントを登録
Vue.component('nickname-header', NickNameHeader)

</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.scene2{
  font-size: 1.8rem;
  text-align: center;
}
</style>
