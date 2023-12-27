import { h as N, defineComponent as q, inject as v, useSlots as $, useAttrs as S, computed as _, unref as h, openBlock as u, createBlock as P, resolveDynamicComponent as E, normalizeProps as b, mergeProps as w, createElementBlock as I, guardReactiveProps as L, createCommentVNode as U, withCtx as z, onMounted as G, onUnmounted as Q, provide as R, normalizeClass as V, createElementVNode as W, Fragment as k, renderList as D, onUpdated as H } from "vue";
import { ComponentMapping as O } from "@adobe/aem-spa-component-mapping";
import { ComponentMapping as Ne } from "@adobe/aem-spa-component-mapping";
import { AuthoringUtils as A, ModelManager as F, PathUtils as J } from "@adobe/aem-spa-page-model-manager";
function X(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var B = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  function o(m) {
    "@babel/helpers - typeof";
    return o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
      return typeof l;
    } : function(l) {
      return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
    }, o(m);
  }
  var n = 47, r = 46, c = function(l) {
    var d = o(l);
    if (d !== "string")
      throw new TypeError("Expected a string, got a ".concat(d));
  }, p = function(l, d) {
    for (var i = "", y = 0, g = -1, j = 0, M, C = 0; C <= l.length; ++C) {
      if (C < l.length)
        M = l.charCodeAt(C);
      else {
        if (M === n)
          break;
        M = n;
      }
      if (M === n) {
        if (!(g === C - 1 || j === 1))
          if (g !== C - 1 && j === 2) {
            if (i.length < 2 || y !== 2 || i.charCodeAt(i.length - 1) !== r || i.charCodeAt(i.length - 2) !== r) {
              if (i.length > 2) {
                var T = i.lastIndexOf("/");
                if (T !== i.length - 1) {
                  T === -1 ? (i = "", y = 0) : (i = i.slice(0, T), y = i.length - 1 - i.lastIndexOf("/")), g = C, j = 0;
                  continue;
                }
              } else if (i.length === 2 || i.length === 1) {
                i = "", y = 0, g = C, j = 0;
                continue;
              }
            }
            d && (i.length > 0 ? i += "/.." : i = "..", y = 2);
          } else
            i.length > 0 ? i += "/" + l.slice(g + 1, C) : i = l.slice(g + 1, C), y = C - g - 1;
        g = C, j = 0;
      } else
        M === r && j !== -1 ? ++j : j = -1;
    }
    return i;
  }, s = function(l) {
    try {
      return decodeURIComponent(l);
    } catch {
      return l;
    }
  }, a = function(l) {
    c(l);
    var d = l;
    if (d.length === 0)
      return ".";
    var i = d.charCodeAt(0) === n, y = d.charCodeAt(d.length - 1) === n;
    return d = s(d), d = p(d, !i), d.length === 0 && !i && (d = "."), d.length > 0 && y && (d += "/"), i ? "/" + d : d;
  }, f = a;
  e.default = f, t.exports = e.default;
})(B, B.exports);
var Y = B.exports;
const Z = /* @__PURE__ */ X(Y), x = {
  getItemPath(t, e, o) {
    let n = (e == null ? void 0 : e.length) > 0 ? `${e}/${t}` : t;
    return o && (n = (e == null ? void 0 : e.length) > 0 ? `${e}/jcr:content/${t}` : t), n;
  },
  connectComponentWithItem(t, e, o, n, r, c) {
    const p = this.getItemPath(o, n, c);
    return N(t, {
      ...e,
      cqPath: p,
      containerProps: r(o)
    });
  },
  getChildComponents(t, e, o, n, r, c, p) {
    const s = [];
    return Object.keys(e).length > 0 && o.length > 0 && o.forEach((a) => {
      const f = this.modelToProps(
        e[a]
      );
      if (f && typeof f.cqType < "u") {
        const m = p.get(f.cqType);
        n && (f.aemNoDecoration = n), m && s.push(
          this.connectComponentWithItem(
            m,
            f,
            a,
            t,
            r,
            c
          )
        );
      }
    }), s;
  },
  getChildPages(t, e) {
    const o = [];
    return Object.keys(t).length === 0 || Object.keys(t).forEach((n) => {
      const r = this.modelToProps(
        t[n]
      );
      if (r && typeof r.cqType < "u") {
        const c = e.get(r.cqType);
        c && o.push(
          N(c, { ...r, cqPath: r.cqPath })
        );
      }
    }), o;
  },
  getCQPath(t) {
    const { pagePath: e = "", itemPath: o = "", injectPropsOnInit: n } = t;
    let { cqPath: r = "" } = t;
    return n && !r && (r = Z(
      o ? `${e}/jcr:content/${o}` : e
    ), r = r.replace(/^\.$/, "")), r;
  },
  modelToProps(t) {
    const e = Object.getOwnPropertyNames(t), o = {}, n = (r) => {
      const c = r.substring(1);
      return `cq${c.substring(0, 1).toUpperCase()}${c.substring(
        1
      )}`;
    };
    return e.forEach((r) => {
      let c = r;
      c.startsWith(":") && (c = n(c)), o[c] = t[r];
    }), o;
  }
}, K = /* @__PURE__ */ q({
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
  setup(t) {
    const e = t, o = v("isInEditor", A.isInEditor()), n = $(), r = S(), c = _(() => {
      const a = {}, { componentProperties: f } = e, { cqPath: m } = f;
      return o && (a["data-cq-data-path"] = m, e.editConfig.resourceType && (a["data-cq-resource-type"] = e.editConfig.resourceType)), a;
    }), p = _(() => {
      var i;
      const a = {}, { componentProperties: f } = e, { appliedCssClassNames: m, cqType: l } = f, d = [];
      return m && d.push(m), (i = e == null ? void 0 : e.containerProps) != null && i.class && d.push(e.containerProps.class), l && (l != null && l.endsWith("/container")) && d.push("aem-editable"), d.length && (a.class = d.join(" ")), a;
    }), s = _(() => o && typeof e.editConfig.isEmpty == "function" && e.editConfig.isEmpty(e.componentProperties) ? {
      class: "cq-placeholder",
      "data-emptytext": e.editConfig.emptyLabel
    } : null);
    return (a, f) => {
      var m, l, d, i;
      return !h(o) && e.componentProperties.hasOwnProperty("aemNoDecoration") && e.componentProperties.aemNoDecoration || e.componentProperties.hasOwnProperty("cqHierarchyType") && e.componentProperties.cqHierarchyType === "page" ? (u(), P(E((l = (m = h(n)).default) == null ? void 0 : l.call(m)[0]), b(w({ key: 0 }, { ...h(r), containerProps: e.containerProps })), null, 16)) : (u(), I("div", b(w({ key: 1 }, { ...c.value, ...p.value })), [
        (u(), P(E((i = (d = h(n)).default) == null ? void 0 : i.call(d)[0]), b(L({
          ...h(r),
          componentProperties: e.componentProperties
        })), null, 16)),
        s.value ? (u(), I("div", b(w({ key: 0 }, s.value)), null, 16)) : U("", !0)
      ], 16));
    };
  }
}), ee = /* @__PURE__ */ q({
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
  setup(t) {
    const e = t, o = $(), n = S();
    return (r, c) => (u(), P(K, b(L({
      ...h(n),
      componentProperties: { ...h(n) },
      editConfig: e.editConfig
    })), {
      default: z(() => {
        var p, s;
        return [
          (u(), P(E((s = (p = h(o)).default) == null ? void 0 : s.call(p)[0])))
        ];
      }),
      _: 1
    }, 16));
  }
}), te = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "ModelProvider",
  props: {
    // eslint-disable-next-line vue/require-default-prop
    cqPath: {
      type: String
    },
    cqForceReload: {
      type: Boolean,
      default: !1
    },
    injectPropsOnInit: {
      type: Boolean,
      default: !1
    },
    modelProperties: {
      type: Object,
      default: () => ({})
    },
    // eslint-disable-next-line vue/require-default-prop
    pagePath: {
      type: String
    },
    // eslint-disable-next-line vue/require-default-prop
    itemPath: {
      type: String
    }
  },
  emits: ["update:modelProperties"],
  setup(t, { emit: e }) {
    const o = t, n = $(), r = v("isInEditor", A.isInEditor()), c = e, p = _({
      get() {
        return o.modelProperties;
      },
      set(m) {
        c("update:modelProperties", m);
      }
    }), s = () => {
      const { pagePath: m, itemPath: l, injectPropsOnInit: d, cqPath: i } = o;
      return x.getCQPath({
        pagePath: m,
        itemPath: l,
        injectPropsOnInit: d,
        cqPath: i
      });
    }, a = (m) => {
      const { pagePath: l, itemPath: d, injectPropsOnInit: i } = o, y = m || o.cqPath || l && x.getCQPath({ pagePath: l, itemPath: d, injectPropsOnInit: i });
      y && F.getData({
        path: y,
        forceReload: o.cqForceReload
      }).then((g) => {
        g && Object.keys(g).length > 0 && (p.value = {
          ...o.modelProperties,
          ...x.modelToProps(g),
          cqPath: s()
        }, i && r && J.dispatchGlobalCustomEvent(
          "cq-async-content-loaded",
          {}
        ));
      }).catch((g) => {
        console.error(g);
      });
    }, f = a.bind(null, s());
    return G(() => {
      const m = s();
      o.injectPropsOnInit && a(m), F.addListener(m, f);
    }), Q(() => {
      F.removeListener(o.cqPath, f);
    }), (m, l) => {
      var d, i;
      return u(), P(E((i = (d = h(n)).default) == null ? void 0 : i.call(d)[0]), {
        modelValue: p.value,
        "onUpdate:modelValue": l[0] || (l[0] = (y) => p.value = y)
      }, null, 8, ["modelValue"]);
    };
  }
}), oe = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "CompositeModelProvider",
  props: {
    modelConfig: {
      type: Object,
      default: () => ({ injectPropsOnInit: !1, forceReload: !1 })
    }
  },
  setup(t) {
    const e = t, o = $(), n = S(), r = n.cqForceReload || e.modelConfig.forceReload, { injectPropsOnInit: c } = e.modelConfig;
    return (p, s) => (u(), P(te, w({
      "cq-force-reload": h(r),
      "inject-props-on-init": h(c),
      "model-properties": { ...h(n) }
    }, { ...h(n) }), {
      default: z(() => {
        var a, f;
        return [
          (u(), P(E((f = (a = h(o)).default) == null ? void 0 : f.call(a)[0])))
        ];
      }),
      _: 1
    }, 16, ["cq-force-reload", "inject-props-on-init", "model-properties"]));
  }
}), ne = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "ContextProvider",
  setup(t) {
    const e = $(), o = S(), n = v("componentMapping", new O()), r = v("isInEditor", A.isInEditor());
    return R("isInEditor", r), R("componentMapping", n), (c, p) => {
      var s, a;
      return u(), P(E((a = (s = h(e)).default) == null ? void 0 : a.call(s)[0]), b(L({ ...h(o) })), null, 16);
    };
  }
}), re = (t) => N(ne, {}, () => [N(t)]), se = (t, e) => N(oe, { modelConfig: e }, () => [N(t)]), ae = (t, e) => N(ee, { editConfig: e }, () => [N(t)]), ie = (t, e, o) => {
  const {
    injectPropsOnInit: n = !0,
    forceReload: r = !1,
    ...c
  } = o || {}, p = {
    injectPropsOnInit: n,
    forceReload: r,
    ...c
  };
  let s = t;
  return s = re(
    se(ae(s, e), p)
  ), s;
}, ce = O.map, pe = O.get;
O.map = function(e, o, n = {
  isEmpty: () => !1
}, r = {}) {
  const { injectPropsOnInit: c = !1, ...p } = r || {}, s = ie(o, n, {
    injectPropsOnInit: c,
    ...p
  });
  return ce.call(O, e, s), s;
};
O.get = pe;
const qe = (t) => (e, o, n = {}) => (
  // @ts-ignore
  O.map(t, e, o, n)
), Ie = (t, e, o, n, r, c) => {
  let p = [];
  t && (p = [t]), e && p.push(e), o && p.push(...o.split(" "));
  const s = n == null ? void 0 : n.class;
  return c && s && !r && p.push(s), p;
}, ve = (t) => ({
  aemNoDecoration: {
    type: Boolean,
    default: !1
  },
  appliedCssClassNames: {
    type: String
  },
  baseCssClass: {
    type: String,
    default: t
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
}), le = ["data-cq-data-path", "data-emptytext"], de = /* @__PURE__ */ q({
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
  setup(t) {
    const e = t;
    return (o, n) => (u(), I("div", {
      "data-cq-data-path": e.path,
      "data-emptytext": e.emptyLabel,
      class: "aem-AllowedComponent--component cq-placeholder placeholder"
    }, null, 8, le));
  }
}), me = ["data-text"], ue = /* @__PURE__ */ q({
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
  setup(t) {
    const e = t, o = _(
      () => e.components && e.components.length > 0 ? e.title : e.emptyLabel
    );
    return (n, r) => {
      var c;
      return u(), I("div", {
        class: V([
          "aem-AllowedComponent--list",
          (c = e.placeholderProps) == null ? void 0 : c.placeholderClassNames
        ])
      }, [
        W("div", {
          "data-text": o.value,
          class: "aem-AllowedComponent--title"
        }, null, 8, me),
        (u(!0), I(k, null, D(e.components, (p) => (u(), P(de, {
          key: p.path,
          "empty-label": p.title,
          path: p.path
        }, null, 8, ["empty-label", "path"]))), 128))
      ], 2);
    };
  }
}), fe = ["data-cq-data-path"], he = /* @__PURE__ */ q({
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
  setup(t) {
    const e = t;
    return (o, n) => (u(), I("div", {
      class: V(e.placeholderClassNames),
      "data-cq-data-path": `${e.cqPath}/*`
    }, null, 10, fe));
  }
}), Pe = /* @__PURE__ */ q({
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
  setup(t) {
    const e = t, o = v("isInEditor", A.isInEditor()), n = typeof e.isInEditor < "u" ? e.isInEditor : o, r = v("componentMapping", new O()), c = _(() => {
      let a = {};
      return typeof e.getContainerProps == "function" ? a = e.getContainerProps() : (a = {
        class: "aem-container"
      }, n && (a["data-cq-data-path"] = e.cqPath)), a;
    }), p = _(
      () => x.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        e.aemNoDecoration,
        typeof e.getItemComponentProps == "function" ? e.getItemComponentProps : () => ({}),
        !1,
        r
      )
    ), s = _(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    });
    return (a, f) => (u(), I("div", b(L({ ...c.value })), [
      (u(!0), I(k, null, D(p.value, (m) => (u(), P(E(m), {
        key: m.toString()
      }))), 128)),
      h(o) ? (u(), P(he, b(w({ key: 0 }, s.value)), null, 16)) : U("", !0)
    ], 16));
  }
}), ge = /* @__PURE__ */ q({
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
  setup(t) {
    const e = t, o = typeof e.isInEditor < "u" ? e.isInEditor : v("isInEditor", A.isInEditor()), n = _(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    }), r = S();
    return (c, p) => {
      var s;
      return h(o) && e.allowedComponents && ((s = e.allowedComponents) != null && s.applicable) ? (u(), P(ue, {
        key: 0,
        components: e.allowedComponents.components,
        "cq-path": e.cqPath,
        "empty-label": e._allowedComponentPlaceholderListEmptyLabel,
        "placeholder-props": n.value,
        title: e.title
      }, null, 8, ["components", "cq-path", "empty-label", "placeholder-props", "title"])) : (u(), P(Pe, w({
        key: 1,
        "aem-no-decoration": e.aemNoDecoration,
        "cq-items": e.cqItems,
        "cq-items-order": e.cqItemsOrder,
        "cq-path": e.cqPath,
        "get-container-props": e.getContainerProps,
        "get-item-component-props": e.getItemComponentProps,
        "get-placeholder-props": e.getPlaceholderProps,
        "is-in-editor": h(o)
      }, { ...h(r) }), null, 16, ["aem-no-decoration", "cq-items", "cq-items-order", "cq-path", "get-container-props", "get-item-component-props", "get-placeholder-props", "is-in-editor"]));
    };
  }
}), be = /* @__PURE__ */ q({
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
  setup(t) {
    const e = S(), o = v("isInEditor", A.isInEditor()), n = v("componentMapping", new O()), r = t, c = _(
      () => x.getChildComponents(
        r.cqPath,
        r.cqItems,
        r.cqItemsOrder,
        r.aemNoDecoration,
        () => ({}),
        !0,
        n
      )
    ), p = _(
      () => x.getChildPages(r.cqChildren, n)
    ), s = _(() => {
      const a = ["aem-page"];
      e.cssClassNames && a.push(...e.cssClassNames.split(" "));
      const f = {
        class: a.join(" ")
      };
      return o && (f["data-cq-data-path"] = r.cqPath), f;
    });
    return G(() => {
      e.title && (document.title = e.title);
    }), H(() => {
      e.title && (document.title = e.title);
    }), (a, f) => (u(), I("div", b(L(s.value)), [
      (u(!0), I(k, null, D(c.value, (m) => (u(), P(E(m), {
        key: m.toString()
      }))), 128)),
      (u(!0), I(k, null, D(p.value, (m) => (u(), P(E(m), {
        key: m.toString()
      }))), 128))
    ], 16));
  }
}), Ee = /* @__PURE__ */ q({
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
  setup(t) {
    const e = t, o = S(), n = typeof e.isInEditor < "u" ? e.isInEditor : v("isInEditor", A.isInEditor()), r = () => {
      const s = {}, a = ["aem-container"];
      return e.gridClassNames && a.push(e.gridClassNames), s.class = a.join(" "), n && (s["data-cq-data-path"] = e.cqPath), s;
    }, c = () => {
      const s = {
        cqPath: e.cqPath
      }, a = [
        "new",
        "section",
        "aem-Grid-newComponent"
      ];
      return s.placeholderClassNames = a.join(" "), s;
    }, p = (s) => {
      const a = {};
      return e.columnClassNames && e.columnClassNames[s] && (a.class = e.columnClassNames[s]), a;
    };
    return (s, a) => (u(), P(ge, w({
      "aem-no-decoration": e.aemNoDecoration,
      "cq-path": e.cqPath,
      "get-container-props": r,
      "get-item-component-props": p,
      "get-placeholder-props": c,
      "is-in-editor": h(n),
      title: e.title
    }, { ...h(o) }), null, 16, ["aem-no-decoration", "cq-path", "is-in-editor", "title"]));
  }
});
export {
  de as AllowedComponentPlaceholder,
  ue as AllowedComponentPlaceholderList,
  ge as AllowedComponentsContainer,
  Ne as ComponentMapping,
  ee as CompositeEditableProvider,
  oe as CompositeModelProvider,
  Pe as Container,
  he as ContainerPlaceholder,
  ne as ContextProvider,
  K as EditableProvider,
  qe as MapTo,
  te as ModelProvider,
  be as Page,
  Ee as ResponsiveGrid,
  x as Utils,
  Ie as componentClassNames,
  ve as componentProperties,
  re as withContext,
  ae as withEditable,
  se as withModel
};
