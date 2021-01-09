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
          <div class="ico">
            <span class="ico_c"></span>
            <div class="settle">
              <p class="con">0件商品 共计：<span>￥0</span></p>
              <a href="./shop" class="btn">结算</a>
            </div>
            <span class="con"> 0 </span>
          </div>
          <div class="reg_c">
            <a id="">欢迎{{ user }}</a>
          </div>
        </div>
      </div>
    </div>
    <!-- header部分结束 -->
    <div class="outer10">
      <div class="inter1">
        <div class="inter11">
          <a href="./index">首页</a> > <a href="./personal">个人中心</a>
        </div>
      </div>
      <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <span></span>
          <el-tab-pane label="用户信息" name="first"
            >个人基本信息
            <div class="own">
              <div class="picture">
                <img src="" alt="" />
              </div>

              <div class="info123"></div>
              <div class="upload"></div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="个人订单管理" name="second">
            <el-tabs tab-position="left" style="height: 600px">
              <el-tab-pane
                label="待付款"
                style="height: 600px; overflow-y: auto; overflow-x: hidden"
              >
                <el-row>
                  <el-col
                    :span="8"
                    v-for="(o, index) in 2"
                    :key="o"
                    :offset="index > 0 ? 2 : 0"
                  >
                    <el-card
                      :body-style="{ padding: '0px' }"
                      v-for="(item, index) in order_list"
                      :key="index"
                    >
                      <img :src="item.goodsImgUrl" class="image" />
                      <div style="padding: 14px">
                        <span>订单编号:{{ item.orderNumber }}</span>
                        <time class="time">{{ item.createTime }}</time>
                        <span></span>
                        <div class="bottom clearfix">
                          <el-popover
                            placement="right"
                            width="400"
                            trigger="click"
                          >
                            <el-table :data="order_detail">
                              <el-table-column width="150" label="商品"
                                ><template slot-scope="scope">
                                  <el-image
                                    style="width: 100px; height: 100px"
                                    :src="scope.row.goodsImgUrl"
                                    fit="contain"
                                  ></el-image>
                                </template>
                              </el-table-column>
                              <el-table-column
                                width="100"
                                property="goodsName"
                                label="商品名称"
                              ></el-table-column>
                              <el-table-column
                                width="300"
                                property="amount"
                                label="商品数量"
                              ></el-table-column>
                            </el-table>
                            <el-button
                              type="text"
                              class="button"
                              @click="select(item.orderNumber)"
                              slot="reference"
                              >查看</el-button
                            >
                          </el-popover>
                          <el-button
                            type="text"
                            class="button"
                            @click="cancle(item.orderNumber)"
                            >取消</el-button
                          >
                          <el-button
                            type="text"
                            class="button"
                            @click="pay(item.orderNumber)"
                            >去支付</el-button
                          >
                        </div>
                      </div>
                    </el-card>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="待发货"
                ><el-row>
                  <el-col
                    :span="8"
                    v-for="(o, index) in 2"
                    :key="o"
                    :offset="index > 0 ? 2 : 0"
                  >
                    <el-card
                      :body-style="{ padding: '0px' }"
                      v-for="(item, index) in wait_order"
                      :key="index"
                    >
                      <img :src="item.goodsImgUrl" class="image" />
                      <div style="padding: 14px">
                        <span>订单编号:{{ item.orderNumber }}</span>
                        <time class="time">{{ item.createTime }}</time>
                        <span></span>
                        <div class="bottom clearfix">
                          <el-popover
                            placement="right"
                            width="400"
                            trigger="click"
                          >
                            <el-table :data="order_detail">
                              <el-table-column width="150" label="商品"
                                ><template slot-scope="scope">
                                  <el-image
                                    style="width: 100px; height: 100px"
                                    :src="scope.row.goodsImgUrl"
                                    fit="contain"
                                  ></el-image>
                                </template>
                              </el-table-column>
                              <el-table-column
                                width="100"
                                property="goodsName"
                                label="商品名称"
                              ></el-table-column>
                              <el-table-column
                                width="300"
                                property="amount"
                                label="商品数量"
                              ></el-table-column>
                            </el-table>
                            <el-button
                              type="text"
                              class="button"
                              @click="select(item.orderNumber)"
                              slot="reference"
                              >查看</el-button
                            >
                          </el-popover>
                          <el-button
                            type="text"
                            class="button"
                            @click="cancle(item.orderNumber)"
                            >申请退款</el-button
                          >
                        </div>
                      </div>
                    </el-card>
                  </el-col>
                </el-row></el-tab-pane
              >
              <el-tab-pane label="待收货"
                ><el-row>
                  <el-col
                    :span="8"
                    v-for="(o, index) in 2"
                    :key="o"
                    :offset="index > 0 ? 2 : 0"
                  >
                    <el-card :body-style="{ padding: '0px' }">
                      <img
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image"
                      />
                      <div style="padding: 14px">
                        <span>好吃的汉堡</span>
                        <div class="bottom clearfix">
                          <time class="time">{{ currentDate }}</time>
                          <el-button type="text" class="button">查看</el-button>
                          <el-button type="text" class="button"
                            >申请退款</el-button
                          >
                        </div>
                      </div>
                    </el-card>
                  </el-col>
                </el-row></el-tab-pane
              >

              <el-tab-pane label="已收货"
                ><el-row>
                  <el-col
                    :span="8"
                    v-for="(o, index) in 2"
                    :key="o"
                    :offset="index > 0 ? 2 : 0"
                  >
                    <el-card :body-style="{ padding: '0px' }">
                      <img
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image"
                      />
                      <div style="padding: 14px">
                        <span>好吃的汉堡</span>
                        <div class="bottom clearfix">
                          <time class="time">{{ currentDate }}</time>
                          <el-button type="text" class="button">查看</el-button>
                          <el-button type="text" class="button"
                            >去评论</el-button
                          >
                        </div>
                      </div>
                    </el-card>
                  </el-col>
                </el-row></el-tab-pane
              >
              <el-tab-pane label="已退款"
                ><el-row>
                  <el-col
                    :span="8"
                    v-for="(o, index) in 2"
                    :key="o"
                    :offset="index > 0 ? 2 : 0"
                  >
                    <el-card
                      :body-style="{ padding: '0px' }"
                      v-for="(item, index) in cancled_order"
                      :key="index"
                    >
                      <img :src="item.goodsImgUrl" class="image" />
                      <div style="padding: 14px">
                        <span>订单编号:{{ item.orderNumber }}</span>
                        <time class="time">{{ item.createTime }}</time>
                        <span></span>
                        <div class="bottom clearfix">
                          <el-popover
                            placement="right"
                            width="400"
                            trigger="click"
                          >
                            <el-table :data="order_detail">
                              <el-table-column width="150" label="商品"
                                ><template slot-scope="scope">
                                  <el-image
                                    style="width: 100px; height: 100px"
                                    :src="scope.row.goodsImgUrl"
                                    fit="contain"
                                  ></el-image>
                                </template>
                              </el-table-column>
                              <el-table-column
                                width="100"
                                property="goodsName"
                                label="商品名称"
                              ></el-table-column>
                              <el-table-column
                                width="300"
                                property="amount"
                                label="商品数量"
                              ></el-table-column>
                            </el-table>
                            <el-button
                              type="text"
                              class="button"
                              @click="select(item.orderNumber)"
                              slot="reference"
                              >查看</el-button
                            >
                          </el-popover>
                        </div>
                      </div>
                    </el-card>
                  </el-col>
                </el-row></el-tab-pane
              >
            </el-tabs>
          </el-tab-pane>
          <el-tab-pane label="修改地址" name="third">
            <div class="address">
              默认地址
              <el-input v-model="input" :disabled="true"> </el-input>
              <div class="updata_address"></div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div></div>

    <!-- footer部分开始 -->
    <div class="footer">
      <div class="footer_c inner_c">
        <div class="footer_top">
          <div class="bir">
            <a href="#">
              <img src="./images/logo.png" alt="" />
            </a>
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
      user: "",
      activeName: "second",
      currentDate: new Date(),
      input: "",
      order_detail: [],
      order_list: [],
      wait_order: [],
      cancled_order: [],

      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
    };
  },
  created() {
    //  获取用户信息
    axios({
      method: "get",
      url: this.globalAPI.user_info,
      headers: {
        accesstoken: sessionStorage.accesstoken,
      },
    })
      .then((ref) => {
        console.log("获取用户信息");
        console.log(ref);
        this.user = ref.data.data.userName;
      })
      .catch((error) => {
        console.log(error);
      });
    //获取地址列表
    axios({
      method: "get",
      url: this.globalAPI.address_list,
      headers: {
        accesstoken: sessionStorage.accesstoken,
      },
    })
      .then((ref) => {
        console.log("获取地址列表");
        console.log(ref);
        this.input = ref.data.data[0].address;
      })
      .catch((error) => {
        console.log(error);
      });
    //获取订单列表
    axios({
      method: "get",
      url: this.globalAPI.order,
      headers: {
        accesstoken: sessionStorage.accesstoken,
      },
      params: {
        status: 0,
      },
    })
      .then((ref) => {
        console.log("获取订单列表");
        this.order_list = ref.data.data;
        console.log(ref);
      })
      .catch((error) => {
        console.log(error);
      });
    //获取待发货订单
    axios({
      method: "get",
      url: this.globalAPI.order,
      headers: {
        accesstoken: sessionStorage.accesstoken,
      },
      params: {
        status: 1,
      },
    })
      .then((ref) => {
        console.log("获取订单列表");
        this.wait_order = ref.data.data;
        console.log(ref);
      })
      .catch((error) => {
        console.log(error);
      });
    //获取已退款订单
    axios({
      method: "get",
      url: this.globalAPI.order,
      headers: {
        accesstoken: sessionStorage.accesstoken,
      },
      params: {
        status: 5,
      },
    })
      .then((ref) => {
        console.log("获取订单列表");
        this.cancled_order = ref.data.data;
        console.log(ref);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    select(x) {
      console.log(x);
      axios({
        method: "get",
        url: this.globalAPI.order_detail,
        params: {
          orderNumber: x,
        },
        headers: {
          accesstoken: sessionStorage.accesstoken,
        },
      })
        .then((ref) => {
          this.order_detail = ref.data.data.orderItemList;
          console.log("获取订单详情");
          console.log(ref);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    cancle(x) {
      console.log(sessionStorage.accesstoken);
      axios({
        method: "post",
        url: this.globalAPI.order_cancle,
        headers: {
          accesstoken: sessionStorage.accesstoken,
        },
        params: {
          orderNumber: x,
        },
      })
        .then((ref) => {
          console.log("取消订单");
          console.log(x);
          console.log(ref);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    pay(x) {
      this.$confirm("确定支付？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "支付成功!",
          });
          axios({
            method: "post",
            url: this.globalAPI.order_pay,
            headers: {
              accesstoken: sessionStorage.accesstoken,
            },
            params: {
              orderNumber: x,
            },
          })
            .then((ref) => {
              console.log("支付订单");
              console.log(ref);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消支付",
          });
        });
    },
  },
  computed: {
    panelCss: function () {
      return {
        height: this.order_list.length + 1,
      };
    },
  },
};
</script>

<style scoped>
@import "../assets/common.css";
@import "../assets/reset.css";
@import "../assets/个人中心.css";
</style>
