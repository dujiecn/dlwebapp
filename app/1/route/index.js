/**
 * Created by dujie on 15/10/2.
 */
var Router = require('director').Router;
var home = require('../controller/home.js');
var login = require('../../../common/base/service/login.js');

/**
 * 注册路由地址
 */
var routes = {
    '/': home.init
};
window.route = Router(routes).init().configure({
    after: function () {
    },
    before: function () {
    },
    notfound: function () {
        console.error("route not found");
    }
});

/**
 *  每个页面在初始化之前要做的事情，需要判断是否登录
 */
function beforeInitialize() {
    if (!sessionStorage.getItem("USER")) {
        login(function () {
            location.hash = '/';
        });
    } else {
        location.hash = '/';
    }
}

beforeInitialize();