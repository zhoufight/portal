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
                    <ul class="nav navbar-nav navbar-right" >
                        <li >
							<router-link to="/"><i class="fa fa-bars fa-hide"></i>&nbsp;首页</router-link>
                        </li>
                        <li class="active">
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
		<swiper :options="swiperOption" ref="mySwiper" class="swiper-con enterprise" @slideChangeTransitionEnd="isGoTop">
			<swiper-slide>
				<div class="section-wrap section section1 credit-section-bg h100">
					<div class="section-div">
						<div class="credit-section-wrapper text-center">
							<!-- <div class="title-box">
								<div class="word-icon word8"></div>
								<div class="word-icon word9"></div>
							</div> -->
							<div class="section1-title">
								企业信用
							</div>
							<div class="section1-content">
								<p>企业信用分是基于代理商与中国电信之间海量的供应链真实交易数据，依托在大数据、云计算、</p>
								<p>数据挖掘、机器学习方面的前沿技术，进行信用数据智能分析、信用价值挖掘、信用风险模型</p>
								<p>构建，客观地呈现代理商的信用状况、真实经营状况、真实业务发展状况。</p>
							</div>
						</div>
					</div>		
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="section-wrap section2 section-bg h100">
					<div class="section-div">
						dsf
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
				imgArrUrls:{
					"goTop":require('../../assets/images/gotop.png'),
					"logo":require('../../assets/images/logo_ly.png')
				},
            }
        },
		computed:{
			swiper(){
				return this.$refs.mySwiper.swiper
			}
		},
        components: {
			swiper,
			swiperSlide
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

<style lang="scss" scoped>
.section-wrap{display: table;width:100%;}
.section-div{display: table-cell;vertical-align: middle;height:100%;}
.section-bg{background-position: center;background-repeat: no-repeat;background-size: cover;}
.swiper-pagination1 .swiper-pagination-bullet-active{background:rgba(0,0,0 ,0.2)}
	
.section .col-md-6,.section .col-sm-6{padding:40px;}
.section img{max-width:100%;}
.credit-section-wrapper{max-width:1300px;margin:0 auto;padding:0 40px;}
.credit-section-bg{background-position: center;background-repeat: no-repeat;background-size: cover;}
	.section1{background-image: url('./credit-section-bg.jpg');}

/*common*/
.h100{height: 100%;}
.maxImg img{max-width: 100%;}
</style>