<template>
  <div>
    <bannerview :item="banner"></bannerview>
    <section :class="sectionbgw" style="height:1000px;">
    </section>

  </div>
</template>

<script>
import bannerview from "../banners/childbanner.vue"
import {isMobile}  from '../../tools/common'
export default {
  name: '',
  data () {
    return {
        banner:{

            title:'城乡融合',
            icon:require('../../../static/zyzcenter/page/banner.jpg')
        },

        ismobile: isMobile(),

        sectionbgw:'' ,
      
    };
  },
  components: {bannerview},
  mounted () {
    this.sectionbgw =  this.ismobile? 'mallw_mobile':'mallw' 


  },
  methods: {}
}
</script>

<style  scoped>
</style>