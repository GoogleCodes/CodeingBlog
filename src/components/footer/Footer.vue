<template>
  <!-- footer start -->
  <div class="footer clear" v-show="$route.meta.footer">
    <a href="http://www.miitbeian.gov.cn" class="ft-12">&copy; {{ getYear }} - 粤ICP备15025692号</a>
  </div>
  <!-- footer end -->
</template>

<script type="text/javascript">
  export default {
    name: 'foots',
    data() {
        return {

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
    text-align: center;
    position: absolute;
    bottom: 0px;
    left: 0px;
    text-align: center;
    width: 100%;
  }

  .footer a {
    color: #2f2f2f;
    line-height: 50px;
  }

</style>
