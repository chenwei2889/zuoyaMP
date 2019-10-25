//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    parameter: {
      'navbar': '1',
      'return': '1',
      'title': '启动日志'
    }
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
