import { ComponentMapping as E } from "@adobe/aem-spa-component-mapping";
import { ComponentMapping as Ae } from "@adobe/aem-spa-component-mapping";
import { defineComponent as q, inject as v, useSlots as T, useAttrs as A, computed as _, unref as f, openBlock as u, createBlock as P, resolveDynamicComponent as b, normalizeProps as I, mergeProps as S, createElementBlock as y, guardReactiveProps as L, createCommentVNode as B, withCtx as U, ref as Q, onMounted as H, onUnmounted as V, toRefs as W, provide as z, h as O, normalizeClass as G, createElementVNode as J, Fragment as $, renderList as k, createVNode as X } from "vue";
import { AuthoringUtils as N, ModelManager as R, PathUtils as Y } from "@adobe/aem-spa-page-model-manager";
function Z(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var D = { exports: {} };
(function(o, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  function s(i) {
    "@babel/helpers - typeof";
    return s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t;
    } : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, s(i);
  }
  var a = 47, c = 46, l = function(t) {
    var r = s(t);
    if (r !== "string")
      throw new TypeError("Expected a string, got a ".concat(r));
  }, h = function(t, r) {
    for (var d = "", g = 0, j = -1, w = 0, M, C = 0; C <= t.length; ++C) {
      if (C < t.length)
        M = t.charCodeAt(C);
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
            d.length > 0 ? d += "/" + t.slice(j + 1, C) : d = t.slice(j + 1, C), g = C - j - 1;
        j = C, w = 0;
      } else
        M === c && w !== -1 ? ++w : w = -1;
    }
    return d;
  }, p = function(t) {
    try {
      return decodeURIComponent(t);
    } catch {
      return t;
    }
  }, m = function(t) {
    l(t);
    var r = t;
    if (r.length === 0)
      return ".";
    var d = r.charCodeAt(0) === a, g = r.charCodeAt(r.length - 1) === a;
    return r = p(r), r = h(r, !d), r.length === 0 && !d && (r = "."), r.length > 0 && g && (r += "/"), d ? "/" + r : r;
  }, n = m;
  e.default = n, o.exports = e.default;
})(D, D.exports);
var K = D.exports;
const ee = /* @__PURE__ */ Z(K), x = {
  getCQPath(o) {
    const { pagePath: e = "", itemPath: s = "", injectPropsOnInit: a } = o;
    let { cqPath: c = "" } = o;
    return a && !c && (c = ee(
      s ? `${e}/jcr:content/${s}` : e
    ), c = c.replace(/^\.$/, "")), c;
  },
  modelToProps(o) {
    const e = Object.getOwnPropertyNames(o), s = {}, a = (c) => {
      const l = c.substring(1);
      return `cq${l.substring(0, 1).toUpperCase()}${l.substring(
        1
      )}`;
    };
    return e.forEach((c) => {
      let l = c;
      l.startsWith(":") && (l = a(l)), s[l] = o[c];
    }), s;
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
  setup(o) {
    const e = o, s = v("isInEditor", N.isInEditor()), a = T(), c = A(), l = _(() => {
      const m = {}, { componentProperties: n } = e;
      return s && (m["data-cq-data-path"] = n.cqPath, e.editConfig.resourceType && (m["data-cq-resource-type"] = e.editConfig.resourceType)), m;
    }), h = _(() => {
      var r;
      const m = {}, { componentProperties: n } = e, { appliedCssClassNames: i } = n, t = [];
      return i && t.push(i), (r = e == null ? void 0 : e.containerProps) != null && r.class && t.push(e.containerProps.class), t.length && (m.class = t.join(" ")), m;
    }), p = _(() => s && typeof e.editConfig.isEmpty == "function" && e.editConfig.isEmpty(e.componentProperties) ? {
      class: "cq-placeholder",
      "data-emptytext": e.editConfig.emptyLabel
    } : null);
    return (m, n) => {
      var i, t, r, d;
      return !f(s) && e.componentProperties.hasOwnProperty("aemNoDecoration") && e.componentProperties.aemNoDecoration || e.componentProperties.hasOwnProperty("cqHierarchyType") && e.componentProperties.cqHierarchyType === "page" ? (u(), P(b((t = (i = f(a)).default) == null ? void 0 : t.call(i)[0]), I(S({ key: 0 }, { ...f(c) })), null, 16)) : (u(), y("div", I(S({ key: 1 }, { ...l.value, ...h.value })), [
        (u(), P(b((d = (r = f(a)).default) == null ? void 0 : d.call(r)[0]), I(L({
          ...f(c),
          componentProperties: e.componentProperties
        })), null, 16)),
        p.value ? (u(), y("div", I(S({ key: 0 }, p.value)), null, 16)) : B("", !0)
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
  setup(o) {
    const e = o, s = T(), a = A();
    return (c, l) => (u(), P(te, I(L({
      ...f(a),
      componentProperties: { ...f(a) },
      editConfig: e.editConfig
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
  setup(o) {
    const e = o, s = T(), a = A(), c = v("isInEditor", N.isInEditor()), l = Q(a), h = () => {
      const { pagePath: n, itemPath: i, injectPropsOnInit: t, cqPath: r } = e;
      return x.getCQPath({
        pagePath: n,
        itemPath: i,
        injectPropsOnInit: t,
        cqPath: r
      });
    }, p = (n) => {
      const { pagePath: i, itemPath: t, injectPropsOnInit: r } = e, d = n || e.cqPath || i && x.getCQPath({ pagePath: i, itemPath: t, injectPropsOnInit: r });
      d && R.getData({
        path: d,
        forceReload: e.cqForceReload
      }).then((g) => {
        g && Object.keys(g).length > 0 && (Object.assign(l.value, x.modelToProps(g)), r && c && Y.dispatchGlobalCustomEvent(
          "cq-async-content-loaded",
          {}
        ));
      }).catch((g) => {
        console.error(g);
      });
    }, m = p.bind(null, h());
    return H(() => {
      const n = h();
      e.injectPropsOnInit && p(n), R.addListener(n, m);
    }), V(() => {
      R.removeListener(e.cqPath, m);
    }), (n, i) => {
      var t, r;
      return u(), P(b((r = (t = f(s)).default) == null ? void 0 : r.call(t)[0]), I(L({
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
  setup(o) {
    const e = o, s = T(), a = A(), { modelConfig: c } = W(e), l = a.cqForceReload || c.value.forceReload, { injectPropsOnInit: h } = c.value;
    return (p, m) => (u(), P(ne, S({
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
}), se = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "ContextProvider",
  setup(o) {
    const e = T(), s = A(), a = v("componentMapping", new E()), c = v("isInEditor", N.isInEditor());
    return z("isInEditor", c), z("componentMapping", a), (l, h) => {
      var p, m;
      return u(), P(b((m = (p = f(e)).default) == null ? void 0 : m.call(p)[0]), I(L({ ...f(s) })), null, 16);
    };
  }
}), ae = (o) => O(se, {}, () => [O(o)]), ce = (o, e) => O(re, { modelConfig: e }, () => [O(o)]), pe = (o, e) => O(oe, { editConfig: e }, () => [O(o)]), ie = (o, e, s) => {
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
  return p = ae(
    ce(pe(p, e), h)
  ), p;
}, le = E.map, de = E.get;
E.map = function(e, s, a = {
  isEmpty: () => !1
}, c = {}) {
  const { injectPropsOnInit: l = !1, ...h } = c || {}, p = ie(s, a, {
    injectPropsOnInit: l,
    ...h
  });
  return le.call(E, e, p), p;
};
E.get = de;
const ve = (o) => (e, s, a = {}) => (
  // @ts-ignore
  E.map(o, e, s, a)
), be = (o, e, s, a) => {
  let c = [];
  o && (c = [o]), e && c.push(e);
  const l = s == null ? void 0 : s.class;
  return l && !a && c.push(l), c;
}, Ee = (o) => ({
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
  setup(o) {
    const e = o;
    return (s, a) => (u(), y("div", {
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
  setup(o) {
    const e = o, s = _(
      () => e.components && e.components.length > 0 ? e.title : e.emptyLabel
    );
    return (a, c) => {
      var l;
      return u(), y("div", {
        class: G([
          "aem-AllowedComponent--list",
          (l = e.placeholderProps) == null ? void 0 : l.placeholderClassNames
        ])
      }, [
        J("div", {
          "data-text": s.value,
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
  setup(o) {
    const e = o;
    return (s, a) => (u(), y("div", {
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
  setup(o) {
    const e = o, s = typeof e.isInEditor < "u" ? e.isInEditor : v("isInEditor", N.isInEditor()), a = v("componentMapping", new E()), c = (n) => {
      var i;
      return ((i = e.cqPath) == null ? void 0 : i.length) > 0 ? `${e.cqPath}/${n}` : n;
    }, l = (n, i, t) => {
      const r = c(t);
      return O(n, {
        ...i,
        cqPath: r,
        containerProps: typeof e.getItemComponentProps == "function" ? e.getItemComponentProps(t) : {}
      });
    }, h = _(() => {
      let n = {};
      return typeof e.getContainerProps == "function" ? n = e.getContainerProps() : (n = {
        class: "aem-container"
      }, s && (n["data-cq-data-path"] = e.cqPath)), n;
    }), p = _(() => {
      const n = [];
      return Object.keys(e.cqItems).length > 0 && e.cqItemsOrder.length > 0 && e.cqItemsOrder.forEach((i) => {
        const t = x.modelToProps(
          e.cqItems[i]
        );
        if (t && typeof t.cqType < "u") {
          const r = a.get(t.cqType);
          r && n.push(
            l(r, t, i)
          );
        }
      }), n;
    }), m = _(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    });
    return (n, i) => !f(s) && e.aemNoDecoration ? (u(!0), y($, { key: 0 }, k(p.value, (t) => (u(), P(b(t), {
      key: t.toString()
    }))), 128)) : (u(), y("div", I(S({ key: 1 }, { ...h.value })), [
      (u(!0), y($, null, k(p.value, (t) => (u(), P(b(t), {
        key: t.toString()
      }))), 128)),
      f(s) ? (u(), P(ge, I(S({ key: 0 }, m.value)), null, 16)) : B("", !0)
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
  setup(o) {
    const e = o, s = typeof e.isInEditor < "u" ? e.isInEditor : v("isInEditor", N.isInEditor()), a = _(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    }), c = A();
    return (l, h) => {
      var p;
      return u(), y($, null, [
        f(s) && e.allowedComponents && ((p = e.allowedComponents) != null && p.applicable) ? (u(), P(fe, {
          key: 0,
          components: e.allowedComponents.components,
          "cq-path": e.cqPath,
          "empty-label": e._allowedComponentPlaceholderListEmptyLabel,
          "placeholder-props": a.value,
          title: e.title
        }, null, 8, ["components", "cq-path", "empty-label", "placeholder-props", "title"])) : B("", !0),
        X(ye, S({
          "cq-items": e.cqItems,
          "cq-items-order": e.cqItemsOrder,
          "cq-path": e.cqPath,
          "get-container-props": e.getContainerProps,
          "get-item-component-props": e.getItemComponentProps,
          "get-placeholder-props": e.getPlaceholderProps
        }, { ...f(c) }), null, 16, ["cq-items", "cq-items-order", "cq-path", "get-container-props", "get-item-component-props", "get-placeholder-props"])
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
  setup(o) {
    const e = o, s = v("isInEditor", N.isInEditor()), a = v("componentMapping", new E()), c = (n) => {
      var i;
      return ((i = e.cqPath) == null ? void 0 : i.length) > 0 ? `${e.cqPath}/jcr:content/${n}` : n;
    }, l = (n, i, t) => {
      const r = c(t);
      return O(n, {
        ...i,
        cqPath: r,
        containerProps: {}
      });
    }, h = _(() => {
      const n = [];
      return Object.keys(e.cqItems).length > 0 && e.cqItemsOrder.length > 0 && e.cqItemsOrder.forEach((i) => {
        const t = x.modelToProps(
          e.cqItems[i]
        );
        if (t && typeof t.cqType < "u") {
          const r = a.get(t.cqType);
          r && n.push(
            l(r, t, i)
          );
        }
      }), n;
    }), p = _(() => {
      const n = [];
      return Object.keys(e.cqChildren).length === 0 || Object.keys(e.cqChildren).forEach((i) => {
        const t = x.modelToProps(
          e.cqChildren[i]
        );
        if (t && typeof t.cqType < "u") {
          const r = a.get(t.cqType);
          r && n.push(
            O(r, { ...t, cqPath: t.cqPath })
          );
        }
      }), n;
    }), m = _(() => {
      const n = {
        class: "aem-page"
      };
      return s && (n["data-cq-data-path"] = e.cqPath), n;
    });
    return (n, i) => (u(), y("div", I(L(m.value)), [
      (u(!0), y($, null, k(h.value, (t) => (u(), P(b(t), {
        key: t.toString()
      }))), 128)),
      (u(!0), y($, null, k(p.value, (t) => (u(), P(b(t), {
        key: t.toString()
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
  setup(o) {
    const e = o, s = A(), a = typeof e.isInEditor < "u" ? e.isInEditor : v("isInEditor", N.isInEditor()), c = () => {
      const p = {}, m = ["aem-container"];
      return e.gridClassNames && m.push(e.gridClassNames), p.class = m.join(" "), a && (p["data-cq-data-path"] = e.cqPath), p;
    }, l = () => {
      const p = {
        cqPath: e.cqPath
      }, m = [
        "new",
        "section",
        "aem-Grid-newComponent"
      ];
      return p.placeholderClassNames = m.join(" "), p;
    }, h = (p) => {
      const m = {};
      return e.columnClassNames && e.columnClassNames[p] && (m.class = e.columnClassNames[p]), m;
    };
    return (p, m) => (u(), P(Ce, S({
      "cq-path": e.cqPath,
      "get-container-props": c,
      "get-item-component-props": h,
      "get-placeholder-props": l,
      "is-in-editor": f(a)
    }, { ...f(s) }), null, 16, ["cq-path", "is-in-editor"]));
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
