var cssLintTree = require('broccoli-csslint');
var filterTree = require('broccoli-filter');

'use strict';

module.exports = {
  name: 'ember-cli-csslint',

  included: function(app) {
    this._super.included(app);

    app.registry.add('css', {
      name: 'ember-cli-csslint',
      ext: 'css',
      toTree: function(tree) {
        var cssFiles = 'app/styles';
        var stylesTree = null;

        cssLintTree(stylesTree, {});
        return tree;
      }
    });
  }
};
