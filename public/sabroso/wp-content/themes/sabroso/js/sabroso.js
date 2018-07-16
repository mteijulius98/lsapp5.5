(function($) { 
"use strict"; 

    jQuery(document).ready(function ($) {



        $('.sabroso-promo-area > li').hover(

            function() {
                $(this).toggleClass('active');
            }

        );

        if( $('#page').hasClass('full-width-blog') ) {

            $('body').addClass('blog-full-width');

        } else {

            $('body').removeClass('blog-full-width');
        }
   
        // Sticky Menu
        var stickyNavTop = $('.sabroso-main-navigation').offset().top;
         
        var stickyNav = function(){
            var scrollTop = $(window).scrollTop();

            if (scrollTop > 0) { 
                $('.sabroso-nav-wrapper-v3.top-social-bar').addClass('sabroso-sticky');
            } else {
                $('.sabroso-nav-wrapper-v3.top-social-bar').removeClass('sabroso-sticky');
            }

            if (scrollTop > 350) { 
                $('.hide-header-image').addClass('sabroso-sticky');
            } else {
                $('.hide-header-image').removeClass('sabroso-sticky');
            }

            if (scrollTop > 620) { 
                $('.active-header-image').addClass('sabroso-sticky');
            } else {
                $('.active-header-image').removeClass('sabroso-sticky');
            }

        };

        stickyNav();
         
        $(window).scroll(function() {
          stickyNav();
        });

        if( $(".container > div > ul").hasClass("sabroso-masonry") ) {
            
            //Masonry
            var container = document.querySelector('#sabroso-masonry');
            var msnry;
            imagesLoaded( container, function() {
                msnry = new Masonry( container, {
                    itemSelector: '.masonry-entry',
                    gutter: 30
                });
            });
        }

        //Featured slider
        $('.sabroso-classic-slider').slick({
            "fade": false,
            "dots": false,
            "nextArrow": '<span class="arrow-next"></span>',
            "prevArrow": '<span class="arrow-prev"></span>',
            "infinite": true,
            "arrows": true,
            "centerPadding": '20px',
            "autoplay": true,
            "autoplaySpeed": 3000,
            "centerMode": true,
            "slidesToShow": 3,
            "responsive": [{
              "breakpoint": 992,
              "settings": {
                "slidesToShow": 2,
                "centerMode": false,
              }
            }
          ]
        });

        $('.default-slide').slick({
            "dots": false,
            "infinite": true,
            "nextArrow": '<span class="arrow-next"></span>',
            "prevArrow": '<span class="arrow-prev"></span>', 
            "autoplay": true,
            "fade": true,
            "cssEase": 'linear',
            "autoplaySpeed": 3000
        });

        $('.one-slide').slick({
            "dots": false,
            "infinite": true,
            "nextArrow": '<span class="arrow-next"></span>',
            "prevArrow": '<span class="arrow-prev"></span>', 
            "autoplay": true,
            "fade": true,
            "cssEase": 'linear',
            "autoplaySpeed": 3000
        });

        $('.two-slide').slick({
            "dots": false,
            "infinite": true,
            "nextArrow": '<span class="arrow-next"></span>',
            "prevArrow": '<span class="arrow-prev"></span>', 
            "autoplay": true,
            "autoplaySpeed": 3000,
            "slidesToShow": 2,
            "centerMode": true,
            "centerPadding": '',
        });

        $('.three-slide').slick({
            "dots": false,
            "nextArrow": '<span class="arrow-next"></span>',
            "prevArrow": '<span class="arrow-prev"></span>',
            "infinite": true,
            "arrows": true,
            "autoplay": true,
            "autoplaySpeed": 3000,
            "centerMode": false,
            "slidesToShow": 4,
            "responsive": [{
              "breakpoint": 992,
              "settings": {
                "slidesToShow": 2,
                "centerMode": false,
              }
            }
          ]
        });

        //Slider Option for Gallery Post
        $('.post-gallery').addClass('owl-carousel');
        
        if ($('.post-gallery.owl-carousel').length) {
        $('.post-gallery.owl-carousel').owlCarousel({
            items: 1,
            autoplay: true,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            nav: true,
            navText: ["<span class='sabroso-prev'></span>","<span class='sabroso-next'></span>"],
            dots: false,
            loop: true,
            autoHeight:true
            });
        }

        //Slider Option for instagram in win sidebar
         $('.sabroso-win-sidebar .instagram-size-original').addClass('owl-carousel');

        if ($('.sabroso-win-sidebar .instagram-size-original.owl-carousel').length) {
        $('.sabroso-win-sidebar .instagram-size-original.owl-carousel').owlCarousel({
            items: 1,
            autoplay: true,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            nav: true,
            navText: ["<span class='sabroso-prev'></span>","<span class='sabroso-next'></span>"],
            dots: false,
            loop: true
            });
        }

        //Slider Option for instagram in single sidebar
        $('.sabroso-sidebar-area .instagram-size-original').addClass('owl-carousel');

        if ($('.sabroso-sidebar-area .instagram-size-original.owl-carousel').length) {
        $('.sabroso-sidebar-area .instagram-size-original.owl-carousel').owlCarousel({
            items: 1,
            autoplay: true,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            nav: true,
            navText: ["<span class='sabroso-prev'></span>","<span class='sabroso-next'></span>"],
            dots: false,
            loop: true
            });
        }

        //Slider Option for instagram in sidebar
         $('.sabroso-page-sidebar .instagram-size-original').addClass('owl-carousel');

        if ($('.sabroso-page-sidebar .instagram-size-original.owl-carousel').length) {
        $('.sabroso-page-sidebar .instagram-size-original.owl-carousel').owlCarousel({
            items: 1,
            autoplay: true,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            nav: true,
            navText: ["<span class='sabroso-prev'></span>","<span class='sabroso-next'></span>"],
            dots: false,
            loop: true
            });
        }

        //Instagram slider
        $('.sabroso-footer-sidebar-area .instagram-size-original').addClass('owl-carousel');

        if ($('.sabroso-footer-sidebar-area .instagram-size-original.owl-carousel').length) {
            $('.sabroso-footer-sidebar-area .instagram-size-original.owl-carousel').owlCarousel({
                items: 1,
                autoplay: true,
                autoplayHoverPause: true,
                nav: true,
                navText: ["<span class='sabroso-prev'></span>","<span class='sabroso-next'></span>"],
                smartSpeed: 1000,
                margin: 30,
                dots: false,
                loop: true
            });
        }

        //Recent posts slider
        $('.rpwe-ul').addClass('owl-carousel');

        if ($('.rpwe-ul.owl-carousel').length) {
            $('.rpwe-ul.owl-carousel').owlCarousel({
                items: 1,
                autoplay: true,
                autoplayHoverPause: true,
                nav: false,
                navText: ["<span class='sabroso-prev'></span>","<span class='sabroso-next'></span>"],
                smartSpeed: 1200,
                margin: 30,
                dots: true,
                loop: true
            });
        } 
        
        
        //menu
        $('.sabroso-main-navigation .menu-item-has-children').prepend('<span class="menu-icon"></span>');
        $('.sabroso-main-navigation .menu .menu-icon').on('click',null,function() {
            var $submenu = $(this).closest('.menu-item-has-children').find(' > .sub-menu');
            $submenu.slideToggle(500);
        return false;
        });

        /*instagram*/
        var $instagram_items = $('.sabroso-instagram-feed .instagram-pics.instagram-size-original li');
        if ( $instagram_items.length ) {
            var $item_width = parseFloat( 100 / $instagram_items.length ).toFixed(5);
            $instagram_items.css({
                'width': $item_width + '%'
            })
        }

        //open nav search
        $('.nav-search-icon').on('click',null,function() {
            $('body').toggleClass('search-active');
        });

        $('.sabroso-nav-v3-button').on('click',null,function() {
            $('body').toggleClass('active-v3');
        });

        //win sidebar
        $('.site-sidebar').on('click',null,function() {
            $('.sabroso-win-sidebar').toggleClass('active');
            $('body').toggleClass('active-sidebar');
            $('.back-top').toggleClass('active');
        });

        //nav button
        $('.sabroso-nav-button').on('click',null,function() {
            $('.menu').toggleClass('active');
            $('body').toggleClass('active');
        });

        $('.sabroso-background').on('click',null,function() {
            $('body.active').removeClass('active');
            $('body.search-active').removeClass('search-active');
            $('body.active-sidebar').removeClass('active-sidebar');
            $('body').removeClass('active-v3');
            $('.sabroso-win-sidebar.active').removeClass('active');
            $('.menu.active').removeClass('active');
            $('.back-top').removeClass('active');
        });

        $('.site-sidebar').on('click',null,function() {
            $('.menu.active').removeClass('active');
            $('body.active').removeClass('active');
        });

        $('.sabroso-nav-button').on('click',null,function() {
            $('.sabroso-win-sidebar.active').removeClass('active');
            $('body.active-sidebar').removeClass('active-sidebar');
        });

        $('.sabroso-nav-v3-button').on('click',null,function() {
            $('.sabroso-win-sidebar.active').removeClass('active');
            $('body.active-sidebar').removeClass('active-sidebar');
        });

        //close nav search
        $('.site-content').on('click',null,function() {
            $('.nav-search').removeClass('active');
        });

        $('.menu-icon').on('click',null,function() {
            $(this).toggleClass('active');
        });
            
        $(window).scroll(function () {

            var width           = $(window).width();
            var nav             = $('.admin-bar .sabroso-main-navigation');
            var nav_menu        = $('.admin-bar .sabroso-main-navigation .menu');

            var site_sidebar    = $('.admin-bar .sabroso-win-sidebar');
            /* admin bar off */
            var nav_v3_box_2      = $('.sabroso-nav-v3-area');
            var classic_nav_2     = $('.sabroso-classic-nav.top-social-bar .sabroso-main-navigation');
            var classic_sidebar_button_2 = $('.sabroso-classic-nav.top-social-bar .site-sidebar');
            var classic_sidebar_2        = $('.sabroso-classic-nav.top-social-bar .sabroso-win-sidebar');
            /* admin bar on */
            var nav_v3_box  = $('.admin-bar .sabroso-nav-v3-area');
            var classic_nav = $('.admin-bar .sabroso-classic-nav.top-social-bar .sabroso-main-navigation');
            var classic_sidebar_button = $('.admin-bar .sabroso-classic-nav.top-social-bar .site-sidebar');
            var classic_sidebar = $('.admin-bar .sabroso-classic-nav.top-social-bar .sabroso-win-sidebar');
            var nav_v3_sidebar = $('.admin-bar .sabroso-nav-v3 > .sabroso-win-sidebar');

            
                
            if ( $(this).scrollTop() === 0 && width <= 600 ) {
               nav.css({'top': '46px'});
               nav_v3_box.css({'top': '46px'});
               nav_v3_sidebar.css({'top': '46px'});
               nav_menu.css({'top': '102px'});
               site_sidebar.css({'top': '102px'});
            } else if ( $(this).scrollTop() >= 0 && width <= 600 ) {
                nav.css({'top': '0px'});
                nav_v3_sidebar.css({'top': '0px'});
                nav_menu.css({'top': '55px'});
                nav_v3_box.css({'top': '0px'});
                site_sidebar.css({'top': '55px'});
            }

            if ( $(this).scrollTop() === 0 && width >= 769 ) {
               /* admin bar off */
               classic_nav_2.css({'top': '48px'});
               classic_sidebar_button_2.css({'top': '50%'});
               /* admin bar on */
               classic_nav.css({'top': '82px'});
               classic_sidebar_button.css({'top': '50%'});
            } else if ( $(this).scrollTop() >= 0 && width >= 769 ) {
                /* admin bar off */
                classic_nav_2.css({'top': '0px'});
                classic_sidebar_button_2.css({'top': '50%'});
                /* admin bar on */
                classic_nav.css({'top': '32px'});
                classic_sidebar_button.css({'top': '50%'});
            }
        });

        // Search settings

        $('input[name="post_password"]').attr('placeholder', 'Write Password and hit enter');
        $('input[name="user_login"]').attr('placeholder', 'Username or email');
        $('input[name="s"]').attr('placeholder', 'Type and hit enter');
        //fitvids
        $(".post-video").fitVids();

        $(function (){

            $("#back-top").hide();

            $(window).scroll(function (){
                if ($(this).scrollTop() >= 700){
                    $("#back-top").fadeIn();
                } else{
                    $("#back-top").fadeOut();
                }
            });

            $("#back-top").on('click',null,function() {
                $("body,html").animate({
                    scrollTop:0
                }, 800);
                return false;
            });
        });
    });
})(jQuery);