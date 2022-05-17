//import libraries

const ModuleDispatcher = require('module-dispatcher');
const app = (function (app_) {
 
	'use strict';
 
	app_.init = function () {
 
		app.docReady(function () {
			new ModuleDispatcher({
				Library : app
			});
		});
	};
 
	return app_;
})({});
 
app.docReady = function (f) {
	return /in/.test(document.readyState) ? window.setTimeout(app.docReady, 9, f) : f();
};
 
app.generate_perameters = require('./partials/generate-parametrs');
 
module.exports = app;
 
app.generate_perameters.init();