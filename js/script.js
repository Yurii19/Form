

window.onload = init;

jQuery(document).ready(function($) {

  $(".rslides").responsiveSlides({
  auto: false,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: true,           // Boolean: Show pager, true or false
  nav: true,             // Boolean: Show navigation, true or false
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pause: false,           // Boolean: Pause on hover, true or false
  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
  prevText: "&laquo;",   // String: Text for the "previous" button
  nextText: "&raquo;",       // String: Text for the "next" button
  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "rslides",   // String: Change the default namespace used
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
});

  $('select').stbDropdown();

  $('body>section>form>div>div>ul>li').click( function() {
    while (true){
      let flagNumber = $(this).attr('value');
      let curentFlag = $('.rslides1_on').attr('id');
      let curentId = curentFlag.charAt(curentFlag.length-1);
      if(flagNumber === curentId){
        break;
      }
      $('.next').click();
    }

  });

});

//expression from https://www.regular-expressions.info/email.html
const mailPatern =/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const passPatern = /^\S{8,}$/;
const namePattern = /^\w+$/;

function init(){
  box_email.addEventListener("blur", validateMail);
  sign_up.addEventListener("click", send);
  box_password.addEventListener("blur", validatePassword);
  nameinput.addEventListener("blur", validateName);
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

function validateName(){
  const name = document.getElementById('nameinput').value;
  if (!namePattern.test(name)){
    document.getElementById('nameinput').classList.add('wrong_data');
  }else {
    document.getElementById('nameinput').classList.remove('wrong_data');
  }
  nameinput.addEventListener("input", validateName);
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

const HOUSES = [
{ title: 'House Arryn', emblem: 'arryn.jpg' },
{ title: 'House Baratheon', emblem:'baratheon.jpg' }, 
{ title: 'House Greyjoy', emblem:'greyjoy.jpg' }, 
{ title: 'House Lanister', emblem:'lanister.jpg' }, 
{ title: 'House Stark', emblem:'stark.jpg' }, 
{ title: 'House Targaryen', emblem:'targaryen.jpg' }
];
