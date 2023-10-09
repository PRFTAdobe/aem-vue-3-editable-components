import { ComponentMapping as O } from "@adobe/aem-spa-component-mapping";
import { ComponentMapping as At } from "@adobe/aem-spa-component-mapping";
import { defineComponent as q, inject as b, useSlots as L, useAttrs as S, computed as I, unref as f, openBlock as m, createBlock as g, resolveDynamicComponent as E, normalizeProps as v, mergeProps as A, createElementBlock as y, guardReactiveProps as T, createCommentVNode as B, withCtx as U, onMounted as Q, onUnmounted as V, toRefs as W, provide as z, h as j, normalizeClass as G, createElementVNode as H, Fragment as $, renderList as k, createVNode as J } from "vue";
import { AuthoringUtils as N, ModelManager as R, PathUtils as X } from "@adobe/aem-spa-page-model-manager";
function Y(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var D = { exports: {} };
(function(o, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  function n(p) {
    "@babel/helpers - typeof";
    return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, n(p);
  }
  var c = 47, s = 46, d = function(e) {
    var r = n(e);
    if (r !== "string")
      throw new TypeError("Expected a string, got a ".concat(r));
  }, u = function(e, r) {
    for (var l = "", P = 0, _ = -1, w = 0, M, C = 0; C <= e.length; ++C) {
      if (C < e.length)
        M = e.charCodeAt(C);
      else {
        if (M === c)
          break;
        M = c;
      }
      if (M === c) {
        if (!(_ === C - 1 || w === 1))
          if (_ !== C - 1 && w === 2) {
            if (l.length < 2 || P !== 2 || l.charCodeAt(l.length - 1) !== s || l.charCodeAt(l.length - 2) !== s) {
              if (l.length > 2) {
                var F = l.lastIndexOf("/");
                if (F !== l.length - 1) {
                  F === -1 ? (l = "", P = 0) : (l = l.slice(0, F), P = l.length - 1 - l.lastIndexOf("/")), _ = C, w = 0;
                  continue;
                }
              } else if (l.length === 2 || l.length === 1) {
                l = "", P = 0, _ = C, w = 0;
                continue;
              }
            }
            r && (l.length > 0 ? l += "/.." : l = "..", P = 2);
          } else
            l.length > 0 ? l += "/" + e.slice(_ + 1, C) : l = e.slice(_ + 1, C), P = C - _ - 1;
        _ = C, w = 0;
      } else
        M === s && w !== -1 ? ++w : w = -1;
    }
    return l;
  }, i = function(e) {
    try {
      return decodeURIComponent(e);
    } catch {
      return e;
    }
  }, h = function(e) {
    d(e);
    var r = e;
    if (r.length === 0)
      return ".";
    var l = r.charCodeAt(0) === c, P = r.charCodeAt(r.length - 1) === c;
    return r = i(r), r = u(r, !l), r.length === 0 && !l && (r = "."), r.length > 0 && P && (r += "/"), l ? "/" + r : r;
  }, a = h;
  t.default = a, o.exports = t.default;
})(D, D.exports);
var Z = D.exports;
const K = /* @__PURE__ */ Y(Z), x = {
  getCQPath(o) {
    const { pagePath: t = "", itemPath: n = "", injectPropsOnInit: c } = o;
    let { cqPath: s = "" } = o;
    return c && !s && (s = K(
      n ? `${t}/jcr:content/${n}` : t
    ), s = s.replace(/^\.$/, "")), s;
  },
  modelToProps(o) {
    const t = Object.getOwnPropertyNames(o), n = {}, c = (s) => {
      const d = s.substring(1);
      return `cq${d.substring(0, 1).toUpperCase()}${d.substring(
        1
      )}`;
    };
    return t.forEach((s) => {
      let d = s;
      d.startsWith(":") && (d = c(d)), n[d] = o[s];
    }), n;
  }
}, tt = /* @__PURE__ */ q({
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
  setup(o) {
    const t = o, { editConfig: n } = t, c = b("isInEditor", N.isInEditor()), s = L(), d = S(), u = I(() => {
      const p = {}, { componentProperties: e } = t;
      return c && (p["data-cq-data-path"] = e.cqPath, n.resourceType && (p["data-cq-resource-type"] = n.resourceType)), p;
    }), i = I(() => {
      var P;
      const p = {}, { componentProperties: e } = t, { appliedCssClassNames: r } = e, l = [];
      return r && l.push(r), (P = t == null ? void 0 : t.containerProps) != null && P.class && l.push(t.containerProps.class), l.length && (p.class = l.join(" ")), p;
    }), h = c && typeof n.isEmpty == "function" && // eslint-disable-next-line vue/no-setup-props-destructure
    n.isEmpty(t.componentProperties), a = I(() => h ? {
      class: "cq-placeholder",
      "data-emptytext": n.emptyLabel
    } : null);
    return (p, e) => {
      var r, l, P, _;
      return !f(c) && o.componentProperties.hasOwnProperty("aemNoDecoration") && o.componentProperties.aemNoDecoration ? (m(), g(E((l = (r = f(s)).default) == null ? void 0 : l.call(r)[0]), v(A({ key: 0 }, { ...f(d) })), null, 16)) : (m(), y("div", v(A({ key: 1 }, { ...u.value, ...i.value })), [
        (m(), g(E((_ = (P = f(s)).default) == null ? void 0 : _.call(P)[0]), v(T({
          ...f(d),
          componentProperties: t.componentProperties
        })), null, 16)),
        a.value ? (m(), y("div", v(A({ key: 0 }, a.value)), null, 16)) : B("", !0)
      ], 16));
    };
  }
}), et = /* @__PURE__ */ q({
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
  setup(o) {
    const t = o, n = L(), c = S();
    return (s, d) => (m(), g(tt, v(T({ ...f(c), componentProperties: { ...f(c) }, editConfig: t.editConfig })), {
      default: U(() => {
        var u, i;
        return [
          (m(), g(E((i = (u = f(n)).default) == null ? void 0 : i.call(u)[0])))
        ];
      }),
      _: 1
    }, 16));
  }
}), ot = /* @__PURE__ */ q({
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
    // eslint-disable-next-line vue/require-default-prop
    pagePath: {
      type: String
    },
    // eslint-disable-next-line vue/require-default-prop
    itemPath: {
      type: String
    }
  },
  setup(o) {
    const t = o, n = L();
    let s = S();
    const d = b("isInEditor", N.isInEditor()), u = (a) => {
      const { pagePath: p, itemPath: e, injectPropsOnInit: r } = t, l = a || t.cqPath || p && x.getCQPath({ pagePath: p, itemPath: e, injectPropsOnInit: r });
      l && R.getData({
        path: l,
        forceReload: t.cqForceReload
      }).then((P) => {
        P && Object.keys(P).length > 0 && (s = {
          ...s,
          ...x.modelToProps(P)
        }, r && d && X.dispatchGlobalCustomEvent(
          "cq-async-content-loaded",
          {}
        ));
      }).catch((P) => {
        console.error(P);
      });
    }, i = () => {
      const { pagePath: a, itemPath: p, injectPropsOnInit: e, cqPath: r } = t;
      return x.getCQPath({
        pagePath: a,
        itemPath: p,
        injectPropsOnInit: e,
        cqPath: r
      });
    }, h = u.bind(null, i());
    return Q(() => {
      const a = i();
      s.cqPath = a, t.injectPropsOnInit && u(a), R.addListener(a, h);
    }), V(() => {
      R.removeListener(t.cqPath, h);
    }), (a, p) => {
      var e, r;
      return m(), g(E((r = (e = f(n)).default) == null ? void 0 : r.call(e)[0]), v(T(f(s))), null, 16);
    };
  }
}), nt = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "CompositeModelProvider",
  props: {
    modelConfig: {
      type: Object,
      default: () => ({ injectPropsOnInit: !1, forceReload: !1 })
    }
  },
  setup(o) {
    const t = o, n = L(), c = S(), { modelConfig: s } = W(t), d = c.cqForceReload || s.value.forceReload, { injectPropsOnInit: u } = s.value;
    return (i, h) => (m(), g(ot, A({
      "cq-force-reload": f(d),
      "inject-props-on-init": f(u)
    }, { ...f(c) }), {
      default: U(() => {
        var a, p;
        return [
          (m(), g(E((p = (a = f(n)).default) == null ? void 0 : p.call(a)[0])))
        ];
      }),
      _: 1
    }, 16, ["cq-force-reload", "inject-props-on-init"]));
  }
}), rt = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "ContextProvider",
  setup(o) {
    const t = L(), n = S(), c = b("componentMapping", new O()), s = b("isInEditor", N.isInEditor());
    return z("isInEditor", s), z("componentMapping", c), (d, u) => {
      var i, h;
      return m(), g(E((h = (i = f(t)).default) == null ? void 0 : h.call(i)[0]), v(T({ ...f(n) })), null, 16);
    };
  }
}), st = (o) => j(rt, {}, () => [j(o)]), at = (o, t) => j(nt, { modelConfig: t }, () => [j(o)]), ct = (o, t) => j(et, { editConfig: t }, () => [j(o)]), pt = (o, t, n) => {
  const {
    injectPropsOnInit: c = !0,
    forceReload: s = !1,
    ...d
  } = n || {}, u = {
    injectPropsOnInit: c,
    forceReload: s,
    ...d
  };
  let i = o;
  return i = st(
    at(ct(i, t), u)
  ), i;
}, it = O.map, lt = O.get;
O.map = function(t, n, c = {
  isEmpty: () => !1
}, s = {}) {
  const { injectPropsOnInit: d = !1, ...u } = s || {}, i = pt(n, c, {
    injectPropsOnInit: d,
    ...u
  });
  return it.call(O, t, i), i;
};
O.get = lt;
const It = (o) => (t, n, c = {}) => (
  // @ts-ignore
  O.map(o, t, n, c)
), vt = (o, t, n, c) => {
  let s = [];
  o && (s = [o]), t && s.push(t);
  const d = n == null ? void 0 : n.class;
  return d && !c && s.push(d), s;
}, bt = (o) => ({
  appliedCssClassNames: {
    type: String
  },
  baseCssClass: {
    type: String,
    default: o
  },
  containerProps: {
    type: Object,
    default: () => {
    }
  },
  // eslint-disable-next-line vue/require-default-prop
  id: {
    type: String
  }
}), dt = ["data-cq-data-path", "data-emptytext"], mt = /* @__PURE__ */ q({
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
  setup(o) {
    const t = o;
    return (n, c) => (m(), y("div", {
      "data-cq-data-path": t.path,
      "data-emptytext": t.emptyLabel,
      class: "aem-AllowedComponent--component cq-placeholder placeholder"
    }, null, 8, dt));
  }
}), ut = ["data-text"], ht = /* @__PURE__ */ q({
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
  setup(o) {
    const t = o, n = I(
      () => t.components && t.components.length > 0 ? t.title : t.emptyLabel
    );
    return (c, s) => {
      var d;
      return m(), y("div", {
        class: G([
          "aem-AllowedComponent--list",
          (d = t.placeholderProps) == null ? void 0 : d.placeholderClassNames
        ])
      }, [
        H("div", {
          "data-text": n.value,
          class: "aem-AllowedComponent--title"
        }, null, 8, ut),
        (m(!0), y($, null, k(t.components, (u) => (m(), g(mt, {
          key: u.path,
          "empty-label": u.title,
          path: u.path
        }, null, 8, ["empty-label", "path"]))), 128))
      ], 2);
    };
  }
}), ft = ["data-cq-data-path"], Pt = /* @__PURE__ */ q({
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
  setup(o) {
    const t = o;
    return (n, c) => (m(), y("div", {
      class: G(t.placeholderClassNames),
      "data-cq-data-path": `${t.cqPath}/*`
    }, null, 10, ft));
  }
}), gt = /* @__PURE__ */ q({
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
  setup(o) {
    const t = o, n = typeof t.isInEditor < "u" ? t.isInEditor : b("isInEditor", N.isInEditor()), c = b("componentMapping", new O()), s = (a) => {
      var p;
      return ((p = t.cqPath) == null ? void 0 : p.length) > 0 ? `${t.cqPath}/${a}` : a;
    }, d = (a, p, e) => {
      const r = s(e);
      return j(a, {
        ...p,
        cqPath: r,
        containerProps: typeof t.getItemComponentProps == "function" ? t.getItemComponentProps(e) : {}
      });
    }, u = I(() => {
      let a = {};
      return typeof t.getContainerProps == "function" ? a = t.getContainerProps() : (a = {
        class: "aem-container"
      }, n && (a["data-cq-data-path"] = t.cqPath)), a;
    }), i = I(() => {
      const a = [];
      return Object.keys(t.cqItems).length > 0 && t.cqItemsOrder.length > 0 && t.cqItemsOrder.forEach((p) => {
        const e = x.modelToProps(
          t.cqItems[p]
        );
        if (e && typeof e.cqType < "u") {
          const r = c.get(e.cqType);
          r && a.push(
            d(r, e, p)
          );
        }
      }), a;
    }), h = I(() => typeof t.getPlaceholderProps == "function" ? t.getPlaceholderProps() : {
      cqPath: t.cqPath,
      placeholderClassNames: "new section"
    });
    return (a, p) => !f(n) && t.aemNoDecoration ? (m(!0), y($, { key: 0 }, k(i.value, (e) => (m(), g(E(e), {
      key: e.toString()
    }))), 128)) : (m(), y("div", v(A({ key: 1 }, { ...u.value })), [
      (m(!0), y($, null, k(i.value, (e) => (m(), g(E(e), {
        key: e.toString()
      }))), 128)),
      f(n) ? (m(), g(Pt, v(A({ key: 0 }, h.value)), null, 16)) : B("", !0)
    ], 16));
  }
}), yt = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "AllowedComponentsContainer",
  props: {
    // eslint-disable-next-line vue/prop-name-casing
    _allowedComponentPlaceholderListEmptyLabel: {
      type: String,
      default: "No allowed components"
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
  setup(o) {
    const t = o, n = typeof t.isInEditor < "u" ? t.isInEditor : b("isInEditor", N.isInEditor()), c = I(() => typeof t.getPlaceholderProps == "function" ? t.getPlaceholderProps() : {
      cqPath: t.cqPath,
      placeholderClassNames: "new section"
    }), s = S();
    return (d, u) => {
      var i;
      return m(), y($, null, [
        f(n) && t.allowedComponents && ((i = t.allowedComponents) != null && i.applicable) ? (m(), g(ht, {
          key: 0,
          components: t.allowedComponents.components,
          "cq-path": t.cqPath,
          "empty-label": t._allowedComponentPlaceholderListEmptyLabel,
          "placeholder-props": c.value,
          title: t.title
        }, null, 8, ["components", "cq-path", "empty-label", "placeholder-props", "title"])) : B("", !0),
        J(gt, A({
          "cq-items": t.cqItems,
          "cq-items-order": t.cqItemsOrder,
          "cq-path": t.cqPath,
          "get-container-props": t.getContainerProps,
          "get-item-component-props": t.getItemComponentProps,
          "get-placeholder-props": t.getPlaceholderProps
        }, { ...f(s) }), null, 16, ["cq-items", "cq-items-order", "cq-path", "get-container-props", "get-item-component-props", "get-placeholder-props"])
      ], 64);
    };
  }
}), Et = /* @__PURE__ */ q({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Page",
  inheritAttrs: !1,
  __name: "Page",
  props: {
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
  setup(o) {
    const t = o, n = b("isInEditor", N.isInEditor()), c = b("componentMapping", new O()), s = (a) => {
      var p;
      return ((p = t.cqPath) == null ? void 0 : p.length) > 0 ? `${t.cqPath}/jcr:content/${a}` : a;
    }, d = (a, p, e) => {
      const r = s(e);
      return j(a, {
        ...p,
        cqPath: r,
        containerProps: {}
      });
    }, u = I(() => {
      const a = [];
      return Object.keys(t.cqItems).length > 0 && t.cqItemsOrder.length > 0 && t.cqItemsOrder.forEach((p) => {
        const e = x.modelToProps(
          t.cqItems[p]
        );
        if (e && typeof e.cqType < "u") {
          const r = c.get(e.cqType);
          r && a.push(
            d(r, e, p)
          );
        }
      }), a;
    }), i = I(() => {
      const a = [];
      return Object.keys(t.cqChildren).length === 0 || Object.keys(t.cqChildren).forEach((p) => {
        const e = x.modelToProps(
          t.cqChildren[p]
        );
        if (e && typeof e.cqType < "u") {
          const r = c.get(e.cqType);
          r && a.push(
            j(r, { ...e, cqPath: e.cqPath })
          );
        }
      }), a;
    }), h = I(() => {
      const a = {
        class: "aem-page"
      };
      return n && (a["data-cq-data-path"] = t.cqPath), a;
    });
    return (a, p) => (m(), y("div", v(T(h.value)), [
      (m(!0), y($, null, k(u.value, (e) => (m(), g(E(e), {
        key: e.toString()
      }))), 128)),
      (m(!0), y($, null, k(i.value, (e) => (m(), g(E(e), {
        key: e.toString()
      }))), 128))
    ], 16));
  }
}), Ot = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "ResponsiveGrid",
  props: {
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
    }
  },
  setup(o) {
    const t = o, n = S(), c = typeof t.isInEditor < "u" ? t.isInEditor : b("isInEditor", N.isInEditor()), s = () => {
      const i = {}, h = ["aem-container"];
      return t.gridClassNames && h.push(t.gridClassNames), i.class = h.join(" "), c && (i["data-cq-data-path"] = t.cqPath), i;
    }, d = () => {
      const i = {
        cqPath: t.cqPath
      }, h = [
        "new",
        "section",
        "aem-Grid-newComponent"
      ];
      return i.placeholderClassNames = h.join(" "), i;
    }, u = (i) => {
      const h = {};
      return t.columnClassNames && t.columnClassNames[i] && (h.class = t.columnClassNames[i]), h;
    };
    return (i, h) => (m(), g(yt, A({
      "cq-path": t.cqPath,
      "get-container-props": s,
      "get-item-component-props": u,
      "get-placeholder-props": d,
      "is-in-editor": f(c)
    }, { ...f(n) }), null, 16, ["cq-path", "is-in-editor"]));
  }
});
export {
  mt as AllowedComponentPlaceholder,
  ht as AllowedComponentPlaceholderList,
  yt as AllowedComponentsContainer,
  At as ComponentMapping,
  et as CompositeEditableProvider,
  nt as CompositeModelProvider,
  gt as Container,
  Pt as ContainerPlaceholder,
  rt as ContextProvider,
  tt as EditableProvider,
  It as MapTo,
  ot as ModelProvider,
  Et as Page,
  Ot as ResponsiveGrid,
  x as Utils,
  vt as componentClassNames,
  bt as componentProperties,
  st as withContext,
  ct as withEditable,
  at as withModel
};
