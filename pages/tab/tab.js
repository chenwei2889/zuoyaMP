// pages/tab/tab.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parameter: {
      'navbar': '1',
      'return': '1',
      'title': '项目详情'
    },
    currentIndex: 0,
    "firstList": ["LXT", "LXT", "LXT", "LXT", "LXT", "LXT"],
    "secondList": ["GFF", "GFF", "GFF", "GFF", "GFF", "GFF", "GFF", "GFF"],
    navH: ''
  },

  //swiper切换时会调用
  pagechange: function(e) {
    console.log(e)
    this.setData({
      currentIndex: e.detail.current
    })
  },
  //用户点击tab时调用
  titleClick: function(e) {
    let that = this
    console.log(e)
    if (this.data.currentIndex === e.currentTarget.dataset.idx){
        return false
    } else{
      that.setData({
        //拿到当前索引并动态改变
        currentIndex: e.currentTarget.dataset.idx
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      navH: app.globalData.navHeight
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