var gulp = require('gulp');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var jshint = require("gulp-jshint");
var concat = require('gulp-concat');
var rs = require('run-sequence');

gulp.task('dev', function() {
    gulp.src('src/to_rule_them_all.js')
        .pipe(jshint())
        .pipe(uglify())
		.pipe(concat('to_rule_them_all.min.js'))
		.pipe(gulp.dest('./src/'));
});

gulp.task('default', function() {

    livereload({start: true});

    connect.server({
        root: 'src/'
    });

    watch(['!src/**/*.min.js', 'src/**/*.js', 'src/**/*.html'], function () {
        rs('dev', livereload.reload);
    });

});

gulp.task('dist', function() {
    gulp.src('src/to_rule_them_all.js')
        .pipe(jshint())
        .pipe(uglify())
		.pipe(concat('to_rule_them_all.min.js'))
		.pipe(gulp.dest('./dist/'));
});
