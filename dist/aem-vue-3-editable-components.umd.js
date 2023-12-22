(function(h,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue"),require("@adobe/aem-spa-component-mapping"),require("@adobe/aem-spa-page-model-manager")):typeof define=="function"&&define.amd?define(["exports","vue","@adobe/aem-spa-component-mapping","@adobe/aem-spa-page-model-manager"],t):(h=typeof globalThis<"u"?globalThis:h||self,t(h.aemVue3EditableComponents={},h.Vue,h.AemSpaComponentMapping,h.AemSpaPageModelManager))})(this,function(h,t,C,y){"use strict";function F(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var E={exports:{}};(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;function n(m){"@babel/helpers - typeof";return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},n(m)}var r=47,s=46,i=function(d){var f=n(d);if(f!=="string")throw new TypeError("Expected a string, got a ".concat(f))},p=function(d,f){for(var l="",u=0,_=-1,k=0,b,g=0;g<=d.length;++g){if(g<d.length)b=d.charCodeAt(g);else{if(b===r)break;b=r}if(b===r){if(!(_===g-1||k===1))if(_!==g-1&&k===2){if(l.length<2||u!==2||l.charCodeAt(l.length-1)!==s||l.charCodeAt(l.length-2)!==s){if(l.length>2){var I=l.lastIndexOf("/");if(I!==l.length-1){I===-1?(l="",u=0):(l=l.slice(0,I),u=l.length-1-l.lastIndexOf("/")),_=g,k=0;continue}}else if(l.length===2||l.length===1){l="",u=0,_=g,k=0;continue}}f&&(l.length>0?l+="/..":l="..",u=2)}else l.length>0?l+="/"+d.slice(_+1,g):l=d.slice(_+1,g),u=g-_-1;_=g,k=0}else b===s&&k!==-1?++k:k=-1}return l},c=function(d){try{return decodeURIComponent(d)}catch{return d}},a=function(d){i(d);var f=d;if(f.length===0)return".";var l=f.charCodeAt(0)===r,u=f.charCodeAt(f.length-1)===r;return f=c(f),f=p(f,!l),f.length===0&&!l&&(f="."),f.length>0&&u&&(f+="/"),l?"/"+f:f},P=a;e.default=P,o.exports=e.default})(E,E.exports);var U=E.exports;const M=F(U),q={getItemPath(o,e,n){let r=(e==null?void 0:e.length)>0?`${e}/${o}`:o;return n&&(r=(e==null?void 0:e.length)>0?`${e}/jcr:content/${o}`:o),r},connectComponentWithItem(o,e,n,r,s,i){const p=this.getItemPath(n,r,i);return t.h(o,{...e,cqPath:p,containerProps:s(n)})},getChildComponents(o,e,n,r,s,i,p){const c=[];return Object.keys(e).length>0&&n.length>0&&n.forEach(a=>{const P=this.modelToProps(e[a]);if(P&&typeof P.cqType<"u"){const m=p.get(P.cqType);r&&(P.aemNoDecoration=r),m&&c.push(this.connectComponentWithItem(m,P,a,o,s,i))}}),c},getChildPages(o,e){const n=[];return Object.keys(o).length===0||Object.keys(o).forEach(r=>{const s=this.modelToProps(o[r]);if(s&&typeof s.cqType<"u"){const i=e.get(s.cqType);i&&n.push(t.h(i,{...s,cqPath:s.cqPath}))}}),n},getCQPath(o){const{pagePath:e="",itemPath:n="",injectPropsOnInit:r}=o;let{cqPath:s=""}=o;return r&&!s&&(s=M(n?`${e}/jcr:content/${n}`:e),s=s.replace(/^\.$/,"")),s},modelToProps(o){const e=Object.getOwnPropertyNames(o),n={},r=s=>{const i=s.substring(1);return`cq${i.substring(0,1).toUpperCase()}${i.substring(1)}`};return e.forEach(s=>{let i=s;i.startsWith(":")&&(i=r(i)),n[i]=o[s]}),n}},B=t.defineComponent({inheritAttrs:!1,__name:"EditableProvider",props:{editConfig:{type:Object,default:()=>({isEmpty:()=>!1})},componentProperties:{type:Object,default:()=>({})},containerProps:{type:Object}},setup(o){const e=o,n=t.inject("isInEditor",y.AuthoringUtils.isInEditor()),r=t.useSlots(),s=t.useAttrs(),i=t.computed(()=>{const a={},{componentProperties:P}=e,{cqPath:m}=P;return n&&(a["data-cq-data-path"]=m,e.editConfig.resourceType&&(a["data-cq-resource-type"]=e.editConfig.resourceType)),a}),p=t.computed(()=>{var l;const a={},{componentProperties:P}=e,{appliedCssClassNames:m,cqType:d}=P,f=[];return m&&f.push(m),(l=e==null?void 0:e.containerProps)!=null&&l.class&&f.push(e.containerProps.class),d&&(d!=null&&d.endsWith("/container"))&&f.push("aem-editable"),f.length&&(a.class=f.join(" ")),a}),c=t.computed(()=>n&&typeof e.editConfig.isEmpty=="function"&&e.editConfig.isEmpty(e.componentProperties)?{class:"cq-placeholder","data-emptytext":e.editConfig.emptyLabel}:null);return(a,P)=>{var m,d,f,l;return!t.unref(n)&&e.componentProperties.hasOwnProperty("aemNoDecoration")&&e.componentProperties.aemNoDecoration||e.componentProperties.hasOwnProperty("cqHierarchyType")&&e.componentProperties.cqHierarchyType==="page"?(t.openBlock(),t.createBlock(t.resolveDynamicComponent((d=(m=t.unref(r)).default)==null?void 0:d.call(m)[0]),t.normalizeProps(t.mergeProps({key:0},{...t.unref(s),containerProps:e.containerProps})),null,16)):(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.mergeProps({key:1},{...i.value,...p.value})),[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((l=(f=t.unref(r)).default)==null?void 0:l.call(f)[0]),t.normalizeProps(t.guardReactiveProps({...t.unref(s),componentProperties:e.componentProperties})),null,16)),c.value?(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.mergeProps({key:0},c.value)),null,16)):t.createCommentVNode("",!0)],16))}}}),j=t.defineComponent({inheritAttrs:!1,__name:"CompositeEditableProvider",props:{editConfig:{type:Object,default:()=>({isEmpty:()=>!1})}},setup(o){const e=o,n=t.useSlots(),r=t.useAttrs();return(s,i)=>(t.openBlock(),t.createBlock(B,t.normalizeProps(t.guardReactiveProps({...t.unref(r),componentProperties:{...t.unref(r)},editConfig:e.editConfig})),{default:t.withCtx(()=>{var p,c;return[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((c=(p=t.unref(n)).default)==null?void 0:c.call(p)[0])))]}),_:1},16))}}),A=t.defineComponent({inheritAttrs:!1,__name:"ModelProvider",props:{cqPath:{type:String},cqForceReload:{type:Boolean,default:!1},injectPropsOnInit:{type:Boolean,default:!1},modelProperties:{type:Object,default:()=>({})},pagePath:{type:String},itemPath:{type:String}},setup(o){const e=o,n=t.useSlots(),r=t.inject("isInEditor",y.AuthoringUtils.isInEditor()),s=t.reactive(t.useAttrs()),i=()=>{const{pagePath:a,itemPath:P,injectPropsOnInit:m,cqPath:d}=e;return q.getCQPath({pagePath:a,itemPath:P,injectPropsOnInit:m,cqPath:d})},p=a=>{const{pagePath:P,itemPath:m,injectPropsOnInit:d}=e,f=a||e.cqPath||P&&q.getCQPath({pagePath:P,itemPath:m,injectPropsOnInit:d});f&&y.ModelManager.getData({path:f,forceReload:e.cqForceReload}).then(l=>{l&&Object.keys(l).length>0&&(Object.assign(s,q.modelToProps(l)),d&&r&&y.PathUtils.dispatchGlobalCustomEvent("cq-async-content-loaded",{}))}).catch(l=>{console.error(l)})},c=p.bind(null,i());return t.onMounted(()=>{const a=i();e.injectPropsOnInit&&p(a),y.ModelManager.addListener(a,c)}),t.onUnmounted(()=>{y.ModelManager.removeListener(e.cqPath,c)}),(a,P)=>{var m,d;return t.openBlock(),t.createBlock(t.resolveDynamicComponent((d=(m=t.unref(n)).default)==null?void 0:d.call(m)[0]),t.normalizeProps(t.guardReactiveProps({cqPath:i(),...s})),null,16)}}}),O=t.defineComponent({inheritAttrs:!1,__name:"CompositeModelProvider",props:{modelConfig:{type:Object,default:()=>({injectPropsOnInit:!1,forceReload:!1})}},setup(o){const e=o,n=t.useSlots(),r=t.useAttrs(),{modelConfig:s}=t.toRefs(e),i=r.cqForceReload||s.value.forceReload,{injectPropsOnInit:p}=s.value;return(c,a)=>(t.openBlock(),t.createBlock(A,t.mergeProps({"cq-force-reload":t.unref(i),"inject-props-on-init":t.unref(p),"model-properties":{...t.unref(r)}},{...t.unref(r)}),{default:t.withCtx(()=>{var P,m;return[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((m=(P=t.unref(n)).default)==null?void 0:m.call(P)[0])))]}),_:1},16,["cq-force-reload","inject-props-on-init","model-properties"]))}}),w=t.defineComponent({inheritAttrs:!1,__name:"ContextProvider",setup(o){const e=t.useSlots(),n=t.useAttrs(),r=t.inject("componentMapping",new C.ComponentMapping),s=t.inject("isInEditor",y.AuthoringUtils.isInEditor());return t.provide("isInEditor",s),t.provide("componentMapping",r),(i,p)=>{var c,a;return t.openBlock(),t.createBlock(t.resolveDynamicComponent((a=(c=t.unref(e)).default)==null?void 0:a.call(c)[0]),t.normalizeProps(t.guardReactiveProps({...t.unref(n)})),null,16)}}}),N=o=>t.h(w,{},()=>[t.h(o)]),D=(o,e)=>t.h(O,{modelConfig:e},()=>[t.h(o)]),S=(o,e)=>t.h(j,{editConfig:e},()=>[t.h(o)]),x=(o,e,n)=>{const{injectPropsOnInit:r=!0,forceReload:s=!1,...i}=n||{},p={injectPropsOnInit:r,forceReload:s,...i};let c=o;return c=N(D(S(c,e),p)),c},G=C.ComponentMapping.map,V=C.ComponentMapping.get;C.ComponentMapping.map=function(e,n,r={isEmpty:()=>!1},s={}){const{injectPropsOnInit:i=!1,...p}=s||{},c=x(n,r,{injectPropsOnInit:i,...p});return G.call(C.ComponentMapping,e,c),c},C.ComponentMapping.get=V;const Q=o=>(e,n,r={})=>C.ComponentMapping.map(o,e,n,r),W=(o,e,n,r,s,i)=>{let p=[];o&&(p=[o]),e&&p.push(e),n&&p.push(...n.split(" "));const c=r==null?void 0:r.class;return i&&c&&!s&&p.push(c),p},H=o=>({aemNoDecoration:{type:Boolean,default:!1},appliedCssClassNames:{type:String},baseCssClass:{type:String,default:o},containerProps:{type:Object,default:()=>{}},cssClassNames:{type:String},id:{type:String}}),J=["data-cq-data-path","data-emptytext"],$=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentPlaceholder",props:{emptyLabel:{type:String},path:{type:String}},setup(o){const e=o;return(n,r)=>(t.openBlock(),t.createElementBlock("div",{"data-cq-data-path":e.path,"data-emptytext":e.emptyLabel,class:"aem-AllowedComponent--component cq-placeholder placeholder"},null,8,J))}}),X=["data-text"],L=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentPlaceholderList",props:{emptyLabel:{type:String},components:{type:Array},placeholderProps:{type:Object},title:{type:String},cqPath:{type:String}},setup(o){const e=o,n=t.computed(()=>e.components&&e.components.length>0?e.title:e.emptyLabel);return(r,s)=>{var i;return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["aem-AllowedComponent--list",(i=e.placeholderProps)==null?void 0:i.placeholderClassNames])},[t.createElementVNode("div",{"data-text":n.value,class:"aem-AllowedComponent--title"},null,8,X),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.components,p=>(t.openBlock(),t.createBlock($,{key:p.path,"empty-label":p.title,path:p.path},null,8,["empty-label","path"]))),128))],2)}}}),Y=["data-cq-data-path"],T=t.defineComponent({__name:"ContainerPlaceholder",props:{cqPath:{type:String,default:""},placeholderClassNames:{type:String}},setup(o){const e=o;return(n,r)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(e.placeholderClassNames),"data-cq-data-path":`${e.cqPath}/*`},null,10,Y))}}),R=t.defineComponent({name:"Container",inheritAttrs:!1,__name:"Container",props:{aemNoDecoration:{type:Boolean,default:!1},appliedCssClassNames:{type:String},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},getContainerProps:{type:Function},getItemComponentProps:{type:Function},getPlaceholderProps:{type:Function},isInEditor:{type:Boolean,default:void 0}},setup(o){const e=o,n=t.inject("isInEditor",y.AuthoringUtils.isInEditor()),r=typeof e.isInEditor<"u"?e.isInEditor:n,s=t.inject("componentMapping",new C.ComponentMapping),i=t.computed(()=>{let a={};return typeof e.getContainerProps=="function"?a=e.getContainerProps():(a={class:"aem-container"},r&&(a["data-cq-data-path"]=e.cqPath)),a}),p=t.computed(()=>q.getChildComponents(e.cqPath,e.cqItems,e.cqItemsOrder,e.aemNoDecoration,typeof e.getItemComponentProps=="function"?e.getItemComponentProps:()=>({}),!1,s)),c=t.computed(()=>typeof e.getPlaceholderProps=="function"?e.getPlaceholderProps():{cqPath:e.cqPath,placeholderClassNames:"new section"});return(a,P)=>(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.guardReactiveProps({...i.value})),[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(p.value,m=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(m),{key:m.toString()}))),128)),t.unref(n)?(t.openBlock(),t.createBlock(T,t.normalizeProps(t.mergeProps({key:0},c.value)),null,16)):t.createCommentVNode("",!0)],16))}}),z=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentsContainer",props:{_allowedComponentPlaceholderListEmptyLabel:{type:String,default:"No allowed components"},aemNoDecoration:{type:Boolean,default:!1},allowedComponents:{type:Object},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},getContainerProps:{type:Function},getItemComponentProps:{type:Function},getPlaceholderProps:{type:Function},isInEditor:{type:Boolean,default:void 0},title:{type:String}},setup(o){const e=o,n=typeof e.isInEditor<"u"?e.isInEditor:t.inject("isInEditor",y.AuthoringUtils.isInEditor()),r=t.computed(()=>typeof e.getPlaceholderProps=="function"?e.getPlaceholderProps():{cqPath:e.cqPath,placeholderClassNames:"new section"}),s=t.useAttrs();return(i,p)=>{var c;return t.unref(n)&&e.allowedComponents&&((c=e.allowedComponents)!=null&&c.applicable)?(t.openBlock(),t.createBlock(L,{key:0,components:e.allowedComponents.components,"cq-path":e.cqPath,"empty-label":e._allowedComponentPlaceholderListEmptyLabel,"placeholder-props":r.value,title:e.title},null,8,["components","cq-path","empty-label","placeholder-props","title"])):(t.openBlock(),t.createBlock(R,t.mergeProps({key:1,"aem-no-decoration":e.aemNoDecoration,"cq-items":e.cqItems,"cq-items-order":e.cqItemsOrder,"cq-path":e.cqPath,"get-container-props":e.getContainerProps,"get-item-component-props":e.getItemComponentProps,"get-placeholder-props":e.getPlaceholderProps,"is-in-editor":t.unref(n)},{...t.unref(s)}),null,16,["aem-no-decoration","cq-items","cq-items-order","cq-path","get-container-props","get-item-component-props","get-placeholder-props","is-in-editor"]))}}}),Z=t.defineComponent({name:"Page",inheritAttrs:!1,__name:"Page",props:{aemNoDecoration:{type:Boolean,default:!1},cqChildren:{type:Object,default:()=>({})},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""}},setup(o){const e=t.useAttrs(),n=t.inject("isInEditor",y.AuthoringUtils.isInEditor()),r=t.inject("componentMapping",new C.ComponentMapping),s=o,i=t.computed(()=>q.getChildComponents(s.cqPath,s.cqItems,s.cqItemsOrder,s.aemNoDecoration,()=>({}),!0,r)),p=t.computed(()=>q.getChildPages(s.cqChildren,r)),c=t.computed(()=>{const a=["aem-page"];e.cssClassNames&&a.push(...e.cssClassNames.split(" "));const P={class:a.join(" ")};return n&&(P["data-cq-data-path"]=s.cqPath),P});return t.onMounted(()=>{e.title&&(document.title=e.title)}),t.onUpdated(()=>{e.title&&(document.title=e.title)}),(a,P)=>(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.guardReactiveProps(c.value)),[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(i.value,m=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(m),{key:m.toString()}))),128)),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(p.value,m=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(m),{key:m.toString()}))),128))],16))}}),K=t.defineComponent({inheritAttrs:!1,__name:"ResponsiveGrid",props:{aemNoDecoration:{type:Boolean,default:!1},cqPath:{type:String,default:""},gridClassNames:{type:String},columnClassNames:{type:Object},isInEditor:{type:Boolean,default:void 0},title:{type:String,default:"Layout Container"}},setup(o){const e=o,n=t.useAttrs(),r=typeof e.isInEditor<"u"?e.isInEditor:t.inject("isInEditor",y.AuthoringUtils.isInEditor()),s=()=>{const c={},a=["aem-container"];return e.gridClassNames&&a.push(e.gridClassNames),c.class=a.join(" "),r&&(c["data-cq-data-path"]=e.cqPath),c},i=()=>{const c={cqPath:e.cqPath},a=["new","section","aem-Grid-newComponent"];return c.placeholderClassNames=a.join(" "),c},p=c=>{const a={};return e.columnClassNames&&e.columnClassNames[c]&&(a.class=e.columnClassNames[c]),a};return(c,a)=>(t.openBlock(),t.createBlock(z,t.mergeProps({"aem-no-decoration":e.aemNoDecoration,"cq-path":e.cqPath,"get-container-props":s,"get-item-component-props":p,"get-placeholder-props":i,"is-in-editor":t.unref(r),title:e.title},{...t.unref(n)}),null,16,["aem-no-decoration","cq-path","is-in-editor","title"]))}});Object.defineProperty(h,"ComponentMapping",{enumerable:!0,get:()=>C.ComponentMapping}),h.AllowedComponentPlaceholder=$,h.AllowedComponentPlaceholderList=L,h.AllowedComponentsContainer=z,h.CompositeEditableProvider=j,h.CompositeModelProvider=O,h.Container=R,h.ContainerPlaceholder=T,h.ContextProvider=w,h.EditableProvider=B,h.MapTo=Q,h.ModelProvider=A,h.Page=Z,h.ResponsiveGrid=K,h.Utils=q,h.componentClassNames=W,h.componentProperties=H,h.withContext=N,h.withEditable=S,h.withModel=D,Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});
