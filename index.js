var path = require('path');
var fs   = require('fs');

function EmberCLISimpleAuthCookieStore(project) {
  this.project = project;
  this.name    = 'Ember CLI Simple Auth Cookie Store';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLISimpleAuthCookieStore.prototype.treeFor = function included(name) {
  var treePath = path.join('node_modules/ember-cli-simple-auth-cookie-store', name + '-addon');

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLISimpleAuthCookieStore.prototype.included = function included(app) {
  this.app = app;

  this.app.import('vendor/ember-simple-auth/simple-auth-cookie-store.amd.js', {
    'simple-auth-cookie-store/stores/cookie': ['default'],
    'simple-auth-cookie-store/ember':         ['default']
  });
};

module.exports = EmberCLISimpleAuthCookieStore;
