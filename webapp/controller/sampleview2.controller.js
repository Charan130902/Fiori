sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.samplescreen.controller.sampleview2", {
        onInit() {
        }, onBack: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("Routesampleview1");
        }
        
    });
});