import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import enterpriseCredit from '@/components/enterpriseCredit/enterpriseCredit'
import personalCredit from '@/components/personalCredit/personalCredit'
import solution from '@/components/solution/solution'

Vue.use(Router)
const router=new Router({
	mode: 'history',
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
		},
		{
			path:'/personalCredit',
			name:'personalCredit',
			meta:{title:'个人信用'},
			component:personalCredit
		},
		{
			path:'/solution',
			name:'solution',
			meta:{title:'解决方案'},
			component:solution
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