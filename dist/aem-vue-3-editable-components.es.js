import { ComponentMapping as O } from "@adobe/aem-spa-component-mapping";
import { ComponentMapping as At } from "@adobe/aem-spa-component-mapping";
import { defineComponent as I, inject as b, useSlots as L, useAttrs as A, computed as _, unref as f, openBlock as m, createBlock as P, resolveDynamicComponent as E, normalizeProps as v, mergeProps as S, createElementBlock as C, guardReactiveProps as T, createCommentVNode as B, withCtx as U, ref as Q, onMounted as V, onUnmounted as W, toRefs as H, provide as z, h as j, normalizeClass as G, createElementVNode as J, Fragment as $, renderList as k, createVNode as X } from "vue";
import { AuthoringUtils as N, ModelManager as R, PathUtils as Y } from "@adobe/aem-spa-page-model-manager";
function Z(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var D = { exports: {} };
(function(o, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  function s(p) {
    "@babel/helpers - typeof";
    return s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, s(p);
  }
  var a = 47, c = 46, d = function(e) {
    var n = s(e);
    if (n !== "string")
      throw new TypeError("Expected a string, got a ".concat(n));
  }, u = function(e, n) {
    for (var i = "", g = 0, y = -1, w = 0, M, q = 0; q <= e.length; ++q) {
      if (q < e.length)
        M = e.charCodeAt(q);
      else {
        if (M === a)
          break;
        M = a;
      }
      if (M === a) {
        if (!(y === q - 1 || w === 1))
          if (y !== q - 1 && w === 2) {
            if (i.length < 2 || g !== 2 || i.charCodeAt(i.length - 1) !== c || i.charCodeAt(i.length - 2) !== c) {
              if (i.length > 2) {
                var F = i.lastIndexOf("/");
                if (F !== i.length - 1) {
                  F === -1 ? (i = "", g = 0) : (i = i.slice(0, F), g = i.length - 1 - i.lastIndexOf("/")), y = q, w = 0;
                  continue;
                }
              } else if (i.length === 2 || i.length === 1) {
                i = "", g = 0, y = q, w = 0;
                continue;
              }
            }
            n && (i.length > 0 ? i += "/.." : i = "..", g = 2);
          } else
            i.length > 0 ? i += "/" + e.slice(y + 1, q) : i = e.slice(y + 1, q), g = q - y - 1;
        y = q, w = 0;
      } else
        M === c && w !== -1 ? ++w : w = -1;
    }
    return i;
  }, l = function(e) {
    try {
      return decodeURIComponent(e);
    } catch {
      return e;
    }
  }, h = function(e) {
    d(e);
    var n = e;
    if (n.length === 0)
      return ".";
    var i = n.charCodeAt(0) === a, g = n.charCodeAt(n.length - 1) === a;
    return n = l(n), n = u(n, !i), n.length === 0 && !i && (n = "."), n.length > 0 && g && (n += "/"), i ? "/" + n : n;
  }, r = h;
  t.default = r, o.exports = t.default;
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
}, et = /* @__PURE__ */ I({
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
    const t = o, s = b("isInEditor", N.isInEditor()), a = L(), c = A(), d = _(() => {
      const r = {}, { componentProperties: p } = t;
      return s && (r["data-cq-data-path"] = p.cqPath, t.editConfig.resourceType && (r["data-cq-resource-type"] = t.editConfig.resourceType)), r;
    }), u = _(() => {
      var i;
      const r = {}, { componentProperties: p } = t, { appliedCssClassNames: e } = p, n = [];
      return e && n.push(e), (i = t == null ? void 0 : t.containerProps) != null && i.class && n.push(t.containerProps.class), n.length && (r.class = n.join(" ")), r;
    }), l = s && typeof t.editConfig.isEmpty == "function" && t.editConfig.isEmpty(t.componentProperties), h = _(() => l ? {
      class: "cq-placeholder",
      "data-emptytext": t.editConfig.emptyLabel
    } : null);
    return (r, p) => {
      var e, n, i, g;
      return !f(s) && t.componentProperties.hasOwnProperty("aemNoDecoration") && t.componentProperties.aemNoDecoration ? (m(), P(E((n = (e = f(a)).default) == null ? void 0 : n.call(e)[0]), v(S({ key: 0 }, { ...f(c) })), null, 16)) : (m(), C("div", v(S({ key: 1 }, { ...d.value, ...u.value })), [
        (m(), P(E((g = (i = f(a)).default) == null ? void 0 : g.call(i)[0]), v(T({
          ...f(c),
          componentProperties: t.componentProperties
        })), null, 16)),
        h.value ? (m(), C("div", v(S({ key: 0 }, h.value)), null, 16)) : B("", !0)
      ], 16));
    };
  }
}), ot = /* @__PURE__ */ I({
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
    return (c, d) => (m(), P(et, v(T({
      ...f(a),
      componentProperties: { ...f(a) },
      editConfig: t.editConfig
    })), {
      default: U(() => {
        var u, l;
        return [
          (m(), P(E((l = (u = f(s)).default) == null ? void 0 : l.call(u)[0])))
        ];
      }),
      _: 1
    }, 16));
  }
}), nt = /* @__PURE__ */ I({
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
    const t = o, s = L(), a = A(), c = b("isInEditor", N.isInEditor()), d = Q({}), u = () => {
      const { pagePath: p, itemPath: e, injectPropsOnInit: n, cqPath: i } = t;
      return x.getCQPath({
        pagePath: p,
        itemPath: e,
        injectPropsOnInit: n,
        cqPath: i
      });
    }, l = _(() => ({
      ...a,
      cqPath: u(),
      ...d.value
    })), h = (p) => {
      const { pagePath: e, itemPath: n, injectPropsOnInit: i } = t, g = p || t.cqPath || e && x.getCQPath({ pagePath: e, itemPath: n, injectPropsOnInit: i });
      g && R.getData({
        path: g,
        forceReload: t.cqForceReload
      }).then((y) => {
        y && Object.keys(y).length > 0 && (d.value = x.modelToProps(y), i && c && Y.dispatchGlobalCustomEvent(
          "cq-async-content-loaded",
          {}
        ));
      }).catch((y) => {
        console.error(y);
      });
    }, r = h.bind(null, u());
    return V(() => {
      const p = u();
      t.injectPropsOnInit && h(p), R.addListener(p, r);
    }), W(() => {
      R.removeListener(t.cqPath, r);
    }), (p, e) => {
      var n, i;
      return m(), P(E((i = (n = f(s)).default) == null ? void 0 : i.call(n)[0]), v(T(l.value)), null, 16);
    };
  }
}), rt = /* @__PURE__ */ I({
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
    return (l, h) => (m(), P(nt, S({
      "cq-force-reload": f(d),
      "inject-props-on-init": f(u)
    }, { ...f(a) }), {
      default: U(() => {
        var r, p;
        return [
          (m(), P(E((p = (r = f(s)).default) == null ? void 0 : p.call(r)[0])))
        ];
      }),
      _: 1
    }, 16, ["cq-force-reload", "inject-props-on-init"]));
  }
}), st = /* @__PURE__ */ I({
  inheritAttrs: !1,
  __name: "ContextProvider",
  setup(o) {
    const t = L(), s = A(), a = b("componentMapping", new O()), c = b("isInEditor", N.isInEditor());
    return z("isInEditor", c), z("componentMapping", a), (d, u) => {
      var l, h;
      return m(), P(E((h = (l = f(t)).default) == null ? void 0 : h.call(l)[0]), v(T({ ...f(s) })), null, 16);
    };
  }
}), at = (o) => j(st, {}, () => [j(o)]), ct = (o, t) => j(rt, { modelConfig: t }, () => [j(o)]), pt = (o, t) => j(ot, { editConfig: t }, () => [j(o)]), it = (o, t, s) => {
  const {
    injectPropsOnInit: a = !0,
    forceReload: c = !1,
    ...d
  } = s || {}, u = {
    injectPropsOnInit: a,
    forceReload: c,
    ...d
  };
  let l = o;
  return l = at(
    ct(pt(l, t), u)
  ), l;
}, lt = O.map, dt = O.get;
O.map = function(t, s, a = {
  isEmpty: () => !1
}, c = {}) {
  const { injectPropsOnInit: d = !1, ...u } = c || {}, l = it(s, a, {
    injectPropsOnInit: d,
    ...u
  });
  return lt.call(O, t, l), l;
};
O.get = dt;
const vt = (o) => (t, s, a = {}) => (
  // @ts-ignore
  O.map(o, t, s, a)
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
}), mt = ["data-cq-data-path", "data-emptytext"], ut = /* @__PURE__ */ I({
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
    return (s, a) => (m(), C("div", {
      "data-cq-data-path": t.path,
      "data-emptytext": t.emptyLabel,
      class: "aem-AllowedComponent--component cq-placeholder placeholder"
    }, null, 8, mt));
  }
}), ht = ["data-text"], ft = /* @__PURE__ */ I({
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
      return m(), C("div", {
        class: G([
          "aem-AllowedComponent--list",
          (d = t.placeholderProps) == null ? void 0 : d.placeholderClassNames
        ])
      }, [
        J("div", {
          "data-text": s.value,
          class: "aem-AllowedComponent--title"
        }, null, 8, ht),
        (m(!0), C($, null, k(t.components, (u) => (m(), P(ut, {
          key: u.path,
          "empty-label": u.title,
          path: u.path
        }, null, 8, ["empty-label", "path"]))), 128))
      ], 2);
    };
  }
}), Pt = ["data-cq-data-path"], gt = /* @__PURE__ */ I({
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
    return (s, a) => (m(), C("div", {
      class: G(t.placeholderClassNames),
      "data-cq-data-path": `${t.cqPath}/*`
    }, null, 10, Pt));
  }
}), yt = /* @__PURE__ */ I({
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
    const t = o, s = typeof t.isInEditor < "u" ? t.isInEditor : b("isInEditor", N.isInEditor()), a = b("componentMapping", new O()), c = (r) => {
      var p;
      return ((p = t.cqPath) == null ? void 0 : p.length) > 0 ? `${t.cqPath}/${r}` : r;
    }, d = (r, p, e) => {
      const n = c(e);
      return j(r, {
        ...p,
        cqPath: n,
        containerProps: typeof t.getItemComponentProps == "function" ? t.getItemComponentProps(e) : {}
      });
    }, u = _(() => {
      let r = {};
      return typeof t.getContainerProps == "function" ? r = t.getContainerProps() : (r = {
        class: "aem-container"
      }, s && (r["data-cq-data-path"] = t.cqPath)), r;
    }), l = _(() => {
      const r = [];
      return Object.keys(t.cqItems).length > 0 && t.cqItemsOrder.length > 0 && t.cqItemsOrder.forEach((p) => {
        const e = x.modelToProps(
          t.cqItems[p]
        );
        if (e && typeof e.cqType < "u") {
          const n = a.get(e.cqType);
          n && r.push(
            d(n, e, p)
          );
        }
      }), r;
    }), h = _(() => typeof t.getPlaceholderProps == "function" ? t.getPlaceholderProps() : {
      cqPath: t.cqPath,
      placeholderClassNames: "new section"
    });
    return (r, p) => !f(s) && t.aemNoDecoration ? (m(!0), C($, { key: 0 }, k(l.value, (e) => (m(), P(E(e), {
      key: e.toString()
    }))), 128)) : (m(), C("div", v(S({ key: 1 }, { ...u.value })), [
      (m(!0), C($, null, k(l.value, (e) => (m(), P(E(e), {
        key: e.toString()
      }))), 128)),
      f(s) ? (m(), P(gt, v(S({ key: 0 }, h.value)), null, 16)) : B("", !0)
    ], 16));
  }
}), Ct = /* @__PURE__ */ I({
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
    const t = o, s = typeof t.isInEditor < "u" ? t.isInEditor : b("isInEditor", N.isInEditor()), a = _(() => typeof t.getPlaceholderProps == "function" ? t.getPlaceholderProps() : {
      cqPath: t.cqPath,
      placeholderClassNames: "new section"
    }), c = A();
    return (d, u) => {
      var l;
      return m(), C($, null, [
        f(s) && t.allowedComponents && ((l = t.allowedComponents) != null && l.applicable) ? (m(), P(ft, {
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
}), Ot = /* @__PURE__ */ I({
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
    const t = o, s = b("isInEditor", N.isInEditor()), a = b("componentMapping", new O()), c = (r) => {
      var p;
      return ((p = t.cqPath) == null ? void 0 : p.length) > 0 ? `${t.cqPath}/jcr:content/${r}` : r;
    }, d = (r, p, e) => {
      const n = c(e);
      return j(r, {
        ...p,
        cqPath: n,
        containerProps: {}
      });
    }, u = _(() => {
      const r = [];
      return Object.keys(t.cqItems).length > 0 && t.cqItemsOrder.length > 0 && t.cqItemsOrder.forEach((p) => {
        const e = x.modelToProps(
          t.cqItems[p]
        );
        if (e && typeof e.cqType < "u") {
          const n = a.get(e.cqType);
          n && r.push(
            d(n, e, p)
          );
        }
      }), r;
    }), l = _(() => {
      const r = [];
      return Object.keys(t.cqChildren).length === 0 || Object.keys(t.cqChildren).forEach((p) => {
        const e = x.modelToProps(
          t.cqChildren[p]
        );
        if (e && typeof e.cqType < "u") {
          const n = a.get(e.cqType);
          n && r.push(
            j(n, { ...e, cqPath: e.cqPath })
          );
        }
      }), r;
    }), h = _(() => {
      const r = {
        class: "aem-page"
      };
      return s && (r["data-cq-data-path"] = t.cqPath), r;
    });
    return (r, p) => (m(), C("div", v(T(h.value)), [
      (m(!0), C($, null, k(u.value, (e) => (m(), P(E(e), {
        key: e.toString()
      }))), 128)),
      (m(!0), C($, null, k(l.value, (e) => (m(), P(E(e), {
        key: e.toString()
      }))), 128))
    ], 16));
  }
}), jt = /* @__PURE__ */ I({
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
    const t = o, s = A(), a = typeof t.isInEditor < "u" ? t.isInEditor : b("isInEditor", N.isInEditor()), c = () => {
      const l = {}, h = ["aem-container"];
      return t.gridClassNames && h.push(t.gridClassNames), l.class = h.join(" "), a && (l["data-cq-data-path"] = t.cqPath), l;
    }, d = () => {
      const l = {
        cqPath: t.cqPath
      }, h = [
        "new",
        "section",
        "aem-Grid-newComponent"
      ];
      return l.placeholderClassNames = h.join(" "), l;
    }, u = (l) => {
      const h = {};
      return t.columnClassNames && t.columnClassNames[l] && (h.class = t.columnClassNames[l]), h;
    };
    return (l, h) => (m(), P(Ct, S({
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
