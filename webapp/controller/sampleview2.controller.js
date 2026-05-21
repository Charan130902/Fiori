sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("com.samplescreen.controller.sampleview2", {

        onInit: function () {

            // Initial Screen Visibility
            var oViewModel = new JSONModel({
                showContract: true,
                showTable: false,
                showList: false
            });

            this.getView().setModel(oViewModel, "viewModel");

            // Mock Sales Order Data
            var oData = {
                salesOrders: [
                    {
                        OrderId: "500001",
                        Customer: "Charan",
                        Material: "Laptop",
                        Quantity: "2",
                        Amount: "50000"
                    },
                    {
                        OrderId: "500002",
                        Customer: "Teja",
                        Material: "Monitor",
                        Quantity: "5",
                        Amount: "75000"
                    },
                    {
                        OrderId: "500003",
                        Customer: "Rahul",
                        Material: "Keyboard",
                        Quantity: "10",
                        Amount: "15000"
                    }
                ]
            };

            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

        },

        onBack: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("Routesampleview1");
        },

        onAction: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("Routesampleview3");
        },

        // Contract Button
        onContractPress: function () {

            var oViewModel = this.getView().getModel("viewModel");

            oViewModel.setProperty("/showContract", true);
            oViewModel.setProperty("/showTable", false);
            oViewModel.setProperty("/showList", false);
        },

        // Line Item 1 Button
        onLineItem1Press: function () {

            var oViewModel = this.getView().getModel("viewModel");

            oViewModel.setProperty("/showContract", false);
            oViewModel.setProperty("/showTable", true);
            oViewModel.setProperty("/showList", false);
        },

        // Line Item 2 Button
        onLineItem2Press: function () {

            var oViewModel = this.getView().getModel("viewModel");

            oViewModel.setProperty("/showContract", false);
            oViewModel.setProperty("/showTable", false);
            oViewModel.setProperty("/showList", true);
        }

    });
});