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

define(["jquery"], function ($){

    var alerts = {
    
        alert_hider: null,
        timer: 3000,
        template: '<div id="alert">'
                    + '<a id="alert-close" class="icon-remove-sign"></a>'
                    + '<div id="alert-content"></div>'
                   +'</div>',
        
    
        success: function (m) {
            $('body').append(this.template);
            $('#alert')
                .removeClass()
                .addClass('success');
            $('#alert-content')
                .html(m);
            this.show();
        },
    
        error: function (m) {
            $('body').append(this.template);
            $('#alert')
                .removeClass()
                .addClass('error');
            $('#alert-content')
                .html(m);
            this.show();
        },
    
        show: function () {
            _this = this;
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
            // Timeout
            this.alert_hider = setTimeout(function () {
                _this.hide();
            }, this.timer);
            // Close button
            $('#alert-close').on('click',function () {
                _this.hide();
            });
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
    
    return alerts;
    
});
    
    
