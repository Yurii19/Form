

window.onload = init;

jQuery(document).ready(function($) {
  $('#lightSlider').lightSlider({
    item:1,
    slideMove:1,
    speed:100,
    slideMargin:0,
    loop:false, 
  });

  $('.lSPrev').append('<').css({
    'color': 'white',
    'font-size': '2.5em'
  });
  $('.lSNext').append('>').css({
    'color': 'white',
    'font-size': '2.5em'
  });
  
  for (let i = 0; i < EMBLEMS.length; i++) {
    const flag = '<li><div class="flag-wrapper"><img src="img/'+EMBLEMS[i]+'"></div></li>';
    $('#lightSlider').append(flag);
  }
  $('form').mfs();

  $('body>section>form>div>div>ul>li>a').bind('click', function(event) {
    const flagNumber = $(this).attr('index');
    const widthImg = $('.flag-wrapper').width();
    const disposition = -widthImg*(flagNumber-1);
    if (disposition > 0) disposition = 0;
    $('#lightSlider').css('transform', 'translate3d('+ disposition +'px, 0px, 0px)');
  });

});

//expression from https://www.regular-expressions.info/email.html
const mailPatern =/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const passPatern = /^\S{8,}$/;

function init(){
  box_email.addEventListener("blur", validateMail);
  sign_up.addEventListener("click", send);
  box_password.addEventListener("blur", validatePassword);
}

function send(){
  const email = document.getElementById('box_email').value;
  if (!mailPatern.test(email)){
    document.getElementById('box_email').classList.add('wrong_data');
  }
  const pass = document.getElementById('box_password').value;
  if (!passPatern.test(pass)){
    document.getElementById('box_password').classList.add('wrong_data');
  }
  if (!mailPatern.test(email)||!passPatern.test(pass)) {
    return;
  }
  let before = document.getElementById('section_before');
  let after = document.getElementById('section_after');
  before.classList.add('invisible');
  after.classList.remove('invisible');
}

function validatePassword(){
  const pass = document.getElementById('box_password').value;
  if (!passPatern.test(pass)){
    document.getElementById('box_password').classList.add('wrong_data');
  }else {
    document.getElementById('box_password').classList.remove('wrong_data');
  }
  box_password.addEventListener("input", validatePassword);
}

function validateMail(){
  const mail = document.getElementById('box_email').value;
  if (!mailPatern.test(mail)){
    document.getElementById('box_email').classList.add('wrong_data');
  } else {
    document.getElementById('box_email').classList.remove('wrong_data');
  }
  box_email.addEventListener("input", validateMail);
}

const EMBLEMS = ['arryn.jpg', 'baratheon.jpg', 'greyjoy.jpg', 'lanister.jpg', 'stark.jpg', 'targaryen.jpg'];
