import Configuration from 'simple-auth-cookie-store/configuration';
import Store from 'simple-auth-cookie-store/stores/cookie';
import ENV from '../config/environment';

export default {
  name:       'simple-auth-cookie-store',
  before:     'simple-auth',
  initialize: function(container, application) {
    Configuration.load(container, ENV['simple-auth-cookie-store'] || {});
    container.register('simple-auth-session-store:cookie', Store);
  }
};
