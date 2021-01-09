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

              <div class="info"></div>
              <div class="upload"></div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="个人订单管理" name="second">
            <el-tabs tab-position="left" style="height: 500px">
              <el-tab-pane label="待付款">
                <el-row>
                  <el-col
                    :span="8"
                    v-for="(o, index) in 2"
                    :key="o"
                    :offset="index > 0 ? 2 : 0"
                  >
                    <el-card :body-style="{ padding: '0px' }" v-for="(item,index) in order_list" :key='index'>
                      <img
                        :src="item.goodsImgUrl"
                        class="image"
                      />
                      <div style="padding: 14px">
                        <span>订单编号:{{item.orderNumber}}</span>
                        <time class="time">{{ item.createTime }}</time>
                        <span></span>
                        <div class="bottom clearfix">
                          
                          <el-popover
  placement="right"
  width="400"
  trigger="click">
  <el-table :data="gridData">
    <el-table-column width="150" property="date" label="日期"></el-table-column>
    <el-table-column width="100" property="name" label="姓名"></el-table-column>
    <el-table-column width="300" property="address" label="地址"></el-table-column>
  </el-table>
  <el-button type="text" class="button" @click="select()" slot="reference">查看</el-button>
</el-popover>
                          <el-button type="text" class="button" @click="select()">查看</el-button>
                          <el-button type="text" class="button">取消</el-button>
                          <el-button type="text" class="button">去支付</el-button
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
              <el-tab-pane label="待退款"
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
                          <el-button type="text" class="button">取消</el-button>
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
                        </div>
                      </div>
                    </el-card>
                  </el-col>
                </el-row></el-tab-pane
              >
            </el-tabs>
          </el-tab-pane>
          <el-tab-pane label="修改地址" name="third"
            >
            <div class="address"> 
                默认地址
            <el-input v-model="input" :disabled="true"> </el-input>
            <div class="updata_address">
                
            </div>
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
      user: "",
      activeName: "second",
      currentDate: new Date(),
      input: "",
      order_detail:[],
      order_list:[],
      gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
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
        console.log('获取用户信息');
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
        console.log('获取地址列表');
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
      params:{
        status:0,
      }
    })
      .then((ref) => {
        console.log('获取订单列表');
        this.order_list=ref.data.data
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
    select(){
      axios({
        method:'get',
        url:this.globalAPI.order_detail,
        params:{
          orderNumber:this
        }
      })
    }
  },
};
</script>

<style scoped>
@import "../assets/common.css";
@import "../assets/reset.css";
@import "../assets/个人中心.css";
</style>