<template>
  <div>
      <div class="element" style='margin-top:65px'>
          <div class="container" style="background-color: #ffffff;margin-top:10px;padding-top:5px;">
            <div style="background-color: #ffffff;padding-bottom: 5px;padding-right: 10px;padding-left: 10px;text-align: left;height: 38px;line-height: 38px;">
                <span class="title">
                    <span class="mark" style="background:#cc0000;left:0px"></span>
                    <span class="text" style="font-size:17px ;font-weight:normal ;font-style:normal ;font-family:默认 ;color:#000000;">卖货高手</span>
                </span>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.element {
    display: block;
    width: auto;
    max-width: 100%;
    border-color: #222222;
    border-width: 0;
    box-sizing: border-box;
}
.container {
    position: relative;
    margin: 0 auto;
}
.title {
    padding-left: 1em;
    position: relative;
    
}
.mark {
    width: 5px;
    background-color: red;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
.text {
    line-height: 25px;
    cursor: pointer;
    font-size: 17px;
    font-weight: normal;
    font-style: normal;
    font-family: 默认;
    color: #000000;
}
</style>