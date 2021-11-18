import { createStore } from 'vuex'
import orderInfo from './orderInfo'
import orderProduct from './orderProduct'

export default createStore({
	modules: {
		orderInfo,
		orderProduct,
	},
})
