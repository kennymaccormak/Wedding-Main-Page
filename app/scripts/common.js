function Header(selector) {
    var h = $(this);

    h.head = $(selector);

    h.changeHeader = function () {
        if ($("html").scrollTop() > 200) {
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
function Login(selector) {
    var l = $(this);

    var loginModuleStatus = false; // false - is close, true - is open

    l.login = $(selector);
    l.showLoginModuleBtn = $("#showLoginModuleBtn");
    l.loginModule = l.login.find(".login-form-module");

    l.showLoginModule = function () {
        if (loginModuleStatus) {
            l.loginModule.fadeOut(300);
            loginModuleStatus = !loginModuleStatus;
        } else {
            l.loginModule.fadeIn(300);
            loginModuleStatus = !loginModuleStatus;
        }
    };

    l.showLoginModuleBtn.click(l.showLoginModule);
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


$(function () {
    // todo: create js-logic!!!
    var login = new Login(".login"),
        header = new Header(".header"),
        titleSlides = new TitleSlides(".title-block-slides")
    ;
});