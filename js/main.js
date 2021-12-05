"use strict"

// menu section 

$(document).ready(function(){
    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');

       if($(window).scrollTop() > 30){
         $('.header').css({'background':'#DFEDFE','box-shadow':'0 .2rem .5rem rgba(0,0,0,.1)'});
       }else{
         $('.header').css({'background':'none','box-shadow':'none'});
       }
    });

  });


   // auto scroll

   let section = document.querySelectorAll('section');
   let navLinks = document.querySelectorAll('header .navbar ul li a');
   
   window.onscroll = () =>{
   
     section.forEach(sec =>{
   
       let top = window.scrollY;
       let height = sec.offsetHeight;
       let offset = sec.offsetTop - 200;
       let id = sec.getAttribute('id');
   
       if(top >= offset && top < offset + height){
         navLinks.forEach(links =>{
           links.classList.remove('active');
           document.querySelector('header .navbar ul li a[href*='+id+']').classList.add('active');
         });
       };
   
     });
   
   }