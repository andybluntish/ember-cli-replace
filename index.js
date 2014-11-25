'use strict';

var replace = require('broccoli-replace');

function EmberCLIReplace(project) {
  this.project = project;
  this.name = 'Ember CLI Replace';
}

EmberCLIReplace.prototype.included = function included(app) {
  this.app = app;
  this.options = this.app.options.replace;
};

EmberCLIReplace.prototype.postprocessTree = function postprocessTree(type, tree) {
  var defaults = {
    files: [],
    patterns: []
  };

  tree = replace(tree, this.options || defaults);

  return tree;
};

module.exports = EmberCLIReplace;
