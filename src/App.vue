<!--App.vue是项目入口文件。-->
<template>
    <div id="app">
        <header-tab></header-tab>
        <h2>{{msg}}</h2>
        <div class="nav-box">
            <p class="nav-list">
                <router-link class="nav-item" to="/">首页</router-link>
                <router-link class="nav-item" to="/about">learnVue</router-link>
            </p>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import HeaderTab from './components/header.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to My Vue webpack project'
    }
  },
  components:{
    HeaderTab
  }
}
</script>

<style lang="scss">
     $lightDark:#999;
     $dark:#333;
     h1{
         color:$lightDark;
     }
     #app {
         text-align: center;
         color: $lightDark;
         width:600px;
         margin:0 auto;
     }
     h1, h2 {
         font-weight: normal;
     }
     ul {
         list-style-type: none;
         padding: 0;
     }
     li {
         text-align: left;
         margin: 0 10px;
     }
     a {
         color: $dark;
     }
</style>
