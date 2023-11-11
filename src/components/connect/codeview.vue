<template>
  <div class="flex flex-direction align-center"  @touchstart.native="touchStart()" @touchend.native="touchEnd()">
    <el-image style="width:75px;height:75px;"   :src="item.img"></el-image>
    <span style="color: #333333;" class="text-center margin-top-sm">{{item.title}}</span>
  </div>
</template>

<script>
import {isMobile} from "../../tools/common"
export default {
  name: '',
  data () {
    return {

      Loop:'', //  定时器 
      ismobile:isMobile()
      
    };
  },
  props:{
    item:Object
  },
  components: {},
  mounted () {},
  methods: {

    touchEnd() {
      if(this.ismobile){
        //手指离开
        clearTimeout(this.Loop);
      }

    },
    touchStart() {
      if(this.ismobile){
         //手指触摸
          clearTimeout(this.Loop); //再次清空定时器，防止重复注册定时器
          let imgname = item.title+"二维码"
          this.Loop = setTimeout(() => {
            this.downloadIamge(this.item.img, imgname);
          }, 1000);

        }

    },
    downloadIamge(imgsrc, name) {
      //下载图片地址和图片名
      var image = new Image();
      image.width = 400;
      image.height = 400;
      // 解决跨域 Canvas 污染问题
      image.setAttribute("crossOrigin", "anonymous");
      image.onload = function() {
        var canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        var context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, image.width, image.height);
        var url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
        var a = document.createElement("a"); // 生成一个a元素
        var event = new MouseEvent("click"); // 创建一个单击事件
        a.download = name || "photo"; // 设置图片名称
        a.href = url; // 将生成的URL设置为a.href属性
        a.dispatchEvent(event); // 触发a的单击事件
      };
      image.src = imgsrc;
    },

  }
}
</script>

<style  scoped>
</style>