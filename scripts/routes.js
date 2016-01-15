var Router = Backbone.Router.extend({
  routes: {
    '': 'showHome',
    'play': 'showGame'
  },
  showHome: function() {
    this.view = new HomeView();
  },
  showGame: function() {
    console.log('play');
  }
});