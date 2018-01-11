<template lang="pug">
    header
      h3 我是header
      p {{msg}}
</template>

<script>
    export default {
        name: "top",
      data(){
          return {
            username : '1234'
          }
      },
      props:['msg'],
      methods:{
          doThis(){
            console.log(this.msg)
            // this.msg = msg;
          }
      }
    }
</script>

<style scoped lang="scss">
  import './assets/style.scss'
header{
  background-color: #f00;
  h3{
    color: #fff;
  }
}
</style>
