/**
 * Created by dujie on 15/10/2.
 */
$.ajaxSetup({
    type: "GET",
    timeout: 60000,
    dataType: "json",
    error: function (jqXHR, textStatus, errorThrown) {
        console.error(textStatus);
    }
});

function ajax(obj) {
    if (!obj.match(/^http:/)) {
        obj.url = 'http://localhost:8080/' + obj.url;
    }
    return $.ajax(obj);
}

function client(obj) {
    setTimeout(function () {
        window.location.href = "native-call?data=" + JSON.stringify(obj);
    }, 500);
}

module.exports = {
    ajax: ajax,
    client: client
};