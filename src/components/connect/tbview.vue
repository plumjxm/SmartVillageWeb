<template>
    <div class="text-center margin-bottom-xl">
        <span style="color: black;" class="text-bold">{{item.title}}</span>
        <div style="color: #333333;" class="margin-top-sm">{{item.intro}}</div>
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