(function() {
  const name=document.querySelector(".text")
  const password=document.querySelector(".password")
  const form=document.querySelector("form")

  form.addEventListener(`submit`,function(e){
    if(name.value!==localStorage.getItem("uname")){
      e.preventDefault()
      alert("用户名错误")
    }
    if(password.value!==localStorage.getItem("upassword")){
      e.preventDefault()
      alert("密码错误")
    }

  })
})();