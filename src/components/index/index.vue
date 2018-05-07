<template>
	<div class="hello">
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
                    <a href="index.html" class="navbar-brand"><img alt="logo" src="./logo_ly.png"></a>
                </div>
                <div id="bs-example-navbar-collapse-1" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-right" >
                        <li class="active">
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
                        <li class="dropdown">
                            <a href="aboutus.html#tab1" data-toggle="dropdown" class="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-question-circle-o fa-hide">&nbsp;</i>&nbsp;关于我们<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="aboutUs.html">立趣简介</a></li>
                                <li><a href="news.html">新闻中心</a></li>
                                <li><a href="contactUs.html">联系我们</a></li>
                                <li><a href="joinUs.html">加入我们</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="navbar-bg-opacity"></div>
        </nav>
		
		<!-- 全屏滚动 -->
		<swiper :options="swiperOption" ref="mySwiper" class="swiper-con" @slideChangeTransitionEnd="isGoTop">
			<swiper-slide>
				<!-- banner轮播 -->
				 <swiper :options="bannerOption" id="carousel" class="swiper-container2">
					<swiper-slide class="slide1">
						<div class="slider-container text-center">
							<div class="title">
								<div class="word-icon word1 fttb50"></div>
							</div>
							<div class="subtitle">
								<div class="word-icon word2 fbtt50"></div>
							</div>
						</div>
						<div class="index-slide-bg srowb"></div>

					</swiper-slide>
					<swiper-slide class="slide2">
						<div class="slider-container">
							<div class="col-md-6 col-sm-6 col-xs-12 text-center">
								<div class="title fltr50">
									<div class="word-icon word3"></div>
								</div>
								<div class="subtitle fltr100">
									<div class="word-icon word4"></div>
								</div>
								<div class="fltr150">
									<a class="btn-view" href="http://sfs.lychee-info.cn" target="_blank" >查看详情</a>
								</div>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-12 intro-img frtl50 maxImg">
								<img src="./bnner-intro-img2.png"> 
							</div>
							<div class="clearfix"></div>
						</div>
						<div class="index-slide-bg"></div>
					</swiper-slide>
					<swiper-slide class="slide3">
						<div class="slider-container">
							<div class="col-md-12 col-sm-12 col-xs-12 slide3-header fttb50">
								<div class="word-icon word5"></div>
							</div>
							<div class="col-md-12 col-sm-12 col-xs-12 slide3-body fbtt50">
								<swiper id="job-swiper" :options="jobOption" class="swiper-container2 job-swiper">
									<swiper-slide class="job-slide1">
										<a href="jobs.html?type=java" target="_blank">
											<div class="index-job-icon icon1"></div>
											<p>SOFTWARE ENGINEER</p>
											<p>JAVA软件工程师</p>
										</a>
									</swiper-slide>
									<swiper-slide class="job-slide2">
										<a href="jobs.html?type=bigdata" target="_blank">
											<div class="index-job-icon icon2"></div>
											<p>DATA ENGINEER</p>
											<p>大数据平台研发工程师</p>
										</a>
									</swiper-slide>
									<swiper-slide class="job-slide3">
										<a href="jobs.html?type=frontend" target="_blank">
											<div class="index-job-icon icon3"></div>
											<p>FONT-END ENGINEER</p>
											<p>高级前端工程师</p>
										</a>
									</swiper-slide>
									<swiper-slide class="job-slide4">
										<a href="jobs.html?type=designer" target="_blank">
											<div class="index-job-icon icon4"></div>
											<p>ART DESIGNER</p>
											<p>网页美工设计</p>
										</a>
									</swiper-slide>
									<swiper-slide class="job-slide5">
										<a href="jobs.html?type=testEngineer" target="_blank">
												<div class="index-job-icon icon5"></div>
												<p>TEST ENGINEER</p>
												<p>软件测试工程师</p>
											</a>
									</swiper-slide>
									<swiper-slide class="job-slide6">
										<a href="jobs.html?type=pr" target="_blank">
											<div class="index-job-icon icon6"></div>
											<p>PR MANAGER</p>
											<p>高级线上销售、PR经理</p>
										</a>
									</swiper-slide>
								</swiper>
								<div class="swiper-button-prev" slot="button-prev"></div>
       							<div class="swiper-button-next" slot="button-next"></div>
								
							</div>
						</div>
						<div class="index-slide-bg"></div>
					</swiper-slide>
					<div class="swiper-pagination swiper-pagination2" slot="pagination"></div>
				 </swiper>
				 <!--banner end  -->
			</swiper-slide>
			<swiper-slide>
				<div class="section-wrap section2 section-bg h100">
					<div class="section-div">
						<div class="index-section-wrapper">
							<div class="col-md-6 col-sm-6 col-xs-12 col-md-6 col-sm-6 col-xs-12 text-left">
								<div class="section-title fltr50">企业信用</div>
								<div class="section-description fltr100">企业信用分是基于代理商与中国电信之间海量的供应链真实交易数据，依托在大数据、云计算、数据挖掘、机器学习方面的前沿技术，进行信用数据智能分析、信用价值挖掘、信用风险模型构建，客观地呈现代理商的信用状况、真实经营状况、真实业务发展状况。</div>
								<div class="fltr150"><a class="section-btn" href="enterpriseCredit.html" target="_blank">了解更多</a></div>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-12 frtl100 maxImg">
								<img src="./section2-content.png">
							</div>
							<div class="clearfix"></div>
						</div>
					</div>		
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="section-wrap section3 section-bg h100">
					<div class="section-div">
						<div class="index-section-wrapper">
							<div class="col-md-6 col-sm-6 col-xs-12 text-left">
								<div class="section-title fltr50">个人信用</div>
								<div class="section-description fltr100">立趣个人信用分的分值范围为300至1000，分值越高代表信用越好，相应违约率相对较低，较高的个人信用分可以帮助用户获得更高效、更优质的服务。</div>
								<div class="fltr150"><a class="section-btn" href="personalCredit.html" target="_blank">了解更多</a></div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="section-wrap section4 section-bg h100">
					<div class="section-div">
						<div class="index-section-wrapper">
							<div class="col-md-12 col-sm-12 col-xs-12 text-center">
								<div class="section-title fttb100">供应链业务支撑平台</div>
								<div class="section-description fttb101"><div>也叫“全渠道服务平台”，支撑渠道代理商进行电信业务销售，通过该供应链业务支撑平台，连接渠道代理商和C端消费者，一方面，对供应链的交易数据进行积累沉淀，另一方面，承载企业信用分业务场景和个人信用分业务场景的落地。</div></div>
								<div class="fttb102"><a class="section-btn" href="http://sfs.lychee-info.cn" target="_blank">了解详情</a></div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="section-wrap section5  h100">
					<div class="section-div">
						<div class="index-section-wrapper">
							<div class="col-md-12 col-sm-12 col-xs-12 text-center fttb100">
								<div class="coop-title">客户&伙伴</div>
								<div class="coop-subtitle">他们都选择了立趣</div>
							</div>
							<div class="clearfix"></div>
							<div class="index-coop-content fttb101">
								<div v-for="(item,index) in imgArrUrls.section5" :key="index" class="col-md-3 col-sm-3 col-xs-6">
									<div class="coop-partner">
										<img :src="item">
									</div>
								</div>
								
								<div class="clearfix"></div>
							</div>
						</div>
					</div>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="section-wrap section6  h100">
					<div class="section-div">
						<div class="index-section-wrapper text-center" style="max-width:1100px;">
							<h2 class="fttb100">关于我们</h2>
							<div class="footer-menu col-md-12 col-sm-12 col-xs-12 fttb101">
								<div class="col-md-five col-sm-4 col-xs-4">
									<a href="aboutUs.html">
										<img src="./intro.png">
										<h4>立趣简介</h4>
									</a>
								</div>
								<div class="col-md-five col-sm-4 col-xs-4">
									<a href="terms.html">
										<img src="./terms.png">
										<h4>服务条款</h4>
									</a>
								</div>
								<div class="col-md-five col-sm-4 col-xs-4">
									<a href="privacy.html">
										<img src="./privacy.png">
										<h4>隐私条约</h4>
									</a>
								</div>
								<div class="col-md-five col-sm-4 col-xs-4">
									<a href="joinUs.html">
										<img src="./joinus.png">
										<h4>加入我们</h4>
									</a>
								</div>
								<div class="col-md-five col-sm-4 col-xs-4">
									<a href="contactUs.html">
										<img src="./contactus.png">
										<h4>联系我们</h4>
									</a>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="description col-md-12 col-sm-12 col-xs-12 fttb102">
								<div class="border"></div>
								<div class="col-md-3 col-sm-4 col-xs-12">
									<p>
										<a href="javascript:void(0)"><i class="fa fa-phone"></i>&nbsp;&nbsp;020-85162521</a>
									</p>
								</div>
								<div class="col-md-3 col-sm-4 col-xs-12">
									<p>
										<a href="mailto:contact@lychee-info.cn"><i class="fa fa-envelope"></i>&nbsp;&nbsp;contact@lychee-info.cn</a>
									</p>
								</div>
								<div class="col-md-6 col-sm-4 col-xs-12">
									<p>
										<a href="javascript:void(0)"><i class="fa fa-map-marker"></i>&nbsp;&nbsp;广州市天河区思成路19号宏太智慧谷7栋301房</a>
									</p>
								</div>
								<div class="col-md-12 col-sm-12 col-xs-12 copyright" style="border-top: 1px solid #ffffff;">
									<p>版权所有©2015-2017 广州立趣信息科技有限公司 <a href="http://www.miitbeian.gov.cn" target="_blank">粤ICP备15068962号</a></p>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
				</div>
			</swiper-slide>
			
			<div class="swiper-pagination swiper-pagination1" slot="pagination"></div>
		</swiper>
		<!-- 返回顶部 -->
		<div id="nav-scroll">
			<a id="goTop" class="item" @click="goTop" style="display:none;">
				<img src="./gotop.png">
			</a>
		</div>
	</div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
  
export default {
	name: 'index',
	data () {
		return {
			swiperOption: {
				direction: 'vertical',
				slidesPerView: 1,
				mousewheel: true,
				autoHeight:true,
				pagination: {
					el: '.swiper-pagination1',
					clickable: true,
					dynamicBullets: true
				},
				
				height: window.innerHeight  // 高度占满整个设备高度
			},
			bannerOption:{
				pagination: {
					el: '.swiper-pagination2',
					clickable: true
				},
				slideActiveClass : 'swiper-slide-banner-active',
				paginationType : 'bullets',
				paginationClickable :true,
				autoplay : { delay: 5000,},
				speed:100,
				preloadImages:false,
				lazyLoading : true,
				lazyLoadingInPrevNext : true,
			},
			jobOption:{
				slidesPerView: 5,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				loop : false,
				autoplay:0,
				breakpoints: {
					1024: {
						slidesPerView: 5,
						spaceBetween: 10
					},
					768: {
						slidesPerView: 5,
						spaceBetween: 10
					},
					640: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					320: {
						slidesPerView: 1,
						spaceBetween: 10,
					}
				}
			},
			imgArrUrls:{
				"section5":[require('./coop-telecom.png'),require('./coop-bok.png'),require('./coop-jingdong.png'),require('./coop-haier.png'),require('./coop-wuxi.png'),require('./coop-xiaonuo.png'),require('./coop-ecloud.png'),require('./coop-mingcheng.png')],
				"gotTop":require('./gotop.png')
			},
		}
	},
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
	components: {
		swiper,
		swiperSlide
	},
	mounted(){
		
	},
	methods:{
		isGoTop(){
			if(this.swiper.realIndex > 0){
				$("#goTop").show();
			}else{
				$("#goTop").hide();
			}
		},
		goTop(){
			  this.swiper.slideTo(0, 1000, false)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.navbar-bg-opacity{width:100%;background-color: #000000;opacity: 0.4;height: 100%;position: absolute;top:0;z-index: -9999;}
.nav>li{text-align: left;}
/*自定义swiper分页器按钮样式*/
.swiper-container2{width:100%;height:100%;}
.swiper-container2 .swiper-pagination2{bottom:80px;}
.swiper-pagination2 .swiper-pagination-bullet{
	width:50px;
    height:5px;
	display: inline-block;
	border-radius: 0;
	background: #fff;
	-webkit-transition:all 0.5s ease-in-out;
	-moz-transition:all 0.5s ease-in-out;
	-o-transition:all 0.5s ease-in-out;
	-ms-transition:all 0.5s ease-in-out;
	transition:all 0.5s ease-in-out;
}

#carousel>.swiper-wrapper>.swiper-slide{background-position: center;background-size: cover;display: table;table-layout: fixed;overflow: hidden;}
.slider-container{display: table-cell;vertical-align: middle;width: 100%;z-index: 100;position: relative;height: auto;}
.swiper-button-prev{background-image: url(./arrow_left.png);left: 0px;}
.swiper-button-next{background-image: url(./arrow_right.png);right: 0px;}
.swiper-pagination1 .swiper-pagination-bullet-active{background:rgba(0,0,0 ,0.2)}

/*banner图样式*/
.slide1,.slide2,.slide3{height:100%!important;}
.index-slide-bg{width:100%;height:100%;background-position:center;background-size:cover;position:absolute;top:0;left:0;z-index:-99;background-repeat: no-repeat;}
.slide1 .index-slide-bg{background-image: url(./banner-bg-1.jpg);}
.slide1 .title{padding:20px;}
.slide1 .subtitle{padding-top:15px;padding-bottom:15px;}
.slide2 .title{padding-top:40px;padding-bottom:10px;}
.slide2 .subtitle{padding:10px;margin-bottom:30px;}
.slide2 .index-slide-bg{background-image: url(./banner-bg-2.jpg);}
.slide2 a{margin-left:-326px;}
.slide2 .btn-view{padding:12px 37px;border:1px solid #f2f2f2;color:#f2f2f2;font-size:16px;font-weight: lighter;}
.slide3 .index-slide-bg{background-image: url(./banner-bg-3.jpg);}

.job-swiper .swiper-button-next, .job-swiper .swiper-button-prev{top:55%;}
.job-swiper .swiper-slide{padding:30px;}
.slide3-header{padding-bottom:30px;padding-left:120px;}
.slide3-body{padding-top:30px;padding-left:120px;padding-right:120px;text-align:center;color:#fff;font-size:14px;}
.slide3-body a{text-decoration: none;font-size: 14px;color:#fff;padding-left:15px;padding-right:15px;}


@media (max-width: 767px){ 	
	.navbar-bg-opacity{display:none;}
	.slide2 img{max-width:100%;}
	.slide2 .subtitle{margin-bottom:0px;}
	.slide2 a{margin-left:0px;}
	.slide2 .btn-view{padding:6px 16px;font-size:10px;}
	.slide2 .col-xs-12{padding-bottom:30px;}
	.slide3-header{padding-bottom:10px;padding-left:30px;}
	.slide3-header > img{width:200px;}
	.slide3-body{padding-top:10px;padding-left:4px;padding-right:4px;}
	.slide3-body p{font-size:12px;}
	.job-swiper .swiper-button-next, .job-swiper .swiper-button-prev{top:55%;}
	.swiper-button-prev{left:30px}
	.swiper-button-next{right:30px;}
}

/*section的样式*/
.index-section-wrapper{max-width:1400px;margin:0 auto;padding:0 40px;}
.section-wrap{display: table;width:100%;}
.section-div{display: table-cell;vertical-align: middle;height:100%;}
.section-bg{background-position: center;background-repeat: no-repeat;background-size: cover;}
	
.section-title{color:#ffffff;font-size:32px;letter-spacing: 20px;margin-right:-20px;}
.section-description{color:#fff;font-size:14px;max-width:500px;padding-top:34px;padding-bottom:34px;line-height: 26px;margin-bottom:16px;}
.section-btn{padding:9px 35px;border:1px solid rgba(255,255,255,1);color:rgba(255,255,255,1);font-size:14px;}
.section-btn:hover,.section-btn:focus{text-decoration: none;color:#ffffff;}
.section2{background-image: url(./section-bg-2.jpg)}
.section3{background-image:url(./section-bg-3.jpg)}
.section3 .section-description{max-width:402px;}
.section4{background-image: url(./section-bg-4.jpg)}
.section4 .col-md-12,.section4 .col-sm-12,.section4 .col-xs-12{padding-bottom:120px;}
.section4 .section-description{max-width:100%;}
.section4 .section-description >div{width:400px;margin:0px auto;}
.section4 .section-btn{color:#ffffff;border-color: #ffffff;}
.section5 .coop-title{color:#000;font-size:32px;}
.section5 .coop-subtitle{color:#555555;font-size:14px;letter-spacing: 8px;margin-right:-8px;}
.index-coop-content{text-align:center;padding-left:10%;padding-right:10%;margin-top:60px;}
.index-coop-content .col-md-3,.index-coop-content .col-sm-3{padding:10px;}
.coop-row{padding: 10px 0;}
.coop-item{float: left;width: 25%;padding: 0 10px;text-align:center;}
.coop-partner{width: 100%;text-align:center;border: 1px solid #bed1f9;background: #FFFFFF;}
.coop-partner img{max-width: 100%;}
.section6{color:#ffffff;text-align: center;background-color: rgb(3, 109, 183);}
.section6 a{color:#ffffff;}
.section6 a:focus,.section a:hover{text-decoration: none;}
.section6 h2{padding-top:30px;padding-bottom:35px;color:#ffffff;font-size:28px;}
.section6 .footer-menu{padding-top:20px;padding-bottom:65px;text-align:center;}
.section6 .footer-menu a{display:block;font-size:20px;color:#ffffff;text-decoration: none;text-align:center;padding:20px;}
.footer-menu img{max-width:100%;}
.section6 a h4{padding-top:30px;font-size:20px;}
.section6 .description{padding: 0}
.section6 .description .border{border-top: 1px solid #ffffff;}
.section6 .description p{font-size: 14px;max-width: 1040px;padding-top: 30px;padding-bottom: 30px;}
.copyright{font-size: 14px;color: #ffffff;}
.copyright a{font-size: 14px;color: #ffffff;}
.copyright a:hover{color: #eeeeee;text-decoration: none;} 

@media(max-width:768px){
	.navbar-default{background-color: #ffffff;opacity: 1;}
	.index-section-wrapper{padding: 0 10px;padding-top:50px;}
	.index-section-title{padding-left:10px;padding-right:10px;padding-bottom:10px;}
	.section .index-section-content .col-xs-12{margin-bottom:10px;}
	.coop-partner > img{max-width: 100%;max-height: 100%;}
	.section-btn{padding:6px 20px;font-size:12px;}
	.section-title{font-size:20px;letter-spacing: 16px;margin-right:-16px;}
	.section-description{font-size:12px;max-width:100%;padding-top:20px;padding-bottom:20px;line-height: 20px;margin-bottom:12px;}
	.section2 .index-section-wrapper img{max-width:100%;}
	.section2 .col-xs-12{margin:20px 0px;}
	.section3 .section-description{max-width:180px;}
	.section4 .section-description >div{width:100%;margin:0px auto;}
	.index-coop-content{margin-top:30px;padding-left:10px;padding-right:10px;}
	.index-coop-content .col-xs-6{padding:5px;}
	.section5 .coop-title{font-size: 24px;}
	.section5 .coop-subtitle{font-size:10px;letter-spacing: 6px;margin-right:-6px;}
	.section6 h2{padding-top:40px;padding-bottom:10px;color:#ffffff;font-size:20px;}
	.section6 .footer-menu{padding-top:20px;padding-bottom:10px;text-align:center;}
	.section6 .footer-menu a{padding-left:2px;padding-right:2px;padding-top:6px;padding-bottom:6px;}
	.footer-menu img{max-width:60%;}
	.footer-menu .col-xs-4{padding-left:2px;padding-right:2px;}
	.section6 a h4{padding-top:13px;padding-bottom:13px;font-size:12px;}
	.section6 .description p{max-width: 1040px;padding-top: 8px;padding-bottom: 8px;font-size:12px;}
	.copyright{font-size: 12px;}
	.copyright a{font-size: 12px;}
}

.index-job-icon{width:133px;height:132px;background-image: url(./joinus-icon.png);background-repeat: no-repeat;margin:10px auto;}
.icon1{background-position: 0px 0px;}
.icon2{background-position: -133px 0px;}
.icon3{background-position: -266px 0px;}
.icon4{background-position: -399px 0px;}
.icon5{background-position: -532px 0px;}
.icon6{background-position: -665px 0px;}

.swiper-slide .srowb {
    -moz-transform: scale(1);
    -webkit-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
    transition: all 20s;
}
.swiper-slide-banner-active .srowb {
    -moz-transform: scale(1.5);
    -webkit-transform: scale(1.5);
    -o-transform: scale(1.5);
    transform: scale(1.5);
}

@-webkit-keyframes fltr50{
	0% {
		-webkit-transform:translate(-50px,0);
		opacity:0
	}
	100% {
		-webkit-transform:translate(0,0);
		opacity:1
	}
}
@-moz-keyframes fltr50{
	0% {
		-moz-transform:translate(-50px,0);
		opacity:0
	}
	100% {
		-moz-transform:translate(0,0);
		opacity:1
	}
}
@keyframes fltr50{
	0% {
		transform:translate(-50px,0);
		opacity:0
	}
	100% {
		transform:translate(0,0);
		opacity:1
	}
}


@-webkit-keyframes fltr100{
	0% {
		-webkit-transform:translate(-100px,0);
		opacity:0
	}
	100% {
		-webkit-transform:translate(0,0px);
		opacity:1
	}
}
@-moz-keyframes fltr100{
	0% {
		-moz-transform:translate(-100px,0);
		opacity:0
	}
	100% {
		-moz-transform:translate(0,0px);
		opacity:1
	}
}
@keyframes fltr100{
	0% {
		transform:translate(-100px,0);
		opacity:0
	}
	100% {
		transform:translate(0,0px);
		opacity:1
	}
}


@-webkit-keyframes fltr150{
	0% {
		-webkit-transform:translate(-150px,0);
		opacity:0
	}
	100% {
		-webkit-transform:translate(0,0px);
		opacity:1
	}
}
@-moz-keyframes fltr150{
	0% {
		-moz-transform:translate(-150px,0);
		opacity:0
	}
	100% {
		-moz-transform:translate(0,0px);
		opacity:1
	}
}

@keyframes fltr150{
	0%{
		transform:translate(-150px,0);
		opacity: 0
	}
	100%{
		transform:translate(0,0);
		opacity:1
	}
}


@-webkit-keyframes fltr200{
	0% {
		-webkit-transform:translate(-200px,0);
		opacity:0
	}
	100% {
		-webkit-transform:translate(0,0px);
		opacity:1
	}
}
@-moz-keyframes fltr200{
	0% {
		-moz-transform:translate(-200px,0);
		opacity:0
	}
	100% {
		-moz-transform:translate(0,0);
		opacity:1
	}
}
@keyframes fltr200{
	0% {
		transform:translate(-200px,0);
		opacity:0
	}
	100% {
		transform:translate(0,0);
		opacity:1
	}
}

@-webkit-keyframes frtl50{
	0% {
		-webkit-transform:translate(50px,0);
		opacity: 0;
	}
	100% {
		-webkit-transform:translate(0,0);
		opacity:1
	}
}
@-moz-keyframes frtl50{
	0% {
		-moz-transform:translate(50px,0);
		opacity:0
	}
	100% {
		-moz-transform:translate(0,0);
		opacity:1
	}
}
@keyframes frtl50{
	0% {
		transform:translate(50px,0);
		opacity:0
	}
	100% {
		transform:translate(0,0);
		opacity:1
	}
}

@-webkit-keyframes frtl100{
	0% {
		-webkit-transform:translate(100px,0);
		opacity: 0;
	}
	100% {
		-webkit-transform:translate(0,0);
		opacity:1
	}
}
@-moz-keyframes frtl100{
	0% {
		-moz-transform:translate(100px,0);
		opacity:0
	}
	100% {
		-moz-transform:translate(0,0);
		opacity:1
	}
}
@keyframes frtl100{
	0% {
		transform:translate(100px,0);
		opacity:0
	}
	100% {
		transform:translate(0,0);
		opacity:1
	}
}
@-webkit-keyframes frtl150{
	0% {
		-webkit-transform:translate(150px,0);
		opacity: 0;
	}
	100% {
		-webkit-transform:translate(0,0);
		opacity:1
	}
}
@-moz-keyframes frtl150{
	0% {
		-moz-transform:translate(150px,0);
		opacity:0
	}
	100% {
		-moz-transform:translate(0,0);
		opacity:1
	}
}
@keyframes frtl150{
	0% {
		transform:translate(150px,0);
		opacity:0
	}
	100% {
		transform:translate(0,0);
		opacity:1
	}
}


@-webkit-keyframes fttb50{
	0% {
		-webkit-transform:translate(0,-50px);
		opacity: 0;
	}
	100% {
		-webkit-transform:translate(0,0);
		opacity:1
	}
}
@-moz-keyframes fttb50{
	0% {
		-moz-transform:translate(0,-50px);
		opacity:0
	}
	100% {
		-moz-transform:translate(0,0);
		opacity:1
	}
}
@keyframes fttb50{
	0% {
		transform:translate(0,-50px);
		opacity:0
	}
	100% {
		transform:translate(0,0);
		opacity:1
	}
}

@-webkit-keyframes fttb101{
	0%{
		opacity:0;
	}
	25% {
		-webkit-transform:translate(0,-100px);
		opacity: 0;
	}
	100% {
		-webkit-transform:translate(0,0);
		opacity:1
	}
}
@-moz-keyframes fttb101{
	0%{
		opacity:0;
	}
	25% {
		-moz-transform:translate(0,-100px);
		opacity:0
	}
	100% {
		-moz-transform:translate(0,0);
		opacity:1
	}
}
@keyframes fttb101{
	0%{
		opacity:0;
	}
	25% {
		transform:translate(0,-100px);
		opacity:0
	}
	100% {
		transform:translate(0,0);
		opacity:1
	}
}

@-webkit-keyframes fttb102{
	0%{
		opacity:0;
	}
	25% {
		opacity: 0;
	}
	50% {
		-webkit-transform:translate(0,-100px);
		opacity: 0;
	}
	100% {
		-webkit-transform:translate(0,0);
		opacity:1
	}
}
@-moz-keyframes fttb102{
	0%{
		opacity:0;
	}
	25% {
		opacity:0;
	}
	50% {
		-moz-transform:translate(0,-100px);
		opacity:0;
	}
	100% {
		-moz-transform:translate(0,0);
		opacity:1
	}
}
@keyframes fttb102{
	0%{
		opacity:0;
	}
	25% {
		opacity:0;
	}
	50% {
		transform:translate(0,-100px);
		opacity:0
	}
	100% {
		transform:translate(0,0);
		opacity:1
	}
}

@-webkit-keyframes fttb103{
	0%{
		opacity:0;
	}
	25% {
		opacity: 0;
	}
	50% {
		opacity: 0;
	}
	75%{
		-webkit-transform:translate(0,-100px);
		opacity: 0;
	}
	100% {
		-webkit-transform:translate(0,0);
		opacity:1
	}
}
@-moz-keyframes fttb103{
	0%{
		opacity:0;
	}
	25% {
		opacity:0;
	}
	50% {
		opacity:0;
	}
	75% {
		-moz-transform:translate(0,-100px);
		opacity:0;
	}
	100% {
		-moz-transform:translate(0,0);
		opacity:1
	}
}
@keyframes fttb103{
	0%{
		opacity:0;
	}
	25% {
		opacity:0;
	}
	50% {
		opacity:0
	}
	50% {
		transform:translate(0,-100px);
		opacity:0
	}
	100% {
		transform:translate(0,0);
		opacity:1
	}
}

@-webkit-keyframes fttb100{
	0% {
		-webkit-transform:translate(0,-100px);
		opacity: 0;
	}
	100% {
		-webkit-transform:translate(0,0);
		opacity:1
	}
}
@-moz-keyframes fttb100{
	0% {
		-moz-transform:translate(0,-100px);
		opacity:0
	}
	100% {
		-moz-transform:translate(0,0);
		opacity:1
	}
}
@keyframes fttb100{
	0% {
		transform:translate(0,-100px);
		opacity:0
	}
	100% {
		transform:translate(0,0);
		opacity:1
	}
}
@-webkit-keyframes fttb150{
	0% {
		-webkit-transform:translate(0,-150px);
		opacity: 0;
	}
	100% {
		-webkit-transform:translate(0,0);
		opacity:1
	}
}
@-moz-keyframes fttb150{
	0% {
		-moz-transform:translate(0,-150px);
		opacity:0
	}
	100% {
		-moz-transform:translate(0,0);
		opacity:1
	}
}
@keyframes fttb150{
	0% {
		transform:translate(0,-150px);
		opacity:0
	}
	100% {
		transform:translate(0,0);
		opacity:1
	}
}
@-webkit-keyframes fbtt50{
	0% {
		-webkit-transform:translate(0,50px);
		opacity: 0;
	}
	100% {
		-webkit-transform:translate(0,0);
		opacity:1
	}
}
@-moz-keyframes fbtt50{
	0% {
		-moz-transform:translate(0,50px);
		opacity:0
	}
	100% {
		-moz-transform:translate(0,0);
		opacity:1
	}
}
@keyframes fbtt50{
	0% {
		transform:translate(0,50px);
		opacity:0
	}
	100% {
		transform:translate(0,0);
		opacity:1
	}
}


.swiper-slide-active .fltr50{
    -webkit-animation: fltr50 1s ease;
    -moz-animation: fltr50 1s ease;
    animation: fltr50 1s ease;
}
.swiper-slide-active .fltr100{
    -webkit-animation: fltr100 1s ease;
    -moz-animation: fltr100 1s ease;
    animation: fltr100 1s ease;
}
.swiper-slide-active .fltr150{
	-webkit-animation: fltr150 1s ease;
	-moz-animation: fltr150 1s ease;
	animation:fltr150 1s ease;
}
.swiper-slide-active .fltr200{
    -webkit-animation: fltr200 1s ease;
    -moz-animation: fltr200 1s ease;
    animation: fltr200 1s ease;	
}
.swiper-slide-active .frtl50{
	-webkit-animation: frtl50 1s ease;
    -moz-animation: frtl50 1s ease;
    animation: frtl50 1s ease;
}
.swiper-slide-active .frtl100{
	-webkit-animation: frtl100 1s ease;
    -moz-animation: frtl100 1s ease;
    animation: frtl100 1s ease;
}
.swiper-slide-active .fttb50{
	-webkit-animation: fttb50 1s ease;
    -moz-animation: fttb50 1s ease;
    animation: fttb50 1s ease;
}
.swiper-slide-active .fttb101{
	-webkit-animation: fttb101 1s ease;
    -moz-animation: fttb101 1s ease;
    animation: fttb101 1s ease;
}
.swiper-slide-active .fttb102{
	-webkit-animation: fttb102 1s ease;
    -moz-animation: fttb102 1s ease;
    animation: fttb102 1s ease;
}
.swiper-slide-active .fttb100{
	-webkit-animation: fttb100 1s ease;
    -moz-animation: fttb100 1s ease;
    animation: fttb100 1s ease;	
}
.swiper-slide-active .fttb150{
	-webkit-animation: fttb150 1s ease;
    -moz-animation: fttb150 1s ease;
    animation: fttb150 1s ease;
}
.swiper-slide-active .fbtt50{
	-webkit-animation: fbtt50 1s ease;
    -moz-animation: fbtt50 1s ease;
    animation: fbtt50 1s ease;
}
.swiper-slide-active .swiper-wrapper .fltr50,
.swiper-slide-active .swiper-wrapper .fltr100,
.swiper-slide-active .swiper-wrapper .fltr150,
.swiper-slide-active .swiper-wrapper .fltr50,
.swiper-slide-active .swiper-wrapper .frtl50,
.swiper-slide-active .swiper-wrapper .fttb50,
.swiper-slide-active .swiper-wrapper .fbtt50{
	-webkit-animation: none;
    -moz-animation: none;
    animation: none;
}
.swiper-slide-active .swiper-slide-banner-active .fltr50{
    -webkit-animation: fltr50 1s ease;
    -moz-animation: fltr50 1s ease;
    animation: fltr50 1s ease;
}
.swiper-slide-active .swiper-slide-banner-active .fltr100{
    -webkit-animation: fltr100 1s ease;
    -moz-animation: fltr100 1s ease;
    animation: fltr100 1s ease;
}
.swiper-slide-active .swiper-slide-banner-active .fltr150{
	-webkit-animation: fltr150 1s ease;
	-moz-animation: fltr150 1s ease;
	animation:fltr150 1s ease;
}
.swiper-slide-active .swiper-slide-banner-active .frtl50{
	-webkit-animation: frtl50 1s ease;
	-moz-animation: frtl50 1s ease;
	animation:frtl50 1s ease;
}
.swiper-slide-active .swiper-slide-banner-active .fttb50{
	-webkit-animation: fttb50 1s ease;
    -moz-animation: fttb50 1s ease;
    animation: fttb50 1s ease;	
}
.swiper-slide-active .swiper-slide-banner-active .fbtt50{
	-webkit-animation: fbtt50 1s ease;
    -moz-animation: fbtt50 1s ease;
    animation: fbtt50 1s ease;
}

/*common*/
.h100{height: 100%;}
.maxImg img{max-width: 100%;}
	
</style>
