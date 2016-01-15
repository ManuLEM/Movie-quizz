var GlobalView = Backbone.View.extend({
  el: 'body',
  events: {
  },
  initialize: function() {
  	this.router = new Router();
  	this.router.history.start();
  },
  render: function() {
  }
});
