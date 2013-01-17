require.config({
    // urlArgs: "bust=v"+(new Date().getTime()), // Uncomment to disable caching
    baseUrl: "js",
    paths: {
        jquery:     'libs/jquery.1.9.0.min',
        alerts:     'libs/alerts',
        modal:      'libs/modal'
    },
});

define(['jquery','alerts','modal'], function ($, alerts, modal) {
    
    // Demo Modal
    $('.demo-modal').on('click', function () {
        modal.open(500,'modal-content.html?q='+(new Date().getTime()));
    });
    
    // Demo success alert
    $('.demo-alerts-success').on('click', function () {
        alerts.success('This is a Success Alert!');
    });
    
    // Demo error alert
    $('.demo-alerts-error').on('click', function () {
        alerts.error('This is an Error Alert!');
    });
    
});