<template>
    <div id="newpage">
        <div  :class="sectionbgw" style="padding-bottom:32px;">
            <el-row :gutter="20">
                <el-col v-for="(item,index) in list" :key="index"  :span="span">
                    <oneitem :item="item"></oneitem>
                </el-col>
                
            </el-row>
        </div>

    </div>
</template>

<script>

import {isMobile,getCenterClass, getBgClassType}  from '../../tools/common'
import elementResizeDetector from "element-resize-detector";
import oneitem from "./onenew.vue"
import data from '../../../static/listdata/newzx.json'

export default {
    name: '',
    data () {
        return {
            
            ismobile: isMobile(),

            sectionbgw:'' ,
            span:8,
            list:[]
        
        };
    },
    components: {oneitem},
    mounted () {

        this.getdatalist()
        this.setbgStyle()
        this.ResizeView()

    
    },
    methods: {
        async getdatalist(){
            this.list = data.list

        },
        setbgStyle(){
            
            //this.sectionbgw = this.ismobile? 'mallw_mobile':'mallw' 
            this.sectionbgw = getCenterClass() 
            let type = getBgClassType()
            let sp = 8
            if(type==3){
                sp = 24
            }else if(type==2){
                sp = 12
            }else if(type==-1){
                sp = 6
            }
            this.span = sp


        },
        ResizeView(){
        
            const that = this
            var appview = document.getElementById('newpage')
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
</style>