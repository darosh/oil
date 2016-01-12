var gulp = require('gulp');
var typedoc = require('gulp-typedoc');

gulp.task('doc', function () {
    return gulp
        .src(['lib/index.ts'])
        .pipe(typedoc({
            module: 'commonjs',
            target: 'es5',
            includeDeclarations: true,
            out: './build/doc',
            name: 'oil',
            readme: 'none',
            ignoreCompilerErrors: false,
            version: false
        }));
});
