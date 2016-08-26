var gulp = require('gulp');
var tsc = require('gulp-typescript');
var concat = require('gulp-concat');
var browserify = require('browserify');
var tsify = require('tsify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var paths = {
	src: './src',
	dest: './dist'
};

gulp.task('typescript', function() {
	return browserify(paths.src + '/app.ts')
		.plugin(tsify)
		.bundle()
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(gulp.dest(paths.dest));
});

gulp.task('start', ['typescript']);