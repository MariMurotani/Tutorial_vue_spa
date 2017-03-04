<template>
  <div class="scene1">
    <nickname-header></nickname-header>
    <input-text></input-text>
    <router-link to="/scene2" class="button">START</router-link>
  </div>
</template>

<script>
//  インポートします。
import Vue from 'vue'

//  デフォルト値定義
export default {

}

//  ニックネーム表示用のヘッダーコンポーネントを作成
var NickNameHeader = Vue.extend({
  name: 'nickname_header',
  template: '<div class="nickname">{{ property.nickname }}</div>',
  data: function () {
    return {
      property: {
        nickname: 'Default value'
      }
    }
  }
})
//  コンポーネントを登録
Vue.component('nickname-header', NickNameHeader)

//  インプットフォーム用のコンポーネントを作成
var InputText = Vue.extend({
  name: 'nickname_input',
  template: '<input class="input" v-model="property.nickname" placeholder="NICKNAMEを入力してください。">',
  data: function () {
    return {
      property: {
        nickname: ''
      }
    }
  }
})
//  コンポーネントを登録
Vue.component('input-text', InputText)

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
