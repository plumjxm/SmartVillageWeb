<template>
    <div style="width:100%;">
        <Swiper :options="mySwiperOption" id='swiper1' ref="mySwiper">
			<SwiperSlide v-for="(item,index) in xmarr" :key="index">
                <div style="width:100%;" >
                    <oneprojectxs   :item="item"></oneprojectxs>
                </div>
                
			</SwiperSlide>
			<!-- <div class="swiper-pagination" slot="pagination"></div> -->
		</Swiper>

    </div>
    
</template>

<script>
// import 'swiper/css/swiper.css'
// import 'swiper/dist/css/swiper.css'
// import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'

import oneprojectxs from "./oneprojectxs.vue"

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
    // computed: {
    //     swiper() {
    //         return this.$refs.mySwiper.swiper
    //     }
    // },
    components: {oneprojectxs},
    mounted () {
    },
    created(){

        // console.log("-created--xs-",this.selectindex)
        this.mySwiperOption.initialSlide = this.selectindex
    },
    methods: {

        
    }
}
</script>

<style  scoped>
</style>