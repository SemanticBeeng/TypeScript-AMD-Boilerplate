require.config({
    baseUrl: 'assets/scripts/',
    paths: {
        jquery: './lib/jquery/jquery-1.9.1',
        jqueryClientLog: './lib/jquery.clientSideLogging/jQuery.clientSideLogging.js',
        lodash: './lib/lodash/lodash',
        templates: '../templates',
        data: '../data',
        text: './lib/require/text',
        tpl: './lib/require/tpl',
        json: './lib/require/json',
        hbs: './lib//require-handlebars-plugin/hbs'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        lodash: {
            exports: '_'
        },
        Handlebars: {
            exports: 'Handlebars'
        }
    }
});
