/* jshint node: true */
'use strict';

var replace = require('broccoli-replace');

module.exports = {
  name: 'ember-cli-replace',
  included: function(app) {
    this._super.included.apply(this,arguments);
    this.options = app.options.replace;
  },
  postprocessTree: function (type, tree) {
    var options = this.options || {
      files: [],
      patterns: [],
      enabled: true
    };
    if (options !== false && type === 'all') {
      tree = replace(tree, options);
    }

    return tree;
  }
};
