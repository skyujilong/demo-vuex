<template>
  <div>
      {{text}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class';

const feedStore = namespace('feed')
@Component({})
export default class Feed extends Vue {
    @feedStore.State(store=>store.text) text!:string;
}

</script>

<style>

</style>