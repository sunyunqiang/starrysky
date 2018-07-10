import Vue from 'vue'
import Router from 'vue-router'

import DemoRouter from './demo.router'
import IndexRouter from './index.router'
import TagRouter from './tag.router'


Vue.use(Router)

const routes = [
	...IndexRouter,
	...DemoRouter,
	...TagRouter
]

const router = new Router({routes})

export default router
