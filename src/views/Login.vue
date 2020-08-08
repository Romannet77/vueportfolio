<template>
  <form class="text-center border border-light p-5" method="POST" action="/" @submit.prevent="login">

    <p class="h4 mb-4">Sign in</p>

    <!-- Email -->
    <input
      type="email"
      id="defaultLoginFormEmail"
      class="form-control mb-4"
      placeholder="E-mail"
      v-model="email"
      >

    <!-- Password -->
    <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password" v-model="password">

    <div class="d-flex justify-content-around">
        <div>
            <!-- Remember me -->
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember">
                <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
            </div>
        </div>
        <div>
          <router-link :to="{ path: '/password/'}">
            <a href="">Forgot password?</a>
          </router-link>

        </div>
    </div>

    <!-- Sign in button -->
      <button class="btn btn-info btn-block my-4" type="submit">Sign in</button>

    <!-- Register -->
    <router-link :to="{ path: '/register/'}">
      <p>Not a member?
          <a href="">Register</a>
      </p>
    </router-link>
    <!-- Social login -->
    <p>or sign in with:</p>

    <a href="#" class="mx-2" role="button"><i class="fab fa-facebook-f light-blue-text"></i></a>
    <a href="#" class="mx-2" role="button"><i class="fab fa-twitter light-blue-text"></i></a>
    <a href="#" class="mx-2" role="button"><i class="fab fa-linkedin-in light-blue-text"></i></a>
    <a href="#" class="mx-2" role="button"><i class="fab fa-github light-blue-text"></i></a>

</form>
</template>
<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      console.log('yebat kapat kak slojna')
      console.log({ email: this.email, password: this.password })
      this.$http.post('/users/login', { email: this.email, password: this.password })
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
