<template>
  <div class="page-title-bar" style="background-color:#ffffff; color: #000000;">
      <span class="icon-arrow" @click="goback">&gt;</span>
      <div class="page-title">商店</div>
  </div>
</template>

<script>
export default {
    methods:{
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
.page-title-bar {
    position: fixed;
    width: 100%;
    height: 42px;
    border-bottom: 1px solid #d8d8d8;
    text-align: center;
    color: #fff;
    background-color: rgb(32,18,77);
    cursor: pointer;
    z-index: 999;
}
.icon-arrow {
    position: absolute;
    top: 14px;
    left: 7px;
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
}
.page-title {
    display: inline-block;
    line-height: 42px;
    vertical-align: middle;
    width: 50%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>