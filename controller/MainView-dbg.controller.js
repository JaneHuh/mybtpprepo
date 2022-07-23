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


    return Controller.extend("gitpg.myapp.controller.MainView", {


      onInit: function () {
        // let oJson = new JSONModel(// JSONModel: Model implementation for the JSON format. This model is not prepared to be inherited from.
        // // 인자(argument) 반드시 선언!
        // // 배열 안에 각각 객체를 가지고 있는 형태
        // // JSON: 자바스크립트의 데이터 표현양식을 문자열로 변환 (객체, 배열 상관 x)
        //   { // 객체
        //     myArr1 : [ // 배열
        //       { filename : 'file1', fileType : 'xlsx' }, // 프로퍼티(property): '키(key):값(value)'
        //       { filename : 'file22', fileType : 'word' },
        //       { filename : 'file333', fileType : 'ppt' },
        //       { filename : 'file4444', fileType : 'txt' },
        //       { filename : 'file55555', fileType : 'xlsx' },
        //       { filename : 'file666666', fileType : 'ppt' },
        //       { filename : 'file7777777', fileType : 'ppt' },
        //       { filename : 'file88888888', fileType : 'xlsx' },
        //       { filename : 'file999999999', fileType : 'word' }
        //     ], 
        //     myArr2 : [
        //       { filename : 'test1'},
        //       { filename : 'test22'},
        //       { filename : 'test333'},
        //       { filename : 'test4444'},
        //       { filename : 'test55555'},
        //       { filename : 'test666666'},
        //       { filename : 'test7777777'},
        //       { filename : 'test88888888'},
        //       { filename : 'test999999999'}
        //     ]
        //   } 
        // );
        
        // // oJson만 가지고 myDataa라 인식 x 
        // // 해당 oJson을 이 앱의 myDataa 란 이름을 가진 모델로 등록하는 과정이 필요함
        // this.getView().setModel(oJson, 'myDataa') // getView(): view를 가져옴, setModel(oJson, 'myDataa'): oJson을 'myDataa'란 이름을 가진 모델로 등록
      

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
        $.ajax( // $.ajax(): 비동기 ajax를 이용하여 HTTP 요청을 전송함, ajax(Asynchronous JavaScript and XML)
          'http://localhost:8921/files', // 첫 번째 기본 파라미터
          //     'https://port-8921-nodejs-quaint-lizard-lgx0920328747.codeanyapp.com/files'
          { // 객체
            method: "GET", // HTTP 요청 메서드(GET, POST 등)
            success: function (...params) { // 두 번째 기본 파라미터
              let Success = JSON.parse(params[0]); // parse: 문자열을 원래 속성으로 되돌려 둠 (<-> stringify) 
              // -> params (3)
              //    0: "[\"test\",\"ttt\",\"ㅇㅅㅅ2\"]"
              //    1: "sucess"
              //    2: (생략)....
              // -> params[0]: '["test", "ttt", "ㅇㅅㅅ2"]': 배열
              // -> Success: {'test', 'ttt', 'ㅇㅅㅅ2'}: 문자열

              //myData
              let oJson = new JSONModel(Success); // JSONModel: UI5만의 객체, 저장, JSON 관리용도
              this.getView().setModel(oJson, 'myData') // 주석 처리 -> "데이터 없음"이라고 뜸
              // -> oJson
              //    oData: Array(3)
              //    0: "test"
              //    1: "ttt"
              //    2: "ㅇㅅㅅ2"
              debugger;
            }.bind(this), // bind(): 이 메서드가 호출되면 새로운 함수를 생성. this를 bind의 인수로 돌아오는 값으로 바꾸어 return

            error : function (...params){ // 세 번째 기본 파라미터
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