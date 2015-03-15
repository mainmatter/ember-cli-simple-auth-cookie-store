module.exports = {
  name: 'Ember CLI Simple Auth Cookie Store',

  included: function(app) {
    app.import(app.bowerDirectory + '/ember-simple-auth/simple-auth-cookie-store.amd.js', {
      exports: {
        'simple-auth-cookie-store/stores/cookie': ['default'],
        'simple-auth-cookie-store/configuration': ['default']
      }
    });
  }
}
