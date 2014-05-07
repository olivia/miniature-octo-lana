import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'miniature-octo-lana', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'miniature-octo-lana');

export default App;
