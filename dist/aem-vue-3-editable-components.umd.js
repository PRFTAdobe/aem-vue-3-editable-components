(function(h,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue"),require("@adobe/aem-spa-component-mapping"),require("@adobe/aem-spa-page-model-manager")):typeof define=="function"&&define.amd?define(["exports","vue","@adobe/aem-spa-component-mapping","@adobe/aem-spa-page-model-manager"],t):(h=typeof globalThis<"u"?globalThis:h||self,t(h.aemVue3EditableComponents={},h.Vue,h.AemSpaComponentMapping,h.AemSpaPageModelManager))})(this,function(h,t,C,y){"use strict";function z(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var E={exports:{}};(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;function r(m){"@babel/helpers - typeof";return r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},r(m)}var s=47,n=46,i=function(d){var f=r(d);if(f!=="string")throw new TypeError("Expected a string, got a ".concat(f))},p=function(d,f){for(var l="",u=0,_=-1,k=0,b,g=0;g<=d.length;++g){if(g<d.length)b=d.charCodeAt(g);else{if(b===s)break;b=s}if(b===s){if(!(_===g-1||k===1))if(_!==g-1&&k===2){if(l.length<2||u!==2||l.charCodeAt(l.length-1)!==n||l.charCodeAt(l.length-2)!==n){if(l.length>2){var I=l.lastIndexOf("/");if(I!==l.length-1){I===-1?(l="",u=0):(l=l.slice(0,I),u=l.length-1-l.lastIndexOf("/")),_=g,k=0;continue}}else if(l.length===2||l.length===1){l="",u=0,_=g,k=0;continue}}f&&(l.length>0?l+="/..":l="..",u=2)}else l.length>0?l+="/"+d.slice(_+1,g):l=d.slice(_+1,g),u=g-_-1;_=g,k=0}else b===n&&k!==-1?++k:k=-1}return l},a=function(d){try{return decodeURIComponent(d)}catch{return d}},c=function(d){i(d);var f=d;if(f.length===0)return".";var l=f.charCodeAt(0)===s,u=f.charCodeAt(f.length-1)===s;return f=a(f),f=p(f,!l),f.length===0&&!l&&(f="."),f.length>0&&u&&(f+="/"),l?"/"+f:f},P=c;e.default=P,o.exports=e.default})(E,E.exports);var M=E.exports;const U=z(M),q={getItemPath(o,e,r){let s=(e==null?void 0:e.length)>0?`${e}/${o}`:o;return r&&(s=(e==null?void 0:e.length)>0?`${e}/jcr:content/${o}`:o),s},connectComponentWithItem(o,e,r,s,n,i){const p=this.getItemPath(r,s,i);return t.h(o,{...e,cqPath:p,containerProps:n(r)})},getChildComponents(o,e,r,s,n,i,p){const a=[];return Object.keys(e).length>0&&r.length>0&&r.forEach(c=>{const P=this.modelToProps(e[c]);if(P&&typeof P.cqType<"u"){const m=p.get(P.cqType);s&&(P.aemNoDecoration=s),m&&a.push(this.connectComponentWithItem(m,P,c,o,n,i))}}),a},getChildPages(o,e){const r=[];return Object.keys(o).length===0||Object.keys(o).forEach(s=>{const n=this.modelToProps(o[s]);if(n&&typeof n.cqType<"u"){const i=e.get(n.cqType);i&&r.push(t.h(i,{...n,cqPath:n.cqPath}))}}),r},getCQPath(o){const{pagePath:e="",itemPath:r="",injectPropsOnInit:s}=o;let{cqPath:n=""}=o;return s&&!n&&(n=U(r?`${e}/jcr:content/${r}`:e),n=n.replace(/^\.$/,"")),n},modelToProps(o){const e=Object.getOwnPropertyNames(o),r={},s=n=>{const i=n.substring(1);return`cq${i.substring(0,1).toUpperCase()}${i.substring(1)}`};return e.forEach(n=>{let i=n;i.startsWith(":")&&(i=s(i)),r[i]=o[n]}),r}},B=t.defineComponent({inheritAttrs:!1,__name:"EditableProvider",props:{editConfig:{type:Object,default:()=>({isEmpty:()=>!1})},componentProperties:{type:Object,default:()=>({})},containerProps:{type:Object}},setup(o){const e=o,r=t.inject("isInEditor",y.AuthoringUtils.isInEditor()),s=t.useSlots(),n=t.useAttrs(),i=t.computed(()=>{const c={},{componentProperties:P}=e,{cqPath:m}=P;return r&&(c["data-cq-data-path"]=m,e.editConfig.resourceType&&(c["data-cq-resource-type"]=e.editConfig.resourceType)),c}),p=t.computed(()=>{var l;const c={},{componentProperties:P}=e,{appliedCssClassNames:m,cqType:d}=P,f=[];return m&&f.push(m),(l=e==null?void 0:e.containerProps)!=null&&l.class&&f.push(e.containerProps.class),d&&(d!=null&&d.endsWith("/container"))&&f.push("aem-editable"),f.length&&(c.class=f.join(" ")),c}),a=t.computed(()=>r&&typeof e.editConfig.isEmpty=="function"&&e.editConfig.isEmpty(e.componentProperties)?{class:"cq-placeholder","data-emptytext":e.editConfig.emptyLabel}:null);return(c,P)=>{var m,d,f,l;return!t.unref(r)&&e.componentProperties.hasOwnProperty("aemNoDecoration")&&e.componentProperties.aemNoDecoration||e.componentProperties.hasOwnProperty("cqHierarchyType")&&e.componentProperties.cqHierarchyType==="page"?(t.openBlock(),t.createBlock(t.resolveDynamicComponent((d=(m=t.unref(s)).default)==null?void 0:d.call(m)[0]),t.normalizeProps(t.mergeProps({key:0},{...t.unref(n),containerProps:e.containerProps})),null,16)):(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.mergeProps({key:1},{...i.value,...p.value})),[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((l=(f=t.unref(s)).default)==null?void 0:l.call(f)[0]),t.normalizeProps(t.guardReactiveProps({...t.unref(n),componentProperties:e.componentProperties})),null,16)),a.value?(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.mergeProps({key:0},a.value)),null,16)):t.createCommentVNode("",!0)],16))}}}),j=t.defineComponent({inheritAttrs:!1,__name:"CompositeEditableProvider",props:{editConfig:{type:Object,default:()=>({isEmpty:()=>!1})}},setup(o){const e=o,r=t.useSlots(),s=t.useAttrs();return(n,i)=>(t.openBlock(),t.createBlock(B,t.normalizeProps(t.guardReactiveProps({...t.unref(s),componentProperties:{...t.unref(s)},editConfig:e.editConfig})),{default:t.withCtx(()=>{var p,a;return[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((a=(p=t.unref(r)).default)==null?void 0:a.call(p)[0])))]}),_:1},16))}}),A=t.defineComponent({inheritAttrs:!1,__name:"ModelProvider",props:{cqPath:{type:String},cqForceReload:{type:Boolean,default:!1},injectPropsOnInit:{type:Boolean,default:!1},itemPath:{type:String},modelProperties:{type:Object,default:()=>({})},pagePath:{type:String}},setup(o){const e=o,r=t.useSlots(),s=t.inject("isInEditor",y.AuthoringUtils.isInEditor()),n=t.reactive(e.modelProperties),i=()=>{const{pagePath:c,itemPath:P,injectPropsOnInit:m,cqPath:d}=e;return q.getCQPath({pagePath:c,itemPath:P,injectPropsOnInit:m,cqPath:d})},p=c=>{const{pagePath:P,itemPath:m,injectPropsOnInit:d}=e,f=c||e.cqPath||P&&q.getCQPath({pagePath:P,itemPath:m,injectPropsOnInit:d});f&&y.ModelManager.getData({path:f,forceReload:e.cqForceReload}).then(l=>{l&&Object.keys(l).length>0&&(Object.assign(n,q.modelToProps(l)),d&&s&&y.PathUtils.dispatchGlobalCustomEvent("cq-async-content-loaded",{}))}).catch(l=>{console.error(l)})},a=p.bind(null,i());return t.onMounted(()=>{const c=i();e.injectPropsOnInit&&p(c),y.ModelManager.addListener(c,a)}),t.onUnmounted(()=>{y.ModelManager.removeListener(e.cqPath,a)}),t.watch(()=>e.modelProperties,async(c,P)=>{c!==P&&Object.assign(n,e.modelProperties)}),(c,P)=>{var m,d;return t.openBlock(),t.createBlock(t.resolveDynamicComponent((d=(m=t.unref(r)).default)==null?void 0:d.call(m)[0]),t.mergeProps({key:e.modelProperties},{...n,cqPath:i()}),null,16)}}}),O=t.defineComponent({inheritAttrs:!1,__name:"CompositeModelProvider",props:{modelConfig:{type:Object,default:()=>({injectPropsOnInit:!1,forceReload:!1})}},setup(o){const e=o,r=t.useSlots(),s=t.useAttrs(),{modelConfig:n}=t.toRefs(e),i=s.cqForceReload||n.value.forceReload,{injectPropsOnInit:p}=n.value;return(a,c)=>(t.openBlock(),t.createBlock(A,t.mergeProps({"cq-force-reload":t.unref(i),"inject-props-on-init":t.unref(p),"model-properties":{...t.unref(s)}},{...t.unref(s)}),{default:t.withCtx(()=>{var P,m;return[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((m=(P=t.unref(r)).default)==null?void 0:m.call(P)[0])))]}),_:1},16,["cq-force-reload","inject-props-on-init","model-properties"]))}}),w=t.defineComponent({inheritAttrs:!1,__name:"ContextProvider",setup(o){const e=t.useSlots(),r=t.useAttrs(),s=t.inject("componentMapping",new C.ComponentMapping),n=t.inject("isInEditor",y.AuthoringUtils.isInEditor());return t.provide("isInEditor",n),t.provide("componentMapping",s),(i,p)=>{var a,c;return t.openBlock(),t.createBlock(t.resolveDynamicComponent((c=(a=t.unref(e)).default)==null?void 0:c.call(a)[0]),t.normalizeProps(t.guardReactiveProps({...t.unref(r)})),null,16)}}}),N=o=>t.h(w,{},()=>[t.h(o)]),D=(o,e)=>t.h(O,{modelConfig:e},()=>[t.h(o)]),S=(o,e)=>t.h(j,{editConfig:e},()=>[t.h(o)]),x=(o,e,r)=>{const{injectPropsOnInit:s=!0,forceReload:n=!1,...i}=r||{},p={injectPropsOnInit:s,forceReload:n,...i};let a=o;return a=N(D(S(a,e),p)),a},G=C.ComponentMapping.map,V=C.ComponentMapping.get;C.ComponentMapping.map=function(e,r,s={isEmpty:()=>!1},n={}){const{injectPropsOnInit:i=!1,...p}=n||{},a=x(r,s,{injectPropsOnInit:i,...p});return G.call(C.ComponentMapping,e,a),a},C.ComponentMapping.get=V;const Q=o=>(e,r,s={})=>C.ComponentMapping.map(o,e,r,s),W=(o,e,r,s,n,i)=>{let p=[];o&&(p=[o]),e&&p.push(e),r&&p.push(...r.split(" "));const a=s==null?void 0:s.class;return i&&a&&!n&&p.push(a),p},H=o=>({aemNoDecoration:{type:Boolean,default:!1},appliedCssClassNames:{type:String},baseCssClass:{type:String,default:o},containerProps:{type:Object,default:()=>{}},cssClassNames:{type:String},id:{type:String}}),J=["data-cq-data-path","data-emptytext"],$=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentPlaceholder",props:{emptyLabel:{type:String},path:{type:String}},setup(o){const e=o;return(r,s)=>(t.openBlock(),t.createElementBlock("div",{"data-cq-data-path":e.path,"data-emptytext":e.emptyLabel,class:"aem-AllowedComponent--component cq-placeholder placeholder"},null,8,J))}}),X=["data-text"],L=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentPlaceholderList",props:{emptyLabel:{type:String},components:{type:Array},placeholderProps:{type:Object},title:{type:String},cqPath:{type:String}},setup(o){const e=o,r=t.computed(()=>e.components&&e.components.length>0?e.title:e.emptyLabel);return(s,n)=>{var i;return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["aem-AllowedComponent--list",(i=e.placeholderProps)==null?void 0:i.placeholderClassNames])},[t.createElementVNode("div",{"data-text":r.value,class:"aem-AllowedComponent--title"},null,8,X),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.components,p=>(t.openBlock(),t.createBlock($,{key:p.path,"empty-label":p.title,path:p.path},null,8,["empty-label","path"]))),128))],2)}}}),Y=["data-cq-data-path"],T=t.defineComponent({__name:"ContainerPlaceholder",props:{cqPath:{type:String,default:""},placeholderClassNames:{type:String}},setup(o){const e=o;return(r,s)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(e.placeholderClassNames),"data-cq-data-path":`${e.cqPath}/*`},null,10,Y))}}),F=t.defineComponent({name:"Container",inheritAttrs:!1,__name:"Container",props:{aemNoDecoration:{type:Boolean,default:!1},appliedCssClassNames:{type:String},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},getContainerProps:{type:Function},getItemComponentProps:{type:Function},getPlaceholderProps:{type:Function},isInEditor:{type:Boolean,default:void 0}},setup(o){const e=o,r=t.inject("isInEditor",y.AuthoringUtils.isInEditor()),s=typeof e.isInEditor<"u"?e.isInEditor:r,n=t.inject("componentMapping",new C.ComponentMapping),i=t.computed(()=>{let c={};return typeof e.getContainerProps=="function"?c=e.getContainerProps():(c={class:"aem-container"},s&&(c["data-cq-data-path"]=e.cqPath)),c}),p=t.computed(()=>q.getChildComponents(e.cqPath,e.cqItems,e.cqItemsOrder,e.aemNoDecoration,typeof e.getItemComponentProps=="function"?e.getItemComponentProps:()=>({}),!1,n)),a=t.computed(()=>typeof e.getPlaceholderProps=="function"?e.getPlaceholderProps():{cqPath:e.cqPath,placeholderClassNames:"new section"});return(c,P)=>(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.guardReactiveProps({...i.value})),[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(p.value,m=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(m),{key:m.toString()}))),128)),t.unref(r)?(t.openBlock(),t.createBlock(T,t.normalizeProps(t.mergeProps({key:0},a.value)),null,16)):t.createCommentVNode("",!0)],16))}}),R=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentsContainer",props:{_allowedComponentPlaceholderListEmptyLabel:{type:String,default:"No allowed components"},aemNoDecoration:{type:Boolean,default:!1},allowedComponents:{type:Object},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},getContainerProps:{type:Function},getItemComponentProps:{type:Function},getPlaceholderProps:{type:Function},isInEditor:{type:Boolean,default:void 0},title:{type:String}},setup(o){const e=o,r=typeof e.isInEditor<"u"?e.isInEditor:t.inject("isInEditor",y.AuthoringUtils.isInEditor()),s=t.computed(()=>typeof e.getPlaceholderProps=="function"?e.getPlaceholderProps():{cqPath:e.cqPath,placeholderClassNames:"new section"}),n=t.useAttrs();return(i,p)=>{var a;return t.unref(r)&&e.allowedComponents&&((a=e.allowedComponents)!=null&&a.applicable)?(t.openBlock(),t.createBlock(L,{key:0,components:e.allowedComponents.components,"cq-path":e.cqPath,"empty-label":e._allowedComponentPlaceholderListEmptyLabel,"placeholder-props":s.value,title:e.title},null,8,["components","cq-path","empty-label","placeholder-props","title"])):(t.openBlock(),t.createBlock(F,t.mergeProps({key:1,"aem-no-decoration":e.aemNoDecoration,"cq-items":e.cqItems,"cq-items-order":e.cqItemsOrder,"cq-path":e.cqPath,"get-container-props":e.getContainerProps,"get-item-component-props":e.getItemComponentProps,"get-placeholder-props":e.getPlaceholderProps,"is-in-editor":t.unref(r)},{...t.unref(n)}),null,16,["aem-no-decoration","cq-items","cq-items-order","cq-path","get-container-props","get-item-component-props","get-placeholder-props","is-in-editor"]))}}}),Z=t.defineComponent({name:"Page",inheritAttrs:!1,__name:"Page",props:{aemNoDecoration:{type:Boolean,default:!1},cqChildren:{type:Object,default:()=>({})},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""}},setup(o){const e=t.useAttrs(),r=t.inject("isInEditor",y.AuthoringUtils.isInEditor()),s=t.inject("componentMapping",new C.ComponentMapping),n=o,i=t.computed(()=>q.getChildComponents(n.cqPath,n.cqItems,n.cqItemsOrder,n.aemNoDecoration,()=>({}),!0,s)),p=t.computed(()=>q.getChildPages(n.cqChildren,s)),a=t.computed(()=>{const c=["aem-page"];e.cssClassNames&&c.push(...e.cssClassNames.split(" "));const P={class:c.join(" ")};return r&&(P["data-cq-data-path"]=n.cqPath),P});return t.onMounted(()=>{e.title&&(document.title=e.title)}),t.onUpdated(()=>{e.title&&(document.title=e.title)}),(c,P)=>(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.guardReactiveProps(a.value)),[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(i.value,m=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(m),{key:m.toString()}))),128)),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(p.value,m=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(m),{key:m.toString()}))),128))],16))}}),K=t.defineComponent({inheritAttrs:!1,__name:"ResponsiveGrid",props:{aemNoDecoration:{type:Boolean,default:!1},cqPath:{type:String,default:""},gridClassNames:{type:String},columnClassNames:{type:Object},isInEditor:{type:Boolean,default:void 0},title:{type:String,default:"Layout Container"}},setup(o){const e=o,r=t.useAttrs(),s=typeof e.isInEditor<"u"?e.isInEditor:t.inject("isInEditor",y.AuthoringUtils.isInEditor()),n=()=>{const a={},c=["aem-container"];return e.gridClassNames&&c.push(e.gridClassNames),a.class=c.join(" "),s&&(a["data-cq-data-path"]=e.cqPath),a},i=()=>{const a={cqPath:e.cqPath},c=["new","section","aem-Grid-newComponent"];return a.placeholderClassNames=c.join(" "),a},p=a=>{const c={};return e.columnClassNames&&e.columnClassNames[a]&&(c.class=e.columnClassNames[a]),c};return(a,c)=>(t.openBlock(),t.createBlock(R,t.mergeProps({"aem-no-decoration":e.aemNoDecoration,"cq-path":e.cqPath,"get-container-props":n,"get-item-component-props":p,"get-placeholder-props":i,"is-in-editor":t.unref(s),title:e.title},{...t.unref(r)}),null,16,["aem-no-decoration","cq-path","is-in-editor","title"]))}});Object.defineProperty(h,"ComponentMapping",{enumerable:!0,get:()=>C.ComponentMapping}),h.AllowedComponentPlaceholder=$,h.AllowedComponentPlaceholderList=L,h.AllowedComponentsContainer=R,h.CompositeEditableProvider=j,h.CompositeModelProvider=O,h.Container=F,h.ContainerPlaceholder=T,h.ContextProvider=w,h.EditableProvider=B,h.MapTo=Q,h.ModelProvider=A,h.Page=Z,h.ResponsiveGrid=K,h.Utils=q,h.componentClassNames=W,h.componentProperties=H,h.withContext=N,h.withEditable=S,h.withModel=D,Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});
