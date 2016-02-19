import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';

export default DeviseAuthenticator.extend({
  serverTokenEndpoint: 'https://desolate-falls-11389.herokuapp.com/users/sign_in'
});
