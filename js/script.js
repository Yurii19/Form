

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

  $('.option_select').click( function() {
    const curentOption =  $(this).attr('value');
    const curentSlide = $('.rslides1_on').attr('id');
    let curentId = curentSlide.charAt(curentSlide.length - 1);

    while (curentOption != curentId) {
     $('.next').click();
     let nextSlide = $('.rslides1_on').attr('id');
     curentId = nextSlide.charAt(nextSlide.length - 1);
   }
 });

});

//expression from https://www.regular-expressions.info/email.html
const mailPatern =/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const passPatern = /^\S{8,}$/;
const namePattern = /^\w+$/;

function init(){

  const userMail = document.getElementById('box_email');
  if (userMail) {
    userMail.addEventListener('blur', validateMail);
  }
  
  const signUp = document.getElementById('sign_up');
  if (signUp) {
    signUp.addEventListener('click', send);
  }
  
  const userPassword = document.getElementById('box_password');
  if (userPassword) {
     userPassword.addEventListener('blur', validatePassword);
  }
 
  const userName = document.getElementById('nameinput');
  if (userName) {
  userName.addEventListener('blur', validateName);   
  }
  // userName.addEventListener('blur', validateName);



function send() {
  const email = userMail.value;
  if (!mailPatern.test(email)){
    userMail.classList.add('wrong_data');
  }
  const pass = userPassword.value;
  if (!passPatern.test(pass)){
    userPassword.classList.add('wrong_data');
  }
  if (!mailPatern.test(email)||!passPatern.test(pass)) {
    return;
  }
  // document.getElementById('sign-up-section').classList.add('invisible');
  // document.getElementById('section-users-data').classList.remove('invisible');
}

function validateName() {
  const name = userName.value;
  if (!namePattern.test(name)){
    userName.classList.add('wrong_data');
  } else {
    userName.classList.remove('wrong_data');
  }
  userName.addEventListener('input', validateName);
}

function validatePassword() {
  const pass = userPassword.value;
  if (!passPatern.test(pass)) {
    userPassword.classList.add('wrong_data');
  } else {
    userPassword.classList.remove('wrong_data');
  }
  userPassword.addEventListener('input', validatePassword);
}

function validateMail(){
  const mail = userMail.value;
  if (!mailPatern.test(mail)) {
    userMail.classList.add('wrong_data');
  } else {
    userMail.classList.remove('wrong_data');
  }
  userMail.addEventListener('input', validateMail);
}


const HOUSES = [
{ 
  title: 'House Arryn', emblem: 'arryn.jpg' 
},
{ 
  title: 'House Baratheon', emblem:'baratheon.jpg' 
}, 
{
 title: 'House Greyjoy', emblem:'greyjoy.jpg' 
}, 
{ 
  title: 'House Lanister', emblem:'lanister.jpg'
}, 
{ 
  title: 'House Stark', emblem:'stark.jpg' 
}, 
{
 title: 'House Targaryen', emblem:'targaryen.jpg'
}
];
}