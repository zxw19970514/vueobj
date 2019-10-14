<template>
  <div class="element">
      <div class="container" style="background-color: #ffffff;padding-top:5px;padding-bottom:15px;">
          <div class="row">
              <div class="album element" style="text-align:center;font-size:14px ;font-weight:normal ;font-style:normal ;font-family:默认 ;color:#fff;">
                  <ul style="padding-left: 10px; padding-top: 5px;" class="typeul">
                      <li style="width: calc(50% - 10px); margin-bottom:5px; margin-right: 10px;"><a href=""><img src="/images/t1.jpg" alt="" style="height: 160px; border-radius:  0px;"></a></li>
                      <li style="width: calc(50% - 10px); margin-bottom:5px; margin-right: 10px;"><a href=""><img src="/images/t2.jpg" alt="" style="height: 160px; border-radius:  0px;"></a></li>
                      <li style="width: calc(50% - 10px); margin-bottom:5px; margin-right: 10px;"><a href=""><img src="/images/t3.jpg" alt="" style="height: 160px; border-radius:  0px;"></a></li>
                      <li style="width: calc(50% - 10px); margin-bottom:5px; margin-right: 10px;"><a href=""><img src="/images/t4.jpg" alt="" style="height: 160px; border-radius:  0px;"></a></li>
                  </ul>
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
}
.container {
    position: relative;
    margin: 0 auto;
}
.row::after {
    content: " ";
    display: table;
    clear: both;
}
.album {
    width: 100% !important;
    height: auto !important;
}
ul.typeul {
    padding-left: 3px;
    padding-top: 3px;
    color: inherit;
    font-size: inherit;
    text-align: inherit;
    text-decoration: inherit;
}
li{
    position: relative;
    float: left;
    text-decoration: inherit;
}
a {
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>