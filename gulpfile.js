
let gulp = require("gulp") ;
let uglify = require("gulp-uglify") ;            //JS的压缩模块
let babel = require("gulp-babel") ;             //ES6的编译模块
let cleanCss = require("gulp-clean-css")  ;    //css的压缩模块
let webserver = require("gulp-webserver") ;   //搭建服务器
let sass = require("gulp-sass") ;            //将scss文件编译成css文件
let watch = require("gulp-watch");

// gulp.task("copy", ()=>{
// 	gulp.src("./src/**/*.*").pipe(gulp.dest("./dist")) ;
// })
// 
// gulp.task("ugly",()=>{
// 	gulp.src("./src/pages/index.js").pipe( uglify() ).pipe(gulp.dest("./dist")) ;
// })

gulp.task("buildJS", ()=>{
	     //  只复制不压缩
		 gulp.src("./src/scripts/libs/*.js").pipe(gulp.dest("./dist/scripts/libs"))
         //  编译压缩复制
		 gulp.src("./src/scripts/*.js")
		.pipe(babel({
            presets: ['env']
        }))
		.pipe( uglify() )
        .pipe(gulp.dest('./dist/scripts'))
		
		gulp.src("./src/pages/*.js")
		.pipe(babel({
			presets: ['env']
		}))
		.pipe( uglify() )
		.pipe(gulp.dest('./dist/pages'))
})

gulp.task("buildHTML", ()=>{
	gulp.src("./src/**/*.html").pipe( gulp.dest("./dist") );
})

gulp.task("buildCSS",()=>{
	gulp.src("./src/styles/libs/*.css")
	.pipe(gulp.dest("./dist/styles/libs")) ;
	
	gulp.src("./src/styles/*.css")
	.pipe( cleanCss() )
	.pipe(gulp.dest("./dist/styles")) ;
	
	gulp.src("./src/styles/*.scss")
	.pipe( sass() ).pipe( cleanCss() )
	.pipe(gulp.dest("./dist/styles")) ;
})

gulp.task("buildIMG", ()=>{
	gulp.src("./src/styles/imgs/*.*")
	.pipe(gulp.dest("./dist/styles/imgs")) ;
})

gulp.task("watch", ()=>{
		gulp.watch("./src/**/*.scss",["buildCSS"]) ;
		gulp.watch("./src/**/*.css",["buildCSS"]) ;
		gulp.watch("./src/**/*.js",["buildJS"]) ;
		gulp.watch("./src/**/*.html",["buildHTML"]);
		gulp.watch("../src/styles/imgs/*.*",["buildIMG"])
})
 
gulp.task('webserver', ["watch"],  function() {
	gulp.src('dist')
		.pipe(webserver({
			livereload: true, //是否支持热部署
			https: true,      //
			proxies : [
				{	
					source: "/listmore" ,
					target: "https://m.lagou.com/listmore.json"
				}
			]
		}));
});

gulp.task("build",["buildJS","buildHTML","buildCSS","buildIMG"])
