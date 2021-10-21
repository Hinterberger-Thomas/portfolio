<template>
  <div>
    <Nav></Nav>
  </div>
  <router-view />
</template>
<script lang="ts">
import Nav from "./components/nav/Nav.vue";

export default {
  components: {
    Nav,
  },
};
</script>
<style src="./style/app.scss" lang="scss">
</style>
