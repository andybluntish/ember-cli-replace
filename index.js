/* jshint node: true */
'use strict';

var replace = require('broccoli-replace');

module.exports = {
  name: 'ember-cli-replace',
  included: function(app) {
    this.app = app;
    this.options = this.app.options.replace;
  },
  postprocessTree: function (type, tree) {
    var defaults = {
      files: [],
      patterns: []
    };

    tree = replace(tree, this.options || defaults);

    return tree;
  }
};
