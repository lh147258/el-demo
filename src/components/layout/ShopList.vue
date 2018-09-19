<template>
  <div>
    <!--<v-list two-line>-->
    <!--<template>-->

    <!--</template>-->
    <!--</v-list>-->'
    shoplist
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {getShopList} from '../../server/shop'

  export default {
    name: "ShopList",
    data() {
      return {
        shopListData: []
      }
    },
    methods: {},
    created() {
      getShopList(this.Shopaddress.latitude, this.Shopaddress.longitude).then(res => {
          this.shopListData = res
      })
    },
    computed: {
      ...mapState([
        'Shopaddress'
      ])
    }
  }
</script>

<style scoped>

</style>
