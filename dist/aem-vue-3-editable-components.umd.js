(function(h,y){typeof exports=="object"&&typeof module<"u"?y(exports,require("@adobe/aem-spa-component-mapping"),require("vue"),require("@adobe/aem-spa-page-model-manager")):typeof define=="function"&&define.amd?define(["exports","@adobe/aem-spa-component-mapping","vue","@adobe/aem-spa-page-model-manager"],y):(h=typeof globalThis<"u"?globalThis:h||self,y(h.aemVue3EditableComponents={},h.AemSpaComponentMapping,h.Vue,h.AemSpaPageModelManager))})(this,function(h,y,t,u){"use strict";function R(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var E={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;function s(c){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},s(c)}var i=47,a=46,d=function(o){var n=s(o);if(n!=="string")throw new TypeError("Expected a string, got a ".concat(n))},P=function(o,n){for(var l="",g=0,q=-1,_=0,I,C=0;C<=o.length;++C){if(C<o.length)I=o.charCodeAt(C);else{if(I===i)break;I=i}if(I===i){if(!(q===C-1||_===1))if(q!==C-1&&_===2){if(l.length<2||g!==2||l.charCodeAt(l.length-1)!==a||l.charCodeAt(l.length-2)!==a){if(l.length>2){var B=l.lastIndexOf("/");if(B!==l.length-1){B===-1?(l="",g=0):(l=l.slice(0,B),g=l.length-1-l.lastIndexOf("/")),q=C,_=0;continue}}else if(l.length===2||l.length===1){l="",g=0,q=C,_=0;continue}}n&&(l.length>0?l+="/..":l="..",g=2)}else l.length>0?l+="/"+o.slice(q+1,C):l=o.slice(q+1,C),g=C-q-1;q=C,_=0}else I===a&&_!==-1?++_:_=-1}return l},p=function(o){try{return decodeURIComponent(o)}catch{return o}},f=function(o){d(o);var n=o;if(n.length===0)return".";var l=n.charCodeAt(0)===i,g=n.charCodeAt(n.length-1)===i;return n=p(n),n=P(n,!l),n.length===0&&!l&&(n="."),n.length>0&&g&&(n+="/"),l?"/"+n:n},m=f;e.default=m,r.exports=e.default})(E,E.exports);var U=E.exports;const M=R(U),k={getCQPath(r){const{pagePath:e="",itemPath:s="",injectPropsOnInit:i}=r;let{cqPath:a=""}=r;return i&&!a&&(a=M(s?`${e}/jcr:content/${s}`:e),a=a.replace(/^\.$/,"")),a},modelToProps(r){const e=Object.getOwnPropertyNames(r),s={},i=a=>{const d=a.substring(1);return`cq${d.substring(0,1).toUpperCase()}${d.substring(1)}`};return e.forEach(a=>{let d=a;d.startsWith(":")&&(d=i(d)),s[d]=r[a]}),s}},b=t.defineComponent({inheritAttrs:!1,__name:"EditableProvider",props:{editConfig:{type:Object,default:()=>({isEmpty:()=>!1})},componentProperties:{type:Object,default:()=>({})},containerProps:{type:Object}},setup(r){const e=r,s=t.inject("isInEditor",u.AuthoringUtils.isInEditor()),i=t.useSlots(),a=t.useAttrs(),d=t.computed(()=>{const f={},{componentProperties:m}=e;return s&&(f["data-cq-data-path"]=m.cqPath,e.editConfig.resourceType&&(f["data-cq-resource-type"]=e.editConfig.resourceType)),f}),P=t.computed(()=>{var n;const f={},{componentProperties:m}=e,{appliedCssClassNames:c}=m,o=[];return c&&o.push(c),(n=e==null?void 0:e.containerProps)!=null&&n.class&&o.push(e.containerProps.class),o.length&&(f.class=o.join(" ")),f}),p=t.computed(()=>s&&typeof e.editConfig.isEmpty=="function"&&e.editConfig.isEmpty(e.componentProperties)?{class:"cq-placeholder","data-emptytext":e.editConfig.emptyLabel}:null);return(f,m)=>{var c,o,n,l;return!t.unref(s)&&e.componentProperties.hasOwnProperty("aemNoDecoration")&&e.componentProperties.aemNoDecoration||e.componentProperties.hasOwnProperty("cqHierarchyType")&&e.componentProperties.cqHierarchyType==="page"?(t.openBlock(),t.createBlock(t.resolveDynamicComponent((o=(c=t.unref(i)).default)==null?void 0:o.call(c)[0]),t.normalizeProps(t.mergeProps({key:0},{...t.unref(a)})),null,16)):(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.mergeProps({key:1},{...d.value,...P.value})),[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((l=(n=t.unref(i)).default)==null?void 0:l.call(n)[0]),t.normalizeProps(t.guardReactiveProps({...t.unref(a),componentProperties:e.componentProperties})),null,16)),p.value?(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.mergeProps({key:0},p.value)),null,16)):t.createCommentVNode("",!0)],16))}}}),j=t.defineComponent({inheritAttrs:!1,__name:"CompositeEditableProvider",props:{editConfig:{type:Object,default:()=>({isEmpty:()=>!1})}},setup(r){const e=r,s=t.useSlots(),i=t.useAttrs();return(a,d)=>(t.openBlock(),t.createBlock(b,t.normalizeProps(t.guardReactiveProps({...t.unref(i),componentProperties:{...t.unref(i)},editConfig:e.editConfig})),{default:t.withCtx(()=>{var P,p;return[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((p=(P=t.unref(s)).default)==null?void 0:p.call(P)[0])))]}),_:1},16))}}),A=t.defineComponent({inheritAttrs:!1,__name:"ModelProvider",props:{cqPath:{type:String},cqForceReload:{type:Boolean,default:!1},injectPropsOnInit:{type:Boolean,default:!1},pagePath:{type:String},itemPath:{type:String}},setup(r){const e=r,s=t.useSlots(),i=t.useAttrs(),a=t.inject("isInEditor",u.AuthoringUtils.isInEditor()),d=t.ref(i),P=()=>{const{pagePath:m,itemPath:c,injectPropsOnInit:o,cqPath:n}=e;return k.getCQPath({pagePath:m,itemPath:c,injectPropsOnInit:o,cqPath:n})},p=m=>{const{pagePath:c,itemPath:o,injectPropsOnInit:n}=e,l=m||e.cqPath||c&&k.getCQPath({pagePath:c,itemPath:o,injectPropsOnInit:n});l&&u.ModelManager.getData({path:l,forceReload:e.cqForceReload}).then(g=>{g&&Object.keys(g).length>0&&(Object.assign(d.value,k.modelToProps(g)),n&&a&&u.PathUtils.dispatchGlobalCustomEvent("cq-async-content-loaded",{}))}).catch(g=>{console.error(g)})},f=p.bind(null,P());return t.onMounted(()=>{const m=P();e.injectPropsOnInit&&p(m),u.ModelManager.addListener(m,f)}),t.onUnmounted(()=>{u.ModelManager.removeListener(e.cqPath,f)}),(m,c)=>{var o,n;return t.openBlock(),t.createBlock(t.resolveDynamicComponent((n=(o=t.unref(s)).default)==null?void 0:n.call(o)[0]),t.normalizeProps(t.guardReactiveProps({cqPath:P(),...d.value})),null,16)}}}),O=t.defineComponent({inheritAttrs:!1,__name:"CompositeModelProvider",props:{modelConfig:{type:Object,default:()=>({injectPropsOnInit:!1,forceReload:!1})}},setup(r){const e=r,s=t.useSlots(),i=t.useAttrs(),{modelConfig:a}=t.toRefs(e),d=i.cqForceReload||a.value.forceReload,{injectPropsOnInit:P}=a.value;return(p,f)=>(t.openBlock(),t.createBlock(A,t.mergeProps({"cq-force-reload":t.unref(d),"inject-props-on-init":t.unref(P)},{...t.unref(i)}),{default:t.withCtx(()=>{var m,c;return[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((c=(m=t.unref(s)).default)==null?void 0:c.call(m)[0])))]}),_:1},16,["cq-force-reload","inject-props-on-init"]))}}),w=t.defineComponent({inheritAttrs:!1,__name:"ContextProvider",setup(r){const e=t.useSlots(),s=t.useAttrs(),i=t.inject("componentMapping",new y.ComponentMapping),a=t.inject("isInEditor",u.AuthoringUtils.isInEditor());return t.provide("isInEditor",a),t.provide("componentMapping",i),(d,P)=>{var p,f;return t.openBlock(),t.createBlock(t.resolveDynamicComponent((f=(p=t.unref(e)).default)==null?void 0:f.call(p)[0]),t.normalizeProps(t.guardReactiveProps({...t.unref(s)})),null,16)}}}),N=r=>t.h(w,{},()=>[t.h(r)]),D=(r,e)=>t.h(O,{modelConfig:e},()=>[t.h(r)]),S=(r,e)=>t.h(j,{editConfig:e},()=>[t.h(r)]),x=(r,e,s)=>{const{injectPropsOnInit:i=!0,forceReload:a=!1,...d}=s||{},P={injectPropsOnInit:i,forceReload:a,...d};let p=r;return p=N(D(S(p,e),P)),p},G=y.ComponentMapping.map,V=y.ComponentMapping.get;y.ComponentMapping.map=function(e,s,i={isEmpty:()=>!1},a={}){const{injectPropsOnInit:d=!1,...P}=a||{},p=x(s,i,{injectPropsOnInit:d,...P});return G.call(y.ComponentMapping,e,p),p},y.ComponentMapping.get=V;const Q=r=>(e,s,i={})=>y.ComponentMapping.map(r,e,s,i),H=(r,e,s,i)=>{let a=[];r&&(a=[r]),e&&a.push(e);const d=s==null?void 0:s.class;return d&&!i&&a.push(d),a},W=r=>({appliedCssClassNames:{type:String},baseCssClass:{type:String,default:r},containerProps:{type:Object,default:()=>{}},id:{type:String}}),J=["data-cq-data-path","data-emptytext"],T=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentPlaceholder",props:{emptyLabel:{type:String},path:{type:String}},setup(r){const e=r;return(s,i)=>(t.openBlock(),t.createElementBlock("div",{"data-cq-data-path":e.path,"data-emptytext":e.emptyLabel,class:"aem-AllowedComponent--component cq-placeholder placeholder"},null,8,J))}}),X=["data-text"],$=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentPlaceholderList",props:{emptyLabel:{type:String},components:{type:Array},placeholderProps:{type:Object},title:{type:String},cqPath:{type:String}},setup(r){const e=r,s=t.computed(()=>e.components&&e.components.length>0?e.title:e.emptyLabel);return(i,a)=>{var d;return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["aem-AllowedComponent--list",(d=e.placeholderProps)==null?void 0:d.placeholderClassNames])},[t.createElementVNode("div",{"data-text":s.value,class:"aem-AllowedComponent--title"},null,8,X),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.components,P=>(t.openBlock(),t.createBlock(T,{key:P.path,"empty-label":P.title,path:P.path},null,8,["empty-label","path"]))),128))],2)}}}),Y=["data-cq-data-path"],L=t.defineComponent({__name:"ContainerPlaceholder",props:{cqPath:{type:String,default:""},placeholderClassNames:{type:String}},setup(r){const e=r;return(s,i)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(e.placeholderClassNames),"data-cq-data-path":`${e.cqPath}/*`},null,10,Y))}}),F=t.defineComponent({name:"Container",inheritAttrs:!1,__name:"Container",props:{aemNoDecoration:{type:Boolean,default:!1},appliedCssClassNames:{type:String},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},getContainerProps:{type:Function},getItemComponentProps:{type:Function},getPlaceholderProps:{type:Function},isInEditor:{type:Boolean,default:void 0}},setup(r){const e=r,s=typeof e.isInEditor<"u"?e.isInEditor:t.inject("isInEditor",u.AuthoringUtils.isInEditor()),i=t.inject("componentMapping",new y.ComponentMapping),a=m=>{var c;return((c=e.cqPath)==null?void 0:c.length)>0?`${e.cqPath}/${m}`:m},d=(m,c,o)=>{const n=a(o);return t.h(m,{...c,cqPath:n,containerProps:typeof e.getItemComponentProps=="function"?e.getItemComponentProps(o):{}})},P=t.computed(()=>{let m={};return typeof e.getContainerProps=="function"?m=e.getContainerProps():(m={class:"aem-container"},s&&(m["data-cq-data-path"]=e.cqPath)),m}),p=t.computed(()=>{const m=[];return Object.keys(e.cqItems).length>0&&e.cqItemsOrder.length>0&&e.cqItemsOrder.forEach(c=>{const o=k.modelToProps(e.cqItems[c]);if(o&&typeof o.cqType<"u"){const n=i.get(o.cqType);n&&m.push(d(n,o,c))}}),m}),f=t.computed(()=>typeof e.getPlaceholderProps=="function"?e.getPlaceholderProps():{cqPath:e.cqPath,placeholderClassNames:"new section"});return(m,c)=>!t.unref(s)&&e.aemNoDecoration?(t.openBlock(!0),t.createElementBlock(t.Fragment,{key:0},t.renderList(p.value,o=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(o),{key:o.toString()}))),128)):(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.mergeProps({key:1},{...P.value})),[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(p.value,o=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(o),{key:o.toString()}))),128)),t.unref(s)?(t.openBlock(),t.createBlock(L,t.normalizeProps(t.mergeProps({key:0},f.value)),null,16)):t.createCommentVNode("",!0)],16))}}),z=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentsContainer",props:{_allowedComponentPlaceholderListEmptyLabel:{type:String,default:"No allowed components"},aemNoDecoration:{type:Boolean,default:!1},allowedComponents:{type:Object},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},getContainerProps:{type:Function},getItemComponentProps:{type:Function},getPlaceholderProps:{type:Function},isInEditor:{type:Boolean,default:void 0},title:{type:String}},setup(r){const e=r,s=typeof e.isInEditor<"u"?e.isInEditor:t.inject("isInEditor",u.AuthoringUtils.isInEditor()),i=t.computed(()=>typeof e.getPlaceholderProps=="function"?e.getPlaceholderProps():{cqPath:e.cqPath,placeholderClassNames:"new section"}),a=t.useAttrs();return(d,P)=>{var p;return t.unref(s)&&e.allowedComponents&&((p=e.allowedComponents)!=null&&p.applicable)?(t.openBlock(),t.createBlock($,{key:0,components:e.allowedComponents.components,"cq-path":e.cqPath,"empty-label":e._allowedComponentPlaceholderListEmptyLabel,"placeholder-props":i.value,title:e.title},null,8,["components","cq-path","empty-label","placeholder-props","title"])):(t.openBlock(),t.createBlock(F,t.mergeProps({key:1,"aem-no-decoration":e.aemNoDecoration,"cq-items":e.cqItems,"cq-items-order":e.cqItemsOrder,"cq-path":e.cqPath,"get-container-props":e.getContainerProps,"get-item-component-props":e.getItemComponentProps,"get-placeholder-props":e.getPlaceholderProps,"is-in-editor":t.unref(s)},{...t.unref(a)}),null,16,["aem-no-decoration","cq-items","cq-items-order","cq-path","get-container-props","get-item-component-props","get-placeholder-props","is-in-editor"]))}}}),Z=t.defineComponent({name:"Page",inheritAttrs:!1,__name:"Page",props:{cqChildren:{type:Object,default:()=>({})},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""}},setup(r){const e=r,s=t.useAttrs(),i=t.inject("isInEditor",u.AuthoringUtils.isInEditor()),a=t.inject("componentMapping",new y.ComponentMapping),d=c=>{var o;return((o=e.cqPath)==null?void 0:o.length)>0?`${e.cqPath}/jcr:content/${c}`:c},P=(c,o,n)=>{const l=d(n);return t.h(c,{...o,cqPath:l,containerProps:{}})},p=t.computed(()=>{const c=[];return Object.keys(e.cqItems).length>0&&e.cqItemsOrder.length>0&&e.cqItemsOrder.forEach(o=>{const n=k.modelToProps(e.cqItems[o]);if(n&&typeof n.cqType<"u"){const l=a.get(n.cqType);l&&c.push(P(l,n,o))}}),c}),f=t.computed(()=>{const c=[];return Object.keys(e.cqChildren).length===0||Object.keys(e.cqChildren).forEach(o=>{const n=k.modelToProps(e.cqChildren[o]);if(n&&typeof n.cqType<"u"){const l=a.get(n.cqType);l&&c.push(t.h(l,{...n,cqPath:n.cqPath}))}}),c}),m=t.computed(()=>{const c=["aem-page"];s.cssClassNames&&c.push(...s.cssClassNames.split(" "));const o={class:c.join(" ")};return i&&(o["data-cq-data-path"]=e.cqPath),o});return(c,o)=>(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.guardReactiveProps(m.value)),[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(p.value,n=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(n),{key:n.toString()}))),128)),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(f.value,n=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(n),{key:n.toString()}))),128))],16))}}),K=t.defineComponent({inheritAttrs:!1,__name:"ResponsiveGrid",props:{aemNoDecoration:{type:Boolean,default:!1},cqPath:{type:String,default:""},gridClassNames:{type:String},columnClassNames:{type:Object},isInEditor:{type:Boolean,default:void 0}},setup(r){const e=r,s=t.useAttrs(),i=typeof e.isInEditor<"u"?e.isInEditor:t.inject("isInEditor",u.AuthoringUtils.isInEditor()),a=()=>{const p={},f=["aem-container"];return e.gridClassNames&&f.push(e.gridClassNames),p.class=f.join(" "),i&&(p["data-cq-data-path"]=e.cqPath),p},d=()=>{const p={cqPath:e.cqPath},f=["new","section","aem-Grid-newComponent"];return p.placeholderClassNames=f.join(" "),p},P=p=>{const f={};return e.columnClassNames&&e.columnClassNames[p]&&(f.class=e.columnClassNames[p]),e.aemNoDecoration&&(f["data-no-decoration"]=!0),f};return(p,f)=>(t.openBlock(),t.createBlock(z,t.mergeProps({"aem-no-decoration":e.aemNoDecoration,"cq-path":e.cqPath,"get-container-props":a,"get-item-component-props":P,"get-placeholder-props":d,"is-in-editor":t.unref(i)},{...t.unref(s)}),null,16,["aem-no-decoration","cq-path","is-in-editor"]))}});Object.defineProperty(h,"ComponentMapping",{enumerable:!0,get:()=>y.ComponentMapping}),h.AllowedComponentPlaceholder=T,h.AllowedComponentPlaceholderList=$,h.AllowedComponentsContainer=z,h.CompositeEditableProvider=j,h.CompositeModelProvider=O,h.Container=F,h.ContainerPlaceholder=L,h.ContextProvider=w,h.EditableProvider=b,h.MapTo=Q,h.ModelProvider=A,h.Page=Z,h.ResponsiveGrid=K,h.Utils=k,h.componentClassNames=H,h.componentProperties=W,h.withContext=N,h.withEditable=S,h.withModel=D,Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});
