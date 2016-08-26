import IModel = require('../interfaces/imodel');
import User =  require('./user');

class ModelsFactory {
	private static _instance:ModelsFactory = new ModelsFactory();

    constructor() {
        if(ModelsFactory._instance){
            throw new Error("Error: Instantiation failed: Use ModelsFactory.getInstance() instead of new.");
        }
        ModelsFactory._instance = this;
    }

    public static getInstance():ModelsFactory
    {
        return ModelsFactory._instance;
    }

    public static getModel(type:string):IModel {
    	if (type.toLowerCase() === 'user') {
    		return new User();
    	}
    }
}

export = ModelsFactory;