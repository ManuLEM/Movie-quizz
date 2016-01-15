var HomeView = Backbone.View.extend({
  el: '#app',
  events: {
  },
  initialize: function() {
    this.render();
  },
  render: function() {
    var that = this;
    $.get('scripts/templates/homeTemplate.hbs', function(data) {
      var template = Handlebars.compile( data );

      that.$el.html( template({test:'coucou'}) );
    });
  }
});
