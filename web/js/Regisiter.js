(function() {
  const button=document.querySelector(".button_content")
  const check=document.querySelector(".checkCode")
  let arr_nub=[`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`]
  button.addEventListener('click',function(){
    let i=5
    let str=``
    for (let j = 0; j < 6; j++) {
      let random=Math.floor(Math.random()*arr_nub.length)
      str+=`${arr_nub[random]}`
    }
    alert("验证码为"+str)
    button.innerHTML=`05秒后重新获取`
    // button.disabled=false
    let timeID=setInterval(function(){
      i--
      button.innerHTML=`0${i}秒后重新获取`
      if(i===0) {
        clearInterval(timeID)
        button.innerHTML = `重新获取`
        // button.returnValue=true
        check.innerHTML = str
      }
    },1000)
  })
  const uname=document.querySelector('#username')
  uname.addEventListener(`change`,verifyName)
  function verifyName(){
    const span=uname.nextElementSibling
// console.log(11)
    const reg=/^[a-zA-Z0-9- ]{6,10}$/
    if(!reg.test(uname.value)){
      span.innerHTML=`输入不合法 请输入6~10位`
      return false
    }
    span.innerHTML=''
    return true
  }

  const password=document.querySelector('#password')
  password.addEventListener(`change`,verifyPassword)
  function verifyPassword(){
    const span=password.nextElementSibling
// console.log(11)
    const reg=/^[a-zA-Z0-9-]{6,20}$/
    if(!reg.test(password.value)){
      span.innerHTML=`输入不合法 请输入正确密码`
      return false
    }
    span.innerHTML=''
    return true
  }

  const repet=document.querySelector('#repet')
  repet.addEventListener(`change`,verifyRepet)
  function verifyRepet(){
    const span=repet.nextElementSibling
// console.log(11)
    const flag=repet.value===password.value
    if(!flag){
      span.innerHTML=`两次输入不同`
      return false
    }
    span.innerHTML=''
    return true
  }
  const phone=document.querySelector('#phone')
  phone.addEventListener(`change`,verifyPhone)
  function verifyPhone(){
    const span=phone.nextElementSibling.nextElementSibling.nextElementSibling
// console.log(11)
    const reg=/^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
    if(!reg.test(phone.value)){
      span.innerHTML=`输入不合法 请输入正确手机号`
      return false
    }
    span.innerHTML=''
    return true
  }
  const code=document.querySelector('#code')
  code.addEventListener(`change`,verifyCode)
  function verifyCode(){
    const span=code.nextElementSibling
    if(!check.innerHTML==code.value){
      span.innerHTML='验证码错误'
      return false
    }
    return true
  }

  const form=document.querySelector(`form`)
  form.addEventListener(`submit`,function(e){
    if(!verifyCode()) e.preventDefault()
    if(!verifyPhone()) e.preventDefault()
    if(!verifyPassword()) e.preventDefault()
    if(!verifyRepet()) e.preventDefault()
    if(!verifyName()) e.preventDefault()
  })
})();
(function() {
  const name=document.querySelector("#username")
  const password=document.querySelector("#password")
  const submit=document.querySelector(".submit")
  submit.addEventListener('click',function() {
    const uname=name.value
    const upassword=password.value
    localStorage.setItem('uname',uname)
    localStorage.setItem('upassword',upassword)
  })
})();