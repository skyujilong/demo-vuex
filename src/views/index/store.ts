import Vue from 'vue';
import Vuex from "vuex";
Vue.use(Vuex);

const modulesFiles = (<any>require).context('./components',true,/\.ts$/);

const modules:{[fields:string]:any} = {};

for (let modulePath of modulesFiles.keys()){
    let regResult = /([^\/]+)-store\.ts$/.exec(modulePath);
    if (regResult) {
        let storeName = regResult[1];
        modules[storeName] = modulesFiles(modulePath).default;
    }
}

// TODO:抽取公共的 getter方法内容
const commonGetters = {
    name(state:any){
        return state.name;
    }
};
// TODO:定义 最顶层，通用的store内容， eg:firstAjax中的 数据内容。
const commonState = {
    name:'jilong5',
    countdown:10,
}

// 干预store中的内容。通过commit 进来这里。
const commonMutations = {
    doCountdown(state:any){
        state.countdown = state.countdown - 1;
    }
}

const commonActions = {
    doCountdown({commit}:any,payload:any){
        commit('doCountdown');
    }
}

const store = new Vuex.Store({
    state: commonState,
    getters: commonGetters,
    mutations: commonMutations,
    actions: commonActions,
    modules
});
export default store;