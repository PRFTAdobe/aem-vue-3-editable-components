(function(f,y){typeof exports=="object"&&typeof module<"u"?y(exports,require("@adobe/aem-spa-component-mapping"),require("vue"),require("@adobe/aem-spa-page-model-manager")):typeof define=="function"&&define.amd?define(["exports","@adobe/aem-spa-component-mapping","vue","@adobe/aem-spa-page-model-manager"],y):(f=typeof globalThis<"u"?globalThis:f||self,y(f.aemVue3EditableComponents={},f.AemSpaComponentMapping,f.Vue,f.AemSpaPageModelManager))})(this,function(f,y,t,u){"use strict";function z(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var E={exports:{}};(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;function r(i){"@babel/helpers - typeof";return r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},r(i)}var l=47,c=46,m=function(o){var s=r(o);if(s!=="string")throw new TypeError("Expected a string, got a ".concat(s))},h=function(o,s){for(var d="",g=0,q=-1,_=0,I,C=0;C<=o.length;++C){if(C<o.length)I=o.charCodeAt(C);else{if(I===l)break;I=l}if(I===l){if(!(q===C-1||_===1))if(q!==C-1&&_===2){if(d.length<2||g!==2||d.charCodeAt(d.length-1)!==c||d.charCodeAt(d.length-2)!==c){if(d.length>2){var b=d.lastIndexOf("/");if(b!==d.length-1){b===-1?(d="",g=0):(d=d.slice(0,b),g=d.length-1-d.lastIndexOf("/")),q=C,_=0;continue}}else if(d.length===2||d.length===1){d="",g=0,q=C,_=0;continue}}s&&(d.length>0?d+="/..":d="..",g=2)}else d.length>0?d+="/"+o.slice(q+1,C):d=o.slice(q+1,C),g=C-q-1;q=C,_=0}else I===c&&_!==-1?++_:_=-1}return d},p=function(o){try{return decodeURIComponent(o)}catch{return o}},P=function(o){m(o);var s=o;if(s.length===0)return".";var d=s.charCodeAt(0)===l,g=s.charCodeAt(s.length-1)===l;return s=p(s),s=h(s,!d),s.length===0&&!d&&(s="."),s.length>0&&g&&(s+="/"),d?"/"+s:s},a=P;e.default=a,n.exports=e.default})(E,E.exports);var U=E.exports;const M=z(U),k={getCQPath(n){const{pagePath:e="",itemPath:r="",injectPropsOnInit:l}=n;let{cqPath:c=""}=n;return l&&!c&&(c=M(r?`${e}/jcr:content/${r}`:e),c=c.replace(/^\.$/,"")),c},modelToProps(n){const e=Object.getOwnPropertyNames(n),r={},l=c=>{const m=c.substring(1);return`cq${m.substring(0,1).toUpperCase()}${m.substring(1)}`};return e.forEach(c=>{let m=c;m.startsWith(":")&&(m=l(m)),r[m]=n[c]}),r}},B=t.defineComponent({inheritAttrs:!1,__name:"EditableProvider",props:{editConfig:{type:Object,default:()=>({isEmpty:()=>!1})},componentProperties:{type:Object,default:()=>({})},containerProps:{type:Object}},setup(n){const e=n,{editConfig:r}=e,l=t.inject("isInEditor",u.AuthoringUtils.isInEditor()),c=t.useSlots(),m=t.useAttrs(),h=t.computed(()=>{const i={},{componentProperties:o}=e;return l&&(i["data-cq-data-path"]=o.cqPath,r.resourceType&&(i["data-cq-resource-type"]=r.resourceType)),i}),p=t.computed(()=>{var g;const i={},{componentProperties:o}=e,{appliedCssClassNames:s}=o,d=[];return s&&d.push(s),(g=e==null?void 0:e.containerProps)!=null&&g.class&&d.push(e.containerProps.class),d.length&&(i.class=d.join(" ")),i}),P=l&&typeof r.isEmpty=="function"&&r.isEmpty(e.componentProperties),a=t.computed(()=>P?{class:"cq-placeholder","data-emptytext":r.emptyLabel}:null);return(i,o)=>{var s,d,g,q;return!t.unref(l)&&n.componentProperties.hasOwnProperty("aemNoDecoration")&&n.componentProperties.aemNoDecoration?(t.openBlock(),t.createBlock(t.resolveDynamicComponent((d=(s=t.unref(c)).default)==null?void 0:d.call(s)[0]),t.normalizeProps(t.mergeProps({key:0},{...t.unref(m)})),null,16)):(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.mergeProps({key:1},{...h.value,...p.value})),[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((q=(g=t.unref(c)).default)==null?void 0:q.call(g)[0]),t.normalizeProps(t.guardReactiveProps({...t.unref(m),componentProperties:e.componentProperties})),null,16)),a.value?(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.mergeProps({key:0},a.value)),null,16)):t.createCommentVNode("",!0)],16))}}}),j=t.defineComponent({inheritAttrs:!1,__name:"CompositeEditableProvider",props:{editConfig:{type:Object,default:()=>({isEmpty:()=>!1})}},setup(n){const e=n,r=t.useSlots(),l=t.useAttrs();return(c,m)=>(t.openBlock(),t.createBlock(B,t.normalizeProps(t.guardReactiveProps({...t.unref(l),componentProperties:{...t.unref(l)},editConfig:e.editConfig})),{default:t.withCtx(()=>{var h,p;return[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((p=(h=t.unref(r)).default)==null?void 0:p.call(h)[0])))]}),_:1},16))}}),A=t.defineComponent({inheritAttrs:!1,__name:"ModelProvider",props:{cqPath:{type:String},cqForceReload:{type:Boolean,default:!1},injectPropsOnInit:{type:Boolean,default:!1},pagePath:{type:String},itemPath:{type:String}},setup(n){const e=n,r=t.useSlots(),l=t.useAttrs();let c=t.toRefs(t.reactive(l));const m=t.inject("isInEditor",u.AuthoringUtils.isInEditor()),h=a=>{const{pagePath:i,itemPath:o,injectPropsOnInit:s}=e,d=a||e.cqPath||i&&k.getCQPath({pagePath:i,itemPath:o,injectPropsOnInit:s});d&&u.ModelManager.getData({path:d,forceReload:e.cqForceReload}).then(g=>{g&&Object.keys(g).length>0&&(c={...c,...t.toRefs(t.reactive(k.modelToProps(g)))},s&&m&&u.PathUtils.dispatchGlobalCustomEvent("cq-async-content-loaded",{}))}).catch(g=>{console.error(g)})},p=()=>{const{pagePath:a,itemPath:i,injectPropsOnInit:o,cqPath:s}=e;return k.getCQPath({pagePath:a,itemPath:i,injectPropsOnInit:o,cqPath:s})},P=h.bind(null,p());return t.onMounted(()=>{const a=p();c.cqPath=t.toRef(a),e.injectPropsOnInit&&h(a),u.ModelManager.addListener(a,P)}),t.onUnmounted(()=>{u.ModelManager.removeListener(e.cqPath,P)}),(a,i)=>{var o,s;return t.openBlock(),t.createBlock(t.resolveDynamicComponent((s=(o=t.unref(r)).default)==null?void 0:s.call(o)[0]),t.normalizeProps(t.guardReactiveProps(t.unref(c))),null,16)}}}),O=t.defineComponent({inheritAttrs:!1,__name:"CompositeModelProvider",props:{modelConfig:{type:Object,default:()=>({injectPropsOnInit:!1,forceReload:!1})}},setup(n){const e=n,r=t.useSlots(),l=t.useAttrs(),{modelConfig:c}=t.toRefs(e),m=l.cqForceReload||c.value.forceReload,{injectPropsOnInit:h}=c.value;return(p,P)=>(t.openBlock(),t.createBlock(A,t.mergeProps({"cq-force-reload":t.unref(m),"inject-props-on-init":t.unref(h)},{...t.unref(l)}),{default:t.withCtx(()=>{var a,i;return[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((i=(a=t.unref(r)).default)==null?void 0:i.call(a)[0])))]}),_:1},16,["cq-force-reload","inject-props-on-init"]))}}),w=t.defineComponent({inheritAttrs:!1,__name:"ContextProvider",setup(n){const e=t.useSlots(),r=t.useAttrs(),l=t.inject("componentMapping",new y.ComponentMapping),c=t.inject("isInEditor",u.AuthoringUtils.isInEditor());return t.provide("isInEditor",c),t.provide("componentMapping",l),(m,h)=>{var p,P;return t.openBlock(),t.createBlock(t.resolveDynamicComponent((P=(p=t.unref(e)).default)==null?void 0:P.call(p)[0]),t.normalizeProps(t.guardReactiveProps({...t.unref(r)})),null,16)}}}),N=n=>t.h(w,{},()=>[t.h(n)]),S=(n,e)=>t.h(O,{modelConfig:e},()=>[t.h(n)]),$=(n,e)=>t.h(j,{editConfig:e},()=>[t.h(n)]),x=(n,e,r)=>{const{injectPropsOnInit:l=!0,forceReload:c=!1,...m}=r||{},h={injectPropsOnInit:l,forceReload:c,...m};let p=n;return p=N(S($(p,e),h)),p},V=y.ComponentMapping.map,G=y.ComponentMapping.get;y.ComponentMapping.map=function(e,r,l={isEmpty:()=>!1},c={}){const{injectPropsOnInit:m=!1,...h}=c||{},p=x(r,l,{injectPropsOnInit:m,...h});return V.call(y.ComponentMapping,e,p),p},y.ComponentMapping.get=G;const Q=n=>(e,r,l={})=>y.ComponentMapping.map(n,e,r,l),W=(n,e,r,l)=>{let c=[];n&&(c=[n]),e&&c.push(e);const m=r==null?void 0:r.class;return m&&!l&&c.push(m),c},H=n=>({appliedCssClassNames:{type:String},baseCssClass:{type:String,default:n},containerProps:{type:Object,default:()=>{}},id:{type:String}}),J=["data-cq-data-path","data-emptytext"],L=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentPlaceholder",props:{emptyLabel:{type:String},path:{type:String}},setup(n){const e=n;return(r,l)=>(t.openBlock(),t.createElementBlock("div",{"data-cq-data-path":e.path,"data-emptytext":e.emptyLabel,class:"aem-AllowedComponent--component cq-placeholder placeholder"},null,8,J))}}),X=["data-text"],R=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentPlaceholderList",props:{emptyLabel:{type:String},components:{type:Array},placeholderProps:{type:Object},title:{type:String},cqPath:{type:String}},setup(n){const e=n,r=t.computed(()=>e.components&&e.components.length>0?e.title:e.emptyLabel);return(l,c)=>{var m;return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["aem-AllowedComponent--list",(m=e.placeholderProps)==null?void 0:m.placeholderClassNames])},[t.createElementVNode("div",{"data-text":r.value,class:"aem-AllowedComponent--title"},null,8,X),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.components,h=>(t.openBlock(),t.createBlock(L,{key:h.path,"empty-label":h.title,path:h.path},null,8,["empty-label","path"]))),128))],2)}}}),Y=["data-cq-data-path"],T=t.defineComponent({__name:"ContainerPlaceholder",props:{cqPath:{type:String,default:""},placeholderClassNames:{type:String}},setup(n){const e=n;return(r,l)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(e.placeholderClassNames),"data-cq-data-path":`${e.cqPath}/*`},null,10,Y))}}),D=t.defineComponent({name:"Container",inheritAttrs:!1,__name:"Container",props:{aemNoDecoration:{type:Boolean,default:!1},appliedCssClassNames:{type:String},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},getContainerProps:{type:Function},getItemComponentProps:{type:Function},getPlaceholderProps:{type:Function},isInEditor:{type:Boolean,default:void 0}},setup(n){const e=n,r=typeof e.isInEditor<"u"?e.isInEditor:t.inject("isInEditor",u.AuthoringUtils.isInEditor()),l=t.inject("componentMapping",new y.ComponentMapping),c=a=>{var i;return((i=e.cqPath)==null?void 0:i.length)>0?`${e.cqPath}/${a}`:a},m=(a,i,o)=>{const s=c(o);return t.h(a,{...i,cqPath:s,containerProps:typeof e.getItemComponentProps=="function"?e.getItemComponentProps(o):{}})},h=t.computed(()=>{let a={};return typeof e.getContainerProps=="function"?a=e.getContainerProps():(a={class:"aem-container"},r&&(a["data-cq-data-path"]=e.cqPath)),a}),p=t.computed(()=>{const a=[];return Object.keys(e.cqItems).length>0&&e.cqItemsOrder.length>0&&e.cqItemsOrder.forEach(i=>{const o=k.modelToProps(e.cqItems[i]);if(o&&typeof o.cqType<"u"){const s=l.get(o.cqType);s&&a.push(m(s,o,i))}}),a}),P=t.computed(()=>typeof e.getPlaceholderProps=="function"?e.getPlaceholderProps():{cqPath:e.cqPath,placeholderClassNames:"new section"});return(a,i)=>!t.unref(r)&&e.aemNoDecoration?(t.openBlock(!0),t.createElementBlock(t.Fragment,{key:0},t.renderList(p.value,o=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(o),{key:o.toString()}))),128)):(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.mergeProps({key:1},{...h.value})),[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(p.value,o=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(o),{key:o.toString()}))),128)),t.unref(r)?(t.openBlock(),t.createBlock(T,t.normalizeProps(t.mergeProps({key:0},P.value)),null,16)):t.createCommentVNode("",!0)],16))}}),F=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentsContainer",props:{_allowedComponentPlaceholderListEmptyLabel:{type:String,default:"No allowed components"},allowedComponents:{type:Object},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},getContainerProps:{type:Function},getItemComponentProps:{type:Function},getPlaceholderProps:{type:Function},isInEditor:{type:Boolean,default:void 0},title:{type:String}},setup(n){const e=n,r=typeof e.isInEditor<"u"?e.isInEditor:t.inject("isInEditor",u.AuthoringUtils.isInEditor()),l=t.computed(()=>typeof e.getPlaceholderProps=="function"?e.getPlaceholderProps():{cqPath:e.cqPath,placeholderClassNames:"new section"}),c=t.useAttrs();return(m,h)=>{var p;return t.openBlock(),t.createElementBlock(t.Fragment,null,[t.unref(r)&&e.allowedComponents&&((p=e.allowedComponents)!=null&&p.applicable)?(t.openBlock(),t.createBlock(R,{key:0,components:e.allowedComponents.components,"cq-path":e.cqPath,"empty-label":e._allowedComponentPlaceholderListEmptyLabel,"placeholder-props":l.value,title:e.title},null,8,["components","cq-path","empty-label","placeholder-props","title"])):t.createCommentVNode("",!0),t.createVNode(D,t.mergeProps({"cq-items":e.cqItems,"cq-items-order":e.cqItemsOrder,"cq-path":e.cqPath,"get-container-props":e.getContainerProps,"get-item-component-props":e.getItemComponentProps,"get-placeholder-props":e.getPlaceholderProps},{...t.unref(c)}),null,16,["cq-items","cq-items-order","cq-path","get-container-props","get-item-component-props","get-placeholder-props"])],64)}}}),Z=t.defineComponent({name:"Page",inheritAttrs:!1,__name:"Page",props:{cqChildren:{type:Object,default:()=>({})},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""}},setup(n){const e=n,r=t.inject("isInEditor",u.AuthoringUtils.isInEditor()),l=t.inject("componentMapping",new y.ComponentMapping),c=a=>{var i;return((i=e.cqPath)==null?void 0:i.length)>0?`${e.cqPath}/jcr:content/${a}`:a},m=(a,i,o)=>{const s=c(o);return t.h(a,{...i,cqPath:s,containerProps:{}})},h=t.computed(()=>{const a=[];return Object.keys(e.cqItems).length>0&&e.cqItemsOrder.length>0&&e.cqItemsOrder.forEach(i=>{const o=k.modelToProps(e.cqItems[i]);if(o&&typeof o.cqType<"u"){const s=l.get(o.cqType);s&&a.push(m(s,o,i))}}),a}),p=t.computed(()=>{const a=[];return Object.keys(e.cqChildren).length===0||Object.keys(e.cqChildren).forEach(i=>{const o=k.modelToProps(e.cqChildren[i]);if(o&&typeof o.cqType<"u"){const s=l.get(o.cqType);s&&a.push(t.h(s,{...o,cqPath:o.cqPath}))}}),a}),P=t.computed(()=>{const a={class:"aem-page"};return r&&(a["data-cq-data-path"]=e.cqPath),a});return(a,i)=>(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.guardReactiveProps(P.value)),[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(h.value,o=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(o),{key:o.toString()}))),128)),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(p.value,o=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(o),{key:o.toString()}))),128))],16))}}),K=t.defineComponent({inheritAttrs:!1,__name:"ResponsiveGrid",props:{cqPath:{type:String,default:""},gridClassNames:{type:String},columnClassNames:{type:Object},isInEditor:{type:Boolean,default:void 0}},setup(n){const e=n,r=t.useAttrs(),l=typeof e.isInEditor<"u"?e.isInEditor:t.inject("isInEditor",u.AuthoringUtils.isInEditor()),c=()=>{const p={},P=["aem-container"];return e.gridClassNames&&P.push(e.gridClassNames),p.class=P.join(" "),l&&(p["data-cq-data-path"]=e.cqPath),p},m=()=>{const p={cqPath:e.cqPath},P=["new","section","aem-Grid-newComponent"];return p.placeholderClassNames=P.join(" "),p},h=p=>{const P={};return e.columnClassNames&&e.columnClassNames[p]&&(P.class=e.columnClassNames[p]),P};return(p,P)=>(t.openBlock(),t.createBlock(F,t.mergeProps({"cq-path":e.cqPath,"get-container-props":c,"get-item-component-props":h,"get-placeholder-props":m,"is-in-editor":t.unref(l)},{...t.unref(r)}),null,16,["cq-path","is-in-editor"]))}});Object.defineProperty(f,"ComponentMapping",{enumerable:!0,get:()=>y.ComponentMapping}),f.AllowedComponentPlaceholder=L,f.AllowedComponentPlaceholderList=R,f.AllowedComponentsContainer=F,f.CompositeEditableProvider=j,f.CompositeModelProvider=O,f.Container=D,f.ContainerPlaceholder=T,f.ContextProvider=w,f.EditableProvider=B,f.MapTo=Q,f.ModelProvider=A,f.Page=Z,f.ResponsiveGrid=K,f.Utils=k,f.componentClassNames=W,f.componentProperties=H,f.withContext=N,f.withEditable=$,f.withModel=S,Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});
