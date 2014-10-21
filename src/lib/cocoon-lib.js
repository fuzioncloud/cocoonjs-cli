var shell 	= require('shelljs'),
	path 	= require('path'),
	fs 		= require('fs'),
	util 	= require('../utils.js');
var CliManager = null;

function CocoonLib(argv, options) {
    CliManager = new (require("./CliManager.js"))(argv, options);
    this.init();
};

CocoonLib.prototype.init = function(){
	
	shell.exec("cd " + process.cwd());
		
	var Lib = CliManager.getCocoonLib(CliManager.getArgv()[0]);

	if(!Lib){
		return util.printHelpInfo();
	}

	new Lib(CliManager);
};

module.exports = CocoonLib;