import { ComponentMapping as O } from "@adobe/aem-spa-component-mapping";
import { ComponentMapping as At } from "@adobe/aem-spa-component-mapping";
import { defineComponent as q, inject as b, useSlots as L, useAttrs as A, computed as _, unref as h, openBlock as m, createBlock as P, resolveDynamicComponent as E, normalizeProps as v, mergeProps as S, createElementBlock as y, guardReactiveProps as T, createCommentVNode as B, withCtx as U, ref as Q, onMounted as V, onUnmounted as W, toRefs as H, provide as z, h as j, normalizeClass as G, createElementVNode as J, Fragment as $, renderList as k, createVNode as X } from "vue";
import { AuthoringUtils as N, ModelManager as R, PathUtils as Y } from "@adobe/aem-spa-page-model-manager";
function Z(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var D = { exports: {} };
(function(o, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  function r(s) {
    "@babel/helpers - typeof";
    return r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, r(s);
  }
  var a = 47, c = 46, d = function(e) {
    var n = r(e);
    if (n !== "string")
      throw new TypeError("Expected a string, got a ".concat(n));
  }, f = function(e, n) {
    for (var l = "", I = 0, g = -1, w = 0, M, C = 0; C <= e.length; ++C) {
      if (C < e.length)
        M = e.charCodeAt(C);
      else {
        if (M === a)
          break;
        M = a;
      }
      if (M === a) {
        if (!(g === C - 1 || w === 1))
          if (g !== C - 1 && w === 2) {
            if (l.length < 2 || I !== 2 || l.charCodeAt(l.length - 1) !== c || l.charCodeAt(l.length - 2) !== c) {
              if (l.length > 2) {
                var F = l.lastIndexOf("/");
                if (F !== l.length - 1) {
                  F === -1 ? (l = "", I = 0) : (l = l.slice(0, F), I = l.length - 1 - l.lastIndexOf("/")), g = C, w = 0;
                  continue;
                }
              } else if (l.length === 2 || l.length === 1) {
                l = "", I = 0, g = C, w = 0;
                continue;
              }
            }
            n && (l.length > 0 ? l += "/.." : l = "..", I = 2);
          } else
            l.length > 0 ? l += "/" + e.slice(g + 1, C) : l = e.slice(g + 1, C), I = C - g - 1;
        g = C, w = 0;
      } else
        M === c && w !== -1 ? ++w : w = -1;
    }
    return l;
  }, i = function(e) {
    try {
      return decodeURIComponent(e);
    } catch {
      return e;
    }
  }, u = function(e) {
    d(e);
    var n = e;
    if (n.length === 0)
      return ".";
    var l = n.charCodeAt(0) === a, I = n.charCodeAt(n.length - 1) === a;
    return n = i(n), n = f(n, !l), n.length === 0 && !l && (n = "."), n.length > 0 && I && (n += "/"), l ? "/" + n : n;
  }, p = u;
  t.default = p, o.exports = t.default;
})(D, D.exports);
var K = D.exports;
const tt = /* @__PURE__ */ Z(K), x = {
  getCQPath(o) {
    const { pagePath: t = "", itemPath: r = "", injectPropsOnInit: a } = o;
    let { cqPath: c = "" } = o;
    return a && !c && (c = tt(
      r ? `${t}/jcr:content/${r}` : t
    ), c = c.replace(/^\.$/, "")), c;
  },
  modelToProps(o) {
    const t = Object.getOwnPropertyNames(o), r = {}, a = (c) => {
      const d = c.substring(1);
      return `cq${d.substring(0, 1).toUpperCase()}${d.substring(
        1
      )}`;
    };
    return t.forEach((c) => {
      let d = c;
      d.startsWith(":") && (d = a(d)), r[d] = o[c];
    }), r;
  }
}, et = /* @__PURE__ */ q({
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
    const t = o, r = b("isInEditor", N.isInEditor()), a = L(), c = A(), d = _(() => {
      const u = {}, { componentProperties: p } = t;
      return r && (u["data-cq-data-path"] = p.cqPath, t.editConfig.resourceType && (u["data-cq-resource-type"] = t.editConfig.resourceType)), u;
    }), f = _(() => {
      var n;
      const u = {}, { componentProperties: p } = t, { appliedCssClassNames: s } = p, e = [];
      return s && e.push(s), (n = t == null ? void 0 : t.containerProps) != null && n.class && e.push(t.containerProps.class), e.length && (u.class = e.join(" ")), u;
    }), i = _(() => r && typeof t.editConfig.isEmpty == "function" && t.editConfig.isEmpty(t.componentProperties) ? {
      class: "cq-placeholder",
      "data-emptytext": t.editConfig.emptyLabel
    } : null);
    return (u, p) => {
      var s, e, n, l;
      return !h(r) && t.componentProperties.hasOwnProperty("aemNoDecoration") && t.componentProperties.aemNoDecoration ? (m(), P(E((e = (s = h(a)).default) == null ? void 0 : e.call(s)[0]), v(S({ key: 0 }, { ...h(c) })), null, 16)) : (m(), y("div", v(S({ key: 1 }, { ...d.value, ...f.value })), [
        (m(), P(E((l = (n = h(a)).default) == null ? void 0 : l.call(n)[0]), v(T({
          ...h(c),
          componentProperties: t.componentProperties
        })), null, 16)),
        i.value ? (m(), y("div", v(S({ key: 0 }, i.value)), null, 16)) : B("", !0)
      ], 16));
    };
  }
}), ot = /* @__PURE__ */ q({
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
    const t = o, r = L(), a = A();
    return (c, d) => (m(), P(et, v(T({
      ...h(a),
      componentProperties: { ...h(a) },
      editConfig: t.editConfig
    })), {
      default: U(() => {
        var f, i;
        return [
          (m(), P(E((i = (f = h(r)).default) == null ? void 0 : i.call(f)[0])))
        ];
      }),
      _: 1
    }, 16));
  }
}), nt = /* @__PURE__ */ q({
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
    const t = o, r = L(), a = A(), c = b("isInEditor", N.isInEditor()), d = () => {
      const { pagePath: s, itemPath: e, injectPropsOnInit: n, cqPath: l } = t;
      return x.getCQPath({
        pagePath: s,
        itemPath: e,
        injectPropsOnInit: n,
        cqPath: l
      });
    }, f = Q({ ...a, cqPath: d() }), i = _({
      get() {
        return {
          ...f.value
        };
      },
      set(s) {
        f.value = s;
      }
    }), u = (s) => {
      const { pagePath: e, itemPath: n, injectPropsOnInit: l } = t, I = s || t.cqPath || e && x.getCQPath({ pagePath: e, itemPath: n, injectPropsOnInit: l });
      I && R.getData({
        path: I,
        forceReload: t.cqForceReload
      }).then((g) => {
        g && Object.keys(g).length > 0 && (i.value = { cqPath: s, ...x.modelToProps(g) }, l && c && Y.dispatchGlobalCustomEvent(
          "cq-async-content-loaded",
          {}
        ));
      }).catch((g) => {
        console.error(g);
      });
    }, p = u.bind(null, d());
    return V(() => {
      const s = d();
      t.injectPropsOnInit && u(s), R.addListener(s, p);
    }), W(() => {
      R.removeListener(t.cqPath, p);
    }), (s, e) => {
      var n, l;
      return m(), P(E((l = (n = h(r)).default) == null ? void 0 : l.call(n)[0]), v(T(i.value)), null, 16);
    };
  }
}), rt = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "CompositeModelProvider",
  props: {
    modelConfig: {
      type: Object,
      default: () => ({ injectPropsOnInit: !1, forceReload: !1 })
    }
  },
  setup(o) {
    const t = o, r = L(), a = A(), { modelConfig: c } = H(t), d = a.cqForceReload || c.value.forceReload, { injectPropsOnInit: f } = c.value;
    return (i, u) => (m(), P(nt, S({
      "cq-force-reload": h(d),
      "inject-props-on-init": h(f)
    }, { ...h(a) }), {
      default: U(() => {
        var p, s;
        return [
          (m(), P(E((s = (p = h(r)).default) == null ? void 0 : s.call(p)[0])))
        ];
      }),
      _: 1
    }, 16, ["cq-force-reload", "inject-props-on-init"]));
  }
}), st = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "ContextProvider",
  setup(o) {
    const t = L(), r = A(), a = b("componentMapping", new O()), c = b("isInEditor", N.isInEditor());
    return z("isInEditor", c), z("componentMapping", a), (d, f) => {
      var i, u;
      return m(), P(E((u = (i = h(t)).default) == null ? void 0 : u.call(i)[0]), v(T({ ...h(r) })), null, 16);
    };
  }
}), at = (o) => j(st, {}, () => [j(o)]), ct = (o, t) => j(rt, { modelConfig: t }, () => [j(o)]), pt = (o, t) => j(ot, { editConfig: t }, () => [j(o)]), it = (o, t, r) => {
  const {
    injectPropsOnInit: a = !0,
    forceReload: c = !1,
    ...d
  } = r || {}, f = {
    injectPropsOnInit: a,
    forceReload: c,
    ...d
  };
  let i = o;
  return i = at(
    ct(pt(i, t), f)
  ), i;
}, lt = O.map, dt = O.get;
O.map = function(t, r, a = {
  isEmpty: () => !1
}, c = {}) {
  const { injectPropsOnInit: d = !1, ...f } = c || {}, i = it(r, a, {
    injectPropsOnInit: d,
    ...f
  });
  return lt.call(O, t, i), i;
};
O.get = dt;
const vt = (o) => (t, r, a = {}) => (
  // @ts-ignore
  O.map(o, t, r, a)
), bt = (o, t, r, a) => {
  let c = [];
  o && (c = [o]), t && c.push(t);
  const d = r == null ? void 0 : r.class;
  return d && !a && c.push(d), c;
}, Et = (o) => ({
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
}), ut = ["data-cq-data-path", "data-emptytext"], mt = /* @__PURE__ */ q({
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
    return (r, a) => (m(), y("div", {
      "data-cq-data-path": t.path,
      "data-emptytext": t.emptyLabel,
      class: "aem-AllowedComponent--component cq-placeholder placeholder"
    }, null, 8, ut));
  }
}), ft = ["data-text"], ht = /* @__PURE__ */ q({
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
    const t = o, r = _(
      () => t.components && t.components.length > 0 ? t.title : t.emptyLabel
    );
    return (a, c) => {
      var d;
      return m(), y("div", {
        class: G([
          "aem-AllowedComponent--list",
          (d = t.placeholderProps) == null ? void 0 : d.placeholderClassNames
        ])
      }, [
        J("div", {
          "data-text": r.value,
          class: "aem-AllowedComponent--title"
        }, null, 8, ft),
        (m(!0), y($, null, k(t.components, (f) => (m(), P(mt, {
          key: f.path,
          "empty-label": f.title,
          path: f.path
        }, null, 8, ["empty-label", "path"]))), 128))
      ], 2);
    };
  }
}), Pt = ["data-cq-data-path"], gt = /* @__PURE__ */ q({
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
    return (r, a) => (m(), y("div", {
      class: G(t.placeholderClassNames),
      "data-cq-data-path": `${t.cqPath}/*`
    }, null, 10, Pt));
  }
}), yt = /* @__PURE__ */ q({
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
    const t = o, r = typeof t.isInEditor < "u" ? t.isInEditor : b("isInEditor", N.isInEditor()), a = b("componentMapping", new O()), c = (p) => {
      var s;
      return ((s = t.cqPath) == null ? void 0 : s.length) > 0 ? `${t.cqPath}/${p}` : p;
    }, d = (p, s, e) => {
      const n = c(e);
      return j(p, {
        ...s,
        cqPath: n,
        containerProps: typeof t.getItemComponentProps == "function" ? t.getItemComponentProps(e) : {}
      });
    }, f = _(() => {
      let p = {};
      return typeof t.getContainerProps == "function" ? p = t.getContainerProps() : (p = {
        class: "aem-container"
      }, r && (p["data-cq-data-path"] = t.cqPath)), p;
    }), i = _(() => {
      const p = [];
      return Object.keys(t.cqItems).length > 0 && t.cqItemsOrder.length > 0 && t.cqItemsOrder.forEach((s) => {
        const e = x.modelToProps(
          t.cqItems[s]
        );
        if (e && typeof e.cqType < "u") {
          const n = a.get(e.cqType);
          n && p.push(
            d(n, e, s)
          );
        }
      }), p;
    }), u = _(() => typeof t.getPlaceholderProps == "function" ? t.getPlaceholderProps() : {
      cqPath: t.cqPath,
      placeholderClassNames: "new section"
    });
    return (p, s) => !h(r) && t.aemNoDecoration ? (m(!0), y($, { key: 0 }, k(i.value, (e) => (m(), P(E(e), {
      key: e.toString()
    }))), 128)) : (m(), y("div", v(S({ key: 1 }, { ...f.value })), [
      (m(!0), y($, null, k(i.value, (e) => (m(), P(E(e), {
        key: e.toString()
      }))), 128)),
      h(r) ? (m(), P(gt, v(S({ key: 0 }, u.value)), null, 16)) : B("", !0)
    ], 16));
  }
}), Ct = /* @__PURE__ */ q({
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
    const t = o, r = typeof t.isInEditor < "u" ? t.isInEditor : b("isInEditor", N.isInEditor()), a = _(() => typeof t.getPlaceholderProps == "function" ? t.getPlaceholderProps() : {
      cqPath: t.cqPath,
      placeholderClassNames: "new section"
    }), c = A();
    return (d, f) => {
      var i;
      return m(), y($, null, [
        h(r) && t.allowedComponents && ((i = t.allowedComponents) != null && i.applicable) ? (m(), P(ht, {
          key: 0,
          components: t.allowedComponents.components,
          "cq-path": t.cqPath,
          "empty-label": t._allowedComponentPlaceholderListEmptyLabel,
          "placeholder-props": a.value,
          title: t.title
        }, null, 8, ["components", "cq-path", "empty-label", "placeholder-props", "title"])) : B("", !0),
        X(yt, S({
          "cq-items": t.cqItems,
          "cq-items-order": t.cqItemsOrder,
          "cq-path": t.cqPath,
          "get-container-props": t.getContainerProps,
          "get-item-component-props": t.getItemComponentProps,
          "get-placeholder-props": t.getPlaceholderProps
        }, { ...h(c) }), null, 16, ["cq-items", "cq-items-order", "cq-path", "get-container-props", "get-item-component-props", "get-placeholder-props"])
      ], 64);
    };
  }
}), Ot = /* @__PURE__ */ q({
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
    const t = o, r = b("isInEditor", N.isInEditor()), a = b("componentMapping", new O()), c = (p) => {
      var s;
      return ((s = t.cqPath) == null ? void 0 : s.length) > 0 ? `${t.cqPath}/jcr:content/${p}` : p;
    }, d = (p, s, e) => {
      const n = c(e);
      return j(p, {
        ...s,
        cqPath: n,
        containerProps: {}
      });
    }, f = _(() => {
      const p = [];
      return Object.keys(t.cqItems).length > 0 && t.cqItemsOrder.length > 0 && t.cqItemsOrder.forEach((s) => {
        const e = x.modelToProps(
          t.cqItems[s]
        );
        if (e && typeof e.cqType < "u") {
          const n = a.get(e.cqType);
          n && p.push(
            d(n, e, s)
          );
        }
      }), p;
    }), i = _(() => {
      const p = [];
      return Object.keys(t.cqChildren).length === 0 || Object.keys(t.cqChildren).forEach((s) => {
        const e = x.modelToProps(
          t.cqChildren[s]
        );
        if (e && typeof e.cqType < "u") {
          const n = a.get(e.cqType);
          n && p.push(
            j(n, { ...e, cqPath: e.cqPath })
          );
        }
      }), p;
    }), u = _(() => {
      const p = {
        class: "aem-page"
      };
      return r && (p["data-cq-data-path"] = t.cqPath), p;
    });
    return (p, s) => (m(), y("div", v(T(u.value)), [
      (m(!0), y($, null, k(f.value, (e) => (m(), P(E(e), {
        key: e.toString()
      }))), 128)),
      (m(!0), y($, null, k(i.value, (e) => (m(), P(E(e), {
        key: e.toString()
      }))), 128))
    ], 16));
  }
}), jt = /* @__PURE__ */ q({
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
    const t = o, r = A(), a = typeof t.isInEditor < "u" ? t.isInEditor : b("isInEditor", N.isInEditor()), c = () => {
      const i = {}, u = ["aem-container"];
      return t.gridClassNames && u.push(t.gridClassNames), i.class = u.join(" "), a && (i["data-cq-data-path"] = t.cqPath), i;
    }, d = () => {
      const i = {
        cqPath: t.cqPath
      }, u = [
        "new",
        "section",
        "aem-Grid-newComponent"
      ];
      return i.placeholderClassNames = u.join(" "), i;
    }, f = (i) => {
      const u = {};
      return t.columnClassNames && t.columnClassNames[i] && (u.class = t.columnClassNames[i]), u;
    };
    return (i, u) => (m(), P(Ct, S({
      "cq-path": t.cqPath,
      "get-container-props": c,
      "get-item-component-props": f,
      "get-placeholder-props": d,
      "is-in-editor": h(a)
    }, { ...h(r) }), null, 16, ["cq-path", "is-in-editor"]));
  }
});
export {
  mt as AllowedComponentPlaceholder,
  ht as AllowedComponentPlaceholderList,
  Ct as AllowedComponentsContainer,
  At as ComponentMapping,
  ot as CompositeEditableProvider,
  rt as CompositeModelProvider,
  yt as Container,
  gt as ContainerPlaceholder,
  st as ContextProvider,
  et as EditableProvider,
  vt as MapTo,
  nt as ModelProvider,
  Ot as Page,
  jt as ResponsiveGrid,
  x as Utils,
  bt as componentClassNames,
  Et as componentProperties,
  at as withContext,
  pt as withEditable,
  ct as withModel
};
