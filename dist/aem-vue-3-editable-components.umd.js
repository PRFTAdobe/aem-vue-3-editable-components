(function(P,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue"),require("@adobe/aem-spa-component-mapping"),require("@adobe/aem-spa-page-model-manager")):typeof define=="function"&&define.amd?define(["exports","vue","@adobe/aem-spa-component-mapping","@adobe/aem-spa-page-model-manager"],t):(P=typeof globalThis<"u"?globalThis:P||self,t(P.aemVue3EditableComponents={},P.Vue,P.AemSpaComponentMapping,P.AemSpaPageModelManager))})(this,function(P,t,u,C){"use strict";function z(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var B={exports:{}};(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;function n(h){"@babel/helpers - typeof";return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},n(h)}var r=47,s=46,a=function(d){var l=n(d);if(l!=="string")throw new TypeError("Expected a string, got a ".concat(l))},i=function(d,l){for(var p="",g=0,_=-1,q=0,b,y=0;y<=d.length;++y){if(y<d.length)b=d.charCodeAt(y);else{if(b===r)break;b=r}if(b===r){if(!(_===y-1||q===1))if(_!==y-1&&q===2){if(p.length<2||g!==2||p.charCodeAt(p.length-1)!==s||p.charCodeAt(p.length-2)!==s){if(p.length>2){var E=p.lastIndexOf("/");if(E!==p.length-1){E===-1?(p="",g=0):(p=p.slice(0,E),g=p.length-1-p.lastIndexOf("/")),_=y,q=0;continue}}else if(p.length===2||p.length===1){p="",g=0,_=y,q=0;continue}}l&&(p.length>0?p+="/..":p="..",g=2)}else p.length>0?p+="/"+d.slice(_+1,y):p=d.slice(_+1,y),g=y-_-1;_=y,q=0}else b===s&&q!==-1?++q:q=-1}return p},c=function(d){try{return decodeURIComponent(d)}catch{return d}},m=function(d){a(d);var l=d;if(l.length===0)return".";var p=l.charCodeAt(0)===r,g=l.charCodeAt(l.length-1)===r;return l=c(l),l=i(l,!p),l.length===0&&!p&&(l="."),l.length>0&&g&&(l+="/"),p?"/"+l:l},f=m;e.default=f,o.exports=e.default})(B,B.exports);var U=B.exports;const M=z(U),k={getItemPath(o,e,n){let r=(e==null?void 0:e.length)>0?`${e}/${o}`:o;return n&&(r=(e==null?void 0:e.length)>0?`${e}/jcr:content/${o}`:o),r},connectComponentWithItem(o,e,n,r,s,a){const i=this.getItemPath(n,r,a);return t.h(o,{...e,cqPath:i,containerProps:s(n)})},getChildComponents(o,e,n,r,s,a,i){const c=[];return Object.keys(e).length>0&&n.length>0&&n.forEach(m=>{const f=this.modelToProps(e[m]);if(f&&typeof f.cqType<"u"){const h=i.get(f.cqType);r&&(f.aemNoDecoration=r),h&&c.push(this.connectComponentWithItem(h,f,m,o,s,a))}}),c},getChildPages(o,e){const n=[];return Object.keys(o).length===0||Object.keys(o).forEach(r=>{const s=this.modelToProps(o[r]);if(s&&typeof s.cqType<"u"){const a=e.get(s.cqType);a&&n.push(t.h(a,{...s,cqPath:s.cqPath}))}}),n},getCQPath(o){const{pagePath:e="",itemPath:n="",injectPropsOnInit:r}=o;let{cqPath:s=""}=o;return r&&!s&&(s=M(n?`${e}/jcr:content/${n}`:e),s=s.replace(/^\.$/,"")),s},modelToProps(o){const e=Object.getOwnPropertyNames(o),n={},r=s=>{const a=s.substring(1);return`cq${a.substring(0,1).toUpperCase()}${a.substring(1)}`};return e.forEach(s=>{let a=s;a.startsWith(":")&&(a=r(a)),n[a]=o[s]}),n}},I=t.defineComponent({inheritAttrs:!1,__name:"EditableProvider",props:{editConfig:{type:Object,default:()=>({isEmpty:()=>!1})},componentProperties:{type:Object,default:()=>({})},containerProps:{type:Object}},setup(o){const e=o,n=t.inject("isInEditor",C.AuthoringUtils.isInEditor()),r=t.useSlots(),s=t.useAttrs(),a=t.computed(()=>{const m={},{componentProperties:f}=e;return n&&(m["data-cq-data-path"]=f.cqPath,e.editConfig.resourceType&&(m["data-cq-resource-type"]=e.editConfig.resourceType)),m}),i=t.computed(()=>{var p;const m={},{componentProperties:f}=e,{appliedCssClassNames:h,cqType:d}=f,l=[];return h&&l.push(h),(p=e==null?void 0:e.containerProps)!=null&&p.class&&l.push(e.containerProps.class),d&&(d!=null&&d.endsWith("/container"))&&l.push("aem-editable"),l.length&&(m.class=l.join(" ")),m}),c=t.computed(()=>n&&typeof e.editConfig.isEmpty=="function"&&e.editConfig.isEmpty(e.componentProperties)?{class:"cq-placeholder","data-emptytext":e.editConfig.emptyLabel}:null);return(m,f)=>{var h,d,l,p;return!t.unref(n)&&e.componentProperties.hasOwnProperty("aemNoDecoration")&&e.componentProperties.aemNoDecoration||e.componentProperties.hasOwnProperty("cqHierarchyType")&&e.componentProperties.cqHierarchyType==="page"?(t.openBlock(),t.createBlock(t.resolveDynamicComponent((d=(h=t.unref(r)).default)==null?void 0:d.call(h)[0]),t.normalizeProps(t.mergeProps({key:0},{...t.unref(s),containerProps:e.containerProps})),null,16)):(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.mergeProps({key:1},{...a.value,...i.value})),[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((p=(l=t.unref(r)).default)==null?void 0:p.call(l)[0]),t.normalizeProps(t.guardReactiveProps({...t.unref(s),componentProperties:e.componentProperties})),null,16)),c.value?(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.mergeProps({key:0},c.value)),null,16)):t.createCommentVNode("",!0)],16))}}}),j=t.defineComponent({inheritAttrs:!1,__name:"CompositeEditableProvider",props:{editConfig:{type:Object,default:()=>({isEmpty:()=>!1})}},setup(o){const e=o,n=t.useSlots(),r=t.useAttrs();return(s,a)=>(t.openBlock(),t.createBlock(I,t.normalizeProps(t.guardReactiveProps({...t.unref(r),componentProperties:{...t.unref(r)},editConfig:e.editConfig})),{default:t.withCtx(()=>{var i,c;return[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((c=(i=t.unref(n)).default)==null?void 0:c.call(i)[0])))]}),_:1},16))}}),A=t.defineComponent({inheritAttrs:!1,__name:"ModelProvider",props:{cqPath:{type:String},cqForceReload:{type:Boolean,default:!1},injectPropsOnInit:{type:Boolean,default:!1},pagePath:{type:String},itemPath:{type:String}},setup(o){const e=o,n=t.useSlots(),r=t.inject("isInEditor",C.AuthoringUtils.isInEditor()),s=t.reactive(t.useAttrs()),a=()=>{const{pagePath:f,itemPath:h,injectPropsOnInit:d,cqPath:l}=e;return k.getCQPath({pagePath:f,itemPath:h,injectPropsOnInit:d,cqPath:l})},i=f=>{const{pagePath:h,itemPath:d,injectPropsOnInit:l}=e,p=f||e.cqPath||h&&k.getCQPath({pagePath:h,itemPath:d,injectPropsOnInit:l});p&&C.ModelManager.getData({path:p,forceReload:e.cqForceReload}).then(g=>{g&&Object.keys(g).length>0&&(Object.assign(s,k.modelToProps(g)),l&&r&&C.PathUtils.dispatchGlobalCustomEvent("cq-async-content-loaded",{}))}).catch(g=>{console.error(g)})},c=i.bind(null,a());t.onMounted(()=>{const f=a();e.injectPropsOnInit&&i(f),C.ModelManager.addListener(f,c)}),t.onUnmounted(()=>{C.ModelManager.removeListener(e.cqPath,c)});const m=f=>(console.log(f),!0);return(f,h)=>{var d,l;return t.openBlock(),t.createBlock(t.resolveDynamicComponent((l=(d=t.unref(n)).default)==null?void 0:l.call(d)[0]),t.mergeProps({"data-bounded":m({cqPath:a(),...s})},{cqPath:a(),...s}),null,16,["data-bounded"])}}}),O=t.defineComponent({inheritAttrs:!1,__name:"CompositeModelProvider",props:{modelConfig:{type:Object,default:()=>({injectPropsOnInit:!1,forceReload:!1})}},setup(o){const e=o,n=t.useSlots(),r=t.useAttrs(),{modelConfig:s}=t.toRefs(e),a=r.cqForceReload||s.value.forceReload,{injectPropsOnInit:i}=s.value;return(c,m)=>(t.openBlock(),t.createBlock(A,t.mergeProps({"cq-force-reload":t.unref(a),"inject-props-on-init":t.unref(i)},{...t.unref(r)}),{default:t.withCtx(()=>{var f,h;return[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((h=(f=t.unref(n)).default)==null?void 0:h.call(f)[0])))]}),_:1},16,["cq-force-reload","inject-props-on-init"]))}}),w=t.defineComponent({inheritAttrs:!1,__name:"ContextProvider",setup(o){const e=t.useSlots(),n=t.useAttrs(),r=t.inject("componentMapping",new u.ComponentMapping),s=t.inject("isInEditor",C.AuthoringUtils.isInEditor());return t.provide("isInEditor",s),t.provide("componentMapping",r),(a,i)=>{var c,m;return t.openBlock(),t.createBlock(t.resolveDynamicComponent((m=(c=t.unref(e)).default)==null?void 0:m.call(c)[0]),t.normalizeProps(t.guardReactiveProps({...t.unref(n)})),null,16)}}}),N=o=>t.h(w,{},()=>[t.h(o)]),D=(o,e)=>t.h(O,{modelConfig:e},()=>[t.h(o)]),S=(o,e)=>t.h(j,{editConfig:e},()=>[t.h(o)]),x=(o,e,n)=>{const{injectPropsOnInit:r=!0,forceReload:s=!1,...a}=n||{},i={injectPropsOnInit:r,forceReload:s,...a};let c=o;return c=N(D(S(c,e),i)),c},G=u.ComponentMapping.map,V=u.ComponentMapping.get;u.ComponentMapping.map=function(e,n,r={isEmpty:()=>!1},s={}){const{injectPropsOnInit:a=!1,...i}=s||{},c=x(n,r,{injectPropsOnInit:a,...i});return G.call(u.ComponentMapping,e,c),c},u.ComponentMapping.get=V;const Q=o=>(e,n,r={})=>u.ComponentMapping.map(o,e,n,r),W=(o,e,n,r,s,a)=>{let i=[];o&&(i=[o]),e&&i.push(e),n&&i.push(...n.split(" "));const c=r==null?void 0:r.class;return a&&c&&!s&&i.push(c),i},H=o=>({aemNoDecoration:{type:Boolean,default:!1},appliedCssClassNames:{type:String},baseCssClass:{type:String,default:o},containerProps:{type:Object,default:()=>{}},cssClassNames:{type:String},id:{type:String}}),J=["data-cq-data-path","data-emptytext"],$=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentPlaceholder",props:{emptyLabel:{type:String},path:{type:String}},setup(o){const e=o;return(n,r)=>(t.openBlock(),t.createElementBlock("div",{"data-cq-data-path":e.path,"data-emptytext":e.emptyLabel,class:"aem-AllowedComponent--component cq-placeholder placeholder"},null,8,J))}}),X=["data-text"],L=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentPlaceholderList",props:{emptyLabel:{type:String},components:{type:Array},placeholderProps:{type:Object},title:{type:String},cqPath:{type:String}},setup(o){const e=o,n=t.computed(()=>e.components&&e.components.length>0?e.title:e.emptyLabel);return(r,s)=>{var a;return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["aem-AllowedComponent--list",(a=e.placeholderProps)==null?void 0:a.placeholderClassNames])},[t.createElementVNode("div",{"data-text":n.value,class:"aem-AllowedComponent--title"},null,8,X),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.components,i=>(t.openBlock(),t.createBlock($,{key:i.path,"empty-label":i.title,path:i.path},null,8,["empty-label","path"]))),128))],2)}}}),Y=["data-cq-data-path"],T=t.defineComponent({__name:"ContainerPlaceholder",props:{cqPath:{type:String,default:""},placeholderClassNames:{type:String}},setup(o){const e=o;return(n,r)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(e.placeholderClassNames),"data-cq-data-path":`${e.cqPath}/*`},null,10,Y))}}),F=t.defineComponent({name:"Container",inheritAttrs:!1,__name:"Container",props:{aemNoDecoration:{type:Boolean,default:!1},appliedCssClassNames:{type:String},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},getContainerProps:{type:Function},getItemComponentProps:{type:Function},getPlaceholderProps:{type:Function},isInEditor:{type:Boolean,default:void 0}},setup(o){const e=o,n=typeof e.isInEditor<"u"?e.isInEditor:t.inject("isInEditor",C.AuthoringUtils.isInEditor()),r=t.inject("componentMapping",new u.ComponentMapping),s=t.computed(()=>{let c={};return typeof e.getContainerProps=="function"?c=e.getContainerProps():(c={class:"aem-container"},n&&(c["data-cq-data-path"]=e.cqPath)),c}),a=t.computed(()=>k.getChildComponents(e.cqPath,e.cqItems,e.cqItemsOrder,e.aemNoDecoration,typeof e.getItemComponentProps=="function"?e.getItemComponentProps:()=>({}),!1,r)),i=t.computed(()=>typeof e.getPlaceholderProps=="function"?e.getPlaceholderProps():{cqPath:e.cqPath,placeholderClassNames:"new section"});return(c,m)=>(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.guardReactiveProps({...s.value})),[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(a.value,f=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(f),{key:f.toString()}))),128)),t.unref(n)?(t.openBlock(),t.createBlock(T,t.normalizeProps(t.mergeProps({key:0},i.value)),null,16)):t.createCommentVNode("",!0)],16))}}),R=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentsContainer",props:{_allowedComponentPlaceholderListEmptyLabel:{type:String,default:"No allowed components"},aemNoDecoration:{type:Boolean,default:!1},allowedComponents:{type:Object},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},getContainerProps:{type:Function},getItemComponentProps:{type:Function},getPlaceholderProps:{type:Function},isInEditor:{type:Boolean,default:void 0},title:{type:String}},setup(o){const e=o,n=typeof e.isInEditor<"u"?e.isInEditor:t.inject("isInEditor",C.AuthoringUtils.isInEditor()),r=t.computed(()=>typeof e.getPlaceholderProps=="function"?e.getPlaceholderProps():{cqPath:e.cqPath,placeholderClassNames:"new section"}),s=t.useAttrs();return(a,i)=>{var c;return t.unref(n)&&e.allowedComponents&&((c=e.allowedComponents)!=null&&c.applicable)?(t.openBlock(),t.createBlock(L,{key:0,components:e.allowedComponents.components,"cq-path":e.cqPath,"empty-label":e._allowedComponentPlaceholderListEmptyLabel,"placeholder-props":r.value,title:e.title},null,8,["components","cq-path","empty-label","placeholder-props","title"])):(t.openBlock(),t.createBlock(F,t.mergeProps({key:1,"aem-no-decoration":e.aemNoDecoration,"cq-items":e.cqItems,"cq-items-order":e.cqItemsOrder,"cq-path":e.cqPath,"get-container-props":e.getContainerProps,"get-item-component-props":e.getItemComponentProps,"get-placeholder-props":e.getPlaceholderProps,"is-in-editor":t.unref(n)},{...t.unref(s)}),null,16,["aem-no-decoration","cq-items","cq-items-order","cq-path","get-container-props","get-item-component-props","get-placeholder-props","is-in-editor"]))}}}),Z=t.defineComponent({name:"Page",inheritAttrs:!1,__name:"Page",props:{aemNoDecoration:{type:Boolean,default:!1},cqChildren:{type:Object,default:()=>({})},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""}},setup(o){const e=o,n=t.useAttrs(),r=t.inject("isInEditor",C.AuthoringUtils.isInEditor()),s=t.inject("componentMapping",new u.ComponentMapping),a=t.computed(()=>k.getChildComponents(e.cqPath,e.cqItems,e.cqItemsOrder,e.aemNoDecoration,()=>({}),!0,s)),i=t.computed(()=>k.getChildPages(e.cqChildren,s)),c=t.computed(()=>{const m=["aem-page"];n.cssClassNames&&m.push(...n.cssClassNames.split(" "));const f={class:m.join(" ")};return r&&(f["data-cq-data-path"]=e.cqPath),f});return(m,f)=>(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.guardReactiveProps(c.value)),[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(a.value,h=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(h),{key:h.toString()}))),128)),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(i.value,h=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(h),{key:h.toString()}))),128))],16))}}),K=t.defineComponent({inheritAttrs:!1,__name:"ResponsiveGrid",props:{aemNoDecoration:{type:Boolean,default:!1},cqPath:{type:String,default:""},gridClassNames:{type:String},columnClassNames:{type:Object},isInEditor:{type:Boolean,default:void 0}},setup(o){const e=o,n=t.useAttrs(),r=typeof e.isInEditor<"u"?e.isInEditor:t.inject("isInEditor",C.AuthoringUtils.isInEditor()),s=()=>{const c={},m=["aem-container"];return e.gridClassNames&&m.push(e.gridClassNames),c.class=m.join(" "),r&&(c["data-cq-data-path"]=e.cqPath),c},a=()=>{const c={cqPath:e.cqPath},m=["new","section","aem-Grid-newComponent"];return c.placeholderClassNames=m.join(" "),c},i=c=>{const m={};return e.columnClassNames&&e.columnClassNames[c]&&(m.class=e.columnClassNames[c]),m};return(c,m)=>(t.openBlock(),t.createBlock(R,t.mergeProps({"aem-no-decoration":e.aemNoDecoration,"cq-path":e.cqPath,"get-container-props":s,"get-item-component-props":i,"get-placeholder-props":a,"is-in-editor":t.unref(r)},{...t.unref(n)}),null,16,["aem-no-decoration","cq-path","is-in-editor"]))}});Object.defineProperty(P,"ComponentMapping",{enumerable:!0,get:()=>u.ComponentMapping}),P.AllowedComponentPlaceholder=$,P.AllowedComponentPlaceholderList=L,P.AllowedComponentsContainer=R,P.CompositeEditableProvider=j,P.CompositeModelProvider=O,P.Container=F,P.ContainerPlaceholder=T,P.ContextProvider=w,P.EditableProvider=I,P.MapTo=Q,P.ModelProvider=A,P.Page=Z,P.ResponsiveGrid=K,P.Utils=k,P.componentClassNames=W,P.componentProperties=H,P.withContext=N,P.withEditable=S,P.withModel=D,Object.defineProperty(P,Symbol.toStringTag,{value:"Module"})});
