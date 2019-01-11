#!/usr/bin/env node

const service = require('./cli-service')
var fs = require('fs-extra')
const path = require('path')

service()
	.then(() => {
		deleteFolderRecursive('dist')
	})
	.catch(error => {
		console.log(error)
	});

var deleteFolderRecursive = function(dir) {
	if (fs.existsSync(dir)) {
		fs.readdirSync(dir).forEach(function(chidlName, index){
			const fileExt = path.extname(chidlName);
		  	const curPath = dir + "/" + chidlName;
			if (fs.lstatSync(curPath).isDirectory()) {
			  fs.removeSync(curPath);
			} else if (fileExt !== '.css') {
			  fs.unlinkSync(curPath);
			}
		});
	}
};