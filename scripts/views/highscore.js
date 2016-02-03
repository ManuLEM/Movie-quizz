var HighscoreView = Backbone.View.extend({
  el: '#app',
  events: {
  },
  initialize: function() {
  	this.myPlayerCollection = new PlayerCollection();
  	this.myPlayerCollection.fetch();
    this.render();
  },
  render: function() {
    this.players = this.myPlayerCollection.toJSON();
    this.players.sort(function(a,b){
      if (a.score > b.score) return 0;
      return 1;
    });
    $.get('scripts/templates/highscoreTemplate.hbs', function(data) {
      var template = Handlebars.compile( data );

      this.$el.html( template({players: this.players}) );
    }.bind(this));
  }
});
