<script lang="ts">
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
import { TTUpButton, TTBackButton } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    TTUpButton,
    TTBackButton,
  }
});
</script>

<template>
  <div id="app">
    <TTUpButton />
    <TTBackButton/>
  </div>
</template>
