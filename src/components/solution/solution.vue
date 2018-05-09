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
                        <li class="active">
							<router-link to="/solution"><i class="fa fa-newspaper-o fa-hide"></i>&nbsp;解决方案</router-link>
                        </li>
                        <li class="dropdown">
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
        
        <div class="aboutus-bg solution-bg">
			<div class="bg-table">
				<div class="bg-table-cell">
					<div class="solution-bg-title">
						<div class="bg-title-chinese">解决方案</div>
						<div class="bg-title-english">SOLUTION</div>
					</div>
				</div>
			</div>
		</div>
		<div class="clearfix"></div>
		<div class="container">
			<div class="tab-container">
				<ul class="nav nav-tabs">
					<li role="presentation" class="active"><a href="#tab1" data-toggle="tab">企业信用解决方案</a></li>
					<li role="presentation" ><a href="#tab2" data-toggle="tab">个人信用解决方案</a></li>
				</ul>
			</div>
			<div class="tab-content">
				<div id="tab1" class="tab-pane active">
					<div class="solution-content">
						<div class="tab-title text-left">企业信用贷款解决方案</div>
						<div class="tab-subtitle text-left">立趣信息科技与宝凯道融、海尔消费金融、铭诚保理等多家金融机构合作，为中国电信代理商提供在线申请融资贷款的服务，改变了传统金融机构偏重线下业务办理的模式。只需在线填写申请资料，即可快速、便捷的申请融资贷款。</div>
						<div class="tab-banner">
							<img src="./solution-enterprise-banner1.png">
						</div>
					</div>
					<div class="solution-content">
						<div class="tab-title text-left">企业信用提货解决方案</div>
						<div class="tab-subtitle text-left">供应链企业凭借立趣企业信用分可转化为在广西好机友网络科技有限公司(以下简称”好机友平台”) 的信用提货额度，通过在好机友平台提交相应提货申请即可实现信用提货，先提货再在一定帐期内销售出去，然后将销售货款再兑付给好机友平台，从而极大的缓解代理商的资金压力，为代理商更好的发展电信业务提供强有力的帮助和支持，也帮助代理商减少交易成本，提高经营效率。</div>
						<div class="tab-banner">
							<img src="./solution-enterprise-banner2.png">
						</div>
					</div>
					<div class="solution-wrapper solution-map">
						<div class="con-title">业务开展地图</div>
						<div class="con-map text-center">
							<img src="./solution-enterprise-map.png">
						</div>
					</div>
					<div class="solution-wrapper solution-coop">
						<div class="con-title">合作金融机构</div>
						<div class="con-coop text-center">
							<div class="col-md-4 col-sm-4 col-xs-12">
								<img alt="" src="./coop-bkor.png">
							</div>
							<div class="col-md-4 col-sm-4 col-xs-12">
								<img alt="" src="./coop-mingcheng.png">
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
				</div>
				<div id="tab2" class="tab-pane">
					<div class="solution-content">
						<div class="tab-title text-left">公众个人信用租机解决方案</div>
						<div class="tab-subtitle text-left">公众用户凭借立趣个人信用分，可在中国电信已开展信用租机业务的任意门店，直接获取金融机构给予的授信额度。用户只需向中国电信承诺连续24个月每月最低套餐消费金额，即可以0元租用授信额度相对应的手机终端。租赁期内，用户只需每月足额缴纳最低套餐消费金额，租期满可直接获得手机所有权。</div>
						<div class="tab-banner">
							<img src="./solution-personal-banner1.png">
						</div>
					</div>
					<div class="solution-wrapper">
						<div class="con-title">信用租机申请流程</div>
						<div class="solution-apply text-center">
							<div class="step-next col-md-3 col-sm-3 col-xs-12">
								<div class="solution-step">
									<div class="solution-step-num">1</div>
									<div class="solution-step-title">信用评估</div>
									<div class="solution-step-intro">申请立趣个人信用分完成信用评估，获得相应的购机补贴额度</div>
								</div>
							</div>
							<div class="step-next col-md-3 col-sm-3 col-xs-12">
								<div class="solution-step">
									<div class="solution-step-num">2</div>
									<div class="solution-step-title">挑选机型和套餐</div>
									<div class="solution-step-intro">在线选择您心仪的机型和电信话费套餐</div>
								</div>
							</div>
							<div class="step-next col-md-3 col-sm-3 col-xs-12">
								<div class="solution-step">
									<div class="solution-step-num">3</div>
									<div class="solution-step-title">到店拿手机</div>
									<div class="solution-step-intro">到电信营业厅签订协议，办理电信话费套餐，拿新机</div>
								</div>
							</div>
							<div class="col-md-3 col-sm-3 col-xs-12">
								<div class="solution-step">
									<div class="solution-step-num">4</div>
									<div class="solution-step-title">每月按时缴纳电话费</div>
									<div class="solution-step-intro">每月按时缴纳电话费即可，无需额外支付租金</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
					<div class="solution-content">
						<div class="tab-title text-left">政企个人信用租机解决方案</div>
						<div class="tab-subtitle text-left">政企客户下的员工用户也可凭借立趣个人信用分及政企客户自身的背书，参与政企渠道信用租机。目前，立趣信息科技的控股公司好机友平台已与广西电信签署政企渠道信用租机协议，在广西全省开展政企渠道信用租机业务。</div>
						<div class="tab-banner">
							<img src="./solution-personal-banner2.png">
						</div>
					</div>
					<div class="solution-wrapper solution-map">
						<div class="con-title">业务开展地图</div>
						<div class="con-map text-center">
							<img src="./solution-personal-map.png">
						</div>
					</div>
					<div class="solution-wrapper solution-coop">
						<div class="con-title">合作机构</div>
						<div class="con-coop text-center">
							<div class="col-md-4 col-sm-4 col-xs-12">
								<img alt="" src="./coop-telecom.png">
							</div>
							<div class="col-md-4 col-sm-4 col-xs-12">
								<img alt="" src="./coop-unicom.png">
							</div>
							<div class="col-md-4 col-sm-4 col-xs-12">
								<img alt="" src="./coop-besttone.png">
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
					<div class="solution-wrapper solution-coop">
						<div class="con-title">合作金融机构</div>
						<div class="con-coop text-center">
							<div class="col-md-4 col-sm-4 col-xs-12">
								<img alt="" src="./coop-haier.png">
							</div>
							<div class="col-md-4 col-sm-4 col-xs-12">
								<img alt="" src="./coop-wuxi.png">
							</div>
							<div class="col-md-4 col-sm-4 col-xs-12">
								<img alt="" src="./coop-xiaonuo.png">
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
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
.container{margin-top:86px;margin-bottom:100px;}
.solution-bg{background-image:url('./solution_bg.jpg')}
.nav-tabs {border-bottom: 1px solid #eaeaea;}
.nav-tabs>li>a{border-radius: 0;margin-left:10px;margin-right:10px;font-size:18px;color:#282828;}
.nav-tabs>li>a:hover{background-color: #eeeeee;border-bottom-color: transparent;}
.nav-tabs > li.active > a, 
.nav-tabs > li.active > a:focus, 
.nav-tabs > li.active > a:hover{background-color: #5ea1e2;border: none;border-bottom-color: transparent;color:#ffffff;}
.nav-tabs > li{margin-bottom:-3px;}
.tab-title:before{content:" ";border:2px solid #036db7;margin-right:10px;}
.tab-title{color:#000000;font-size:18px;margin-bottom:40px;margin-top:40px;}
.tab-subtitle{color:#555555;font-size:16px;margin-bottom:40px;}
.tab-banner{text-align: center;}
.tab-banner img{max-width: 100%;}
.con-title{color:#0f4994;font-size:18px;padding:20px;}
.con-map{padding-top:30px;padding-bottom:30px;}
.con-map img{max-width:100%;}
.con-coop{padding-top:30px;padding-bottom:30px;}
.solution-wrapper{width:100%;border:1px solid #eaf1f9;margin-top:40px;}
.solution-apply{padding:40px;}
.solution-apply .solution-step{padding:30px;}
.step-next:after{content: " ";position: absolute;top:110px;right:-20px;width:50px;background:#000000;height:1px;}
.solution-step-num{font-size:40px;color:#d6d6d8;}
.solution-step-title{font-size:18px;color:#000000;margin-top:10px;}
.solution-step-intro{font-size:14px;color:#555555;min-height:90px;margin:0px auto;margin-top:15px;max-width:120px;text-align:left;}
@media(min-width:1200px){
	.container {
	    width: 1050px;
	}
}
@media(max-width:767px){
	.container{margin-top:30px;margin-bottom:50px;}
	.nav>li>a{padding:10px 10px;font-size:14px;margin-left:0px;margin-right:0px;}
	.tab-title{font-size:16px;}
	.tab-subtitle{font-size:14px;}
	.con-map{padding:30px;}
	.solution-coop .col-xs-12{margin-top:6px;margin-bottom:6px;}
	.solution-apply{padding:10px;}
	.solution-apply .solution-step{padding:10px;}
	.step-next:after{width:1px;height:30px;top:160px;right:50%;}
	.solution-step-intro{max-width:200px;}
	.solution-step-num{font-size:32px;}
	.solution-step-title{font-size:16px;}
	.solution-step-intro{font-size:12px;text-align:center;max-width:100px;}
}	
</style>