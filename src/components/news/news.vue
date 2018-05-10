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
		<div class="aboutus-bg aboutus-bg-news"></div>
		<div class="clearfix"></div>
		<div class="container news" style="min-height: 600px;">
			<div class="news-row">
				<ul id="newsContain">
					<li v-for="(item,index) in newsArr.pageData">
						<router-link :to="{path:'/newsDetail',query:{id:item.ARTICLE_ID}}">
							<div class="col-md-4 col-sm-4 col-xs-12 news-list-left">
								<a href="javascript:void(0)">
									<div :style="{backgroundImage:'url(https://www.lychee-info.cn/lychee/media/cover/'+item.COVER_PATH+')'}"></div>
								</a>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-12 news-list-center text-left">
								<p class="news-title"><a href="javascript:void(0);">{{item.ARTICLE_TITLE}}</a></p>
								<p class="news-type">{{item.ARTICLE_TYPE == 1000?'【公司动态】':'【行业新闻】'}}</p>
								<p class="news-intro" data-content="......">{{item.ARTICLE_SUBTITLE}}</p>
							</div>
							<div class="col-md-2 col-sm-2 col-xs-12 news-list-right text-left">
								<div class="date"><span>04-16</span></div>
								<div class="year text-left"><span>2018</span></div>
								<div class="viewdetail"><a href="javascript:void(0);" class="btn btn-default">查看详情</a></div>
							</div>
							<div class="clearfix"></div>
						</router-link>
					</li>
					
				</ul>
			</div>
			<div class="page-div">
				<ul class="pagination" id="newsPage"></ul>
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
			newsArr:[]
		}
	},
	mounted(){
		this.getData()
	},
	methods:{
		getData () { 
			var self = this
			
			this.$http.get(this.HOST+'/portal/article.action?method=getNewsList&pageNum=1').then(function(res){
				self.newsArr=res.data
			   console.log(res.data)
			}).catch(function (error) {
				console.log(error);
			});
		} 
	}
	
}
</script>
<style lang="scss" scoped>
.container{margin-top: 80px;margin-bottom: 80px;}
.news-div{background-color: #f3f5f9;}
.aboutus-bg-news{background-image: url(./bg-news.jpg);}

.page-div{margin: 0 auto;text-align: center;}
.pagination {display: inline-block;padding-left: 0;margin: 20px 0;border-radius: 4px;}
.pagination > li {display: inline;}
.pagination > li > a, .pagination > li > span {position: relative;float: left;padding: 6px 12px;line-height: 1.42857143;color: #095db1;text-decoration: none;background-color: #fff;border: 1px solid #cccccc;margin-left: -1px;}
.pagination > li:first-child > a, .pagination > li:first-child > span {margin-left: 0;border-top-left-radius: 4px;border-bottom-left-radius: 4px;}
.pagination > li:last-child > a, .pagination > li:last-child > span {border-top-right-radius: 4px;border-bottom-right-radius: 4px;}

.pagination > li > a:hover, .pagination > li > span:hover, 
.pagination > li > a:focus, .pagination > li > span:focus {color: #23527c;background-color: #eee;border-color: #cccccc;}

.pagination > .active > a,
.pagination > .active > span,
.pagination > .active > a:hover,
.pagination > .active > span:hover,
.pagination > .active > a:focus,
.pagination > .active > span:focus {z-index: 2;color: #fff;cursor: default;background-color: #095db1;border-color: #095db1;}

.pagination > .disabled > span,
.pagination > .disabled > span:hover,
.pagination > .disabled > span:focus,
.pagination > .disabled > a,
.pagination > .disabled > a:hover,
.pagination > .disabled > a:focus {color: #777;cursor: not-allowed;background-color: #fff;border-color: #cccccc;}

.no-tip{font-size: 16px;border-bottom: none !important;color: #666;padding-top: 20px;}
.news-row>ul{margin: 0;padding: 0;}
.news-row>ul>li{
	list-style: none;
	padding-top:25px;
	padding-bottom:25px;
	padding-left:10px;
	padding-right:10px;
	background-color: #ffffff; 
	margin-bottom: 20px;
}
/* .news-list-left >a> img{width: 100%;max-height: 164px;} */
.news-list-left >a{padding-top:8px;display:block;}
.news-list-left >a>div{width:100%;height:200px;background-size: cover;background-position: center;background-repeat: no-repeat;}
.news-list-center>.news-title{font-size:20px;color:#132130;padding-top:16px;padding-bottom:14px;}
.news-list-center>.news-title>a{font-size:20px;color:#000;}
.news-list-center>.news-type{font-size:14px;color:#989898;padding-top:14px;padding-bottom:10px;}
.news-list-center>.news-intro{font-size:14px;color:#555555;padding-top:10px;height: 90px;overflow: hidden;position:relative;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 4;}
/*
.news-list-center>.news-intro:after{
	content: attr(data-content); position: absolute; bottom: 0; right: 0; padding-left: 18px;
	background: -webkit-linear-gradient(left, transparent, #fff 55%);
	background: -o-linear-gradient(right, transparent, #fff 55%);
	background: -moz-linear-gradient(right, transparent, #fff 55%);
	background: linear-gradient(to right, transparent, #fff 55%);
}
*/
.news-list-right .date{color:#989898;font-size:26px;padding-top:30px;padding-bottom:7px;}
.news-list-right .year{color:#989898;font-size:16px;padding-top:7px;padding-bottom:18px;}
.news-list-right .viewdetail .btn-default{
	color:#989898;
	font-size:14px;
	border: 1px solid #cccccc;
	border-radius: 4px;
	background-color:transparent;
	padding: 7px 25px;
}

@media(max-width:767px){
	.tab-container > .col-md-2{display:none;}
	.news-list-right .year{display:none;margin-bottom:20px;}
	.news-list-left >a{padding-top:0px;}
	.news-list-center>.news-intro{height:100%;}
	.news-list-center > .news-title{padding-top:10px;padding-bottom:10px;}
	.news-list-center > .news-type{padding-top:0px;padding-bottom:10px;}
	.news-list-center > .news-intro{padding-top:0px;  }
	.news-list-center > .news-title > a{font-size:18px;}
	.news-list-right .date{font-size:20px}
	.news-list-center>.news-intro:after{display:none;}
	.news-list-right .date{padding-top:7px;}
}	
</style>