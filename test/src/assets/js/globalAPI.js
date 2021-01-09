const http = 'http://139.9.69.82:8080' 
// const http='http://192.168.43.165:8080'

const globalAPI = {
    // 用户信息
    user_info:http +'/v1/user/info/basic/get',
    //登录
    login:http+'/v1/user/login',
    //所有商品类型 
    all_goods_type:http +'/v1/goods/type/list',
    //所有商品
    all_goods:http +'/v1/goods/list',
    //商品详情信息
    goods_info:http+'/v1/goods/detail',
    //加入购物车
    join_cart:http+'/v1/cart/add',
    //列出购物车
    shop_cart:http+ '/v1/cart/list',
    //删除购物车
    delete_cart:http+ '/v1/cart/delete',
    //更新购物车
    update_cart:http+ '/v1/cart/update',
    //下单
    buy_order:http+'/v1/order/place',
    //获取订单
    order:http+'/v1/order/list',
    //获取地址列表
    address_list:http+'/v1/user/info/address/list',
  }

export  default globalAPI