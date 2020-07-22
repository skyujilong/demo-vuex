<template>
  
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class';
@Component({})
export default class Base extends Vue{
    @Prop({}) data !: any;
    @Prop({}) meta !: any;
    @Getter('name') name !:string;
}
</script>

<style>

</style>