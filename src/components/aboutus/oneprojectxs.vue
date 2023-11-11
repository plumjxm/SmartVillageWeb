<template>
    <div>
        <img  class="leftimg-xs"  :src="item.icon_mobile"></img>
        <div  class="rightview-xs flex flex-direction">
            <div>
                <label class="title-xs">{{item.gstitle}}</label>
                <div class="intro-xs">{{trimintro(item.gsintro)}}</div>
            </div>
            <div class="margin-top-lg">
                <label class="title-xs">{{item.kztitle}}</label>
                <div class="intro-xs">{{trimintro(item.kzintro)}}</div>
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
        item:Object,

                
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
.leftimg-xs{
    width: 100%;
    border-radius: 8px 8px 0 0;
    height: 65vw;
    max-height: 400px;
    object-fit: cover;


}
.rightview-xs{
    padding:15px 15px 30px;

}
.title-xs{

    /* border-bottom:2px solid var(--homecolor); */
    font-size:18px;
    color: var(--black);
    font-weight: 450;
}
.intro-xs{

    font-size:15px;
    color:#4D4D4D;
    margin-top: 8px;
    line-height:22px;

}
 
</style>