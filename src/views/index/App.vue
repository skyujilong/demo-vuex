<template>
    <div>
        <h1>{{name}}</h1>
        <div>
            <span>次数：{{countdown}}</span>
            <button @click="doCountdown">减少</button>
        </div>
        <Cmnt></Cmnt>
        <Feed></Feed>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Cmnt from './components/cmnt/index.vue';
import Feed from './components/feed/index.vue';

import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class';

@Component({
    components:{
        Feed,
        Cmnt
    }
})
export default class App extends Vue{
    @Getter('name') name!:string;
    @State(store=>store.countdown) countdown!:any;
    @Action('doCountdown') doCountdown!:any;
    mounted(){
        console.log('mounted.......');
    }
}
</script>

<style>

</style>