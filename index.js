module.exports = {
  name: 'Ember CLI Simple Auth Cookie Store',

  included: function(app) {
    this._super.included(app);

    this.app.import(app.bowerDirectory + '/ember-simple-auth/simple-auth-cookie-store.amd.js', {
      exports: {
        'simple-auth-cookie-store/stores/cookie': ['default'],
        'simple-auth-cookie-store/initializer':   ['default']
      }
    });
  }
}
