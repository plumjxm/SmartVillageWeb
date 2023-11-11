<template>
   <div id="app" class="text-title">
      <router-view></router-view>
   </div>
</template>

<script>
import {isMobile}  from './tools/common'
//import elementResizeDetector from "element-resize-detector";

export default {
      name: 'App',
      data () {
         return {
            ismobile: isMobile(),
            /*
            screenWidth:window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth*/
         }
      },
      mounted() {


         document.title = this.Global.appname
         //this.setroot();
         // console.log('--app-mounted---');

         
      },
      destroyed () {
         
      },

      methods:{
         
         
         setroot(){
            var m = this.ismobile?"/mmain":"/"
            var r = this.$route.path;
            //console.log('-----'+r);
            if(r==m){
               return;

            }
            //
            //console.log('-----'+r);

            //this.$router.replce({path:m});

            
         },

         
         
         
      
      }



}
</script>
<style>
html,body{

   font-family:"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
   "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
   padding:0;
   margin:0;
   height: 100%;
   /* overflow-y:hidden; */
   /* overflow-x: hidden;  */
   -webkit-text-size-adjust: none;
}
</style>
