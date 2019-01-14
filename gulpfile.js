const { series, parallel, src, dest, watch } = require('gulp')
const sass = require('gulp-sass')
const pug = require('gulp-pug')
const clean = require('gulp-clean')
const image = require('gulp-image')

function cleanTask () {
  return src('dist/*', { read: false })
    .pipe(clean())
}

function pugTask () {
  return src(['src/pug/index.pug', 'src/pug/homepage-standart-01.pug'])
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
      // quiet: true // defaults to false
    }))
    .pipe(dest('dist/img/'))
}

function watchTask () {
  return watch(
    [
      'src/sass/**/*.sass',
      'src/pug/index.pug'
    ],
    series(cleanTask, imageTask, pugTask, sassTask)
  )
}

exports.watch = series(watchTask)
exports.default = series(cleanTask, imageTask, pugTask, sassTask)