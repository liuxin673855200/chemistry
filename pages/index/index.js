//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
        indexTitle:[
          { "title": "学习园地", "backgroundColor":"#3388FF","color":"#ffffff"},
          { "title": "最新课程", "backgroundColor":"#3388FF","color":"#ffffff"},
          { "title": "实验中心", "backgroundColor":"#3388FF","color": "#ffffff"},
      {"title":"个人中心","backgroundColor":"#d3d6d8","color":"#000000" }
        ],
        currentTab:0,
        bottomArr:[[
          "../../assets/img/index/7.jpg",
          "../../assets/img/index/4.jpg"
        ],
          [
            "../../assets/img/index/6.jpg",
            "../../assets/img/index/3.jpg"
          ],
          [
            "../../assets/img/index/5.jpg",
            "../../assets/img/index/2.jpg"
          ],
          [
            "../../assets/img/index/8.jpg",
            "../../assets/img/index/1.jpg"
          ]]
  },
  //事件处理函数
  switchTab(e) {
    console.log(e)
    var _this=this;
    this.setData({ currentTab: e.currentTarget.dataset.current },
    ()=>{
      _this.switchTitle(_this.data.currentTab);
    });
  },
  switchTitle(index){
    let _this=this;
    wx.setNavigationBarTitle({
      title: _this.data.indexTitle[index].title,
    });
    console.log(_this.data.indexTitle[index].backgroundColor,index)
    wx.setNavigationBarColor({
      frontColor: _this.data.indexTitle[index].color,
      backgroundColor: _this.data.indexTitle[index].backgroundColor,
      animation:{}
    })
    
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
