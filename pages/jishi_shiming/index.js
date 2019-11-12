// pages/jishi_shiming/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parameter: {
      'navbar': '1',
      'return': '1',
      'title': '实名认证',
      'class': '2'
    },
    arraySex: ['男', '女'],
    arraySheng: ['是', '否'],
    arrayHun: ['是', '否'],
    indexSex: 0,
    indexSheng: 0,
    indexHun: 0,
    date: '2017-09-05',
    cardShow: false,
    payShow: false,
    cardName: '',
    payName: ''
  },

  // 蒙版选择
  card(e) {
    console.log(e)
    this.setData({
      cardName:e.currentTarget.dataset.name,
      cardShow: false
    })
  },
  pay(e) {
    console.log(e)
    this.setData({
      payName: e.currentTarget.dataset.name,
      payShow: false
    })
  },

  cardStatus() {
    this.setData({
      cardShow: true
    });
  },
  payStatus() {
    this.setData({ payShow: true });
  },
  onClose() {
    this.setData({ cardShow: false });
    this.setData({ payShow: false });
  },

  // 日期picker
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  // 性别picker
  bindSexChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      indexSex: e.detail.value
    })
  },

  // 生育picker
  bindShengChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      indexSheng: e.detail.value
    })
  },

  // 婚配picker
  bindHunChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      indexHun: e.detail.value
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