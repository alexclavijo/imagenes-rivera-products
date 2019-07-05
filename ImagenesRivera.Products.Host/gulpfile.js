var gulp = require('gulp');
var concat = require('gulp-concat');
var minify  = require('gulp-uglify');
var runSequence = require('run-sequence');
var replace = require('gulp-replace');
var sass = require('gulp-sass');

var styles = {
 'home': ['lib/home/scss/index.scss'],
 'album': ['lib/album/scss/index.scss']
};

var jsScripts = {
  'album': [
    //'lib/album/js/vendor/map.js',
    //'lib/album/js/vendor/jquery.min.js',
    'lib/album/js/vendor/jquery.bookblock.min.js',
    'lib/album/js/vendor/imagesloaded.pkgd.min.js',
    'lib/album/js/vendor/isotope.pkgd.min.js',
    'lib/album/js/vendor/jquery.magnific-popup.min.js',
    'lib/album/js/vendor/jquery.slimscroll.min.js',
    'lib/album/js/vendor/jquery.scrollTo.min.js',
    'lib/album/js/vendor/jquery.localScroll.min.js',
    'lib/album/js/vendor/jquerypp.custom.js'
  ]
};

var stylesTask = Object.keys(styles);
stylesTask.forEach(function (bundle) {
  gulp.task('bundle-css-' + bundle, function () {
   // var cssImgFolderPath = bundle === 'home' ? '/assets/home/img/' : '/assets/album/img/';
    return gulp.src(styles[bundle])
        //.pipe(replace('../img/', cssImgFolderPath))
        .pipe(concat(bundle + '.styles.min.css'))
        .pipe(sass({outputStyle: 'compressed'}))
        // .pipe(sass())
        .pipe(gulp.dest('src/assets/' + bundle + '/css'));
  });
});

var scriptsTask = Object.keys(jsScripts);
scriptsTask.forEach(function (bundle) {
  gulp.task('bundle-scripts-' + bundle, function () {
    return gulp.src(jsScripts[bundle])
        .pipe(concat(bundle + '.scripts.min.js'))
        .pipe(minify())
        .pipe(gulp.dest('src/assets/' + bundle + '/js'));
  });
});


gulp.task('build-lib-bundles', function() {
  runSequence('bundle-css-album','bundle-scripts-album');
})






