// pages/user_college/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parameter: {
      'navbar': '1',
      'return': '1',
      'title': '商学院'
    }
  },

  learning(e) {
    wx.downloadFile({
      // e.target.dataset.name 是文件的地址
      // url: e.target.dataset.name,
      url: 'http://zuoya.heiwangke.net/public/uploads/config/file/5dc6699248bec.pdf',
      success(res) {
        const filePath = res.tempFilePath;
        console.log(filePath)
        wx.openDocument({
          filePath,
          fileType: 'pdf',
          success(res) {
            console.log(res)
          }
        })
      }
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