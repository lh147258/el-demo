<template>
  <div>
    <v-header></v-header>
    <nav class="solid-nav">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in foodsType" :key="index" style="display: flex;flex-wrap: wrap">
          <figure v-for="(foodItem,foodIndex) in item" :key="foodIndex"
                  style="width: 25%;text-align: center;margin-bottom: 1rem">
            <img :src="imgBaseUrl+foodItem.image_url" style="width: 4rem;height:4rem;margin-bottom: 0.5rem"/>
            <p>{{foodItem.title}}</p>
          </figure>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </nav>
    <div class="shop-list">
      <shop-lsit></shop-lsit>
    </div>
  </div>
</template>

<script>
  import ShopLsit from '../components/layout/ShopList'
  import VHeader from '../components/layout/Header'
  import {getFoodsType} from '../server/Food'
  import {getCityData} from '../server/getCityData'
  import {mapMutations} from 'vuex'

  export default {
    name: "Meta",
    data() {
      return {
        foodsType: [],
        imgBaseUrl: 'https://fuss10.elemecdn.com', //图片域名地址
        swiperOption: {
          autoplay: true,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          }
        }
      }
    },
    async beforeMount() {
      var saveData = {}
      if (!this.$route.query.geohash) {
        let cityData = await getCityData()
        saveData = {
          latitude: cityData.latitude,
          longitude: cityData.longitude
        }
      } else {
        let arr = this.$route.query.geohash.split(',')
        saveData = {
          latitude: arr[0],
          longitude: arr[1]
        }
      }
      this.saveShopaddress(saveData)
    },
    mounted() {
      getFoodsType().then(res => {
        let rs = [...res]
        let resLength = res.length
        let resdata = []
        for (let i = 0, j = 0; i < resLength; i += 8, j++) {
          resdata[j] = rs.splice(0, 8)
        }
        this.foodsType = resdata
      })
    },
    methods: {
      ...mapMutations([
        'saveShopaddress'
      ])
    },
    components: {
      VHeader,
      ShopLsit
    }
  }
</script>

<style lang="scss">
  /*导航区（头部）*/
  @import "../assets/sty/mian.scss";

  .solid-nav {
    @include wh(100%, auto);
    border: solid 1px red;
    background-color: #fff;
    padding-top: 0.5rem;
  }

</style>
