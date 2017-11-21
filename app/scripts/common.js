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

$(function () {
    // todo: create js-logic!!!
    var header = new Header(".header"),
        titleSlides = new TitleSlides(".title-block-slides"),
        mobileHeader = new MobileHeader(".header-mobile")
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
});