'use strict';

const replace = require('broccoli-replace');

module.exports = {
  name: require('./package').name,

  included() {
    this._super.included.apply(this, arguments);
    this.app.options.replace = this.app.options.replace || {};

    const defaultOptions = {
      files: [],
      patterns: [],
      enabled: true,
    };

    for (let option in defaultOptions) {
      if (!this.app.options.replace.hasOwnProperty(option)) {
        this.app.options.replace[option] = defaultOptions[option];
      }
    }
  },

  postprocessTree: function (type, tree) {
    if (
      type === 'all' &&
      this.app.options.replace &&
      this.app.options.replace.enabled
    ) {
      tree = replace(tree, this.app.options.replace);
    }

    return tree;
  },
};
