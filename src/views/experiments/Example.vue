<template>
<div>
  <p>{{ count }}</p>
  <button @click="countMe">Click Me</button>
  <p></p>
  <ul>
    <li v-for="(link, index) in links" v-bind:key="index">
      {{links}}
    </li>
  </ul>
</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    countMe: function () {
      this.count++
    }
  },
  computed: {
    ...mapState(['links'])
  }
}
</script>
