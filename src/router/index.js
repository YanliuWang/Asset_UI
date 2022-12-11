import Vue from "vue";
import VueRouter from "vue-router";
import layout from "@/layout";
import HomePage from "@/views/Home-Page";
import SubPage from "@/views/SubPage";
import ReportPage from "@/views/ReportPage";

Vue.use(VueRouter);

// 路由 meta 参数说明
// hidden    是否显示当前导航 boolean
// title     导航的名字 string
// keepAlive 切换页面时候是否缓存当前页面 boolean
const routes = [
	{
		path: '/',
		component: layout,
		hidden: false,
		meta: {
			title: 'Home Page',
		},
		redirect: '/login',
		children: [{
			path: '/Home-Page',component: HomePage, 
      		name: 'CheckPriceContract',
			meta: {
				needLogin: false,
				keepAlive: false,
				title: 'Home Page',
			}
		},
        {
			path: '/SubPage',component: SubPage, 
			name: 'SubPage',
			meta: {
				needLogin: false,
				keepAlive: false,
				title: 'Notification',
			}
		},
		{
			path: '/ReportPage',component: ReportPage, 
			name: 'ReportPage',
			meta: {
				needLogin: false,
				keepAlive: false,
				title: 'Report',
			}
		},

		]
	},
	{
		path: '/login',
		component: () => import('@/views/login'),
		name: 'Login',
		meta: {
			hidden: true,
		},
	}
];

const router = new VueRouter({
	// mode: "history",
	mode: "hash",
	// base: process.env.BASE_URL,
	routes
});

export default router;
