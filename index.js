'use strict';

const replace = require('broccoli-replace');

module.exports = {
  name: require('./package').name,

  included() {
    this._super.included.apply(this, arguments);

    const options = this.app.options.replace || {};
    const defaultOptions = {
      files: [],
      patterns: [],
      enabled: true,
    };

    this.app.options.replace = {
      ...defaultOptions,
      ...options,
    };
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
