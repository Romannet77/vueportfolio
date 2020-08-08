<template>
  <div>
    <div class="page">
      <button @click="$store.dispatch('increment')">gfjh</button>
      <h1>initial value {{title}}</h1>
      <table class="table table-dark" >
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Назва проекту</th>
            <th scope="col">Посилання</th>
            <th scope="col">Опис Проекту</th>
            <th scope="col">Ціна проекту</th>
            <th scope="col">Your skills</th>
            <th scope="col">image</th>
          </tr>
        </thead>
          <tbody>
            <tr v-for="(work, index) in works" :key="work._id">
              <th scope="row">{{index}}</th>
              <td>{{work.tite}}</td>
              <td>{{work.link}}</td>
              <td>{{work.desc}}</td>
              <td>{{work.price}}</td>
              <td>{{work.usedSkills}}</td>
              <td><img :src="makeImgUrl(work.image)" alt="image" width="30%"></td>
              <td>
                  <svg @click="remove(work._id, work)" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg>
                <router-link :to="{ path: '/portfolio/edit/' + work.slug}">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg>
                </router-link>
                <router-link :to="{ path: '/portfolio/' + work.slug}">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                    <path fill-rule="evenodd" d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                  </svg>
                </router-link>
              </td>
            </tr>
          </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      works: []
    }
  },
  methods: {
    makeImgUrl (image) {
      return this.$remoteUrl + image
    },
    remove (id, work) {
      if (confirm('ok' + id)) {
        this.$http.delete('/works/' + id)
          .then((response) => {
            // this.works = response.data
            console.log(response)
            this.works.splice(this.works.indexOf(work), 1)
          })
      }
    }
  },
  computed: {
    ...mapState(['title'])
  },
  mounted () {
    this.$http.get('/works')
      .then((response) => {
        this.works = response.data
        console.log(response)
      })
  }
}
</script>
<style lang="scss">
</style>
