import axios from 'axios'
import getCookie from './cookieUtil.js'

var baseUrl = 'http://localhost:8081';
const service = axios.create({
	baseURL: baseUrl,
	//process.env.NODE_ENV === 'production' ? process.env.VUE_APP_URL + '/api' : '/api',
	timeout: 1000000, // 请求超时时间
});

// 添加请求拦截器
service.interceptors.request.use(function(config) {
	// console.log(config)
	 //发请求前：数据转化，配置请求头，设置token
	 const token = getCookie('token');
	 if (token) {
		 config.headers.Token = token;//使用token的时引入cookie方法，或本地localStorage方法 const token = localStorage.getItem('token')
	 }
	 console.log('token', token)
	 return config;
	 
}, function(error) {
	return Promise.reject(error);
});


// 添加响应拦截器
service.interceptors.response.use((response)=>{
	//console.log(response)
	return response.data;
}, (error)=> {
	return Promise.reject(error.response);
});


export default service
