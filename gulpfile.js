var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('hello', function(){
    console.log('Hello, World!');
});

gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('app/css'))
});


// Watching A Sass File For Changes
gulp.watch('app/scss/**/*.scss', ['sass']);

// Watching Multiple Files For Changes
gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
})