$(document).ready(function(){
  $("a").click(function(e){
    e.preventDefault();  
  });
  const headerEl = document.querySelector('header');
  const logo = document.querySelector('.main-logo');

  window.addEventListener('scroll', function(){
    if (window.scrollY > 10){
      headerEl.classList.add('bg');
      logo.classList.add('active');
    } else {
      headerEl.classList.remove('bg');
      logo.classList.remove('active');
    }  
  });

  $("nav .depth01 ").mouseover(function(){
    $(".depth02").stop().slideDown(150); 
    $(".nav-bg").stop().slideDown(100);
});
$("header").mouseleave(function(){
  $(".depth02").stop().slideUp();
  $(".nav-bg").stop().slideUp();
});
  
  


  var Swiper01 = new Swiper('.mainSwiper', {
    // Optional parameters
      loop: true,
      autoplayDisableOnInteraction: false,
      slidesPerView: "auto",
      slideActiveClass: "active",
      autoplay: {
          delay: 5000,//animation과 시간 맞춰줘야함
      }, 
      effect: 'fade',
      fadeEffect: {
          crossFade: true
      },
      pagination: {
          el: '.main .swiper-pagination',
          clickable: 'true',
          type: 'bullets',
          renderBullet: function (index, className) {
              return '<span class="' + className + '">' + '<b></b>'  + '</span>';
            },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
    });

    var Swiper02 = new Swiper('.tecSwiper', {
      // Optional parameters
        loop: true,
        autoplayDisableOnInteraction: false,
        slidesPerView: "auto",        
        // autoplay: {
        //     delay: 5000,//animation과 시간 맞춰줘야함
        // }, 
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.tec-pagination',
            clickable: 'true',
            type: 'bullets',
            // renderBullet: function (index, className) {
            //     return '<span class="' + className + '">' + '<b></b>'  + '</span>';
            //   },
        },
        
      });

  $(".bg-box > div").hide();
  $(".bg-box > div:first").show();
  var $tablink = $(".nr-tap ul li ").hover(function(){
    var idx=$tablink.index(this);
    $(".nr-tap ul li").removeClass("active")
    $(".nr-tap ul li").eq(idx).addClass("active");
    $(".bg-box > div").hide();
    $(".bg-box > div").eq(idx).show();
  });

  $('.top').click(function(){
    $('html, body').animate({"scrollTop":0});
  });
  
});


