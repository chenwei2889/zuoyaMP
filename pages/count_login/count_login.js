// pages/count_login/count_login.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parameter: {
      'navbar': '1',
      'return': '1',
      'title': '账号登录'
    },
    phoneNumber: ''
  },

  getUserInfo(e){
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo
    })
  },

  getPhoneNumber: function (e) {
    console.log(e)
    var detail = e.detail, cache_key = wx.getStorageSync('cache_key'), that = this;
    if (detail.errMsg == 'getPhoneNumber:ok') {
      if (!cache_key) {
        app.globalData.token = '';
        app.globalData.isLog = false;
        return false;
      }
      app.basePost(app.U({ c: 'login', a: 'bind_mobile' }), {
        iv: detail.iv,
        cache_key: cache_key,
        encryptedData: detail.encryptedData
      }, function (res) {
        console.log(res)
        let phoneNumber= res.data.phoneNumber;
        that.setData({ phoneNumber: phoneNumber });
        wx.navigateTo({
          url: '/pages/verifycode_login/verifycode_login?phone=' + phoneNumber
        })
      }, function (res) {
        console.log(res)
      });
    } else {
      app.Tips({ title: '取消授权' });
    }
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