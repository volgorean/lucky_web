import Vue from 'vue'

export default {
	local: function(key, def) {
	  try {
	  	if (!localStorage.getItem(key)) {return def}
	    return JSON.parse(localStorage.getItem(key))
	  }
	  catch(e) {
	    console.error("error parsing key: "+key+" in localstorage")
	    return null
	  }
	},
	api: function(path, method, body) {
		let token = Vue.prototype.$d.user ? Vue.prototype.$d.user.token : false

		return fetch(Vue.prototype.$api+path, {
			method: method,
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
				"Authorization": "Bearer " + token
			},
			body: JSON.stringify(body)
		})
		.then(response => {
			if (!response.ok) {
				throw Error(response.statusText);
			} else {
				return response
			}
		})
		.then(data => data.json())
	},
}