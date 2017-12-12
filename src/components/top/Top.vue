<template>
  <div class="top-nav"></div>
</template>

<script type="text/javascript">
  export default {
      name: 'top',
      data () {
          return {
            activeIndex2: '1'
          };
      },
      methods: {

      },
  }
</script>

<style scoped>
  .top-nav {
    width: 100%;
    position: fixed;
    height: 60px;
  }

  .top-nav .user-nav {
    width: 250px;
    margin: 16px 60px 0 0;
  }

</style>
