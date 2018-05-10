import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import enterpriseCredit from '@/components/enterpriseCredit/enterpriseCredit'
import personalCredit from '@/components/personalCredit/personalCredit'
import solution from '@/components/solution/solution'
import aboutUs from '@/components/aboutUs/aboutUs'
import news from '@/components/news/news'
import contactUs from '@/components/contactUs/contactUs'
import joinUs from '@/components/joinUs/joinUs'

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
		},
		{
			path:'/aboutUs',
			name:'aboutUs',
			meta:{title:'关于我们'},
			component:aboutUs
		},
		{
			path:'/news',
			name:'news',
			meta:{title:'新闻中心'},
			component:news
		},
		{
			path:'/contactUs',
			name:'contactUs',
			meta:{title:'联系我们'},
			component:news
		},
		{
			path:'/joinUs',
			name:'joinUs',
			meta:{title:'加入我们'},
			component:joinUs
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