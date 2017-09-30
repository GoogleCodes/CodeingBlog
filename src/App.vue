<template>
  <div id="app">
    <div class="fl">
      <navs style="width: 200px;"></navs>
    </div>
    <div class="fl">
      <div class="right-nav">
        <tops></tops>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

  import navs from '@/components/top/Nav.vue'
  import tops from '@/components/top/Top.vue'

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
  }
}
</script>

