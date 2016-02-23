import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';

export default DeviseAuthenticator.extend({
 serverTokenEndpoint: 'https://git.heroku.com/desolate-falls-11389.git',
 identificationAttributeName: 'username'
});
