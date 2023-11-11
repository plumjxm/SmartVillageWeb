<template>
    <div v-if="bgclasstype==3" id="homebanner"  class="allbanner banner-xs">
        <el-image fit='cover' :src="item.iconxs" class="bgimg-xs"></el-image>
        <div  class="meg-xs text-white flex flex-direction align-center" :class='getallmegclass()'>
            <el-image   :src="titleimg" style="width:95%;margin-bottom:40px;"></el-image>
            <div>
                <div class="flex">
                    <div v-for="intro,index in item.intro1" :style="index==item.intro1.length-1?'':'margin-right:5px;'" :class="bgclasstype==2?'yr-sm':'yr-xs'" class="yrcolor flex align-center justify-center round">{{intro}}</div>
                </div>
                <div class="flex  margin-top">
                    <div v-for="intro,index in item.intro2" :style="index==item.intro1.length-1?'':'margin-right:5px;'" :class="bgclasstype==2?'yr-sm':'yr-xs'" class="yrcolor flex align-center justify-center round">{{intro}}</div>
                </div>
            </div>
        </div>
    </div>
    <div v-else id="homebanner" class="allbanner banner">
        <el-image fit='cover' :src="item.icon" class="bgimg"></el-image>
        <div  class="meg text-white flex flex-direction align-center" :class='getallmegclass()'>
            <el-image   :src="titleimg" :style="bgclasstype==2?'width:80%;':'width:70%;'" style="margin-bottom:60px;"></el-image>
            <div v-if="bgclasstype!=2" class="flex">
                <div v-for="intro,index in item.intro1" :style="index==item.intro1.length-1?'':'margin-right:5px;'" :class="bgclasstype==1?'yr-sm':'yr'"  class="yrcolor flex align-center justify-center round ">{{intro}}</div>
                <div style="width:45px;"></div>
                <div v-for="intro,index in item.intro2" :style="index==item.intro1.length-1?'':'margin-right:5px;'" :class="bgclasstype==1?'yr-sm':'yr'" class="yrcolor flex align-center justify-center round">{{intro}}</div>

            </div>
            <div v-else>
                <div class="flex">
                    <div v-for="intro,index in item.intro1" :style="index==item.intro1.length-1?'':'margin-right:5px;'" :class="bgclasstype==2?'yr-sm':'yr-xs'" class="yrcolor flex align-center justify-center round">{{intro}}</div>
                </div>
                <div class="flex  margin-top">
                    <div v-for="intro,index in item.intro2" :style="index==item.intro1.length-1?'':'margin-right:5px;'" :class="bgclasstype==2?'yr-sm':'yr-xs'" class="yrcolor flex align-center justify-center round">{{intro}}</div>

                </div>
            </div>
        </div>
    </div>


</template>

<script>
import {getCenterClass,getBgClassType}  from '../../tools/common'
import elementResizeDetector from "element-resize-detector";

export default {
  name: '',
  data () {
    return {
        bgclasstype:0,
        sectionbgw:'',
        titleimg:require("../../../static/banner/title.png")

    
        
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
    getallmegclass(){

        let meg = this.sectionbgw
        if(this.bgclasstype==3){
            meg += ' meg-xs'

        }
        return meg


    },
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
           
        this.sectionbgw = getCenterClass() 
        let type = getBgClassType()
        this.bgclasstype = type


    },
     ResizeView(){
     
        const that = this
        let idstr = 'homebanner'
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
#homebanner{

    --allh:540px;
}
.allbanner{

    width: 100%;
    display: inline-block;
    position: relative;
    overflow: hidden;
}
.banner{

    height: var(--allh);
    
}
.banner-xs{
    height: auto;
}
.bgimg-xs {
    width: 100%;
    min-height:400px;
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
    top: 108px;
    z-index: 1;
}
.meg-xs{
    position: absolute;
    top: calc(50% - 100px);
    z-index: 1;

}
.yrcolor{
    color:#E4F791;
    background:#016E36;

}
.yr{

    font-weight: 400;
    width:40px;
    height:40px;
    
    font-size:20px;
}
.yr-sm{

    font-weight: 400;
    width:30px;
    height:30px;
    
    font-size:15px;
}
.yr-xs{

    width:26px;
    height:26px;
    
    font-size:13px;
}
</style>