/////////////////////////////////////////////
// 
// ALERT
//
// alert.{type}({message});
//
//   {type} = 'success' or 'error'
//   {message} = Output
//
/////////////////////////////////////////////

alert_hider = null;
var alert = {

    timer: 3000,
    
    init: function(){
        _this = this;
        $('body').append('<div id="alert"><a id="alert-close" class="icon">[</a><div id="alert-content"></div></div>');
        $('#alert-close').on('click',function(){ _this.hide(); });
    },

    success: function (m, callback) {
        $('#alert')
            .removeClass()
            .addClass('success');
        $('#alert-content')
            .html(m);
        alert.show();
        if (callback && typeof (callback) === 'function') {
            callback();
        }
    },

    error: function (m, callback) {
        $('#alert')
            .removeClass()
            .addClass('error');
        $('#alert-content')
            .html(m);
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
            .stop()
            .show()
            .animate({
            'top': '0',
            'opacity': 1
        }, 300);
        alert_hider = setTimeout(function () {
            alert.hide();
        }, this.timer);
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