import IModel = require('../interfaces/imodel');

class User implements IModel {
	public name:string = 'n/a';
	constructor() {}
}	

export = User;
