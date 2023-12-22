(function(h,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue"),require("@adobe/aem-spa-component-mapping"),require("@adobe/aem-spa-page-model-manager")):typeof define=="function"&&define.amd?define(["exports","vue","@adobe/aem-spa-component-mapping","@adobe/aem-spa-page-model-manager"],t):(h=typeof globalThis<"u"?globalThis:h||self,t(h.aemVue3EditableComponents={},h.Vue,h.AemSpaComponentMapping,h.AemSpaPageModelManager))})(this,function(h,t,u,C){"use strict";function F(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var E={exports:{}};(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;function n(f){"@babel/helpers - typeof";return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},n(f)}var s=47,r=46,a=function(d){var l=n(d);if(l!=="string")throw new TypeError("Expected a string, got a ".concat(l))},p=function(d,l){for(var m="",g=0,_=-1,k=0,b,y=0;y<=d.length;++y){if(y<d.length)b=d.charCodeAt(y);else{if(b===s)break;b=s}if(b===s){if(!(_===y-1||k===1))if(_!==y-1&&k===2){if(m.length<2||g!==2||m.charCodeAt(m.length-1)!==r||m.charCodeAt(m.length-2)!==r){if(m.length>2){var I=m.lastIndexOf("/");if(I!==m.length-1){I===-1?(m="",g=0):(m=m.slice(0,I),g=m.length-1-m.lastIndexOf("/")),_=y,k=0;continue}}else if(m.length===2||m.length===1){m="",g=0,_=y,k=0;continue}}l&&(m.length>0?m+="/..":m="..",g=2)}else m.length>0?m+="/"+d.slice(_+1,y):m=d.slice(_+1,y),g=y-_-1;_=y,k=0}else b===r&&k!==-1?++k:k=-1}return m},c=function(d){try{return decodeURIComponent(d)}catch{return d}},i=function(d){a(d);var l=d;if(l.length===0)return".";var m=l.charCodeAt(0)===s,g=l.charCodeAt(l.length-1)===s;return l=c(l),l=p(l,!m),l.length===0&&!m&&(l="."),l.length>0&&g&&(l+="/"),m?"/"+l:l},P=i;e.default=P,o.exports=e.default})(E,E.exports);var M=E.exports;const U=F(M),q={getItemPath(o,e,n){let s=(e==null?void 0:e.length)>0?`${e}/${o}`:o;return n&&(s=(e==null?void 0:e.length)>0?`${e}/jcr:content/${o}`:o),s},connectComponentWithItem(o,e,n,s,r,a){const p=this.getItemPath(n,s,a);return t.h(o,{...e,cqPath:p,containerProps:r(n)})},getChildComponents(o,e,n,s,r,a,p){const c=[];return Object.keys(e).length>0&&n.length>0&&n.forEach(i=>{const P=this.modelToProps(e[i]);if(P&&typeof P.cqType<"u"){const f=p.get(P.cqType);s&&(P.aemNoDecoration=s),f&&c.push(this.connectComponentWithItem(f,P,i,o,r,a))}}),c},getChildPages(o,e){const n=[];return Object.keys(o).length===0||Object.keys(o).forEach(s=>{const r=this.modelToProps(o[s]);if(r&&typeof r.cqType<"u"){const a=e.get(r.cqType);a&&n.push(t.h(a,{...r,cqPath:r.cqPath}))}}),n},getCQPath(o){const{pagePath:e="",itemPath:n="",injectPropsOnInit:s}=o;let{cqPath:r=""}=o;return s&&!r&&(r=U(n?`${e}/jcr:content/${n}`:e),r=r.replace(/^\.$/,"")),r},modelToProps(o){const e=Object.getOwnPropertyNames(o),n={},s=r=>{const a=r.substring(1);return`cq${a.substring(0,1).toUpperCase()}${a.substring(1)}`};return e.forEach(r=>{let a=r;a.startsWith(":")&&(a=s(a)),n[a]=o[r]}),n}},B=t.defineComponent({inheritAttrs:!1,__name:"EditableProvider",props:{editConfig:{type:Object,default:()=>({isEmpty:()=>!1})},componentProperties:{type:Object,default:()=>({})},containerProps:{type:Object}},setup(o){const e=o,n=t.inject("isInEditor",C.AuthoringUtils.isInEditor()),s=t.useSlots(),r=t.useAttrs(),a=t.computed(()=>{const i={},{componentProperties:P}=e,{cqPath:f}=P;return n&&(i["data-cq-data-path"]=f,e.editConfig.resourceType&&(i["data-cq-resource-type"]=e.editConfig.resourceType)),i}),p=t.computed(()=>{var m;const i={},{componentProperties:P}=e,{appliedCssClassNames:f,cqType:d}=P,l=[];return f&&l.push(f),(m=e==null?void 0:e.containerProps)!=null&&m.class&&l.push(e.containerProps.class),d&&(d!=null&&d.endsWith("/container"))&&l.push("aem-editable"),l.length&&(i.class=l.join(" ")),i}),c=t.computed(()=>n&&typeof e.editConfig.isEmpty=="function"&&e.editConfig.isEmpty(e.componentProperties)?{class:"cq-placeholder","data-emptytext":e.editConfig.emptyLabel}:null);return(i,P)=>{var f,d,l,m;return!t.unref(n)&&e.componentProperties.hasOwnProperty("aemNoDecoration")&&e.componentProperties.aemNoDecoration||e.componentProperties.hasOwnProperty("cqHierarchyType")&&e.componentProperties.cqHierarchyType==="page"?(t.openBlock(),t.createBlock(t.resolveDynamicComponent((d=(f=t.unref(s)).default)==null?void 0:d.call(f)[0]),t.normalizeProps(t.mergeProps({key:0},{...t.unref(r),containerProps:e.containerProps})),null,16)):(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.mergeProps({key:1},{...a.value,...p.value})),[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((m=(l=t.unref(s)).default)==null?void 0:m.call(l)[0]),t.normalizeProps(t.guardReactiveProps({...t.unref(r),componentProperties:e.componentProperties})),null,16)),c.value?(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.mergeProps({key:0},c.value)),null,16)):t.createCommentVNode("",!0)],16))}}}),j=t.defineComponent({inheritAttrs:!1,__name:"CompositeEditableProvider",props:{editConfig:{type:Object,default:()=>({isEmpty:()=>!1})}},setup(o){const e=o,n=t.useSlots(),s=t.useAttrs();return(r,a)=>(t.openBlock(),t.createBlock(B,t.normalizeProps(t.guardReactiveProps({...t.unref(s),componentProperties:{...t.unref(s)},editConfig:e.editConfig})),{default:t.withCtx(()=>{var p,c;return[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((c=(p=t.unref(n)).default)==null?void 0:c.call(p)[0])))]}),_:1},16))}}),A=t.defineComponent({inheritAttrs:!1,__name:"ModelProvider",props:{cqPath:{type:String},cqForceReload:{type:Boolean,default:!1},injectPropsOnInit:{type:Boolean,default:!1},modelProperties:{type:Object,default:()=>({})},pagePath:{type:String},itemPath:{type:String}},emits:["updateModel"],setup(o,{emit:e}){const n=o,s=t.useSlots(),r=t.inject("isInEditor",C.AuthoringUtils.isInEditor()),a=e,p=()=>{const{pagePath:P,itemPath:f,injectPropsOnInit:d,cqPath:l}=n;return q.getCQPath({pagePath:P,itemPath:f,injectPropsOnInit:d,cqPath:l})},c=P=>{const{pagePath:f,itemPath:d,injectPropsOnInit:l}=n,m=P||n.cqPath||f&&q.getCQPath({pagePath:f,itemPath:d,injectPropsOnInit:l});m&&C.ModelManager.getData({path:m,forceReload:n.cqForceReload}).then(g=>{g&&Object.keys(g).length>0&&(a("updateModel",{...q.modelToProps(g),cqPath:p()}),l&&r&&C.PathUtils.dispatchGlobalCustomEvent("cq-async-content-loaded",{}))}).catch(g=>{console.error(g)})},i=c.bind(null,p());return t.onMounted(()=>{const P=p();n.injectPropsOnInit&&c(P),C.ModelManager.addListener(P,i)}),t.onUnmounted(()=>{C.ModelManager.removeListener(n.cqPath,i)}),(P,f)=>{var d,l;return t.openBlock(),t.createBlock(t.resolveDynamicComponent((l=(d=t.unref(s)).default)==null?void 0:l.call(d)[0]),t.normalizeProps(t.guardReactiveProps(o.modelProperties)),null,16)}}}),O=t.defineComponent({inheritAttrs:!1,__name:"CompositeModelProvider",props:{modelConfig:{type:Object,default:()=>({injectPropsOnInit:!1,forceReload:!1})}},setup(o){const e=o,n=t.useSlots(),s=t.useAttrs(),r=t.reactive(t.useAttrs()),{modelConfig:a}=t.toRefs(e),p=s.cqForceReload||a.value.forceReload,{injectPropsOnInit:c}=a.value,i=P=>{Object.assign(r,P)};return(P,f)=>(t.openBlock(),t.createBlock(A,t.mergeProps({"cq-force-reload":t.unref(p),"inject-props-on-init":t.unref(c),"model-properties":r},r,{onUpdateModel:i}),{default:t.withCtx(()=>{var d,l;return[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((l=(d=t.unref(n)).default)==null?void 0:l.call(d)[0])))]}),_:1},16,["cq-force-reload","inject-props-on-init","model-properties"]))}}),w=t.defineComponent({inheritAttrs:!1,__name:"ContextProvider",setup(o){const e=t.useSlots(),n=t.useAttrs(),s=t.inject("componentMapping",new u.ComponentMapping),r=t.inject("isInEditor",C.AuthoringUtils.isInEditor());return t.provide("isInEditor",r),t.provide("componentMapping",s),(a,p)=>{var c,i;return t.openBlock(),t.createBlock(t.resolveDynamicComponent((i=(c=t.unref(e)).default)==null?void 0:i.call(c)[0]),t.normalizeProps(t.guardReactiveProps({...t.unref(n)})),null,16)}}}),N=o=>t.h(w,{},()=>[t.h(o)]),D=(o,e)=>t.h(O,{modelConfig:e},()=>[t.h(o)]),S=(o,e)=>t.h(j,{editConfig:e},()=>[t.h(o)]),x=(o,e,n)=>{const{injectPropsOnInit:s=!0,forceReload:r=!1,...a}=n||{},p={injectPropsOnInit:s,forceReload:r,...a};let c=o;return c=N(D(S(c,e),p)),c},G=u.ComponentMapping.map,V=u.ComponentMapping.get;u.ComponentMapping.map=function(e,n,s={isEmpty:()=>!1},r={}){const{injectPropsOnInit:a=!1,...p}=r||{},c=x(n,s,{injectPropsOnInit:a,...p});return G.call(u.ComponentMapping,e,c),c},u.ComponentMapping.get=V;const Q=o=>(e,n,s={})=>u.ComponentMapping.map(o,e,n,s),W=(o,e,n,s,r,a)=>{let p=[];o&&(p=[o]),e&&p.push(e),n&&p.push(...n.split(" "));const c=s==null?void 0:s.class;return a&&c&&!r&&p.push(c),p},H=o=>({aemNoDecoration:{type:Boolean,default:!1},appliedCssClassNames:{type:String},baseCssClass:{type:String,default:o},containerProps:{type:Object,default:()=>{}},cssClassNames:{type:String},id:{type:String}}),J=["data-cq-data-path","data-emptytext"],$=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentPlaceholder",props:{emptyLabel:{type:String},path:{type:String}},setup(o){const e=o;return(n,s)=>(t.openBlock(),t.createElementBlock("div",{"data-cq-data-path":e.path,"data-emptytext":e.emptyLabel,class:"aem-AllowedComponent--component cq-placeholder placeholder"},null,8,J))}}),X=["data-text"],L=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentPlaceholderList",props:{emptyLabel:{type:String},components:{type:Array},placeholderProps:{type:Object},title:{type:String},cqPath:{type:String}},setup(o){const e=o,n=t.computed(()=>e.components&&e.components.length>0?e.title:e.emptyLabel);return(s,r)=>{var a;return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["aem-AllowedComponent--list",(a=e.placeholderProps)==null?void 0:a.placeholderClassNames])},[t.createElementVNode("div",{"data-text":n.value,class:"aem-AllowedComponent--title"},null,8,X),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.components,p=>(t.openBlock(),t.createBlock($,{key:p.path,"empty-label":p.title,path:p.path},null,8,["empty-label","path"]))),128))],2)}}}),Y=["data-cq-data-path"],T=t.defineComponent({__name:"ContainerPlaceholder",props:{cqPath:{type:String,default:""},placeholderClassNames:{type:String}},setup(o){const e=o;return(n,s)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(e.placeholderClassNames),"data-cq-data-path":`${e.cqPath}/*`},null,10,Y))}}),R=t.defineComponent({name:"Container",inheritAttrs:!1,__name:"Container",props:{aemNoDecoration:{type:Boolean,default:!1},appliedCssClassNames:{type:String},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},getContainerProps:{type:Function},getItemComponentProps:{type:Function},getPlaceholderProps:{type:Function},isInEditor:{type:Boolean,default:void 0}},setup(o){const e=o,n=t.inject("isInEditor",C.AuthoringUtils.isInEditor()),s=typeof e.isInEditor<"u"?e.isInEditor:n,r=t.inject("componentMapping",new u.ComponentMapping),a=t.computed(()=>{let i={};return typeof e.getContainerProps=="function"?i=e.getContainerProps():(i={class:"aem-container"},s&&(i["data-cq-data-path"]=e.cqPath)),i}),p=t.computed(()=>q.getChildComponents(e.cqPath,e.cqItems,e.cqItemsOrder,e.aemNoDecoration,typeof e.getItemComponentProps=="function"?e.getItemComponentProps:()=>({}),!1,r)),c=t.computed(()=>typeof e.getPlaceholderProps=="function"?e.getPlaceholderProps():{cqPath:e.cqPath,placeholderClassNames:"new section"});return(i,P)=>(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.guardReactiveProps({...a.value})),[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(p.value,f=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(f),{key:f.toString()}))),128)),t.unref(n)?(t.openBlock(),t.createBlock(T,t.normalizeProps(t.mergeProps({key:0},c.value)),null,16)):t.createCommentVNode("",!0)],16))}}),z=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentsContainer",props:{_allowedComponentPlaceholderListEmptyLabel:{type:String,default:"No allowed components"},aemNoDecoration:{type:Boolean,default:!1},allowedComponents:{type:Object},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},getContainerProps:{type:Function},getItemComponentProps:{type:Function},getPlaceholderProps:{type:Function},isInEditor:{type:Boolean,default:void 0},title:{type:String}},setup(o){const e=o,n=typeof e.isInEditor<"u"?e.isInEditor:t.inject("isInEditor",C.AuthoringUtils.isInEditor()),s=t.computed(()=>typeof e.getPlaceholderProps=="function"?e.getPlaceholderProps():{cqPath:e.cqPath,placeholderClassNames:"new section"}),r=t.useAttrs();return(a,p)=>{var c;return t.unref(n)&&e.allowedComponents&&((c=e.allowedComponents)!=null&&c.applicable)?(t.openBlock(),t.createBlock(L,{key:0,components:e.allowedComponents.components,"cq-path":e.cqPath,"empty-label":e._allowedComponentPlaceholderListEmptyLabel,"placeholder-props":s.value,title:e.title},null,8,["components","cq-path","empty-label","placeholder-props","title"])):(t.openBlock(),t.createBlock(R,t.mergeProps({key:1,"aem-no-decoration":e.aemNoDecoration,"cq-items":e.cqItems,"cq-items-order":e.cqItemsOrder,"cq-path":e.cqPath,"get-container-props":e.getContainerProps,"get-item-component-props":e.getItemComponentProps,"get-placeholder-props":e.getPlaceholderProps,"is-in-editor":t.unref(n)},{...t.unref(r)}),null,16,["aem-no-decoration","cq-items","cq-items-order","cq-path","get-container-props","get-item-component-props","get-placeholder-props","is-in-editor"]))}}}),Z=t.defineComponent({name:"Page",inheritAttrs:!1,__name:"Page",props:{aemNoDecoration:{type:Boolean,default:!1},cqChildren:{type:Object,default:()=>({})},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""}},setup(o){const e=t.useAttrs(),n=t.inject("isInEditor",C.AuthoringUtils.isInEditor()),s=t.inject("componentMapping",new u.ComponentMapping),r=o,a=t.computed(()=>q.getChildComponents(r.cqPath,r.cqItems,r.cqItemsOrder,r.aemNoDecoration,()=>({}),!0,s)),p=t.computed(()=>q.getChildPages(r.cqChildren,s)),c=t.computed(()=>{const i=["aem-page"];e.cssClassNames&&i.push(...e.cssClassNames.split(" "));const P={class:i.join(" ")};return n&&(P["data-cq-data-path"]=r.cqPath),P});return t.onMounted(()=>{e.title&&(document.title=e.title)}),t.onUpdated(()=>{e.title&&(document.title=e.title)}),(i,P)=>(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.guardReactiveProps(c.value)),[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(a.value,f=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(f),{key:f.toString()}))),128)),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(p.value,f=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(f),{key:f.toString()}))),128))],16))}}),K=t.defineComponent({inheritAttrs:!1,__name:"ResponsiveGrid",props:{aemNoDecoration:{type:Boolean,default:!1},cqPath:{type:String,default:""},gridClassNames:{type:String},columnClassNames:{type:Object},isInEditor:{type:Boolean,default:void 0},title:{type:String,default:"Layout Container"}},setup(o){const e=o,n=t.useAttrs(),s=typeof e.isInEditor<"u"?e.isInEditor:t.inject("isInEditor",C.AuthoringUtils.isInEditor()),r=()=>{const c={},i=["aem-container"];return e.gridClassNames&&i.push(e.gridClassNames),c.class=i.join(" "),s&&(c["data-cq-data-path"]=e.cqPath),c},a=()=>{const c={cqPath:e.cqPath},i=["new","section","aem-Grid-newComponent"];return c.placeholderClassNames=i.join(" "),c},p=c=>{const i={};return e.columnClassNames&&e.columnClassNames[c]&&(i.class=e.columnClassNames[c]),i};return(c,i)=>(t.openBlock(),t.createBlock(z,t.mergeProps({"aem-no-decoration":e.aemNoDecoration,"cq-path":e.cqPath,"get-container-props":r,"get-item-component-props":p,"get-placeholder-props":a,"is-in-editor":t.unref(s),title:e.title},{...t.unref(n)}),null,16,["aem-no-decoration","cq-path","is-in-editor","title"]))}});Object.defineProperty(h,"ComponentMapping",{enumerable:!0,get:()=>u.ComponentMapping}),h.AllowedComponentPlaceholder=$,h.AllowedComponentPlaceholderList=L,h.AllowedComponentsContainer=z,h.CompositeEditableProvider=j,h.CompositeModelProvider=O,h.Container=R,h.ContainerPlaceholder=T,h.ContextProvider=w,h.EditableProvider=B,h.MapTo=Q,h.ModelProvider=A,h.Page=Z,h.ResponsiveGrid=K,h.Utils=q,h.componentClassNames=W,h.componentProperties=H,h.withContext=N,h.withEditable=S,h.withModel=D,Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});
