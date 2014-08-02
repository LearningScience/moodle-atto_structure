YUI.add("moodle-atto_structure-button",function(e,t){var n="atto_structure",r="structure_input",i="atto_structure",s={INPUTSUBMIT:"atto_media_urlentrysubmit",INPUTCANCEL:"atto_media_urlentrycancel",INPUTCONTROL:"inputcontrol"},o={INPUTCONTROL:".inputcontrol"},u='<form class="atto_form"><div id="{{elementid}}_{{innerform}}" class="mdl-align"><label for="{{elementid}}_{{INPUTCONTROL}}">{{get_string "enterstructure" component}}</label><button class="{{CSS.INPUTSUBMIT}}">{{get_string "insert" component}}</button></div></form>';e.namespace("M.atto_structure").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{initializer:function(){if(this.get("disabled"))return;this.addButton({icon:"icon",iconComponent:"atto_structure",buttonName:"icon",callback:this._displayDialogue,callbackArgs:"icon"})},_getFlavorControlName:function(){return this.get("host").get("elementid")+"_"+r},_displayDialogue:function(t,r){t.preventDefault();var i=this.getDialogue({headerContent:M.util.get_string("dialogtitle",n),width:"768px",focusAfterHide:r}),s=e.Node.create("<iframe></iframe>");s.setStyles({height:"510px",border:"none",width:"100%"}),s.setAttribute("src",this._getIframeURL()),s.setAttribute("id","sketch"),s.setAttribute("data-toolbars","education");var o=this._getFormContent(r),u=e.Node.create("<div></div>");u.append(o).append(s),i.set("bodyContent",u),i.show(),this.markUpdated()},_getFormContent:function(t){var i=e.Handlebars.compile(u),o=e.Node.create(i({elementid:this.get("host").get("elementid"),CSS:s,INPUTCONTROL:r,component:n,defaultflavor:this.get("defaultflavor"),clickedicon:t}));return this._form=o,this._form.one("."+s.INPUTSUBMIT).on("click",this._getImgURL,this),o},_getIframeURL:function(){return"http://localhost/marvinjs-14.7.7/editor.html"},_getImgURL:function(t){t.preventDefault(),this.getDialogue({focusAfterHide:null}).hide();var n=this;e.Get.js(["http://localhost/marvinjs-14.7.7/gui/gui.nocache.js","http://localhost/marvinjs-14.7.7/js/marvinjslauncher.js","http://localhost/marvinjs-14.7.7/js/promise-0.1.1.min.js"],function(e){if(e)return;var t;MarvinJSUtil.getEditor("#sketch").then(function(e){t=new r(e),exportPromise=t.sketcherInstance.exportStructure("mrv",null),exportPromise.then(function(e){imgURL=marvin.ImageExporter.mrvToDataUrl(e),divContent='<div class="marvinjs-image"><img name="pict" src="'+imgURL+'" alt="MarvinJS PNG"/></div>',n.editor.focus,n.get("host").insertContentAtFocusPoint(divContent),n.markUpdated()})});var r=function(){function e(e){this.sketcherInstance=e,this.init()}return e.prototype.init=function(){this.sketcherInstance.setDisplaySettings({cpkColoring:!0,lonePairsVisible:!0,toolbars:"education"})},e}()})},_doInsert:function(e){e.preventDefault(),this.getDialogue({focusAfterHide:null}).hide(),divContent='<div class="marvinjs-image"><img name="pict" src="'+this._form.one(".molfile").get("value")+'" /></div>',this.editor.focus,this.get("host").insertContentAtFocusPoint(divContent),this.markUpdated()}},{ATTRS:{disabled:{value:!1},usercontextid:{value:null},defaultflavor:{value:"200"}}})},"@VERSION@",{requires:["moodle-editor_atto-plugin"]});
