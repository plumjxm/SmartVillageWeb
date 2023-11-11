<template>
  <div id='zyzcenterpage'>
    <bannerview :item="banner"></bannerview>
    <section :class="sectionbgw" style="padding:100px 0">
        <template v-if="bgclasstype==3">
            <oneintrobanner v-for="(item,index) in introbannerarr" :key="index" style="margin-bottom:60px;" :item="item"></oneintrobanner>
        </template>
        
        <el-row v-else :gutter="40">
          <el-col v-for="(item,index) in introbannerarr" :key="index" :span="8">
              <oneintrobanner :item="item"></oneintrobanner>
          </el-col>
        </el-row>
        
    </section>
    <section style="padding-bottom: 70px;" class="sectionsep lightgreenbg" >
        
      <div   class="flex flex-direction" :class="sectionbgw">
        <h1 :style="alltitlefont" class="text-center">品牌项目</h1>
        <div>
          <div v-if="bgclasstype==3||bgclasstype==2"   class="flex align-center justify-between ptitle">
            <div  class="p-icon-left shou p-icon" @click="leftclick()"></div>
            <div class="text-main">{{currentprogrect.title}}</div>
            <div  class="p-icon-right shou p-icon" @click="rightclick()"></div>
          </div>
          <div v-else  class="flex align-center justify-between ptitle">
            <div style="color:#B8B8B8;">{{leftprogrect.title}}</div>
            <div   class="p-icon-left shou p-icon" @click="leftclick()"></div>
            <div class="text-main">{{currentprogrect.title}}</div>
            <div  class="p-icon-right shou p-icon" @click="rightclick()"></div>
            <div  style="color:#B8B8B8;">{{rightprogrect.title}}</div>
          </div>

          <div class="bg">
            <sliderview1 v-if="ismobile" @indexchange="indexchange" :xmarr="xmarr" :selectindex="currenindex"></sliderview1>
            <sliderview v-else @indexchange="indexchange" :xmarr="xmarr" :selectindex="currenindex"></sliderview>
          </div>
        
        </div>
                
      </div>
      
    
    </section>

    <section class="sectionb sectionsep">
        
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


import bannerview from "../banners/aboutusbanner.vue"
import {isMobile,getCenterClass,getBgClassType}  from '../../tools/common'
import elementResizeDetector from "element-resize-detector";
import connectusMapCodeView from "../main/connectusMapCodeView.vue"
import oneintrobanner from "./oneintrobanner.vue"
import sliderview from "./sliderview.vue"
import sliderview1 from "./sliderview1.vue"

export default {
  name: '',
  components: {bannerview,connectusMapCodeView,oneintrobanner,sliderview,sliderview1},
  data () {
    return {
        active: 1,

        banner:{

            title:'关于我们',
            icon:require('../../../static/aboutus/banner.jpg'),
            intro:`智惠乡村志愿服务中心是由民政部批准成立并直管的全国性志愿服务组织，
            成立于2016年3月。中心以构建"党委领导、政府主导、专业服务、
            社会协同"的农村农业农民受益、多方合作共赢的中国特色乡村振兴专业志愿服务网络为宗旨，
            通过动员整合社会资源、汇聚志愿服务力量、发现和培养优秀的志愿服务组织与志愿者、
            推动创新型城乡互动志愿服务项目发展，紧紧围绕乡村振兴"产业兴旺、生态宜居、乡风文明、
            治理有效、生活富裕"五大战略目标，以专业志愿服务助力乡村振兴，促进社会主义新农村建设，最终推动城乡一体化发展。`

        },

        ismobile: isMobile(),

        sectionbgw:'' ,
        alltitlefont:"",
        bgclasstype:0,


        introbannerarr:[
                {
                    title:'服务方向',
                    icon:require("../../../static/aboutus/0.jpg"),
                    intro:'培训服务、咨询服务、课题研究、项目策划、项目执行、资源链接。'
                    
                },
                {
                    title:'机构愿景',
                    icon:require("../../../static/aboutus/1.jpg"),
                    intro:"提振城乡共融产业发展，为国家实现城乡融合发展与乡村全面振兴做出贡献。"
                },
                {
                    title:'服务生态',
                    icon:require("../../../static/aboutus/2.jpg"),
                    intro:'通过创新资源整合模式，实现线下、线上齐头并进的资源整合新模式。'
                } 
            ],

        xmarr:[
                {
                    tag:0,
                    icon:require("../../../static/aboutus/pc/p-1.jpg"),
                    icon_mobile:require("../../../static/aboutus/mobile/p-1.jpg"),
                    title:'阳光使者品牌项目',
                    gsintro:`阳光使者项目以服务志愿者为核心，
                    广泛动员社会力量，通过向阳光使者——乐于以自身的专业、
                    特长为社会贡献无偿服务的人群，提供志愿者认证、
                    志愿供需匹配、志愿者能力提升、志愿行为量化、
                    志愿者与志愿行为激励等服务，
                    从而提升其作为志愿者和参与志愿服务行为的便捷性和获得感，
                    并以此为基础，带动城乡融合志愿服务网络快速形成并保持其健康、
                    可持续的发展。`,
                    gstitle:'项目概述',
                    kztitle:'项目功能',
                    kzintro:`青年作为社会实践、同心共建、阳光使者驿站服务、直播、宣讲。`

                    
                },
                {
                    tag:1,
                    title:'乡村振兴共创行动',
                    icon:require("../../../static/aboutus/pc/p-0.jpg"),
                    icon_mobile:require("../../../static/aboutus/mobile/p-0.jpg"),
                    gsintro:`该行动以专业志愿服务助力乡村振兴战略的实施为宗旨，
                    关注乡村振兴中的发展困境，通过发挥志愿服务组织在社会资源动员方面的巨大优势，
                    秉持“政府为主导、村民为主体”的原则，帮助地方打造美丽乡村示范典型，
                    推进县域志愿服务体系建设和经济发展，助力乡村振兴战略的实施。`,
                    gstitle:'项目概述',
                    kztitle:'开展情况',
                    kzintro:`共创行动已在北京、山东、浙江等多地，
                    通过为设立志愿服务驿站、提供专家志愿服务、宣传流量支持、
                    市场资源对接等形式，系统性开展专业志愿服务活动。人民日报、中宣部党建网、
                    中国文明网、中国网等媒体、
                    新媒体新浪微博等媒体进行了广泛宣传报道，
                    微博话题#乡村振兴共创行动#、#我心中的美丽乡村# 阅读量达到4.8亿 。`
                },
                {
                    icon:require("../../../static/aboutus/pc/p-2.jpg"),
                    icon_mobile:require("../../../static/aboutus/mobile/p-2.jpg"),
                    tag:2,
                    title:'城乡融合发展智库',
                    gsintro:`由全国城乡融合发展相关领域专家学者组成，
                    本着“开放、共赢、交流、合作”原则，主要围绕城乡融合发展、
                    农村产权制度改革、农业高科技成果转化、农村集体经济制度改革、
                    农村产业用地和宅基地财产权利的转化、新型村镇建设等方面的城乡发展重大问题、
                    重要选题进行深入研究，并提出专业咨询建议，
                    为政府决策提供具有前瞻性和系统性的智力支持，加快研究成果转化，助推城乡融合发展。
                    智库以城乡融合发展为主要研究方向。
                    形成“智库-驿站-志愿者”的共生、共享、共融、共赢模式。`,
                    gstitle:'项目概述',
                    kztitle:'智库定位',
                    kzintro:`通过专业性、针对性、系统性的科学研究，
                    切实把智库打造成特色鲜明、制度创新、引领发展，
                    具有一定社会影响力和美誉度的专业性高端智库。`
                } 
            ],
        currentprogrect:{},
        leftprogrect:{},
        rightprogrect:{},
        currenindex:1,



      
    };
  },
  mounted () {

    this.setcurrectpro()

    this.setbgStyle()
    this.ResizeView()
    this.swiperrefress()



  },
  methods: {
    indexchange(index){
      // console.log("--indexchange-",index)
      this.currenindex = index
      this.setcurrectpro()

    },
    leftclick(){
      const swiper = this.getswiper();
      swiper.slidePrev();


    },
    rightclick(){
      
      const swiper = this.getswiper();
      swiper.slideNext();
        
      
    },
    getswiper(){
        const swiper = document.getElementById((this.bgclasstype>=2)?'swiper1':'swiper').swiper;
        // const swiper = document.getElementById('swiper').swiper;
        // const swiper =  this.$refs.mySwiper.swiper
        return swiper

    },
    setcurrectpro(){
      let i = this.currenindex
      if(i==0){
        this.currentprogrect = this.xmarr[0]
        this.leftprogrect = this.xmarr[2]
        this.rightprogrect = this.xmarr[1]

      }else if(i==1){
        this.currentprogrect = this.xmarr[1]
        this.leftprogrect = this.xmarr[0]
        this.rightprogrect = this.xmarr[2]

      }else{
        this.currentprogrect = this.xmarr[2]
        this.leftprogrect = this.xmarr[1]
        this.rightprogrect = this.xmarr[0]

      }
      


    },
  
    setbgStyle(){
        this.sectionbgw = getCenterClass() 
        this.bgclasstype = getBgClassType()
        this.gettitleFont()
        this.ismobile = this.bgclasstype>=2;



    },
    swiperrefress(){
      setTimeout(()=>{
        const swiper = this.getswiper()
        swiper.update()

      },500)


    },
    ResizeView(){
    
        const that = this
        var appview = document.getElementById('zyzcenterpage')
        var erd = elementResizeDetector();
        that.$nextTick(() => { 
            erd.listenTo(appview, (element) => {   //监听的domdocument.get方法获取
                that.setbgStyle()

            
            });

        });
  
      },
      gettitleFont(){

      let type = this.bgclasstype
      let font = 30 - type*2
      this.alltitlefont = "font-size:"+ font+"px;"
      
      


    },
   
  }
}
</script>

<style  scoped>
.sectionsep{
  padding-top: 70px;
}
.sectionb{
  padding-bottom: 70px;
}
.p-icon{
    width:26px;
    height:26px;

}
.p-icon-left
{
/* require('../../../static/aboutus/left-hover.png') */
  background: url('../../../static/aboutus/left.png') no-repeat 0 center;
  /* -webkit-background-clip: ; */
  background-size: cover;
}
.p-icon-right
{
/* require('../../../static/aboutus/left-hover.png') */
  background: url('../../../static/aboutus/right.png') no-repeat 0 center;
  /* -webkit-background-clip: ; */
  background-size: cover;
}
.p-icon-left:hover
{
/* require('../../../static/aboutus/left-hover.png') */
  background: url('../../../static/aboutus/left-hover.png') no-repeat 0 center;
  /* -webkit-background-clip: ; */
  background-size: cover;
}
.p-icon-right:hover
{
/* require('../../../static/aboutus/left-hover.png') */
  background: url('../../../static/aboutus/right-hover.png') no-repeat 0 center;
  /* -webkit-background-clip: ; */
  background-size: cover;
}
.ppmobile{
  width: 90%;
  padding-left: 5%;

}
.ptitle{
  height:100px;
  font-size:20px;
  
}

.view {
      width: 100%;
      position: relative;
      overflow: hidden;
      height: 400px;
}
.viewmobile{
      width: 100%;
      position: relative;
      overflow: hidden;
      height: 100%;
      min-height: 400px;
}
.block {
    position: absolute;
    left: 0;
    right:0;        
    top:0;
    height: auto;
}

.bg
{
    background: #FFFFFF;
    box-shadow: 0px 3px 20px 0px rgba(0,0,0,0.03);
    border-radius: 16px;
    opacity: 1;

}
</style>