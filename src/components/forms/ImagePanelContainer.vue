<template>
  <div class="image_panel_container">
    <div class="float_image" v-for="(item, index) in items">
      <div id="catlist" class="row" style="margin: auto;">
        <div class="col s12 m7 image_box" style="width:100%">
          <div class="card">
            <span class="card-title">{{ item.title }}</span>
            <div class="card-image">
              <div class="trim">
                <img class="pict" alt="test" v-bind:src="item.image" />
              </div>
            </div>
            <div class="card-content">
              <p>{{ item.comment }}</p>
            </div>
            <div class="card-action">
              <div v-if="item.like" class="heart" v-on:click="like"></div>
              <div v-else class="heart_disable" v-on:click="like"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//  インポート
export default{
  data () {
    return {
      items: [
        {title: '猫1', comment: 'すき', image: '/static/images1.jpeg', like: true},
        {title: '猫2', comment: 'ラブ', image: '/static/images2.jpeg', like: false},
        {title: '猫2', comment: 'ラブ', image: '/static/images3.jpeg', like: true},
        {title: '猫1', comment: 'すき', image: '/static/images4.jpeg', like: false},
        {title: '猫2', comment: 'ラブ', image: '/static/images5.jpeg', like: false},
        {title: '猫2', comment: 'ラブ', image: '/static/images6.jpeg', like: false}
      ]
    }
  },
  methods: {
    like: function (event) {
      this.send(true)
    },
    send: function (boolean) {
      console.log(boolean)
    }
  }
}

</script>
<style lang="scss">
.float_image{
  display: inline-block;
  float: left;
  font-size: 1rem;
}
.trim{
  overflow: hidden;
  width: 180px;/* トリミングしたい枠の幅 */
  min-height: 120px;
  height: 120px;
  position: relative;
}

.heart{
  position:relative;
  margin:0 auto;
  width:15px;
  height:17px;
}
.heart:before,
.heart:after{
  position:absolute;
  content:"";
  width:9.5px;
  height:15px;
  background:pink;
}
.heart:before{
  left:0px;
  transform:rotate(-45deg);
  border-radius:10px 10px 0 0;
}
.heart:after{
  left:4px;
  transform:rotate(45deg);
  border-radius:10px 10px 0 0;
}

.heart_disable{
  position:relative;
  margin:0 auto;
  width:15px;
  height:17px;
}
.heart_disable:before,
.heart_disable:after{
  position:absolute;
  content:"";
  width:9.5px;
  height:15px;
  background:grey;
}
.heart_disable:before{
  left:0px;
  transform:rotate(-45deg);
  border-radius:10px 10px 0 0;
}
.heart_disable:after{
  left:4px;
  transform:rotate(45deg);
  border-radius:10px 10px 0 0;
}

</style>
