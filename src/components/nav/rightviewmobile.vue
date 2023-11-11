<template>
    <div id="rightviewmobile" class="allwidth" @click="closeBtnClick()">
        <div :class="navclass" class="bg-white">
            <div :class="headbgclass" class="flex align-center justify-between allheight">
                <div class="flex align-center">
                    <el-image :style="logosize" class="shou  margin-right-sm" :src="logoicon" ></el-image>
                    <label class="text-black" :style="titlefont">{{Global.appname}}</label>
                </div>
                <div class="shou" @click="closeBtnClick()">
                    <svgIcon style="fill: #333333;width:24px;"  name="close" :scale="1.65"></svgIcon>
                </div>

            </div>
        </div>
        <div class="allheight bg">
            <div  class="box flex flex-direction bg-white">
                <div v-for="item in titlearr" class="shou oneviewbg" :class="selectpath==item.path?'choosefoot':''"   @click="navBtnClick(item.tag,item)">
                    <div :class="headbgclass">
                        <label  :style="oneviewstyle" class="oneview" :class="selectpath==item.path?'choosetitle':''">{{item.title}}</label>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
</template>

<script>
import $ from 'jquery'

import svgIcon from 'vue-svg-icon/Icon.vue'
Vue.component('svgIcon', svgIcon)
import elementResizeDetector from "element-resize-detector";
import {getCenterClass,getBgClassType,getnavbtnModels,isMobile} from "../../tools/common"
export default {
    name: '',
    data () {
        return {
            titlearr:getnavbtnModels(),

            selectpath:'home',

            logoicon:require("../../../static/logo.png"),


            headbgclass:"",
            
            bgclasstype:0,
            logosize:"",
            titlefont:'',

            navclass:'navheight',
            oneviewstyle:'',
            isxs:isMobile(),
            orientation_h:false


        };

    },
    props:{
        openBe:Boolean, // 是否打开弹出层

    },
    
    components: {},
    mounted () {


        this.getorientationS()
        this.watchorientation()

        this.setbgStyle()
        this.routeChanged()
        this.ResizeView()

        this.showAnimate()
    },
    watch: {
        '$route': 'routeChanged',
        openBe(newvalue){
            // console.log("--mounted-")

            if(newvalue){
                this.showAnimate()

            }else{
                //this.hiddenAnimate()


            }
            

        },
        orientation_h(newvalue){
            let that = this
            that.setLineH()

        }
    },
    
    methods: {
        getorientationS(){
            if (window.orientation === 180 || window.orientation === 0) { 
                this.orientation_h = false
            } 
            if (window.orientation === 90 || window.orientation === -90 ){ 
                this.orientation_h = true

            } 

        },
        watchorientation(){
            let that = this
            window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
                that.getorientationS()
            }, false);
            
        },
        
        showAnimate(){
            let wn = this.isxs? 75:100

            let w = wn+'%'
            let p0 = { "right": "0" ,"width": w}

            let r = (-wn)+'%'
            let p1 = { "right": r ,"width": w}
            $(".box").css(p1); 
            $(".box").animate({}, 300, function () {
                //第一个花括号里面是动画内容，可以为空，但不能省去中括号
                $(".box").css(p0); //在回调函数里面改变css属性来实现transform中的动画变换
            })

        },
        hiddenAnimate(){
            let wn = this.isxs? 75:100
            let w = wn+'%'
            let r = (-wn)+'%'

            let p1 = { "right": r ,"width": w}
            $(".box").animate({}, 300, function () {
            //第一个花括号里面是动画内容，可以为空，但不能省去中括号
                $(".box").css(p1); //在回调函数里面改变css属性来实现transform中的动画变换
            })

        },
        routeChanged(){
                //let name = this.$route.name
            let path = this.$route.path
            //console.log('-main-路由变化了--',name)
            let arr = path.split('/')
            if(arr.length>1){
                let p = arr[1]
                let idstr = this.$route.query.id
                if(idstr){
                p = idstr
                }
                this.selectpath = '/'+ p

            }else{
                this.selectpath = path;

            }

        },
        closeBtnClick(){

            this.hiddenAnimate()

            setTimeout(()=>{
                this.$emit("closeBtnClick")
            },200)
        },
        setbgStyle(){
            this.headbgclass = getCenterClass() 

            let type = getBgClassType()
            this.bgclasstype = type
            this.getTitleFontSizeAndLogoWithType()

            this.navclass = (type==3)?"navheight_mobile":"navheight"
        
            this.setLineH()

        },
        setLineH(){
            
            let linh =(this.bgclasstype==3)? 45:55;
            let screenh = document.documentElement.offsetHeight||document.body.offsetHeight;
            console.log("-screenh--",this.bgclasstype)
            let allh = (screenh-80)
            if(this.orientation_h&& allh<linh*this.titlearr.length){
                linh = allh/this.titlearr.length
            }
            this.oneviewstyle = `line-height:${linh}px`
        },
        
        getTitleFontSizeAndLogoWithType(){

            let titlesize = 28
            let logosize = 40

            switch(this.bgclasstype){
                case -1:
                    {
                        titlesize = 28
                        logosize = 40
                        
                    }
                    break
                case 0:{
                        titlesize = 26
                        logosize = 34
                        
                    }
                    break
                case 1:
                    {
                        titlesize = 26
                        logosize = 34
                        
                    }
                    break
                case 2:
                    {
                        titlesize = 24
                        logosize = 32
                    };
                    break
                case 3:
                    {
                        titlesize = 18
                        logosize = 32
                    };
                    break
                default:
                    break


            }
            let titlefont =  `font-size: ${titlesize}px`
            this.titlefont = titlefont
            this.logosize = `width: ${logosize}px;height: ${logosize}px;`


        },
        navBtnClick(tag,item){
                
            this.hiddenAnimate()

            setTimeout(()=>{
                this.$emit("navSelect",tag,item)
            },200)

        },
        ResizeView(){
                

        
                const that = this
                var appview = document.getElementById('rightviewmobile')
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
#rightviewmobile{
    height: 100%;
    position:absolute; position:fixed;
}
.bg{
    position: relative;
    
}  
.oneview{
    color: #3F3F3F;
    font-size: 16px;
    font-weight: 500;
    /* line-height: 45px; */

}
.oneviewbg:hover{
    background: #fafafa;

}
.choosefoot{
    background: #F8F8F8;

}
.choosetitle{
    color: var(--homecolor);

}

/* 弹出层默认样式 */
.box{
    width: 75vw;
    height: 100%;
    position: absolute;
    right: -75vw;
    transition: all 300ms;
    
}

</style>