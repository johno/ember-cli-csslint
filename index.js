var cssLintTree = require('broccoli-csslint');

'use strict';

module.exports = {
  name: 'ember-cli-csslint',

  included: function(app) {
    this._super.included(app);

    app.registry.add('styles', {
      name: 'ember-cli-csslint',
      ext: 'css',
      toTree: function(tree) {
        return cssLintTree(tree, {});
      }
    });
  }
};
