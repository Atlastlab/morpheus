'use strict';

var gulp = require('gulp');
var reload = global.browserSync.reload;
var settings = require('./../app/settings.json');
var proxy = require('http-proxy-middleware');

var api = proxy('/api', {
    target: settings.api,
    changeOrigin: true,
    logLevel: 'debug'
});

var files = proxy('/sites', {
    target: settings.api,
    changeOrigin: true,
    logLevel: 'debug'
});

gulp.task('serve', ['css'], function () {
    global.browserSync.init({
        server: {
            baseDir: global.paths.src,
            middleware: [api, files]
        },
        ghostMode: false
    });

    gulp.watch([global.paths.html, global.paths.js]).on("change", reload);
    gulp.watch([global.paths.scss], ['css'])
});


