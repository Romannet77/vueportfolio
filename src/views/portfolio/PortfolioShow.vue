<template id ="">
  <div class="page">
    <div class="row">
      <div class="col col-md-5">
          <h1>{{article.title}}</h1>
          <img v-if="article.image" :src="$makeImgUrl(article.image)" :alt="article.title" width="100%">
      </div>
      <div class="col col-md-7">
          <h1><strong>Посилання:</strong>{{article.link}}</h1>
          <h1><strong>Опис:-</strong>{{article.desc}}</h1>
          <h1><strong>Ціна:</strong>{{article.price}}</h1>
          <h1><strong>Використані технології:</strong>{{article.usedSkills}}</h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      article: {}
    }
  },
  mounted () {
    console.log(this.$route)
    var url = '/works/' + this.$route.params.slug
    console.log(url, 'here')
    this.$http.get(url)
      .then((response) => {
        console.log(response)
        this.article = response.data
      })
  }
}
</script>
<style lang="scss">
</style>
