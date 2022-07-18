//@ui5-bundle gitpg/myapp/Component-preload.js
sap.ui.require.preload({
	"gitpg/myapp/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","gitpg/myapp/model/models"],function(e,t,i){"use strict";return e.extend("gitpg.myapp.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"gitpg/myapp/controller/App.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("gitpg.myapp.controller.controller.App",{onInit(){}})});
},
	"gitpg/myapp/controller/BaseController.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History","sap/ui/core/UIComponent","gitpg/myapp/model/formatter"],function(e,t,o,n){"use strict";return e.extend("gitpg.myapp.controller.BaseController",{formatter:n,getModel:function(e){return this.getView().getModel(e)},setModel:function(e,t){return this.getView().setModel(e,t)},getResourceBundle:function(){return this.getOwnerComponent().getModel("i18n").getResourceBundle()},navTo:function(e,t,o){this.getRouter().navTo(e,t,o)},getRouter:function(){return o.getRouterFor(this)},onNavBack:function(){const e=t.getInstance().getPreviousHash();if(e!==undefined){window.history.back()}else{this.getRouter().navTo("appHome",{},true)}}})});
},
	"gitpg/myapp/controller/MainView.controller.js":function(){sap.ui.define(["./BaseController","sap/ui/model/json/JSONModel","sap/ui/core/Fragment"],function(e,t,i){"use strict";return e.extend("gitpg.myapp.controller.MainView",{onInit:function(){let e=new t;$.ajax("http://localhost:8921/files",{method:"GET",success:function(...e){let i=JSON.parse(e[0]);let n=new t(i);this.getView().setModel(n,"myData");debugger}.bind(this),error:function(...e){debugger}})},onPress:function(e){let t=e.getSource().getId();let n=this.getView().byId("link0").getId();let l=this.getView().byId("link1").getId();let g=this.getView().byId("link2").getId();let s=this.getView().byId("link3").getId();let a=this.getView().byId("link4").getId();let r=this.getView().byId("link5").getId();debugger;let d;if(t===n){d=i.load({name:"gitpg.myapp.view.fragments.link0",type:"XML",id:"link0Fragment",controller:this})}else if(t===l){d=i.load({name:"gitpg.myapp.view.fragments.link1",type:"XML",id:"link1Fragment",controller:this})}else if(t===g){d=i.load({name:"gitpg.myapp.view.fragments.link2",type:"XML",id:"link2Fragment",controller:this})}else if(t===s){d=i.load({name:"gitpg.myapp.view.fragments.link3",type:"XML",id:"link3Fragment",controller:this})}else if(t===a){d=i.load({name:"gitpg.myapp.view.fragments.link4",type:"XML",id:"link4Fragment",controller:this})}else if(t===r){d=i.load({name:"gitpg.myapp.view.fragments.link5",type:"XML",id:"link5Fragment",controller:this})}d.then(function(e){let t=this.getView().byId("myExtend");t.destroyItems();t.addItem(e)}.bind(this))}})});
},
	"gitpg/myapp/i18n/i18n.properties":'# This is the resource bundle for gitpg.myapp\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Title of gitpg.myapp\n\n#YDES: Application description\nappDescription=Description of gitpg.myapp\n#XTIT: Main view title\ntitle=Title of gitpg.myapp',
	"gitpg/myapp/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"gitpg.myapp","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap-ux/fiori-freestyle-writer:basic","version":"0.11.15"}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.60.0","libs":{"sap.m":{},"sap.ui.core":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"gitpg.myapp.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"gitpg.myapp.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteMainView","pattern":":?query:","target":["TargetMainView"]}],"targets":{"TargetMainView":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"MainView","viewName":"MainView"}}},"rootView":{"viewName":"gitpg.myapp.view.App","type":"XML","async":true,"id":"App"}}}',
	"gitpg/myapp/model/formatter.js":function(){sap.ui.define([],function(){"use strict";return{}});
},
	"gitpg/myapp/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){const i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"gitpg/myapp/view/App.view.xml":'<mvc:View controllerName="gitpg.myapp.controller.App" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:mvc="sap.ui.core.mvc" displayBlock="true" xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"gitpg/myapp/view/MainView.view.xml":'<mvc:View controllerName="gitpg.myapp.controller.MainView" xmlns:mvc="sap.ui.core.mvc" displayBlock="true" xmlns="sap.m" xmlns:tnt="sap.tnt" \txmlns:l="sap.ui.layout"><Page id="page" title="{i18n>title}"><content><Title level="H1" titleStyle="H1" ><Link id="link0" text="WEB" target="_blank" press=\'.onPress\'/></Title><List width="320px"><ActionListItem id="link1" text="1. create" press=\'.onPress\'/><ActionListItem id="link2" text="2. css" press=\'.onPress\'/><ActionListItem id="link3" text="3. filelist" press=\'.onPress\'/><ActionListItem id="link4" text="4. html" press=\'.onPress\'/><ActionListItem id="link5" text="5. javascript" press=\'.onPress\'/></List><List items = "{myData>/}"><items><ActionListItem id="Link" text= "{myData>}" press=\'.onPress\'/></items></List><HBox id="myExtend"></HBox></content></Page></mvc:View>',
	"gitpg/myapp/view/fragments/link0.fragment.xml":'<core:FragmentDefinition xmlns="sap.m" xmlns:core="sap.ui.core"><VBox><Title titleStyle="H2" text="WELCOME" /><Text text=" Welcome page"/></VBox></core:FragmentDefinition>',
	"gitpg/myapp/view/fragments/link1.fragment.xml":'<core:FragmentDefinition xmlns="sap.m" xmlns:core="sap.ui.core" ><VBox><Title titleStyle="H2" text="create" /><Input id="input1"/><TextArea /><Button text="submit" press="onPress" /></VBox></core:FragmentDefinition>',
	"gitpg/myapp/view/fragments/link2.fragment.xml":'<core:FragmentDefinition xmlns="sap.m" xmlns:core="sap.ui.core"><VBox><Title titleStyle="H2" text="css" /><Text text="Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language. Although most often used to set the visual style of web pages and user interfaces written in HTML and XHTML, the language can be applied to any XML document, including plain XML, SVG and XUL, and is applicable to rendering in speech, or on other media. Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces for web applications, and user interfaces for many mobile applications."/></VBox></core:FragmentDefinition>',
	"gitpg/myapp/view/fragments/link3.fragment.xml":'<core:FragmentDefinition xmlns="sap.m" xmlns:core="sap.ui.core" xmlns:tnt="sap.tnt" ><VBox><Title titleStyle="H2" text="filelist" /><tnt:NavigationList\r\n            id="navigationList"\r\n            width="200px"\r\n            selectedKey="rootItem1"><tnt:NavigationListItem text="filelist" key="rootItem1" icon="sap-icon://document"><tnt:NavigationListItem text="file 1" /><tnt:NavigationListItem text="file 2" /><tnt:NavigationListItem text="file 3" /></tnt:NavigationListItem></tnt:NavigationList></VBox></core:FragmentDefinition>',
	"gitpg/myapp/view/fragments/link4.fragment.xml":'<core:FragmentDefinition xmlns="sap.m" xmlns:core="sap.ui.core"><VBox><Title titleStyle="H2" text="html" /><Text text="HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets."/></VBox></core:FragmentDefinition>',
	"gitpg/myapp/view/fragments/link5.fragment.xml":'<core:FragmentDefinition xmlns="sap.m" xmlns:core="sap.ui.core"><VBox><Title titleStyle="H2" text="javascript" /><Text text="JavaScript (/ˈdʒɑːvəˌskrɪpt/[6]), often abbreviated as JS, is a high-level, dynamic, weakly typed, prototype-based, multi-paradigm, and interpreted programming language. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production. It is used to make webpages interactive and provide online programs, including video games. The majority of websites employ it, and all modern web browsers support it without the need for plug-ins by means of a built-in JavaScript engine. Each of the many JavaScript engines represent a different implementation of JavaScript, all based on the ECMAScript specification, with some engines not supporting the spec fully, and with many engines supporting additional features beyond ECMA."/></VBox></core:FragmentDefinition>'
});
