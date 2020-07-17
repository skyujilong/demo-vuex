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

console.log(modules);

const commonGetters = {
    name(state:any){
        return state.name;
    }
};

const commonState = {
    name:'jilong5'
}


const store = new Vuex.Store({
    state: commonState,
    getters: commonGetters,
    modules
});
export default store;