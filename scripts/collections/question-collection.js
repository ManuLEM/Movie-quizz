var QuestionCollection = Backbone.Collection.extend({
  model: QuestionModel,
  url: 'http://dcamilleri.com/wsf/api'
  // used to test locally
  // url: 'mock/questions.json'
});