<template>
  <div class="element" style="padding-top:40px">
      <div class="qfyuser">
        <div class="regbody">
            <form action="">
                <div class="qfyuser-field">
                    <div class="qfyuser-label"><label for="">电话号码</label><div class="required">*</div></div>
                    <div class="qfyuser-input "><input type="text"></div>
                </div>
                <div class="qfyuser-clear"></div>
                <div  class="qfyuser-field">
                    <div class="qfyuser-label"><label for="">密码</label><div class="required">*</div></div>
                    <div class="qfyuser-input "><input type="password"></div>
                </div>
                <div class="qfyuser-clear"></div>
                <div  class="qfyuser-field qfyuser-submit">
                    <input type="button" value="注册" class="fullwidth-block qfyuser-button">
                    <input type="submit" value="已经有帐号了？请登录" class="fullwidth-block secondary qfyuser-button">
                </div>
            </form>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.element {
    display: block;
    width: auto;
    max-width: 100%;
    border-color: #222222;
    border-width: 0;
}
div.qfyuser {
    border-radius: 5px;
    background: #fff;
    color: #666;
    border: 1px solid #eee;
    font-size: 12px !important;
    line-height: 1 !important;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    text-shadow: none;
}
div.qfyuser * {
    padding: 0;
    margin: 0;
    text-decoration: none;
    outline: none;
    border: 0;
    letter-spacing: 0px;
}
.qfyuser div.regbody {
    padding: 0 15px 15px 15px;
    line-height: 18px !important;
}
.qfyuser div.qfyuser-field {
    margin: 15px 0 0 0;
    border: 1px solid transparent;
}
div.qfyuser-label {
    float: left;
    margin: 0 0 4px 0;
    width: 100%;
    position: relative;
    z-index: 5;
}
.required {
    color: #ff0000;
}
div.qfyuser-input {
    position: relative;
    color: #999;
    float: left;
    width: 100%;
}
div.qfyuser-input input{
    width:100%;
    height: 30px !important;
    font-size: 13px !important;
    line-height: 30px !important;
    border: 1px solid #ddd !important;
    border-radius: 3px !important;
    box-shadow: inset 0 -1px 4px #eee !important;
    background: #f5f5f5 !important;
    color: #333 !important;
}
.qfyuser-submit {
    padding-top: 15px;
    position: relative;
    border-top: 1px solid #e5e5e5;
}
.qfyuser-submit input
{
    height: 30px !important;
    line-height: 30px !important;
}
div.qfyuser-clear {
    clear: both;
}
.fullwidth-block {
    display: block !important;
    width: 100% !important;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    margin-bottom: 5px !important;
    float: none !important;
}
.qfyuser-button.secondary{
    background: #fff !important;
    border: 1px solid #ddd !important;
    color: #666 !important;
    box-shadow: inset 0 1px #fff !important;
}
.qfyuser-button {
    vertical-align: baseline !important;
    display: inline-block !important;
    padding: 0 10px !important;
   
    margin-right: 15px !important;
    top: 0 !important;
    background: #000000 !important;
    border: 1px solid #000 !important;
    color: #fff !important;
    box-shadow: inset 0 1px #000000 !important;
}
</style>