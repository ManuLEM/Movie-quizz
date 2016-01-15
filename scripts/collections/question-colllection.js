var QuestionCollection = Backbone.Collection.extend({
  model: QuestionModel,
  url: '../../mock/questions.json'
});