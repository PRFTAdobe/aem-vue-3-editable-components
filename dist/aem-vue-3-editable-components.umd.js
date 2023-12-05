(function(P,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue"),require("@adobe/aem-spa-component-mapping"),require("@adobe/aem-spa-page-model-manager")):typeof define=="function"&&define.amd?define(["exports","vue","@adobe/aem-spa-component-mapping","@adobe/aem-spa-page-model-manager"],t):(P=typeof globalThis<"u"?globalThis:P||self,t(P.aemVue3EditableComponents={},P.Vue,P.AemSpaComponentMapping,P.AemSpaPageModelManager))})(this,function(P,t,u,C){"use strict";function F(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var E={exports:{}};(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;function n(h){"@babel/helpers - typeof";return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},n(h)}var r=47,s=46,c=function(d){var l=n(d);if(l!=="string")throw new TypeError("Expected a string, got a ".concat(l))},i=function(d,l){for(var p="",g=0,_=-1,k=0,b,y=0;y<=d.length;++y){if(y<d.length)b=d.charCodeAt(y);else{if(b===r)break;b=r}if(b===r){if(!(_===y-1||k===1))if(_!==y-1&&k===2){if(p.length<2||g!==2||p.charCodeAt(p.length-1)!==s||p.charCodeAt(p.length-2)!==s){if(p.length>2){var B=p.lastIndexOf("/");if(B!==p.length-1){B===-1?(p="",g=0):(p=p.slice(0,B),g=p.length-1-p.lastIndexOf("/")),_=y,k=0;continue}}else if(p.length===2||p.length===1){p="",g=0,_=y,k=0;continue}}l&&(p.length>0?p+="/..":p="..",g=2)}else p.length>0?p+="/"+d.slice(_+1,y):p=d.slice(_+1,y),g=y-_-1;_=y,k=0}else b===s&&k!==-1?++k:k=-1}return p},a=function(d){try{return decodeURIComponent(d)}catch{return d}},m=function(d){c(d);var l=d;if(l.length===0)return".";var p=l.charCodeAt(0)===r,g=l.charCodeAt(l.length-1)===r;return l=a(l),l=i(l,!p),l.length===0&&!p&&(l="."),l.length>0&&g&&(l+="/"),p?"/"+l:l},f=m;e.default=f,o.exports=e.default})(E,E.exports);var U=E.exports;const M=F(U),q={getItemPath(o,e,n){let r=(e==null?void 0:e.length)>0?`${e}/${o}`:o;return n&&(r=(e==null?void 0:e.length)>0?`${e}/jcr:content/${o}`:o),r},connectComponentWithItem(o,e,n,r,s,c){const i=this.getItemPath(n,r,c);return t.h(o,{...e,cqPath:i,containerProps:s(n)})},getChildComponents(o,e,n,r,s,c,i){const a=[];return Object.keys(e).length>0&&n.length>0&&n.forEach(m=>{const f=this.modelToProps(e[m]);if(f&&typeof f.cqType<"u"){const h=i.get(f.cqType);r&&(f.aemNoDecoration=r),h&&a.push(this.connectComponentWithItem(h,f,m,o,s,c))}}),a},getChildPages(o,e){const n=[];return Object.keys(o).length===0||Object.keys(o).forEach(r=>{const s=this.modelToProps(o[r]);if(s&&typeof s.cqType<"u"){const c=e.get(s.cqType);c&&n.push(t.h(c,{...s,cqPath:s.cqPath}))}}),n},getCQPath(o){const{pagePath:e="",itemPath:n="",injectPropsOnInit:r}=o;let{cqPath:s=""}=o;return r&&!s&&(s=M(n?`${e}/jcr:content/${n}`:e),s=s.replace(/^\.$/,"")),s},modelToProps(o){const e=Object.getOwnPropertyNames(o),n={},r=s=>{const c=s.substring(1);return`cq${c.substring(0,1).toUpperCase()}${c.substring(1)}`};return e.forEach(s=>{let c=s;c.startsWith(":")&&(c=r(c)),n[c]=o[s]}),n}},I=t.defineComponent({inheritAttrs:!1,__name:"EditableProvider",props:{editConfig:{type:Object,default:()=>({isEmpty:()=>!1})},componentProperties:{type:Object,default:()=>({})},containerProps:{type:Object}},setup(o){const e=o,n=t.inject("isInEditor",C.AuthoringUtils.isInEditor()),r=t.useSlots(),s=t.useAttrs(),c=t.computed(()=>{const m={},{componentProperties:f}=e;return n&&(m["data-cq-data-path"]=f.cqPath,e.editConfig.resourceType&&(m["data-cq-resource-type"]=e.editConfig.resourceType)),m}),i=t.computed(()=>{var p;const m={},{componentProperties:f}=e,{appliedCssClassNames:h,cqType:d}=f,l=[];return h&&l.push(h),(p=e==null?void 0:e.containerProps)!=null&&p.class&&l.push(e.containerProps.class),d&&(d!=null&&d.endsWith("/container"))&&l.push("aem-editable"),l.length&&(m.class=l.join(" ")),m}),a=t.computed(()=>n&&typeof e.editConfig.isEmpty=="function"&&e.editConfig.isEmpty(e.componentProperties)?{class:"cq-placeholder","data-emptytext":e.editConfig.emptyLabel}:null);return(m,f)=>{var h,d,l,p;return!t.unref(n)&&e.componentProperties.hasOwnProperty("aemNoDecoration")&&e.componentProperties.aemNoDecoration||e.componentProperties.hasOwnProperty("cqHierarchyType")&&e.componentProperties.cqHierarchyType==="page"?(t.openBlock(),t.createBlock(t.resolveDynamicComponent((d=(h=t.unref(r)).default)==null?void 0:d.call(h)[0]),t.normalizeProps(t.mergeProps({key:0},{...t.unref(s),containerProps:e.containerProps})),null,16)):(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.mergeProps({key:1},{...c.value,...i.value})),[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((p=(l=t.unref(r)).default)==null?void 0:p.call(l)[0]),t.normalizeProps(t.guardReactiveProps({...t.unref(s),componentProperties:e.componentProperties})),null,16)),a.value?(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.mergeProps({key:0},a.value)),null,16)):t.createCommentVNode("",!0)],16))}}}),j=t.defineComponent({inheritAttrs:!1,__name:"CompositeEditableProvider",props:{editConfig:{type:Object,default:()=>({isEmpty:()=>!1})}},setup(o){const e=o,n=t.useSlots(),r=t.useAttrs();return(s,c)=>(t.openBlock(),t.createBlock(I,t.normalizeProps(t.guardReactiveProps({...t.unref(r),componentProperties:{...t.unref(r)},editConfig:e.editConfig})),{default:t.withCtx(()=>{var i,a;return[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((a=(i=t.unref(n)).default)==null?void 0:a.call(i)[0])))]}),_:1},16))}}),A=t.defineComponent({inheritAttrs:!1,__name:"ModelProvider",props:{cqPath:{type:String},cqForceReload:{type:Boolean,default:!1},injectPropsOnInit:{type:Boolean,default:!1},pagePath:{type:String},itemPath:{type:String}},setup(o){const e=o,n=t.useSlots(),r=t.inject("isInEditor",C.AuthoringUtils.isInEditor()),s=t.reactive(t.useAttrs()),c=t.reactive({}),i=t.computed(()=>{const{pagePath:f,itemPath:h,injectPropsOnInit:d,cqPath:l}=e;return q.getCQPath({pagePath:f,itemPath:h,injectPropsOnInit:d,cqPath:l})}),a=f=>{const{pagePath:h,itemPath:d,injectPropsOnInit:l}=e,p=f||e.cqPath||h&&q.getCQPath({pagePath:h,itemPath:d,injectPropsOnInit:l});p&&C.ModelManager.getData({path:p,forceReload:e.cqForceReload}).then(g=>{g&&Object.keys(g).length>0&&(Object.assign(c,q.modelToProps(g)),l&&r&&C.PathUtils.dispatchGlobalCustomEvent("cq-async-content-loaded",{}))}).catch(g=>{console.error(g)})},m=a.bind(null,i.value);return t.onMounted(()=>{const f=i.value;e.injectPropsOnInit&&a(f),C.ModelManager.addListener(f,m)}),t.onUnmounted(()=>{C.ModelManager.removeListener(e.cqPath,m)}),(f,h)=>{var d,l;return t.openBlock(),t.createBlock(t.resolveDynamicComponent((l=(d=t.unref(n)).default)==null?void 0:l.call(d)[0]),t.normalizeProps(t.guardReactiveProps({pagePath:o.pagePath,itemPath:o.itemPath,cqPath:i.value,...s,...c})),null,16)}}}),O=t.defineComponent({inheritAttrs:!1,__name:"CompositeModelProvider",props:{modelConfig:{type:Object,default:()=>({injectPropsOnInit:!1,forceReload:!1})}},setup(o){const e=o,n=t.useSlots(),r=t.useAttrs(),{modelConfig:s}=t.toRefs(e),c=r.cqForceReload||s.value.forceReload,{injectPropsOnInit:i}=s.value;return(a,m)=>(t.openBlock(),t.createBlock(A,t.mergeProps({"cq-force-reload":t.unref(c),"inject-props-on-init":t.unref(i)},{...t.unref(r)}),{default:t.withCtx(()=>{var f,h;return[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((h=(f=t.unref(n)).default)==null?void 0:h.call(f)[0])))]}),_:1},16,["cq-force-reload","inject-props-on-init"]))}}),w=t.defineComponent({inheritAttrs:!1,__name:"ContextProvider",setup(o){const e=t.useSlots(),n=t.useAttrs(),r=t.inject("componentMapping",new u.ComponentMapping),s=t.inject("isInEditor",C.AuthoringUtils.isInEditor());return t.provide("isInEditor",s),t.provide("componentMapping",r),(c,i)=>{var a,m;return t.openBlock(),t.createBlock(t.resolveDynamicComponent((m=(a=t.unref(e)).default)==null?void 0:m.call(a)[0]),t.normalizeProps(t.guardReactiveProps({...t.unref(n)})),null,16)}}}),N=o=>t.h(w,{},()=>[t.h(o)]),D=(o,e)=>t.h(O,{modelConfig:e},()=>[t.h(o)]),S=(o,e)=>t.h(j,{editConfig:e},()=>[t.h(o)]),x=(o,e,n)=>{const{injectPropsOnInit:r=!0,forceReload:s=!1,...c}=n||{},i={injectPropsOnInit:r,forceReload:s,...c};let a=o;return a=N(D(S(a,e),i)),a},G=u.ComponentMapping.map,V=u.ComponentMapping.get;u.ComponentMapping.map=function(e,n,r={isEmpty:()=>!1},s={}){const{injectPropsOnInit:c=!1,...i}=s||{},a=x(n,r,{injectPropsOnInit:c,...i});return G.call(u.ComponentMapping,e,a),a},u.ComponentMapping.get=V;const Q=o=>(e,n,r={})=>u.ComponentMapping.map(o,e,n,r),W=(o,e,n,r,s,c)=>{let i=[];o&&(i=[o]),e&&i.push(e),n&&i.push(...n.split(" "));const a=r==null?void 0:r.class;return c&&a&&!s&&i.push(a),i},H=o=>({aemNoDecoration:{type:Boolean,default:!1},appliedCssClassNames:{type:String},baseCssClass:{type:String,default:o},containerProps:{type:Object,default:()=>{}},cssClassNames:{type:String},id:{type:String}}),J=["data-cq-data-path","data-emptytext"],$=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentPlaceholder",props:{emptyLabel:{type:String},path:{type:String}},setup(o){const e=o;return(n,r)=>(t.openBlock(),t.createElementBlock("div",{"data-cq-data-path":e.path,"data-emptytext":e.emptyLabel,class:"aem-AllowedComponent--component cq-placeholder placeholder"},null,8,J))}}),X=["data-text"],L=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentPlaceholderList",props:{emptyLabel:{type:String},components:{type:Array},placeholderProps:{type:Object},title:{type:String},cqPath:{type:String}},setup(o){const e=o,n=t.computed(()=>e.components&&e.components.length>0?e.title:e.emptyLabel);return(r,s)=>{var c;return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["aem-AllowedComponent--list",(c=e.placeholderProps)==null?void 0:c.placeholderClassNames])},[t.createElementVNode("div",{"data-text":n.value,class:"aem-AllowedComponent--title"},null,8,X),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.components,i=>(t.openBlock(),t.createBlock($,{key:i.path,"empty-label":i.title,path:i.path},null,8,["empty-label","path"]))),128))],2)}}}),Y=["data-cq-data-path"],T=t.defineComponent({__name:"ContainerPlaceholder",props:{cqPath:{type:String,default:""},placeholderClassNames:{type:String}},setup(o){const e=o;return(n,r)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(e.placeholderClassNames),"data-cq-data-path":`${e.cqPath}/*`},null,10,Y))}}),R=t.defineComponent({name:"Container",inheritAttrs:!1,__name:"Container",props:{aemNoDecoration:{type:Boolean,default:!1},appliedCssClassNames:{type:String},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},getContainerProps:{type:Function},getItemComponentProps:{type:Function},getPlaceholderProps:{type:Function},isInEditor:{type:Boolean,default:void 0}},setup(o){const e=o,n=typeof e.isInEditor<"u"?e.isInEditor:t.inject("isInEditor",C.AuthoringUtils.isInEditor()),r=t.inject("componentMapping",new u.ComponentMapping),s=t.computed(()=>{let a={};return typeof e.getContainerProps=="function"?a=e.getContainerProps():(a={class:"aem-container"},n&&(a["data-cq-data-path"]=e.cqPath)),a}),c=t.computed(()=>q.getChildComponents(e.cqPath,e.cqItems,e.cqItemsOrder,e.aemNoDecoration,typeof e.getItemComponentProps=="function"?e.getItemComponentProps:()=>({}),!1,r)),i=t.computed(()=>typeof e.getPlaceholderProps=="function"?e.getPlaceholderProps():{cqPath:e.cqPath,placeholderClassNames:"new section"});return(a,m)=>(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.guardReactiveProps({...s.value})),[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(c.value,f=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(f),{key:f.toString()}))),128)),t.unref(n)?(t.openBlock(),t.createBlock(T,t.normalizeProps(t.mergeProps({key:0},i.value)),null,16)):t.createCommentVNode("",!0)],16))}}),z=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentsContainer",props:{_allowedComponentPlaceholderListEmptyLabel:{type:String,default:"No allowed components"},aemNoDecoration:{type:Boolean,default:!1},allowedComponents:{type:Object},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},getContainerProps:{type:Function},getItemComponentProps:{type:Function},getPlaceholderProps:{type:Function},isInEditor:{type:Boolean,default:void 0},title:{type:String}},setup(o){const e=o,n=typeof e.isInEditor<"u"?e.isInEditor:t.inject("isInEditor",C.AuthoringUtils.isInEditor()),r=t.computed(()=>typeof e.getPlaceholderProps=="function"?e.getPlaceholderProps():{cqPath:e.cqPath,placeholderClassNames:"new section"}),s=t.useAttrs();return(c,i)=>{var a;return t.unref(n)&&e.allowedComponents&&((a=e.allowedComponents)!=null&&a.applicable)?(t.openBlock(),t.createBlock(L,{key:0,components:e.allowedComponents.components,"cq-path":e.cqPath,"empty-label":e._allowedComponentPlaceholderListEmptyLabel,"placeholder-props":r.value,title:e.title},null,8,["components","cq-path","empty-label","placeholder-props","title"])):(t.openBlock(),t.createBlock(R,t.mergeProps({key:1,"aem-no-decoration":e.aemNoDecoration,"cq-items":e.cqItems,"cq-items-order":e.cqItemsOrder,"cq-path":e.cqPath,"get-container-props":e.getContainerProps,"get-item-component-props":e.getItemComponentProps,"get-placeholder-props":e.getPlaceholderProps,"is-in-editor":t.unref(n)},{...t.unref(s)}),null,16,["aem-no-decoration","cq-items","cq-items-order","cq-path","get-container-props","get-item-component-props","get-placeholder-props","is-in-editor"]))}}}),Z=t.defineComponent({name:"Page",inheritAttrs:!1,__name:"Page",props:{aemNoDecoration:{type:Boolean,default:!1},cqChildren:{type:Object,default:()=>({})},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""}},setup(o){const e=t.useAttrs(),n=t.inject("isInEditor",C.AuthoringUtils.isInEditor()),r=t.inject("componentMapping",new u.ComponentMapping),s=o,c=t.computed(()=>q.getChildComponents(s.cqPath,s.cqItems,s.cqItemsOrder,s.aemNoDecoration,()=>({}),!0,r)),i=t.computed(()=>q.getChildPages(s.cqChildren,r)),a=t.computed(()=>{const m=["aem-page"];e.cssClassNames&&m.push(...e.cssClassNames.split(" "));const f={class:m.join(" ")};return n&&(f["data-cq-data-path"]=s.cqPath),f});return t.onMounted(()=>{e.title&&(document.title=e.title)}),t.onUpdated(()=>{e.title&&(document.title=e.title)}),(m,f)=>(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.guardReactiveProps(a.value)),[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(c.value,h=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(h),{key:h.toString()}))),128)),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(i.value,h=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(h),{key:h.toString()}))),128))],16))}}),K=t.defineComponent({inheritAttrs:!1,__name:"ResponsiveGrid",props:{aemNoDecoration:{type:Boolean,default:!1},cqPath:{type:String,default:""},gridClassNames:{type:String},columnClassNames:{type:Object},isInEditor:{type:Boolean,default:void 0},title:{type:String,default:"Layout Container"}},setup(o){const e=o,n=t.useAttrs(),r=typeof e.isInEditor<"u"?e.isInEditor:t.inject("isInEditor",C.AuthoringUtils.isInEditor()),s=()=>{const a={},m=["aem-container"];return e.gridClassNames&&m.push(e.gridClassNames),a.class=m.join(" "),r&&(a["data-cq-data-path"]=e.cqPath),a},c=()=>{const a={cqPath:e.cqPath},m=["new","section","aem-Grid-newComponent"];return a.placeholderClassNames=m.join(" "),a},i=a=>{const m={};return e.columnClassNames&&e.columnClassNames[a]&&(m.class=e.columnClassNames[a]),m};return(a,m)=>(t.openBlock(),t.createBlock(z,t.mergeProps({"aem-no-decoration":e.aemNoDecoration,"cq-path":e.cqPath,"get-container-props":s,"get-item-component-props":i,"get-placeholder-props":c,"is-in-editor":t.unref(r),title:e.title},{...t.unref(n)}),null,16,["aem-no-decoration","cq-path","is-in-editor","title"]))}});Object.defineProperty(P,"ComponentMapping",{enumerable:!0,get:()=>u.ComponentMapping}),P.AllowedComponentPlaceholder=$,P.AllowedComponentPlaceholderList=L,P.AllowedComponentsContainer=z,P.CompositeEditableProvider=j,P.CompositeModelProvider=O,P.Container=R,P.ContainerPlaceholder=T,P.ContextProvider=w,P.EditableProvider=I,P.MapTo=Q,P.ModelProvider=A,P.Page=Z,P.ResponsiveGrid=K,P.Utils=q,P.componentClassNames=W,P.componentProperties=H,P.withContext=N,P.withEditable=S,P.withModel=D,Object.defineProperty(P,Symbol.toStringTag,{value:"Module"})});
