<template>
    <div class="flex align-center" style="height:48px;">
        <!-- <img style="width:14px;height:14px;" :src="item.iconname"></img> -->
        <span style="color: black;width:80px;" class="text-bold">{{item.title}}</span>
        <span style="color: #333333;width:calc(100% - 80px);">{{item.intro}}</span>
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
    mounted () {},
    methods: {}
}
</script>

<style  scoped>
</style>