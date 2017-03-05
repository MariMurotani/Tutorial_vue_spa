//  インポートします。
import Vue from 'vue'
import PropertyStore from '../../models/PropertyStore.js'

//  ニックネーム表示用のヘッダーコンポーネントを作成
export var NickNameHeader = Vue.extend({
  name: 'nickname_header',
  template: '<div class="nickname">{{ sharedState.state.property.nickname }}</div>',
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})

//  インプットフォーム用のコンポーネントを作成
export var InputText = Vue.extend({
  name: 'nickname_input',
  template: '<input class="input" v-model="sharedState.state.property.nickname" placeholder="NICKNAMEを入力してください。">',
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})

//  ボタン用のコンポーネントを作成
export var InputButton = Vue.extend({
  name: 'input-button',
  template: '<button class="button" v-on:click="validate">START</button>',
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  },
  methods: {
    validate: function (event) {
      console.log(this.$el)
      var valid = false
      try {
        valid = this.$data.sharedState.validate()
        if (valid) {
          this.$router.push('/scene2')
        }
      } catch (e) {
        alert(e.message)
      }
    }
  }
})
