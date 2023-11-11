<template>
    <div  class="flex flex-direction allheight justify-center">
        <label :style="titlefont"  class="title">{{item.title}}</label>
        <div  style="color: rgba(77, 77, 77, 1);"  :style="introstyle">{{item.intro}}</div>
        <div v-show="false" style="font-size:14px;" class="btn btn-olive text-center shou">了解更多</div>
    </div>
</template>

<script>
export default {
    name: '',
    data () {
        return {
            watchbgclasstype:0,
            titlefont:'font-size:30px;',
            introclass:'uc-5linetext',
            introstyle:'',


        };
    },
    props:{
        item:Object,
        bgclasstype:Number,

    
    },
    watch: {
        bgclasstype:'bgclasstypeChanged'
    },
    components: {},
    mounted () {
        this.bgclasstypeChanged(this.bgclasstype,this.bgclasstype)

    },
    methods: {

        bgclasstypeChanged(newName, oldName){
            this.watchbgclasstype = newName

            let introclass = ''
            let titlesize = 27 - newName*2
            let introsize = 15
            let lineh = introsize+5

            let sep = 45
            switch(this.watchbgclasstype){
                case -1:
                    // titlesize = 28;
                    introsize = 15
                    lineh = 24
                    break
                case 0:
                    // titlesize = 26;
                    introclass = 'uc-5linetext'
                    introsize = 15
                    lineh = 24
                    break
                case 1:
                    // titlesize = 24;
                    introclass = 'uc-4linetext'
                    introsize = 15
                    lineh = 22
                    break
                case 2:
                    // titlesize = 20;
                    introclass = 'uc-4linetext'
                    introsize = 14
                    lineh = introsize+5
                    sep = 10
                case 3:
                    // titlesize = 18;
                    introclass = 'uc-4linetext'
                    introsize = 12
                    lineh = introsize+5
                    sep = 10
                    break
                default:
                    break


            }
            let titlefont =  `font-size: ${titlesize}px`
            this.titlefont = titlefont
            // this.introclass = introclass
            this.introstyle =  `font-size: ${introsize}px;`+`margin: ${sep}px 0;`+`line-height: ${lineh}px;`




        }
    }
}
</script>

<style  scoped>
.title{
    color:rgba(51, 51, 51, 1);
    
}

.btn{
    width:80px;
    padding:5px 0;
    border-radius: 3px;
}
 
</style>