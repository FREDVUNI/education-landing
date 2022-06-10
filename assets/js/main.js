!(function($) {
    "use strict";
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
      } else {
        $('#header').removeClass('header-scrolled');
        }
      });
  
      if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
      }
        $("#header").sticky({
        topSpacing: 0,
        zIndex: '50'
      });
    
      var typed = new Typed(".js-text-animation", {
        strings: ["startup.", "future.", "success."],
        typeSpeed: 90,
        loop: true,
        backSpeed: 30,
        backDelay: 2500
      });
      var setRecentNewsCarousel = function() {
        if(!checkSelectorExistence('.recent-news-carousel')){return;}
        jQuery('.recent-news-carousel').owlCarousel({
          loop:true,
          autoplay:true,
          margin:30,
          nav:false,
          dots:true,
          navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
          responsive:{
            0:{
              items:1
            },
            480:{
              items:2
            },			
            1024:{
              items:3
            },
            1200:{
              items:3
            }
          }
        });
      }
      $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
      if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
      }
    
      // Stick the header at top on scroll
      $("#header").sticky({
        topSpacing: 0,
        zIndex: '50'
      });
    
      // Smooth scroll for the navigation menu and links with .scrollto classes
      $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          e.preventDefault();
          var target = $(this.hash);
          if (target.length) {
    
            var scrollto = target.offset().top;
            var scrolled = 2;
    
            if ($('#header-sticky-wrapper').length) {
              scrollto -= $('#header-sticky-wrapper').outerHeight() - scrolled;
            }
    
            if ($(this).attr("href") == '#header') {
              scrollto = 0;
            }
    
            $('html, body').animate({
              scrollTop: scrollto
            }, 1500, 'easeInOutExpo');
    
            if ($(this).parents('.nav-menu, .mobile-nav').length) {
              $('.nav-menu .active, .mobile-nav .active').removeClass('active');
              $(this).closest('li').addClass('active');
            }
    
            if ($('body').hasClass('mobile-nav-active')) {
              $('body').removeClass('mobile-nav-active');
              $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
              $('.mobile-nav-overly').fadeOut();
            }
            return false;
          }
        }
      });
    
      // Mobile Navigation
      if ($('.nav-menu').length) {
        var $mobile_nav = $('.nav-menu').clone().prop({
          class: 'mobile-nav d-lg-none'
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
        $('body').append('<div class="mobile-nav-overly"></div>');
    
        $(document).on('click', '.mobile-nav-toggle', function(e) {
          $('body').toggleClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').toggle();
        });
    
        $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
          e.preventDefault();
          $(this).next().slideToggle(300);
          $(this).parent().toggleClass('active');
        });
    
        $(document).click(function(e) {
          var container = $(".mobile-nav, .mobile-nav-toggle");
          if (!container.is(e.target) && container.has(e.target).length === 0) {
            if ($('body').hasClass('mobile-nav-active')) {
              $('body').removeClass('mobile-nav-active');
              $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
              $('.mobile-nav-overly').fadeOut();
            }
          }
        });
      } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();
      }
      var megaMenu = new HSMegaMenu($('.js-mega-menu'), {
        desktop: {
          position: 'left'
        }
      }).init();
      $('.js-go-to').each(function () {
        var goTo = new HSGoTo($(this)).init();
      });
})(jQuery);