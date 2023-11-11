<template>

    <div id='connectcode' style="font-size:16px;" class="margin-bottom-xxl">
        <div v-if="isxs==false"  class="flex justify-between">
            <div style="width:calc(100% - 300px);">
                <lrview  v-for="(item,index) in connectlist" :key="index" :item="item"/>
            </div>
            <div class="flex align-center">
                <codeview v-for="(item,index) in codelist" :key="index" :item="item" :class="index>0?'codesep':''"></codeview>
            </div>
        </div>
        
        <div  v-else>
            <template v-for="item in connectlist">
                <template v-if="item.type<=2&&ismobile">
                    <a class="link-noline" :href="getlinkurl(item)">
                        <tbview :item="item"/>
                    </a>

                </template>
                <tbview v-else  :item="item"/>

            </template>

            <!-- <tbview  v-for="item in connectlist" :item="item"/> -->
            <div class="flex margin-top-xxl justify-center">
                <codeview v-for="(item,index) in codelist" :key="index" :item="item" :class="index>0?'codesep':''"></codeview>
            </div>
        </div>
    

    </div>



</template>

<script>

import {isMobile}  from '../../tools/common'

import lrview from "../connect/lrview.vue"
import codeview from "../connect/codeview.vue"
import tbview from "../connect/tbview.vue"

export default {
    components:{codeview,lrview,tbview},
    data () {
        return {
        
            connectlist:this.Global.connectlist,
            codelist:this.Global.connect_codelist,

            ismobile:isMobile(),
            isxs:false


        }
    },
    props:{
        connectustype:Number,

    },
    watch:{
        connectustype(newvalue){

            this.isxs = newvalue>1;

        }

    },
    mounted () {


        
    },
    methods:{
        getlinkurl(item){
            let typestr = item.type==1?'tel':'mailto'
            let url =  `${typestr}:${item.intro}`
            return url


        }
        
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.codesep{
    margin-left: 40px;
}
</style>