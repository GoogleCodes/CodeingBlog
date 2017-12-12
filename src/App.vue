<template>
  <div id="app">
    <router-view></router-view>
    <foots></foots>
  </div>
</template>

<script type="text/javascript">

  import navs from '@/components/top/Nav.vue'
  import tops from '@/components/top/Top.vue'
  import foots from '@/components/footer/Footer.vue'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  created() {

  },
  components: {
    navs,
    tops,
    foots
  }
}
</script>

