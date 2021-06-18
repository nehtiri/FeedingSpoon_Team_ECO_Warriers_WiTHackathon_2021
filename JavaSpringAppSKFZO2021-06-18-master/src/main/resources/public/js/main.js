// Mobile Menu
let nav = document.querySelector("nav"); 
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let logoOne = document.querySelector(".logo");


menuBtn.onclick = function (){
  navBar.classList.add("active");
  menuBtn.style.opacity ="0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
}

cancelBtn.onclick = function (){
  navBar.classList.remove("active");
  menuBtn.style.opacity ="1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
} 

// Side Navigation Bar Close While We click On Navigation Links

let navLinks = document.querySelectorAll(".menu li a");
for(var i = 0; i < navLinks.length; i++){
  navLinks[i].addEventListener("click", function(){
    navBar.classList.remove("active");
    menuBtn.style.opacity ="1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
  })
}


// Scroll Fixed
window.onscroll = function (){
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    logoOne.classList.add("active");
    menuBtn.classList.add("active");
  }else{
    nav.classList.remove("sticky");
    logoOne.classList.remove("active");
    menuBtn.classList.remove("active");
  }

// counter on scroll 
var number = 0;
var oTop = $('#counter').offset().top - window.innerHeight;
if (number == 0 && $(window).scrollTop() > oTop) {
  $('.counter-value').each(function () {
    var $this = $(this),
      countTo = $this.attr('data-count');
    $({
      countNum: $this.text()
    }).animate({
        countNum: countTo
      },

      {

        duration: 2000,
        easing: 'swing',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum); 
        }

      });
  });
}



}

  
   

// silk slider testmonial

$('.testimonials').slick({
  dots: false,
  infinite: true, 
  slidesToShow: 1, 
  slidesToScroll:1,
  autoplay:true,
  cssEase:'linear',
  silde:'li',
  arrows:false,
});

$('#donatebtn').click(function() {
  var fname =  document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  var mobno = document.getElementById('mobno').value;
  var loc =  document.getElementById('location').value;
  var no_of_people = document.getElementById('no_of_people').value;
  var date = document.getElementById('date').value;
  var time = document.getElementById('time').value;
  if(fname==null || fname=="") {
    alert("please fill firstname ")
  }
  else if(lname==null || lname==""){
    alert("please fill lastname ")
  }
  else if(mobno==null || mobno==""){
    alert("please fill mobileno ")
  }
  else if(loc==null || loc==""){
    alert("please fill location ")
  }
  else if(no_of_people==null || no_of_people==""){
    alert("please fill no_of_people ")
  }
  else if(lname==null || lname==""){
    alert("please fill date ")
  }
  else if(lname==null || lname==""){
    alert("please fill time ")
  }
 else{
   alert("thank you we will contact you shortly");
  $('#exampleModal').modal('hide');
 }
  
});

$('#voluteerregbtn').click(function() {
  var fname =  document.getElementById('vfname').value;
  var lname = document.getElementById('vlname').value;
  var mobno = document.getElementById('vmobno').value;
  var add =  document.getElementById('vaddress').value;
  var email = document.getElementById('emailid').value;
  var uid = document.getElementById('vid').value;
  var pwd =  document.getElementById('vpass').value;
  var cpwd = document.getElementById('vcpass').value;
  var loc = document.getElementById('vloc').value;
  var atime = document.getElementById('vavail').value;
  if(fname==null || fname=="") {
    alert("please fill firstname ")
  }
  else if(lname==null || lname==""){
    alert("please fill lastname ")
  }
  else if(mobno==null || mobno==""){
    alert("please fill mobileno ")
  }
  else if(add==null || add==""){
    alert("please fill address ")
  }
  else if(email==null || email==""){
    alert("please fill email ")
  }
  else if(uid==null || uid==""){
    alert("please fill userid ")
  }
  else if(pwd==null || pwd==""){
    alert("please fill password ")
  }
  else if(cpwd==null || cpwd==""){
    alert("please fill confirm password ")
  }
  else if(loc==null || loc==""){
    alert("please fill location ")
  }
  else if(atime==null || atime==""){
    alert("please fill availability ")
  }
 else{
   if(pwd==cpwd){
    alert("thank you");
    $('#signupModal').modal('hide');
   }
   else{
     alert("password and confirm password is not same");
   }
   
 }
  
});

$('#paybtn').click(function() {
  var fname =  document.getElementById('sfname').value;
  var lname = document.getElementById('slname').value;
  var mobno = document.getElementById('smobno').value;
  var amt = document.getElementById('samt').value;
  if(fname==null || fname=="") {
    alert("please fill firstname ")
  }
  else if(lname==null || lname==""){
    alert("please fill lastname ")
  }
  else if(mobno==null || mobno==""){
    alert("please fill mobileno ")
  }
  else if(amt==null || amt==""){
    alert("please fill amount ")
  }
  
 else{
   alert("redirecting to payment gateway");
  $('#sponserModal').modal('hide');
 }
  
}); 

$('#regngobtn').click(function() {
  var fname =  document.getElementById('nname').value;
  var nadd = document.getElementById('nadd').value;
  var mobno = document.getElementById('nmobno').value;
  var regno = document.getElementById('regno').value;
  if(fname==null || fname=="") {
    alert("please fill ngo name ")
  }
  else if(nadd==null || nadd==""){
    alert("please fill address ")
  }
  else if(mobno==null || mobno==""){
    alert("please fill contact no ")
  }
  else if(regno==null || regno==""){
    alert("please fill registration no ")
  }
  
 else{
   alert("thank you");
  $('#ngoModal').modal('hide');
 }
  
});  

$('#hungeralertbtn').click(function() {
  var fname =  document.getElementById('hfname').value;
  var lname = document.getElementById('hlname').value;
  var mobno = document.getElementById('hmobno').value;
  var loc = document.getElementById('hlocation').value;
  var quan =  document.getElementById('quan').value;
  var date = document.getElementById('hdate').value;
  var time = document.getElementById('htime').value;
  var amt = document.getElementById('hlocation').value;
  if(fname==null || fname=="") {
    alert("please fill firstname ")
  }
  else if(lname==null || lname==""){
    alert("please fill lastname ")
  }
  else if(mobno==null || mobno==""){
    alert("please fill mobileno ")
  }
  else if(loc==null || loc==""){
    alert("please fill location ")
  }
  else if(quan==null || quan==""){
    alert("please fill no of people ")
  }
  else if(date==null || date==""){
    alert("please fill date ")
  }
  else if(time==null || time==""){
    alert("please fill time ")
  }
 else{
   alert("thank you we will rech you shortly");
  $('#hungeralertModal').modal('hide');
 }
  
}); 