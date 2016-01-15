var Router = Backbone.Router.extend({
	routes: {
		'': 'showHome',
		'play': 'showGame'
	},
	showHome: function() {
		console.log('home');
	},
	showGame: function() {
		console.log('play');
	}
});