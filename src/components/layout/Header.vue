<template>
    <header>
      <span>{{title}}</span>
      <label>
        <span>登录|</span><span>注册</span>
      </label>
    </header>
</template>

<script>
    export default {
        name: "Header",
        data () {
          return {
          }
        },
      props:{
          title:{
            type:String,
            default:"el-demo"
          }
      }
    }
</script>

<style scoped lang="scss">
  @import "../../assets/sty/mian.scss";
  header {
    @include wh(100%,1.95rem);
    font-size: 1rem;
    line-height: 1.95rem;
    background: $blue;
    color: white !important;
    text-align: center;
    label{
     position: absolute;
      right: 1px;
    }
  }
</style>
