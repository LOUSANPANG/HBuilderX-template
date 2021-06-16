// router
import { RouterMount, createRouter } from 'uni-simple-router'
import { GetStorageSync } from '@/utils/custom_storage.js'

const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,
	routes: [
		...ROUTES,
		{
			path: '*',
			redirect: (to) => {
				return { name: '404' }
			}
		}
	]
})

//全局路由前置守卫
router.beforeEach((to, from, next) => {
	const loginAuth = to.meta.loginAuth
	const token = GetStorageSync('token')
	if (loginAuth) {
		token
			? next()
			: next({
					name: 'login',
					params: { formPath: to.fullPath }
				})
	} else {
		next()
	}
})

// 全局路由后置守卫
router.afterEach((to, from) => {})

export {
	router,
	RouterMount
}
