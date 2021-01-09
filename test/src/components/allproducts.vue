<template>
    <div>
        <div class="header">
		<div class="header_c inner_c">
			<h1 class="logo">
				青竹商城
			</h1>
			<dl class = "allType">
				<dt><a href="#">查看所有类型</a></dt>
				<dd>
					<div class = "dd_inn">
						<ul class = "dd_cont">
							<li><a href="#">不锈钢</a></li>
							<li><a href="#">原料水泥</a></li>
							<li><a href="#">塑料</a></li>
							<li><a href="#">木质</a></li>
							<li><a href="#">陶瓷</a></li>
						</ul>
						<ul class="pro">
							<li>
								<a href="#">
									<div class="pic">
										<img src="./images/img25.png" alt="">
									</div>
									<div class="content">
										<h3>简约木质餐盘</h3>
										<span>￥200</span>
									</div>
								</a>
								<div class="mask">
									<a href="#" class = "btn">查看详情</a>
								</div>
							</li>
							<li>
								<a href="#">
									<div class="pic">
										<img src="./images/img26.png" alt="">
									</div>
									<div class="content">
										<h3>简约木质餐盘</h3>
										<span>￥200</span>
									</div>
								</a>
								<div class="mask">
									<a href="#" class = "btn">查看详情</a>
								</div>
							</li>
							<li>
								<a href="#">
									<div class="pic">
										<img src="./images/img27.png" alt="">
									</div>
									<div class="content">
										<h3>简约木质餐盘</h3>
										<span>￥200</span>
									</div>
								</a>
								<div class="mask">
									<a href="#" class = "btn">查看详情</a>
								</div>
							</li>
						</ul>
					</div>
				</dd>
			</dl>
			<ul class="nav">
                
				<li><a href="./index">首页</a></li>
				<li><a href="./allproducts">所有产品</a></li>
				<li><a href="./blog">博客</a></li>
				<li><a href="./article">文章列表</a></li>
			</ul>
			<a href="#" class="search"></a>
			<div class="reg">
				
                <div class="ico"  >
					<span class = "ico_c"></span>
					<div class="settle">
						<p class="con">0件商品 共计：<span>￥0</span></p>
						<a href="./shop" class="btn">结算</a>
					</div>
					<span class = "con">
						0
					</span>
				</div>
				<div class = "reg_c">
					<a href="./personal" id="">欢迎{{user}}</a>
					
				</div>
			</div>
		</div>
	</div>
	<!-- header部分结束 -->
	<div class="s_content">
		<div class="s_content_c inner_c">
			<div class="s_info">
				<div class="s_title">
					<a href="#">
						首页
					</a>
					&gt;
					<span>
						所有商品
					</span>
				</div>
				<div class="screen">
					<table>
						<tr class = "t1">
							<th>品牌</th>
							<td>
								<a href="#">无印</a>
								<a href="#">博朗</a>
								<a href="#">花印</a>
							</td>
						</tr>
						<tr class = "t2">
							<th>类别</th>
							<td>
								<a href="#">不锈钢</a>
								<a href="#">原料水泥</a>
								<a href="#">塑料</a>
								<a href="#">木质</a>
							</td>
						</tr>
					</table>
				</div>
				<div class="fun">
					<div class="sort">
						<span>排序：</span>
						<a href="#" class="s1">
							<i></i>销量
						</a>
						<a href="#" class="s2">
							<i></i>价格
						</a>
						<a href="#" class="s3">
							<i></i>上架时间
						</a>
					</div>
					<div class="swi">
						<span>仅显示有货：</span>
						<a href="#">
							<i></i>
						</a>
					</div>
					<div class="total">
						共<span>20</span>个商品
					</div>
				</div>
				<div class="s_prod">
					<ul class = "pub_pro" >
						
						<li v-for="(item,index) in goods" :key="index" >
							<img :src="item.goodsImgs[0]" alt="">
							<div class="cont">
								<h3>{{item.goodsName}}</h3>
								<span>￥{{item.goodsPrice}}</span>
							</div>
							<div class="mask">
								<a  class="btn"  @click="info(item.goodsId)">查看详情</a>
							</div>
						</li>
					</ul>
				</div>
				<div class="pages">
					<a href="#">&lt;</a>
					<a href="#" class = "tol cur">1</a>
					<a href="#" class = "tol ">2</a>
					<a href="#">&gt;</a>
				</div>
			</div>
		</div>
	</div>
	<!-- footer部分开始 -->
	<div class="footer">
		<div class="footer_c inner_c">
			<div class="footer_top">
				<div class="bir">
					<a href="#">
						<img src="./images/logo.png" alt="">
					</a>
					<div class="info">
						青竹良品原创生活类电商品牌，秉承一贯的严谨态度，我们深入世界各地，从源头全程严格把控商品生产环节，力求帮消费者甄选到最优质的商品，全线采用天然原材料，控制甲醛低量无害，采用进口工艺，国际生产线不断优化，食材保证核心原产地新鲜直供，让你享受品质生活
					</div>
				</div>
				<div class="about">
					<dl>
						<dt>
							<a href="#">
								关于我们
							</a>
						</dt>
						<dd>
							<a href="#">
								我的品牌
							</a>
						</dd>
						<dd>
							<a href="#">
								公司动态
							</a>
						</dd>
						<dd>
							<a href="#">
								经历发展
							</a>
						</dd>
						<dd>
							<a href="#">
								商品推广
							</a>
						</dd>
					</dl>
					<dl>
						<dt>
							<a href="#">
								关于我们
							</a>
						</dt>
						<dd>
							<a href="#">
								我的品牌
							</a>
						</dd>
						<dd>
							<a href="#">
								公司动态
							</a>
						</dd>
						<dd>
							<a href="#">
								经历发展
							</a>
						</dd>
						<dd>
							<a href="#">
								商品推广
							</a>
						</dd>
					</dl>
					<dl>
						<dt>
							<a href="#">
								关于我们
							</a>
						</dt>
						<dd>
							<a href="#">
								我的品牌
							</a>
						</dd>
						<dd>
							<a href="#">
								公司动态
							</a>
						</dd>
						<dd>
							<a href="#">
								经历发展
							</a>
						</dd>
						<dd>
							<a href="#">
								商品推广
							</a>
						</dd>
					</dl>
				</div>
				<div class="ewm">
					<p class="wx">
						<img src="./images/img71.png" alt="">
						<span>微信公众号</span>
					</p>
					<p class="wb">
						<img src="./images/img72.png" alt="">
						<span>微博公众号</span>
					</p>
				</div>
			</div>
		</div>
		<div class="footer_bar">
			<div class="footer_bar_c inner_c">
				<div class = "pay">
					<p class = "copy">
						2019 © youhaosuda.com
					</p>
					<p class = "ico">
						<a href="#">
							<img src="./images/img81.png" alt="">
						</a>
						<a href="#">
							<img src="./images/img82.png" alt="">
						</a>
						<a href="#">
							<img src="./images/img83.png" alt="">
						</a>
						<a href="#">
							<img src="./images/img84.png" alt="">
						</a>
						<a href="#">
							<img src="./images/img85.png" alt="">
						</a>
						<a href="#">
							<img src="./images/img86.png" alt="">
						</a>
						<a href="#">
							<img src="./images/img87.png" alt="">
						</a>
					</p>
				</div>
				<div class="super">
					<a href="#" class = "pic1">
						
					</a>
					<a href="#" class = "pic2">
						
					</a>
					<a href="#" class = "pic3">
						
					</a>
				</div>
			</div>
		</div>
	</div>
	<!-- 返回顶部 -->
	<div class="lingpin_top">
		<a href="#" class = "qq">QQ<br/>客服</a>
		<a href="#" class = "wx">微信<br/>客服</a>
		<a href="#" class = "top_c">↑</a>
	</div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
			return {
				user:'',
				type:[],
				goods:[],

			}
		},
		created() {
			axios({
				method:'get',
				url:this.globalAPI.all_goods_type,
				headers:{
					'accesstoken':sessionStorage.accesstoken
				},
			}).then((ref)=>{
				console.log(222)
				console.log(ref)
				this.type=ref.data.data
			}).catch((error)=>{
				console.log(error)
			});
			axios({
				method:'get',
				url:this.globalAPI.all_goods,
				headers:{
					'accesstoken':sessionStorage.accesstoken
				},
			}).then((ref)=>{
				this.goods=ref.data.data.content
				console.log(111)
				console.log(ref)
			}).catch((error)=>{
				console.log(error)
			});
			
			axios({
				method:'get',
				url:this.globalAPI.user_info,
				headers:{
					'accesstoken':sessionStorage.accesstoken
				},
			}).then((ref)=>{
						console.log(222)
				console.log(ref)
			this.user=ref.data.data.userName
			}).catch((error)=>{
				console.log(error)
			});

		},
		methods: {
			info(id){
				this.$router.push({path:'./info',query: {id:id}})
				}
		},
    }
</script>

<style  scoped>
@import '../assets/common.css';
@import '../assets/reset.css';
@import '../assets/allproducts.css';

</style>