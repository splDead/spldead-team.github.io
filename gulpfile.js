const gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify');


gulp.task('sass', () => {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers:['>1%']
        }))
        // .pipe(cssmin({keepSpecialComments: 0}))
        .pipe(gulp.dest('./build/css'))
});

gulp.task('image', () => {
    return gulp.src('./src/img/*.{jpg,png,gif}')
        // .pipe(imagemin({progressive: true}))
        .pipe(gulp.dest('./build/img'))
});

gulp.task('js', () => {
    return gulp.src('./src/js/*.js')
        // .pipe(uglify())
        .pipe(gulp.dest('./build/js'))
});

gulp.task('html', () => {
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./build/'))
});

gulp.task('watch', () => {
    gulp.watch('./src/sass/*.scss', gulp.series('sass'));
    gulp.watch('./src/img/*.{jpg,png,gif}', gulp.series('image'));
    gulp.watch('./src/js/*.js', gulp.series('js'));
    gulp.watch('./src/**/*.html', gulp.series('html'));
});