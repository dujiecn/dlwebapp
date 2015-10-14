/**
 * Created by dujie on 15/10/2.
 */
//require('../tpl/style/home.less');

function init() {
    var tpl = require('../tpl/list.ejs');
    $(document.body).html(tpl({name:'dd'}));
}


module.exports = {
    init: init
};

