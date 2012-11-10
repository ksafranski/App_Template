/////////////////////////////////////////////
// CORE REQUIRE
/////////////////////////////////////////////

var scripts = [
    "//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.2/jquery.min.js",
    "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.2/underscore-min.js",
    "//cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min.js",
    '//cdnjs.cloudflare.com/ajax/libs/css3finalize/3.1/jquery.css3finalize.min.js',
    'placeholder',
    'modal',
    'alert'
];

require(scripts, function($) {
    console.log('Loaded');
});