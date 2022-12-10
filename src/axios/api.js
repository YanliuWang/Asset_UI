import request from './request.js';
import Qs from 'qs';

//login
// http://localhost:8080/user/login    data ?
export function login_request(formData) {
	return request({
		url: '/user/login',
		method: 'post',
	    data:formData,
		headers:{
			'Content-Type':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
		}
	});
}
//Look up the details of an asset
// export function asset_byId(rfidId) {
// 	return request({
// 		url: '/asset/' + rfidId,
// 		method: 'get',
// 	    data:rfidId,
// 		headers:{
// 			'Content-Type':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
// 		}
// 	});
// }
export function asset_byId(rfidId) {
	return request({
		url: '/asset/' + rfidId,
		method: 'get',
		transformRequest: [function(data) {
			data = Qs.stringify(data);
			return data;
		}],
		headers:{
			'Content-Type':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
		}
	});
}

// Look up the asset by a given category
export function asset_byCategory(categoryValue) {
	return request({
		url: '/asset/category/' + categoryValue,
		method: 'get',
		transformRequest: [function(data) {
			data = Qs.stringify(data);
			return data;
		}],
		headers:{
			'Content-Type':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
		}
	});
}

//Look up the asset by a given name
export function asset_byName(nameVal) {
	return request({
		url: '/asset/name/' + nameVal,
		method: 'get',
		transformRequest: [function(data) {
			data = Qs.stringify(data);
			return data;
		}],
		headers:{
			'Content-Type':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
		}
	});
}

//Look up the asset by a given city
export function asset_byCity(cityVal) {
	return request({
		url: '/asset/city/' + cityVal,
		method: 'get',
		transformRequest: [function(data) {
			data = Qs.stringify(data);
			return data;
		}],
		headers:{
			'Content-Type':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
		}
	});
}

//Look up the asset by a given country
export function asset_byCountry(countryVal) {
	return request({
		url: '/asset/country/' + countryVal,
		method: 'get',
		transformRequest: [function(data) {
			data = Qs.stringify(data);
			return data;
		}],
		headers:{
			'Content-Type':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
		}
	});
}