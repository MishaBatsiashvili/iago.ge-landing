$(function () {
    //
    if (window.location.href.indexOf('geo.html') != -1) {
        $('p,h1,h2,li').css({
            'font-family': 'geo'
        });
        var current;
        for (i = 0; i < $('p').length; i++) {
            current = $('p').eq(i);
            if (current.parent().is('footer')) {
                console.log('found');
                current.css({
                    'font-family': 'sans-serif'
                });
                break;
            }
        }
    }

    //SCROLL DISABLING/ENABLING FUNCTIONS
    function lockScroll() {
        $html = $('html');
        $body = $('body');
        var initWidth = $body.outerWidth();
        var initHeight = $body.outerHeight();

        var scrollPosition = [
            self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
            self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        ];
        $html.data('scroll-position', scrollPosition);
        $html.data('previous-overflow', $html.css('overflow'));
        $html.css('overflow', 'hidden');
        window.scrollTo(scrollPosition[0], scrollPosition[1]);

        var marginR = $body.outerWidth() - initWidth;
        var marginB = $body.outerHeight() - initHeight;
        $body.css({'margin-right': marginR, 'margin-bottom': marginB});
    }

    function unlockScroll() {
        $html = $('html');
        $body = $('body');
        $html.css('overflow', $html.data('previous-overflow'));
        var scrollPosition = $html.data('scroll-position');
        window.scrollTo(scrollPosition[0], scrollPosition[1]);

        $body.css({'margin-right': 0, 'margin-bottom': 0});
    }

    /**************
     NAVIGATION AND NAVIGATION BUTTON
     **************/
    //navigation button src change function
    function navTriggerButton(trigger) {
        if (menuCounter === 0) {
            trigger.velocity({opacity: 0}, {
                duration: 150,
                complete: function () {
                    trigger.attr('src', './styles/images/icons/menu-close.svg');
                }
            });

            trigger.velocity({opacity: 1}, {duration: 150});
        } else {
            trigger.velocity({opacity: 0}, {
                duration: 150,
                complete: function () {
                    trigger.attr('src', './styles/images/icons/menu-open.svg');
                }
            });
            trigger.velocity({opacity: 1}, {duration: 150});
        }
    }

    //navigation appear disappear function
    var menuCounter = 0;

    function navTrigger(menu) {
        if (menuCounter === 0) {
            menu.velocity({opacity: 1}, {display: "flex"}, {duration: 1000});
            //img source change function
            navTriggerButton($('.nav-trigger'));
            menuCounter = 1;
        } else {
            menu.velocity({opacity: 0}, {display: "none"}, {duration: 1000});
            //img source change function
            navTriggerButton($('.nav-trigger'));
            menuCounter = 0;
        }

    }

    $('.nav-trigger').click(function () {
        navTrigger($('.l-nav'), $(this));
    });


    /**************
     HOME SECTION LOGO APPEARENCE ANIMATION
     **************/
    $('.home--logo').velocity({opacity: 1}, {duration: 1000, delay: 500});


    /**************
     SMOOTH SCROLLING
     **************/
    // $("html").easeScroll();


    $('.nav-item').click(function () {
        var navItemIndex = $(this).index();
        $('.l-nav').velocity({opacity: 0}, {display: "none"}, {duration: 1000});
        navTriggerButton($('.nav-trigger'));
        menuCounter = 0;

        $('html, body').stop().animate({
            scrollTop: $('.section').eq(navItemIndex).offset().top - 50
        }, 400);
    });
    /**************
     WINE DDW(detailed description window)
     **************/
    var wine_bottle = $('.wine-img');
    var wine_bottle_exit_btn = $('.exit-btn');
    var bottle = {
        source: '',
        index: '',
        description: [$('.with-skin-contact').text(), $('.without-skin-contact').text()],
        icon: ['DONT FORGET TO REPLACE IT']
    }
    wine_bottle.click(function () {
        bottle.source = $(this).attr('src');
        bottle.index = $(this).index();
        //Scroll disabling
        lockScroll();
        //DDW appear animation
        $('.wine-ddw').velocity({opacity: 1}, {display: "flex"}, {duration: 300}, {
            /* Log all the animated divs. */
            complete: bottle_par_sett()
        });
    });

    wine_bottle_exit_btn.click(function () {
        unlockScroll();
        $('.wine-ddw').velocity({opacity: 0}, {display: "none"}, {duration: 300}, {
            /* Log all the animated divs.
             complete: bottle_par_sett()*/
        });
    });

    function bottle_par_sett() {
        //wine bottle image
        var wine_bootle_img = $('.wine-ddw-bottle-img');
        wine_bootle_img.attr('src', bottle.source);
        //wine description
        var wine_bottle_description = $('.wine-ddw-description');
        wine_bottle_description.text(bottle.description[bottle.index]);
    }

});
