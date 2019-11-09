// pages/appointment_servelist/appointment_servelist.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parameter: {
      'navbar': '1',
      'return': '1',
      'title': '选择的服务',
      'class': '2'
    },
    nav: [
      '全部',
      '美甲服务',
      '美睫服务',
      '手部护理',
      '足部护理',
      '净肤服务',
      '瓷雕服务'
    ],
    navH: '',
    currentIndex: 0,
    systemInfo: '',
    moveParams: {
      scrollLeft: 0, // scroll-view滚动的距离,默认为0,因为没有触发滚动
    }
  },

  pagechange: function(e) {
    console.log(e)
    let ele = 'ele' + e.detail.current
    this.setData({
      currentIndex: e.detail.current
    })
    this.getRect('#' + ele);
  },
  //获取点击元素的信息,ele为传入的id
  getRect(ele) {
    var that = this;
    wx.createSelectorQuery().select(ele).boundingClientRect(function (rect) {
      let moveParams = that.data.moveParams;
      moveParams.subLeft = rect.left;
      moveParams.subHalfWidth = rect.width / 2;
      that.moveTo();
    }).exec()
  },
  //用户点击tab时调用
  choseNav: function (e) {
    let that = this
    console.log(e)
    if (this.data.currentIndex === e.currentTarget.dataset.idx) {
      return false
    } else {
      let ele = 'ele' + e.currentTarget.dataset.index
      that.setData({
        //拿到当前索引并动态改变
        currentIndex: e.currentTarget.dataset.index
      })
      this.getRect('#' + ele);
    }
  },

  // 获取滚动距离
  scrollMove(e) {
    let moveParams = this.data.moveParams;
    moveParams.scrollLeft = e.detail.scrollLeft;
    this.setData({
      moveParams: moveParams
    })
  },

  moveTo: function () {
    let subLeft = this.data.moveParams.subLeft;
    let screenHalfWidth = this.data.moveParams.screenHalfWidth;
    let subHalfWidth = this.data.moveParams.subHalfWidth;
    let scrollLeft = this.data.moveParams.scrollLeft;

    let distance = subLeft - screenHalfWidth + subHalfWidth;

    scrollLeft = scrollLeft + distance;

    this.setData({
      scrollLeft: scrollLeft
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //导航高度
    this.setData({
      navH: app.globalData.navHeight
    })
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        let moveParams = that.data.moveParams
        moveParams.screenHalfWidth = res.screenWidth / 2;
        that.setData({
          systemInfo: res
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})