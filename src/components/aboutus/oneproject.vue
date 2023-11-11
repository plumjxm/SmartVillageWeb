<template>
    <div  class="flex bg">
        <img class="leftimg"  :src="item.icon"></img>
        <div  class="rightview margin-left-lg flex flex-direction">
            <div>
                <label class="title">{{item.gstitle}}</label>
                <div class="intro">{{trimintro(item.gsintro)}}</div>
            </div>
            <div class="margin-top-lg">
                <label class="title">{{item.kztitle}}</label>
                <div class="intro">{{trimintro(item.kzintro)}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import {trimAll} from "../../tools/common"
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
        trimintro(intro){

            return trimAll(intro)
        },


    }
}
</script>

<style  scoped>
.title{

    /* border-bottom:2px solid var(--homecolor); */
    font-size:17px;
    color: var(--black);
    font-weight: 500;
}
.intro{

    font-size:14px;
    color:#4D4D4D;
    margin-top: 10px;
    line-height: 20px;

}
.bg
{

    padding: 32px;

}
.leftimg{
    width: 317px;
    height: 317px;
    object-fit: cover;
    border-radius: 12px;


}
.rightview{
    width: calc(100% - 317px);


}
</style>