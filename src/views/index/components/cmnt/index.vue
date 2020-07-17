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
const cmntStore = namespace('cmnt');
@Component({})
export default class Cmnt extends Vue{
    @cmntStore.State('text') text!:string;
}
</script>
<style>

</style>