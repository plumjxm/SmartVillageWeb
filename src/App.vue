<template>
  <div id="app">
      <router-view/>
   </div>
</template>

<script>
import {isMobile}  from './tools/common'

export default {
    name: 'App',
    data () {
      return {
         ismobile: isMobile(),

      }
    },
    mounted() {


        
        this.setroot();
  
        
    },
    destroyed () {
        
    },

    methods:{
       
      
      setroot(){
         var m = this.ismobile?"/mmain":"/"
         var r = this.$router.path;
         //console.log(this.$router);
         if(r==m){
            return;

         }
         this.$router.push({path:m});

           
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
}
 
 </style>
