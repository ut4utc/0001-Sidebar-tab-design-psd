var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat');

// extended / compressed
gulp.task('sass', function() {
	return gulp.src(['./app/sass/**/*.scss', './app/sass/**/*.sass'])
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

gulp.task('html', function() {
  return gulp.src('./app/**/*.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('img', function() {
  return gulp.src('./app/img/**/*.*')
    .pipe(gulp.dest('./dist/img'));
});

// watch 
gulp.task('sass:watch', function() {
	gulp.watch(['./app/sass/**/*.sass', 
				'./app/sass/**/*.scss',
				'./app/*.html',
				'./app/img/**/*.*'
				],['sass', 'html', 'img'])
});

gulp.task('default', ['sass', 'scripts', 'sass:watch']);

// for testing 
gulp.task('mytask', function () {
	console.log('gulp runing')
});



