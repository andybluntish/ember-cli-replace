'use strict';

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const Applause = require('applause');

function getFileList(directory, filePatterns) {
  // expand file globs to absolute paths
  const filePaths = filePatterns.reduce((list, filePattern) => {
    const expandedGlob = glob.sync(filePattern, { cwd: directory });
    return [...list, ...expandedGlob];
  }, []);

  // return a unique list
  return [...new Set(filePaths)];
}

function replaceFileContent(directory, filePath, applause) {
  const fullFilePath = path.join(directory, filePath);

  try {
    const contents = fs.readFileSync(fullFilePath, 'utf8');
    const { content: result } = applause.replace(contents);
    if (result) {
      fs.writeFileSync(fullFilePath, result);
    }
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  name: require('./package').name,

  included() {
    this._super.included.apply(this, arguments);

    const options = this.app.options.replace || {};

    this.app.options.replace = {
      files: ['index.html', '**/*.js'],
      patterns: [],
      enabled: true,
      ...options,
    };
  },

  postBuild({ directory }) {
    const options = this.app.options.replace;

    if (!options.enabled) {
      return;
    }

    // duplicate options and remove non-applause entries
    const applauseOptions = { ...options };
    delete applauseOptions.enabled;
    delete applauseOptions.files;

    const applause = Applause.create(applauseOptions);

    getFileList(directory, options.files).forEach((filePath) => {
      replaceFileContent(directory, filePath, applause);
    });
  },
};
