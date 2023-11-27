const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

function css(done){
    src('src/scss/**/*.scss') // Identificar el archivo .scss a compilar
        .pipe(sourcemaps.init()) // Ayuda a buscar entre los archivos scss
        .pipe(plumber()) // Evita detener el work-flow cuando se detecta un error
        .pipe(sass()) // Compilarlo
        .pipe(postcss([autoprefixer(), cssnano()])) // Minificar css
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/css')) // Almacenarlo en el disco duro

    done();
}

function dev(done){
    watch('src/scss/**/*.scss', css);

    done();
}

exports.css = css;
exports.dev = dev;