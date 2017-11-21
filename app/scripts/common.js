function Header(selector) {
    var h = $(this);

    h.head = $(selector);

    h.changeHeader = function () {
        if ($("html").scrollTop() > 100) {
            h.head.css({
                "background": "rgba(0,0,0, .85)",
                "padding": "10px 0"
            })
        } else {
            h.head.css({
                "background": "transparent",
                "padding": "40px 0"
            })
        }
    };

    h.changeHeader();
    $(window).scroll(h.changeHeader);
}
function TitleSlides(selector) {
    var ts = $(this);

    ts.slides = $(selector);
    ts.slide = ts.slides.find(".title-block-slide");

    ts.changeSlide = function () {
        ts.activeSlide = ts.slides.find(".title-block-slide--active");
        ts.activeSlide.fadeOut(3000);
        ts.activeSlide.removeClass("title-block-slide--active");
        if (ts.activeSlide.next().length !== 0) {
            ts.activeSlide.next().fadeIn(3000);
            ts.activeSlide.next().addClass("title-block-slide--active");
        } else {
            ts.slide.first().fadeIn(3000);
            ts.slide.first().addClass("title-block-slide--active");
        }
    };

    setInterval(ts.changeSlide, 6000);
}
function MobileHeader(selector) {
    var mh = $(this);

    mh.head = $(selector);
    mh.nav = mh.head.find(".mobile-nav");
    mh.openMenuBtn = mh.head.find("#openMenuBtn");
    mh.closeMenuBtn = mh.head.find("#closeMenuBtn");
    mh.status = false;

    mh.toggleNav = function () {
        if (!mh.nav.is(":animated")) {
            if (mh.status) {
                mh.nav.slideUp();
                mh.status = !mh.status;
            } else {
                mh.nav.slideDown();
                mh.status = !mh.status;
            }
        }
    };

    mh.openMenuBtn.click(mh.toggleNav);
    mh.closeMenuBtn.click(mh.toggleNav);
}
function Sequencing(selector) {
    var s = $(this);

    s.sequencing = $(selector);
    s.btn = s.sequencing.find(".how-it-works-description-title__number");
    s.decriptionBlock = s.sequencing.find(".how-it-works-description");
    s.decription = s.decriptionBlock.find(".how-it-works-description__info");

    s.toggleDescription = function () {
        var $btn = $(this);
        var info = $btn.closest(".how-it-works-description");

        if (info.hasClass("how-it-works-description--active")) {
            info.removeClass("how-it-works-description--active")
        } else {
            s.decriptionBlock.removeClass("how-it-works-description--active");
            info.addClass("how-it-works-description--active");
        }
    };

    s.btn.click(s.toggleDescription);

}

$(function () {
    // todo: create js-logic!!!
    var header = new Header(".header"),
        titleSlides = new TitleSlides(".title-block-slides"),
        mobileHeader = new MobileHeader(".header-mobile"),
        howItWorks = new Sequencing(".how-it-works")
    ;

    /*slick slider*/
    $('.design-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
    });

    if ($(window).width() < 761) {
        $('.prices-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    } else {
        $('.prices-slider').slick('unslick');
    }

    if ($(window).width() < 471) {
        $('.mob-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    } else {
        $('.mob-slider').slick('unslick');
    }

});