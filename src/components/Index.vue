<template>
  <div class="index">
     <h3>Ad-Wealth Website</h3>
     <router-link to="/login">Login Page</router-link>
     <router-link to="/register">Register Page</router-link>
     <router-link to="/contact-us">Contact-us Page</router-link>
     <router-link to="/fund-pages/balanced-fund">Balanced-fund Page</router-link>
     <router-link to="/fund-pages/equity-fund">Equity-fund Page</router-link>
     <router-link to="/fund-pages/stable-fund">Stable-fund Page</router-link>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    document.title = 'AD Wealth'
  }
}
</script>
<style scoped>
.index{
  margin:0;
  padding:0;
}
.index h3{
  margin-top:0;
  padding-top:50px;
}
.index a{
    display:block;
    padding-bottom:30px;
}
</style>