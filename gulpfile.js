const gulp = require( "gulp" )
const gulpSass = require("gulp-sass");
gulp.task ("default", function(){
	return	gulp.src("./styles/**/*.scss")
					.pipe(gulpSass())
					.pipe(gulp.dest("./styles"))
})
gulp.task('watch', function() {
    gulp.watch('styles/**/*.scss', ['default'])
});
