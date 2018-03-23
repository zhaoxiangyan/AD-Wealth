<template>
  <div class="pageone">
     <h3>Page One</h3>
  </div>
</template>

<script>
export default {
  name: 'pageone',
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    document.title = 'Admin | One'
  }
}
</script>
<style scoped>

</style>