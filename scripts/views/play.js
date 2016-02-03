var PlayView = Backbone.View.extend({
  el: '#app',
  events: {
    'click .button': 'checkResponse',
  },
  checkResponse: function(event) {
    var answer = $(event.currentTarget).html() == 'Yes';
    if (this.question.actor.isPresent === answer) {
      // the answer is correct, load another question
      this.currentPlayer.set('score', this.currentPlayer.get('score')+1);
      var messageID = Math.floor(Math.random() * this.messageList.length);
      this.message = this.messageList[messageID];

      this.render();
    }
    else {
      // the answer is wrong, display game over
      this.currentPlayer.set('name', 'Manuel');
      this.myPlayerCollection.add(this.currentPlayer);
      this.currentPlayer.save();
    }
  },
  initialize: function() {
  	this.myQuestionCollection = new QuestionCollection();
  	this.myQuestionCollection.fetch({
  		success: function(){this.render()}.bind(this)
  	});
    this.currentPlayer = new PlayerModel();
    this.message = "";
    this.messageList = ["Bien joué !", "Continue !", "Aller !"];
    this.myPlayerCollection = new PlayerCollection();
    this.myPlayerCollection.fetch();
  },
  render: function() {
    var index = Math.floor(Math.random() * this.myQuestionCollection.length);
    this.question = this.myQuestionCollection.at(index).toJSON();
    this.question = $.extend(this.question, {
      score:this.currentPlayer.get('score'),
      message:this.message
    });
    $.get('scripts/templates/playTemplate.hbs', function(data) {
      var template = Handlebars.compile( data );

      this.$el.html( template(this.question) );
    }.bind(this));
  }
});
