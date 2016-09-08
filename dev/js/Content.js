const myFirebaseRef = new Firebase('https://magazine-17dcb.firebaseio.com/') 
var database = [];

let data = ['soundDevices','gameConsoles','mobilePhones','securitySystem', 'cameras',
				'theaterSystem','tvs','computers','gamesMusic','accesories','office','wears']

data.map(item => {
	let name = item;
	myFirebaseRef.child(item).on('value', function(argument) {
		database[name] = argument.val()
	})
})

export {database};