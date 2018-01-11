<template lang="pug">
  extends ./pug/main.pug
</template>

<script type="text/ecmascript-6">
  import moment from 'moment'
  import 'moment/locale/zh-cn'
  moment.locale('zh-cn')
  export default {
    name: 'app',
    data(){
      return{
        newTodo:'',
        title:'Vue-todos',
        todos:[
          {value:"阅读一本关于前端开发的书",done:false,created:Date.now()},
          {value:"补充范例代码",done:false,created:Date.now()+3000000000},
          {value:"写心得",done:false,created:Date.now()-300000000},
        ]
      }
    },
    created(){

    },
    computed(){

    },
    filters:{
        date(val){
          console.log(val)
          return moment(val).calendar();
      }
    },
    methods:{

    }
  }
</script>

<style lang="scss" scoped>
  @import './assets/style';
</style>
