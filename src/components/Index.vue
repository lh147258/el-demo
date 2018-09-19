<template>
  <div>
    <v-header></v-header>
    <nav class="city_nav">
      <div class="city_tip">
        <span>当前定位城市：</span>
        <span>定位不准时，请在城市列表中选择</span>
      </div>
      <label class="guess_city">
        <span>{{cityInfo.name}}</span>
      </label>
    </nav>
    <section id="hot_city_container">
      <h4 class="city_title">热门城市</h4>
      <ul class="citylistul clear">
        <li tag="li" v-for="item in hotCity" @click="goCitySeach(item.id)">
          {{item.name}}
        </li>
      </ul>
    </section>
    <section class="group_city_container">
      <ul class="letter_classify">
        <li v-for="(value, key, index) in allData" :key="key" class="letter_classify_li">
          <h4 class="city_title">{{key}}
            <span v-if="index == 0">（按字母排序）</span>
          </h4>
          <ul class="groupcity_name_container citylistul clear">
            <li tag="li" v-for="item in value" class="ellipsis" @click="goCitySeach(item.id)">
              {{item.name}}
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import VHeader from './layout/Header'
  import {getCityData} from '../server/getCityData'

  export default {
    name: "Index",
    data() {
      return {
        cityInfo: {},
        hotCity: [],
        allData: null,
        testVal: '1111111'
      }
    },
    created() {
      console.log(this.testVal)
      getCityData('guess').then(res => {
        console.log(22)
        this.cityInfo = res
      })
      getCityData('hot').then(res => {
        console.log(3)
        this.hotCity = res
      })
      getCityData('group').then(res => {
        var resData = {}
        for (let i = 65; i <= 90; i++) {
          if (res[String.fromCharCode(i)]) {
              resData[String.fromCharCode(i)] = res[String.fromCharCode(i)]
          }
        }
        this.allData = resData
      })
    },
    components: {
      VHeader
    },
    computed: {
    },
    methods: {
      goCitySeach(id) {
        this.$router.push({path: `/city/${id}`})
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/sty/mian";

  .nowCity {
    margin-top: 0.2rem;
  }

  .head_logo {
    left: 0.4rem;
    font-weight: 400;
    @include sc(0.7rem, #fff);
    @include wh(2.3rem, 0.7rem);
    @include ct;
  }

  .city_nav {
    border-top: 1px solid $bc;
    background-color: #fff;
    margin-bottom: 0.4rem;
    .city_tip {
      @include fj;
      line-height: 1.45rem;
      padding: 0 0.45rem;
      span:nth-of-type(1) {
        @include sc(0.55rem, #666);
      }
      span:nth-of-type(2) {
        font-weight: 900;
        @include sc(0.475rem, #9f9f9f);
      }

    }
    .guess_city {
      @include fj;
      align-items: center;
      height: 1.8rem;
      padding: 0 0.45rem;
      border-top: 1px solid $bc;
      border-bottom: 2px solid $bc;
      @include font(0.75rem, 1.8rem);
      span:nth-of-type(1) {
        color: $blue;
      }
      .arrow_right {
        @include wh(.6rem, .6rem);
        fill: #999;
      }
    }
  }

  #hot_city_container {
    background-color: #fff;
    margin-bottom: 0.4rem;
  }

  .citylistul {
    li {
      float: left;
      text-align: center;
      color: $blue;
      border-bottom: 0.025rem solid $bc;
      border-right: 0.025rem solid $bc;
      @include wh(25%, 1.75rem);
      @include font(0.6rem, 1.75rem);
    }
    li:nth-of-type(4n) {
      border-right: none;
    }
  }

  .city_title {
    color: #666;
    font-weight: 400;
    text-indent: 0.45rem;
    border-top: 2px solid $bc;
    border-bottom: 1px solid $bc;
    @include font(0.55rem, 1.45rem, "Helvetica Neue");
    span {
      @include sc(0.475rem, #999);
    }
  }

  .letter_classify_li {
    margin-bottom: 0.4rem;
    background-color: #fff;
    border-bottom: 1px solid $bc;
    .groupcity_name_container {
      li {
        color: #666;
      }
    }
  }
</style>
