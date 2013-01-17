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
    
    template: '<div id="modal-overlay"></div>'
            + '<div id="modal">'
                + '<div id="modal-content"></div>'
            + '</div>',
    
    open: function(width,url){
        _this = this;
        $('body').append(_this.template);
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
        // Escape key
        $(document).keydown(function(e){
           var code = e.keyCode ? e.keyCode : e.which;
           if(code==27){
               _this.close();
           }
        });
    },
    
    close: function(){
        $('#modal,#modal-overlay')
            .fadeOut(300,function (){
                $('#modal,#modal-overlay').remove();
            });
    }
    
};