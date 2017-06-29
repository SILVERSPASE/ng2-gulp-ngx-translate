"use strict";

const gulp = require("gulp");
const del = require("del");
const tsc = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const tsProject = tsc.createProject("tsconfig.json");
const tslint = require('gulp-tslint');

const concat = require('gulp-concat');
const sass = require('gulp-sass');
// const tinypng = require('gulp-tinypng-compress');
const autoprefixer = require('gulp-autoprefixer');
// const uglify = require('gulp-uglify');
// const ngmin = require('gulp-ngmin');

var scssSources = [
    // './node_modules/normalize.css/normalize.css',
    // './node_modules/angularjs-slider/dist/rzslider.min.css',
    './src/scss/style.scss',
    './src/app/**/*.scss'
];

/**
 * Remove build directory.
 */
gulp.task('clean', (cb) => {
    return del(["build"], cb);
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () => {
    return gulp.src("src/**/*.ts")
        .pipe(tslint({
            formatter: 'prose'
        }))
        .pipe(tslint.report());
});

/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task("compile", ["tslint"], () => {
    let tsResult = gulp.src("src/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsProject());
    return tsResult.js
        .pipe(sourcemaps.write(".", {sourceRoot: '/src'}))
        .pipe(gulp.dest("../public"));
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", () => {
    return gulp.src(["src/**/*", "!**/*.ts"])
        .pipe(gulp.dest("../public"));
});

gulp.task('scss', function () {
    return gulp.src(scssSources)
        .pipe(concat("style.css"))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 16 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('../public/css/'));
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", () => {
    return gulp.src([
            'core-js/client/shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'rxjs/**/*.js',
            '@ngx-translate/core/bundles/core.umd.js',
            '@ngx-translate/http-loader/bundles/http-loader.umd.js',
            'zone.js/dist/**',
            '@angular/**/bundles/**'
        ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest("../public/lib"));
});

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch', function () {
    gulp.watch(["src/**/*.ts"], ['compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch(["src/**/*.html", "src/**/*.css"], ['resources']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
    gulp.watch(["src/**/*.scss"], ['scss']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
});

/**
 * Build the project.
 */
gulp.task("build", ['compile', 'resources', 'libs', 'scss'], () => {
    console.log("Building the project ...");
});

gulp.task("default", ['build', 'watch'], () => {
    console.log("watching");
});