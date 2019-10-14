<template>
  <div class="page-title-bar" style="background-color:#fff; color: #000000;">
      <span class="icon-arrow" @click='goback'>&gt;</span>
      <div class='page-title'>注册</div>
  </div>
</template>

<script>
export default {
    methods:{
            goback(){
                this.$router.go(-1);
            }
        }
}
</script>

<style>

</style>