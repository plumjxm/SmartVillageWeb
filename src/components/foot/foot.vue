<template>
    <div id='footview' style="padding:20px 0;" :style="introfont" class="footbluebg  text-white">
        <div :class="sectionbgw" >

            <div  class="flex align-center justify-center">
                <span>©Copyright</span>
                <span class="wzsep">{{yearstr}}</span>
                <span class="wzsep">慢跑科技</span>
                <a  class="wzsepbig link-noline" :target="ismobile?'_self':'_blank'" href="https://beian.miit.gov.cn"><span class="text-white">京ICP备16050853号-1</span></a>
            </div>

        </div>
        
    </div>
</template>

<script>
import {isMobile,getCenterClass,getBgClassType,openUrl}  from '../../tools/common'
import elementResizeDetector from "element-resize-detector";
export default {
    name: '',
    data () {
        return {
            ismobile: isMobile(),
            sectionbgw:'',
            bgtype:0,
            yearstr:'2023',
            bicon:require('../../../static/wab.png'),

            list:[
                {
                    title:'产品',
                    introarr:[
                        {title:'功能',link:''},
                        {title:'企业',link:''},
                        {title:'解决方案',link:''}
                    ],
                    name:'1'

                },
                {
                    title:'用户支持',
                    introarr:[
                        {title:'新手上路',link:''},
                        {title:'用户使用',link:''},
                        {title:'帮助中心',link:''}
                    ],
                    name:'2'

                },
                {
                    title:'获得帮助',
                    introarr:[
                        {title:'联系我们',link:''},
                        {title:'加入我们',link:''},
                        {title:'友情链接',link:''}
                    ],
                    name:'3'

                },
                {
                    title:'关于智惠乡村',
                    introarr:[
                        {title:'新闻',link:''},
                        {title:'故事品牌',link:''},
                        {title:'招贤纳士',link:''},
                    ],
                    name:'4'

                },
                {
                    title:'资源',
                    introarr:[
                        {title:'合作伙伴',link:''},
                        {title:'应用',link:''},
                        {title:'博客',link:''}
                    ],
                    name:'5'

                }
            ],
            introfont:'font-size:13px;',

            activeName: '',

            ismin:''


        };
    },
    components: {},
    mounted () {
        
        this.setbgStyle()
        this.ResizeView()

    
    },
    methods: {
    itemclick(childitem){
        openUrl(childitem.link)
        // window.open(childitem.link, '_blank');

    },

    setbgStyle(){
        this.sectionbgw = getCenterClass() 

        this.bgtype = getBgClassType()
        this.ismin = this.bgtype>=2 ? "1" : "0"
        let fonts = this.ismin=="1" ? 11 : 13
        this.introfont = 'font-size:'+fonts+'px;'+"font-weight:400"

    },
    ResizeView(){
        const that = this
        var appview = document.getElementById('footview')
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

<style scoped>
.wzsep{
    margin-left: 5px;

}
.wzsepbig{
    margin-left: 10px;
}
</style>