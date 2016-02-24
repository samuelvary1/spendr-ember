import ActiveModelAdapter from 'active-model-adapter';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default ActiveModelAdapter.extend(DataAdapterMixin, {
  namespace: "api/v1",
  host: "https://desolate-falls-11389.herokuapp.com",
  authorizer: "authorizer:devise" 
});
