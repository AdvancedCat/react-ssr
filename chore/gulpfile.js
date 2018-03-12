var gulp = require('gulp')
var supervisor = require('gulp-supervisor')

gulp.task('supervisor', function(){
    supervisor( "../bin/www", {
        args: [],
        watch: [ "../*.js", "../controllers" ],
        // pollInterval: 500,
        extensions: [ "js" ],
        exec: "node",
        debug: true,
        debugBrk: false,
        harmony: true,
        noRestartOn: false,
        forceWatch: true,
        quiet: false
    } );
})