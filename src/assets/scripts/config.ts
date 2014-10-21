/**
 * Application configuration declaration.
 */
require.config({

    baseUrl: 'assets/scripts/',

    paths: {
        //main libraries
        jquery: './lib/jquery/jquery-1.9.1',
        jqueryClientLog: './lib/jquery.clientSideLogging/jQuery.clientSideLogging.js',
        lodash: './lib/lodash/lodash',

        //shortcut paths
        templates: '../templates',
        data: '../data',

        //require plugins
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