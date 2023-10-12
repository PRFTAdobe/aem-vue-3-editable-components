(function(P,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue"),require("@adobe/aem-spa-component-mapping"),require("@adobe/aem-spa-page-model-manager")):typeof define=="function"&&define.amd?define(["exports","vue","@adobe/aem-spa-component-mapping","@adobe/aem-spa-page-model-manager"],t):(P=typeof globalThis<"u"?globalThis:P||self,t(P.aemVue3EditableComponents={},P.Vue,P.AemSpaComponentMapping,P.AemSpaPageModelManager))})(this,function(P,t,u,C){"use strict";function F(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var b={exports:{}};(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;function n(h){"@babel/helpers - typeof";return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},n(h)}var r=47,s=46,a=function(l){var d=n(l);if(d!=="string")throw new TypeError("Expected a string, got a ".concat(d))},i=function(l,d){for(var m="",g=0,_=-1,q=0,E,y=0;y<=l.length;++y){if(y<l.length)E=l.charCodeAt(y);else{if(E===r)break;E=r}if(E===r){if(!(_===y-1||q===1))if(_!==y-1&&q===2){if(m.length<2||g!==2||m.charCodeAt(m.length-1)!==s||m.charCodeAt(m.length-2)!==s){if(m.length>2){var B=m.lastIndexOf("/");if(B!==m.length-1){B===-1?(m="",g=0):(m=m.slice(0,B),g=m.length-1-m.lastIndexOf("/")),_=y,q=0;continue}}else if(m.length===2||m.length===1){m="",g=0,_=y,q=0;continue}}d&&(m.length>0?m+="/..":m="..",g=2)}else m.length>0?m+="/"+l.slice(_+1,y):m=l.slice(_+1,y),g=y-_-1;_=y,q=0}else E===s&&q!==-1?++q:q=-1}return m},c=function(l){try{return decodeURIComponent(l)}catch{return l}},p=function(l){a(l);var d=l;if(d.length===0)return".";var m=d.charCodeAt(0)===r,g=d.charCodeAt(d.length-1)===r;return d=c(d),d=i(d,!m),d.length===0&&!m&&(d="."),d.length>0&&g&&(d+="/"),m?"/"+d:d},f=p;e.default=f,o.exports=e.default})(b,b.exports);var U=b.exports;const M=F(U),k={getItemPath(o,e,n){let r=(e==null?void 0:e.length)>0?`${e}/${o}`:o;return n&&(r=(e==null?void 0:e.length)>0?`${e}/jcr:content/${o}`:o),r},connectComponentWithItem(o,e,n,r,s,a){const i=this.getItemPath(n,r,a);return t.h(o,{...e,cqPath:i,containerProps:s(n)})},getChildComponents(o,e,n,r,s,a,i){const c=[];return Object.keys(e).length>0&&n.length>0&&n.forEach(p=>{const f=this.modelToProps(e[p]);if(f&&typeof f.cqType<"u"){const h=i.get(f.cqType);r&&(f.aemNoDecoration=r),h&&c.push(this.connectComponentWithItem(h,f,p,o,s,a))}}),c},getChildPages(o,e){const n=[];return Object.keys(o).length===0||Object.keys(o).forEach(r=>{const s=this.modelToProps(o[r]);if(s&&typeof s.cqType<"u"){const a=e.get(s.cqType);a&&n.push(t.h(a,{...s,cqPath:s.cqPath}))}}),n},getCQPath(o){const{pagePath:e="",itemPath:n="",injectPropsOnInit:r}=o;let{cqPath:s=""}=o;return r&&!s&&(s=M(n?`${e}/jcr:content/${n}`:e),s=s.replace(/^\.$/,"")),s},modelToProps(o){const e=Object.getOwnPropertyNames(o),n={},r=s=>{const a=s.substring(1);return`cq${a.substring(0,1).toUpperCase()}${a.substring(1)}`};return e.forEach(s=>{let a=s;a.startsWith(":")&&(a=r(a)),n[a]=o[s]}),n}},I=t.defineComponent({inheritAttrs:!1,__name:"EditableProvider",props:{editConfig:{type:Object,default:()=>({isEmpty:()=>!1})},componentProperties:{type:Object,default:()=>({})},containerProps:{type:Object}},setup(o){const e=o,n=t.inject("isInEditor",C.AuthoringUtils.isInEditor()),r=t.useSlots(),s=t.useAttrs(),a=t.computed(()=>{const p={},{componentProperties:f}=e;return n&&(p["data-cq-data-path"]=f.cqPath,e.editConfig.resourceType&&(p["data-cq-resource-type"]=e.editConfig.resourceType)),p}),i=t.computed(()=>{var d;const p={},{componentProperties:f}=e,{appliedCssClassNames:h}=f,l=[];return h&&l.push(h),(d=e==null?void 0:e.containerProps)!=null&&d.class&&l.push(e.containerProps.class),l.length&&(p.class=l.join(" ")),p}),c=t.computed(()=>n&&typeof e.editConfig.isEmpty=="function"&&e.editConfig.isEmpty(e.componentProperties)?{class:"cq-placeholder","data-emptytext":e.editConfig.emptyLabel}:null);return(p,f)=>{var h,l,d,m;return!t.unref(n)&&e.componentProperties.hasOwnProperty("aemNoDecoration")&&e.componentProperties.aemNoDecoration||e.componentProperties.hasOwnProperty("cqHierarchyType")&&e.componentProperties.cqHierarchyType==="page"?(t.openBlock(),t.createBlock(t.resolveDynamicComponent((l=(h=t.unref(r)).default)==null?void 0:l.call(h)[0]),t.normalizeProps(t.mergeProps({key:0},{...t.unref(s),containerProps:e.containerProps})),null,16)):(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.mergeProps({key:1},{...a.value,...i.value})),[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((m=(d=t.unref(r)).default)==null?void 0:m.call(d)[0]),t.normalizeProps(t.guardReactiveProps({...t.unref(s),componentProperties:e.componentProperties})),null,16)),c.value?(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.mergeProps({key:0},c.value)),null,16)):t.createCommentVNode("",!0)],16))}}}),j=t.defineComponent({inheritAttrs:!1,__name:"CompositeEditableProvider",props:{editConfig:{type:Object,default:()=>({isEmpty:()=>!1})}},setup(o){const e=o,n=t.useSlots(),r=t.useAttrs();return(s,a)=>(t.openBlock(),t.createBlock(I,t.normalizeProps(t.guardReactiveProps({...t.unref(r),componentProperties:{...t.unref(r)},editConfig:e.editConfig})),{default:t.withCtx(()=>{var i,c;return[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((c=(i=t.unref(n)).default)==null?void 0:c.call(i)[0])))]}),_:1},16))}}),A=t.defineComponent({inheritAttrs:!1,__name:"ModelProvider",props:{cqPath:{type:String},cqForceReload:{type:Boolean,default:!1},injectPropsOnInit:{type:Boolean,default:!1},pagePath:{type:String},itemPath:{type:String}},setup(o){const e=o,n=t.useSlots(),r=t.useAttrs(),s=t.inject("isInEditor",C.AuthoringUtils.isInEditor()),a=t.ref({...r}),i=()=>{const{pagePath:f,itemPath:h,injectPropsOnInit:l,cqPath:d}=e;return k.getCQPath({pagePath:f,itemPath:h,injectPropsOnInit:l,cqPath:d})},c=f=>{const{pagePath:h,itemPath:l,injectPropsOnInit:d}=e,m=f||e.cqPath||h&&k.getCQPath({pagePath:h,itemPath:l,injectPropsOnInit:d});m&&C.ModelManager.getData({path:m,forceReload:e.cqForceReload}).then(g=>{g&&Object.keys(g).length>0&&(Object.assign(a.value,k.modelToProps(g)),d&&s&&C.PathUtils.dispatchGlobalCustomEvent("cq-async-content-loaded",{}))}).catch(g=>{console.error(g)})},p=c.bind(null,i());return t.onMounted(()=>{const f=i();e.injectPropsOnInit&&c(f),C.ModelManager.addListener(f,p)}),t.onUnmounted(()=>{C.ModelManager.removeListener(e.cqPath,p)}),(f,h)=>{var l,d;return t.openBlock(),t.createBlock(t.resolveDynamicComponent((d=(l=t.unref(n)).default)==null?void 0:d.call(l)[0]),t.normalizeProps(t.guardReactiveProps({cqPath:i(),...a.value})),null,16)}}}),O=t.defineComponent({inheritAttrs:!1,__name:"CompositeModelProvider",props:{modelConfig:{type:Object,default:()=>({injectPropsOnInit:!1,forceReload:!1})}},setup(o){const e=o,n=t.useSlots(),r=t.useAttrs(),{modelConfig:s}=t.toRefs(e),a=r.cqForceReload||s.value.forceReload,{injectPropsOnInit:i}=s.value;return(c,p)=>(t.openBlock(),t.createBlock(A,t.mergeProps({"cq-force-reload":t.unref(a),"inject-props-on-init":t.unref(i)},{...t.unref(r)}),{default:t.withCtx(()=>{var f,h;return[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((h=(f=t.unref(n)).default)==null?void 0:h.call(f)[0])))]}),_:1},16,["cq-force-reload","inject-props-on-init"]))}}),w=t.defineComponent({inheritAttrs:!1,__name:"ContextProvider",setup(o){const e=t.useSlots(),n=t.useAttrs(),r=t.inject("componentMapping",new u.ComponentMapping),s=t.inject("isInEditor",C.AuthoringUtils.isInEditor());return t.provide("isInEditor",s),t.provide("componentMapping",r),(a,i)=>{var c,p;return t.openBlock(),t.createBlock(t.resolveDynamicComponent((p=(c=t.unref(e)).default)==null?void 0:p.call(c)[0]),t.normalizeProps(t.guardReactiveProps({...t.unref(n)})),null,16)}}}),N=o=>t.h(w,{},()=>[t.h(o)]),D=(o,e)=>t.h(O,{modelConfig:e},()=>[t.h(o)]),$=(o,e)=>t.h(j,{editConfig:e},()=>[t.h(o)]),x=(o,e,n)=>{const{injectPropsOnInit:r=!0,forceReload:s=!1,...a}=n||{},i={injectPropsOnInit:r,forceReload:s,...a};let c=o;return c=N(D($(c,e),i)),c},G=u.ComponentMapping.map,V=u.ComponentMapping.get;u.ComponentMapping.map=function(e,n,r={isEmpty:()=>!1},s={}){const{injectPropsOnInit:a=!1,...i}=s||{},c=x(n,r,{injectPropsOnInit:a,...i});return G.call(u.ComponentMapping,e,c),c},u.ComponentMapping.get=V;const Q=o=>(e,n,r={})=>u.ComponentMapping.map(o,e,n,r),H=(o,e,n,r,s)=>{let a=[];o&&(a=[o]),e&&a.push(e);const i=n==null?void 0:n.class;return s&&i&&!r&&a.push(i),a},W=o=>({aemNoDecoration:{type:Boolean,default:!1},appliedCssClassNames:{type:String},baseCssClass:{type:String,default:o},containerProps:{type:Object,default:()=>{}},id:{type:String}}),J=["data-cq-data-path","data-emptytext"],S=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentPlaceholder",props:{emptyLabel:{type:String},path:{type:String}},setup(o){const e=o;return(n,r)=>(t.openBlock(),t.createElementBlock("div",{"data-cq-data-path":e.path,"data-emptytext":e.emptyLabel,class:"aem-AllowedComponent--component cq-placeholder placeholder"},null,8,J))}}),X=["data-text"],L=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentPlaceholderList",props:{emptyLabel:{type:String},components:{type:Array},placeholderProps:{type:Object},title:{type:String},cqPath:{type:String}},setup(o){const e=o,n=t.computed(()=>e.components&&e.components.length>0?e.title:e.emptyLabel);return(r,s)=>{var a;return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["aem-AllowedComponent--list",(a=e.placeholderProps)==null?void 0:a.placeholderClassNames])},[t.createElementVNode("div",{"data-text":n.value,class:"aem-AllowedComponent--title"},null,8,X),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.components,i=>(t.openBlock(),t.createBlock(S,{key:i.path,"empty-label":i.title,path:i.path},null,8,["empty-label","path"]))),128))],2)}}}),Y=["data-cq-data-path"],T=t.defineComponent({__name:"ContainerPlaceholder",props:{cqPath:{type:String,default:""},placeholderClassNames:{type:String}},setup(o){const e=o;return(n,r)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(e.placeholderClassNames),"data-cq-data-path":`${e.cqPath}/*`},null,10,Y))}}),R=t.defineComponent({name:"Container",inheritAttrs:!1,__name:"Container",props:{aemNoDecoration:{type:Boolean,default:!1},appliedCssClassNames:{type:String},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},getContainerProps:{type:Function},getItemComponentProps:{type:Function},getPlaceholderProps:{type:Function},isInEditor:{type:Boolean,default:void 0}},setup(o){const e=o,n=typeof e.isInEditor<"u"?e.isInEditor:t.inject("isInEditor",C.AuthoringUtils.isInEditor()),r=t.inject("componentMapping",new u.ComponentMapping),s=t.computed(()=>{let c={};return typeof e.getContainerProps=="function"?c=e.getContainerProps():(c={class:"aem-container"},n&&(c["data-cq-data-path"]=e.cqPath)),c}),a=t.computed(()=>k.getChildComponents(e.cqPath,e.cqItems,e.cqItemsOrder,e.aemNoDecoration,typeof e.getItemComponentProps=="function"?e.getItemComponentProps:()=>({}),!1,r)),i=t.computed(()=>typeof e.getPlaceholderProps=="function"?e.getPlaceholderProps():{cqPath:e.cqPath,placeholderClassNames:"new section"});return(c,p)=>(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.guardReactiveProps({...s.value})),[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(a.value,f=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(f),{key:f.toString()}))),128)),t.unref(n)?(t.openBlock(),t.createBlock(T,t.normalizeProps(t.mergeProps({key:0},i.value)),null,16)):t.createCommentVNode("",!0)],16))}}),z=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentsContainer",props:{_allowedComponentPlaceholderListEmptyLabel:{type:String,default:"No allowed components"},aemNoDecoration:{type:Boolean,default:!1},allowedComponents:{type:Object},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},getContainerProps:{type:Function},getItemComponentProps:{type:Function},getPlaceholderProps:{type:Function},isInEditor:{type:Boolean,default:void 0},title:{type:String}},setup(o){const e=o,n=typeof e.isInEditor<"u"?e.isInEditor:t.inject("isInEditor",C.AuthoringUtils.isInEditor()),r=t.computed(()=>typeof e.getPlaceholderProps=="function"?e.getPlaceholderProps():{cqPath:e.cqPath,placeholderClassNames:"new section"}),s=t.useAttrs();return(a,i)=>{var c;return t.unref(n)&&e.allowedComponents&&((c=e.allowedComponents)!=null&&c.applicable)?(t.openBlock(),t.createBlock(L,{key:0,components:e.allowedComponents.components,"cq-path":e.cqPath,"empty-label":e._allowedComponentPlaceholderListEmptyLabel,"placeholder-props":r.value,title:e.title},null,8,["components","cq-path","empty-label","placeholder-props","title"])):(t.openBlock(),t.createBlock(R,t.mergeProps({key:1,"aem-no-decoration":e.aemNoDecoration,"cq-items":e.cqItems,"cq-items-order":e.cqItemsOrder,"cq-path":e.cqPath,"get-container-props":e.getContainerProps,"get-item-component-props":e.getItemComponentProps,"get-placeholder-props":e.getPlaceholderProps,"is-in-editor":t.unref(n)},{...t.unref(s)}),null,16,["aem-no-decoration","cq-items","cq-items-order","cq-path","get-container-props","get-item-component-props","get-placeholder-props","is-in-editor"]))}}}),Z=t.defineComponent({name:"Page",inheritAttrs:!1,__name:"Page",props:{aemNoDecoration:{type:Boolean,default:!1},cqChildren:{type:Object,default:()=>({})},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""}},setup(o){const e=o,n=t.useAttrs(),r=t.inject("isInEditor",C.AuthoringUtils.isInEditor()),s=t.inject("componentMapping",new u.ComponentMapping),a=t.computed(()=>k.getChildComponents(e.cqPath,e.cqItems,e.cqItemsOrder,e.aemNoDecoration,()=>({}),!0,s)),i=t.computed(()=>k.getChildPages(e.cqChildren,s)),c=t.computed(()=>{const p=["aem-page"];n.cssClassNames&&p.push(...n.cssClassNames.split(" "));const f={class:p.join(" ")};return r&&(f["data-cq-data-path"]=e.cqPath),f});return(p,f)=>(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.guardReactiveProps(c.value)),[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(a.value,h=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(h),{key:h.toString()}))),128)),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(i.value,h=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(h),{key:h.toString()}))),128))],16))}}),K=t.defineComponent({inheritAttrs:!1,__name:"ResponsiveGrid",props:{aemNoDecoration:{type:Boolean,default:!1},cqPath:{type:String,default:""},gridClassNames:{type:String},columnClassNames:{type:Object},isInEditor:{type:Boolean,default:void 0}},setup(o){const e=o,n=t.useAttrs(),r=typeof e.isInEditor<"u"?e.isInEditor:t.inject("isInEditor",C.AuthoringUtils.isInEditor()),s=()=>{const c={},p=["aem-container"];return e.gridClassNames&&p.push(e.gridClassNames),c.class=p.join(" "),r&&(c["data-cq-data-path"]=e.cqPath),c},a=()=>{const c={cqPath:e.cqPath},p=["new","section","aem-Grid-newComponent"];return c.placeholderClassNames=p.join(" "),c},i=c=>{const p={};return e.columnClassNames&&e.columnClassNames[c]&&(p.class=e.columnClassNames[c]),p};return(c,p)=>(t.openBlock(),t.createBlock(z,t.mergeProps({"aem-no-decoration":e.aemNoDecoration,"cq-path":e.cqPath,"get-container-props":s,"get-item-component-props":i,"get-placeholder-props":a,"is-in-editor":t.unref(r)},{...t.unref(n)}),null,16,["aem-no-decoration","cq-path","is-in-editor"]))}});Object.defineProperty(P,"ComponentMapping",{enumerable:!0,get:()=>u.ComponentMapping}),P.AllowedComponentPlaceholder=S,P.AllowedComponentPlaceholderList=L,P.AllowedComponentsContainer=z,P.CompositeEditableProvider=j,P.CompositeModelProvider=O,P.Container=R,P.ContainerPlaceholder=T,P.ContextProvider=w,P.EditableProvider=I,P.MapTo=Q,P.ModelProvider=A,P.Page=Z,P.ResponsiveGrid=K,P.Utils=k,P.componentClassNames=H,P.componentProperties=W,P.withContext=N,P.withEditable=$,P.withModel=D,Object.defineProperty(P,Symbol.toStringTag,{value:"Module"})});
