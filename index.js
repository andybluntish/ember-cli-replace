/* eslint-env node */
'use strict';

var replace = require('broccoli-replace');

module.exports = {
  name: 'ember-cli-replace',

  included: function(app) {
    this._super.included.apply(this, arguments);
    this.options = app.options.replace || {};

    var defaultOptions = {
      files: [],
      patterns: [],
      enabled: true
    };

    for (var option in defaultOptions) {
      if (!this.options.hasOwnProperty(option)) {
        this.options[option] = defaultOptions[option];
      }
    }
  },

  postprocessTree: function(type, tree) {
    if (type === 'all' && this.options && this.options.enabled) {
      tree = replace(tree, this.options);
    }

    return tree;
  }
};
