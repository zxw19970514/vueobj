<template>
  <div class="element" style="padding-top:40px">
      <div class="qfyuser">
        <div class="regbody">
            <form action="">
                <div class="qfyuser-field">
                    <div class="qfyuser-label"><label for="">账号</label></div>
                    <div class="qfyuser-input "><input type="text" v-model='username'></div>
                </div>
                <div class="qfyuser-clear"></div>
                <div  class="qfyuser-field">
                    <div class="qfyuser-label"><label for="">密码</label></div>
                    <div class="qfyuser-input "><input type="password" v-model='password'></div>
                </div>
                <span v-if="mess">{{mess}}</span>
                <div class="qfyuser-clear"></div>
                <div  class="qfyuser-field qfyuser-submit">
                    <input type="button" class="qfyuser-button" value="登陆" @click='reg'>
                    <router-link to='/Login' tag='span'>
                        <input type="button" class="qfyuser-button secondary" value="注册">
                    </router-link>
                    <a href="" style="float:right">忘记密码,点这里找回</a>
                </div>
            </form>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex';
export default {
    data(){
        return{
            username:'',
            password:'',
            mess:'',
            listData:{}
        }
    },
    methods:{
        reg(){
            axios({
                url:'/api/login',
                method:'post',
                withCredentials: true,
                data:{
                    username:this.username,
                    password:this.password,
                    save:true
                }
            }).then(
                res=>{
                    if(res.data.err==1){
                        this.mess=res.data.msg;
                    }else{
                        this.listData=res.data.data;
                        this.$root.$data.username=this.listData.username;
                        this.$router.push('/user')
                    }
                }
            )
        }
    },
}
</script>

<style scoped>
element {
    display: block;
    width: auto;
    max-width: 100%;
    border-color: #222222;
    border-width: 0;
}
.qfyuser div.qfyuser-field {
    margin: 15px 0 0 0;
    border: 1px solid transparent;
}
.qfyuser div.regbody {
    padding: 0 15px 15px 15px;
    line-height: 18px !important;
}
div.qfyuser-clear {
    clear: both;
}
div.qfyuser * {
    padding: 0;
    margin: 0;
    text-decoration: none;
    outline: none;
    border: 0;
    letter-spacing: 0px;
}
div.qfyuser-label {
    float: left;
    width: 34%;
    margin: 5px 0 0 0;
}
div.qfyuser-input {
    float: right;
    width: 64%;
}
div.qfyuser-input input{
    width: 100% !important;
    height: 30px !important;
    line-height: 30px !important;
    font-size: 13px !important;
    border: 1px solid #ddd !important;
    color: #333 !important;
    border-radius: 3px !important;
    background: #f5f5f5 !important;
    box-shadow: inset 0 -1px 4px #eee !important;
}
.qfyuser div.qfyuser-submit {
    padding-top: 15px;
    border-top: 1px solid #e5e5e5;
    position: relative;
}
.qfyuser-button {
    vertical-align: baseline !important;
    display: inline-block !important;
    padding: 0 10px !important;
    margin: 0 !important;
    margin-right: 15px !important;
    top: 0 !important;
    background: #000000 !important;
    border: 1px solid #000 !important;
    color: #fff !important;
    height: 30px !important;
    line-height: 30px !important;
    box-shadow: inset 0 1px #000000 !important;
}
.secondary{
    background: #fff !important;
    border: 1px solid #ddd !important;
    color: #666 !important;
    box-shadow: inset 0 1px #fff !important;
}
</style>