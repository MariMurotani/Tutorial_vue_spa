<template>
  <div id="app">
    <div class="header">
      <img class="img" src="./assets/logo.png">
      <p class="title">Cat LOVER <span>vue</span></p>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer">
      <h2>Cat LOVER Co., Ltd.</h2>
      <ul>
        <li><a href="" target="_blank">TOP</a></li>
        <li><a href="" target="_blank">リクルート</a></li>
        <li><a href="" target="_blank">アクセス</a></li>
        <li><a href="" target="_blank">会社概要</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="scss">
body{
  background-color: silver;
  text-align: center;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: block;
  color: #2c3e50;
  background-color: white;
  width: 80%;
  margin: 0 auto;
  min-width: 600px;
  margin: 0 auto;
}
.header{
  display:block;
  .img {
    display: inline-block;
    width: 15%;
    left: 20%;
    display: inline-block;
  }
  .title{
    display: inline-block;
    width: 30%;
    font-size:2rem;
    span{
      font-size: 2.5rem;
      text-shadow: 1px 1px 3px #000;
    }
  }
}
.footer{
  display:block;
  text-align: center;
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
}
</style>
