var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');//js压缩
var watchPath = require('gulp-watch-path');
var combiner = require('stream-combiner2');
var sourcemaps = require('gulp-sourcemaps');
var minifycss = require('gulp-minify-css');//css压缩
var autoprefixer = require('gulp-autoprefixer');
var less = require('gulp-less');
var sass = require('gulp-ruby-sass');
var imagemin = require('gulp-imagemin');
//htmlmin = require('gulp-htmlmin'), //html压缩
//imagemin = require('gulp-imagemin'),//图片压缩

var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');//文件合并
var rename = require('gulp-rename');//文件更名
var notify = require('gulp-notify');//提示信息 notification 每次监听编译完成，就会在右下角提示

var SRC_DIR = './src/**/*.js';
var DIST_DIR = './dist/';

var handleError = function (err) {
    var colors = gutil.colors;
    console.log('\n');
    gutil.log(colors.red('Error!'));
    gutil.log('fileName: ' + colors.red(err.fileName));
    gutil.log('lineNumber: ' + colors.red(err.lineNumber));
    gutil.log('message: ' + err.message);
    gutil.log('plugin: ' + colors.yellow(err.plugin));
};
gulp.task('watchjs', function () {
    gulp.watch('src/js/*.js', function (event) {
        var paths = watchPath(event, 'src/', 'dist/');
        /*
         paths
         { srcPath: 'src/js/index.js',
         srcDir: 'src/js/',
         distPath: 'dist/js/index.js',
         distDir: 'dist/js/',
         srcFilename: 'index.js',
         distFilename: 'index.js' }
         */
        gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath);
        gutil.log('Dist ' + paths.distPath);

        var combined = combiner.obj([
            gulp.src(paths.srcPath),
            sourcemaps.init(),
            uglify(),
            sourcemaps.write('./'),
            gulp.dest(paths.distDir)
        ]);

        combined.on('error', handleError);
    })
});

gulp.task('uglifyjs', function () {
    //src/js里的每个js文件的单个压缩
    var combined = combiner.obj([
        gulp.src('src/js/*.js'),
        sourcemaps.init(),
        uglify(),
        sourcemaps.write('./'),
        gulp.dest('dist/js/'),
        notify({ message: 'js task ok' })
    ]);
    combined.on('error', handleError);
});
gulp.watch('src/js/*.js', ['uglifyjs']);

// 合并、压缩js文件,文件夹里设置 js 的 合并压缩顺序，压缩后得到，合并在一个的、和一个合并压缩后的
// gulp.task('ConcatConfigJs', function() {
//     return gulp.src('src/js/IAMP_backEnd/*.js')
//         .pipe(concat('factoryConfigConcatJs.js'))
//         .pipe(gulp.dest('dist/js/IAMP_backEnd'))
//         .pipe(rename({ suffix: '.min' }))
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js/IAMP_backEnd'))
//         .pipe(notify({ message: 'js task ok' }));
// });
// //设置修改监听，每次修改文件 ctrl+c 保存后，就可监听，完成编译
// gulp.watch('src/js/DATASHOW/*.js', ['ConcatConfigJs']);
//gulp.watch('src/js/IAMP_backEnd/*.js', ['ConcatConfigJs', 'js']);

gulp.task('ConcatIndexJs', function() {
    return gulp.src('src/js/data_show/*.js')
        .pipe(concat('dataShowIndexConcatJs.js'))
        .pipe(gulp.dest('dist/js/data_show'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/data_show'))
        .pipe(notify({ message: 'js task ok' }));
});
gulp.watch('src/js/data_show/*.js', ['ConcatIndexJs']);
// //病虫害 js
// gulp.task('ConcatPlantJs', function() {
//     return gulp.src('src/js/plantIndexJs/*.js')
//         .pipe(concat('plantIndexConcatJs.js'))
//         .pipe(gulp.dest('dist/js/plantIndexJs'))
//         .pipe(rename({ suffix: '.min' }))
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js/plantIndexJs'))
//         .pipe(notify({ message: 'js task ok' }));
// });
//设置修改监听，每次修改文件 ctrl+s 保存后，就可监听，完成编译
// gulp.watch('src/js/plantIndexJs/*.js', ['ConcatPlantJs']);

// 合并、压缩、重命名css
gulp.task('css', function() {
    return gulp.src(['src/css/*.css','dist/css/spritesmith.css','dist/css/indexless.css'])
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'))
        .pipe(notify({ message: 'css task ok' }));
});
gulp.watch(['src/css/*.css','dist/css/spritesmith.css','dist/css/indexless.css'], ['css']);

gulp.task('watchless', function () {
    gulp.watch('src/less/**/*.less', function (event) {
        var paths = watchPath(event, 'src/less/', 'dist/css/');

        gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath);
        gutil.log('Dist ' + paths.distPath);
        var combined = combiner.obj([
            gulp.src(paths.srcPath),
            sourcemaps.init(),
            autoprefixer({
                browsers: 'last 2 versions'
            }),
            less(),
            minifycss(),
            sourcemaps.write('./'),
            gulp.dest(paths.distDir)
        ]);
        combined.on('error', handleError)
    })
});

gulp.task('lesscss', function () {
    var combined = combiner.obj([
        gulp.src('src/less/**/*.less'),
        sourcemaps.init(),
        autoprefixer({
            browsers: 'last 2 versions'
        }),
        less(),
        minifycss(),
        sourcemaps.write('./'),
        gulp.dest('dist/css/')
    ]);
    combined.on('error', handleError)
});

gulp.task('watchimage', function () {
    gulp.watch('src/images/*', function (event) {
        var paths = watchPath(event,'src/','dist/');

        gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath);
        gutil.log('Dist ' + paths.distPath);

        gulp.src(paths.srcPath)
            .pipe(imagemin({
                progressive: true
            }))
            .pipe(gulp.dest(paths.distDir))
    })
});

gulp.task('image', function () {
    gulp.src('src/images/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('dist/images/'))
});

gulp.watch('src/images/spritesmith/*.png', ['image']);   //监听 变化 实时执行任务
/*
* 雪碧图：sprite是把多张图片拼到一张图中，提升性能的一种做法。
* 把合并的图片一次性加载到内存中，需要时只渲染一部分。
  在指定的任务目录下本地安装gulp及插件: npm install gulp.spritesmith --save
* */

var spritesmith = require('gulp.spritesmith');
gulp.task('spritesmith', function () {
    gulp.src('src/images/spritesmith/*.png')   //需要合成图片的文件夹
        .pipe(spritesmith({
            imgName: 'spritesmith.png',   //输出的雪碧图名称
            cssName: 'spritesmith.css',   //输出的雪碧图样式表的名称
            padding: 5,                   //表示合并时每个图片的间距
            algorithm:'binary-tree',  //不写它，默认是 binary-tree 合成图片
            /*
            * 表示合成时的排列方式:
            * 1 top-down 是逐个从上往下合并图片，以每个图片的左边线为连接基线
            * 2 left-right 是逐个从左至右合并图片，以每个图片的上边线为连接基线
            * 3 diagonal 是逐个由左上至右下合并图片，以每个图片的对角线(点)为连线基线
            *   alt-diagonal 与 diagonal 相反
            * 4 binary-tree 是所有图片的紧密连接
            * */
            //cssTemplate: function (data) { //样式模板
            //    var arr=[];
            //    data.sprites.forEach(function (sprite) {
            //        arr.push(".icon-"+sprite.name+
            //            "{" +
            //            "background-image: url('"+sprite.escaped_image+"');"+
            //            "background-position: "+sprite.px.offset_x+"px "+sprite.px.offset_y+"px;"+
            //            "width:"+sprite.px.width+";"+
            //            "height:"+sprite.px.height+";"+
            //            "}\n");
            //    });
            //    return arr.join("");
            //}

            /*
            * {{#sprites}}//模板，直接在JS里面根据路径调用即可，#代表循环   --- 没懂
                 .icon-{{name}}{
                     background-image: url("{{escaped_image}}");
                     background-position: {{px.offset_x}} {{px.offset_y}};
                     width: {{px.width}};
                     height: {{px.height}};
                 }
                 {{/sprites}}
            * */
        }))
        .pipe(gulp.dest('dist/css/'));  //输出的存储路径在css里，然后执行 gulp.task('css'）再合并所有css为一个min.css
});
gulp.watch('src/images/spritesmith/*.png', ['spritesmith']);   //监听 变化 实时执行任务

gulp.task('watchcopy', function () {
    gulp.watch('src/fonts/**/*', function (event) {
        var paths = watchPath(event,'src/', 'dist/');

        gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath);
        gutil.log('Dist ' + paths.distPath);

        gulp.src(paths.srcPath)
            .pipe(gulp.dest(paths.distDir))
    })
});

gulp.task('copy', function () {
    gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts/'))
});

//设置默认任务
gulp.task('default', ['ConcatIndexJs','image','spritesmith','css',
    'watchjs', 'watchless', 'watchimage', 'watchcopy']);
// gulp.task('default', ['ConcatIndexJs','css']);