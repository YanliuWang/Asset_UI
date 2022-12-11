import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dataV from "@jiaminghi/data-view";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./common/flexible.js"; 
import "./assets/scss/style.scss"; 
import "./assets/icon/iconfont.css"; 

Vue.use(dataV);
Vue.use(ElementUI);
Vue.config.productionTip = false;
//mock satrt
// window.console.log(process.env.VUE_APP_URL)
// process.env.VUE_APP_MOCK === 'true' && require('./mock/index'); 
//mock end

// 判断路由
router.beforeEach(function(to, from, next) {
	if (to.meta.needLogin) {
		//页面是否登录
		if (localStorage.getItem("token")) {
			//本地存储中是否有token(uid)数据
			next(); 
		} else {
			//next可以传递一个路由对象作为参数 表示需要跳转到的页面
			next({
				name: "login"
			});
		}
	} else {
		next();
	}
});



new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
