//Page Object
import datas from '../../data/datas'
Page({
  data: {
    showDetail: false,
    project: datas.datas[1],
    title: '',
    detail: ''
  },
  //options(Object)
  onLoad: function(options) {
    
  },
  showDetail: function(options){
     let title = options.currentTarget.dataset;
     let obj = datas.datas[1].info;
     obj.forEach(element => {
       if(element.index === title.index){
        this.setData({
          showDetail: !this.data.showDetail,
          detail: element.detail,
          title: title
        });
       }
     });

      
  },

  show: function(){
    this.setData({
      showDetail: !this.data.showDetail
    });
  }
});
  