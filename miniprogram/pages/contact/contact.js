// pages/self/self.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    erweima: ['http://q7jwsdbjc.bkt.clouddn.com/upload/20200402/0042097845c0ff.jpg',
      'http://q7jwsdbjc.bkt.clouddn.com/upload/20200402/0044535119597d.png',
    ],
    show:false,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  wx_click:function(event){
    var index = event.target.dataset.index;
    wx.previewImage({
      current: this.data.erweima[index], // 当前显示图片的http链接
      urls: this.data.erweima // 需要预览的图片http链接列表
    })
  },

    /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})