<template>
  <div class="scene1">
    <p class="name">NICKNAME: {{ nickname }}</p>
    <input class="input" v-model="nickname" placeholder="NICKNAMEを入力してください。">
    <a class="button" href="#">START</a>

  </div>
</template>

<script>
export default {
  name: 'nickname',
  data () {
    return {
      nickname: ''
    }
  }
}
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
