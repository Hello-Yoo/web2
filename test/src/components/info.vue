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
				<div class="ico" @click="this.$router.push('./shop')">
					<span class = "ico_c"></span>
					<div class="settle">
						<p class="con">已选0件商品 共计：<span>￥0</span></p>
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


    <div class="outer10">
        <div class="inter1">
            <div class="inter11">
                <a href="a青竹总界面.html">首页</a> > <a href="">所有商品</a> > <span>简约时尚水泥花瓶</span>
            </div>
        </div>
        <div class="inter2">
            <div class="inter21">
                <a href=""><img :src="this.inf.goodsImgs[this.i]" alt=""></a>
                <a href="" class="small"><img :src="this.inf.goodsImgs[this.i]" alt=""></a>
            </div>
            <div class="inter22">
                <h1> {{this.inf.goodsName}}</h1>
                <p>{{this.inf.goodsDesc}}</p>
                <div class="inter221">
                    <span class="s1">￥</span>
                    <span class="s2">{{this.inf.goodsPrice}}</span>
                    已售出<span class="s3">{{this.inf.goodsSold}}</span>件
                </div>
                <h3>选择数量</h3>
                <div class="inter222">
                    <div class="inter2221">
                        <a @click="sub()" class="sub"> - </a>
                        <input type="text" class="count" v-model="num">
                        <a @click="add()"  class="add">+</a>
                    </div>

                    件（库存<span>2344</span>件）
                    <a  class="car" @click="join()">加入购物车</a>
                </div>
            </div>
        </div>
    </div>
	<div>



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
                inf:[],
                num:1,
                user:'',
                i:0,
            }
        },
        created() {
            axios({
                method:'get',
                url:this.globalAPI.goods_info,
                params:{
                    goodsId:this.$route.query.id
                },
                headers:{
					'accesstoken':sessionStorage.accesstoken
				},
            }).then((ref=>{
                console.log(ref)
                this.inf=ref.data.data 
            }));
            axios({
				method:'get',
				url:this.globalAPI.user_info,
				headers:{
					'accesstoken':sessionStorage.accesstoken
				},
			}).then((ref)=>{
						
				console.log(ref)
			this.user=ref.data.data.userName
			}).catch((error)=>{
				console.log(error)
			});


            
        },
        methods: {
            join(){
                console.log(this.num)
                axios({
                    method:'post',
                    url:this.globalAPI.join_cart,
                    data:{
                        goodsId:this.inf.goodsId,
                        amount:this.num,
                    },
                    headers:{
					'accesstoken':sessionStorage.accesstoken
				},
                }).then((ref)=>{
                    if(ref.data.code==0){
                        this.$message({
            type: 'success',
            message: '添加成功!'
          });
                    }
						console.log(ref)
						this.$router.push('./shop')
                }).catch((error)=>{
                    console.log(error)
                })
            },
            add(){
                this.num++
            },
            sub(){
                this.num==1?'':this.num--
            }
        },

    }
	
</script>

<style scoped>
@import '../assets/common.css';
@import '../assets/reset.css';
@import '../assets/查看详情.css';
</style>