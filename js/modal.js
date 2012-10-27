/////////////////////////////////////////////
//
// MODAL
//
// modal.open({width},{url});
//
//   {width} = width in pixels (num)
//   {url} = file/path to load into modal
//
// modal.close();
//
/////////////////////////////////////////////

var modal = {
    
    init: function(){
        $('body').append('<div id="modal-overlay"></div><div id="modal"><div id="modal-content"></div></div>');
    },
    
    open: function(width,url){
        $('#modal-content')
            .load(url, function () {
            $('#modal')
                .css({
                'width': width,
                'margin-left': '-' + Math.round(width / 2) + 'px',
                'margin-top': $(window).scrollTop()+(Math.round($(window).height()/8))+'px'
            });
            $('#modal,#modal-overlay')
                .fadeIn(300);
        });
    },
    
    close: function(){
        $('#modal,#modal-overlay')
            .fadeOut(300);
    }
    
};

$(function(){ modal.init(); });