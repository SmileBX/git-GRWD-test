// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: [
      { id: 1, img_url: "../img/1.jpg" },
      { id: 2, img_url: "../img/2.jpg" },
      { id: 3, img_url: "../img/3.jpg" },
    ],
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://localhost:3000/ilaiyList',
      method: "get",
      success: (result) => {
        //console.log(result.data)
        this.setData({ list: result.data })
      }
    })
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