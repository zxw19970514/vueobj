<template>
    <div class="Detail">
        <DetailHeader></DetailHeader>
        <DetailMain :detail-data="detailData"></DetailMain>
    </div>
</template>

<script>
import DetailHeader from '../components/DetailHeader'
import DetailMain from '../components/DetailMain'
import axios from 'axios';

export default {
    data(){
        return {
            detailData:{}
        }
    },
    components:{
        DetailMain,DetailHeader
    },
    mounted(){
        let id=this.$route.params.id;
        let dataName=this.$route.query.dataName;
        axios({
            url:`/api/${dataName}/${id}`
        }).then(
            res=>{this.detailData=res.data.data}
        )
    }
}
</script>