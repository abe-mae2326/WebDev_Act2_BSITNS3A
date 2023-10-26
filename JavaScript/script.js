//Javascript of responsive navigation menu 
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", ()=>{
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

// Javascript for video slider navigation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
  btns.forEach((btn) =>{
    btn.classList.remove("active");
  });