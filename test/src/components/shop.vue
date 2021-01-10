<template>
  <div>
    <div class="header">
      <div class="header_c inner_c">
        <h1 class="logo">青竹商城</h1>
        <dl class="allType">
          <dt><a href="#">查看所有类型</a></dt>
          <dd>
            <div class="dd_inn">
              <ul class="dd_cont">
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
                      <img src="./images/img25.png" alt="" />
                    </div>
                    <div class="content">
                      <h3>简约木质餐盘</h3>
                      <span>￥200</span>
                    </div>
                  </a>
                  <div class="mask">
                    <a href="#" class="btn">查看详情</a>
                  </div>
                </li>
                <li>
                  <a href="#">
                    <div class="pic">
                      <img src="./images/img26.png" alt="" />
                    </div>
                    <div class="content">
                      <h3>简约木质餐盘</h3>
                      <span>￥200</span>
                    </div>
                  </a>
                  <div class="mask">
                    <a href="#" class="btn">查看详情</a>
                  </div>
                </li>
                <li>
                  <a href="#">
                    <div class="pic">
                      <img src="./images/img27.png" alt="" />
                    </div>
                    <div class="content">
                      <h3>简约木质餐盘</h3>
                      <span>￥200</span>
                    </div>
                  </a>
                  <div class="mask">
                    <a href="#" class="btn">查看详情</a>
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
            <span class="ico_c"></span>
            <div class="settle">
              <p class="con">
                已选{{ all_choose }}件商品 共计：<span>￥{{ all_price }}</span>
              </p>
              <a href="./shop" class="btn">结算</a>
            </div>
            <span class="con">
              {{ this.goods.length }}
            </span>
          </div>
          <div class="reg_c">
            <a href="./personal" id="">欢迎{{ user }}</a>
          </div>
        </div>
      </div>
    </div>
    <!-- header部分结束 -->
    <div class="outer9">
      <div class="inter1">
        <h1>购物车</h1>
      </div>
      <div class="inter2">
        <div class="inter21">
          <input
            type="checkbox"
            v-model="all"
            class="checkAll"
            @change="change1()"
          /><span class="s1">全选</span> <span class="s2">商品名称</span
          ><span class="s3">单价</span> <span class="count">数量</span
          ><span class="total">小计</span><span class="del">操作</span>
        </div>
        <div class="inter22">
          <ul>
            <li v-for="(item, index) in goods" :key="index">
              <input
                type="checkbox"
                v-model="item.check"
                class="check"
                @change="change(index)"
              /><img :src="item.goodsImgUrl" alt="" />
              <span class="s1">{{ item.goodsName }}</span
              ><span class="money">¥</span>
              <span class="price">{{ item.price }}</span
              ><input type="button" value="-" @click="sub(index)" class="sub" />
              <span class="count">{{ item.amount }}</span
              ><input type="button" value="+" @click="add(index)" class="add" />
              <span class="money1">¥</span
              ><span class="total">{{ item.price * item.amount }}</span>
              <span class="del" @click="del(index)">删除</span>
            </li>
          </ul>
        </div>
        <div class="inter23">
          <div class="picture">
            <img src="./images/购物车.png" alt="" />
          </div>
          <p>您的购物车还没有商品，快去挑选心爱的商品吧！</p>
          <a href=""><span>去逛逛</span></a>
        </div>
      </div>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose"
      >
        <span>确认支付？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="buy()">确 定</el-button>
        </span>
      </el-dialog>
      <div class="inter3">
        <div class="inter31">
          <div class="last">
            <a @click="dialogVisible = true">确认结算</a>
          </div>
          <input
            type="checkbox"
            v-model="all"
            class="checkAll"
            @change="change1()"
          /><span class="s1">全选</span> <span class="ss1">删除</span
          ><span class="ss2">清除下架商品</span>
          <div class="foot">
            已选<span class="totalCount">{{ all_choose }}</span
            >件 合计(不含运费) : <span class="totalPrice">¥{{ all_price }}</span
            >元<br />
            <span class="ss3">已优惠 : <span class="ss4"> ¥0</span></span>
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
              <img src="./images/logo.png" alt="" />
            </a>
            <div class="info">
              青竹良品原创生活类电商品牌，秉承一贯的严谨态度，我们深入世界各地，从源头全程严格把控商品生产环节，力求帮消费者甄选到最优质的商品，全线采用天然原材料，控制甲醛低量无害，采用进口工艺，国际生产线不断优化，食材保证核心原产地新鲜直供，让你享受品质生活
            </div>
          </div>
          <div class="about">
            <dl>
              <dt>
                <a href="#"> 关于我们 </a>
              </dt>
              <dd>
                <a href="#"> 我的品牌 </a>
              </dd>
              <dd>
                <a href="#"> 公司动态 </a>
              </dd>
              <dd>
                <a href="#"> 经历发展 </a>
              </dd>
              <dd>
                <a href="#"> 商品推广 </a>
              </dd>
            </dl>
            <dl>
              <dt>
                <a href="#"> 关于我们 </a>
              </dt>
              <dd>
                <a href="#"> 我的品牌 </a>
              </dd>
              <dd>
                <a href="#"> 公司动态 </a>
              </dd>
              <dd>
                <a href="#"> 经历发展 </a>
              </dd>
              <dd>
                <a href="#"> 商品推广 </a>
              </dd>
            </dl>
            <dl>
              <dt>
                <a href="#"> 关于我们 </a>
              </dt>
              <dd>
                <a href="#"> 我的品牌 </a>
              </dd>
              <dd>
                <a href="#"> 公司动态 </a>
              </dd>
              <dd>
                <a href="#"> 经历发展 </a>
              </dd>
              <dd>
                <a href="#"> 商品推广 </a>
              </dd>
            </dl>
          </div>
          <div class="ewm">
            <p class="wx">
              <img src="./images/img71.png" alt="" />
              <span>微信公众号</span>
            </p>
            <p class="wb">
              <img src="./images/img72.png" alt="" />
              <span>微博公众号</span>
            </p>
          </div>
        </div>
      </div>
      <div class="footer_bar">
        <div class="footer_bar_c inner_c">
          <div class="pay">
            <p class="copy">2019 © youhaosuda.com</p>
            <p class="ico">
              <a href="#">
                <img src="./images/img81.png" alt="" />
              </a>
              <a href="#">
                <img src="./images/img82.png" alt="" />
              </a>
              <a href="#">
                <img src="./images/img83.png" alt="" />
              </a>
              <a href="#">
                <img src="./images/img84.png" alt="" />
              </a>
              <a href="#">
                <img src="./images/img85.png" alt="" />
              </a>
              <a href="#">
                <img src="./images/img86.png" alt="" />
              </a>
              <a href="#">
                <img src="./images/img87.png" alt="" />
              </a>
            </p>
          </div>
          <div class="super">
            <a href="#" class="pic1"> </a>
            <a href="#" class="pic2"> </a>
            <a href="#" class="pic3"> </a>
          </div>
        </div>
      </div>
    </div>
    <!-- 返回顶部 -->
    <div class="lingpin_top">
      <a href="#" class="qq">QQ<br />客服</a>
      <a href="#" class="wx">微信<br />客服</a>
      <a href="#" class="top_c">↑</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      all: false,
      goods: [],
      user: "",
      all_price: 0,
      all_choose: 0,
      check: 0,
      dialogVisible: false,
      orderItemList: [],
    };
  },

  created() {
    axios({
      method: "get",
      url: this.globalAPI.shop_cart,
      headers: {
        accesstoken: sessionStorage.accesstoken,
      },
    })
      .then((ref) => {
        this.goods = ref.data.data.cartItemList;
        this.goods.forEach((x) => {
          x["check"] = false;
        });
        console.log(ref);
      })
      .catch((error) => {
        console.log(error);
      });
    axios({
      method: "get",
      url: this.globalAPI.user_info,
      headers: {
        accesstoken: sessionStorage.accesstoken,
      },
    })
      .then((ref) => {
        console.log(ref);
        this.user = ref.data.data.userName;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {
    add(index) {
      this.goods[index].amount++;
      if (this.goods[index].check == true) {
        this.all_price += this.goods[index].price;
      }
      // 	axios({
      // 		method:'post',
      // 		url:this.globalAPI.update_cart,
      // 		headers:{
      // 	'accesstoken':sessionStorage.accesstoken
      // },

      // 	}).then((ref)=>{
      // 		console.log(ref)

      // 	}).catch((error)=>{
      // 		console.log(error)
      // 	})
    },
    sub(index) {
      this.goods[index].amount == 1 ? "" : this.goods[index].amount--;
      if (this.goods[index].check == true) {
        this.all_price -= this.goods[index].price;
      }
    },
    del(index) {
      this.all_choose--;
      this.all_price -= this.goods[index].amount * this.goods[index].price;
      axios({
        method: "get",
        url: this.globalAPI.delete_cart,
        headers: {
          accesstoken: sessionStorage.accesstoken,
        },
        params: {
          shopCartId: this.goods[index].shopCartId,
        },
      })
        .then((ref) => {
          console.log(ref);
          if (ref.data.code == 0) {
            alert(ref.data.msg);
          }
        })
        .catch((error) => {
          console.log(error);
        });

      this.goods.splice(index, 1);
    },
    buy() {
		//显示支付确认弹窗
		
      this.dialogVisible = false;
      this.goods.forEach((x) => {
        if (x.check == true) {
          let item = {
            goodsId: x.goodsId,
            amount: x.amount,
			addressId: 1,
			};
			this.all_choose--;
			this.all_price-= x.amount *x.price;
			this.orderItemList.push(item);
			//删除购物车
          axios({
            method: "get",
            url: this.globalAPI.delete_cart,
            headers: {
              accesstoken: sessionStorage.accesstoken,
            },
            params: {
              shopCartId: x.shopCartId,
            },
          })
            .then((ref) => {
              console.log(ref);
              if (ref.data.code == 0) {
                alert(ref.data.msg);
              }
            })
            .catch((error) => {
              console.log(error);
			});

		
		}
		
	});
	//下订单
      axios({
        method: "post",
        url: this.globalAPI.buy_order,
        headers: {
          accesstoken: sessionStorage.accesstoken,
        },
        data: {
          activityList: [],
          orderItemList: this.orderItemList,
        },
      })
        .then((ref) => {
          console.log(ref);
        })
        .catch((error) => {
          console.log(error);
		});
		
	this.$router.push('./index')
    },
    handleClose(done) {
      this.$confirm("确认取消？")
        .then((_) => {
          console.log(_);
          done();
        })
        .catch((_) => {
          console.log(_);
        });
    },
    change(index) {
      if (this.goods[index].check == true) {
        this.check++;
        this.all_choose++;
        this.all_price += this.goods[index].amount * this.goods[index].price;
        console.log(this.check);
      } else {
        this.check--;
        this.all_choose--;
        this.all_price -= this.goods[index].amount * this.goods[index].price;
        console.log(this.check);
      }
      if (this.check == this.goods.length) {
        this.all = true;
      } else {
        this.all = false;
      }
    },
    change1() {
      if (this.all == true) {
        this.goods.forEach((x) => {
          x.check = true;
          this.all_price += x.amount * x.price;
        });
        this.all_choose = this.goods.length;
      } else {
        this.goods.forEach((x) => {
          x.check = false;
        });
        this.all_choose = 0;
        this.all_price = 0;
      }
    },
  },
};
</script>

<style scoped>
@import "../assets/common.css";
@import "../assets/reset.css";
@import "../assets/购物车.css";
</style>