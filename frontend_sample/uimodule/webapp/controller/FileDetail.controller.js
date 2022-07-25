sap.ui.define(
  ["./BaseController",
    "sap/ui/model/json/JSONModel", // JSONModel define에 로드
    "sap/ui/core/Fragment"
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel, Fragment) { // JSONModel 파라미터(parameter)로 사용
    "use strict";


    return Controller.extend("gitpg.myapp.controller.FileDetail", {

      onInit: function () {
       
      }
    });
  }
);