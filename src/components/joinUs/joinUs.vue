<template>
	<div class="news-div">
		<!-- 导航 -->
		<nav role="navigation" class="navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar icon-bar1"></span>
                        <span class="icon-bar icon-bar2"></span>
                        <span class="icon-bar icon-bar3"></span>
                    </button>
                    <a href="index.html" class="navbar-brand"><img alt="logo" :src="imgArrUrls.logo"></a>
                </div>
                <div id="bs-example-navbar-collapse-1" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-right text-left" >
                        <li >
							<router-link to="/"><i class="fa fa-bars fa-hide"></i>&nbsp;首页</router-link>
                        </li>
                        <li>
							<router-link to="/enterpriseCredit"><i class="fa fa-building-o fa-hide"></i>&nbsp;企业信用</router-link>
                        </li>
                        <li>
							<router-link to="/personalCredit"><i class="fa fa-user-o fa-hide"></i>&nbsp;个人信用</router-link>
                        </li>
                        <li>
							<router-link to="/solution"><i class="fa fa-newspaper-o fa-hide"></i>&nbsp;解决方案</router-link>
                        </li>
                        <li class="dropdown active">
                            <a href="aboutus.html#tab1" data-toggle="dropdown" class="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-question-circle-o fa-hide">&nbsp;</i>&nbsp;关于我们<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><router-link to="/aboutUs">立趣简介</router-link></li>
                                <li><router-link to="/news">新闻中心</router-link></li>
                                <li><router-link to="/contactUs">联系我们</router-link></li>
                                <li><router-link to="/joinUs">加入我们</router-link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="navbar-bg-opacity"></div>
        </nav>
        
       <!-- 背景 -->
		<div class="aboutus-bg aboutus-bg-joinus"></div>
		<div class="clearfix"></div>
		<div class="container joinus">
			<div class="intro-wrapper joinus-intro text-left">
				<div class="intro-title">加入我们</div>
				<p>如果你想以后的生活被这样的一群人围绕：有情怀有热血的创业团队，融合科技与人文的geek，任性又可爱的伪文艺青年，当然啦，少不了还有油菜花、蛇精病的技术帝、程序员、设计师和产品鲸鲤，那么，欢迎加入立趣！</p>
				<p>如果你对未来的职业想象是这样的：拥有广阔的发展空间，世界那么大，你想去看看；接触国内外前沿的技术技能，与更多聪明的头脑碰撞激情火花；享受透明化、扁平化的管理，你的地盘你做主，那么，欢迎加入立趣！</p>
				<p class="contactus">简历请投递至：<a href="mailto:hr@lychee-info.cn">hr@lychee-info.cn</a></p>
			</div>
			<div class="intro-wrapper">
				<div class="intro-title">职位介绍</div>
				<div class="tab-row-content jobs">
					<div class="col-md-4 col-sm-4 col-xs-12">
						<a class="job text-center" href="javascript:void(0)" onclick='applyJob("java")'>
							<img src="./java.png">
							<div>
								<p>高级java软件工程师</p>
								<i class="fa fa-map-marker"></i>&nbsp;&nbsp;<span>广州</span>
							</div>
						</a>
					</div>
					<div class="col-md-4 col-sm-4 col-xs-12">
						<a class="job" href="javascript:void(0)" onclick='applyJob("bigdata")'>
							<img src="./bigdata.png">
							<div>
								<p>大数据平台研发工程师</p>
								<i class="fa fa-map-marker"></i>&nbsp;&nbsp;<span>广州</span>&nbsp;&nbsp;<span>南宁</span>
							</div>
						</a>
					</div>
					<div class="col-md-4 col-sm-4 col-xs-12">
						<a class="job" href="javascript:void(0)" onclick='applyJob("frontend")'>
							<img src="./frontend.png">
							<div>
								<p>高级前端工程师</p>
								<i class="fa fa-map-marker"></i>&nbsp;&nbsp;<span>南宁</span>
							</div>
						</a>
					</div>
					<div class="col-md-4 col-sm-4 col-xs-12">
						<a class="job" href="javascript:void(0)" onclick='applyJob("designer")'>
							<img src="./designer.png">
							<div>
								<p>网页美工设计</p>
								<i class="fa fa-map-marker"></i>&nbsp;&nbsp;<span>广州</span>
							</div>
						</a>
					</div>
					<div class="col-md-4 col-sm-4 col-xs-12">
						<a class="job" href="javascript:void(0)" onclick='applyJob("testEngineer")'>
							<img src="./qa.png">
							<div>
								<p>软件测试工程师</p>
								<i class="fa fa-map-marker"></i>&nbsp;&nbsp;<span>广州</span>&nbsp;&nbsp;<span>南宁</span>
							</div>
						</a>
					</div>
					<div class="col-md-4 col-sm-4 col-xs-12">
						<a class="job" href="javascript:void(0)" onclick='applyJob("pr")'>
							<img src="./pr.png">
							<div>
								<p>高级线上营销、PR经理</p>
								<i class="fa fa-map-marker"></i>&nbsp;&nbsp;<span>南宁</span>
							</div>
						</a>
					</div>
					<div class="col-md-4 col-sm-4 col-xs-12">
						<a class="job" href="javascript:void(0)" onclick='applyJob("javaTrainee")'>
							<img src="./java.png">
							<div>
								<p>java实习生</p>
								<i class="fa fa-map-marker"></i>&nbsp;&nbsp;<span>广州</span>
							</div>
						</a>
					</div>
					<div class="clearfix"></div>
				</div>
			</div>
		</div>
        
		<div class="footer">
			<div class="container" style="margin-top:0px;margin-bottom:0px;text-align:left">
				<div class="col-md-8 col-sm-8 col-xs-12">
					<img :src="imgArrUrls.logo2">
					<p class="footer-p" style="color:#fff">
						<a href="aboutUs.html">立趣简介&nbsp;|&nbsp;</a> 
						<a href="terms.html">服务条款&nbsp;|&nbsp;</a>
						<a href="privacy.html">隐私政策&nbsp;|&nbsp;</a>
						<a href="joinUs.html">加入我们&nbsp;|&nbsp;</a>
						<a href="contactUs.html">联系我们</a>
					</p>
				</div>
				<div class="col-md-4 col-sm-4 col-xs-12">
					<p><i class="fa fa-phone"></i>&nbsp;&nbsp;<a href="javascript:void(0);">020-85162521</a></p>
					<p><i class="fa fa-envelope"></i>&nbsp;&nbsp;<a href="mailto:contact@lychee-info.cn">contact@lychee-info.cn</a></p>
					<p><i class="fa fa-map-marker"></i>&nbsp;&nbsp;<a href="javascript:void(0);">广州市天河区思成路19号宏太智慧谷7栋301房</a></p>
				</div>
				<div class="col-md-12 col-sm-12 col-xs-12 copyright" style="text-align:center;">
					<p>版权所有&copy;2015-2017 广州立趣信息科技有限公司 <a href="http://www.miitbeian.gov.cn" target="_blank">粤ICP备15068962号</a></p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return {
			imgArrUrls:{
				"goTop":require('../../assets/images/gotop.png'),
				"logo":require('../../assets/images/logo_ly.png'),
				"logo2":require('../../assets/images/logo.png')
			},
			detail:{}
		}
	},
	mounted(){
		
		
	},
	methods:{
		  
	}
	
}
</script>
<style lang="scss" scoped>
.container{margin-top:80px;margin-bottom:80px;}
.aboutus-bg-joinus{background-image: url(./bg-joinus.jpg);}
.intro-wrapper{margin-bottom:80px;}
p{color:#555555;font-size:16px;line-height: 1.8;}
.footer p{color:#ffffff;font-size:14px;}
.aboutus .aboutus-intro p:last-child{margin-top:40px;}
.joinus .joinus-intro p{margin-bottom:40px;}
.intro-title{padding-bottom:20px;margin-bottom:20px;border-bottom:1px solid #e9e9e9;font-size:20px;color:#0f4994;}
.contact-route{color:#35465a;}
.contact-route >p{font-size:16px;padding-bottom:10px;}
.contact-route  a{color:#35465a;font-size:16px;text-decoration: none;}
.bus-route{padding-top:30px;padding-bottom:20px;}
.drive-route{padding-top:20px;padding-bottom:20px}
.drive-route p{padding-bottom:56px;}
.contact-route h4{font-size:20px;padding-bottom:20px;}
.contact-route img{max-width: 100%;}
.jobs .col-md-4,
.jobs .col-sm-4,
.jobs .col-xs-12{
	margin-bottom:20px;
}
.job p{color:#000000;}
.job,.job:focus{display: block;padding-top: 13px;padding-bottom: 13px;border: 1px solid #dfdfdf;border-radius: 0.2px;text-align: left;text-decoration: none;}
.job:hover{border: 1px solid #095db1;text-decoration: none;}
.job>img{width:70px;margin-left:26px;margin-right:26px;}
.job>div{display:inline-block;color:#132130;vertical-align: middle;} 
.job>div>p{font-size:16px;} 
.job>div>i{font-size:14px;margin-top:12px;color:#555555;} 
.job>div>span{font-size:14px;color:#555555;}

@media(max-width:767px){
	.container{margin-top:30px;margin-bottom:30px;}
	.intro-wrapper{margin-bottom:40px;}
	.intro-title{font-size:16px;}
	p{font-size:14px;}
	.job{text-align: center;}
	.job>div{display:block;}
	.contact-route >p{font-size:14px;}
	.contact-route >p a{font-size:14px;}
	.contact-route h4{font-size:16px;}
}
</style>