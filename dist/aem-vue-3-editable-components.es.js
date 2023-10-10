import { ComponentMapping as O } from "@adobe/aem-spa-component-mapping";
import { ComponentMapping as At } from "@adobe/aem-spa-component-mapping";
import { defineComponent as I, inject as b, useSlots as L, useAttrs as A, computed as _, unref as f, openBlock as m, createBlock as y, resolveDynamicComponent as E, normalizeProps as v, mergeProps as S, createElementBlock as C, guardReactiveProps as T, createCommentVNode as B, withCtx as U, ref as Q, onMounted as V, onUnmounted as W, toRefs as H, provide as z, h as j, normalizeClass as G, createElementVNode as J, Fragment as $, renderList as k, createVNode as X } from "vue";
import { AuthoringUtils as N, ModelManager as R, PathUtils as Y } from "@adobe/aem-spa-page-model-manager";
function Z(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var D = { exports: {} };
(function(o, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  function n(s) {
    "@babel/helpers - typeof";
    return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, n(s);
  }
  var a = 47, c = 46, d = function(e) {
    var r = n(e);
    if (r !== "string")
      throw new TypeError("Expected a string, got a ".concat(r));
  }, u = function(e, r) {
    for (var p = "", P = 0, g = -1, w = 0, M, q = 0; q <= e.length; ++q) {
      if (q < e.length)
        M = e.charCodeAt(q);
      else {
        if (M === a)
          break;
        M = a;
      }
      if (M === a) {
        if (!(g === q - 1 || w === 1))
          if (g !== q - 1 && w === 2) {
            if (p.length < 2 || P !== 2 || p.charCodeAt(p.length - 1) !== c || p.charCodeAt(p.length - 2) !== c) {
              if (p.length > 2) {
                var F = p.lastIndexOf("/");
                if (F !== p.length - 1) {
                  F === -1 ? (p = "", P = 0) : (p = p.slice(0, F), P = p.length - 1 - p.lastIndexOf("/")), g = q, w = 0;
                  continue;
                }
              } else if (p.length === 2 || p.length === 1) {
                p = "", P = 0, g = q, w = 0;
                continue;
              }
            }
            r && (p.length > 0 ? p += "/.." : p = "..", P = 2);
          } else
            p.length > 0 ? p += "/" + e.slice(g + 1, q) : p = e.slice(g + 1, q), P = q - g - 1;
        g = q, w = 0;
      } else
        M === c && w !== -1 ? ++w : w = -1;
    }
    return p;
  }, l = function(e) {
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
    var p = r.charCodeAt(0) === a, P = r.charCodeAt(r.length - 1) === a;
    return r = l(r), r = u(r, !p), r.length === 0 && !p && (r = "."), r.length > 0 && P && (r += "/"), p ? "/" + r : r;
  }, i = h;
  t.default = i, o.exports = t.default;
})(D, D.exports);
var K = D.exports;
const tt = /* @__PURE__ */ Z(K), x = {
  getCQPath(o) {
    const { pagePath: t = "", itemPath: n = "", injectPropsOnInit: a } = o;
    let { cqPath: c = "" } = o;
    return a && !c && (c = tt(
      n ? `${t}/jcr:content/${n}` : t
    ), c = c.replace(/^\.$/, "")), c;
  },
  modelToProps(o) {
    const t = Object.getOwnPropertyNames(o), n = {}, a = (c) => {
      const d = c.substring(1);
      return `cq${d.substring(0, 1).toUpperCase()}${d.substring(
        1
      )}`;
    };
    return t.forEach((c) => {
      let d = c;
      d.startsWith(":") && (d = a(d)), n[d] = o[c];
    }), n;
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
    const t = o, { editConfig: n } = t, a = b("isInEditor", N.isInEditor()), c = L(), d = A(), u = _(() => {
      const s = {}, { componentProperties: e } = t;
      return a && (s["data-cq-data-path"] = e.cqPath, n.resourceType && (s["data-cq-resource-type"] = n.resourceType)), s;
    }), l = _(() => {
      var P;
      const s = {}, { componentProperties: e } = t, { appliedCssClassNames: r } = e, p = [];
      return r && p.push(r), (P = t == null ? void 0 : t.containerProps) != null && P.class && p.push(t.containerProps.class), p.length && (s.class = p.join(" ")), s;
    }), h = a && typeof n.isEmpty == "function" && // eslint-disable-next-line vue/no-setup-props-destructure
    n.isEmpty(t.componentProperties), i = _(() => h ? {
      class: "cq-placeholder",
      "data-emptytext": n.emptyLabel
    } : null);
    return (s, e) => {
      var r, p, P, g;
      return !f(a) && o.componentProperties.hasOwnProperty("aemNoDecoration") && o.componentProperties.aemNoDecoration ? (m(), y(E((p = (r = f(c)).default) == null ? void 0 : p.call(r)[0]), v(S({ key: 0 }, { ...f(d) })), null, 16)) : (m(), C("div", v(S({ key: 1 }, { ...u.value, ...l.value })), [
        (m(), y(E((g = (P = f(c)).default) == null ? void 0 : g.call(P)[0]), v(T({
          ...f(d),
          componentProperties: t.componentProperties
        })), null, 16)),
        i.value ? (m(), C("div", v(S({ key: 0 }, i.value)), null, 16)) : B("", !0)
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
    const t = o, n = L(), a = A();
    return (c, d) => (m(), y(et, v(T({
      ...f(a),
      componentProperties: { ...f(a) },
      editConfig: t.editConfig
    })), {
      default: U(() => {
        var u, l;
        return [
          (m(), y(E((l = (u = f(n)).default) == null ? void 0 : l.call(u)[0])))
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
    const t = o, n = L(), a = A(), c = b("isInEditor", N.isInEditor()), d = Q({}), u = () => {
      const { pagePath: s, itemPath: e, injectPropsOnInit: r, cqPath: p } = t;
      return x.getCQPath({
        pagePath: s,
        itemPath: e,
        injectPropsOnInit: r,
        cqPath: p
      });
    }, l = _(() => ({
      ...a,
      cqPath: u(),
      ...d.value
    })), h = (s) => {
      const { pagePath: e, itemPath: r, injectPropsOnInit: p } = t, P = s || t.cqPath || e && x.getCQPath({ pagePath: e, itemPath: r, injectPropsOnInit: p });
      P && R.getData({
        path: P,
        forceReload: t.cqForceReload
      }).then((g) => {
        g && Object.keys(g).length > 0 && (d.value = x.modelToProps(g), p && c && Y.dispatchGlobalCustomEvent(
          "cq-async-content-loaded",
          {}
        ));
      }).catch((g) => {
        console.error(g);
      });
    }, i = h.bind(null, u());
    return V(() => {
      const s = u();
      t.injectPropsOnInit && h(s), R.addListener(s, i);
    }), W(() => {
      R.removeListener(t.cqPath, i);
    }), (s, e) => {
      var r, p;
      return m(), y(E((p = (r = f(n)).default) == null ? void 0 : p.call(r)[0]), v(T(l.value)), null, 16);
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
    const t = o, n = L(), a = A(), { modelConfig: c } = H(t), d = a.cqForceReload || c.value.forceReload, { injectPropsOnInit: u } = c.value;
    return (l, h) => (m(), y(nt, S({
      "cq-force-reload": f(d),
      "inject-props-on-init": f(u)
    }, { ...f(a) }), {
      default: U(() => {
        var i, s;
        return [
          (m(), y(E((s = (i = f(n)).default) == null ? void 0 : s.call(i)[0])))
        ];
      }),
      _: 1
    }, 16, ["cq-force-reload", "inject-props-on-init"]));
  }
}), st = /* @__PURE__ */ I({
  inheritAttrs: !1,
  __name: "ContextProvider",
  setup(o) {
    const t = L(), n = A(), a = b("componentMapping", new O()), c = b("isInEditor", N.isInEditor());
    return z("isInEditor", c), z("componentMapping", a), (d, u) => {
      var l, h;
      return m(), y(E((h = (l = f(t)).default) == null ? void 0 : h.call(l)[0]), v(T({ ...f(n) })), null, 16);
    };
  }
}), at = (o) => j(st, {}, () => [j(o)]), ct = (o, t) => j(rt, { modelConfig: t }, () => [j(o)]), pt = (o, t) => j(ot, { editConfig: t }, () => [j(o)]), it = (o, t, n) => {
  const {
    injectPropsOnInit: a = !0,
    forceReload: c = !1,
    ...d
  } = n || {}, u = {
    injectPropsOnInit: a,
    forceReload: c,
    ...d
  };
  let l = o;
  return l = at(
    ct(pt(l, t), u)
  ), l;
}, lt = O.map, dt = O.get;
O.map = function(t, n, a = {
  isEmpty: () => !1
}, c = {}) {
  const { injectPropsOnInit: d = !1, ...u } = c || {}, l = it(n, a, {
    injectPropsOnInit: d,
    ...u
  });
  return lt.call(O, t, l), l;
};
O.get = dt;
const vt = (o) => (t, n, a = {}) => (
  // @ts-ignore
  O.map(o, t, n, a)
), bt = (o, t, n, a) => {
  let c = [];
  o && (c = [o]), t && c.push(t);
  const d = n == null ? void 0 : n.class;
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
    return (n, a) => (m(), C("div", {
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
    const t = o, n = _(
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
          "data-text": n.value,
          class: "aem-AllowedComponent--title"
        }, null, 8, ht),
        (m(!0), C($, null, k(t.components, (u) => (m(), y(ut, {
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
    return (n, a) => (m(), C("div", {
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
    const t = o, n = typeof t.isInEditor < "u" ? t.isInEditor : b("isInEditor", N.isInEditor()), a = b("componentMapping", new O()), c = (i) => {
      var s;
      return ((s = t.cqPath) == null ? void 0 : s.length) > 0 ? `${t.cqPath}/${i}` : i;
    }, d = (i, s, e) => {
      const r = c(e);
      return j(i, {
        ...s,
        cqPath: r,
        containerProps: typeof t.getItemComponentProps == "function" ? t.getItemComponentProps(e) : {}
      });
    }, u = _(() => {
      let i = {};
      return typeof t.getContainerProps == "function" ? i = t.getContainerProps() : (i = {
        class: "aem-container"
      }, n && (i["data-cq-data-path"] = t.cqPath)), i;
    }), l = _(() => {
      const i = [];
      return Object.keys(t.cqItems).length > 0 && t.cqItemsOrder.length > 0 && t.cqItemsOrder.forEach((s) => {
        const e = x.modelToProps(
          t.cqItems[s]
        );
        if (e && typeof e.cqType < "u") {
          const r = a.get(e.cqType);
          r && i.push(
            d(r, e, s)
          );
        }
      }), i;
    }), h = _(() => typeof t.getPlaceholderProps == "function" ? t.getPlaceholderProps() : {
      cqPath: t.cqPath,
      placeholderClassNames: "new section"
    });
    return (i, s) => !f(n) && t.aemNoDecoration ? (m(!0), C($, { key: 0 }, k(l.value, (e) => (m(), y(E(e), {
      key: e.toString()
    }))), 128)) : (m(), C("div", v(S({ key: 1 }, { ...u.value })), [
      (m(!0), C($, null, k(l.value, (e) => (m(), y(E(e), {
        key: e.toString()
      }))), 128)),
      f(n) ? (m(), y(gt, v(S({ key: 0 }, h.value)), null, 16)) : B("", !0)
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
    const t = o, n = typeof t.isInEditor < "u" ? t.isInEditor : b("isInEditor", N.isInEditor()), a = _(() => typeof t.getPlaceholderProps == "function" ? t.getPlaceholderProps() : {
      cqPath: t.cqPath,
      placeholderClassNames: "new section"
    }), c = A();
    return (d, u) => {
      var l;
      return m(), C($, null, [
        f(n) && t.allowedComponents && ((l = t.allowedComponents) != null && l.applicable) ? (m(), y(ft, {
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
    const t = o, n = b("isInEditor", N.isInEditor()), a = b("componentMapping", new O()), c = (i) => {
      var s;
      return ((s = t.cqPath) == null ? void 0 : s.length) > 0 ? `${t.cqPath}/jcr:content/${i}` : i;
    }, d = (i, s, e) => {
      const r = c(e);
      return j(i, {
        ...s,
        cqPath: r,
        containerProps: {}
      });
    }, u = _(() => {
      const i = [];
      return Object.keys(t.cqItems).length > 0 && t.cqItemsOrder.length > 0 && t.cqItemsOrder.forEach((s) => {
        const e = x.modelToProps(
          t.cqItems[s]
        );
        if (e && typeof e.cqType < "u") {
          const r = a.get(e.cqType);
          r && i.push(
            d(r, e, s)
          );
        }
      }), i;
    }), l = _(() => {
      const i = [];
      return Object.keys(t.cqChildren).length === 0 || Object.keys(t.cqChildren).forEach((s) => {
        const e = x.modelToProps(
          t.cqChildren[s]
        );
        if (e && typeof e.cqType < "u") {
          const r = a.get(e.cqType);
          r && i.push(
            j(r, { ...e, cqPath: e.cqPath })
          );
        }
      }), i;
    }), h = _(() => {
      const i = {
        class: "aem-page"
      };
      return n && (i["data-cq-data-path"] = t.cqPath), i;
    });
    return (i, s) => (m(), C("div", v(T(h.value)), [
      (m(!0), C($, null, k(u.value, (e) => (m(), y(E(e), {
        key: e.toString()
      }))), 128)),
      (m(!0), C($, null, k(l.value, (e) => (m(), y(E(e), {
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
    const t = o, n = A(), a = typeof t.isInEditor < "u" ? t.isInEditor : b("isInEditor", N.isInEditor()), c = () => {
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
    return (l, h) => (m(), y(Ct, S({
      "cq-path": t.cqPath,
      "get-container-props": c,
      "get-item-component-props": u,
      "get-placeholder-props": d,
      "is-in-editor": f(a)
    }, { ...f(n) }), null, 16, ["cq-path", "is-in-editor"]));
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
