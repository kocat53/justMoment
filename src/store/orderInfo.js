export default {
	namespaced: true,
	state: () => ({
		company_name: '',
		name: '',
		phone: '',
		address: '',
		address_detail: '',
	}),
	mutations: {
		updateState(state, payload) {
			Object.keys(payload).forEach(key => {
				state[key] = payload[key]
			})
		},
	},
	actions: {},
	modules: {},
}
