<template>
  <div class="ui secondary pointing menu">
    <a class="active item">
      Rugmi
    </a>
    <a class="item">
      Messages
    </a>
    <a class="item">
      Friends
    </a>

    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <a class="ui item" @click="login">Gallery</a>
        <a class="ui item" @click="login">Upload</a>
        <a class="ui item" @click="logout">Logout</a>
      </div>
      <a v-else class="ui item" @click="login">
        Login
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  computed: mapGetters(['isLoggedIn']),
  methods: mapActions(['login', 'logout'])
}
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>