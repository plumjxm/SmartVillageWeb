<template>
    <div style="width:100%;">
        <Swiper :options="mySwiperOption" id='swiper' ref="mySwiper">
			<SwiperSlide v-for="(item,index) in xmarr" :key="index">
                <div style="width:100%;" >
                    <oneproject  :item="item"></oneproject>
                </div>
                
			</SwiperSlide>
			<!-- <div class="swiper-pagination" slot="pagination"></div> -->
		</Swiper>

    </div>
    
</template>

<script>
// import 'swiper/dist/css/swiper.css'
// import 'swiper/css/swiper.css'
// import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'

import oneproject from "./oneproject.vue"

export default {
    name: '',
    data () {
        const that = this;

        return {
            imgIndex:1,
            //Slider configuration [obj]
            mySwiperOption: {
					//循环 
					loop:true,
                    on: {
                        //滑动之后回调函数
                        slideChangeTransitionStart: function() {
                            /* realIndex为滚动到当前的slide索引值 */
                            that.imgIndex= this.realIndex;
                            that.$emit("indexchange",that.imgIndex)
                        },
                    },
            }

        
        };
    },
    props:{
        xmarr:Array,
        selectindex:Number
    },
    components: {oneproject},
    mounted () {

        // console.log("-mounted---",this.selectindex)
        // this.mySwiperOption.initialSlide = this.selectindex
        // this.swiper.slideTo(this.selectindex,1,false)


    },
    created(){

        // console.log("-created---",this.selectindex)
        this.mySwiperOption.initialSlide = this.selectindex

    },
    methods: {

        
    }
}
</script>

<style  scoped>
 
</style>