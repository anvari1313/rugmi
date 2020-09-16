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
      <a class="ui item" @click="login">
        Login
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AppHeader',
  methods: mapActions(['login'])
}
</script>