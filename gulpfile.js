const { series, parallel, src, dest, watch } = require('gulp')
const sass = require('gulp-sass')
const pug = require('gulp-pug')
const clean = require('gulp-clean')
const image = require('gulp-image')

function cleanTask () {
  return src('dist/', { read: false })
    .pipe(clean())
}

function pugTask () {
  return src([
    'src/pug/index.pug',
    'src/pug/homepage-standart-01.pug',
    'src/pug/homepage-standart-02.pug',
    'src/pug/homepage-standart-03.pug',
    'src/pug/homepage-standart-04.pug',
    'src/pug/homepage-standart-05.pug',
    'src/pug/homepage-standart-06.pug',
    'src/pug/homepage-standart-07.pug',
    'src/pug/homepage-standart-08.pug',
    'src/pug/blog-page-standart.pug',
    'src/pug/blog-post-standart.pug',
  ])
  .pipe(pug({ pretty: true }))
  .pipe(dest('dist/'))
}

function sassTask () {
  return src('src/sass/**/*.sass')
    .pipe(sass())
    .pipe(dest('dist/css/'))
}

function imageTask () {
  return src('src/img/*')
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      jpegRecompress: false,
      mozjpeg: true,
      guetzli: false,
      gifsicle: true,
      svgo: true,
      concurrent: 10,
    }))
    .pipe(dest('dist/img/'))
}

function cssTask () {
  return src('src/css/**/*.css')
    .pipe(dest('dist/css/'))
}

function jsTask () {
  return src('src/js/**/*.js')
    .pipe(dest('dist/js/'))
}

function watchTask () {
  return watch(
    [
      'src/sass/**/*.sass',
      'src/pug/index.pug'
    ],
    series(cleanTask, imageTask, pugTask, sassTask, jsTask, cssTask)
  )
}

exports.watch = series(watchTask)
exports.default = series(cleanTask, imageTask, pugTask, sassTask, jsTask, cssTask)