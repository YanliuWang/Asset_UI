import axios from 'axios'
import getCookie, { setCookie } from './cookieUtil.js'

var baseUrl = 'http://localhost:8080';
const service = axios.create({
	baseURL: baseUrl,
	//process.env.NODE_ENV === 'production' ? process.env.VUE_APP_URL + '/api' : '/api',
	timeout: 1000000, // 请求超时时间
});

// 添加请求拦截器
service.interceptors.request.use(function(config) {
	// console.log(config)
	 //发请求前：数据转化，配置请求头，设置token
	 const token = getCookie("token");
	 console.log('token', token)
	 if (token) {
		 console.log('token is not null')
		 config.headers.token = token;//使用token的时引入cookie方法，或本地localStorage方法 const token = localStorage.getItem('token')
	 } else {
		console.log('token is null')
	 }
	 return config;
	 
}, function(error) {
	return Promise.reject(error);
});


// 添加响应拦截器
service.interceptors.response.use((response)=>{
	if (response.headers.authorization) {
		let token = response.headers.authorization
		setCookie('token', token)

	} 
	//console.log(response)
	return response.data;

}, (error)=> {
	return Promise.reject(error.response);
});


export default service
