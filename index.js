'use strict';

var csslintTree = require('broccoli-csslint');

module.exports = {
  name: require('./package').name,

  postprocessTree: function(type, tree) {
    if (type === 'all') {
      return csslintTree(tree, {
        csslintrcRoot: this.project.root
      });
    } else {
      return tree;
    }
  }
};
