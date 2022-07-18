sap.ui.define(
  ["./BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment"
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel, Fragment) {
    "use strict";


    return Controller.extend("gitpg.myapp.controller.MainView", {


      onInit: function () {
        let oJson = new JSONModel();

        //this.getView().setModel(oJson, 'myNode');
        //oJson.loadData(
        //  'http://localhost:8921/files'
        //  //'https://port-8921-nodejs-fluffy-lighter-janeyhuh457764.codeanyapp.com/files'
        //).then(
        //  function () {
        //    debugger;
        //  }.bind(this)
        //)

        //jquery
        $.ajax( //$
          'http://localhost:8921/files', //첫 번째 기본 파라미터
          //     'https://port-8921-nodejs-quaint-lizard-lgx0920328747.codeanyapp.com/files'
          { //객체
            method: "GET",
            success: function (...params) { //두 번째 기본 파라미터
              let Success = JSON.parse(params[0]); //parse: 문자열을 원래 속성으로 되돌려 둠 (<-> stringify) 
              // -> JSON.parse(params[0])결과: '["test", "ttt", "ㅇㅅㅅ2"]': 배열
              // -> Success: {'test', 'ttt', 'ㅇㅅㅅ2'}: 문자열

              //myData
              let oJson = new JSONModel(Success); //JSONModel: UI5만의 객체, 저장? JSON 관리용도?
              this.getView().setModel(oJson, 'myData') //주석 처리 -> "데이터 없음"이라고 뜸

              debugger;
            }.bind(this), 

            error : function (...params){ //세 번째 기본 파라미터
              debugger;
            }
          }
        )
      },

      onPress: function (oEvent) {
        let sIdRaiseEvent = oEvent.getSource().getId();
        let sIdLink0 = this.getView().byId('link0').getId();
        let sIdLink1 = this.getView().byId('link1').getId();
        let sIdLink2 = this.getView().byId('link2').getId();
        let sIdLink3 = this.getView().byId('link3').getId();
        let sIdLink4 = this.getView().byId('link4').getId();
        let sIdLink5 = this.getView().byId('link5').getId();

        debugger;

        let pFragment;

        if (sIdRaiseEvent === sIdLink0) {
          pFragment = Fragment.load({
            name: "gitpg.myapp.view.fragments.link0",
            type: "XML",
            id: "link0Fragment",
            controller: this
          })

        } else if (sIdRaiseEvent === sIdLink1) {
          pFragment = Fragment.load({
            name: "gitpg.myapp.view.fragments.link1",
            type: "XML",
            id: "link1Fragment",
            controller: this
          })

        } else if (sIdRaiseEvent === sIdLink2) {
          pFragment = Fragment.load({
            name: "gitpg.myapp.view.fragments.link2",
            type: "XML",
            id: "link2Fragment",
            controller: this
          })

        } else if (sIdRaiseEvent === sIdLink3) {
          pFragment = Fragment.load({
            name: "gitpg.myapp.view.fragments.link3",
            type: "XML",
            id: "link3Fragment",
            controller: this
          })

        } else if (sIdRaiseEvent === sIdLink4) {
          pFragment = Fragment.load({
            name: "gitpg.myapp.view.fragments.link4",
            type: "XML",
            id: "link4Fragment",
            controller: this
          })

        } else if (sIdRaiseEvent === sIdLink5) {
          pFragment = Fragment.load({
            name: "gitpg.myapp.view.fragments.link5",
            type: "XML",
            id: "link5Fragment",
            controller: this
          })

        }


        pFragment.then(function (oView) {
          let oMyExtned = this.getView().byId('myExtend');

          oMyExtned.destroyItems(); //MyExtend 내부 Item 밑에 다 지우기
          oMyExtned.addItem(oView); //Item 추가하기
        }.bind(this));

      }
    });
  }
);