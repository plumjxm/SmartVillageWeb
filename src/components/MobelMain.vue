<template>
  <div class="flex flex-direction allwidth">
    <mnavbar @navSelect='navSelect'/> 
    <headview  @navSelect='navSelect'/> 

    <div id="jj" class="purplebg text-white">
          <div  class="mallw_mobile jianjie flex justify-between">
            <div class="flex flex-direction justify-center">
              <label class="title  text-bold">让美好生活触手可及</label>
              <label class="text-bold text-df  margin-top-sm">根植于美好生活的创造,用数字化方式完善社区配套</label>
            </div>
          </div>

    </div>
    <div id="dt" class="mallw_mobile xwdt flex flex-direction padding-top">
          <label class="alltitle text-black text-bold">新闻资讯</label>
          <div class="margin-top-sm dtviews">

                <el-row type="flex">
                  <el-col :span="8" class="margin-right-xs">
                      <div @click="btnclick(1)" class="oneview  flex flex-direction">
                  
                  <el-image  class="oneimg" src="static/配图1.jpg" ></el-image>
                  <div  class="margin-top-sm text-black">
                      <label  class="uc-2linetext">河南省新乡市红旗区:创新场景拓宽社区治理全新路径</label>
                  </div>
                </div>
                  </el-col>
                  <el-col :span="8" class="margin-right-xs">
                      <div @click="btnclick(2)" class="oneview  flex flex-direction">
                  <el-image  class="oneimg" src="static/配图2.jpg" ></el-image>
                  <div  class="margin-top-sm">
                      <label  class="uc-2linetext">民政创新社会治理基层运转规范有序</label>
                  </div>
                </div>
                  </el-col>
                  <el-col :span="8"> 
                      <div @click="btnclick(3)" class="oneview  flex flex-direction">
                  <el-image  class="oneimg" src="static/配图4.jpg" ></el-image>
                  <div   class="margin-top-sm">
                      <label class="uc-2linetext">巧用智能服务平台 解决社区治理难题</label>
                  </div>
                </div>
                    </el-col>
                </el-row>

            
              
                
          </div>
    </div>
    <div  class="mallw_mobile text-bold sjjl flex flex-direction allsep">
                      <label class="alltitle text-black text-bold">实践历程</label>
                      <div class="margin-top-sm text-df">
                            <el-row type="flex" justify="space-between">
                              <el-col :span="8" class="margin-right">
                              
                                <div class="oneview  alloneh flex flex-direction justify-center align-center">
                                    <el-image  class="oneimg" src="static/民政部.png" ></el-image>
                                    <label class="margin-top text-black">民政部评选为全国性创新案例</label>
                                </div>
                              </el-col>
                              <el-col :span="8" class="margin-right">
                                <div class="oneview alloneh flex flex-direction justify-center align-center">
                                      <el-image  class="oneimg" src="static/平台经济.png" ></el-image>
                                        <label class="margin-top text-black">河南省平台经济重点培育对象</label>
                                  </div>
                              </el-col>
                              <el-col :span="8"> <div class="oneview alloneh flex flex-direction justify-center align-center">
                                      <el-image  class="oneimg" src="static/智慧社区图.png" ></el-image>
                                        <label class="margin-top  text-black">河南省智慧社区建设试点项目</label>
                                  </div>
                                </el-col>
                            </el-row>
                      </div>
    </div>
    <div class="jjbg">
        
      <div id="down" class="mallw_mobile xz flex flex-direction  padding-tb-xl">
            <label class="alltitle text-black text-bold">下载智慧乡村APP</label>
            <div class="xzbg  margin-top-xl flex  justify-between">
                 
                  <div class="flex flex-direction  justify-center">
                    <a class="no-underline" target="_blank" href="https://a.app.qq.com/o/simple.jsp?pkgname=com.mp.qcoperate"> <div  class="text-df radius bg-red onebtn flex align-center text-center"   
                          ><i class="margin-right-sm margin-left fa fa-apple"></i>iOS版</div></a>
                    <a class="margin-top no-underline" target="_blank" href="https://a.app.qq.com/o/simple.jsp?pkgname=com.mp.qcoperate">  <div  class="text-df radius bg-red  onebtn flex align-center"   
                        ><i class="margin-right-sm margin-left fa fa-android"></i>Android版</div></a>
                    
                    
                  </div>
            </div>
      </div>
    </div>
    <div id="st" class="mallw_mobile fwst text-bold">

        <div class="flex flex-direction margin-top-xl">
            <label class="alltitle text-black text-bold">开放生态</label>
            <div class="margin-top-sm text-sm">
                  <el-row type="flex" justify="center">
                    <el-col :span="4" class="margin-right">
                      <div class="oneview  alloneh flex flex-direction justify-center align-center">
                          <el-image  class="oneimg" src="static/生态伙伴.png" ></el-image>
                          <label class="margin-top-sm  text-black">生态伙伴</label>
                      </div>
                    </el-col>
                    <el-col :span="4" class="margin-right">
                      <div class="oneview alloneh flex flex-direction justify-center align-center">
                            <el-image  class="oneimg" src="static/渠道入驻.png" ></el-image>
                              <label class="margin-top-sm text-black">渠道入驻</label>
                        </div>
                    </el-col>
                    <el-col :span="4"> <div class="oneview alloneh flex flex-direction justify-center align-center">
                            <el-image  class="oneimg" src="static/共建社区未来.png" ></el-image>
                              <label class="margin-top-sm text-black">共建未来社区</label>
                        </div>
                      </el-col>
                        <el-col :span="4"> <div class="oneview alloneh flex flex-direction justify-center align-center">
                            <el-image  class="oneimg" src="static/开发平台.png" ></el-image>
                              <label class="margin-top-sm  text-black">开放平台</label>
                        </div>
                      </el-col>
                        <el-col :span="4"> <div class="oneview alloneh flex flex-direction justify-center align-center">
                            <el-image  class="oneimg" src="static/成为社区配套.png" ></el-image>
                              <label class="margin-top-sm  text-black">成为社区配套</label>
                        </div>
                      </el-col>
                  </el-row>
            </div>
      </div>

    
    </div>
    <div class="jjbg bgfoot">
        
      <div class="text-bold mallw_mobile xz flex flex-direction  padding-tb-xl">
            <label class="alltitle text-black text-bold">联系我们</label>
            <div  style="margin-top:35px">
                  <label class="text-df">我们致力于用数字化的方式完善社区配套,共同完善社区配套</label>
                  <div style="border-radius: 10px 3px 3px 3px;width:100px;height:35px;"  class="margin-tb text-sm  bg-red  flex align-center justify-center"   
                          @click="zxBtnClick()">咨询合作</div>
                  <label class="text-df">邮箱咨询 contact@lurban.cn</label>

            </div>
          <div style="margin-top:80px;padding-bottom:65px;" class="text-xs flex align-center justify-center" >
                <p>©Copyright 2022 慢跑科技 </p>
                <div class="flex align-center">
                  <a  class="flex align-center" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010202010201号" style="text-decoration:none;">
                      <img style="width:13px;height:13px" src="static/wab.png"/>
                      <p class="text-black">京公网安备 11010202010201号</p>
                  </a>
                  <a class="text-black" target="_blank" href="https://beian.miit.gov.cn" style="text-decoration:none;margin-left:10px;"><p>京ICP备15049332号-12</p></a>
                </div>
          </div>
      </div>
    
    </div>
        
    
       <el-drawer
            size="100%"
            :visible.sync="drawer"
            direction="rtl"
            :modal="false" :with-header="false">
            <rightview @navSelect='navRBtnClick' @closeBtnClick="drawer = false"/>
         </el-drawer>
  </div>
   
</template>

<script>
import mnavbar from "../components/nav/mnavbar.vue"
import headview from '../components/nav/mheadview.vue'
import rightview from "./nav/drawerrightview.vue"

export default {
  components:{mnavbar,headview,rightview},
  name: 'MHelloWorld',
  data () {
    return {
       shownav:false,
       drawer: false,
       nowtop:0,


    }
  },
  mounted () {

    window.addEventListener("scroll",this.viewScroll);
  },
  beforeDestroy () {

    window.removeEventListener("scroll",this.viewScroll);
  },
  methods:{
    viewScroll(){
       
        var div = document.getElementById('mnavBar')
        var navh = div.offsetHeight;

        let scrolltop = window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
        this.shownav = scrolltop>navh;
        var scroll = scrolltop - this.nowtop;
        this.nowtop = scrolltop;
        if(scroll<0){//向上
          if(this.shownav==false){
            this.animatup(div,navh);
          }
 
        }else{
          if(this.shownav){
            this.animatdown(div,navh);
          }

        }
 

    },
    animatup(div,navh){
      var endt = - navh;
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
       var timer = setInterval(function () {
          if (div.offsetTop >= 0) {
              clearInterval(timer);
              div.style.top = 0 + 'px';
              return;
          }
          div.style.top = div.offsetTop + 2 + 'px';
        }, 30)
    },

     btnclick(key){
          var idstr = "https://www.mca.gov.cn/article/wh/whbq/cxsqfw/202202/20220200039808.shtml";
            switch(key){
             case 1:idstr="https://www.mca.gov.cn/article/wh/whbq/cxsqfw/202202/20220200039808.shtml";break;
             case 2:idstr="http://www.xinxiang.gov.cn/sitesources/xxsrmzf/page_pc/zwgk/jrxx/articlea5bb8421f33844f2803254bfff97c0ab.html";break;
             case 3:idstr="https://www.mca.gov.cn/article/xw/mtbd/202105/20210500033550.shtml";break;
             default:break;

            }
       window.open(idstr,"_black");

     },
      zxBtnClick(){},
      navRBtnClick(tag){
               
         this.drawer = false;
         this.navSelect(tag);

      },
      navSelect(key){
        if(key == 333){
          this.drawer = true;
         return;

        }
          // console.log("-navclcik---",key);
            var idstr = "jj";
            switch(key){
             case 1:idstr="jj";break;
             case 2:idstr="dt";break;
             case 3:idstr="zn";break;
             case 4:idstr="st";break;
             case 5:idstr="down";break;
             default:break;

            }


             document.getElementById(idstr).scrollIntoView();
 
          

      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.alltitle{

   font-size: 20px;
 }
 .jjbg{
  background-color: #fffcf8;
 }
 .jianjie{

   height: 240px;

 }
 .jianjie .title{

   font-size: 28px;
 }
 .xwdt .dtviews{
   width: 100%;

 
 }
 
.xwdt .dtviews .oneview .oneimg{

   width:100%;
   
   
 }
 .allsep{

  margin-top:60px;
 }
 .alloneh{

  height: 220px;
 }

 .syzn .oneview .oneimg{

    width: 80px;
    height: 80px;
 }

  .sjjl .oneview .oneimg{

    width: 100px;
    
 }
  .fwst .oneview .oneimg{

    width: 60px;
    
 }
 .xzbg{

  height: 260px;
 }
 .xzbg .oneimg{
  width: 120px;
  height: 213px;
 }
 .xzbg .cimg{

margin-top:40px;

 }
 .xzbg .onebtn{
     width: 130px;
     height: 35px;
     margin-left: 0;
 }
  .xzbg .onebtn i{
    font-size: 22px;
  }
 .szml{

  background-color: #f4ecc0;
 }
 .glbt{

  background-color: #97b0e3;
 }
 .flyz{

  background-color: #f7ac95;
 }


.mint-popup{
  width: 100%;
  height: 100%;
       
}
</style>
