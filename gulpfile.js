'use strict'

var fs        = require('fs'),
    gulp      = require('gulp'),
    svgSprite = require('gulp-svg-sprites')

gulp.task('default', function () {
  return gulp.src('svg/*.svg')
              .pipe(svgSprite({
                mode: 'symbols',
                svgId: 'icon-%f',
                svg: {
                  // Puts generated SVG in project root folder
                  // instead of destination folder specified below
                  symbols: '../icons.svg'
                },
                templates: {
                  // Custom SVG template for these reasons:
                  // 1. Force viewBox attribute to default to '0 0 48 48'
                  //    instead of a blank value. Missing viewBox values
                  //    will break rendering in Chrome browsers
                  // 2. Eliminate all whitespace
                  // 3. Future - Accessibility stuff?
                  //    http://css-tricks.com/svg-symbol-good-choice-icons/
                  symbols: fs.readFileSync('./template/symbols.svg', 'utf-8')
                }
              }))
              .pipe(gulp.dest('sample'))
})
