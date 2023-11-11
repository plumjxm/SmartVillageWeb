<template>
    <div id="aboutusbanner" class="banner">
        <el-image fit='cover' :src="item.icon" class="bgimg"></el-image>
        <div  class="meg flex flex-direction align-center justify-center" :class='sectionbgw'>
            <label :style="titlestyle" style="font-weight: 500;color:#323232;">{{item.title}}</label>
            <label  class="text-center intro" :style="introstyle" style="font-weight: 400;margin-top:50px;color:#343434;">{{trimintro()}}</label>
        </div>
    </div>


</template>

<script>
import {isMobile,getCenterClass,getBgClassType,trimAll}  from '../../tools/common'
import elementResizeDetector from "element-resize-detector";

export default {
    name: '',
    data () {
        return {
            bgclasstype:0,
            sectionbgw:'',
            ismobile: isMobile(),
            titlestyle:'',
            introstyle:'',

        
            
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
        trimintro(){

            return trimAll(this.item.intro)
        },
        getTitleFontSizeWithType(){

            let titlesize = 30
            switch(this.bgclasstype){
                case -1:
                    titlesize = 40
                    break
                case 0:
                    titlesize = 36
                    break
                case 1:
                    titlesize = 34
                    break
                case 2:
                    titlesize = 30
                    break
                default:
                    break


            }
            let titlefont =  `font-size: ${titlesize}px`
            this.titlestyle = titlefont
    

        },
        getIntroFontSizeWithType(){
            let titlesize =this.bgclasstype==-1?15: 14
            let lineh = titlesize +6
            let titlefont =  `font-size: ${titlesize}px;line-height: ${lineh}px;`
            this.introstyle = titlefont
    

        },
        setbgStyle(){
            
            //this.sectionbgw = this.ismobile? 'mallw_mobile':'mallw' 
            this.sectionbgw = getCenterClass() 
            let type = getBgClassType()
            this.bgclasstype = type

            this.getTitleFontSizeWithType()
            this.getIntroFontSizeWithType()


        },
        ResizeView(){
        
            const that = this
            let idstr = 'aboutusbanner'
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
    height: 540px;
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
.intro{

    background: rgba(255,255,255,0.2);
    border-radius: 8px;
    opacity: 1;
    border: 1px solid rgba(255,255,255,0.5);
    padding:20px;
}
</style>