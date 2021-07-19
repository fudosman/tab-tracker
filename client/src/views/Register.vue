<template>
  <div class="register">
    <h1>This is the register page</h1>

    <input type="text" name="email" v-model="email" placeholder="email"> <br>
    <input type="password" name="password" v-model="password" placeholder="password"> <br>
    <button @click="register">register</button>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register(){
     await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
    }
  },
}
</script>
