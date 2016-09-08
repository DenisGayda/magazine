'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var myFirebaseRef = new Firebase('https://magazine-17dcb.firebaseio.com/');
var database = [];

var data = ['soundDevices', 'gameConsoles', 'mobilePhones', 'securitySystem', 'cameras', 'theaterSystem', 'tvs', 'computers', 'gamesMusic', 'accesories', 'office', 'wears'];

data.map(function (item) {
	var name = item;
	myFirebaseRef.child(item).on('value', function (argument) {
		database[name] = argument.val();
	});
});

exports.database = database;