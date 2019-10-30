// pages/appointment_choose_store/appointment_choose_store.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parameter: {
      'navbar': '1',
      'return': '1',
      'title': '选择门店'
    },
    storeList: [],
    loading: false,
    loadend: false,
    loadtitle: '加载更多',
    page: 1,
    limit: 1,
    key: 0,
    navH: "",
  },

  toStoreDetail() {
    wx.navigateTo({
      url: '../appointment_store_detail/appointment_store_detail',
    })
  },
  selectedStore: function (e) {
    console.log(e)
    this.setData({
      key: e.currentTarget.dataset.index
    })
  },
  // 获取门店列表
  getStoreList: function (isPage) {
    var that = this;
    if (that.data.loading) return;
    if (that.data.loadend) return;
    if (isPage === true) that.setData({ productList: [] });
    that.setData({ loading: true, loadtitle: "" });
    app.baseGet(app.U({ 
      c: 'appointment_api', 
      a: 'get_project_store', 
      q: { page: that.data.page,
          limit: that.data.limit,
          city: '郑州',
          latitude: 34.799,
          longitude: 113.6471 }
    }), function (res) {
      var list = res.data;
      console.log(res)
      var loadend = list.length < that.data.limit;
      that.data.storeList = app.SplitArray(list, that.data.storeList);
      that.setData({
        storeList: that.data.storeList,
        loadend: loadend,
        loading: false,
        loadtitle: loadend ? "哼😕~我也是底线的~" : "加载更多",
        page: that.data.page + 1
      });
        console.log(that.data.storeList)
    }, function () {
      that.setData({ loading: false, loadtitle: '加载更多' });
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getStoreList();
    console.log(this.data.loadtitle)
    this.setData({
      navH: app.globalData.navHeight
    })
    console.log(this.data.navH)
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
    this.setData({ page: 1, loadend: false, productList: [] });
    this.getStoreList();
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.getStoreList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})