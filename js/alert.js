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

var alert = {

    alert_hider: null,
    timer: 3000,
    template: '<div id="alert">'
                + '<a id="alert-close" onclick="alert.hide();" class="icon-remove-sign"></a>'
                + '<div id="alert-content"></div>'
               +'</div>',
    

    success: function (m, callback) {
        $('body').append(this.template);
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
        $('body').append(this.template);
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
        clearTimeout(this.alert_hider);
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
        this.alert_hider = setTimeout(function () {
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
            .fadeOut(300,function () {
                $('#alert').remove();
            });
    }

};
