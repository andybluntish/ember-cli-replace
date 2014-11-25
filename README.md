# Ember-cli-replace

Replace text patterns in files. This addon is a thin wrapper around [broccoli-replace](https://github.com/outaTiME/broccoli-replace).


## Installation

    npm install ember-cli-replace --save-dev


## Options

Define the source files that will be used for replacements, and patterns that will be used to replace the contents of source files.

    var app = new EmberApp({
      replace: {
        files: [
          'index.html'
        ],
        patterns: [{
          match: 'foo',
          replacement: 'bar' // replaces "@@foo" to "bar"
        }]
      }
    });

Read more about the options you may pass in on the [broccoli-replace](https://github.com/outaTiME/broccoli-replace) page.
