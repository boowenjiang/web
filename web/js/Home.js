(function() {
  const setting=document.querySelector(`#setting_li`)
  const settingbox=document.querySelector(`#setting_box`)
  setting.addEventListener(`click`,function() {
    settingbox.style.display=`block`
  })
  settingbox.addEventListener(`mouseleave`,function() {
    settingbox.style.display=`none`
  })
})();
(function() {
  const Data=[
    {url:'../img/lunbo/lunbo1.jpg'},
    {url:'../img/lunbo/lunbo2.jpg'},
    {url:'../img/lunbo/lunbo3.jpg'},
    {url:'../img/lunbo/lunbo4.jpg'},
  ]
  const img=document.querySelector(`.pic img`)
  // const li=document.querySelector(`.lis li`)
  const r=document.querySelector('.right')
  const l=document.querySelector('.left')
  // const box=document.querySelector('')
  let i=0
  r.addEventListener(`click`,function() {
    i++
    // console.log(Data[i])
    //
    toggle()
    if(i===3){
      i=-1
    }
  })
  l.addEventListener(`click`,function() {
    if (i === 0) {
      i = 3
    }
    i--
    toggle()
  })
  function toggle() {
    img.src = Data[i].url
    // console.log(11)
    document.querySelector(`.lis .selected`).classList.remove('selected')
    document.querySelector(`.lis li:nth-child(${i + 1})`).
        classList.add(`selected`)
  }

  let a = setInterval(function() {
    r.click()
  }, 1000)
  img.addEventListener('mouseenter', function() {
    clearInterval(a)
  })
  img.addEventListener('mouseleave', function() {
    a = setInterval(function() {
      r.click()
    }, 1000)
  })
})();
(function() {
  var box=document.querySelector('#changyong_yingyong')
  const Data=[
    {url:'../img/yingyong/book.png',name: '图书馆',href:`#`},
    {url:'../img/yingyong/chaxun.png',name:'成绩查询',href:`#`},
    {url:'../img/yingyong/fenxi.png',name:'成绩大数据分析',href:`#`},
    {url:'../img/yingyong/shuxue.png',name:'高数学习平台',href:`#`},
    {url:'../img/yingyong/wangke.png',name:'网络学习平台',href:`#`},
    {url:'../img/yingyong/wuli.png',name:'物理教学平台',href:`#`},
    {url:'../img/yingyong/yingyu.png',name:'大学英语',href:`#`},
    {url:'../img/yingyong/youxiang.png',name:'学生邮箱',href:`#`},
  ]
  function write() {
    var ul=`<ul>`
    for (let i = 0; i < Data.length; i++) {
      ul+=`<li>`+
          `<img src="${Data[i].url}"0>`+
          `<a href="${Data[i].href}">${Data[i].name}</a>`+
          `</li>`
    }
    ul+=`</ul>`
    box.innerHTML=ul
  }
  write()
})();
(function() {
  const hour=document.querySelector(`#hour span`)
  const minute=document.querySelector(`#minute span`)
  const second=document.querySelector(`#second span`)
  const welcome=document.querySelector('#time .welcome')
  function getDate() {
    const date=new Date()
    if(date.getHours()<10){
      hour.innerHTML='0'+date.getHours()
    }
    else{
      hour.innerHTML=date.getHours()
    }
    if(date.getHours()<=6||date.getHours()>=19){
      welcome.innerHTML='晚上好！'
    }
    else if(date.getHours()>6&&date.getHours()<=13){
      welcome.innerHTML='中午好！'
    }
    else{
      welcome.innerHTML='下午好！'
    }
    if(date.getMinutes()<10){
      minute.innerHTML='0'+date.getMinutes()
    }
    else{
      minute.innerHTML=date.getMinutes()
    }
    if(date.getSeconds()<10){
      second.innerHTML='0'+date.getSeconds()
    }
    else{
      second.innerHTML=date.getSeconds()
    }

  }
  getDate()
  setInterval(getDate, 1000)
})();
(function() {
  const uname=document.querySelector("#userinfo a")
  uname.innerHTML=localStorage.getItem("uname")
})();
(function() {
  const data=document.querySelector('#data')
  data.addEventListener('click',function() {
    alert('你没有权限')
  })
})();