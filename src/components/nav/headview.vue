<template>
    <div  id="headview" :class="navclass" class="nav bg-white bg-shadow-bottom-light">
        <div :class="headbgclass" class="flex align-center justify-between allheight">
            <div class="flex align-center" @click="navBtnClick(titlearr[0].tag,titlearr[0])">
                <el-image :style="logosize" class="shou  margin-right-sm" :src="logoicon" ></el-image>
                <label class="text-black" :style="titlefont">{{Global.appname}}</label>
            </div>
            <div v-if="drawer==false">
                <div v-if="showbtns"  class="flex text-black" :style="btnstyle">
                    <template v-for="(item,index) in titlearr">
                        <div style="margin-top:5px;line-height:74px;font-weight:normal" 
                        :style="index==titlearr.length-1?'':'margin-right:24px;'" class="navbtn-home shou"  
                        :class="selectpath==item.path?'choose-foot-home':''" 
                        @click="navBtnClick(item.tag,item)">
                            {{item.title}}

                        </div>
                    </template>
                </div>
                <div v-else class="shou" @click="navBtnClick(333,null)">
                    <svgIcon style="fill: #333333;"  name="menu" :scale="2.6"></svgIcon>
                </div>
            </div>
            <div v-else class="shou" style="margin-right:5px;" @click="navBtnClick(333,null)">
                <svgIcon style="fill: #333333;"  name="close" :scale="1.65"></svgIcon>
            </div>

        </div>
    </div>
</template>

<script>
import svgIcon from 'vue-svg-icon/Icon.vue'
Vue.component('svgIcon', svgIcon)
import elementResizeDetector from "element-resize-detector";
import {getCenterClass,getBgClassType,getnavbtnModels,isMobile,hasScrollbar} from "../../tools/common"
export default {
    name: '',
    data () {
        return {
            titlearr:getnavbtnModels(),

            selectpath:'home',

            logoicon:require("../../../static/logo.png"),

            ismobile: isMobile(),
            showbtns:this.ismobile?false:true,

            headbgclass:"",
            
            bgclasstype:0,
            logosize:"",
            titlefont:'',
            btnstyle:'',

            navclass:'navheight',

            iswhite:false,
            ishome:true,
            shownav:false,
            nowtop:0,
            hasscroll:false,
            mainbtnclass:''






        };

    },
    props:{
        drawer:Boolean
    },
    watch:{
        drawer(newvalue){
            


        }

    },
    components: {},
    mounted () {
        
        //this.richViewScroll()
        this.setbgStyle()
        this.routeChanged()
        this.ResizeView()
    },
    watch: {
        '$route': 'routeChanged'
    },
    
    methods: {

        setbgStyle(){
            //this.headbgclass = this.ismobile? 'mallw_mobile':'mallw' 
            this.headbgclass = getCenterClass() 

            let type = getBgClassType()
            this.bgclasstype = type
            this.showbtns = (type<=1)
            this.getTitleFontSizeAndLogoWithType()

            // let nav = this.drawer?'':'nav'
            this.navclass = (type==3)?`navheight_mobile`:`navheight`

            this.hasscroll = hasScrollbar();
            // this.mainbtnclass = this.hasscroll?'':'mainbtn'


        },
        
        getTitleFontSizeAndLogoWithType(){

            let titlesize = 28
            let logosize = 40
            let btnsize = 15

            switch(this.bgclasstype){
                case -1:
                    {
                        titlesize = 28
                        logosize = 40
                        btnsize = 16
                        
                    }
                    break
                case 0:{
                        titlesize = 26
                        logosize = 34
                        btnsize = 15
                        
                    }
                    break
                case 1:
                    {
                        titlesize = 26
                        logosize = 34
                        btnsize = 14
                        
                    }
                    break
                case 2:
                    {
                        titlesize = 24
                        logosize = 32
                        btnsize = 13
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
            //console.log("-bgclasstype-",this.bgclasstype)
            this.btnstyle =  `font-size: ${btnsize}px`


        },
    
            
        routeChanged(){
            let name = this.$route.name
            let path = this.$route.path
            let allpath = this.$route.fullPath
            this.ishome = (name=="home")
            this.iswhite = (allpath!="/")
            //console.log('-main-路由变化了--',path)
            let arr = path.split('/')
            if(arr.length>1){
                let p = arr[1]
                //console.log('-main-路由变化了-routeChanged-',p)
                let idstr = this.$route.query.id
                if(idstr){
                    p = idstr
                }
                this.selectpath = '/'+ p
            }else{
                this.selectpath = path;
            }

        },
        navBtnClick(tag,item){
                
            this.$emit("navSelect",tag,item)

        },
        ResizeView(){
                

        
                const that = this
                var appview = document.getElementById('headview')
                var erd = elementResizeDetector();
                that.$nextTick(() => { 
                    erd.listenTo(appview, (element) => {   //监听的domdocument.get方法获取
                        that.setbgStyle()


                    });

                });         
    },

    richViewScroll(){

        var div = document.getElementById('main')
        var div = document.getElementById('headview')
        var navh = div.offsetHeight;
        let that = this
        window.onscroll = function(){

            let scrolltop = window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
            let shownav = scrolltop>navh;
            if(that.ishome){
                that.iswhite = shownav
            }

        }



    },
    viewScroll(){

        //console.log("--viewScroll---")

        //console.log("-navh---",navh);
        var div = document.getElementById('headview')
        var navh = div.offsetHeight;

        let scrolltop = window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
        console.log("--richViewScroll",scrolltop)
        this.shownav = scrolltop>navh;
        var scroll = scrolltop - this.nowtop;
        this.nowtop = scrolltop;
        if(this.ishome){
            this.iswhite = this.shownav


        }
        if(scroll<0){//向上
            if(this.shownav==false){
                // this.animatup(div,navh);
            }

        }else{
            if(this.shownav){

                // this.animatdown(div,navh);
            }

        }


    },
    animatup(div,navh){

        var endt = -(navh+5);
        if(div.offsetTop==endt){
            return
        }
        var timer = setInterval(function () {
            if (div.offsetTop <= endt) {
                clearInterval(timer);
                div.style.top = endt + 'px';
                return;
            }
            div.style.top = div.offsetTop - 2 + 'px';
        }, 30)
    },
    animatdown(div,navh){
        if(div.offsetTop==8){
            return
        }
        var timer = setInterval(function () {
            if (div.offsetTop >= 8) {

                clearInterval(timer);
                div.style.top = 8 + 'px';
                return;
            }
            div.style.top = div.offsetTop + 2 + 'px';
            }, 30)
        },
        
    }
}
</script>

<style  scoped>
.mainbtn{
    margin-right: 10px;
}
.nav{

    position: fixed;
    left: 0;
    top: 0;
    width:100%;
    z-index: 8;
    


}
.downbtn{
    padding: 6px 15px;
    border: 1px solid white;

}
.downbtn:hover{
    border:none;
}


.choose-foot-home{
    border-bottom:2px solid var(--homecolor); 
    color: var(--homecolor); 
}
.navbtn-home:hover{
    color: var(--homecolor); 

}
</style>