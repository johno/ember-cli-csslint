var csslintTree = require('broccoli-csslint');
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
        return csslintTree('app/styles', {});
      }
    });
  }
};
