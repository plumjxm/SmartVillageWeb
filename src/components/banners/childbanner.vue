<template>
    <div :id="`banner${item.title}`" class="banner">
         <el-image fit='cover' :src="item.icon" class="bgimg"></el-image>
         <div  class="meg text-white flex flex-direction align-center justify-center" :class='sectionbgw'>
            <label :style="getTitleFontSizeWithType()" style="font-weight: 500;">{{item.title}}</label>
            <label v-if="item.intro" class="text-center" :style="getIntroFontSizeWithType()" style="font-weight: 400;margin-top:20px;">{{item.intro}}</label>
         </div>
    </div>
   
   
</template>

<script>
import {isMobile,getCenterClass,getBgClassType}  from '../../tools/common'
import elementResizeDetector from "element-resize-detector";

export default {
  name: '',
  data () {
    return {
       bgclasstype:0,
       sectionbgw:'',
       ismobile: isMobile(),

    
        
    };
  },
  props:{
    item:Object
  },
  components: {},
  mounted () {
      this.setbgStyle()
      this.ResizeView()

 
  },
  methods: {
     getTitleFontSizeWithType(){

        let titlesize = 30
        switch(this.bgclasstype){
            case -1:
                titlesize = 36
                break
            case 0:
                titlesize = 36
                break
            case 1:
                titlesize = 30
                break
            case 2:
                titlesize = 30
                break
            default:
                titlesize = 36
                break


        }
        let titlefont =  `font-size: ${titlesize}px`
        return titlefont
 

    },
    getIntroFontSizeWithType(){
        let titlesize = 14
        switch(this.bgclasstype){
            case -1:
                titlesize = 14;
                break
            case 0:
                titlesize = 14;
                break
            case 1:
                titlesize = 12;
                break
            case 2:
                titlesize = 12;
                break
            default:
                titlesize = 12;
                break


        }
        let titlefont =  `font-size: ${titlesize}px`
        return titlefont
 

    },
    setbgStyle(){
           
        //this.sectionbgw = this.ismobile? 'mallw_mobile':'mallw' 
        this.sectionbgw = getCenterClass() 
        let type = getBgClassType()
        this.bgclasstype = type


    },
     ResizeView(){
     
        const that = this
        let idstr = 'banner'+this.item.title
        var appview = document.getElementById(idstr)
        var erd = elementResizeDetector();
        that.$nextTick(() => { 
            erd.listenTo(appview, (element) => {   //监听的domdocument.get方法获取
                 that.setbgStyle()
             
            });

        });
            
          
         
           
      },
  }
}
</script>

<style  scoped>
.banner{
     
   width: 100%;
   height: 300px;
 
    display: inline-block;
    position: relative;
    overflow: hidden;
    
}

.bgimg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
   
}
.meg{
  position: absolute;
  height: 100%;
  top: 0;
  z-index: 1;
}
.web{
  
    width: calc(100% - var(--allJianW));
    left: var(--allLeftW);

}
.mobile{
     width: calc(100% - var(--allJianMobileW));
    left: var(--allLeftMobileW);

}
</style>