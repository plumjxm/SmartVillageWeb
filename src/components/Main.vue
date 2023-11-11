<template>
  <div id="main" class="flex flex-direction allwidth">
    <!--<navbar  @navSelect='navSelect'/> -->
    <headview  @navSelect='navSelect' :drawer="drawer"/> 
    <div :class="navclass" class="allbg flex flex-direction justify-between">
      <router-view></router-view>
      <footview/>

      <div  class="right" v-show="drawer">
        <rightviewmobile  :openBe="drawer" @navSelect='navRBtnClick' @closeBtnClick="drawer = false"/>
      </div>
      
    </div>

      
  </div>
</template>

<script>
import headview from './nav/headview.vue'
import elementResizeDetector from "element-resize-detector";
import rightviewmobile from "./nav/rightviewmobile.vue"

import footview from "./foot/foot.vue"

import {getBgClassType,openUrl}  from '../tools/common'

export default {
  components:{headview,footview,rightviewmobile},
  //name: 'main',
  data () {
    return {
      appname:this.Global.appname,

      drawer: false,
      navclass:"",
      bgclasstype:0,


    }
  },
  mounted () {
      this.setbgStyle();
      this.ResizeView();
  },
  created () {
    
  },
  methods:{

    setbgStyle(){
        let bgclasstype = getBgClassType()
        this.bgclasstype = bgclasstype
        this.navclass = (bgclasstype==3)?"nav-top_mobile":"nav-top"


    },
    ResizeView(){
        const that = this
        var appview = document.getElementById('main')
        var erd = elementResizeDetector();
        that.$nextTick(() => { 
            erd.listenTo(appview, (element) => {   //监听的domdocument.get方法获取
                
                that.setbgStyle()
                // console.log("-main-setbgStyle--",appview.clientWidth)

            });

        });

    },    

    navRBtnClick(tag,item){

        this.drawer = false;
        this.navSelect(tag,item);

    },
    navSelect(key,item){
      if(key == 333){
        this.drawer = !this.drawer;
        return;
      }
      if(item==null){

        return;
      }
      // var r = this.$route.path;
      if(key==8){
        let url = "https://voics.zhiyuanyun.com"
        openUrl(url)

        return;
      }
      if(key==3||key==4||key==6||key==7){
        let idstr = item.id
        let p = '/?id='+idstr
        this.$router.push(p);
        return

      }
      var path = item.path;
      this.$router.push(path);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.allbg{

  min-height: calc(100vh - 79px);
  /* position: relative; */
  /* overflow-y:scroll; */
}
.right{
  position:absolute;
  right: 0;
  left: 0;
  top:0;
  bottom: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.3);

}
</style>
