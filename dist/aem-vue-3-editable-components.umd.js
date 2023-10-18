(function(h,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue"),require("@adobe/aem-spa-component-mapping"),require("@adobe/aem-spa-page-model-manager")):typeof define=="function"&&define.amd?define(["exports","vue","@adobe/aem-spa-component-mapping","@adobe/aem-spa-page-model-manager"],t):(h=typeof globalThis<"u"?globalThis:h||self,t(h.aemVue3EditableComponents={},h.Vue,h.AemSpaComponentMapping,h.AemSpaPageModelManager))})(this,function(h,t,C,y){"use strict";function F(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var b={exports:{}};(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;function n(m){"@babel/helpers - typeof";return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},n(m)}var r=47,s=46,a=function(p){var f=n(p);if(f!=="string")throw new TypeError("Expected a string, got a ".concat(f))},l=function(p,f){for(var d="",u=0,_=-1,q=0,E,g=0;g<=p.length;++g){if(g<p.length)E=p.charCodeAt(g);else{if(E===r)break;E=r}if(E===r){if(!(_===g-1||q===1))if(_!==g-1&&q===2){if(d.length<2||u!==2||d.charCodeAt(d.length-1)!==s||d.charCodeAt(d.length-2)!==s){if(d.length>2){var B=d.lastIndexOf("/");if(B!==d.length-1){B===-1?(d="",u=0):(d=d.slice(0,B),u=d.length-1-d.lastIndexOf("/")),_=g,q=0;continue}}else if(d.length===2||d.length===1){d="",u=0,_=g,q=0;continue}}f&&(d.length>0?d+="/..":d="..",u=2)}else d.length>0?d+="/"+p.slice(_+1,g):d=p.slice(_+1,g),u=g-_-1;_=g,q=0}else E===s&&q!==-1?++q:q=-1}return d},c=function(p){try{return decodeURIComponent(p)}catch{return p}},i=function(p){a(p);var f=p;if(f.length===0)return".";var d=f.charCodeAt(0)===r,u=f.charCodeAt(f.length-1)===r;return f=c(f),f=l(f,!d),f.length===0&&!d&&(f="."),f.length>0&&u&&(f+="/"),d?"/"+f:f},P=i;e.default=P,o.exports=e.default})(b,b.exports);var U=b.exports;const M=F(U),k={getItemPath(o,e,n){let r=(e==null?void 0:e.length)>0?`${e}/${o}`:o;return n&&(r=(e==null?void 0:e.length)>0?`${e}/jcr:content/${o}`:o),r},connectComponentWithItem(o,e,n,r,s,a){const l=this.getItemPath(n,r,a);return t.h(o,{...e,cqPath:l,containerProps:s(n)})},getChildComponents(o,e,n,r,s,a,l){const c=[];return Object.keys(e).length>0&&n.length>0&&n.forEach(i=>{const P=this.modelToProps(e[i]);if(P&&typeof P.cqType<"u"){const m=l.get(P.cqType);r&&(P.aemNoDecoration=r),m&&c.push(this.connectComponentWithItem(m,P,i,o,s,a))}}),c},getChildPages(o,e){const n=[];return Object.keys(o).length===0||Object.keys(o).forEach(r=>{const s=this.modelToProps(o[r]);if(s&&typeof s.cqType<"u"){const a=e.get(s.cqType);a&&n.push(t.h(a,{...s,cqPath:s.cqPath}))}}),n},getCQPath(o){const{pagePath:e="",itemPath:n="",injectPropsOnInit:r}=o;let{cqPath:s=""}=o;return r&&!s&&(s=M(n?`${e}/jcr:content/${n}`:e),s=s.replace(/^\.$/,"")),s},modelToProps(o){const e=Object.getOwnPropertyNames(o),n={},r=s=>{const a=s.substring(1);return`cq${a.substring(0,1).toUpperCase()}${a.substring(1)}`};return e.forEach(s=>{let a=s;a.startsWith(":")&&(a=r(a)),n[a]=o[s]}),n}},I=t.defineComponent({inheritAttrs:!1,__name:"EditableProvider",props:{editConfig:{type:Object,default:()=>({isEmpty:()=>!1})},componentProperties:{type:Object,default:()=>({})},containerProps:{type:Object}},setup(o){const e=o,n=t.inject("isInEditor",y.AuthoringUtils.isInEditor()),r=t.useSlots(),s=t.useAttrs(),a=t.computed(()=>{const i={},{componentProperties:P}=e;return n&&(i["data-cq-data-path"]=P.cqPath,e.editConfig.resourceType&&(i["data-cq-resource-type"]=e.editConfig.resourceType)),i}),l=t.computed(()=>{var f;const i={},{componentProperties:P}=e,{appliedCssClassNames:m}=P,p=[];return m&&p.push(m),(f=e==null?void 0:e.containerProps)!=null&&f.class&&p.push(e.containerProps.class),p.length&&(i.class=p.join(" ")),i}),c=t.computed(()=>n&&typeof e.editConfig.isEmpty=="function"&&e.editConfig.isEmpty(e.componentProperties)?{class:"cq-placeholder","data-emptytext":e.editConfig.emptyLabel}:null);return(i,P)=>{var m,p,f,d;return!t.unref(n)&&e.componentProperties.hasOwnProperty("aemNoDecoration")&&e.componentProperties.aemNoDecoration||e.componentProperties.hasOwnProperty("cqHierarchyType")&&e.componentProperties.cqHierarchyType==="page"?(t.openBlock(),t.createBlock(t.resolveDynamicComponent((p=(m=t.unref(r)).default)==null?void 0:p.call(m)[0]),t.normalizeProps(t.mergeProps({key:0},{...t.unref(s),containerProps:e.containerProps})),null,16)):(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.mergeProps({key:1},{...a.value,...l.value})),[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((d=(f=t.unref(r)).default)==null?void 0:d.call(f)[0]),t.normalizeProps(t.guardReactiveProps({...t.unref(s),componentProperties:e.componentProperties})),null,16)),c.value?(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.mergeProps({key:0},c.value)),null,16)):t.createCommentVNode("",!0)],16))}}}),j=t.defineComponent({inheritAttrs:!1,__name:"CompositeEditableProvider",props:{editConfig:{type:Object,default:()=>({isEmpty:()=>!1})}},setup(o){const e=o,n=t.useSlots(),r=t.useAttrs();return(s,a)=>(t.openBlock(),t.createBlock(I,t.normalizeProps(t.guardReactiveProps({...t.unref(r),componentProperties:{...t.unref(r)},editConfig:e.editConfig})),{default:t.withCtx(()=>{var l,c;return[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((c=(l=t.unref(n)).default)==null?void 0:c.call(l)[0])))]}),_:1},16))}}),A=t.defineComponent({inheritAttrs:!1,__name:"ModelProvider",props:{cqPath:{type:String},cqForceReload:{type:Boolean,default:!1},injectPropsOnInit:{type:Boolean,default:!1},pagePath:{type:String},itemPath:{type:String}},setup(o){const e=o,n=t.useSlots(),r=t.inject("isInEditor",y.AuthoringUtils.isInEditor()),s=t.ref(t.useAttrs()),a=()=>{const{pagePath:i,itemPath:P,injectPropsOnInit:m,cqPath:p}=e;return k.getCQPath({pagePath:i,itemPath:P,injectPropsOnInit:m,cqPath:p})},l=i=>{const{pagePath:P,itemPath:m,injectPropsOnInit:p}=e,f=i||e.cqPath||P&&k.getCQPath({pagePath:P,itemPath:m,injectPropsOnInit:p});f&&y.ModelManager.getData({path:f,forceReload:e.cqForceReload}).then(d=>{d&&Object.keys(d).length>0&&(Object.assign(s.value,k.modelToProps(d)),p&&r&&y.PathUtils.dispatchGlobalCustomEvent("cq-async-content-loaded",{}))}).catch(d=>{console.error(d)})},c=l.bind(null,a());return t.onMounted(()=>{const i=a();e.injectPropsOnInit&&l(i),y.ModelManager.addListener(i,c)}),t.onUnmounted(()=>{y.ModelManager.removeListener(e.cqPath,c)}),(i,P)=>{var m,p;return t.openBlock(),t.createBlock(t.resolveDynamicComponent((p=(m=t.unref(n)).default)==null?void 0:p.call(m)[0]),t.normalizeProps(t.guardReactiveProps({cqPath:a(),...s.value})),null,16)}}}),O=t.defineComponent({inheritAttrs:!1,__name:"CompositeModelProvider",props:{modelConfig:{type:Object,default:()=>({injectPropsOnInit:!1,forceReload:!1})}},setup(o){const e=o,n=t.useSlots(),r=t.useAttrs(),{modelConfig:s}=t.toRefs(e),a=r.cqForceReload||s.value.forceReload,{injectPropsOnInit:l}=s.value;return(c,i)=>(t.openBlock(),t.createBlock(A,t.mergeProps({"cq-force-reload":t.unref(a),"inject-props-on-init":t.unref(l)},{...t.unref(r)}),{default:t.withCtx(()=>{var P,m;return[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((m=(P=t.unref(n)).default)==null?void 0:m.call(P)[0])))]}),_:1},16,["cq-force-reload","inject-props-on-init"]))}}),w=t.defineComponent({inheritAttrs:!1,__name:"ContextProvider",setup(o){const e=t.useSlots(),n=t.useAttrs(),r=t.inject("componentMapping",new C.ComponentMapping),s=t.inject("isInEditor",y.AuthoringUtils.isInEditor());return t.provide("isInEditor",s),t.provide("componentMapping",r),(a,l)=>{var c,i;return t.openBlock(),t.createBlock(t.resolveDynamicComponent((i=(c=t.unref(e)).default)==null?void 0:i.call(c)[0]),t.normalizeProps(t.guardReactiveProps({...t.unref(n)})),null,16)}}}),N=o=>t.h(w,{},()=>[t.h(o)]),D=(o,e)=>t.h(O,{modelConfig:e},()=>[t.h(o)]),S=(o,e)=>t.h(j,{editConfig:e},()=>[t.h(o)]),x=(o,e,n)=>{const{injectPropsOnInit:r=!0,forceReload:s=!1,...a}=n||{},l={injectPropsOnInit:r,forceReload:s,...a};let c=o;return c=N(D(S(c,e),l)),c},G=C.ComponentMapping.map,V=C.ComponentMapping.get;C.ComponentMapping.map=function(e,n,r={isEmpty:()=>!1},s={}){const{injectPropsOnInit:a=!1,...l}=s||{},c=x(n,r,{injectPropsOnInit:a,...l});return G.call(C.ComponentMapping,e,c),c},C.ComponentMapping.get=V;const Q=o=>(e,n,r={})=>C.ComponentMapping.map(o,e,n,r),H=(o,e,n,r,s,a)=>{let l=[];o&&(l=[o]),e&&l.push(e),n&&l.push(...n.split(" "));const c=r==null?void 0:r.class;return a&&c&&!s&&l.push(c),l},W=o=>({aemNoDecoration:{type:Boolean,default:!1},appliedCssClassNames:{type:String},baseCssClass:{type:String,default:o},containerProps:{type:Object,default:()=>{}},cssClassNames:{type:String},id:{type:String}}),J=["data-cq-data-path","data-emptytext"],$=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentPlaceholder",props:{emptyLabel:{type:String},path:{type:String}},setup(o){const e=o;return(n,r)=>(t.openBlock(),t.createElementBlock("div",{"data-cq-data-path":e.path,"data-emptytext":e.emptyLabel,class:"aem-AllowedComponent--component cq-placeholder placeholder"},null,8,J))}}),X=["data-text"],L=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentPlaceholderList",props:{emptyLabel:{type:String},components:{type:Array},placeholderProps:{type:Object},title:{type:String},cqPath:{type:String}},setup(o){const e=o,n=t.computed(()=>e.components&&e.components.length>0?e.title:e.emptyLabel);return(r,s)=>{var a;return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["aem-AllowedComponent--list",(a=e.placeholderProps)==null?void 0:a.placeholderClassNames])},[t.createElementVNode("div",{"data-text":n.value,class:"aem-AllowedComponent--title"},null,8,X),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.components,l=>(t.openBlock(),t.createBlock($,{key:l.path,"empty-label":l.title,path:l.path},null,8,["empty-label","path"]))),128))],2)}}}),Y=["data-cq-data-path"],T=t.defineComponent({__name:"ContainerPlaceholder",props:{cqPath:{type:String,default:""},placeholderClassNames:{type:String}},setup(o){const e=o;return(n,r)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(e.placeholderClassNames),"data-cq-data-path":`${e.cqPath}/*`},null,10,Y))}}),R=t.defineComponent({name:"Container",inheritAttrs:!1,__name:"Container",props:{aemNoDecoration:{type:Boolean,default:!1},appliedCssClassNames:{type:String},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},getContainerProps:{type:Function},getItemComponentProps:{type:Function},getPlaceholderProps:{type:Function},isInEditor:{type:Boolean,default:void 0}},setup(o){const e=o,n=typeof e.isInEditor<"u"?e.isInEditor:t.inject("isInEditor",y.AuthoringUtils.isInEditor()),r=t.inject("componentMapping",new C.ComponentMapping),s=t.computed(()=>{let c={};return typeof e.getContainerProps=="function"?c=e.getContainerProps():(c={class:"aem-container"},n&&(c["data-cq-data-path"]=e.cqPath)),c}),a=t.computed(()=>k.getChildComponents(e.cqPath,e.cqItems,e.cqItemsOrder,e.aemNoDecoration,typeof e.getItemComponentProps=="function"?e.getItemComponentProps:()=>({}),!1,r)),l=t.computed(()=>typeof e.getPlaceholderProps=="function"?e.getPlaceholderProps():{cqPath:e.cqPath,placeholderClassNames:"new section"});return(c,i)=>(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.guardReactiveProps({...s.value})),[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(a.value,P=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(P),{key:P.toString()}))),128)),t.unref(n)?(t.openBlock(),t.createBlock(T,t.normalizeProps(t.mergeProps({key:0},l.value)),null,16)):t.createCommentVNode("",!0)],16))}}),z=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentsContainer",props:{_allowedComponentPlaceholderListEmptyLabel:{type:String,default:"No allowed components"},aemNoDecoration:{type:Boolean,default:!1},allowedComponents:{type:Object},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},getContainerProps:{type:Function},getItemComponentProps:{type:Function},getPlaceholderProps:{type:Function},isInEditor:{type:Boolean,default:void 0},title:{type:String}},setup(o){const e=o,n=typeof e.isInEditor<"u"?e.isInEditor:t.inject("isInEditor",y.AuthoringUtils.isInEditor()),r=t.computed(()=>typeof e.getPlaceholderProps=="function"?e.getPlaceholderProps():{cqPath:e.cqPath,placeholderClassNames:"new section"}),s=t.useAttrs();return(a,l)=>{var c;return t.unref(n)&&e.allowedComponents&&((c=e.allowedComponents)!=null&&c.applicable)?(t.openBlock(),t.createBlock(L,{key:0,components:e.allowedComponents.components,"cq-path":e.cqPath,"empty-label":e._allowedComponentPlaceholderListEmptyLabel,"placeholder-props":r.value,title:e.title},null,8,["components","cq-path","empty-label","placeholder-props","title"])):(t.openBlock(),t.createBlock(R,t.mergeProps({key:1,"aem-no-decoration":e.aemNoDecoration,"cq-items":e.cqItems,"cq-items-order":e.cqItemsOrder,"cq-path":e.cqPath,"get-container-props":e.getContainerProps,"get-item-component-props":e.getItemComponentProps,"get-placeholder-props":e.getPlaceholderProps,"is-in-editor":t.unref(n)},{...t.unref(s)}),null,16,["aem-no-decoration","cq-items","cq-items-order","cq-path","get-container-props","get-item-component-props","get-placeholder-props","is-in-editor"]))}}}),Z=t.defineComponent({name:"Page",inheritAttrs:!1,__name:"Page",props:{aemNoDecoration:{type:Boolean,default:!1},cqChildren:{type:Object,default:()=>({})},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""}},setup(o){const e=o,n=t.useAttrs(),r=t.inject("isInEditor",y.AuthoringUtils.isInEditor()),s=t.inject("componentMapping",new C.ComponentMapping),a=t.computed(()=>k.getChildComponents(e.cqPath,e.cqItems,e.cqItemsOrder,e.aemNoDecoration,()=>({}),!0,s)),l=t.computed(()=>k.getChildPages(e.cqChildren,s)),c=t.computed(()=>{const i=["aem-page"];n.cssClassNames&&i.push(...n.cssClassNames.split(" "));const P={class:i.join(" ")};return r&&(P["data-cq-data-path"]=e.cqPath),P});return(i,P)=>(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.guardReactiveProps(c.value)),[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(a.value,m=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(m),{key:m.toString()}))),128)),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(l.value,m=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(m),{key:m.toString()}))),128))],16))}}),K=t.defineComponent({inheritAttrs:!1,__name:"ResponsiveGrid",props:{aemNoDecoration:{type:Boolean,default:!1},cqPath:{type:String,default:""},gridClassNames:{type:String},columnClassNames:{type:Object},isInEditor:{type:Boolean,default:void 0}},setup(o){const e=o,n=t.useAttrs(),r=typeof e.isInEditor<"u"?e.isInEditor:t.inject("isInEditor",y.AuthoringUtils.isInEditor()),s=()=>{const c={},i=["aem-container"];return e.gridClassNames&&i.push(e.gridClassNames),c.class=i.join(" "),r&&(c["data-cq-data-path"]=e.cqPath),c},a=()=>{const c={cqPath:e.cqPath},i=["new","section","aem-Grid-newComponent"];return c.placeholderClassNames=i.join(" "),c},l=c=>{const i={};return e.columnClassNames&&e.columnClassNames[c]&&(i.class=e.columnClassNames[c]),i};return(c,i)=>(t.openBlock(),t.createBlock(z,t.mergeProps({"aem-no-decoration":e.aemNoDecoration,"cq-path":e.cqPath,"get-container-props":s,"get-item-component-props":l,"get-placeholder-props":a,"is-in-editor":t.unref(r)},{...t.unref(n)}),null,16,["aem-no-decoration","cq-path","is-in-editor"]))}});Object.defineProperty(h,"ComponentMapping",{enumerable:!0,get:()=>C.ComponentMapping}),h.AllowedComponentPlaceholder=$,h.AllowedComponentPlaceholderList=L,h.AllowedComponentsContainer=z,h.CompositeEditableProvider=j,h.CompositeModelProvider=O,h.Container=R,h.ContainerPlaceholder=T,h.ContextProvider=w,h.EditableProvider=I,h.MapTo=Q,h.ModelProvider=A,h.Page=Z,h.ResponsiveGrid=K,h.Utils=k,h.componentClassNames=H,h.componentProperties=W,h.withContext=N,h.withEditable=S,h.withModel=D,Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});
