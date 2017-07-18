var gulp = require('gulp');
var sass = require('gulp-sass');
var filesExist = required("files-exist")

gulp.task('sass', function(){
  return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('public/css'))
});

gulp.task('default', ['sass' ]);
