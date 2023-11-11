<template>
    <div  class="flex flex-direction align-center">
        <el-image style="width:60px;height:60px;"  :src="item.icon"></el-image>
        <div style="font-size:18px;" class="margin-top text-bold text-center">{{item.title}}</div>
        <div class="line"></div>
        <div style="font-size:14px;color:#4D4D4D;" class="text-center">{{item.intro}}</div>
    </div>
</template>

<script>

export default {
    name: '',
    data () {
        return {


        };

    },
    props:{
        item:Object

                
    },
    components: {},
    mounted () {
        
        
    },

    
    methods: {


    }
}
</script>

<style  scoped>
.line{

    width: 48px;
    height: 2px;
    background: var(--homecolor);
    margin:15px 0 30px;
}
</style>