/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapui5_launchpad/sapui5-launchpad/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});