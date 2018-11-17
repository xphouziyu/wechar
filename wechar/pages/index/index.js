//index.js
//获取应用实例
Page({
  data:{
    inputVal:'',
    mcgData:[]
  },
  changeInputVal(ev) {
    this.setData({
      inputVal: ev.detail.value
    });
  },
  delMcg(ev){
    var n = ev.target.dataset.index
    // console.log(ev.target.dataset.index)
    var list = this.data.mcgData
    list.splice(n,1)
    this.setData({
      mcgData: list
    })
  },

  addMcg(){
    // this.data.mcgData.push({
    //   mcg:this.data.inputVal
    // })
    var list=this.data.mcgData
    list.push({
      mcg:this.data.inputVal
    })
    this.setData({
      mcgData:list ,
      inputVal: ''
    })
    
  },
})