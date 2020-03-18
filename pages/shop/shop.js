// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    delicacy_ranking:[],
    Quality:[],
    changing_color:1,
    Delicacy_item:[],
    indexs:0,
    Delicacy_Twe:[],
    scollTop:true

  },
  xuan:function(e){
   let _this=this;
    this.data.indexs=e.currentTarget.dataset.idx;
  
   
   if(this.data.Delicacy_item[e.currentTarget.dataset.idx].zhanshis){
    console.log(e.currentTarget.dataset.idx)
    wx.request({
      url: 'https://www.fastmock.site/mock/544fe525f786aa90532109bb02a3e513/Discount/Delicacy_Twe',
      success:res=>{
       this.data.Delicacy_Twe=res.data.Delicacy_Twe
       this.setData({
        Delicacy_Twe:this.data.Delicacy_Twe
       })
      }
    })
   }else{
    this.setData({
      Delicacy_Twe:[]
     })
   }
   this.data.Delicacy_item[e.currentTarget.dataset.idx].zhanshis=!this.data.Delicacy_item[e.currentTarget.dataset.idx].zhanshis;
    this.setData({
      Delicacy_item:this.data.Delicacy_item,
      indexs:this.data.indexs,
      
    })
  },
  changing_color:function(e){
    this.delicacy();
      this.setData({
        changing_color:e.currentTarget.dataset.idx
      })

  },
  delicacy:function(){
    wx.request({
      url: 'https://www.fastmock.site/mock/544fe525f786aa90532109bb02a3e513/Discount/Delicacy_item',
      success:res=>{
        this.setData({
         Delicacy_item:res.data.Delicacy_item
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     wx.request({
       url: 'https://www.fastmock.site/mock/544fe525f786aa90532109bb02a3e513/Discount/delicacy',
       success:res=>{
         var Quality =[
           {
             "title":"必吃榜",
             "number":"43",
             "img":"http://p0.meituan.net/deal/30f6b882d7171f2ce12da048c2c99f48197204.jpg%40340w_192h_1e_1l%7Cwatermark%3D0"
           },
           {
            "title":"网红店榜",
            "number":"118",
            "img":"http://p0.meituan.net/deal/30f6b882d7171f2ce12da048c2c99f48197204.jpg%40340w_192h_1e_1l%7Cwatermark%3D0"
          },
          {
            "title":"黑珍珠",
            "number":"5",
            "img":"http://p0.meituan.net/deal/30f6b882d7171f2ce12da048c2c99f48197204.jpg%40340w_192h_1e_1l%7Cwatermark%3D0"
          }
         ];
        this.setData({
          delicacy_ranking:res.data.delicacy_ranking,
          Quality
        })

       }
     })
   
     this.delicacy();

  },
  onPageScroll:function(e){
     this.setData({
      scollTop:e.scrollTop
     })
     
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})