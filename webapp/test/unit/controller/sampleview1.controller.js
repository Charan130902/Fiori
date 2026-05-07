/*global QUnit*/

sap.ui.define([
	"com/samplescreen/controller/sampleview1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("sampleview1 Controller");

	QUnit.test("I should test the sampleview1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
