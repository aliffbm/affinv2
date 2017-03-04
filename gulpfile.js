var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task("bundle", function(){
	return browserify({
		entries: "./app/main.jsx",
		debug: true
	}).transform(reactify)
		.bundle()
		.pipe(source("main.js"))
		.pipe(gulp.dest("app/dist"))
});

gulp.task("copy", ["bundle"], function(){
	return gulp.src(["app/index.html", "app/images/*","app/images/svg/*", "app/lib/bootstrap-css/css/bootstrap.min.css", "app/lib/bootstrap-css/css/bootstrap-theme.min.css", "app/style.css", "app/node_modules/jquery/jquery.min.js"])
		.pipe(gulp.dest("app/dist"));

});

gulp.task("default", ["copy"], function(){
	console.log("Gulp Completed");

});