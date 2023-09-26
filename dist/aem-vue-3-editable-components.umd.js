(function(h,y){typeof exports=="object"&&typeof module<"u"?y(exports,require("@adobe/aem-spa-component-mapping"),require("vue"),require("@adobe/aem-spa-page-model-manager")):typeof define=="function"&&define.amd?define(["exports","@adobe/aem-spa-component-mapping","vue","@adobe/aem-spa-page-model-manager"],y):(h=typeof globalThis<"u"?globalThis:h||self,y(h.aemVue3EditableComponents={},h.AemSpaComponentMapping,h.Vue,h.AemSpaPageModelManager))})(this,function(h,y,t,u){"use strict";function z(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var B={exports:{}};(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;function c(a){"@babel/helpers - typeof";return c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},c(a)}var l=47,p=46,m=function(o){var r=c(o);if(r!=="string")throw new TypeError("Expected a string, got a ".concat(r))},f=function(o,r){for(var d="",g=0,q=-1,_=0,b,C=0;C<=o.length;++C){if(C<o.length)b=o.charCodeAt(C);else{if(b===l)break;b=l}if(b===l){if(!(q===C-1||_===1))if(q!==C-1&&_===2){if(d.length<2||g!==2||d.charCodeAt(d.length-1)!==p||d.charCodeAt(d.length-2)!==p){if(d.length>2){var E=d.lastIndexOf("/");if(E!==d.length-1){E===-1?(d="",g=0):(d=d.slice(0,E),g=d.length-1-d.lastIndexOf("/")),q=C,_=0;continue}}else if(d.length===2||d.length===1){d="",g=0,q=C,_=0;continue}}r&&(d.length>0?d+="/..":d="..",g=2)}else d.length>0?d+="/"+o.slice(q+1,C):d=o.slice(q+1,C),g=C-q-1;q=C,_=0}else b===p&&_!==-1?++_:_=-1}return d},i=function(o){try{return decodeURIComponent(o)}catch{return o}},P=function(o){m(o);var r=o;if(r.length===0)return".";var d=r.charCodeAt(0)===l,g=r.charCodeAt(r.length-1)===l;return r=i(r),r=f(r,!d),r.length===0&&!d&&(r="."),r.length>0&&g&&(r+="/"),d?"/"+r:r},s=P;e.default=s,n.exports=e.default})(B,B.exports);var U=B.exports;const M=z(U),k={getCQPath(n){const{pagePath:e="",itemPath:c="",injectPropsOnInit:l}=n;let{cqPath:p=""}=n;return l&&!p&&(p=M(c?`${e}/jcr:content/${c}`:e),p=p.replace(/^\.$/,"")),p},modelToProps(n){const e=Object.getOwnPropertyNames(n),c={},l=p=>{const m=p.substring(1);return`cq${m.substring(0,1).toUpperCase()}${m.substring(1)}`};return e.forEach(p=>{let m=p;m.startsWith(":")&&(m=l(m)),c[m]=n[p]}),c}},I=t.defineComponent({inheritAttrs:!1,__name:"EditableProvider",props:{editConfig:{type:Object,default:()=>({isEmpty:()=>!1})},componentProperties:{type:Object,default:()=>({})},containerProps:{type:Object}},setup(n){const e=n,{editConfig:c}=e,l=t.inject("isInEditor",u.AuthoringUtils.isInEditor()),p=t.useSlots(),m=t.useAttrs(),f=t.computed(()=>{const a={},{componentProperties:o}=e;return l&&(a["data-cq-data-path"]=o.cqPath,c.resourceType&&(a["data-cq-resource-type"]=c.resourceType)),a}),i=t.computed(()=>{var g;const a={},{componentProperties:o}=e,{appliedCssClassNames:r}=o,d=[];return r&&d.push(r),(g=e==null?void 0:e.containerProps)!=null&&g.class&&d.push(e.containerProps.class),d.length&&(a.class=d.join(" ")),a}),P=l&&typeof c.isEmpty=="function"&&c.isEmpty(e.componentProperties),s=t.computed(()=>P?{class:"cq-placeholder","data-emptytext":c.emptyLabel}:null);return(a,o)=>{var r,d,g,q;return!t.unref(l)&&n.componentProperties.hasOwnProperty("aemNoDecoration")&&n.componentProperties.aemNoDecoration?(t.openBlock(),t.createBlock(t.resolveDynamicComponent((d=(r=t.unref(p)).default)==null?void 0:d.call(r)[0]),t.normalizeProps(t.mergeProps({key:0},{...t.unref(m)})),null,16)):(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.mergeProps({key:1},{...f.value,...i.value})),[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((q=(g=t.unref(p)).default)==null?void 0:q.call(g)[0]),t.normalizeProps(t.guardReactiveProps({...t.unref(m),componentProperties:e.componentProperties})),null,16)),s.value?(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.mergeProps({key:0},s.value)),null,16)):t.createCommentVNode("",!0)],16))}}}),j=t.defineComponent({inheritAttrs:!1,__name:"CompositeEditableProvider",props:{editConfig:{type:Object,default:()=>({isEmpty:()=>!1})}},setup(n){const e=n,c=t.useSlots(),l=t.useAttrs();return(p,m)=>(t.openBlock(),t.createBlock(I,t.normalizeProps(t.guardReactiveProps({...t.unref(l),componentProperties:{...t.unref(l)},editConfig:e.editConfig})),{default:t.withCtx(()=>{var f,i;return[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((i=(f=t.unref(c)).default)==null?void 0:i.call(f)[0])))]}),_:1},16))}}),A=t.defineComponent({inheritAttrs:!1,__name:"ModelProvider",props:{cqPath:{type:String},cqForceReload:{type:Boolean,default:!1},injectPropsOnInit:{type:Boolean,default:!1},pagePath:{type:String},itemPath:{type:String}},setup(n){const e=n,c=t.useSlots(),l=t.useAttrs();let p=t.toRefs(t.reactive(l));const m=t.inject("isInEditor",u.AuthoringUtils.isInEditor()),f=s=>{const{pagePath:a,itemPath:o,injectPropsOnInit:r}=e,d=s||e.cqPath||a&&k.getCQPath({pagePath:a,itemPath:o,injectPropsOnInit:r});d&&u.ModelManager.getData({path:d,forceReload:e.cqForceReload}).then(g=>{g&&Object.keys(g).length>0&&(p={...p,...t.toRefs(t.reactive(k.modelToProps(g)))},r&&m&&u.PathUtils.dispatchGlobalCustomEvent("cq-async-content-loaded",{}))}).catch(g=>{console.error(g)})},i=()=>{const{pagePath:s,itemPath:a,injectPropsOnInit:o,cqPath:r}=e;return k.getCQPath({pagePath:s,itemPath:a,injectPropsOnInit:o,cqPath:r})},P=f.bind(null,i());return t.onMounted(()=>{const s=i();p.cqPath=t.toRef(s),e.injectPropsOnInit&&f(s),u.ModelManager.addListener(s,P)}),t.onUnmounted(()=>{u.ModelManager.removeListener(e.cqPath,P)}),(s,a)=>{var o,r;return t.openBlock(),t.createBlock(t.resolveDynamicComponent((r=(o=t.unref(c)).default)==null?void 0:r.call(o)[0]),t.normalizeProps(t.guardReactiveProps(t.unref(p))),null,16)}}}),O=t.defineComponent({inheritAttrs:!1,__name:"CompositeModelProvider",props:{modelConfig:{type:Object,default:()=>({injectPropsOnInit:!1,forceReload:!1})}},setup(n){const e=n,c=t.useSlots(),l=t.useAttrs(),{modelConfig:p}=t.toRefs(e),m=l.cqForceReload||p.value.forceReload,{injectPropsOnInit:f}=p.value;return(i,P)=>(t.openBlock(),t.createBlock(A,t.mergeProps({"cq-force-reload":t.unref(m),"inject-props-on-init":t.unref(f)},{...t.unref(l)}),{default:t.withCtx(()=>{var s,a;return[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((a=(s=t.unref(c)).default)==null?void 0:a.call(s)[0])))]}),_:1},16,["cq-force-reload","inject-props-on-init"]))}}),w=t.defineComponent({inheritAttrs:!1,__name:"ContextProvider",setup(n){const e=t.useSlots(),c=t.inject("componentMapping",new y.ComponentMapping),l=t.inject("isInEditor",u.AuthoringUtils.isInEditor());return t.provide("isInEditor",l),t.provide("componentMapping",c),(p,m)=>{var f,i;return t.openBlock(),t.createBlock(t.resolveDynamicComponent((i=(f=t.unref(e)).default)==null?void 0:i.call(f)[0]))}}}),N=n=>t.h(w,{},()=>[t.h(n)]),$=(n,e)=>t.h(O,{modelConfig:e},()=>[t.h(n)]),L=(n,e)=>t.h(j,{editConfig:e},()=>[t.h(n)]),x=(n,e,c)=>{const{injectPropsOnInit:l=!0,forceReload:p=!1,...m}=c||{},f={injectPropsOnInit:l,forceReload:p,...m};let i=n;return i=N($(L(i,e),f)),i},V=y.ComponentMapping.map,G=y.ComponentMapping.get;y.ComponentMapping.map=function(e,c,l={isEmpty:()=>!1},p={}){const{injectPropsOnInit:m=!1,...f}=p||{},i=x(c,l,{injectPropsOnInit:m,...f});return V.call(y.ComponentMapping,e,i),i},y.ComponentMapping.get=G;const Q=n=>(e,c,l={})=>y.ComponentMapping.map(n,e,c,l),W=["data-cq-data-path","data-emptytext"],T=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentPlaceholder",props:{emptyLabel:{type:String},path:{type:String}},setup(n){const e=n;return(c,l)=>(t.openBlock(),t.createElementBlock("div",{"data-cq-data-path":e.path,"data-emptytext":e.emptyLabel,class:"aem-AllowedComponent--component cq-placeholder placeholder"},null,8,W))}}),H=["data-text"],R=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentPlaceholderList",props:{emptyLabel:{type:String},components:{type:Array},placeholderProps:{type:Object},title:{type:String},cqPath:{type:String}},setup(n){const e=n,c=t.computed(()=>e.components&&e.components.length>0?e.title:e.emptyLabel);return(l,p)=>{var m;return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["aem-AllowedComponent--list",(m=e.placeholderProps)==null?void 0:m.placeholderClassNames])},[t.createElementVNode("div",{"data-text":c.value,class:"aem-AllowedComponent--title"},null,8,H),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.components,f=>(t.openBlock(),t.createBlock(T,{key:f.path,"empty-label":f.title,path:f.path},null,8,["empty-label","path"]))),128))],2)}}}),J=["data-cq-data-path"],S=t.defineComponent({__name:"ContainerPlaceholder",props:{cqPath:{type:String,default:""},placeholderClassNames:{type:String}},setup(n){const e=n;return(c,l)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(e.placeholderClassNames),"data-cq-data-path":`${e.cqPath}/*`},null,10,J))}}),D=t.defineComponent({name:"Container",inheritAttrs:!1,__name:"Container",props:{aemNoDecoration:{type:Boolean,default:!1},appliedCssClassNames:{type:String},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},getContainerProps:{type:Function},getItemComponentProps:{type:Function},getPlaceholderProps:{type:Function}},setup(n){const e=n,c=t.inject("isInEditor",u.AuthoringUtils.isInEditor()),l=t.inject("componentMapping",new y.ComponentMapping),p=s=>{var a;return((a=e.cqPath)==null?void 0:a.length)>0?`${e.cqPath}/${s}`:s},m=(s,a,o)=>{const r=p(o);return t.h(s,{...a,cqPath:r,containerProps:typeof e.getItemComponentProps=="function"?e.getItemComponentProps(o):{}})},f=t.computed(()=>{let s={};return typeof e.getContainerProps=="function"?s=e.getContainerProps():(s={class:"aem-container"},c&&(s["data-cq-data-path"]=e.cqPath)),s}),i=t.computed(()=>{const s=[];return Object.keys(e.cqItems).length>0&&e.cqItemsOrder.length>0&&e.cqItemsOrder.forEach(a=>{const o=k.modelToProps(e.cqItems[a]);if(o&&typeof o.cqType<"u"){const r=l.get(o.cqType);r&&s.push(m(r,o,a))}}),s}),P=t.computed(()=>typeof e.getPlaceholderProps=="function"?e.getPlaceholderProps():{cqPath:e.cqPath,placeholderClassNames:"new section"});return(s,a)=>!t.unref(c)&&e.aemNoDecoration?(t.openBlock(!0),t.createElementBlock(t.Fragment,{key:0},t.renderList(i.value,o=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(o),{key:o.toString()}))),128)):(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.mergeProps({key:1},{...f.value})),[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(i.value,o=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(o),{key:o.toString()}))),128)),t.unref(c)?(t.openBlock(),t.createBlock(S,t.normalizeProps(t.mergeProps({key:0},P.value)),null,16)):t.createCommentVNode("",!0)],16))}}),F=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentsContainer",props:{_allowedComponentPlaceholderListEmptyLabel:{type:String,default:"No allowed components"},allowedComponents:{type:Object},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},getContainerProps:{type:Function},getItemComponentProps:{type:Function},getPlaceholderProps:{type:Function},title:{type:String}},setup(n){const e=n,c=t.inject("isInEditor",u.AuthoringUtils.isInEditor()),l=t.computed(()=>typeof e.getPlaceholderProps=="function"?e.getPlaceholderProps():{cqPath:e.cqPath,placeholderClassNames:"new section"}),p=t.useAttrs();return(m,f)=>{var i;return t.openBlock(),t.createElementBlock(t.Fragment,null,[t.unref(c)&&e.allowedComponents&&((i=e.allowedComponents)!=null&&i.applicable)?(t.openBlock(),t.createBlock(R,{key:0,components:e.allowedComponents.components,"cq-path":e.cqPath,"empty-label":e._allowedComponentPlaceholderListEmptyLabel,"placeholder-props":l.value,title:e.title},null,8,["components","cq-path","empty-label","placeholder-props","title"])):t.createCommentVNode("",!0),t.createVNode(D,t.mergeProps({"cq-items":e.cqItems,"cq-items-order":e.cqItemsOrder,"cq-path":e.cqPath,"get-container-props":e.getContainerProps,"get-item-component-props":e.getItemComponentProps,"get-placeholder-props":e.getPlaceholderProps},{...t.unref(p)}),null,16,["cq-items","cq-items-order","cq-path","get-container-props","get-item-component-props","get-placeholder-props"])],64)}}}),X=t.defineComponent({name:"Page",inheritAttrs:!1,__name:"Page",props:{cqChildren:{type:Object,default:()=>({})},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""}},setup(n){const e=n,c=t.inject("isInEditor",u.AuthoringUtils.isInEditor()),l=t.inject("componentMapping",new y.ComponentMapping),p=s=>{var a;return((a=e.cqPath)==null?void 0:a.length)>0?`${e.cqPath}/jcr:content/${s}`:s},m=(s,a,o)=>{const r=p(o);return t.h(s,{...a,cqPath:r,containerProps:{}})},f=t.computed(()=>{const s=[];return Object.keys(e.cqItems).length>0&&e.cqItemsOrder.length>0&&e.cqItemsOrder.forEach(a=>{const o=k.modelToProps(e.cqItems[a]);if(o&&typeof o.cqType<"u"){const r=l.get(o.cqType);r&&s.push(m(r,o,a))}}),s}),i=t.computed(()=>{const s=[];return Object.keys(e.cqChildren).length===0||Object.keys(e.cqChildren).forEach(a=>{const o=k.modelToProps(e.cqChildren[a]);if(o&&typeof o.cqType<"u"){const r=l.get(o.cqType);r&&s.push(t.h(r,{...o,cqPath:o.cqPath}))}}),s}),P=t.computed(()=>{const s={class:"aem-page"};return c&&(s["data-cq-data-path"]=e.cqPath),s});return(s,a)=>(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.guardReactiveProps(P.value)),[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(f.value,o=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(o),{key:o.toString()}))),128)),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(i.value,o=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(o),{key:o.toString()}))),128))],16))}}),Y=t.defineComponent({inheritAttrs:!1,__name:"ResponsiveGrid",props:{cqPath:{type:String,default:""},gridClassNames:{type:String},columnClassNames:{type:Object}},setup(n){const e=n,c=t.useAttrs(),l=t.inject("isInEditor",u.AuthoringUtils.isInEditor()),p=()=>{const i={},P=["aem-container"];return e.gridClassNames&&P.push(e.gridClassNames),i.class=P.join(" "),l&&(i["data-cq-data-path"]=e.cqPath),i},m=()=>{const i={cqPath:e.cqPath},P=["new","section","aem-Grid-newComponent"];return i.placeholderClassNames=P.join(" "),i},f=i=>{const P={};return e.columnClassNames&&e.columnClassNames[i]&&(P.class=e.columnClassNames[i]),P};return(i,P)=>(t.openBlock(),t.createBlock(F,t.mergeProps({"cq-path":e.cqPath,"get-container-props":p,"get-item-component-props":f,"get-placeholder-props":m},{...t.unref(c)}),null,16,["cq-path"]))}});Object.defineProperty(h,"ComponentMapping",{enumerable:!0,get:()=>y.ComponentMapping}),h.AllowedComponentPlaceholder=T,h.AllowedComponentPlaceholderList=R,h.AllowedComponentsContainer=F,h.CompositeEditableProvider=j,h.CompositeModelProvider=O,h.Container=D,h.ContainerPlaceholder=S,h.ContextProvider=w,h.EditableProvider=I,h.MapTo=Q,h.ModelProvider=A,h.Page=X,h.ResponsiveGrid=Y,h.Utils=k,h.withContext=N,h.withEditable=L,h.withModel=$,Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});
