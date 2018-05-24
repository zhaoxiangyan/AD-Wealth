<template>
  <div class="pageone">
    <Breadcrumb :style="{margin: '16px 0', textAlign: 'left'}">
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Components</BreadcrumbItem>
        <BreadcrumbItem>Layout</BreadcrumbItem>
    </Breadcrumb>
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