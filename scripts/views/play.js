var PlayView = Backbone.View.extend({
  el: '#app',
  events: {
    'click .button': 'checkResponse',
  },
  checkResponse: function(event) {
    var answer = $(event.currentTarget).html() == 'Yes';
    if (this.question.actor.isPresent === answer) {
      // the answer is correct, load another question
      console.log('correct');
      this.render();
    }
    else {
      // the answer is wrong, display game over
      console.log('game over');
    }
  },
  initialize: function() {
  	this.myQuestionCollection = new QuestionCollection();
  	this.myQuestionCollection.fetch({
  		success: function(){this.render()}.bind(this)
  	});
  },
  render: function() {
    var index = Math.floor(Math.random() * (this.myQuestionCollection.length));
    this.question = this.myQuestionCollection.at(index).toJSON();
    $.get('scripts/templates/playTemplate.hbs', function(data) {
      var template = Handlebars.compile( data );

      this.$el.html( template(this.question) );
    }.bind(this));
  }
});
