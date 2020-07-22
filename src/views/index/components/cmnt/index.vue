<template>
  <div>
      {{text}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from "../base/index.vue";
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class';
const cmntStore = namespace('cmnt');
@Component({})
export default class Cmnt extends Base{
    @cmntStore.State('text') text!:string;
    mounted(){
      // console.log(this.$props);
      console.log(this.data);
      console.log(this.meta);
      console.log(this.name);
    }
}
</script>
<style>

</style>