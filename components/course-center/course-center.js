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
      article: 'H<sup>2</sup>O',
      showNum:-1,
    html: ["<p class='div_class'>化学世界H<sub>2</sub>O<p>", "<p class='div_class'>化学世界H<sub>3</sub>O<p>"],
  array_list:[{
    title: "人教版高中必修一", imgUrl: "../../assets/img/index/headPhoto.JPG", chapter_lists:[
      { title: "第一章，进入化学世界", chapter: "1" }, { title: "第一章，进入化学世界", chapter: "2" },]
  }, {
      title: "人教版高中必修二", imgUrl: "../../assets/img/index/headPhoto.JPG", chapter_lists: [
        { title: "第一章，出去化学世界", chapter: "1" }, { title: "第一章，进入化学世界", chapter: "2" },]
    }, {
      title: "人教版高中必修三", imgUrl: "../../assets/img/index/headPhoto.JPG", chapter_lists: [
        { title: "第一章，出去化学世界", chapter: "1" }, { title: "第一章，进入化学世界", chapter: "2" },]
    }

  ],
},
  methods:{
        showList:function(event){
          var _this=this;
             
          var index = event.currentTarget.dataset.set
          console.log(index, this.data.showNum);
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
  },
  created:function(){
    var that = this;
    console.log(that.data.article);

  }
})