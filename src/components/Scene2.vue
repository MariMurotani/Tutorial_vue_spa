<template>
  <div class="scene2">
    <nickname-header></nickname-header>
    <image-panel-container class="image_panel"></image-panel-container>
  </div>
</template>

<script>
//  インポート
import Vue from 'vue'
import NickNameHeader from './forms/Header'
import ImagePanelContainer from './forms/ImagePanelContainer'

//  デフォルト値定義
export default {
  data () {
    return {

    }
  }
}
//  コンポーネントを登録
Vue.component('nickname-header', NickNameHeader)
Vue.component('image-panel-container', ImagePanelContainer)

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
.scene2 {
  display: block;
  position: realative;
  font-size: 1.8rem;
  text-align: center;
  width: 92%;
  height: 100%;
}
.image_panel{
  top: 200px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
