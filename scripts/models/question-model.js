var StudentModel = Backbone.Model.extend({
  defaults: {
    "movie": {
      "title": "",
      "poster": ""
    },
    "actor": {
      "name": "",
      "image": "",
      "isPresent": false
    }
  }
});
