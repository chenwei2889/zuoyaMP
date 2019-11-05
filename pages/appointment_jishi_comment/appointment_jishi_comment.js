// pages/appointment_jishi_comment/appointment_jishi_comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parameter: {
      'navbar': '1',
      'return': '1',
      'title': '全部评论'
    },
    // isFolded: true,
    // currentIndex: 0,
    commentList: [
      {
        isFolded: true,
        content: '评论，针对于事物进行主观或客观的自我印象阐述。评论易让人听到不利于自己的一面，因此评论的话语容易产生对方的逆反心理。但由于可以较快的表达自己的想法及感受，广为被大众所使用，实则是说者过瘾，听者闹心。'
      },
      {
        isFolded: true,
        content: '评论，针对于事物进行主观或客观的自我印象阐述。评论易让人听到不利于自己的一面，因此评论的话语容易产生对方的逆反心理。但由于可以较快的表达自己的想法及感受，广为被大众所使用，实则是说者过瘾，听者闹心。'
      }
    ]
  },
  change: function (e) {
    var that = this;
    var commentList = that.data.commentList;
    var row = commentList[e.currentTarget.dataset.index];
    row.isFolded = !row.isFolded;
    that.setData({
      commentList: commentList
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