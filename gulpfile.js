
//ES6 is the same as ECMAScript 2015 or es2015
//If you are using import xy from './xy' to request your modules, you are using ES6
//If you are using var xy = require('./xy') to request your modules, you are not using ES6.

var gulp        = require('gulp'); //task manager that can run your code through browserify and babelify when you make changes

var browserify  = require('browserify'); //needed for ability to call require
var babelify    = require('babelify'); //takes ES6 code and compiles it to ES5
var source      = require('vinyl-source-stream'); //Thanks to this Gulp doesn't need to write a temp file between transformations. This is the main advantage gulp has over grunt. It also converts .jsx to .js
var buffer      = require('vinyl-buffer'); //Some gulp- plugins work by taking in buffered vinyl files objects as input. But vinyl-source-stream emits a streaming vinyl file object.
var uglify      = require('gulp-uglify'); //minifying the js files
var del         = require('del'); //useful for cleaning the output folder before making new build

gulp.task('clean:dist', function () {
    return del([
        './dist/'
    ]);
});

gulp.task('build', function () {
    return browserify({entries: './src/Main.js', debug: true})
        .transform("babelify", { presets: ["es2015"] })
        .bundle()
        .pipe(source('Main.js'))
        .pipe(buffer()) //convert from streaming to buffered vinyl file object to prepare it for uglify
        .pipe(uglify()) //minifying
        .pipe(gulp.dest('./dist/'))
});

gulp.task('default', ['clean:dist', 'build']);