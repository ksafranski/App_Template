/////////////////////////////////////////////
// LOAD
/////////////////////////////////////////////

window.onload = function(){
    
    // Define scripts
    var scripts = [
        '//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.2/jquery.min.js',
        '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.2/underscore-min.js',
        '//cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min.js',
        '//cdnjs.cloudflare.com/ajax/libs/css3finalize/3.1/jquery.css3finalize.min.js',
        'js/placeholder.js',
        'js/modal.js',
        'js/alert.js'
    ];

    include(scripts,function(){
        alert.success('Loaded!');
    });

};


/////////////////////////////////////////////
// SCRIPT INCLUDE
/////////////////////////////////////////////


function include(array, callback) {
    var loader = function (src, handler) {
        var script = document.createElement("script");
        script.src = src;
        script.onload = script.onreadystatechange = function () {
            script.onreadystatechange = script.onload = null;
            handler();
        };
        var head = document.getElementsByTagName("head")[0];
        (head || document.body).appendChild(script);
    };
    (function () {
        if (array.length !== 0) {
            loader(array.shift(), arguments.callee);
        } else {
            if (callback && typeof (callback) === 'function') {
                callback();
            }
        }
    })();
}