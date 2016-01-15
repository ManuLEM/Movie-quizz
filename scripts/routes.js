var Router = Backbone.Router.extend({
  routes: {
    '': 'showHome',
    'play': 'showGame',
    'highscores': 'showHighscores'
  },
  showHome: function() {
    this.view = new HomeView();
  },
  showGame: function() {
    this.view = new PlayView();
  },
  showHighscores: function() {
    console.log('highscores');
  }
});