import { ComponentMapping as E } from "@adobe/aem-spa-component-mapping";
import { ComponentMapping as At } from "@adobe/aem-spa-component-mapping";
import { defineComponent as q, inject as v, useSlots as L, useAttrs as A, computed as _, unref as f, openBlock as u, createBlock as P, resolveDynamicComponent as b, normalizeProps as I, mergeProps as S, createElementBlock as y, guardReactiveProps as T, createCommentVNode as B, withCtx as U, ref as Q, onMounted as V, onUnmounted as W, toRefs as H, provide as z, h as O, normalizeClass as G, createElementVNode as J, Fragment as $, renderList as k, createVNode as X } from "vue";
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
  var a = 47, c = 46, l = function(e) {
    var r = s(e);
    if (r !== "string")
      throw new TypeError("Expected a string, got a ".concat(r));
  }, h = function(e, r) {
    for (var d = "", g = 0, j = -1, w = 0, M, C = 0; C <= e.length; ++C) {
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
            if (d.length < 2 || g !== 2 || d.charCodeAt(d.length - 1) !== c || d.charCodeAt(d.length - 2) !== c) {
              if (d.length > 2) {
                var F = d.lastIndexOf("/");
                if (F !== d.length - 1) {
                  F === -1 ? (d = "", g = 0) : (d = d.slice(0, F), g = d.length - 1 - d.lastIndexOf("/")), j = C, w = 0;
                  continue;
                }
              } else if (d.length === 2 || d.length === 1) {
                d = "", g = 0, j = C, w = 0;
                continue;
              }
            }
            r && (d.length > 0 ? d += "/.." : d = "..", g = 2);
          } else
            d.length > 0 ? d += "/" + e.slice(j + 1, C) : d = e.slice(j + 1, C), g = C - j - 1;
        j = C, w = 0;
      } else
        M === c && w !== -1 ? ++w : w = -1;
    }
    return d;
  }, p = function(e) {
    try {
      return decodeURIComponent(e);
    } catch {
      return e;
    }
  }, m = function(e) {
    l(e);
    var r = e;
    if (r.length === 0)
      return ".";
    var d = r.charCodeAt(0) === a, g = r.charCodeAt(r.length - 1) === a;
    return r = p(r), r = h(r, !d), r.length === 0 && !d && (r = "."), r.length > 0 && g && (r += "/"), d ? "/" + r : r;
  }, n = m;
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
      const l = c.substring(1);
      return `cq${l.substring(0, 1).toUpperCase()}${l.substring(
        1
      )}`;
    };
    return t.forEach((c) => {
      let l = c;
      l.startsWith(":") && (l = a(l)), s[l] = o[c];
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
    const t = o, s = v("isInEditor", N.isInEditor()), a = L(), c = A(), l = _(() => {
      const m = {}, { componentProperties: n } = t;
      return s && (m["data-cq-data-path"] = n.cqPath, t.editConfig.resourceType && (m["data-cq-resource-type"] = t.editConfig.resourceType)), m;
    }), h = _(() => {
      var r;
      const m = {}, { componentProperties: n } = t, { appliedCssClassNames: i } = n, e = [];
      return i && e.push(i), (r = t == null ? void 0 : t.containerProps) != null && r.class && e.push(t.containerProps.class), e.length && (m.class = e.join(" ")), m;
    }), p = _(() => s && typeof t.editConfig.isEmpty == "function" && t.editConfig.isEmpty(t.componentProperties) ? {
      class: "cq-placeholder",
      "data-emptytext": t.editConfig.emptyLabel
    } : null);
    return (m, n) => {
      var i, e, r, d;
      return !f(s) && t.componentProperties.hasOwnProperty("aemNoDecoration") && t.componentProperties.aemNoDecoration ? (u(), P(b((e = (i = f(a)).default) == null ? void 0 : e.call(i)[0]), I(S({ key: 0 }, { ...f(c) })), null, 16)) : (u(), y("div", I(S({ key: 1 }, { ...l.value, ...h.value })), [
        (u(), P(b((d = (r = f(a)).default) == null ? void 0 : d.call(r)[0]), I(T({
          ...f(c),
          componentProperties: t.componentProperties
        })), null, 16)),
        p.value ? (u(), y("div", I(S({ key: 0 }, p.value)), null, 16)) : B("", !0)
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
    return (c, l) => (u(), P(et, I(T({
      ...f(a),
      componentProperties: { ...f(a) },
      editConfig: t.editConfig
    })), {
      default: U(() => {
        var h, p;
        return [
          (u(), P(b((p = (h = f(s)).default) == null ? void 0 : p.call(h)[0])))
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
    const t = o, s = L(), a = A(), c = v("isInEditor", N.isInEditor()), l = Q(a), h = () => {
      const { pagePath: n, itemPath: i, injectPropsOnInit: e, cqPath: r } = t;
      return x.getCQPath({
        pagePath: n,
        itemPath: i,
        injectPropsOnInit: e,
        cqPath: r
      });
    }, p = (n) => {
      const { pagePath: i, itemPath: e, injectPropsOnInit: r } = t, d = n || t.cqPath || i && x.getCQPath({ pagePath: i, itemPath: e, injectPropsOnInit: r });
      d && R.getData({
        path: d,
        forceReload: t.cqForceReload
      }).then((g) => {
        g && Object.keys(g).length > 0 && (Object.assign(l.value, x.modelToProps(g)), r && c && Y.dispatchGlobalCustomEvent(
          "cq-async-content-loaded",
          {}
        ));
      }).catch((g) => {
        console.error(g);
      });
    }, m = p.bind(null, h());
    return V(() => {
      const n = h();
      t.injectPropsOnInit && p(n), R.addListener(n, m);
    }), W(() => {
      R.removeListener(t.cqPath, m);
    }), (n, i) => {
      var e, r;
      return u(), P(b((r = (e = f(s)).default) == null ? void 0 : r.call(e)[0]), I(T({
        cqPath: h(),
        ...l.value
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
    const t = o, s = L(), a = A(), { modelConfig: c } = H(t), l = a.cqForceReload || c.value.forceReload, { injectPropsOnInit: h } = c.value;
    return (p, m) => (u(), P(nt, S({
      "cq-force-reload": f(l),
      "inject-props-on-init": f(h)
    }, { ...f(a) }), {
      default: U(() => {
        var n, i;
        return [
          (u(), P(b((i = (n = f(s)).default) == null ? void 0 : i.call(n)[0])))
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
    return z("isInEditor", c), z("componentMapping", a), (l, h) => {
      var p, m;
      return u(), P(b((m = (p = f(t)).default) == null ? void 0 : m.call(p)[0]), I(T({ ...f(s) })), null, 16);
    };
  }
}), at = (o) => O(st, {}, () => [O(o)]), ct = (o, t) => O(rt, { modelConfig: t }, () => [O(o)]), pt = (o, t) => O(ot, { editConfig: t }, () => [O(o)]), it = (o, t, s) => {
  const {
    injectPropsOnInit: a = !0,
    forceReload: c = !1,
    ...l
  } = s || {}, h = {
    injectPropsOnInit: a,
    forceReload: c,
    ...l
  };
  let p = o;
  return p = at(
    ct(pt(p, t), h)
  ), p;
}, lt = E.map, dt = E.get;
E.map = function(t, s, a = {
  isEmpty: () => !1
}, c = {}) {
  const { injectPropsOnInit: l = !1, ...h } = c || {}, p = it(s, a, {
    injectPropsOnInit: l,
    ...h
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
  const l = s == null ? void 0 : s.class;
  return l && !a && c.push(l), c;
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
    return (s, a) => (u(), y("div", {
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
      var l;
      return u(), y("div", {
        class: G([
          "aem-AllowedComponent--list",
          (l = t.placeholderProps) == null ? void 0 : l.placeholderClassNames
        ])
      }, [
        J("div", {
          "data-text": s.value,
          class: "aem-AllowedComponent--title"
        }, null, 8, ht),
        (u(!0), y($, null, k(t.components, (h) => (u(), P(ut, {
          key: h.path,
          "empty-label": h.title,
          path: h.path
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
    return (s, a) => (u(), y("div", {
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
    }, l = (n, i, e) => {
      const r = c(e);
      return O(n, {
        ...i,
        cqPath: r,
        containerProps: typeof t.getItemComponentProps == "function" ? t.getItemComponentProps(e) : {}
      });
    }, h = _(() => {
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
            l(r, e, i)
          );
        }
      }), n;
    }), m = _(() => typeof t.getPlaceholderProps == "function" ? t.getPlaceholderProps() : {
      cqPath: t.cqPath,
      placeholderClassNames: "new section"
    });
    return (n, i) => !f(s) && t.aemNoDecoration ? (u(!0), y($, { key: 0 }, k(p.value, (e) => (u(), P(b(e), {
      key: e.toString()
    }))), 128)) : (u(), y("div", I(S({ key: 1 }, { ...h.value })), [
      (u(!0), y($, null, k(p.value, (e) => (u(), P(b(e), {
        key: e.toString()
      }))), 128)),
      f(s) ? (u(), P(gt, I(S({ key: 0 }, m.value)), null, 16)) : B("", !0)
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
    return (l, h) => {
      var p;
      return u(), y($, null, [
        f(s) && t.allowedComponents && ((p = t.allowedComponents) != null && p.applicable) ? (u(), P(ft, {
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
    }, l = (n, i, e) => {
      const r = c(e);
      return O(n, {
        ...i,
        cqPath: r,
        containerProps: {}
      });
    }, h = _(() => {
      const n = [];
      return Object.keys(t.cqItems).length > 0 && t.cqItemsOrder.length > 0 && t.cqItemsOrder.forEach((i) => {
        const e = x.modelToProps(
          t.cqItems[i]
        );
        if (e && typeof e.cqType < "u") {
          const r = a.get(e.cqType);
          r && n.push(
            l(r, e, i)
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
    }), m = _(() => {
      const n = {
        class: "aem-page"
      };
      return s && (n["data-cq-data-path"] = t.cqPath), n;
    });
    return (n, i) => (u(), y("div", I(T(m.value)), [
      (u(!0), y($, null, k(h.value, (e) => (u(), P(b(e), {
        key: e.toString()
      }))), 128)),
      (u(!0), y($, null, k(p.value, (e) => (u(), P(b(e), {
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
      const p = {}, m = ["aem-container"];
      return t.gridClassNames && m.push(t.gridClassNames), p.class = m.join(" "), a && (p["data-cq-data-path"] = t.cqPath), p;
    }, l = () => {
      const p = {
        cqPath: t.cqPath
      }, m = [
        "new",
        "section",
        "aem-Grid-newComponent"
      ];
      return p.placeholderClassNames = m.join(" "), p;
    }, h = (p) => {
      const m = {};
      return t.columnClassNames && t.columnClassNames[p] && (m.class = t.columnClassNames[p]), m;
    };
    return (p, m) => (u(), P(Ct, S({
      "cq-path": t.cqPath,
      "get-container-props": c,
      "get-item-component-props": h,
      "get-placeholder-props": l,
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
