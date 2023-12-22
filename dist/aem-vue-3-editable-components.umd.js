(function(h,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue"),require("@adobe/aem-spa-component-mapping"),require("@adobe/aem-spa-page-model-manager")):typeof define=="function"&&define.amd?define(["exports","vue","@adobe/aem-spa-component-mapping","@adobe/aem-spa-page-model-manager"],t):(h=typeof globalThis<"u"?globalThis:h||self,t(h.aemVue3EditableComponents={},h.Vue,h.AemSpaComponentMapping,h.AemSpaPageModelManager))})(this,function(h,t,_,C){"use strict";function F(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var I={exports:{}};(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;function n(f){"@babel/helpers - typeof";return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},n(f)}var r=47,s=46,a=function(d){var p=n(d);if(p!=="string")throw new TypeError("Expected a string, got a ".concat(p))},m=function(d,p){for(var i="",u=0,g=-1,k=0,E,y=0;y<=d.length;++y){if(y<d.length)E=d.charCodeAt(y);else{if(E===r)break;E=r}if(E===r){if(!(g===y-1||k===1))if(g!==y-1&&k===2){if(i.length<2||u!==2||i.charCodeAt(i.length-1)!==s||i.charCodeAt(i.length-2)!==s){if(i.length>2){var b=i.lastIndexOf("/");if(b!==i.length-1){b===-1?(i="",u=0):(i=i.slice(0,b),u=i.length-1-i.lastIndexOf("/")),g=y,k=0;continue}}else if(i.length===2||i.length===1){i="",u=0,g=y,k=0;continue}}p&&(i.length>0?i+="/..":i="..",u=2)}else i.length>0?i+="/"+d.slice(g+1,y):i=d.slice(g+1,y),u=y-g-1;g=y,k=0}else E===s&&k!==-1?++k:k=-1}return i},c=function(d){try{return decodeURIComponent(d)}catch{return d}},l=function(d){a(d);var p=d;if(p.length===0)return".";var i=p.charCodeAt(0)===r,u=p.charCodeAt(p.length-1)===r;return p=c(p),p=m(p,!i),p.length===0&&!i&&(p="."),p.length>0&&u&&(p+="/"),i?"/"+p:p},P=l;e.default=P,o.exports=e.default})(I,I.exports);var M=I.exports;const U=F(M),q={getItemPath(o,e,n){let r=(e==null?void 0:e.length)>0?`${e}/${o}`:o;return n&&(r=(e==null?void 0:e.length)>0?`${e}/jcr:content/${o}`:o),r},connectComponentWithItem(o,e,n,r,s,a){const m=this.getItemPath(n,r,a);return t.h(o,{...e,cqPath:m,containerProps:s(n)})},getChildComponents(o,e,n,r,s,a,m){const c=[];return Object.keys(e).length>0&&n.length>0&&n.forEach(l=>{const P=this.modelToProps(e[l]);if(P&&typeof P.cqType<"u"){const f=m.get(P.cqType);r&&(P.aemNoDecoration=r),f&&c.push(this.connectComponentWithItem(f,P,l,o,s,a))}}),c},getChildPages(o,e){const n=[];return Object.keys(o).length===0||Object.keys(o).forEach(r=>{const s=this.modelToProps(o[r]);if(s&&typeof s.cqType<"u"){const a=e.get(s.cqType);a&&n.push(t.h(a,{...s,cqPath:s.cqPath}))}}),n},getCQPath(o){const{pagePath:e="",itemPath:n="",injectPropsOnInit:r}=o;let{cqPath:s=""}=o;return r&&!s&&(s=U(n?`${e}/jcr:content/${n}`:e),s=s.replace(/^\.$/,"")),s},modelToProps(o){const e=Object.getOwnPropertyNames(o),n={},r=s=>{const a=s.substring(1);return`cq${a.substring(0,1).toUpperCase()}${a.substring(1)}`};return e.forEach(s=>{let a=s;a.startsWith(":")&&(a=r(a)),n[a]=o[s]}),n}},B=t.defineComponent({inheritAttrs:!1,__name:"EditableProvider",props:{editConfig:{type:Object,default:()=>({isEmpty:()=>!1})},componentProperties:{type:Object,default:()=>({})},containerProps:{type:Object}},setup(o){const e=o,n=t.inject("isInEditor",C.AuthoringUtils.isInEditor()),r=t.useSlots(),s=t.useAttrs(),a=t.computed(()=>{const l={},{componentProperties:P}=e,{cqPath:f}=P;return n&&(l["data-cq-data-path"]=f,e.editConfig.resourceType&&(l["data-cq-resource-type"]=e.editConfig.resourceType)),l}),m=t.computed(()=>{var i;const l={},{componentProperties:P}=e,{appliedCssClassNames:f,cqType:d}=P,p=[];return f&&p.push(f),(i=e==null?void 0:e.containerProps)!=null&&i.class&&p.push(e.containerProps.class),d&&(d!=null&&d.endsWith("/container"))&&p.push("aem-editable"),p.length&&(l.class=p.join(" ")),l}),c=t.computed(()=>n&&typeof e.editConfig.isEmpty=="function"&&e.editConfig.isEmpty(e.componentProperties)?{class:"cq-placeholder","data-emptytext":e.editConfig.emptyLabel}:null);return(l,P)=>{var f,d,p,i;return!t.unref(n)&&e.componentProperties.hasOwnProperty("aemNoDecoration")&&e.componentProperties.aemNoDecoration||e.componentProperties.hasOwnProperty("cqHierarchyType")&&e.componentProperties.cqHierarchyType==="page"?(t.openBlock(),t.createBlock(t.resolveDynamicComponent((d=(f=t.unref(r)).default)==null?void 0:d.call(f)[0]),t.normalizeProps(t.mergeProps({key:0},{...t.unref(s),containerProps:e.containerProps})),null,16)):(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.mergeProps({key:1},{...a.value,...m.value})),[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((i=(p=t.unref(r)).default)==null?void 0:i.call(p)[0]),t.normalizeProps(t.guardReactiveProps({...t.unref(s),componentProperties:e.componentProperties})),null,16)),c.value?(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.mergeProps({key:0},c.value)),null,16)):t.createCommentVNode("",!0)],16))}}}),j=t.defineComponent({inheritAttrs:!1,__name:"CompositeEditableProvider",props:{editConfig:{type:Object,default:()=>({isEmpty:()=>!1})}},setup(o){const e=o,n=t.useSlots(),r=t.useAttrs();return(s,a)=>(t.openBlock(),t.createBlock(B,t.normalizeProps(t.guardReactiveProps({...t.unref(r),componentProperties:{...t.unref(r)},editConfig:e.editConfig})),{default:t.withCtx(()=>{var m,c;return[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((c=(m=t.unref(n)).default)==null?void 0:c.call(m)[0])))]}),_:1},16))}}),A=t.defineComponent({inheritAttrs:!1,__name:"ModelProvider",props:{cqPath:{type:String},cqForceReload:{type:Boolean,default:!1},injectPropsOnInit:{type:Boolean,default:!1},modelProperties:{type:Object,default:()=>({})},pagePath:{type:String},itemPath:{type:String}},emits:["updateModel"],setup(o,{emit:e}){const n=o,r=t.useSlots(),s=t.useAttrs(),a=t.inject("isInEditor",C.AuthoringUtils.isInEditor()),m=e,c=t.computed(()=>{const{pagePath:f,itemPath:d,injectPropsOnInit:p,cqPath:i}=n;return q.getCQPath({pagePath:f,itemPath:d,injectPropsOnInit:p,cqPath:i})}),l=f=>{const{pagePath:d,itemPath:p,injectPropsOnInit:i}=n,u=f||n.cqPath||d&&q.getCQPath({pagePath:d,itemPath:p,injectPropsOnInit:i});u&&C.ModelManager.getData({path:u,forceReload:n.cqForceReload}).then(g=>{g&&Object.keys(g).length>0&&(m("updateModel",{...s,...q.modelToProps(g),cqPath:c.value}),i&&a&&C.PathUtils.dispatchGlobalCustomEvent("cq-async-content-loaded",{}))}).catch(g=>{console.error(g)})},P=l.bind(null,c.value);return t.onMounted(()=>{const f=c.value;n.injectPropsOnInit&&l(f),C.ModelManager.addListener(f,P)}),t.onUnmounted(()=>{C.ModelManager.removeListener(n.cqPath,P)}),(f,d)=>{var p,i;return t.openBlock(),t.createBlock(t.resolveDynamicComponent((i=(p=t.unref(r)).default)==null?void 0:i.call(p)[0]),t.normalizeProps(t.guardReactiveProps(o.modelProperties)),null,16)}}}),O=t.defineComponent({inheritAttrs:!1,__name:"CompositeModelProvider",props:{modelConfig:{type:Object,default:()=>({injectPropsOnInit:!1,forceReload:!1})}},setup(o){const e=o,n=t.useSlots(),r=t.useAttrs(),s=t.ref(r),{modelConfig:a}=t.toRefs(e),m=r.cqForceReload||a.value.forceReload,{injectPropsOnInit:c}=a.value,l=P=>{s.value=P};return(P,f)=>(t.openBlock(),t.createBlock(A,t.mergeProps({"cq-force-reload":t.unref(m),"inject-props-on-init":t.unref(c),"model-properties":{...t.unref(r)}},s.value,{onUpdateModel:l}),{default:t.withCtx(()=>{var d,p;return[(t.openBlock(),t.createBlock(t.resolveDynamicComponent((p=(d=t.unref(n)).default)==null?void 0:p.call(d)[0])))]}),_:1},16,["cq-force-reload","inject-props-on-init","model-properties"]))}}),w=t.defineComponent({inheritAttrs:!1,__name:"ContextProvider",setup(o){const e=t.useSlots(),n=t.useAttrs(),r=t.inject("componentMapping",new _.ComponentMapping),s=t.inject("isInEditor",C.AuthoringUtils.isInEditor());return t.provide("isInEditor",s),t.provide("componentMapping",r),(a,m)=>{var c,l;return t.openBlock(),t.createBlock(t.resolveDynamicComponent((l=(c=t.unref(e)).default)==null?void 0:l.call(c)[0]),t.normalizeProps(t.guardReactiveProps({...t.unref(n)})),null,16)}}}),N=o=>t.h(w,{},()=>[t.h(o)]),D=(o,e)=>t.h(O,{modelConfig:e},()=>[t.h(o)]),S=(o,e)=>t.h(j,{editConfig:e},()=>[t.h(o)]),x=(o,e,n)=>{const{injectPropsOnInit:r=!0,forceReload:s=!1,...a}=n||{},m={injectPropsOnInit:r,forceReload:s,...a};let c=o;return c=N(D(S(c,e),m)),c},G=_.ComponentMapping.map,V=_.ComponentMapping.get;_.ComponentMapping.map=function(e,n,r={isEmpty:()=>!1},s={}){const{injectPropsOnInit:a=!1,...m}=s||{},c=x(n,r,{injectPropsOnInit:a,...m});return G.call(_.ComponentMapping,e,c),c},_.ComponentMapping.get=V;const Q=o=>(e,n,r={})=>_.ComponentMapping.map(o,e,n,r),W=(o,e,n,r,s,a)=>{let m=[];o&&(m=[o]),e&&m.push(e),n&&m.push(...n.split(" "));const c=r==null?void 0:r.class;return a&&c&&!s&&m.push(c),m},H=o=>({aemNoDecoration:{type:Boolean,default:!1},appliedCssClassNames:{type:String},baseCssClass:{type:String,default:o},containerProps:{type:Object,default:()=>{}},cssClassNames:{type:String},id:{type:String}}),J=["data-cq-data-path","data-emptytext"],$=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentPlaceholder",props:{emptyLabel:{type:String},path:{type:String}},setup(o){const e=o;return(n,r)=>(t.openBlock(),t.createElementBlock("div",{"data-cq-data-path":e.path,"data-emptytext":e.emptyLabel,class:"aem-AllowedComponent--component cq-placeholder placeholder"},null,8,J))}}),X=["data-text"],L=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentPlaceholderList",props:{emptyLabel:{type:String},components:{type:Array},placeholderProps:{type:Object},title:{type:String},cqPath:{type:String}},setup(o){const e=o,n=t.computed(()=>e.components&&e.components.length>0?e.title:e.emptyLabel);return(r,s)=>{var a;return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["aem-AllowedComponent--list",(a=e.placeholderProps)==null?void 0:a.placeholderClassNames])},[t.createElementVNode("div",{"data-text":n.value,class:"aem-AllowedComponent--title"},null,8,X),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.components,m=>(t.openBlock(),t.createBlock($,{key:m.path,"empty-label":m.title,path:m.path},null,8,["empty-label","path"]))),128))],2)}}}),Y=["data-cq-data-path"],T=t.defineComponent({__name:"ContainerPlaceholder",props:{cqPath:{type:String,default:""},placeholderClassNames:{type:String}},setup(o){const e=o;return(n,r)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(e.placeholderClassNames),"data-cq-data-path":`${e.cqPath}/*`},null,10,Y))}}),R=t.defineComponent({name:"Container",inheritAttrs:!1,__name:"Container",props:{aemNoDecoration:{type:Boolean,default:!1},appliedCssClassNames:{type:String},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},getContainerProps:{type:Function},getItemComponentProps:{type:Function},getPlaceholderProps:{type:Function},isInEditor:{type:Boolean,default:void 0}},setup(o){const e=o,n=t.inject("isInEditor",C.AuthoringUtils.isInEditor()),r=typeof e.isInEditor<"u"?e.isInEditor:n,s=t.inject("componentMapping",new _.ComponentMapping),a=t.computed(()=>{let l={};return typeof e.getContainerProps=="function"?l=e.getContainerProps():(l={class:"aem-container"},r&&(l["data-cq-data-path"]=e.cqPath)),l}),m=t.computed(()=>q.getChildComponents(e.cqPath,e.cqItems,e.cqItemsOrder,e.aemNoDecoration,typeof e.getItemComponentProps=="function"?e.getItemComponentProps:()=>({}),!1,s)),c=t.computed(()=>typeof e.getPlaceholderProps=="function"?e.getPlaceholderProps():{cqPath:e.cqPath,placeholderClassNames:"new section"});return(l,P)=>(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.guardReactiveProps({...a.value})),[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(m.value,f=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(f),{key:f.toString()}))),128)),t.unref(n)?(t.openBlock(),t.createBlock(T,t.normalizeProps(t.mergeProps({key:0},c.value)),null,16)):t.createCommentVNode("",!0)],16))}}),z=t.defineComponent({inheritAttrs:!1,__name:"AllowedComponentsContainer",props:{_allowedComponentPlaceholderListEmptyLabel:{type:String,default:"No allowed components"},aemNoDecoration:{type:Boolean,default:!1},allowedComponents:{type:Object},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},getContainerProps:{type:Function},getItemComponentProps:{type:Function},getPlaceholderProps:{type:Function},isInEditor:{type:Boolean,default:void 0},title:{type:String}},setup(o){const e=o,n=typeof e.isInEditor<"u"?e.isInEditor:t.inject("isInEditor",C.AuthoringUtils.isInEditor()),r=t.computed(()=>typeof e.getPlaceholderProps=="function"?e.getPlaceholderProps():{cqPath:e.cqPath,placeholderClassNames:"new section"}),s=t.useAttrs();return(a,m)=>{var c;return t.unref(n)&&e.allowedComponents&&((c=e.allowedComponents)!=null&&c.applicable)?(t.openBlock(),t.createBlock(L,{key:0,components:e.allowedComponents.components,"cq-path":e.cqPath,"empty-label":e._allowedComponentPlaceholderListEmptyLabel,"placeholder-props":r.value,title:e.title},null,8,["components","cq-path","empty-label","placeholder-props","title"])):(t.openBlock(),t.createBlock(R,t.mergeProps({key:1,"aem-no-decoration":e.aemNoDecoration,"cq-items":e.cqItems,"cq-items-order":e.cqItemsOrder,"cq-path":e.cqPath,"get-container-props":e.getContainerProps,"get-item-component-props":e.getItemComponentProps,"get-placeholder-props":e.getPlaceholderProps,"is-in-editor":t.unref(n)},{...t.unref(s)}),null,16,["aem-no-decoration","cq-items","cq-items-order","cq-path","get-container-props","get-item-component-props","get-placeholder-props","is-in-editor"]))}}}),Z=t.defineComponent({name:"Page",inheritAttrs:!1,__name:"Page",props:{aemNoDecoration:{type:Boolean,default:!1},cqChildren:{type:Object,default:()=>({})},cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""}},setup(o){const e=t.useAttrs(),n=t.inject("isInEditor",C.AuthoringUtils.isInEditor()),r=t.inject("componentMapping",new _.ComponentMapping),s=o,a=t.computed(()=>q.getChildComponents(s.cqPath,s.cqItems,s.cqItemsOrder,s.aemNoDecoration,()=>({}),!0,r)),m=t.computed(()=>q.getChildPages(s.cqChildren,r)),c=t.computed(()=>{const l=["aem-page"];e.cssClassNames&&l.push(...e.cssClassNames.split(" "));const P={class:l.join(" ")};return n&&(P["data-cq-data-path"]=s.cqPath),P});return t.onMounted(()=>{e.title&&(document.title=e.title)}),t.onUpdated(()=>{e.title&&(document.title=e.title)}),(l,P)=>(t.openBlock(),t.createElementBlock("div",t.normalizeProps(t.guardReactiveProps(c.value)),[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(a.value,f=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(f),{key:f.toString()}))),128)),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(m.value,f=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(f),{key:f.toString()}))),128))],16))}}),K=t.defineComponent({inheritAttrs:!1,__name:"ResponsiveGrid",props:{aemNoDecoration:{type:Boolean,default:!1},cqPath:{type:String,default:""},gridClassNames:{type:String},columnClassNames:{type:Object},isInEditor:{type:Boolean,default:void 0},title:{type:String,default:"Layout Container"}},setup(o){const e=o,n=t.useAttrs(),r=typeof e.isInEditor<"u"?e.isInEditor:t.inject("isInEditor",C.AuthoringUtils.isInEditor()),s=()=>{const c={},l=["aem-container"];return e.gridClassNames&&l.push(e.gridClassNames),c.class=l.join(" "),r&&(c["data-cq-data-path"]=e.cqPath),c},a=()=>{const c={cqPath:e.cqPath},l=["new","section","aem-Grid-newComponent"];return c.placeholderClassNames=l.join(" "),c},m=c=>{const l={};return e.columnClassNames&&e.columnClassNames[c]&&(l.class=e.columnClassNames[c]),l};return(c,l)=>(t.openBlock(),t.createBlock(z,t.mergeProps({"aem-no-decoration":e.aemNoDecoration,"cq-path":e.cqPath,"get-container-props":s,"get-item-component-props":m,"get-placeholder-props":a,"is-in-editor":t.unref(r),title:e.title},{...t.unref(n)}),null,16,["aem-no-decoration","cq-path","is-in-editor","title"]))}});Object.defineProperty(h,"ComponentMapping",{enumerable:!0,get:()=>_.ComponentMapping}),h.AllowedComponentPlaceholder=$,h.AllowedComponentPlaceholderList=L,h.AllowedComponentsContainer=z,h.CompositeEditableProvider=j,h.CompositeModelProvider=O,h.Container=R,h.ContainerPlaceholder=T,h.ContextProvider=w,h.EditableProvider=B,h.MapTo=Q,h.ModelProvider=A,h.Page=Z,h.ResponsiveGrid=K,h.Utils=q,h.componentClassNames=W,h.componentProperties=H,h.withContext=N,h.withEditable=S,h.withModel=D,Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});
