<template>
  <!-- footer start -->
  <div class="footer clear">
    <a href="http://www.miitbeian.gov.cn" class="ft-12">Copyright &copy; {{ getYear }} - 粤ICP备15025692号</a>
  </div>
  <!-- footer end -->
</template>

<script type="text/javascript">
  export default {
    name: 'foots',
    data() {
        return {
          yea: null
        }
    },
    computed: {
      getYear(){
        return new Date().getFullYear()
      }
    },
    created() {

    },
    methods: {

    }
  };
</script>

<style>
  .footer {
    background: #eef1f6;
    width: 90%;
    position: absolute;
    bottom: 0px;
    margin: 0px 10px;
  }
</style>
