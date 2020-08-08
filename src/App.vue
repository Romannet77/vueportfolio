<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->
      <button @click="isActive = !isActive" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" v-bind:class="{ show: isActive }" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
            <!-- <router-link to="/about">About</router-link>  |
            <router-link to="/my">My</router-link> |
            <router-link to="/friend">Friend</router-link> | -->
          </li>
          <li class="nav-item">
            <!-- <a class="nav-list" href="#">New List</a> -->
          </li>
    <div>
      <b-dropdown id="dropdown-1" text="PORTFOLIO" class="" style= "margin-top:40px; margin-left:40px;">
        <b-dropdown-item href="/experiments/CursorTrap">Cursor trap</b-dropdown-item>
        <b-dropdown-item href="/experiments/SquareTrap">Square trap</b-dropdown-item>
        <b-dropdown-item href="/experiments/Example">Example</b-dropdown-item>
        <b-dropdown-item href="/experiments/SquareRun">Square run</b-dropdown-item>
        <b-dropdown-item href="/portfolio/new">CREATE</b-dropdown-item>
        <b-dropdown-item href="/portfolio/List">List</b-dropdown-item>
        <b-dropdown-item href="/login">Login</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item active></b-dropdown-item>
        <b-dropdown-item disabled></b-dropdown-item>
      </b-dropdown>
    </div>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <mdb-input label="Search" type="text" class="mt-0"/>
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/my">My</router-link> |
      <router-link to="/portfolio/List">List</router-link> | -->
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>
<script>
import { mdbInput } from 'mdbvue'
export default {
  name: 'mdbSearchEcample',
  components: {
    mdbInput
  },
  data () {
    return {
      isActive: true
    }
  }
}
</script>
<style lang="scss">

</style>
