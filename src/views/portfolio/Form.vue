<template>
  <div class="page">
    <form method="POST" action="/" @submit.prevent="save">
      <div class="container">
        <div class="row">
          <div class="form-group col-md-6">
            <label for="Inputtext">Назва проекту</label>
            <input name="title" :value="article.title" type="text" :class="{'is-invalid' : errors.title}" class="form-control"  id="Input" aria-describedby="some" placeholder="text">
            <small id="some" class="form-text text-muted">Введіть назву проекту.</small>
            <div v-if="errors.title" class="invalid-feedback">
              {{errors.title.properties.message}}
            </div>
          </div>
          <div class="form-group col-md-6">
            <label for="exampleInputPassword1">Посилання</label>
            <input name="link" :value="article.link" type="text" :class="{'is-invalid' : errors.link}" class="form-control"  id="exampleInputPassword1" placeholder="link">
            <small id="some" class="form-text text-muted">Введіть посилання</small>
            <div v-if="errors.link" class="invalid-feedback">
              {{errors.link.properties.message}}
            </div>
          </div>
          <div class="form-group col-md-6" >
            <label for="exampleFormControlTextarea1">Опис Проекту</label>
            <textarea name="desc" v-model="article.desc" class="form-control" :class="{'is-invalid' : errors.desc}" id="exampleFormControlTextarea1" rows="3"></textarea>
            <small id="some" class="form-text text-muted">Введіть текст</small>
            <div v-if="errors.desc" class="invalid-feedback">
              {{errors.desc.properties.message}}
            </div>
          </div>
          <div class="form-group col-md-6">
            <label for="skills">skills</label>
            <input name="usedSkills" :value="article.usedSkills" type="text" :class="{'is-invalid' : errors.usedSkills}" class="form-control"  id="exampleInputPassword1" placeholder="skills">
            <small id="some" class="form-text text-muted">enter your skills</small>
            <div v-if="errors.usedSkills" class="invalid-feedback">
              {{errors.usedSkills.properties.message}}
            </div>
          </div>
          <div class="form-group col-md-6">
            <label for="exampleInput2">Ціна проекту</label>
            <input name="price" usedSkillstype="price" :value="article.price" class="form-control" :class="{'is-invalid' : errors.price}" id="exampleInput2" placeholder="price">
            <small id="some" class="form-text text-muted">Введіть price</small>
            <div v-if="errors.price" class="invalid-feedback">
              {{errors.price.properties.message}}
            </div>
          </div>
        </div>
        <div class="custom-file">
          <img v-if="article.image" :src="$makeImgUrl(article.image)" :alt="article.title" width="100%">
          <label class="label-control-file" for="inputFormCustomFile">File input</label>
          <input name="cover" @change="fileTo64" type="file" :class="{'is-invalid' : errors.cover}" class="fcustom-file-input" id="inputFormCustomFile">
          <small id="some" class="form-text text-muted">Upload image</small>
          <div v-if="errors.cover" class="invalid-feedback">
            {{errors.cover.properties.message}}
          </div>
          <div id="preview">
            <img v-if="url" :src="url" />
          </div>
        </div>
      <div class="text-center">
        <img src="../../assets/images/goldencoin.jpg" alt="coin" width="30%">
      </div>
      <div class="col text-center">
        <div class="button">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </form>
</div>
</template>
<script>
export default {
  data () {
    return {
      url: null,
      errors: {},
      article: {}
    }
  },
  mounted () {
    console.log('here')
    console.log(this)
    console.log(this.$route.params)
    if (this.$route.params.slug) {
      var url = '/works/' + this.$route.params.slug
      console.log(url)
      this.$http.get(url)
        .then((response) => {
          console.log(response)
          this.article = response.data
        }
        )
    }
  },
  methods: {
    save ($event) {
      this.errors = {}
      var formData = new FormData($event.target)
      this.$http.post('/works', formData)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          error = Object.assign({}, error)
          console.log(error)
          this.errors = error.response.data.errors
          console.log(this.errors)
        })
    },
    fileTo64  (e) {
      const file = e.target.files[0]
      this.url = URL.createObjectURL(file)
    }
  }

}
</script>
<style lang="scss">
  .text-center {
    margin-top: 25px;
    max-width: 100%;
  }
  .button {
    margin-top: 25px;
  }
  .custom-file {
    margin-top: 25px;
  }
</style>
 <!-- width="30%" style="text-align:center" -->
