# Ember CLI Replace [![Build Status](https://travis-ci.org/andybluntish/ember-cli-replace.svg)](https://travis-ci.org/andybluntish/ember-cli-replace)

[Ember CLI](http://www.ember-cli.com/) addon to replace text patterns in files. This is just a thin wrapper around [broccoli-replace](https://github.com/outaTiME/broccoli-replace).

## Installation

    ember install:addon ember-cli-replace

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
        }],
        enabled: true // can be set to false to disable
      }
    });

Read more about the options you may pass in on the [broccoli-replace](https://github.com/outaTiME/broccoli-replace) page. For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
