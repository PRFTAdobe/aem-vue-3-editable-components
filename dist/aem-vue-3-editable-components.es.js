import { ComponentMapping as E } from "@adobe/aem-spa-component-mapping";
import { ComponentMapping as At } from "@adobe/aem-spa-component-mapping";
import { defineComponent as q, inject as v, useSlots as L, useAttrs as A, computed as _, unref as f, openBlock as m, createBlock as g, resolveDynamicComponent as b, normalizeProps as I, mergeProps as S, createElementBlock as y, guardReactiveProps as T, createCommentVNode as B, withCtx as U, ref as Q, onMounted as V, onUnmounted as W, toRefs as H, provide as z, h as O, normalizeClass as G, createElementVNode as J, Fragment as $, renderList as k, createVNode as X } from "vue";
import { AuthoringUtils as N, ModelManager as R, PathUtils as Y } from "@adobe/aem-spa-page-model-manager";
function Z(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var D = { exports: {} };
(function(o, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  function s(i) {
    "@babel/helpers - typeof";
    return s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, s(i);
  }
  var a = 47, c = 46, d = function(e) {
    var r = s(e);
    if (r !== "string")
      throw new TypeError("Expected a string, got a ".concat(r));
  }, u = function(e, r) {
    for (var l = "", P = 0, j = -1, w = 0, M, C = 0; C <= e.length; ++C) {
      if (C < e.length)
        M = e.charCodeAt(C);
      else {
        if (M === a)
          break;
        M = a;
      }
      if (M === a) {
        if (!(j === C - 1 || w === 1))
          if (j !== C - 1 && w === 2) {
            if (l.length < 2 || P !== 2 || l.charCodeAt(l.length - 1) !== c || l.charCodeAt(l.length - 2) !== c) {
              if (l.length > 2) {
                var F = l.lastIndexOf("/");
                if (F !== l.length - 1) {
                  F === -1 ? (l = "", P = 0) : (l = l.slice(0, F), P = l.length - 1 - l.lastIndexOf("/")), j = C, w = 0;
                  continue;
                }
              } else if (l.length === 2 || l.length === 1) {
                l = "", P = 0, j = C, w = 0;
                continue;
              }
            }
            r && (l.length > 0 ? l += "/.." : l = "..", P = 2);
          } else
            l.length > 0 ? l += "/" + e.slice(j + 1, C) : l = e.slice(j + 1, C), P = C - j - 1;
        j = C, w = 0;
      } else
        M === c && w !== -1 ? ++w : w = -1;
    }
    return l;
  }, p = function(e) {
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
    var l = r.charCodeAt(0) === a, P = r.charCodeAt(r.length - 1) === a;
    return r = p(r), r = u(r, !l), r.length === 0 && !l && (r = "."), r.length > 0 && P && (r += "/"), l ? "/" + r : r;
  }, n = h;
  t.default = n, o.exports = t.default;
})(D, D.exports);
var K = D.exports;
const tt = /* @__PURE__ */ Z(K), x = {
  getCQPath(o) {
    const { pagePath: t = "", itemPath: s = "", injectPropsOnInit: a } = o;
    let { cqPath: c = "" } = o;
    return a && !c && (c = tt(
      s ? `${t}/jcr:content/${s}` : t
    ), c = c.replace(/^\.$/, "")), c;
  },
  modelToProps(o) {
    const t = Object.getOwnPropertyNames(o), s = {}, a = (c) => {
      const d = c.substring(1);
      return `cq${d.substring(0, 1).toUpperCase()}${d.substring(
        1
      )}`;
    };
    return t.forEach((c) => {
      let d = c;
      d.startsWith(":") && (d = a(d)), s[d] = o[c];
    }), s;
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
    const t = o, s = v("isInEditor", N.isInEditor()), a = L(), c = A(), d = _(() => {
      const n = {}, { componentProperties: i } = t;
      return s && (n["data-cq-data-path"] = i.cqPath, t.editConfig.resourceType && (n["data-cq-resource-type"] = t.editConfig.resourceType)), n;
    }), u = _(() => {
      var l;
      const n = {}, { componentProperties: i } = t, { appliedCssClassNames: e } = i, r = [];
      return e && r.push(e), (l = t == null ? void 0 : t.containerProps) != null && l.class && r.push(t.containerProps.class), r.length && (n.class = r.join(" ")), n;
    }), p = s && typeof t.editConfig.isEmpty == "function" && t.editConfig.isEmpty(t.componentProperties), h = _(() => p ? {
      class: "cq-placeholder",
      "data-emptytext": t.editConfig.emptyLabel
    } : null);
    return (n, i) => {
      var e, r, l, P;
      return !f(s) && t.componentProperties.hasOwnProperty("aemNoDecoration") && t.componentProperties.aemNoDecoration ? (m(), g(b((r = (e = f(a)).default) == null ? void 0 : r.call(e)[0]), I(S({ key: 0 }, { ...f(c) })), null, 16)) : (m(), y("div", I(S({ key: 1 }, { ...d.value, ...u.value })), [
        (m(), g(b((P = (l = f(a)).default) == null ? void 0 : P.call(l)[0]), I(T({
          ...f(c),
          componentProperties: t.componentProperties
        })), null, 16)),
        h.value ? (m(), y("div", I(S({ key: 0 }, h.value)), null, 16)) : B("", !0)
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
    const t = o, s = L(), a = A();
    return (c, d) => (m(), g(et, I(T({
      ...f(a),
      componentProperties: { ...f(a) },
      editConfig: t.editConfig
    })), {
      default: U(() => {
        var u, p;
        return [
          (m(), g(b((p = (u = f(s)).default) == null ? void 0 : p.call(u)[0])))
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
    const t = o, s = L(), a = A(), c = v("isInEditor", N.isInEditor()), d = Q({}), u = () => {
      const { pagePath: n, itemPath: i, injectPropsOnInit: e, cqPath: r } = t;
      return x.getCQPath({
        pagePath: n,
        itemPath: i,
        injectPropsOnInit: e,
        cqPath: r
      });
    }, p = (n) => {
      const { pagePath: i, itemPath: e, injectPropsOnInit: r } = t, l = n || t.cqPath || i && x.getCQPath({ pagePath: i, itemPath: e, injectPropsOnInit: r });
      l && R.getData({
        path: l,
        forceReload: t.cqForceReload
      }).then((P) => {
        P && Object.keys(P).length > 0 && (d.value = x.modelToProps(P), r && c && Y.dispatchGlobalCustomEvent(
          "cq-async-content-loaded",
          {}
        ));
      }).catch((P) => {
        console.error(P);
      });
    }, h = p.bind(null, u());
    return V(() => {
      const n = u();
      t.injectPropsOnInit && p(n), R.addListener(n, h);
    }), W(() => {
      R.removeListener(t.cqPath, h);
    }), (n, i) => {
      var e, r;
      return m(), g(b((r = (e = f(s)).default) == null ? void 0 : r.call(e)[0]), I(T({
        ...f(a),
        cqPath: u(),
        ...d.value
      })), null, 16);
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
    const t = o, s = L(), a = A(), { modelConfig: c } = H(t), d = a.cqForceReload || c.value.forceReload, { injectPropsOnInit: u } = c.value;
    return (p, h) => (m(), g(nt, S({
      "cq-force-reload": f(d),
      "inject-props-on-init": f(u)
    }, { ...f(a) }), {
      default: U(() => {
        var n, i;
        return [
          (m(), g(b((i = (n = f(s)).default) == null ? void 0 : i.call(n)[0])))
        ];
      }),
      _: 1
    }, 16, ["cq-force-reload", "inject-props-on-init"]));
  }
}), st = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "ContextProvider",
  setup(o) {
    const t = L(), s = A(), a = v("componentMapping", new E()), c = v("isInEditor", N.isInEditor());
    return z("isInEditor", c), z("componentMapping", a), (d, u) => {
      var p, h;
      return m(), g(b((h = (p = f(t)).default) == null ? void 0 : h.call(p)[0]), I(T({ ...f(s) })), null, 16);
    };
  }
}), at = (o) => O(st, {}, () => [O(o)]), ct = (o, t) => O(rt, { modelConfig: t }, () => [O(o)]), pt = (o, t) => O(ot, { editConfig: t }, () => [O(o)]), it = (o, t, s) => {
  const {
    injectPropsOnInit: a = !0,
    forceReload: c = !1,
    ...d
  } = s || {}, u = {
    injectPropsOnInit: a,
    forceReload: c,
    ...d
  };
  let p = o;
  return p = at(
    ct(pt(p, t), u)
  ), p;
}, lt = E.map, dt = E.get;
E.map = function(t, s, a = {
  isEmpty: () => !1
}, c = {}) {
  const { injectPropsOnInit: d = !1, ...u } = c || {}, p = it(s, a, {
    injectPropsOnInit: d,
    ...u
  });
  return lt.call(E, t, p), p;
};
E.get = dt;
const vt = (o) => (t, s, a = {}) => (
  // @ts-ignore
  E.map(o, t, s, a)
), bt = (o, t, s, a) => {
  let c = [];
  o && (c = [o]), t && c.push(t);
  const d = s == null ? void 0 : s.class;
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
}), mt = ["data-cq-data-path", "data-emptytext"], ut = /* @__PURE__ */ q({
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
    return (s, a) => (m(), y("div", {
      "data-cq-data-path": t.path,
      "data-emptytext": t.emptyLabel,
      class: "aem-AllowedComponent--component cq-placeholder placeholder"
    }, null, 8, mt));
  }
}), ht = ["data-text"], ft = /* @__PURE__ */ q({
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
    const t = o, s = _(
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
          "data-text": s.value,
          class: "aem-AllowedComponent--title"
        }, null, 8, ht),
        (m(!0), y($, null, k(t.components, (u) => (m(), g(ut, {
          key: u.path,
          "empty-label": u.title,
          path: u.path
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
    return (s, a) => (m(), y("div", {
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
    const t = o, s = typeof t.isInEditor < "u" ? t.isInEditor : v("isInEditor", N.isInEditor()), a = v("componentMapping", new E()), c = (n) => {
      var i;
      return ((i = t.cqPath) == null ? void 0 : i.length) > 0 ? `${t.cqPath}/${n}` : n;
    }, d = (n, i, e) => {
      const r = c(e);
      return O(n, {
        ...i,
        cqPath: r,
        containerProps: typeof t.getItemComponentProps == "function" ? t.getItemComponentProps(e) : {}
      });
    }, u = _(() => {
      let n = {};
      return typeof t.getContainerProps == "function" ? n = t.getContainerProps() : (n = {
        class: "aem-container"
      }, s && (n["data-cq-data-path"] = t.cqPath)), n;
    }), p = _(() => {
      const n = [];
      return Object.keys(t.cqItems).length > 0 && t.cqItemsOrder.length > 0 && t.cqItemsOrder.forEach((i) => {
        const e = x.modelToProps(
          t.cqItems[i]
        );
        if (e && typeof e.cqType < "u") {
          const r = a.get(e.cqType);
          r && n.push(
            d(r, e, i)
          );
        }
      }), n;
    }), h = _(() => typeof t.getPlaceholderProps == "function" ? t.getPlaceholderProps() : {
      cqPath: t.cqPath,
      placeholderClassNames: "new section"
    });
    return (n, i) => !f(s) && t.aemNoDecoration ? (m(!0), y($, { key: 0 }, k(p.value, (e) => (m(), g(b(e), {
      key: e.toString()
    }))), 128)) : (m(), y("div", I(S({ key: 1 }, { ...u.value })), [
      (m(!0), y($, null, k(p.value, (e) => (m(), g(b(e), {
        key: e.toString()
      }))), 128)),
      f(s) ? (m(), g(gt, I(S({ key: 0 }, h.value)), null, 16)) : B("", !0)
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
    const t = o, s = typeof t.isInEditor < "u" ? t.isInEditor : v("isInEditor", N.isInEditor()), a = _(() => typeof t.getPlaceholderProps == "function" ? t.getPlaceholderProps() : {
      cqPath: t.cqPath,
      placeholderClassNames: "new section"
    }), c = A();
    return (d, u) => {
      var p;
      return m(), y($, null, [
        f(s) && t.allowedComponents && ((p = t.allowedComponents) != null && p.applicable) ? (m(), g(ft, {
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
        }, { ...f(c) }), null, 16, ["cq-items", "cq-items-order", "cq-path", "get-container-props", "get-item-component-props", "get-placeholder-props"])
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
    const t = o, s = v("isInEditor", N.isInEditor()), a = v("componentMapping", new E()), c = (n) => {
      var i;
      return ((i = t.cqPath) == null ? void 0 : i.length) > 0 ? `${t.cqPath}/jcr:content/${n}` : n;
    }, d = (n, i, e) => {
      const r = c(e);
      return O(n, {
        ...i,
        cqPath: r,
        containerProps: {}
      });
    }, u = _(() => {
      const n = [];
      return Object.keys(t.cqItems).length > 0 && t.cqItemsOrder.length > 0 && t.cqItemsOrder.forEach((i) => {
        const e = x.modelToProps(
          t.cqItems[i]
        );
        if (e && typeof e.cqType < "u") {
          const r = a.get(e.cqType);
          r && n.push(
            d(r, e, i)
          );
        }
      }), n;
    }), p = _(() => {
      const n = [];
      return Object.keys(t.cqChildren).length === 0 || Object.keys(t.cqChildren).forEach((i) => {
        const e = x.modelToProps(
          t.cqChildren[i]
        );
        if (e && typeof e.cqType < "u") {
          const r = a.get(e.cqType);
          r && n.push(
            O(r, { ...e, cqPath: e.cqPath })
          );
        }
      }), n;
    }), h = _(() => {
      const n = {
        class: "aem-page"
      };
      return s && (n["data-cq-data-path"] = t.cqPath), n;
    });
    return (n, i) => (m(), y("div", I(T(h.value)), [
      (m(!0), y($, null, k(u.value, (e) => (m(), g(b(e), {
        key: e.toString()
      }))), 128)),
      (m(!0), y($, null, k(p.value, (e) => (m(), g(b(e), {
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
    const t = o, s = A(), a = typeof t.isInEditor < "u" ? t.isInEditor : v("isInEditor", N.isInEditor()), c = () => {
      const p = {}, h = ["aem-container"];
      return t.gridClassNames && h.push(t.gridClassNames), p.class = h.join(" "), a && (p["data-cq-data-path"] = t.cqPath), p;
    }, d = () => {
      const p = {
        cqPath: t.cqPath
      }, h = [
        "new",
        "section",
        "aem-Grid-newComponent"
      ];
      return p.placeholderClassNames = h.join(" "), p;
    }, u = (p) => {
      const h = {};
      return t.columnClassNames && t.columnClassNames[p] && (h.class = t.columnClassNames[p]), h;
    };
    return (p, h) => (m(), g(Ct, S({
      "cq-path": t.cqPath,
      "get-container-props": c,
      "get-item-component-props": u,
      "get-placeholder-props": d,
      "is-in-editor": f(a)
    }, { ...f(s) }), null, 16, ["cq-path", "is-in-editor"]));
  }
});
export {
  ut as AllowedComponentPlaceholder,
  ft as AllowedComponentPlaceholderList,
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
