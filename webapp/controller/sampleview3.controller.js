sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, JSONModel, MessageBox, Filter, FilterOperator) {
    "use strict";
 
    return Controller.extend("com.samplescreen.controller.sampleview2", {
 
        onInit: function () {
 
            var sDateTime = this._getCurrentDateTime();
 
 
          var aDataRows = [
 
    {
        order: "8000000007-00001",
        amount: "25.00 USD",
        amountValue: 25,
        office: "DFAM",
        quantity: "2 EA",
        status: "Approved",
        dfr: "9000029280-002",
        prqDifference: "5",
        poDifference: "3",
        grant: "GF180002",
        grantExpDays: "120",
        fundsCommitment: "409458-001"
    },
 
    {
        order: "8000000008-00001",
        amount: "2.08 USD",
        amountValue: 2.08,
        office: "DFAM",
        quantity: "1 EA",
        status: "Processed",
        dfr: "9000029280-003",
        prqDifference: "2",
        poDifference: "1",
        grant: "GF180002",
        grantExpDays: "45",
        fundsCommitment: "409459-001"
    },
 
    {
        order: "8000000009-00001",
        amount: "1200.00 USD",
        amountValue: 1200,
        office: "DFAM",
        quantity: "4 EA",
        status: "Rejected",
        dfr: "9000039588-001",
        prqDifference: "10",
        poDifference: "7",
        grant: "GF180002",
        grantExpDays: "20",
        fundsCommitment: "409460-001"
    },
 
    {
        order: "8000000010-00001",
        amount: "150.00 USD",
        amountValue: 150,
        office: "Vientiane Lao Peo",
        quantity: "1 EA",
        status: "Approved",
        dfr: "9000039589-001",
        prqDifference: "6",
        poDifference: "4",
        grant: "SC229906",
        grantExpDays: "90",
        fundsCommitment: "409461-001"
    },
 
    {
        order: "8000000010-00002",
        amount: "50.00 USD",
        amountValue: 50,
        office: "Vientiane Lao Peo",
        quantity: "1 EA",
        status: "Processed",
        dfr: "9000039589-002",
        prqDifference: "3",
        poDifference: "2",
        grant: "SC229906",
        grantExpDays: "55",
        fundsCommitment: "409461-002"
    },
 
    {
        order: "8000000011-00001",
        amount: "500.00 USD",
        amountValue: 500,
        office: "New York",
        quantity: "3 EA",
        status: "Approved",
        dfr: "9000039590-001",
        prqDifference: "8",
        poDifference: "4",
        grant: "NY450001",
        grantExpDays: "75",
        fundsCommitment: "409462-001"
    },
 
    {
        order: "8000000011-00002",
        amount: "220.00 USD",
        amountValue: 220,
        office: "New York",
        quantity: "2 EA",
        status: "Processed",
        dfr: "9000039590-002",
        prqDifference: "5",
        poDifference: "2",
        grant: "NY450001",
        grantExpDays: "40",
        fundsCommitment: "409462-002"
    },
 
    {
        order: "8000000012-00001",
        amount: "780.00 USD",
        amountValue: 780,
        office: "Berlin",
        quantity: "6 EA",
        status: "Rejected",
        dfr: "9000039591-001",
        prqDifference: "9",
        poDifference: "6",
        grant: "BR330001",
        grantExpDays: "15",
        fundsCommitment: "409463-001"
    },
 
    {
        order: "8000000013-00001",
        amount: "960.00 USD",
        amountValue: 960,
        office: "Tokyo",
        quantity: "8 EA",
        status: "Approved",
        dfr: "9000039592-001",
        prqDifference: "12",
        poDifference: "8",
        grant: "TK550001",
        grantExpDays: "130",
        fundsCommitment: "409464-001"
    },
 
    {
        order: "8000000013-00002",
        amount: "110.00 USD",
        amountValue: 110,
        office: "Tokyo",
        quantity: "1 EA",
        status: "Processed",
        dfr: "9000039592-002",
        prqDifference: "4",
        poDifference: "1",
        grant: "TK550001",
        grantExpDays: "60",
        fundsCommitment: "409464-002"
    },
 
    {
        order: "8000000014-00001",
        amount: "340.00 USD",
        amountValue: 340,
        office: "Hyderabad",
        quantity: "5 EA",
        status: "Approved",
        dfr: "9000039593-001",
        prqDifference: "7",
        poDifference: "5",
        grant: "HY770001",
        grantExpDays: "95",
        fundsCommitment: "409465-001"
    },
 
    {
        order: "8000000015-00001",
        amount: "670.00 USD",
        amountValue: 670,
        office: "London",
        quantity: "7 EA",
        status: "Rejected",
        dfr: "9000039594-001",
        prqDifference: "11",
        poDifference: "9",
        grant: "LD880001",
        grantExpDays: "25",
        fundsCommitment: "409466-001"
    }
 
];
            /*   var aFinalData = [];
         
              aDataRows.forEach(function (oRow) {
         
                  // push actual data row
                  aFinalData.push(oRow);
         
                  // automatically create total row
                  aFinalData.push({
                      rowType: "total",
                      office: "",
                      order: "Total Order Item Amount",
                      amount: oRow.amount,
                      quantity: "",
                      status: "",
                      dfr: "",
                      prqDifference: "",
                      poDifference: "",
                      grant: "",
                      grantExpDays: "",
                      fundsCommitment: ""
                  });
              }); */
            var aFinalData = [];
            var currentOrder = "";
            var total = 0;
 
            aDataRows.forEach(function (oRow, index) {
 
                var orderGroup = oRow.order.split("-")[0]; // IMPORTANT
 
                if (currentOrder !== orderGroup) {
 
                    if (currentOrder !== "") {
                        aFinalData.push({
                            rowType: "total",
                            order: "Total Order Item Amount",
                            amount: total.toFixed(2) + " USD"
                        });
                    }
 
                    currentOrder = orderGroup;
                    total = 0;
                }
 
                oRow.rowType = "data";
                aFinalData.push(oRow);
 
                total += oRow.amountValue;
 
                if (index === aDataRows.length - 1) {
                    aFinalData.push({
                        rowType: "total",
                        order: "Total Order Item Amount",
                        amount: total.toFixed(2) + " USD"
                    });
                }
            });
            var oModel = new JSONModel({
                userName: "Charan Teja CHAPPA",
                systemName: "OTS",
                currentDateTime: sDateTime,
                chargeBackData: aFinalData,
 
                officeList: this._createDropdownList(aDataRows, "office"),
 
                orderList: this._createDropdownList(aDataRows, "order"),
 
                quantityList: this._createDropdownList(aDataRows, "quantity"),
 
                statusList: this._createDropdownList(aDataRows, "status")
                /*               officeList: [
                                  { key: "DFAM", text: "DFAM" },
                                  { key: "Vientiane Lao Peo", text: "Vientiane Lao Peo" }
                              ],
             
                              orderList: [
                                  { key: "8000000007-00001", text: "8000000007-00001" },
                                  { key: "8000000008-00001", text: "8000000008-00001" },
                                  { key: "8000000009-00001", text: "8000000009-00001" },
                                  { key: "8000000010-00001", text: "8000000010-00001" },
                                  { key: "8000000010-00002", text: "8000000010-00002" }
                              ],
             
                              quantityList: [
                                  { key: "1 EA", text: "1 EA" },
                                  { key: "2 EA", text: "2 EA" },
                                  { key: "4 EA", text: "4 EA" }
                              ],
             
                              statusList: [
                                  { key: "Approved", text: "Approved" },
                                  { key: "Processed", text: "Processed" },
                                  { key: "Rejected", text: "Rejected" }
                              ] */
 
            });
 
            this.getView().setModel(oModel);
 
            setInterval(function () {
 
                oModel.setProperty(
                    "/currentDateTime",
                    this._getCurrentDateTime()
                );
 
            }.bind(this), 1000);
        },
 
 
        _createDropdownList: function (aDataRows, sProperty) {
 
            var aUniqueValues = [];
 
            aDataRows.forEach(function (oRow) {
 
                if (!aUniqueValues.includes(oRow[sProperty])) {
 
                    aUniqueValues.push(oRow[sProperty]);
 
                }
 
            });
 
            return aUniqueValues.map(function (sValue) {
 
                return {
                    key: sValue,
                    text: sValue
                };
 
            });
 
        },
 
        _getCurrentDateTime: function () {
 
            var oDate = new Date();
 
            var sDay = oDate.toLocaleDateString("en-US", {
                weekday: "short"
            });
 
            var sDate = oDate.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }).replace(/ /g, "/");
 
            var sTime = oDate.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true
            });
 
            return sDay + ", " + sDate + ", " + sTime;
 
        },
 
        formatGrantColor: function (value) {
            var num = parseInt(value);
 
            if (num >= 10 && num <= 30) {
                return "Error";       // Red
            } else if (num > 30 && num <= 60) {
                return "Warning";     // Orange
            } else if (num > 60) {
                return "Success";     // Green
            } else {
                return "None";
            }
        },
 
        formatStatusColor: function (status) {
            if (status === "Approved") {
                return "Success";   // Green
            } else if (status === "Rejected") {
                return "Error";     // Red
            } else if (status === "Processed") {
                return "Warning";   // Orange
            } else {
                return "None";
            }
        },
        onDisplayPress: function (oEvent) {
 
            var oContext = oEvent.getSource().getBindingContext();
            var oData = oContext.getObject();
 
            var sMessage =
                "Order: " + oData.order + "\n" +
                "Office: " + oData.office + "\n" +
                "Amount: " + oData.amount + "\n" +
                "Quantity: " + oData.quantity + "\n" +
                "Status: " + oData.status + "\n" +
                "DFR: " + oData.dfr + "\n" +
                "Grant: " + oData.grant + "\n" +
                "Grant Exp Days: " + oData.grantExpDays;
 
            MessageBox.information(sMessage);
        },
        onSearch: function () {
 
            // Step 1 → Get filter values
 
            var sOffice =
                this.byId("idOfficeFilter").getSelectedKey();
 
            var sOrder =
                this.byId("idOrderFilter").getSelectedKey();
 
            var sQuantity =
                this.byId("idQuantityFilter").getSelectedKey();
 
            var sStatus =
                this.byId("idStatusFilter").getSelectedKey();
 
            var sGrant =
                this.byId("idGrantFilter").getValue();
 
 
 
            // Step 2 → Create filter array
 
            var aFilters = [];
 
 
 
            // Step 3 → Push filters dynamically
 
            if (sOffice) {
                aFilters.push(
                    new Filter("office", FilterOperator.EQ, sOffice)
                );
            }
 
            if (sOrder) {
                aFilters.push(
                    new Filter("order", FilterOperator.EQ, sOrder)
                );
            }
 
            if (sQuantity) {
                aFilters.push(
                    new Filter("quantity", FilterOperator.EQ, sQuantity)
                );
            }
 
            if (sStatus) {
                aFilters.push(
                    new Filter("status", FilterOperator.EQ, sStatus)
                );
            }
 
            if (sGrant) {
                aFilters.push(
                    new Filter("grant", FilterOperator.Contains, sGrant)
                );
            }
 
 
 
            // Step 4 → Get table binding
 
            var oTable =
                this.byId("idChargeBackTable");
 
            var oBinding =
                oTable.getBinding("items");
 
 
 
            // Step 5 → Apply filter
 
            oBinding.filter(aFilters);
 
        },
 
        onClear: function () {
 
            // Clear ComboBoxes
 
            this.byId("idOfficeFilter").setSelectedKey("");
 
            this.byId("idOrderFilter").setSelectedKey("");
 
            this.byId("idQuantityFilter").setSelectedKey("");
 
            this.byId("idStatusFilter").setSelectedKey("");
 
 
            // Clear Input
 
            this.byId("idGrantFilter").setValue("");
 
 
            // Remove table filters
 
            var oTable =
                this.byId("idChargeBackTable");
 
            var oBinding =
                oTable.getBinding("items");
 
            oBinding.filter([]);
 
        },
        onBack: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("Routesampleview2");
        }
    });
}); 
 