const { series, parallel, src, dest, watch } = require('gulp')
const sass = require('gulp-sass')
const pug = require('gulp-pug')
const clean = require('gulp-clean')

function cleanTask () {
  return src('dist/', { read: false })
    .pipe(clean())
}

function pugTask () {
  return src('src/pug/index.pug')
    .pipe(pug({ pretty: true }))
    .pipe(dest('dist/'))
}

function sassTask () {
  return src('src/sass/**/*.scss')
    .pipe(sass())
    .pipe(dest('dist/css/'))
}

function watchTask () {
  return watch(
    [
      'src/sass/**/*.scss',
      'src/pug/index.pug'
    ],
    // pugTask,
    // sassTask
    series(cleanTask, pugTask, sassTask)
  )
}

exports.watch = series(watchTask)
exports.default = series(cleanTask, pugTask, sassTask)