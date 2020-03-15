// pages/discount/discount.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    discount:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
     
    wx.request({
      url: 'https://www.fastmock.site/mock/544fe525f786aa90532109bb02a3e513/Discount/Discount_item',
      success:res=>{
        console.log(res)
        
        this.setData({
          discount:res.data.Discount_item
        })
        for(var i=0;i<this.data.discount.length;i++){
          this.data.discount[i].present_price=parseInt( this.data.discount[i].discount/10*this.data.discount[i].Or_price);  
        }
        this.setData({
          discount:this.data.discount
        })
      }
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