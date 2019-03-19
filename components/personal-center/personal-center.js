// components/personal-center/personal-center.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
        isLogin: 1,
        defaultData:{
          nickName:"",
          imgUrl:"../../assets/img/index/headPhoto.JPG",
          name:"",
          phone:"",
        },
        personData:{
          nickName: "淡忘天涯",
          imgUrl: "../../assets/img/index/headPhoto.JPG",
          name: "刘鑫",
          phone: 13515115162,
        }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getUserInfo: function (e) {
      console.log(e)
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    },
    filterNum:function(num){
      var num=num+"s";
        var preNum=num.slice(0,3);
        var nextNum=num.slice(-5,-1);
      return preNum+"****"+nextNum
    }
  },
  created:function(){
    // console.log(this.filterNum(),1)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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

  }
})
