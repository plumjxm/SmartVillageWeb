<template>
  <div id='home'  class="flex flex-direction allwidth">
    <bannerview :item="banner"></bannerview>
    <section id='cxrh' class="sectionsep sectionb">
        <div :class="sectionbgw" class="flex flex-direction ">
          <h1 :style="alltitlefont" class="text-center">城乡融合</h1>
          <div class="margin-top-lg">

            <template  v-if="bgclasstype==3">

                <div v-for="(item,index) in cxrhlist" :style="index==cxrhlist.length-1?'':'margin-bottom:60px;'">
                    <csrhoneviewM :item="item"/>
                </div>

            </template>
            <template  v-else>
                <div v-for="(item,index) in cxrhlist"  :style="index==cxrhlist.length-1?'':'margin-bottom:60px;'"  class="flex">
                    <template v-if="index==1">
                        <div class="onecxviewtype0">
                            <csrhoneimgview :bgclasstype="bgclasstype" class="margin-right-xl"  :item="item"/>
                        </div>
                        <el-image fit="cover" v-proportion="0.8"  class="onecxviewimg"  :src="item.img" ></el-image>

                    </template>
                    <template v-else>
                        <el-image fit="cover" v-proportion="0.8" class="onecxviewimg" :src="item.img" ></el-image>
                        <div class="onecxviewtype0">
                          <csrhoneimgview class="margin-left-xl"  :bgclasstype="bgclasstype" :item="item"/>
                        </div>

                    </template>
                    

                </div>
            </template>
              
          </div>
        </div>
    </section>

    <section  id='vscenter' class="lightgreenbg  sectionsep">
      <div v-if="bgclasstype==3"  class="flex flex-direction" style="padding-bottom:30px;">
          <div :class="sectionbgw">
            <h1 :style="alltitlefont" class="text-center">志愿服务中心</h1>
            <div  class="zr padding flex flex-direction align-center">
                <div style="font-size:17px;" class="flex align-center  text-bold margin-top">
                  <div class="flex margin-right-xs">
                    <div v-for="bcolor in colorlist1" :style="bcolor" class="margin-right-xs" style="width:5px;height:10px;"></div>
                  </div>
                  <div style="color:black;" class="margin-right-sm">智融志愿力量</div>
                  <div style="color:black;">惠暖华夏城乡</div>
                  <div class="flex margin-left-xs" style="direction: rtl;">
                    <div  v-for="bcolor1 in colorlist1" :style="bcolor1" class="margin-left-xs" style="width:5px;height:10px;"></div>
                  </div>
                </div>
                <p style="color:#404040;" class="text-center">智惠乡村志愿服务中心是由民政部批准成立并直管的全国性志愿服务组织。中心以建立服务于城乡融合发展与乡村振兴的志愿服务网络及支撑体系为抓手，汇聚社会各界相关专业力量，助力农业产业发展、提升村镇公共服务、优化城乡社会治理，以专业志愿服务助力乡村振兴战略的实施。</p>
                <div @click="zyzzcClick()" class="zyzzc shou radius margin-tb-xs flex align-center justify-center">
                  志愿者注册
                </div>
            </div>

          </div>
          <div v-for="(item,index) in zyzcenterlist" :key="index"  :class="index==1?'vscenterbg':''">
              <zyzcenter-one-view  :item="item" style="padding:50px 0"></zyzcenter-one-view>
          </div>
          
      </div>
      <div v-else :class="sectionbgw" class="vscenterbg flex flex-direction" style="margin-bottom:80px;">
          <h1 :style="alltitlefont" class="text-center">志愿服务中心</h1>
          <div class="margin-top">
                <el-row :gutter="20">
                    <el-col v-for="(item,index) in zyzcenterlist" :key="index" :span="zyzcenterspan">
                        <zyzcenter-one-view  :item="item" style="padding:50px 0 80px;"></zyzcenter-one-view>
                    </el-col>
                    
                  </el-row>
          </div>
          <div class="zr padding flex flex-direction align-center">
              <div class="flex align-center  text-bold margin-top">
                <div class="flex margin-right-sm">
                  <div v-for="bcolor in colorlist" :style="bcolor" class="margin-right-sm" style="width:5px;height:10px;"></div>
                </div>
                <div style="color:black;" class="margin-right">智融志愿力量</div><div style="color:black;">惠暖华夏城乡</div>
                <div class="flex margin-left-sm" style="direction: rtl;">
                  <div  v-for="bcolor1 in colorlist" :style="bcolor1" class="margin-left-sm" style="width:5px;height:10px;"></div>
                </div>
              </div>
              <p style="color:#404040;" class="text-center">智惠乡村志愿服务中心是由民政部批准成立并直管的全国性志愿服务组织。中心以建立服务于城乡融合发展与乡村振兴的志愿服务网络及支撑体系为抓手，汇聚社会各界相关专业力量，助力农业产业发展、提升村镇公共服务、优化城乡社会治理，以专业志愿服务助力乡村振兴战略的实施。</p>
              <div @click="zyzzcClick()"  class="zyzzc shou radius margin-tb-xs  flex align-center justify-center">
                志愿者注册
              </div>

          </div>
          
      </div>
    </section>
    
    <section id="openecology"  style="padding-top:60px;">

        <div :class="sectionbgw" class="flex flex-direction">
            <h1 :style="alltitlefont" class="text-center">开放生态</h1>

            <div class="margin-top-xxl">
              <template v-if="bgclasstype==3">
                  <div v-for="(item,index) in kfstlist" :key="index" :id="'openstonecard-'+index" :style="kfstlist.length-1==index?'':'margin-bottom:20px;'" class="openstonecard  openstonecardbg flex flex-direction justify-center align-center">
                    <img style="width:50px;height:50px;background:white" class="round" :src="item.img"/>
                    <label style="margin-top:12px;font-size:14px;" class="text-center">{{item.title}}</label>
                  </div>
              </template>
              <template v-else>
                  <el-row :gutter="20">
                    <el-col v-for="(item,index) in kfstlist" :key="index" :span="zyzcenterspan">
                        <div  :id="'openstonecard-'+index" :class="bgclasstype==2?'openstonecardbg-xs':'openstonecardbg'" class="openstonecard  openstonecard-big flex flex-direction justify-center align-center">
                          <img style="width:50px;height:50px;" class="round" :src="item.img"/>
                          <label style="margin-top:12px;font-size:14px;" class="text-center">{{item.title}}</label>
                        </div>
                    </el-col>
                    
                  </el-row>
              </template>
            </div>
      </div>
      <div class="openecologybg margin-top-xs lightgreenbg"><div class="hdbg"></div></div>


    
    </section>
    <section id='connectus' class="sectionb lightgreenbg">
        
      <div :class="sectionbgw" class="flex flex-direction">
        <h1 :style="alltitlefont" class="text-center">联系我们</h1>
        <div  class="margin-top-xxl">
            <connectusMapCodeView :connectustype="bgclasstype"/>
        </div>           
      </div>
    
    </section>
      
      
  </div>

</template>
<script>

import {isMobile,getCenterClass,getBgClassType, openUrl}  from '../../tools/common'
import elementResizeDetector from "element-resize-detector";

import zyzcenterOneView from "../zyzcenter/zyzcenterOneView.vue"
import connectusMapCodeView from "./connectusMapCodeView.vue"
import csrhoneimgview from "../cxrh/cxrhoneviewmeg.vue"
import csrhoneviewM from "../cxrh/cxrhoneviewmegMobile.vue"

import bannerview from "../banners/homebanner.vue"

export default {
  components:{zyzcenterOneView,connectusMapCodeView,csrhoneviewM,csrhoneimgview,bannerview},
  data () {
    return {
      zyzzcurl:"https://voics.zhiyuanyun.com/app/user/register.php",

      banner:{

          title:'数智赋能，共创美好',
          intro:'通过数智赋能，探索城乡融合发展的乡村振兴之路，重构城乡融合价值链。',
          icon:require('../../../static/banner.jpg'),
          iconxs:require('../../../static/banner-xs.jpg'),
          intro1:['探','索','乡','村','振','兴','发','展','之','路'],
          intro2:['重','构','城','乡','融','合','价','值','之','链'],

      },
      sectionbgw:'',
      bgclasstype:0,

      ismobile: isMobile(),

      colorlist:[
        "opacity: 0.4;background:linear-gradient(90deg, rgba(105,173,54,0.2) 0%, rgba(105,173,54,0.1) 100%)","background:var(--homecolor);opacity: 0.4;",
        "background:var(--homecolor);opacity: 0.6;",
        "background:var(--homecolor);opacity: 0.8;","background-color:var(--homecolor)"
      ],
      colorlist1:[
        "opacity: 0.4;background:linear-gradient(90deg, rgba(105,173,54,0.2) 0%, rgba(105,173,54,0.1) 100%)",
        "background:var(--homecolor);opacity: 0.6;","background-color:var(--homecolor)"
      ],
 
    //城乡融合数据
      cxrhlist:this.Global.cxrhlist,
    

      //志愿者中心数据
      zyzcenterlist:this.Global.zyzcenterlist,
      zyzcenterspan:8,

      kfstlist:this.Global.kfstlist,

      alltitlefont:"",

      navclass:"nav-top"

    }
  },
  
  mounted () {

    this.setbgStyle();
    this.ResizeView();
    if(this.ismobile==false){
      this.setOpenMouseMove();

    }

    
  },
  created (){

  },

  beforeDestroy () {
  },

  methods:{
    zyzzcClick(){
        let url = this.zyzzcurl
        // url = window.location.protocol+'//'+url
        openUrl(url)
    },
    setOpenMouseMove(){
        
        let index = 0
        this.kfstlist.forEach(item => {
          let id = "openstonecard-"+index
          var oDiv = document.getElementById(id);
          var img = oDiv.firstChild;
          oDiv.onmousemove = function(){
            img.src = item.hoverimg

          }
          oDiv.onmouseleave = function(){
            //console.log("-onmouseleave--")

            img.src = item.img

          }
          index++
          
        });



    },
    setbgStyle(){

        //this.sectionbgw = this.ismobile? 'mallw_mobile':'mallw' 
        this.sectionbgw = getCenterClass() 
        this.bgclasstype = getBgClassType()
        this.gettitleFont()

        this.navclass = (this.bgclasstype==3)?"nav-top_mobile":"nav-top"


    },
    gettitleFont(){

      let type = this.bgclasstype
      let font = 30 - type*2
      // switch(type)
      // {
      //   case -1:
      //     font = 32
      //     break
      //   case 0:
      //     font = 30
      //     break
      //   case 1:
      //     font = 27
      //     break
      //   case 2:
      //     font = 25
      //     break
      //   case 3:
      //     font = 24
      //     break
      //   default:
      //     break
      // }
      this.alltitlefont = "font-size:"+ font+"px;"



    },
    ResizeView(){
        const that = this
        var appview = document.getElementById('home')
        var erd = elementResizeDetector();
        that.$nextTick(() => { 
            erd.listenTo(appview, (element) => {   //监听的domdocument.get方法获取
                //let width_screen = element.offsetWidth;
                // console.log("---listenTo--",width_screen)
                that.setbgStyle()


                let type = that.bgclasstype
                


                
            
            });

        });

      },
    
  }
}
</script>

<style scoped>
  
.onecxviewimg{
  width: 50%;

}
.onecxviewtype0{

  width: 50%;
}

.sectionsep{
  padding-top: 70px;
}
.sectionb{
  padding-bottom: 70px;
}

.openecologybg{
    position: relative;
    width: 100%;
    height:220px;
    /*子元素溢出隐藏*/
    overflow: hidden;
    

}

.hdbg{
    width: 110%;
    position: absolute;
    /*设置水平居中*/
    left:-5%;
    /* 之所以left:20%,是因为width:140%，若width:160%，那么left:30%才能水平居中 */
    top: -30px; 
    height:200px;
    border-radius: 0 0 50% 50%; 
    background: white;   
}
.openstonecard{

  background: #FFFFFF;
  box-shadow: 0px 3px 20px 0px rgba(14,77,69,0.05);
  border-radius: 8px;
  color: #404040;
  
}
.openstonecard-big:hover{

    background: var(--homecolor);
    color: white;
  
  
}
.openstonecardbg{

  padding:89px 0;

  
}
.openstonecardbg-xs{

  padding:40px 0;
  
}


.zr{

  background: linear-gradient(180deg, #F9FFF4 0%, rgba(255,255,255,0.88) 100%);
  border-radius: 8px;
  opacity: 1;
  border: 1px solid rgba(255,255,255,0.38);
}
.vscenterbg{
  background: url("../../../static/zyzcenter/bg.png") no-repeat 0 center;
  /* -webkit-background-clip: ; */
  background-size: cover;
}
.zyzzc{
  color:var(--homecolor);
  padding:3px 8px;
  border: 1px solid var(--homecolorlight);
  font-size: 14px;
}
</style>
