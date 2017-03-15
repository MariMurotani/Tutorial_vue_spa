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
              <a href="#">This is a link</a>
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
        {title: '猫1', comment: 'すき', image: '/static/images1.jpeg'},
        {title: '猫2', comment: 'ラブ', image: '/static/images2.jpeg'},
        {title: '猫2', comment: 'ラブ', image: '/static/images3.jpeg'},
        {title: '猫1', comment: 'すき', image: '/static/images4.jpeg'},
        {title: '猫2', comment: 'ラブ', image: '/static/images5.jpeg'},
        {title: '猫2', comment: 'ラブ', image: '/static/images6.jpeg'}
      ]
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
</style>
