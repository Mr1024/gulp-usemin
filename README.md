# gulp-usemin
Replace references from non-optimized scripts, stylesheets and other assets to their optimized version within a set of HTML files

## Getting Started
This plugin requires Gulp `~3.8.10`

If you haven't used [Gulp](http://gulpjs.com/) before, be sure to check out the [Getting Started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) guide, as it explains how to create a [Gulpfile](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) as well as install and use Gulp plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install gulp-usemin-html --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gulpfile with this line of JavaScript:

```js
var htmlusemin = require('gulp-usemin-html')
```

## The "htmlusemin" task

### Overview
In your project's Gulpfile, add a section.

```js
gulp.task('htmlusemin', function() {
    return gulp.src([basepath + '/source/**/*.html'])
        .pipe(usemin({
            js: {
                suffix: '-min',
                enable: true
            },
            css: {
                suffix: '.min',
                enable: true
            }
        }))
        .pipe(gulp.dest(basepath + '/build/'));
});
```

### Options

#### options.js
Type: `Object`
Default value: `{
                suffix: '.min',
                enable: true
            }`

#### options.css
Type: `Object`
Default value: `{
                suffix: '.min',
                enable: true
            }`


#### options.js.suffix

*replacements* is an array of *from* and *to* replacements. See the
[examples](#usage) above.


### from

*from* is the old text that you'd like replace. It can be a:

- plain string: `'.css'` *matches all instances of '.min.css' in file*
- regular expression object:  `/\.css/g` *same as above*


### to

*to* is the replacement. It can be a:

- plain string
- string containing a [grunt.template][grunt.template]
- string containing regex variables `$1`, `$2`, etc
- combination of the above
- function where the return value will be used as the replacement text (supports
[grunt.template][grunt.template])
- any JavaScript object


#### function
Where *to* is a function, the function receives 4 parameters:

1. **matchedWord**:  the matched word
2. **index**:  an integer representing point where word was found in a text
3. **fullText**:  the full original text
4. **regexMatches**:  an array containing all regex matches, empty if none
defined or found.


```javascript
// Where the original source file text is:  "Hello world"

replacements: [{
  from: /wor(ld)/g,
  to: function (matchedWord, index, fullText, regexMatches) {
    // matchedWord:  "world"
    // index:  6
    // fullText:  "Hello world"
    // regexMatches:  ["ld"]
    return 'planet';   //
  }
}]

// The new text will now be:  "Hello planet"
```

### Usage Examples
