<template>
  <div class="container pt">
    <div class="row mt">
      <div class="col-lg-6 col-lg-offset-3 centered">
        <h3>{{ list.article_title }}</h3>
        <hr>
        <p>{{ list.article_desc }}</p>
      </div>
    </div>
    <div class="row mt centered">
      <div class="col-lg-8 col-lg-offset-2">
        <!--<p><img class="img-responsive" src="assets/img/portfolio/1.jpg" alt=""></p>-->
        <!--<p><img class="img-responsive" src="assets/img/portfolio/2.jpg" alt=""></p>-->
        <!--<p><img class="img-responsive" src="assets/img/portfolio/3.jpg" alt=""></p>-->
      </div>
    </div><!-- /row -->
  </div><!-- /container -->
</template>

<script type="text/javascript">
  export default {
      data() {
          return {
            list: [],



          }
      },
      created() {
          console.log(this.$route.query.id);


          alert(123);
//          this.$http.get('http://www.getcodeing.com/api/article/getAricle').then((res) => {
//              let arr = JSON.parse(res.data).Table;
//              let id = 0;
//              for (let i in arr) {
//                  id = arr[i].id;
//                  if (this.$route.query.id == arr[i].id) {
//                    this.list = arr[i];
//                    console.log(this.list);
//                  }
//              }
//          });
      },
      methods: {

      }
  }
</script>
