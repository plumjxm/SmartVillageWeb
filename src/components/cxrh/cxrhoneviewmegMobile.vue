<template>
  
  <div>
    <el-image fit="cover"  class="allwidth"  :src="item.img" ></el-image>
    <div style="font-size:18px;font-weight: 500;" class="text-center text-black title margin-top-sm">{{item.title}}</div>
    <div style="font-size:14px;color:#4D4D4D;" class="text-center intro margin-top-sm">{{item.intro}}</div>
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
.title{
    color:rgba(51, 51, 51, 1);
    
}
.intro{
   color: rgba(77, 77, 77, 1);
  
}
 
</style>