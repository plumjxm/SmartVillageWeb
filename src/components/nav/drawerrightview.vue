<template>
  <div style="padding:0 50px;height:100%;"  class="bg-white flex flex-direction  text-black">
    <div class="flex align-center justify-between  margin-tb-lg allwidth">
        <div class="flex align-center">
            <el-image style="width:30px;height:30px" class="round margin-right-sm" src="static/logo.png" ></el-image>
            <label class="navtitle">{{Global.appname}}</label>
        </div>
        
        <div class="shou" @click="closeBtnClick()">
            <svgIcon style="fill: black;"  name="close" :scale="1.5"></svgIcon>
        </div>
       
        <!-- 
        <i @click="closeBtnClick()" class="el-icon-close shou text-black" style="font-size:30px;"></i>
        -->
    </div>
    <template v-for="item in titlearr">
          <label class="sep shou" @click="navBtnClick(item.tag)">{{item.title}}</label>
     </template>
    
   </div>

</template>

<script>
import {getnavbtnModels} from "../../../tools/common"
export default {
  name: '',
  data () {
    return {
      titlearr:getnavbtnModels(),
      
    };
  },
  components: {},
  mounted () {},
  methods: {

    navBtnClick(tag){
               
        this.$emit("navSelect",tag)

    },
    closeBtnClick(){

      this.$emit("closeBtnClick")

    }
  }
}
</script>

<style  scoped>
.navtitle{
    font-weight: bold;
    font-size: 24px;
}
.sep{
  padding: 10px 0;
  font-weight: bold;
  color: rgb(60, 60, 60);
}
</style>