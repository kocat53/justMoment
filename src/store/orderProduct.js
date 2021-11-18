import production from '@/assets/production.json'

export default {
	namespaced: true,
	state: () => ({
		period: [6, 12, 24],
		budget: [5, 10, 50],
		delivery_cycle: [1, 2],
		type: ['스낵', '생수', '음료', '간편식'],
		product_list: production,
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
