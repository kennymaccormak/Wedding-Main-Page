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

$(function () {
    // todo: create js-logic!!!
    var login = new Login(".login");
});