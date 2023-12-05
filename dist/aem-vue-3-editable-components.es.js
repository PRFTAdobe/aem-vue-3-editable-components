import { h as N, defineComponent as y, inject as v, useSlots as k, useAttrs as S, computed as C, unref as h, openBlock as u, createBlock as P, resolveDynamicComponent as I, normalizeProps as q, mergeProps as w, createElementBlock as _, guardReactiveProps as D, createCommentVNode as z, withCtx as U, toRefs as Q, provide as R, normalizeClass as G, createElementVNode as W, Fragment as M, renderList as x, onMounted as H, onUpdated as V } from "vue";
import { ComponentMapping as b } from "@adobe/aem-spa-component-mapping";
import { ComponentMapping as At } from "@adobe/aem-spa-component-mapping";
import { AuthoringUtils as A, ModelManager as F, PathUtils as J } from "@adobe/aem-spa-page-model-manager";
function X(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var B = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  function o(m) {
    "@babel/helpers - typeof";
    return o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(d) {
      return typeof d;
    } : function(d) {
      return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
    }, o(m);
  }
  var n = 47, r = 46, i = function(d) {
    var l = o(d);
    if (l !== "string")
      throw new TypeError("Expected a string, got a ".concat(l));
  }, a = function(d, l) {
    for (var p = "", E = 0, O = -1, j = 0, L, g = 0; g <= d.length; ++g) {
      if (g < d.length)
        L = d.charCodeAt(g);
      else {
        if (L === n)
          break;
        L = n;
      }
      if (L === n) {
        if (!(O === g - 1 || j === 1))
          if (O !== g - 1 && j === 2) {
            if (p.length < 2 || E !== 2 || p.charCodeAt(p.length - 1) !== r || p.charCodeAt(p.length - 2) !== r) {
              if (p.length > 2) {
                var T = p.lastIndexOf("/");
                if (T !== p.length - 1) {
                  T === -1 ? (p = "", E = 0) : (p = p.slice(0, T), E = p.length - 1 - p.lastIndexOf("/")), O = g, j = 0;
                  continue;
                }
              } else if (p.length === 2 || p.length === 1) {
                p = "", E = 0, O = g, j = 0;
                continue;
              }
            }
            l && (p.length > 0 ? p += "/.." : p = "..", E = 2);
          } else
            p.length > 0 ? p += "/" + d.slice(O + 1, g) : p = d.slice(O + 1, g), E = g - O - 1;
        O = g, j = 0;
      } else
        L === r && j !== -1 ? ++j : j = -1;
    }
    return p;
  }, s = function(d) {
    try {
      return decodeURIComponent(d);
    } catch {
      return d;
    }
  }, c = function(d) {
    i(d);
    var l = d;
    if (l.length === 0)
      return ".";
    var p = l.charCodeAt(0) === n, E = l.charCodeAt(l.length - 1) === n;
    return l = s(l), l = a(l, !p), l.length === 0 && !p && (l = "."), l.length > 0 && E && (l += "/"), p ? "/" + l : l;
  }, f = c;
  t.default = f, e.exports = t.default;
})(B, B.exports);
var Y = B.exports;
const Z = /* @__PURE__ */ X(Y), $ = {
  getItemPath(e, t, o) {
    let n = (t == null ? void 0 : t.length) > 0 ? `${t}/${e}` : e;
    return o && (n = (t == null ? void 0 : t.length) > 0 ? `${t}/jcr:content/${e}` : e), n;
  },
  connectComponentWithItem(e, t, o, n, r, i) {
    const a = this.getItemPath(o, n, i);
    return N(e, {
      ...t,
      cqPath: a,
      containerProps: r(o)
    });
  },
  getChildComponents(e, t, o, n, r, i, a) {
    const s = [];
    return Object.keys(t).length > 0 && o.length > 0 && o.forEach((c) => {
      const f = this.modelToProps(
        t[c]
      );
      if (f && typeof f.cqType < "u") {
        const m = a.get(f.cqType);
        n && (f.aemNoDecoration = n), m && s.push(
          this.connectComponentWithItem(
            m,
            f,
            c,
            e,
            r,
            i
          )
        );
      }
    }), s;
  },
  getChildPages(e, t) {
    const o = [];
    return Object.keys(e).length === 0 || Object.keys(e).forEach((n) => {
      const r = this.modelToProps(
        e[n]
      );
      if (r && typeof r.cqType < "u") {
        const i = t.get(r.cqType);
        i && o.push(
          N(i, { ...r, cqPath: r.cqPath })
        );
      }
    }), o;
  },
  getCQPath(e) {
    const { pagePath: t = "", itemPath: o = "", injectPropsOnInit: n } = e;
    let { cqPath: r = "" } = e;
    return n && !r && (r = Z(
      o ? `${t}/jcr:content/${o}` : t
    ), r = r.replace(/^\.$/, "")), r;
  },
  modelToProps(e) {
    const t = Object.getOwnPropertyNames(e), o = {}, n = (r) => {
      const i = r.substring(1);
      return `cq${i.substring(0, 1).toUpperCase()}${i.substring(
        1
      )}`;
    };
    return t.forEach((r) => {
      let i = r;
      i.startsWith(":") && (i = n(i)), o[i] = e[r];
    }), o;
  }
}, K = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "EditableProvider",
  props: {
    editConfig: {
      type: Object,
      default: () => ({
        isEmpty: () => !1
      })
    },
    componentProperties: {
      type: Object,
      default: () => ({})
    },
    // eslint-disable-next-line vue/require-default-prop
    containerProps: {
      type: Object
    }
  },
  setup(e) {
    const t = e, o = v("isInEditor", A.isInEditor()), n = k(), r = S(), i = C(() => {
      const c = {}, { componentProperties: f } = t;
      return o && (c["data-cq-data-path"] = f.cqPath, t.editConfig.resourceType && (c["data-cq-resource-type"] = t.editConfig.resourceType)), c;
    }), a = C(() => {
      var p;
      const c = {}, { componentProperties: f } = t, { appliedCssClassNames: m, cqType: d } = f, l = [];
      return m && l.push(m), (p = t == null ? void 0 : t.containerProps) != null && p.class && l.push(t.containerProps.class), d && (d != null && d.endsWith("/container")) && l.push("aem-editable"), l.length && (c.class = l.join(" ")), c;
    }), s = C(() => o && typeof t.editConfig.isEmpty == "function" && t.editConfig.isEmpty(t.componentProperties) ? {
      class: "cq-placeholder",
      "data-emptytext": t.editConfig.emptyLabel
    } : null);
    return (c, f) => {
      var m, d, l, p;
      return !h(o) && t.componentProperties.hasOwnProperty("aemNoDecoration") && t.componentProperties.aemNoDecoration || t.componentProperties.hasOwnProperty("cqHierarchyType") && t.componentProperties.cqHierarchyType === "page" ? (u(), P(I((d = (m = h(n)).default) == null ? void 0 : d.call(m)[0]), q(w({ key: 0 }, { ...h(r), containerProps: t.containerProps })), null, 16)) : (u(), _("div", q(w({ key: 1 }, { ...i.value, ...a.value })), [
        (u(), P(I((p = (l = h(n)).default) == null ? void 0 : p.call(l)[0]), q(D({
          ...h(r),
          componentProperties: t.componentProperties
        })), null, 16)),
        s.value ? (u(), _("div", q(w({ key: 0 }, s.value)), null, 16)) : z("", !0)
      ], 16));
    };
  }
}), tt = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "CompositeEditableProvider",
  props: {
    editConfig: {
      type: Object,
      default: () => ({
        isEmpty: () => !1
      })
    }
  },
  setup(e) {
    const t = e, o = k(), n = S();
    return (r, i) => (u(), P(K, q(D({
      ...h(n),
      componentProperties: { ...h(n) },
      editConfig: t.editConfig
    })), {
      default: U(() => {
        var a, s;
        return [
          (u(), P(I((s = (a = h(o)).default) == null ? void 0 : s.call(a)[0])))
        ];
      }),
      _: 1
    }, 16));
  }
}), et = y({
  name: "ModelProvider",
  inheritAttrs: !1,
  props: {
    cqForceReload: {
      type: Boolean,
      default: !1
    },
    cqPath: {
      type: String,
      default: ""
    },
    injectPropsOnInit: {
      type: Boolean,
      default: !1
    },
    itemPath: {
      type: String,
      default: ""
    },
    pagePath: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      updatedProps: {},
      updateDataListener: () => {
      }
    };
  },
  computed: {
    updatedCqPath() {
      const {
        pagePath: e,
        itemPath: t,
        injectPropsOnInit: o,
        cqPath: n
      } = this.$props;
      return $.getCQPath({
        pagePath: e,
        itemPath: t,
        injectPropsOnInit: o,
        cqPath: n
      });
    }
  },
  mounted() {
    this.updateDataListener = this.updateData.bind(this);
    const e = this.updatedCqPath;
    this.injectPropsOnInit && this.updateData(e), F.addListener(
      e,
      this.updateDataListener
    );
  },
  unmounted() {
    const e = this.updatedCqPath;
    F.removeListener(
      e,
      this.updateDataListener
    );
  },
  methods: {
    updateData(e) {
      const t = v("isInEditor", A.isInEditor()), { pagePath: o, itemPath: n, injectPropsOnInit: r } = this.$props, i = e || this.$props.cqPath || o && $.getCQPath({ pagePath: o, itemPath: n, injectPropsOnInit: r });
      i && F.getData({ path: i, forceReload: this.cqForceReload }).then((a) => {
        a && Object.keys(a).length > 0 && (Object.assign(this.updatedProps, $.modelToProps(a)), r && t && J.dispatchGlobalCustomEvent(
          "cq-async-content-loaded",
          {}
        ));
      }).catch((a) => {
        console.error(a);
      });
    }
  }
}), ot = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, r] of t)
    o[n] = r;
  return o;
};
function nt(e, t, o, n, r, i) {
  var a, s;
  return u(), P(I((s = (a = e.$slots).default) == null ? void 0 : s.call(a)[0]), q(D({
    ...e.$attrs,
    pagePath: e.pagePath,
    itemPath: e.itemPath,
    cqPath: e.updatedCqPath,
    ...e.updatedProps
  })), null, 16);
}
const rt = /* @__PURE__ */ ot(et, [["render", nt]]), st = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "CompositeModelProvider",
  props: {
    modelConfig: {
      type: Object,
      default: () => ({ injectPropsOnInit: !1, forceReload: !1 })
    }
  },
  setup(e) {
    const t = e, o = k(), n = S(), { modelConfig: r } = Q(t), i = n.cqForceReload || r.value.forceReload, { injectPropsOnInit: a } = r.value;
    return (s, c) => (u(), P(rt, w({
      "cq-force-reload": h(i),
      "inject-props-on-init": h(a)
    }, { ...h(n) }), {
      default: U(() => {
        var f, m;
        return [
          (u(), P(I((m = (f = h(o)).default) == null ? void 0 : m.call(f)[0])))
        ];
      }),
      _: 1
    }, 16, ["cq-force-reload", "inject-props-on-init"]));
  }
}), at = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "ContextProvider",
  setup(e) {
    const t = k(), o = S(), n = v("componentMapping", new b()), r = v("isInEditor", A.isInEditor());
    return R("isInEditor", r), R("componentMapping", n), (i, a) => {
      var s, c;
      return u(), P(I((c = (s = h(t)).default) == null ? void 0 : c.call(s)[0]), q(D({ ...h(o) })), null, 16);
    };
  }
}), it = (e) => N(at, {}, () => [N(e)]), pt = (e, t) => N(st, { modelConfig: t }, () => [N(e)]), ct = (e, t) => N(tt, { editConfig: t }, () => [N(e)]), lt = (e, t, o) => {
  const {
    injectPropsOnInit: n = !0,
    forceReload: r = !1,
    ...i
  } = o || {}, a = {
    injectPropsOnInit: n,
    forceReload: r,
    ...i
  };
  let s = e;
  return s = it(
    pt(ct(s, t), a)
  ), s;
}, dt = b.map, ut = b.get;
b.map = function(t, o, n = {
  isEmpty: () => !1
}, r = {}) {
  const { injectPropsOnInit: i = !1, ...a } = r || {}, s = lt(o, n, {
    injectPropsOnInit: i,
    ...a
  });
  return dt.call(b, t, s), s;
};
b.get = ut;
const bt = (e) => (t, o, n = {}) => (
  // @ts-ignore
  b.map(e, t, o, n)
), Et = (e, t, o, n, r, i) => {
  let a = [];
  e && (a = [e]), t && a.push(t), o && a.push(...o.split(" "));
  const s = n == null ? void 0 : n.class;
  return i && s && !r && a.push(s), a;
}, Ot = (e) => ({
  aemNoDecoration: {
    type: Boolean,
    default: !1
  },
  appliedCssClassNames: {
    type: String
  },
  baseCssClass: {
    type: String,
    default: e
  },
  containerProps: {
    type: Object,
    default: () => {
    }
  },
  cssClassNames: {
    type: String
  },
  // eslint-disable-next-line vue/require-default-prop
  id: {
    type: String
  }
}), mt = ["data-cq-data-path", "data-emptytext"], ft = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "AllowedComponentPlaceholder",
  props: {
    // eslint-disable-next-line vue/require-default-prop
    emptyLabel: {
      type: String
    },
    // eslint-disable-next-line vue/require-default-prop
    path: {
      type: String
    }
  },
  setup(e) {
    const t = e;
    return (o, n) => (u(), _("div", {
      "data-cq-data-path": t.path,
      "data-emptytext": t.emptyLabel,
      class: "aem-AllowedComponent--component cq-placeholder placeholder"
    }, null, 8, mt));
  }
}), ht = ["data-text"], Pt = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "AllowedComponentPlaceholderList",
  props: {
    // eslint-disable-next-line vue/require-default-prop
    emptyLabel: {
      type: String
    },
    // eslint-disable-next-line vue/require-default-prop
    components: {
      type: Array
    },
    // eslint-disable-next-line vue/require-default-prop
    placeholderProps: {
      type: Object
    },
    // eslint-disable-next-line vue/require-default-prop
    title: {
      type: String
    },
    // eslint-disable-next-line vue/require-default-prop
    cqPath: {
      type: String
    }
  },
  setup(e) {
    const t = e, o = C(
      () => t.components && t.components.length > 0 ? t.title : t.emptyLabel
    );
    return (n, r) => {
      var i;
      return u(), _("div", {
        class: G([
          "aem-AllowedComponent--list",
          (i = t.placeholderProps) == null ? void 0 : i.placeholderClassNames
        ])
      }, [
        W("div", {
          "data-text": o.value,
          class: "aem-AllowedComponent--title"
        }, null, 8, ht),
        (u(!0), _(M, null, x(t.components, (a) => (u(), P(ft, {
          key: a.path,
          "empty-label": a.title,
          path: a.path
        }, null, 8, ["empty-label", "path"]))), 128))
      ], 2);
    };
  }
}), gt = ["data-cq-data-path"], yt = /* @__PURE__ */ y({
  __name: "ContainerPlaceholder",
  props: {
    cqPath: {
      type: String,
      default: ""
    },
    // eslint-disable-next-line vue/require-default-prop
    placeholderClassNames: {
      type: String
    }
  },
  setup(e) {
    const t = e;
    return (o, n) => (u(), _("div", {
      class: G(t.placeholderClassNames),
      "data-cq-data-path": `${t.cqPath}/*`
    }, null, 10, gt));
  }
}), Ct = /* @__PURE__ */ y({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Container",
  inheritAttrs: !1,
  __name: "Container",
  props: {
    aemNoDecoration: {
      type: Boolean,
      default: !1
    },
    // eslint-disable-next-line vue/require-default-prop
    appliedCssClassNames: {
      type: String
    },
    cqItems: {
      type: Object,
      default: () => ({})
    },
    cqItemsOrder: {
      type: Array,
      default: () => []
    },
    cqPath: {
      type: String,
      default: ""
    },
    // eslint-disable-next-line vue/require-default-prop
    getContainerProps: {
      type: Function
    },
    // eslint-disable-next-line vue/require-default-prop
    getItemComponentProps: {
      type: Function
    },
    // eslint-disable-next-line vue/require-default-prop
    getPlaceholderProps: {
      type: Function
    },
    isInEditor: {
      type: Boolean,
      default: void 0
    }
  },
  setup(e) {
    const t = e, o = typeof t.isInEditor < "u" ? t.isInEditor : v("isInEditor", A.isInEditor()), n = v("componentMapping", new b()), r = C(() => {
      let s = {};
      return typeof t.getContainerProps == "function" ? s = t.getContainerProps() : (s = {
        class: "aem-container"
      }, o && (s["data-cq-data-path"] = t.cqPath)), s;
    }), i = C(
      () => $.getChildComponents(
        t.cqPath,
        t.cqItems,
        t.cqItemsOrder,
        t.aemNoDecoration,
        typeof t.getItemComponentProps == "function" ? t.getItemComponentProps : () => ({}),
        !1,
        n
      )
    ), a = C(() => typeof t.getPlaceholderProps == "function" ? t.getPlaceholderProps() : {
      cqPath: t.cqPath,
      placeholderClassNames: "new section"
    });
    return (s, c) => (u(), _("div", q(D({ ...r.value })), [
      (u(!0), _(M, null, x(i.value, (f) => (u(), P(I(f), {
        key: f.toString()
      }))), 128)),
      h(o) ? (u(), P(yt, q(w({ key: 0 }, a.value)), null, 16)) : z("", !0)
    ], 16));
  }
}), _t = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "AllowedComponentsContainer",
  props: {
    // eslint-disable-next-line vue/prop-name-casing
    _allowedComponentPlaceholderListEmptyLabel: {
      type: String,
      default: "No allowed components"
    },
    aemNoDecoration: {
      type: Boolean,
      default: !1
    },
    // eslint-disable-next-line vue/require-default-prop
    allowedComponents: {
      type: Object
    },
    cqItems: {
      type: Object,
      default: () => ({})
    },
    cqItemsOrder: {
      type: Array,
      default: () => []
    },
    cqPath: {
      type: String,
      default: ""
    },
    // eslint-disable-next-line vue/require-default-prop
    getContainerProps: {
      type: Function
    },
    // eslint-disable-next-line vue/require-default-prop
    getItemComponentProps: {
      type: Function
    },
    // eslint-disable-next-line vue/require-default-prop
    getPlaceholderProps: {
      type: Function
    },
    isInEditor: {
      type: Boolean,
      default: void 0
    },
    // eslint-disable-next-line vue/require-default-prop
    title: {
      type: String
    }
  },
  setup(e) {
    const t = e, o = typeof t.isInEditor < "u" ? t.isInEditor : v("isInEditor", A.isInEditor()), n = C(() => typeof t.getPlaceholderProps == "function" ? t.getPlaceholderProps() : {
      cqPath: t.cqPath,
      placeholderClassNames: "new section"
    }), r = S();
    return (i, a) => {
      var s;
      return h(o) && t.allowedComponents && ((s = t.allowedComponents) != null && s.applicable) ? (u(), P(Pt, {
        key: 0,
        components: t.allowedComponents.components,
        "cq-path": t.cqPath,
        "empty-label": t._allowedComponentPlaceholderListEmptyLabel,
        "placeholder-props": n.value,
        title: t.title
      }, null, 8, ["components", "cq-path", "empty-label", "placeholder-props", "title"])) : (u(), P(Ct, w({
        key: 1,
        "aem-no-decoration": t.aemNoDecoration,
        "cq-items": t.cqItems,
        "cq-items-order": t.cqItemsOrder,
        "cq-path": t.cqPath,
        "get-container-props": t.getContainerProps,
        "get-item-component-props": t.getItemComponentProps,
        "get-placeholder-props": t.getPlaceholderProps,
        "is-in-editor": h(o)
      }, { ...h(r) }), null, 16, ["aem-no-decoration", "cq-items", "cq-items-order", "cq-path", "get-container-props", "get-item-component-props", "get-placeholder-props", "is-in-editor"]));
    };
  }
}), jt = /* @__PURE__ */ y({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Page",
  inheritAttrs: !1,
  __name: "Page",
  props: {
    aemNoDecoration: {
      type: Boolean,
      default: !1
    },
    // eslint-disable-next-line vue/require-default-prop
    cqChildren: {
      type: Object,
      default: () => ({})
    },
    cqItems: {
      type: Object,
      default: () => ({})
    },
    cqItemsOrder: {
      type: Array,
      default: () => []
    },
    cqPath: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = S(), o = v("isInEditor", A.isInEditor()), n = v("componentMapping", new b()), r = e, i = C(
      () => $.getChildComponents(
        r.cqPath,
        r.cqItems,
        r.cqItemsOrder,
        r.aemNoDecoration,
        () => ({}),
        !0,
        n
      )
    ), a = C(
      () => $.getChildPages(r.cqChildren, n)
    ), s = C(() => {
      const c = ["aem-page"];
      t.cssClassNames && c.push(...t.cssClassNames.split(" "));
      const f = {
        class: c.join(" ")
      };
      return o && (f["data-cq-data-path"] = r.cqPath), f;
    });
    return H(() => {
      t.title && (document.title = t.title);
    }), V(() => {
      t.title && (document.title = t.title);
    }), (c, f) => (u(), _("div", q(D(s.value)), [
      (u(!0), _(M, null, x(i.value, (m) => (u(), P(I(m), {
        key: m.toString()
      }))), 128)),
      (u(!0), _(M, null, x(a.value, (m) => (u(), P(I(m), {
        key: m.toString()
      }))), 128))
    ], 16));
  }
}), Nt = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "ResponsiveGrid",
  props: {
    aemNoDecoration: {
      type: Boolean,
      default: !1
    },
    cqPath: {
      type: String,
      default: ""
    },
    // eslint-disable-next-line vue/require-default-prop
    gridClassNames: {
      type: String
    },
    // eslint-disable-next-line vue/require-default-prop
    columnClassNames: {
      type: Object
    },
    isInEditor: {
      type: Boolean,
      default: void 0
    },
    title: {
      type: String,
      default: "Layout Container"
    }
  },
  setup(e) {
    const t = e, o = S(), n = typeof t.isInEditor < "u" ? t.isInEditor : v("isInEditor", A.isInEditor()), r = () => {
      const s = {}, c = ["aem-container"];
      return t.gridClassNames && c.push(t.gridClassNames), s.class = c.join(" "), n && (s["data-cq-data-path"] = t.cqPath), s;
    }, i = () => {
      const s = {
        cqPath: t.cqPath
      }, c = [
        "new",
        "section",
        "aem-Grid-newComponent"
      ];
      return s.placeholderClassNames = c.join(" "), s;
    }, a = (s) => {
      const c = {};
      return t.columnClassNames && t.columnClassNames[s] && (c.class = t.columnClassNames[s]), c;
    };
    return (s, c) => (u(), P(_t, w({
      "aem-no-decoration": t.aemNoDecoration,
      "cq-path": t.cqPath,
      "get-container-props": r,
      "get-item-component-props": a,
      "get-placeholder-props": i,
      "is-in-editor": h(n),
      title: t.title
    }, { ...h(o) }), null, 16, ["aem-no-decoration", "cq-path", "is-in-editor", "title"]));
  }
});
export {
  ft as AllowedComponentPlaceholder,
  Pt as AllowedComponentPlaceholderList,
  _t as AllowedComponentsContainer,
  At as ComponentMapping,
  tt as CompositeEditableProvider,
  st as CompositeModelProvider,
  Ct as Container,
  yt as ContainerPlaceholder,
  at as ContextProvider,
  K as EditableProvider,
  bt as MapTo,
  rt as ModelProvider,
  jt as Page,
  Nt as ResponsiveGrid,
  $ as Utils,
  Et as componentClassNames,
  Ot as componentProperties,
  it as withContext,
  ct as withEditable,
  pt as withModel
};
