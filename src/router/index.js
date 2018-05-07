import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import enterpriseCredit from '@/components/enterpriseCredit/enterpriseCredit'

Vue.use(Router)
const router=new Router({
    routes: [
		{
			path: '/',
			name: 'index',
			meta: {
				title: '立趣首页'
			},
			component: index
    	},
		{
			path:'/enterpriseCredit',
			name:'enterpriseCredit',
			meta: {
				title: '企业信用'
			},
			component:enterpriseCredit
		}
	]
})
router.beforeEach((to,form,next) =>{
	/*路由变化修改title*/
	if(to.meta.title){ 
		document.title=to.meta.title
	} 
	next(); 
})

export default router