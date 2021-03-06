// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:[],
    address:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getUserInfo({
      complete: (res) => {
        this.data.userInfo = res.userInfo;
        this.setData({
          userInfo:this.data.userInfo
        })
      },
    })
   let _this=this;
    wx.getLocation({
      altitude: 'altitude',
      success:function(res){
        console.log(res)
        wx.request({
          url: 'https://apis.map.qq.com/ws/geocoder/v1/?location=',
          data:{
            location:`${res.latitude},${res.longitude}`,
            key:'BSHBZ-QJQK3-D5Q3O-3J4SH-U3RW5-CLBFZ'
          },
          success(address){
            console.log(address)
            _this.setData({
              address:address.data.result.address
            })
          }

        })

      }
    })


  },
  perinfo:function(){
    wx.navigateTo({
      url: '../perInto/perInto',
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

  },
 
  

})