import ModelsFactory = require('./models');
import User = require('./models/user');

class App {
	user:User;

	constructor() {
		this.user = ModelsFactory.getModel('user');
		console.log(this.user.name);
	}
}

new App();
