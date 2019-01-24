# ember-cli-replace

[![Build Status](https://travis-ci.org/andybluntish/ember-cli-replace.svg?branch=master)](https://travis-ci.org/andybluntish/ember-cli-replace)
[![Dependency Status](https://david-dm.org/andybluntish/ember-cli-replace.svg)](https://david-dm.org/andybluntish/ember-cli-replace)
[![devDependency Status](https://david-dm.org/andybluntish/ember-cli-replace/dev-status.svg)](https://david-dm.org/andybluntish/ember-cli-replace#info=devDependencies)
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-replace.svg)](http://emberobserver.com/addons/ember-cli-replace)

[Ember CLI](http://www.ember-cli.com/) addon to replace text patterns in files. This is just a thin wrapper around [broccoli-replace](https://github.com/outaTiME/broccoli-replace).

## Installation

```js
ember install ember-cli-replace
```

## Options

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

## Troubleshooting

You must have phantomjs installed in your system for the tests to run.

    npm install -g phantomjs

Read more about the options you may pass in on the [broccoli-replace](https://github.com/outaTiME/broccoli-replace) page. For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
