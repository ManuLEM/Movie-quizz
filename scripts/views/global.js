var GlobalView = Backbone.View.extend({
  el: 'body',
  events: {
  },
  initialize: function() {
  	this.router = new Router();
  	Backbone.history.start();
  },
  render: function() {
  }
});
