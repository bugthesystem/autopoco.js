var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var watchify = require('watchify');
var babel = require('babelify');


function conf() {
    var opts = {};
    opts.builtins = false;
    opts.entries = ['index.js'];
    opts.standalone = 'autopoco';
    opts.debug = true;
    opts.insertGlobalVars = {
        global: glob
    };

    return opts;
}


function compile(watch) {
    var opts = conf();

    var bundler = watchify(browserify(opts).transform(babel));

    function rebundle() {
        bundler.bundle()
            .on('error', function (err) {
                console.error(err);
                this.emit('end');
            })
            .pipe(source('autopoco.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({
                loadMaps: true
            }))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./dist'));
    }

    if (watch) {
        bundler.on('update', function () {
            console.log('-> bundling...');
            rebundle();
        });
    }

    rebundle();
}

function watch() {
    return compile(true);
}

gulp.task('build', function () {
    return compile();
});

gulp.task('watch', function () {
    return watch();
});

gulp.task('default', ['watch']);


/**
 * Populates `global`.
 *
 * @api private
 */

function glob() {
    return 'typeof self !== "undefined" ? self : ' + 'typeof window !== "undefined" ? window : {}';
}