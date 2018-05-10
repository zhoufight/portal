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
                        <li class="active">
							<router-link to="/personalCredit"><i class="fa fa-user-o fa-hide"></i>&nbsp;个人信用</router-link>
                        </li>
                        <li>
							<router-link to="/solution"><i class="fa fa-newspaper-o fa-hide"></i>&nbsp;解决方案</router-link>
                        </li>
                        <li class="dropdown">
                            <a href="javascript:;" data-toggle="dropdown" class="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-question-circle-o fa-hide">&nbsp;</i>&nbsp;关于我们<span class="caret"></span></a>
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
		
		<!-- 全屏滚动 -->
		<swiper :options="swiperOption" ref="mySwiper" class="swiper-con enterprise" @slideChangeTransitionEnd="isGoTop">
			<swiper-slide>
				<div class="section-wrap section section1 credit-section-bg h100">
					<div class="section-div">
						<div class="credit-section-wrapper text-center">
							<!-- <div class="title-box">
								<div class="word-icon word8"></div>
								<div class="word-icon word9"></div>
							</div> -->
							<div class="section1-title">个人信用</div>
							<div class="section1-content">
								<p>立趣个人信用分是在用户授权的情况下，依据用户留存在运营商的各类消费及行为</p>
								<p>数据，结合传统金融收支数据、借贷数据、信用数据，运用大数据及机器学习等技术，</p>
								<p>通过逻辑回归、决策树、随机森林等模型算法，对各维度数据进行综合处理和评估。</p>
							</div>
						</div>
					</div>		
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="section-wrap section2 section-bg h100">
					<div class="section-div">
						<div class="credit-section-wrapper">
							<div class="col-md-6 col-sm-6 col-xs-12 text-left">
								<div class="section-title">贷前信用评分</div>
								<div class="section-subtitle">
									<p>立趣个人信用分是在用户授权的情况下，依据用户在运营商上的各类消费及行为数据，结合其他行业多样化的数据源，运用云计算及机器学习等技术，通过逻辑回归、决策树、随机森林等模型算法，对各维度数据进行综合处理和评估，在客户身份属性、消费行为、稳定性、终端、朋友圈、号码自然属性这六个维度客观呈现个人信用状况的综合分值。<p>
									<p>立趣个人信用分的分值范围为300至1000，分值越高代表信用越好，相应违约率相对较低，较高的立趣个人信用分可以帮助用户获得更高效、更优质的服务。</p>
								</div>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-12">
								<div class="credit-section-enterprise text-center">
									<img src="./credit-nature.png">
								</div>
								<div>
									<img src="./credit-level.png">
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>		
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="section-wrap section3 section-bg h100">
					<div class="section-div">
						<div class="credit-section-wrapper">
							<div class="section-title text-left">信贷风险控制——反欺诈平台</div>
							<div class="section-subtitle text-left">目前立趣与中国电信集团、航旅众横、盘石软件等多家合作伙伴正式开展合作。</div>
							<div class="text-center section-intro">
								<img src="./credit-anti-fraud.png">
							</div>
						</div>
					</div>		
				</div>
			</swiper-slide>
			
			<swiper-slide>
				<div class="section-wrap section5 section-bg h100">
					<div class="section-div">
						<div class="credit-section-wrapper text-center">
							<div class="section-title">贷中监控</div>
							<div class="section-subtitle">通过抓取个人用户借贷后的行为数据，借助在风险模型上的先进技术建立了针对于个人的贷中监控预警，可提前识别个人可能出现的风险，通过多种方式提醒金融公司，从而降低风险，减少损失。</div>
							<div class="section-intro">
								<img src="./credit-monitor.png">
							</div>
							<div class="section-abstract">风控预警的闭环流程</div>
						</div>
					</div>		
				</div>
			</swiper-slide>
			
			<swiper-slide>
				<div class="section-wrap section6 section-bg h100">
					<div class="section-div">
						<div class="credit-section-wrapper">
							<div class="section-title ">贷后跟踪</div>
							<div class="section-subtitle ">贷后催收最大的难题是借款用户失联，无法触达用户。立趣贷后跟踪模型，借助多样化的数据源和业务规则，可建立针对个人用户的失联跟踪模型，识别个人用户可能的新的联系方式，从而降低催收成本，减少损失。</div>
							<swiper :options="swiperOption2" class="swiper-container2" ref="swiper2" :style="{width:swiperWrapWidth}">
								<swiper-slide class="slide1 text-center hvr-grow-shadow">
									<div class="slide-block-title">易集成</div>
									<div class="credit-icon icon4"></div>
									<p>不改变原有流程，增加立趣模块</p>
								</swiper-slide>
								<swiper-slide class="slide2 text-center">
									<div class="slide-block-title">修复触达方式</div>
									<div class="credit-icon icon5"></div>
									<p>触达客户是催收的最基本前提</p>
								</swiper-slide>
								<swiper-slide class="slide3 text-center">
									<div class="slide-block-title">丰富触达方式</div>
									<div class="credit-icon icon6"></div>
									<p>发现挖掘新的触达方式</p>
								</swiper-slide>
								<div class="swiper-pagination swiper-pagination2"></div>
							</swiper>

							<div class="clearfix"></div>
							<div class="footer">
								<div class="container" style="margin-top:0px;margin-bottom:0px;">
									<div class="col-md-8 col-sm-8 col-xs-12 text-left">
										<img :src="imgArrUrls.logo2">
										<p class="footer-p" style="color:#fff">
											<a href="aboutUs.html">立趣简介&nbsp;|&nbsp;</a> 
											<a href="terms.html">服务条款&nbsp;|&nbsp;</a>
											<a href="privacy.html">隐私政策&nbsp;|&nbsp;</a>
											<a href="joinUs.html">加入我们&nbsp;|&nbsp;</a>
											<a href="contactUs.html">联系我们</a>
										</p>
									</div>
									<div class="col-md-4 col-sm-4 col-xs-12 text-left">
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
						
					</div>		
				</div>
			</swiper-slide>
			
			
			<div class="swiper-pagination swiper-pagination1" slot="pagination"></div>
		</swiper>
		<!-- 返回顶部 -->
		<div id="nav-scroll">
			<a id="goTop" class="item" @click="goTop" style="display:none;">
				<img :src="imgArrUrls.goTop"> 
			</a>
		</div>
    </div>
</template>
 
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
	
    export default {
		name:'enterpriseCredit',
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
				swiperOption2:{
					slidesPerView: 3,
					spaceBetween: 30,
					paginationType : 'bullets',
					paginationClickable :true,
					loop:false,
					autoHeight:true,

					breakpoints: {
						1024: {
							slidesPerView: 3,
							spaceBetween: 30
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 30
						},
						640: {
							slidesPerView: 1,
							spaceBetween: 20
							
						},
						320: {
							slidesPerView: 1,
							spaceBetween: 10
							
						}
					}
				},
				imgArrUrls:{
					"goTop":require('../../assets/images/gotop.png'),
					"logo":require('../../assets/images/logo_ly.png'),
					"logo2":require('../../assets/images/logo.png')
				},
				swiperWrapWidth:'100%'
            }
        },
		computed:{
			swiper(){
				return this.$refs.mySwiper.swiper
			},
			swiper2(){
				return this.$refs.swiper2.swiper
			}
		},
        components: {
			swiper,
			swiperSlide
        },
		mounted(){
			const that=this;
			
			if($(window).width() <=640){
				that.$data.swiperWrapWidth=that.swiper2.slides[0].style.width;
			   
		   	}
//			that.swiper2.resize(function(){
//				console.log(2)
//			})
			
		
		},
		methods:{
			isGoTop(){
				if(this.swiper.realIndex > 0){
					$("#goTop").show();
				}else{
					$("#goTop").hide();
				}
				this.hideNavFun();
			},
			goTop(){
				this.swiper.slideTo(0, 1000, false)
			},
			hideNavFun(){
				if($(window).width() >= 768){
					if(this.swiper.realIndex >= 1){
						$('.navbar').hide();
					}else{
						$('.navbar').show();
					}
				}
			}
			
		}
    }
</script>

<style lang="scss" scoped>
img{max-width: 100%;}
.section-wrap{display: table;width:100%;}
.section-div{display: table-cell;vertical-align: middle;height:100%;}
.section-bg{background-position: center;background-repeat: no-repeat;background-size: cover;}
.swiper-pagination1 .swiper-pagination-bullet-active{background:rgba(0,0,0 ,0.2)}
	
.section .col-md-6,.section .col-sm-6{padding:40px;}
.section img{max-width:100%;}
.credit-section-wrapper{max-width:1300px;margin:0 auto;padding:0 40px;}
.credit-section-bg{background-position: center;background-repeat: no-repeat;background-size: cover;}
.section1{background-image: url('./credit-section-bg.jpg');}
.section1 .title-box{max-width:634px;margin:0px auto;}
.section1 .title-box h2{color:#ffffff;font-size:40px;letter-spacing: 30px;margin-right:-30px;padding-top:21px;padding-bottom:21px;}
.section1 .title-box p{color:#ffffff;font-size:16px;padding-top:21px;padding-bottom:21px;margin-bottom:180px;line-height: 1.5;}
.section-title{font-size:24px;color:#000000;padding-bottom:25px;}
.section-subtitle{font-size:14px;color:#555555;line-height: 1.8;}
.section-abstract{font-size:16px;color:#ffffff;margin-top:28px;}
	
.personal .section2 .section-title{margin-top:90px;}
.enterprise .section2 .section-title{margin-top:100px;}
.section2{background-color: rgb(222, 232, 244);}
.section2 .section-title,.section4 .section-title,.section5 .section-title{letter-spacing: 20px;margin-right:-20px;}
.section-intro img{max-width: 100%;}
.section4 .section-title,.section4 .section-subtitle{color:#ffffff;}
.section3{background-color: rgb(244, 249, 252);}
.section3 .section-title:before{content:" ";border:2px solid #036db7;margin-right:8px;}
.section3 .section-subtitle{margin-bottom:114px;}
.section4 .section-subtitle,.section5 .section-subtitle{width:700px;margin:0px auto;margin-bottom:65px;}
.section4{background-color: rgb(3, 111, 183);}
.section5{background-color: rgb(3, 109, 183);color: #ffffff;}
.section5 .section-subtitle,.section5 .section-title,.enterprise .section-abstract{color: #ffffff;}
.section6{background-color: rgb(244, 249, 252);}
.section6 .section-div{position: relative;display: block;padding-top: 98px;box-sizing: border-box;}
.section6 .section-subtitle{margin: 0 auto 10px;}
@media (max-width:640px){
	.section6 .section-div{padding-top: 68px;}
}
.section7 .fp-tableCell{display: block;}

.swiper-container2{max-width:980px;}
.slide-block-title{color:#ffffff;padding-top:13px;padding-bottom:13px;font-size:20px;margin-bottom:54px;background-color: #6bbf8b;}
.swiper-container2 .swiper-wrapper p{margin:44px 50px;font-size:14px;height:50px;color:#282828;}
.slide1,.slide2,.slide3{background: #ffffff;}
.slide1 p,.slide2 p,.slide3 p{color: #555555!important;}

.footer{position: absolute;left: 0;bottom: 0;padding: 26px 0 0;}


@media(max-width:767px){
	.section .col-xs-12{padding:5px;}
	.credit-section-wrapper{padding:0 14px;}
	.section1 .title-box h2{font-size:16px;}
	.section1 .title-box p{margin-bottom:0px;font-size:10px;}
	.section-title{font-size:16px;padding-bottom:12px;}
	.section-subtitle{font-size:10px;}
	.section-abstract{font-size:10px;}
	.personal .section2 .section-title{margin-top:0px;}
	.personal .section2 .credit-section-enterprise img{width:120px;}
	.enterprise .section2 .credit-section-enterprise img {width:150px;}
	.section3 .section-subtitle{margin-bottom:60px;}
	.section4 .section-subtitle,.section5 .section-subtitle{width:100%;margin:0px auto;margin-bottom:24px;}
	.swiper-wrapper .slide-block-title{padding-top:6px;padding-bottom:6px;font-size:14px;margin-bottom:8px;}
	.swiper-container2 .swiper-wrapper p {margin:18px 20px;font-size:10px;margin-top:8px;}
}

.credit-icon{width:108px;height:108px;background-image: url('./credit-icon.png');background-repeat: no-repeat;margin:0px auto;}
.icon1{background-position: 0px 0px;}
.icon2{background-position: -108px 0px;}
.icon3{background-position: -216px 0px;}
.icon4{background-position: 0px -108px;}
.icon5{background-position: -108px -108px;}
.icon6{background-position: -216px -108px;}

.section1-title{font-size:40px;color:#fff;padding-bottom:20px}

.section1-content{font-size:18px;color:#fff;padding-bottom:40px;line-height: 36px;}
	
/*common*/
.h100{height: 100%;}
.maxImg img{max-width: 100%;}
</style>