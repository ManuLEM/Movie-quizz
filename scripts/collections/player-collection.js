var PlayerCollection = Backbone.Collection.extend({
  model: PlayerModel,
  localStorage: new Backbone.LocalStorage("PlayerCollection")
});