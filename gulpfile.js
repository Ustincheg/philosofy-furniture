'use strict';

var gulp = require('gulp');
var server = require('browser-sync').create();

gulp.task('server', function () {
	server.init({
		server: { baseDir: 'app/', index: 'index.html'},
		notify: false,
		open: true,
		ui: false
	});

	gulp.watch('**/*.html', gulp.series('refresh'));
	gulp.watch('**/*.css', gulp.series('refresh'));
})

gulp.task('refresh', function (done) {
	server.reload();
	done();
})

gulp.task('start', gulp.series('server'));