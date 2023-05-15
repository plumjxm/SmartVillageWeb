<template>
    <div id="mnavBar" style="height:80px;" class="nav bg-shadow-bottom-light bg-white flex align-center justify-between">
         
         <div class="mallw_mobile flex align-center  justify-between">
            <div class="flex align-center text-black">
                <div class="flex align-center">
                    <el-image style="width:36px;height:36px" class="round margin-right-sm" src="static/logo.png" ></el-image>
                    <label class="navtitle">{{Global.appname}}</label>
                </div>
             </div>
              <div class="flex align-center">
                <div  class="shou downbtn purplebg text-white text-df radius"   
                      @click="navBtnClick(222)">下载</div>
                <div class="shou margin-left" @click="navBtnClick(333)">
                    <svgIcon style="fill: black;"  name="menu" :scale="2.4"></svgIcon>
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
  components: {},
  mounted () {

    this.ResizeView();
  },
  methods: {

      
      navBtnClick(tag){
               
       //console.log("-cellclick---",tag);

        this.$emit("navSelect",tag)

      },
      ResizeView(){
     
            const that = this
            let w = 1200
            var appview = document.getElementById('mnavBar')
            var erd = elementResizeDetector();
            erd.listenTo(appview, (element) => {   //监听的domdocument.get方法获取
               let width_screen = element.offsetWidth;

               that.$nextTick(() => { 
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
 
 .nav{
    
     position: fixed;
     left: 0;
     top: -80px;
     width: 100%;
     z-index: 1000;
      
    

 }
 .downbtn{

     padding: 6px 15px;
     border: 1px solid var(--darkpurple);

}
.downbtn:hover{
    border:none;
}
</style>