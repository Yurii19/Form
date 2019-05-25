

window.onload = init;

function init(){
  box_email.addEventListener("blur", validateMail);
  sign_up.addEventListener("click", send);
  box_password.addEventListener("blur", inputPassword);
}

function send(){
  var reg =/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  var email = document.sign.box_email.value;
  if (!reg.test(email)){
    alert('Incorrect email.');
    return;
  }
  var pass = document.getElementById('box_password').value;
  var pass_patern = /^\S{8,}$/;
  if (!pass_patern.test(pass)){
    alert('Password to short.');
    return;
  }
  var before = document.getElementById('section_before');
  var after = document.getElementById('section_after');
  before.classList.add('invisible');
  after.classList.remove('invisible');
}

function inputPassword(){
  var pass = document.getElementById('box_password').value;
  var pass_patern = /^\S{8,}$/;
  if (!pass_patern.test(pass)){
    document.getElementById('box_password').classList.add('wrong_data');
  }else {
    document.getElementById('box_password').classList.remove('wrong_data');
  }
  box_password.addEventListener("input", validatePassword);
}

function validatePassword(){
  var pass = document.getElementById('box_password').value;
  var pass_patern = /^\S{8,}$/;
  if (!pass_patern.test(pass)){
    document.getElementById('box_password').classList.add('wrong_data');
  } else {
    document.getElementById('box_password').classList.remove('wrong_data');
  }
}

function validateMailRT(){
  var mail = document.sign.box_email.value;
  var reg =/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if (!reg.test(mail)){
    document.getElementById('box_email').classList.add('wrong_data');
  } else {
    document.getElementById('box_email').classList.remove('wrong_data');
  }
}

function validateMail(){
  var mail = document.getElementById('box_email').value;
  //expression from https://www.regular-expressions.info/email.html
  var reg =/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if (!reg.test(mail)){
    document.getElementById('box_email').classList.add('wrong_data');
  }
  document.getElementById('box_email').oninput = validateMailRT;
}
