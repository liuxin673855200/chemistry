// components/course-center/course-center.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  /**
   * 页面的初始数据
   */
  data: {
      showNum:-1
  },
  methods:{
        showList:function(event){
          var _this=this;
              console.log(event);
          var index = event.currentTarget.dataset.set
  
          if(index==this.data.showNum){
            this.setData({
              showNum: -1
            })
          }else{
            this.setData({
              showNum: index
            })
          }  
        },
    handTap:function(){
      console.log(1)
    }
  }
})