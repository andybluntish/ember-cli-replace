ember-cli-replace
==============================================================================

[![Build Status](https://travis-ci.org/andybluntish/ember-cli-replace.svg?branch=master)](https://travis-ci.org/andybluntish/ember-cli-replace)
[![Dependency Status](https://david-dm.org/andybluntish/ember-cli-replace.svg)](https://david-dm.org/andybluntish/ember-cli-replace)
[![devDependency Status](https://david-dm.org/andybluntish/ember-cli-replace/dev-status.svg)](https://david-dm.org/andybluntish/ember-cli-replace#info=devDependencies)
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-replace.svg)](http://emberobserver.com/addons/ember-cli-replace)

[Ember CLI](http://www.ember-cli.com/) addon to replace text patterns in files. This is just a thin wrapper around [broccoli-replace](https://github.com/outaTiME/broccoli-replace).


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-cli-replace
```


Usage
------------------------------------------------------------------------------

Define the source files that will be used for replacements, and patterns that will be used to replace the contents of source files.

```js
var app = new EmberApp({
  replace: {
    files: [
      'index.html'
    ],
    patterns: [{
      match: 'foo',
      replacement: 'bar' // replaces "@@foo" to "bar"
    }],
    enabled: true // can be set to false to disable
  }
});
```


## Options

**Note:** The `files` and `patterns` options are passed directly to [broccoli-replace](https://github.com/outaTiME/broccoli-replace). For more information on these options, see [broccoli-replace](https://github.com/outaTiME/broccoli-replace#options).


### Files

Type: `Array`
Default: `[]`

Whitelist of source files to perform replacements in.


### Patterns

Type: `Array`
Default: `[]`

List of patterns used to perform replacements in source files.


### Enabled

Type: `Boolean`
Default: `true`

Enable string replacement during build.


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
