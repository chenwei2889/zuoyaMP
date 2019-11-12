// pages/user_add_address/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parameter: {
      'navbar': '1',
      'return': '1',
      'title': '添加地址'
    },
    region: ['省份、', '城市、', '区县'],
      real_name: '',
      phone: '',
      detail: ''
  },

  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    console.log(e)
    this.setData({
      region: e.detail.value
    })
  },

  /*
  * 导入微信地址
  */
  getWxAddress: function () {
    var that = this;
    wx.authorize({
      scope: 'scope.address',
      success: function (res) {
        wx.chooseAddress({
          success: function (res) {
            console.log(res)
            var addressP = [res.provinceName, res.cityName, res.countyName];
            let real_name = res.userName
            let phone = res.telNumber
            let detail = res.detailInfo
            that.setData({
              region: addressP,
              real_name: real_name,
              phone: phone,
              detail: detail
            })
          },
          fail: function (res) {
            if (res.errMsg == 'chooseAddress:cancel') return app.Tips({ title: '取消选择' });
          },
        })
      },
      fail: function (res) {
        console.log(res);
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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