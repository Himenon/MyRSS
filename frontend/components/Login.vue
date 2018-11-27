<template>
  <div id="firebase-ui-auth-container"></div>
</template>

<script>
  import {ui} from "~/services/fireinit";
  import {config} from '~/services/fireinit';
  export default {
    name: 'login',
    mounted() {
      ui.start("#firebase-ui-auth-container", config)
    }
  }
</script>

<style lang="css">
</style>