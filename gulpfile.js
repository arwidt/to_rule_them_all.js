var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('watch', function() {
    connect.server({
        root: 'src/',
		port: 3000,
		livereload: true});
});
