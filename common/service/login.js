/**
 * Created by dujie on 15/10/2.
 */
var request = require('../util/request.js');


module.exports = function (callback) {
    window.getLoginInfo = function (unique, module, method, json) {
        var data = JSON.parse(json);
        if (data == 3)
            return;

        var user = {uid: data.userId, cid: data.consId};
        sessionStorage.setItem('USER', JSON.stringify(user));
        callback && callback(user);
    };

    try {
        //request.client({
        //    version: 1,
        //    errorCb: "getLoginInfo",
        //    successCb: "getLoginInfo",
        //    description: {
        //        unique: 1,
        //        module: 4,
        //        method: 60,
        //        params: ""
        //    }
        //});

        getLoginInfo(null, null, null, '{"userId":111,"consId":222}');

    } catch (e) {
        throw new Error('login failed.');
    }
};

