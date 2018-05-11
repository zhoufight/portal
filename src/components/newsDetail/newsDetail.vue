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
		<div class="container" style="min-height:500px;">
			<div class="detail-container">
				<div class="news-header-div text-left">
					<h3 class="news-title" id="articleTitle">{{detail.ARTICLE_TITLE}}</h3>
					<div class="pub-time" id="pubTime">
						<span id="publish-time">{{detail.POST_TIME}}</span><span id="publisher">立趣信息科技</span>
					</div>
				</div>
				<div class="pd text-left" id="articleContent" v-html="detail.ARTICLE_CONTENT"></div>
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
		
		this.getData(this.$route.query.id)
	},
	methods:{
		getData (id) { 
			var self = this;
			let url=this.HOST+'/portal/article.action?method=getArticleDetail&articleId='+id;
			
			this.$http.get(url).then(function(res){
				if(res.data.errcode == 0){
				   self.detail=res.data.data;
			    }else{
				   alert(res.data.msg)
			    }
				
				console.log(res.data) 
			}).catch(function (error) {
				alert(error)
			});
		}  
	}
	
}
</script>
<style lang="scss" scoped>
.container{margin-top: 80px;margin-bottom: 80px;}
.aboutus-bg-news{background-image: url(./bg-news.jpg);}
.detail-container{padding-bottom:80px;}
.detail-container img{max-width: 100%;max-height: 100%;}
.news-title{padding-top: 60px;padding-bottom: 15px;color: #000;font-size: 24px;}
.pub-time{padding-top:15px;padding-bottom:15px;}
#publish-time{color: #989898;font-size: 14px;padding-right:15px;}
#publisher{color:#0059bd;font-size:14px;padding-left:15px;}
.pd{padding-left:20px;padding-right:20px;}
#articleContent{word-wrap:break-word;}
@media(max-width:767px){
	.container{padding-right: 15px;padding-left: 15px;margin-right: auto;margin-left: auto;}
}
	
</style>