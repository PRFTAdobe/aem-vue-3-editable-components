import { ComponentMapping as E } from "@adobe/aem-spa-component-mapping";
import { ComponentMapping as Ae } from "@adobe/aem-spa-component-mapping";
import { defineComponent as q, inject as v, useSlots as T, useAttrs as A, computed as _, unref as f, openBlock as u, createBlock as P, resolveDynamicComponent as b, normalizeProps as I, mergeProps as S, createElementBlock as y, guardReactiveProps as L, createCommentVNode as B, withCtx as U, ref as Q, onMounted as H, onUnmounted as V, toRefs as W, provide as z, h as O, normalizeClass as G, createElementVNode as J, Fragment as $, renderList as k, createVNode as X } from "vue";
import { AuthoringUtils as N, ModelManager as R, PathUtils as Y } from "@adobe/aem-spa-page-model-manager";
function Z(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var D = { exports: {} };
(function(n, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  function r(s) {
    "@babel/helpers - typeof";
    return r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t;
    } : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, r(s);
  }
  var c = 47, a = 46, l = function(t) {
    var o = r(t);
    if (o !== "string")
      throw new TypeError("Expected a string, got a ".concat(o));
  }, h = function(t, o) {
    for (var p = "", g = 0, j = -1, w = 0, M, C = 0; C <= t.length; ++C) {
      if (C < t.length)
        M = t.charCodeAt(C);
      else {
        if (M === c)
          break;
        M = c;
      }
      if (M === c) {
        if (!(j === C - 1 || w === 1))
          if (j !== C - 1 && w === 2) {
            if (p.length < 2 || g !== 2 || p.charCodeAt(p.length - 1) !== a || p.charCodeAt(p.length - 2) !== a) {
              if (p.length > 2) {
                var F = p.lastIndexOf("/");
                if (F !== p.length - 1) {
                  F === -1 ? (p = "", g = 0) : (p = p.slice(0, F), g = p.length - 1 - p.lastIndexOf("/")), j = C, w = 0;
                  continue;
                }
              } else if (p.length === 2 || p.length === 1) {
                p = "", g = 0, j = C, w = 0;
                continue;
              }
            }
            o && (p.length > 0 ? p += "/.." : p = "..", g = 2);
          } else
            p.length > 0 ? p += "/" + t.slice(j + 1, C) : p = t.slice(j + 1, C), g = C - j - 1;
        j = C, w = 0;
      } else
        M === a && w !== -1 ? ++w : w = -1;
    }
    return p;
  }, i = function(t) {
    try {
      return decodeURIComponent(t);
    } catch {
      return t;
    }
  }, m = function(t) {
    l(t);
    var o = t;
    if (o.length === 0)
      return ".";
    var p = o.charCodeAt(0) === c, g = o.charCodeAt(o.length - 1) === c;
    return o = i(o), o = h(o, !p), o.length === 0 && !p && (o = "."), o.length > 0 && g && (o += "/"), p ? "/" + o : o;
  }, d = m;
  e.default = d, n.exports = e.default;
})(D, D.exports);
var K = D.exports;
const ee = /* @__PURE__ */ Z(K), x = {
  getCQPath(n) {
    const { pagePath: e = "", itemPath: r = "", injectPropsOnInit: c } = n;
    let { cqPath: a = "" } = n;
    return c && !a && (a = ee(
      r ? `${e}/jcr:content/${r}` : e
    ), a = a.replace(/^\.$/, "")), a;
  },
  modelToProps(n) {
    const e = Object.getOwnPropertyNames(n), r = {}, c = (a) => {
      const l = a.substring(1);
      return `cq${l.substring(0, 1).toUpperCase()}${l.substring(
        1
      )}`;
    };
    return e.forEach((a) => {
      let l = a;
      l.startsWith(":") && (l = c(l)), r[l] = n[a];
    }), r;
  }
}, te = /* @__PURE__ */ q({
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
  setup(n) {
    const e = n, r = v("isInEditor", N.isInEditor()), c = T(), a = A(), l = _(() => {
      const m = {}, { componentProperties: d } = e;
      return r && (m["data-cq-data-path"] = d.cqPath, e.editConfig.resourceType && (m["data-cq-resource-type"] = e.editConfig.resourceType)), m;
    }), h = _(() => {
      var o;
      const m = {}, { componentProperties: d } = e, { appliedCssClassNames: s } = d, t = [];
      return s && t.push(s), (o = e == null ? void 0 : e.containerProps) != null && o.class && t.push(e.containerProps.class), t.length && (m.class = t.join(" ")), m;
    }), i = _(() => r && typeof e.editConfig.isEmpty == "function" && e.editConfig.isEmpty(e.componentProperties) ? {
      class: "cq-placeholder",
      "data-emptytext": e.editConfig.emptyLabel
    } : null);
    return (m, d) => {
      var s, t, o, p;
      return !f(r) && e.componentProperties.hasOwnProperty("aemNoDecoration") && e.componentProperties.aemNoDecoration || e.componentProperties.hasOwnProperty("cqHierarchyType") && e.componentProperties.cqHierarchyType === "page" ? (u(), P(b((t = (s = f(c)).default) == null ? void 0 : t.call(s)[0]), I(S({ key: 0 }, { ...f(a) })), null, 16)) : (u(), y("div", I(S({ key: 1 }, { ...l.value, ...h.value })), [
        (u(), P(b((p = (o = f(c)).default) == null ? void 0 : p.call(o)[0]), I(L({
          ...f(a),
          componentProperties: e.componentProperties
        })), null, 16)),
        i.value ? (u(), y("div", I(S({ key: 0 }, i.value)), null, 16)) : B("", !0)
      ], 16));
    };
  }
}), oe = /* @__PURE__ */ q({
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
  setup(n) {
    const e = n, r = T(), c = A();
    return (a, l) => (u(), P(te, I(L({
      ...f(c),
      componentProperties: { ...f(c) },
      editConfig: e.editConfig
    })), {
      default: U(() => {
        var h, i;
        return [
          (u(), P(b((i = (h = f(r)).default) == null ? void 0 : i.call(h)[0])))
        ];
      }),
      _: 1
    }, 16));
  }
}), ne = /* @__PURE__ */ q({
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
  setup(n) {
    const e = n, r = T(), c = A(), a = v("isInEditor", N.isInEditor()), l = Q(c), h = () => {
      const { pagePath: d, itemPath: s, injectPropsOnInit: t, cqPath: o } = e;
      return x.getCQPath({
        pagePath: d,
        itemPath: s,
        injectPropsOnInit: t,
        cqPath: o
      });
    }, i = (d) => {
      const { pagePath: s, itemPath: t, injectPropsOnInit: o } = e, p = d || e.cqPath || s && x.getCQPath({ pagePath: s, itemPath: t, injectPropsOnInit: o });
      p && R.getData({
        path: p,
        forceReload: e.cqForceReload
      }).then((g) => {
        g && Object.keys(g).length > 0 && (Object.assign(l.value, x.modelToProps(g)), o && a && Y.dispatchGlobalCustomEvent(
          "cq-async-content-loaded",
          {}
        ));
      }).catch((g) => {
        console.error(g);
      });
    }, m = i.bind(null, h());
    return H(() => {
      const d = h();
      e.injectPropsOnInit && i(d), R.addListener(d, m);
    }), V(() => {
      R.removeListener(e.cqPath, m);
    }), (d, s) => {
      var t, o;
      return u(), P(b((o = (t = f(r)).default) == null ? void 0 : o.call(t)[0]), I(L({
        cqPath: h(),
        ...l.value
      })), null, 16);
    };
  }
}), re = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "CompositeModelProvider",
  props: {
    modelConfig: {
      type: Object,
      default: () => ({ injectPropsOnInit: !1, forceReload: !1 })
    }
  },
  setup(n) {
    const e = n, r = T(), c = A(), { modelConfig: a } = W(e), l = c.cqForceReload || a.value.forceReload, { injectPropsOnInit: h } = a.value;
    return (i, m) => (u(), P(ne, S({
      "cq-force-reload": f(l),
      "inject-props-on-init": f(h)
    }, { ...f(c) }), {
      default: U(() => {
        var d, s;
        return [
          (u(), P(b((s = (d = f(r)).default) == null ? void 0 : s.call(d)[0])))
        ];
      }),
      _: 1
    }, 16, ["cq-force-reload", "inject-props-on-init"]));
  }
}), se = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "ContextProvider",
  setup(n) {
    const e = T(), r = A(), c = v("componentMapping", new E()), a = v("isInEditor", N.isInEditor());
    return z("isInEditor", a), z("componentMapping", c), (l, h) => {
      var i, m;
      return u(), P(b((m = (i = f(e)).default) == null ? void 0 : m.call(i)[0]), I(L({ ...f(r) })), null, 16);
    };
  }
}), ae = (n) => O(se, {}, () => [O(n)]), ce = (n, e) => O(re, { modelConfig: e }, () => [O(n)]), pe = (n, e) => O(oe, { editConfig: e }, () => [O(n)]), ie = (n, e, r) => {
  const {
    injectPropsOnInit: c = !0,
    forceReload: a = !1,
    ...l
  } = r || {}, h = {
    injectPropsOnInit: c,
    forceReload: a,
    ...l
  };
  let i = n;
  return i = ae(
    ce(pe(i, e), h)
  ), i;
}, le = E.map, de = E.get;
E.map = function(e, r, c = {
  isEmpty: () => !1
}, a = {}) {
  const { injectPropsOnInit: l = !1, ...h } = a || {}, i = ie(r, c, {
    injectPropsOnInit: l,
    ...h
  });
  return le.call(E, e, i), i;
};
E.get = de;
const ve = (n) => (e, r, c = {}) => (
  // @ts-ignore
  E.map(n, e, r, c)
), be = (n, e, r, c) => {
  let a = [];
  n && (a = [n]), e && a.push(e);
  const l = r == null ? void 0 : r.class;
  return l && !c && a.push(l), a;
}, Ee = (n) => ({
  appliedCssClassNames: {
    type: String
  },
  baseCssClass: {
    type: String,
    default: n
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
}), me = ["data-cq-data-path", "data-emptytext"], ue = /* @__PURE__ */ q({
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
  setup(n) {
    const e = n;
    return (r, c) => (u(), y("div", {
      "data-cq-data-path": e.path,
      "data-emptytext": e.emptyLabel,
      class: "aem-AllowedComponent--component cq-placeholder placeholder"
    }, null, 8, me));
  }
}), he = ["data-text"], fe = /* @__PURE__ */ q({
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
  setup(n) {
    const e = n, r = _(
      () => e.components && e.components.length > 0 ? e.title : e.emptyLabel
    );
    return (c, a) => {
      var l;
      return u(), y("div", {
        class: G([
          "aem-AllowedComponent--list",
          (l = e.placeholderProps) == null ? void 0 : l.placeholderClassNames
        ])
      }, [
        J("div", {
          "data-text": r.value,
          class: "aem-AllowedComponent--title"
        }, null, 8, he),
        (u(!0), y($, null, k(e.components, (h) => (u(), P(ue, {
          key: h.path,
          "empty-label": h.title,
          path: h.path
        }, null, 8, ["empty-label", "path"]))), 128))
      ], 2);
    };
  }
}), Pe = ["data-cq-data-path"], ge = /* @__PURE__ */ q({
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
  setup(n) {
    const e = n;
    return (r, c) => (u(), y("div", {
      class: G(e.placeholderClassNames),
      "data-cq-data-path": `${e.cqPath}/*`
    }, null, 10, Pe));
  }
}), ye = /* @__PURE__ */ q({
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
  setup(n) {
    const e = n, r = typeof e.isInEditor < "u" ? e.isInEditor : v("isInEditor", N.isInEditor()), c = v("componentMapping", new E()), a = (d) => {
      var s;
      return ((s = e.cqPath) == null ? void 0 : s.length) > 0 ? `${e.cqPath}/${d}` : d;
    }, l = (d, s, t) => {
      const o = a(t);
      return O(d, {
        ...s,
        cqPath: o,
        containerProps: typeof e.getItemComponentProps == "function" ? e.getItemComponentProps(t) : {}
      });
    }, h = _(() => {
      let d = {};
      return typeof e.getContainerProps == "function" ? d = e.getContainerProps() : (d = {
        class: "aem-container"
      }, r && (d["data-cq-data-path"] = e.cqPath)), d;
    }), i = _(() => {
      const d = [];
      return Object.keys(e.cqItems).length > 0 && e.cqItemsOrder.length > 0 && e.cqItemsOrder.forEach((s) => {
        const t = x.modelToProps(
          e.cqItems[s]
        );
        if (t && typeof t.cqType < "u") {
          const o = c.get(t.cqType);
          o && d.push(
            l(o, t, s)
          );
        }
      }), d;
    }), m = _(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    });
    return (d, s) => !f(r) && e.aemNoDecoration ? (u(!0), y($, { key: 0 }, k(i.value, (t) => (u(), P(b(t), {
      key: t.toString()
    }))), 128)) : (u(), y("div", I(S({ key: 1 }, { ...h.value })), [
      (u(!0), y($, null, k(i.value, (t) => (u(), P(b(t), {
        key: t.toString()
      }))), 128)),
      f(r) ? (u(), P(ge, I(S({ key: 0 }, m.value)), null, 16)) : B("", !0)
    ], 16));
  }
}), Ce = /* @__PURE__ */ q({
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
  setup(n) {
    const e = n, r = typeof e.isInEditor < "u" ? e.isInEditor : v("isInEditor", N.isInEditor()), c = _(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    }), a = A();
    return (l, h) => {
      var i;
      return u(), y($, null, [
        f(r) && e.allowedComponents && ((i = e.allowedComponents) != null && i.applicable) ? (u(), P(fe, {
          key: 0,
          components: e.allowedComponents.components,
          "cq-path": e.cqPath,
          "empty-label": e._allowedComponentPlaceholderListEmptyLabel,
          "placeholder-props": c.value,
          title: e.title
        }, null, 8, ["components", "cq-path", "empty-label", "placeholder-props", "title"])) : B("", !0),
        X(ye, S({
          "cq-items": e.cqItems,
          "cq-items-order": e.cqItemsOrder,
          "cq-path": e.cqPath,
          "get-container-props": e.getContainerProps,
          "get-item-component-props": e.getItemComponentProps,
          "get-placeholder-props": e.getPlaceholderProps
        }, { ...f(a) }), null, 16, ["cq-items", "cq-items-order", "cq-path", "get-container-props", "get-item-component-props", "get-placeholder-props"])
      ], 64);
    };
  }
}), Oe = /* @__PURE__ */ q({
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
  setup(n) {
    const e = n, r = A(), c = v("isInEditor", N.isInEditor()), a = v("componentMapping", new E()), l = (s) => {
      var t;
      return ((t = e.cqPath) == null ? void 0 : t.length) > 0 ? `${e.cqPath}/jcr:content/${s}` : s;
    }, h = (s, t, o) => {
      const p = l(o);
      return O(s, {
        ...t,
        cqPath: p,
        containerProps: {}
      });
    }, i = _(() => {
      const s = [];
      return Object.keys(e.cqItems).length > 0 && e.cqItemsOrder.length > 0 && e.cqItemsOrder.forEach((t) => {
        const o = x.modelToProps(
          e.cqItems[t]
        );
        if (o && typeof o.cqType < "u") {
          const p = a.get(o.cqType);
          p && s.push(
            h(p, o, t)
          );
        }
      }), s;
    }), m = _(() => {
      const s = [];
      return Object.keys(e.cqChildren).length === 0 || Object.keys(e.cqChildren).forEach((t) => {
        const o = x.modelToProps(
          e.cqChildren[t]
        );
        if (o && typeof o.cqType < "u") {
          const p = a.get(o.cqType);
          p && s.push(
            O(p, { ...o, cqPath: o.cqPath })
          );
        }
      }), s;
    }), d = _(() => {
      const s = ["aem-page"];
      r.cssClassNames && s.push(...r.cssClassNames.split(" "));
      const t = {
        class: s.join(" ")
      };
      return c && (t["data-cq-data-path"] = e.cqPath), t;
    });
    return (s, t) => (u(), y("div", I(L(d.value)), [
      (u(!0), y($, null, k(i.value, (o) => (u(), P(b(o), {
        key: o.toString()
      }))), 128)),
      (u(!0), y($, null, k(m.value, (o) => (u(), P(b(o), {
        key: o.toString()
      }))), 128))
    ], 16));
  }
}), je = /* @__PURE__ */ q({
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
  setup(n) {
    const e = n, r = A(), c = typeof e.isInEditor < "u" ? e.isInEditor : v("isInEditor", N.isInEditor()), a = () => {
      const i = {}, m = ["aem-container"];
      return e.gridClassNames && m.push(e.gridClassNames), i.class = m.join(" "), c && (i["data-cq-data-path"] = e.cqPath), i;
    }, l = () => {
      const i = {
        cqPath: e.cqPath
      }, m = [
        "new",
        "section",
        "aem-Grid-newComponent"
      ];
      return i.placeholderClassNames = m.join(" "), i;
    }, h = (i) => {
      const m = {};
      return e.columnClassNames && e.columnClassNames[i] && (m.class = e.columnClassNames[i]), m;
    };
    return (i, m) => (u(), P(Ce, S({
      "cq-path": e.cqPath,
      "get-container-props": a,
      "get-item-component-props": h,
      "get-placeholder-props": l,
      "is-in-editor": f(c)
    }, { ...f(r) }), null, 16, ["cq-path", "is-in-editor"]));
  }
});
export {
  ue as AllowedComponentPlaceholder,
  fe as AllowedComponentPlaceholderList,
  Ce as AllowedComponentsContainer,
  Ae as ComponentMapping,
  oe as CompositeEditableProvider,
  re as CompositeModelProvider,
  ye as Container,
  ge as ContainerPlaceholder,
  se as ContextProvider,
  te as EditableProvider,
  ve as MapTo,
  ne as ModelProvider,
  Oe as Page,
  je as ResponsiveGrid,
  x as Utils,
  be as componentClassNames,
  Ee as componentProperties,
  ae as withContext,
  pe as withEditable,
  ce as withModel
};
