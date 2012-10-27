/////////////////////////////////////////////
// ALERT
/////////////////////////////////////////////

alert_hider = null;
var alert = {

    timer: 3000,
    
    init: function(){
        $('body').append('<div id="alert"></div>');  
    },

    success: function (m, callback) {
        $('#alert')
            .html(m)
            .removeClass()
            .addClass('success');
        alert.show();
        if (callback && typeof (callback) === 'function') {
            callback();
        }
    },

    error: function (m, callback) {
        $('#alert')
            .html(m)
            .removeClass()
            .addClass('error');
        alert.show();
        if (callback && typeof (callback) === 'function') {
            callback();
        }
    },

    show: function () {
        clearTimeout(alert_hider);
        var a_height = $('#alert')
            .outerHeight();
        $('#alert')
            .css({
            'top': '-' + a_height + 'px'
        })
            .show()
            .animate({
            'top': '0',
            'opacity': 1
        }, 300);
        alert_hider = setTimeout(function () {
            alert.hide();
        }, 3000);
    },

    hide: function () {
        var a_height = $('#alert')
            .outerHeight();
        $('#alert')
            .animate({
            'top': '-' + a_height + 'px',
            'opacity': 0
        }, 300)
            .fadeOut(300);
    }

};

$(function(){ alert.init(); });