var HighscoreView = Backbone.View.extend({
  el: '#app',
  events: {
  },
  initialize: function() {
  	this.myPlayerCollection = new QuestionCollection();
  	this.myPlayerCollection.fetch({
  		success: function(){this.render()}.bind(this)
  	});
  },
  render: function() {
    this.players = this.myPlayerCollection.toJSON();
    $.get('scripts/templates/playTemplate.hbs', function(data) {
      var template = Handlebars.compile( data );

      this.$el.html( template(this.players) );
    }.bind(this));
  }
});
