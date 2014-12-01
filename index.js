var cssLintTree = require('broccoli-csslint');
var broccoli = require('broccoli');

'use strict';

module.exports = {
  name: 'ember-cli-csslint',

  included: function(app) {
    this._super.included(app);

    app.registry.add('css', {
      name: 'ember-cli-csslint',
      ext: 'css',

      toTree: function(tree) {
        var cssTree = cssLintTree('app/styles', {});
        var builder = new broccoli.Builder(cssTree);
        builder.build();

        return tree;
      }
    });
  }
};
