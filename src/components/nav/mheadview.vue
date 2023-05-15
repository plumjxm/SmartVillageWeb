<template>
    <div id="mheadview" style="height:80px;" class="purplebg text-white flex align-center">
         
         <div class="mallw_mobile flex align-center  justify-between">
            <div class="flex align-center">
                    <el-image style="width:36px;height:36px" class="round margin-right-sm" src="static/logo.png" ></el-image>
                    <label class="navtitle">{{Global.appname}}</label>
            </div>
            <div class="flex align-center">
                <div  class="shou downbtn bg-white text-purple text-df radius"   
                      @click="navBtnClick(222)">下载</div>
                <div class="shou margin-left" @click="navBtnClick(333)">
                    <svgIcon style="fill: white;"  name="menu" :scale="2.4"></svgIcon>
                </div>
             </div>
            
            
         </div>
         
      
        
     </div>
</template>

<script>
import elementResizeDetector from "element-resize-detector";
 
export default {
  name: '',
  data () {
    return {
 
    };
  },
   props:{

             
   },
  components: { },
  mounted () {this.ResizeView();},
  methods: {
 
      navBtnClick(tag){
               
         this.$emit("navSelect",tag)

      },
       ResizeView(){
     
           
         
           
      },
       
  }
}
</script>

<style  scoped>
.navtitle{
    font-weight: bold;
    font-size: 24px;
}
.downbtn{

    padding: 6px 15px;
    border: 1px solid white;

}
.downbtn:hover{
    border:none;
}
</style>