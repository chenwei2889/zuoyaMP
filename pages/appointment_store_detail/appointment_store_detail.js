// pages/appointment_store_detail/appointment_store_detail.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parameter: {
      'navbar': '1',
      'return': '1',
      'title': '门店详情'
    },
    store_id: '',
    storeInfo: [],
    photoList: []
  },

  concact() {
    wx.makePhoneCall({
      phoneNumber: '13412341234',
    })
  },

  getStoreDetail: function () {
    var that = this;
    app.baseGet(app.U({
      c: 'appointment_api',
      a: 'get_store_detail',
      q: {
        store_id: this.data.store_id
      }
    }), function (res) {
      console.log(res)
      let storeInfo = res.data
      let images = res.data.images

      that.setData({
        storeInfo: storeInfo,
        photoList: images
      });
    }, function () {

    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      store_id: options.storeid
    });
    this.getStoreDetail()
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