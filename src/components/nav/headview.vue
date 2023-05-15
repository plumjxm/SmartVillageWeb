<template>
    <div id="headview"  style="height:80px;" class="purplebg text-white flex align-center">
         
         <div class="mallw flex align-center  justify-between">
            <div class="flex align-center">
                <div class="flex align-center">
                    <el-image style="width:36px;height:36px" class="round margin-right-sm" src="static/logo.png" ></el-image>
                    <label class="navtitle">{{Global.appname}}</label>
                </div>
                 <div v-if="showbtns" class="flex margin-left-xl">
                      <template v-for="(item,index) in titlearr">
                        <label class="shou" :class="index===titlearr.length-1?'':'margin-right-lg'" @click="navBtnClick(item.tag)">{{item.title}}</label>
                      </template>
                 </div>

            </div>
            <div class="flex align-center">
                <div  class="shou downbtn bg-white text-purple text-df radius"   
                      @click="navBtnClick(222)">下载</div>
                <div class="shou margin-left" @click="navBtnClick(333)" v-if="showbtns==false">
                    <svgIcon style="fill: white;"  name="menu" :scale="2.4"></svgIcon>
                </div>
            </div>

         </div>
       
          
     </div>
</template>

<script>
import elementResizeDetector from "element-resize-detector";
import {getnavbtnModels} from "../../../tools/common"

export default {
  name: '',
  data () {
    return {
      showbtns:true,
      titlearr:getnavbtnModels(),
      btnsminw:this.Global.navminw,

    };
  },
   props:{

             
   },
  components: {},
  mounted () {this.ResizeView();},
  methods: {

     
      navBtnClick(tag){
               
         this.$emit("navSelect",tag)

      },
       ResizeView(){
     
            const that = this
            let w = this.btnsminw
            var appview = document.getElementById('headview')
            var erd = elementResizeDetector();
            that.$nextTick(() => { 
                erd.listenTo(appview, (element) => {   //监听的domdocument.get方法获取
                    let width_screen = element.offsetWidth;
                    that.showbtns = (width_screen > w)
                });

            });         
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