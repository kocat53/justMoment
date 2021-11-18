import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/components/Home'
import FormInfo from '@/components/FormInfo'
import FormProduct from '@/components/FormProduct'

export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/formInfo',
			name: 'formInfo',
			component: FormInfo,
		},
		{
			path: '/product',
			name: 'formProduct',
			component: FormProduct,
		},
	],
})
