<template>
	<div>
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
		<div class="aboutus-bg aboutus-bg-intro">
			<div class="bg-table">
				<div class="bg-table-cell">
					<div class="aboutus-bg-title">
						<h2>立趣简介</h2>
						<div class="bg-title-chinese"><span>国家级高新科技企业</span></div>
						<div class="bg-title-english">Achievement of everyone,Pursuing excellence</div>
					</div>
				</div>
			</div>
		</div>
		<div class="clearfix"></div>
		<div class="container aboutus text-left">
			<div class="intro-wrapper aboutus-intro">
				<div class="intro-title">广州立趣信息科技有限公司</div>
				<p>广州立趣信息科技有限公司，成立于2014年，是一家正处于高速成长中的国家级高新科技企业，其核心成员来自于前微软、HP、ORACLE等国际知名IT公司的高管和优秀员工。立趣信息科技是一家专业的大数据金融科技公司，专注于运营商供应链金融的风险识别、风险控制和风险定价，帮助传统金融机构打破行业壁垒，切入运营商供应链金融及消费金融，推动运营商行业和金融行业的深度融合发展。立趣信息科技综合运用了海量数据分析技术、数据交叉验证技术、机器学习及人工智能算法，研发了基于供应链真实交易数据的立趣信用平台，帮助供应链中的小微企业和个人将数据转化为信用，并且能够通过互联网的方式简单、快捷、高效的获取所需的金融服务。</p>
			</div>
			<div class="intro-wrapper">
				<div class="intro-title">立趣大事记</div>
				<div class="timeline-clock">
					<img src="./timeline.png">
				</div>
				<div class="timeline">
					<ul>
						<li>
							<div class="timeline-year">2017年</div>
							<div class="clearfix"></div>
						</li>
						<li>
							<div class="timeline-month">7月</div>
							<div class="timeline-circle"></div>
							<div class="timeline-body">立趣CEO李立参加伯乐大讲坛</div>
							<div class="clearfix"></div>
						</li>
						<li>
							<div class="timeline-month">6月</div>
							<div class="timeline-circle"></div>
							<div class="timeline-body">立趣信息科技出席BDU大数据风控与传统金融风控研讨会</div>
							<div class="clearfix"></div>
						</li>
						<li>
							<div class="timeline-year">2016年</div>
							<div class="clearfix"></div>
						</li>
						<li>
							<div class="timeline-month">12月</div>
							<div class="timeline-circle"></div>
							<div class="timeline-body">完成Pre-A轮融资</div>
							<div class="clearfix"></div>
						</li>
						<li>
							<div class="timeline-month">12月</div>
							<div class="timeline-circle"></div>
							<div class="timeline-body">荣获“国家高新技术企业”的认定</div>
							<div class="clearfix"></div>
						</li>
						<li>
							<div class="timeline-month">1月</div>
							<div class="timeline-circle"></div>
							<div class="timeline-body">荣获“中国好创意”大数据竞赛一等奖</div>
							<div class="clearfix"></div>
						</li>
						<li>
							<div class="timeline-year">2015年</div>
							<div class="clearfix"></div>
						</li>
						<li>
							<div class="timeline-month">12月</div>
							<div class="timeline-circle"></div>
							<div class="timeline-body">截止2015年12月，自大数据接口平台开放以来，api调用次数突破一亿次</div>
							<div class="clearfix"></div>
						</li>
						<li>
							<div class="timeline-month">11月</div>
							<div class="timeline-circle"></div>
							<div class="timeline-body">与北京航聚签战略合作协议</div>
							<div class="clearfix"></div>
						</li>
						<li>
							<div class="timeline-month">10月</div>
							<div class="timeline-circle"></div>
							<div class="timeline-body">与宜信签测试协议</div>
							<div class="clearfix"></div>
						</li>
						<li>
							<div class="timeline-month">7月</div>
							<div class="timeline-circle"></div>
							<div class="timeline-body">与中国电信云计算公司签约</div>
							<div class="clearfix"></div>
						</li>
						<li>
							<div class="timeline-year">2014年</div>
							<div class="clearfix"></div>
						</li>
						<li>
							<div class="timeline-month">8月</div>
							<div class="timeline-circle"></div>
							<div class="timeline-body">广州立趣信息科技有限公司成立</div>
							<div class="clearfix"></div>
						</li>
					</ul>
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
		}
	}
}
</script>
<style lang="scss" scoped>
.timeline{position: relative;}
.timeline-clock{margin-left:15%;margin-top:28px;}
.timeline-clock>img{width:70px;margin-left:-35px;}
.timeline ul:before{content: " ";position: absolute;width: 1px;top: 0;bottom: 0px;left: 15%;background: #095db1;}
.timeline-year{float:left;width:100%;padding:42px 24px;color:#096db1;font-size:18px;}
.timeline-month{float:left;width:15%;padding:12px 40px;color:#555555;font-size:14px;text-align: right;}
.timeline-body{float:left;width:85%;padding:12px 40px;color:#000000;font-size:16px;}
.timeline-circle{
	position: absolute;
	left: 15%;
	background: #fff;
	border: 2px solid #095db1;
	width: 14px;
	height: 14px;
	border-radius: 50%;
	margin-left: -7px;
	margin-top:16px;
}

@media(max-width:767px){
	.timeline-clock{margin-left:10%;}
	.timeline-clock>img{width:50px;margin-left:-25px;}
	.timeline ul:before{left:10%;}
	.timeline-year{padding:42px 40px;font-size:16px;}
	.timeline-month{width:100%;text-align:left;font-size:12px;}
	.timeline-body{width:100%;font-size:14px;}
	.timeline-circle{left:10%;}
}	
	
.container{margin-top:80px;margin-bottom:80px;}
.aboutus-bg-intro{background-image: url(./bg-intro.jpg);}
.aboutus-bg-contactus{background-image: url(./bg-contactus.jpg);}
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