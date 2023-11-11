<template>
    <a :href="item.link" class="link-noline" :target="ismobile?'_self':'_blank'">
        <div class="bg">
            <div class="allwidth" v-proportion="0.55">
                <el-image   class="allwidth allheight radius5" fit="cover" :src="item.img" lazy></el-image>

            </div>
            <div style="height:90px;"  class="margin-top">
                <div  class=" title text-cut">
                    {{item.title.trim()}}
                </div>
                <div  class="margin-top-sm uc-2linetext intro">{{item.intro.trim()}}</div>
            </div>
        </div>
    </a>
</template>

<script>
import { openUrl ,isMobile} from '../../tools/common';

export default {
    name: '',
    data () {
        return {
            ismobile:isMobile()
        
        };
    },
    props:{
        item:{
            type:Object,
            default:null,
        }
        
    },
    components: {},
    mounted () {},
    methods: {
        openlink(){
            // window.open(this.item.link, '_blank');
            openUrl(this.item.link)

        }
    }
}
</script>

<style scoped>
.bg{
    padding-top:32px;
    /* transition: top 0.2s ease-in-out; */
}
.bg:hover{

    padding: 20px 0 12px;
}
.title{

    font-size: 18px;
    font-weight: 500;
    color: #000000;
}
.intro{
    font-size: 15px;
    font-weight: 400;
    color: #666666;
    line-height: 20px;

}
</style>