/* 
 * Gulp Pure Start (GPS) Copyright © 2017, Nikita Mihalyov <nikita.mihalyov@gmail.com>
 * ISC Licensed
 * URL: https://github.com/nmihalyov/gulp-pure-start
 * URL: https://github.com/gulpjs/gulp/blob/master/docs/recipes/running-task-steps-per-folder.md
 * v0.7.1
 */

let source  = './src/',  
    dist    = './dist/',
    pages   = ['home'];

// Return list of folders in the dir
function getFolders(dir) {
    return fs.readdirSync(dir)
        .filter(function(file) {
            return fs.statSync(path.join(dir, file)).isDirectory();
        });
}

const gulp         = require('gulp'),
      sass         = require('gulp-sass'),
      pug          = require('gulp-pug'),
      babel        = require('gulp-babel'),
      sourcemaps   = require('gulp-sourcemaps'),
      concat       = require('gulp-concat'),
      uglify       = require('gulp-uglify'),
      cssnano      = require('gulp-cssnano'),               // CSS minification package
      rename       = require('gulp-rename'),
      autoprefixer = require('gulp-autoprefixer'),
      plumber      = require('gulp-plumber'),               // Prevents the breaking of pipes caused by errors gulp-plugins
      notify       = require('gulp-notify'),                // Displays notifications
      eslint       = require('gulp-eslint'),                // Service Worker Precache
      workbox      = require('workbox-build');              // Workbox-build

var fs = require('fs'),
    path = require('path'),
    merge = require('merge-stream'),
    folders = getFolders(source);

// Development SASS task (with sourcemap)
gulp.task('sass',  () => {
    let tasks = folders.map(function(folder){
        return gulp.src(source + folder + '/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: ':nested'
        }))
        .on('error', notify.onError({
            title: 'SASS',
            message: '<%= error.message %>'
        }))
        .pipe(autoprefixer(['last 15 versions', '> 1%'], {cascade: false}))
        .pipe(cssnano())
        .pipe(rename(folder + '.min.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dist + 'css/'));
    });

    return merge(tasks);
});

// production SASS task (without sourcemap)
gulp.task('_sass',  () => {
    let tasks = folders.map(function(folder){
        return gulp.src(source + folder + '/*.scss')
            .pipe(sass())
            .pipe(autoprefixer(['last 15 versions', '> 1%'], {cascade: false}))
            .pipe(cssnano())
            .pipe(rename(folder + '.min.css'))
            .pipe(gulp.dest(dist + 'css/'));
    });

    return merge(tasks);
});

gulp.task('pug',  () => {
    let tasks = folders.map(function(folder){
        return gulp.src(source + folder + '/*.pug')
            .pipe(pug({
                pretty: true 
            }))
            .on('error', notify.onError({
                title: 'PUG',
                message: '<%= error.message %>' 
            }))
            .pipe(gulp.dest(dist + 'html/'));
    });

    return merge(tasks);
});

// gulp.task('_pug',  () => {
//     let tasks = folders.map(function(folder){
//         return gulp.src(source + folder + '/*.pug')
//             .pipe(pug({
//                 pretty: true
//             }))
//             .on('error', notify.onError({
//                 title: 'PUG',
//                 message: '<%= error.message %>'
//             }))
//             .pipe(gulp.dest(dist + 'html/'));
//     });

//     return merge(tasks);
// });

//JS-Code Linting
gulp.task('eslint', () => {
    return gulp.src([dist + 'js/*.js'])         // all JS files
    .pipe(eslint({
        fix: true,                              // if possible correcting the error
        rules: {
            'no-undef': 0                       // Do not let unlimited variables (such as global and libraries)
        },
        globals: ['$']                          // define global variables (the most common is jQuery)
    }))
    .pipe(eslint.format());                     // Displays ESLint messages to the console
});

gulp.task('scripts',  gulp.series('eslint', () => {
    let tasks = folders.map(function(folder){
        return gulp.src(source + folder + '/*.js')
            .pipe(concat(folder + '.min.js'))
            .pipe(plumber({
                errorHandler: notify.onError({
                    title: 'JS',
                    message: '<%= error.message %>'     //output error message
                })
            }))
            .pipe(sourcemaps.init())                    
            .pipe(babel({
                presets: ['env']
            }))                 // ES6 to ES5
            .pipe(uglify({
				mangle: {
					toplevel: true,
					reserved: [
						'toggleMenu',
                        'downloadAsPic',
                        'localizeAllContents',
                        'changeTheme'
					]
				}
            }))
            .pipe(sourcemaps.write())                   // sourcemap entry
            .pipe(gulp.dest(dist + 'js/'));
    });

    return merge(tasks);
}));

gulp.task('_scripts',  gulp.series('eslint', () => {
    let tasks = folders.map(function(folder){
        return gulp.src(source + folder + '/*.js')
            .pipe(concat(folder + '.min.js'))
            .pipe(babel({
                presets: ['env']
            }))
            .pipe(uglify({
				mangle: {
					toplevel: true,
					reserved: [
						'toggleMenu',
						'downloadAsPic',
                        'localizeAllContents',
                        'changeTheme'
					]
				}
			}))
            .pipe(gulp.dest(dist + 'js/'));
    });

    return merge(tasks);
}));

gulp.task('generate-service-worker', () => {
    return workbox.generateSW({
      globDirectory: dist,
      globPatterns: [
        // '{/html/**/*, /js/**/*, /css/**/*, /assets/**/*}.{html,js,json,css}'
        // '\*\*/\*.{html,js,json,css}'
        '\*\*/\*\*/\*.{html,js,json,css,woff,ttf,svg,eot,jpg}'
      ],
      swDest: dist + 'sw.js', //\`${dist}/sw.js\`,
      clientsClaim: true,
      skipWaiting: true
    }).then(({warnings}) => {
      // In case there are any warnings from workbox-build, log them.
      for (const warning of warnings) {
        console.warn(warning);
      }
      console.info('Service worker generation completed.');
    }).catch((error) => {
      console.warn('Service worker generation failed:', error);
    });
  });

gulp.task('default', gulp.series('sass', 'pug', 'scripts', () => {
    gulp.watch([source + '**/**/*.scss', source + '**/*.scss'], gulp.series('sass'));
    gulp.watch([source + '**/**/*.pug', source + '**/*.pug'], gulp.series('pug'));
    gulp.watch([source + '**/**/*.js', source + '**/*.js'], gulp.series('scripts'));
}));

// Build production
gulp.task('build', gulp.series('_sass', 'pug', '_scripts', 'generate-service-worker'));
