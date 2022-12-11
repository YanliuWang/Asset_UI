import request from './request.js';
import Qs from 'qs';

//login
// http://localhost:8080/login
export function login_request(formData) {
	console.log(formData)
	return request({
		url: '/login/',
		method: 'post',
	    data: formData,
		headers:{
			'Content-Type':'application/json;'
			// 'Content-Type':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
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

//Create an asset record;
export function create_asset(formData) {
	return request({
		url: '/asset/',
		method: 'post',
		// transformRequest: [function(data) {
		// 	data = Qs.stringify(data);
		// 	return data;
		// }],
	    // data:{
		// 	rfidId:_rfidId,
		// 	asserName:_asserName,
		// 	ip:_ip,
		// 	category:_category,
		// 	value:_value
		// },
		data:formData,
		headers:{
			'Content-Type':'application/json;'
		}
	});
}

//Delete an asset with specific assetId
export function delete_asset(rfidId) {
	return request({
		url: '/asset/' + rfidId,
		method: 'delete',
		data:rfidId,
		headers:{
			'Content-Type':'application/json;'
		}
	});
}

//Update asset information (including name, location, category, value)
export function update_asset(formData) {
	return request({
		url: '/asset/',
		method: 'put',
		data:formData,
		headers:{
			'Content-Type':'application/json;'
		}
	});
}

//Get the location information of an asset based on the assetId
export function tracking_location(rfidId) {
	return request({
		url: '/tracking/location/' + rfidId,
		method: 'get',
		data:rfidId,
		headers:{
			'Content-Type':'application/json;'
		}
	});
}

export function update_location(formData) {
	return request({
		url: '/tracking/location/',
		method: 'put',
		data:formData,
		headers:{
			'Content-Type':'application/json;'
		}
	});
}

//Add notification service for the user and the assetId
export function update_sub(assetId) {
	return request({
		url: '/notification/' + assetId,
		method: 'post',
		data:assetId,
		headers:{
			'Content-Type':'application/json;'
		}
	});
}

//report
export function get_report(fieldChoice, choiceValue) {
	return request({
		url: '/asset/report',
		method: 'get',
		params:{
			fieldChoice: fieldChoice,
			choiceValue: choiceValue
		},
		headers:{
			'Content-Type':'application/json;'
		}
	});
}