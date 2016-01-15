var PlayView = Backbone.View.extend({
  el: '#app',
  events: {
  },
  initialize: function() {
  	var that = this;
  	this.myQuestionCollection = new QuestionCollection();
  	this.myQuestionCollection.fetch({
  		success: function(){that.render()}
  	});
  },
  render: function() {
    var that = this;
    var question = this.myQuestionCollection.at(0).toJSON();
    console.log(question);
    $.get('scripts/templates/playTemplate.hbs', function(data) {
      var template = Handlebars.compile( data );

      that.$el.html( template(question) );
    });
  }
});
