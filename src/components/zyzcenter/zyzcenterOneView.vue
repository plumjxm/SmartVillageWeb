<template>
    <div @click="itemclick()" style="font-size:14px;" class="flex flex-direction align-center">
            <div class="flex align-center margin-bottom-sm">
                <div  style="color:var(--homecolor);font-size:40px;margin-right:2px;">{{item.number}}</div>
                <div style="margin-top:15px;">{{item.intro}}</div>
            </div>
            <div  class="flex align-center text-center">
                {{item.title}}
            </div>
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
        item:{
            type:Object,
            default:null,
        }
    },
    components: {},
    mounted () {},
    methods: {

        itemclick(){
           // let path = "/vscenter/"+this.item.pagename
           // this.$router.push({path});
        }
    }
}
</script>

<style scoped>
</style>