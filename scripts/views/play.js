var PlayView = Backbone.View.extend({
  el: '#app',
  events: {
    'click .button': 'checkResponse',
    'submit form': 'saveUserAndNext'
  },
  checkResponse: function(event) {
    var answer = $(event.currentTarget).html() == 'Yes';
    if (this.question.actor.isPresent === answer) {
      // the answer is correct, load another question
      this.currentPlayer.set('score', this.currentPlayer.get('score')+1);
      var messageID = Math.floor(Math.random() * this.messageList.length);
      this.message = this.messageList[messageID];
      this.questionIndex++;

      this.render();
    }
    else {
      // the answer is wrong, display game over
      this.$el.find('.popin-back').addClass('visible');
    }
  },
  saveUserAndNext: function(event) {
    event.preventDefault();
    if ($('#username').val().length) {
      this.currentPlayer.set('name', $('#username').val());
      this.myPlayerCollection.add(this.currentPlayer);
      this.currentPlayer.save();
    }
    
    if ($(document.activeElement).hasClass('repeat')) {
      Backbone.history.loadUrl();
    }
    else {
      window.location = window.location.href.split('#')[0];
    }
  },
  suffle: function (array) {
    var i = 0, j = 0, temp = null;

    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array;
  },
  initialize: function() {
  	this.myQuestionCollection = new QuestionCollection();
  	this.myQuestionCollection.fetch({
  		success: function(){
        this.myQuestionCollection = this.suffle(this.myQuestionCollection.toJSON());
        this.render()
      }.bind(this)
  	});
    this.questionIndex = 0;
    this.currentPlayer = new PlayerModel();
    this.message = "";
    this.messageList = ["Bien joué !", "Continue !", "Aller !"];
    this.myPlayerCollection = new PlayerCollection();
    this.myPlayerCollection.fetch();
  },
  render: function() {
    this.question = this.myQuestionCollection[this.questionIndex];
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
