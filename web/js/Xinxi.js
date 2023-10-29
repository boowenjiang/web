(function() {
  const button=document.querySelector('form')
  button.addEventListener(`submit`,function(e) {
    var name = document.querySelector('#name').value;
    var gender = document.querySelector('#gender').value;
    var age = document.querySelector('#age').value;
    var grade = document.querySelector('#grade').value;
    var major = document.querySelector('#major').value;
    var phone = document.querySelector('#phone').value;
    var email = document.querySelector('#email').value;
    var address = document.querySelector('#address').value;
    if(name===null)e.preventDefault();
    if(gender===null)e.preventDefault();
    if(age===null)e.preventDefault();
    if(grade===null)e.preventDefault();
    if(major===null)e.preventDefault();
    if(phone===null)e.preventDefault();
    if(email===null)e.preventDefault();
    if(address===null)e.preventDefault();
    alert('提交成功')
  })
})();