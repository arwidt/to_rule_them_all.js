var gulp = require('gulp');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');

gulp.task('watch', function() {

    livereload({start: true});

    connect.server({
        root: 'src/'
    });

    watch(['src/**/*.js', 'src/**/*.html'], function () {
        livereload.reload();
    });
});
