import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
	  navZoomVal:false,
	  navActivePath:''
  },
  mutations: {
	  navZoom(state,bol){
		  state.navZoomVal = bol
	  },
	  navActivePathFun(state,path){
		  state.navActivePath = path
	  }
  },
  actions: {},
  modules: {}
});
