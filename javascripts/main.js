//@exclude
var testEnvironement = typeof module !== 'undefined' && this.module !== module;
//@endexclude

// warning don't change this line
var config = {
	baseUrl : '../bower_components',
	//@exclude
    urlArgs: (testEnvironement ? '' : "bust=" + (new Date()).getTime()),
	//@endexclude
	paths : {
		// configuration base dir
		services : '../javascripts/services',
		controllers : '../javascripts/controllers',
		directives : '../javascripts/directives',
		// module shortcut
		app : '../javascripts/app',
		routes : '../javascripts/routes',
		appDir : '../javascripts/'		
	},
	shim : {
		'angular-ui-codemirror/ui-codemirror' : {
			deps : [
				'angular',
				'codemirror/lib/codemirror',
				'codemirror/mode/meta',
				'codemirror/addon/mode/loadmode'
			],
			exports: 'codeMirrorAngular'
		},
		'angularRoute': {		
			deps : [
				'angular'
			],
			exports: 'angularRoute'
		}		
	}
};

//@exclude
if (testEnvironement) {
	module.exports = config;
} else {
//@endexclude
	require.config(config);
	require(['app'], function (app) {
	  // create CodeMirror on window for correcte usage of ui.codemirror
	  window.CodeMirror = require('codemirror/lib/codemirror');
	  CodeMirror.modeURL = 'codemirror/mode/%N/%N';
	  app.init();
	});	
//@exclude
}
//@endexclude
