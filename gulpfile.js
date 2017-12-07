var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat');

// extended / compressed
gulp.task('sass', function() {
	return gulp.src(['./app/sass/**/*.sass', './app/sass/**/*.scss'])
	.pipe(sass({outputStyle: 'extended'}).on('error', sass.logError))
	.pipe(gulp.dest('./app/css'))
		// concat all css files to one
	.pipe(concat('style.css'))
    .pipe(gulp.dest('./dist/css'));

});

gulp.task('scripts', function() {
  return gulp.src('./app/js/*.js')
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./dist/js'));
});


gulp.task('sass:watch', function() {
	gulp.watch(['./app/sass/**/*.sass', './app/sass/**/*.scss'], ['sass'])
});

gulp.task('default', ['sass', 'scripts', 'sass:watch']);


gulp.task('mytask', function () {
	console.log('gulp runing')
});



