import { ComponentMapping as O } from "@adobe/aem-spa-component-mapping";
import { ComponentMapping as Ne } from "@adobe/aem-spa-component-mapping";
import { defineComponent as v, inject as b, useSlots as L, useAttrs as A, computed as _, onMounted as U, onUpdated as V, unref as f, openBlock as u, createBlock as P, resolveDynamicComponent as E, normalizeProps as I, mergeProps as S, createElementBlock as C, guardReactiveProps as T, createCommentVNode as B, withCtx as G, ref as W, onUnmounted as H, toRefs as J, provide as z, h as j, normalizeClass as Q, createElementVNode as X, Fragment as $, renderList as k, createVNode as Y } from "vue";
import { AuthoringUtils as N, ModelManager as R, PathUtils as Z } from "@adobe/aem-spa-page-model-manager";
function K(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var D = { exports: {} };
(function(o, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  function s(p) {
    "@babel/helpers - typeof";
    return s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t;
    } : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, s(p);
  }
  var c = 47, a = 46, d = function(t) {
    var n = s(t);
    if (n !== "string")
      throw new TypeError("Expected a string, got a ".concat(n));
  }, m = function(t, n) {
    for (var i = "", g = 0, y = -1, w = 0, M, q = 0; q <= t.length; ++q) {
      if (q < t.length)
        M = t.charCodeAt(q);
      else {
        if (M === c)
          break;
        M = c;
      }
      if (M === c) {
        if (!(y === q - 1 || w === 1))
          if (y !== q - 1 && w === 2) {
            if (i.length < 2 || g !== 2 || i.charCodeAt(i.length - 1) !== a || i.charCodeAt(i.length - 2) !== a) {
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
            i.length > 0 ? i += "/" + t.slice(y + 1, q) : i = t.slice(y + 1, q), g = q - y - 1;
        y = q, w = 0;
      } else
        M === a && w !== -1 ? ++w : w = -1;
    }
    return i;
  }, l = function(t) {
    try {
      return decodeURIComponent(t);
    } catch {
      return t;
    }
  }, h = function(t) {
    d(t);
    var n = t;
    if (n.length === 0)
      return ".";
    var i = n.charCodeAt(0) === c, g = n.charCodeAt(n.length - 1) === c;
    return n = l(n), n = m(n, !i), n.length === 0 && !i && (n = "."), n.length > 0 && g && (n += "/"), i ? "/" + n : n;
  }, r = h;
  e.default = r, o.exports = e.default;
})(D, D.exports);
var ee = D.exports;
const te = /* @__PURE__ */ K(ee), x = {
  getCQPath(o) {
    const { pagePath: e = "", itemPath: s = "", injectPropsOnInit: c } = o;
    let { cqPath: a = "" } = o;
    return c && !a && (a = te(
      s ? `${e}/jcr:content/${s}` : e
    ), a = a.replace(/^\.$/, "")), a;
  },
  modelToProps(o) {
    const e = Object.getOwnPropertyNames(o), s = {}, c = (a) => {
      const d = a.substring(1);
      return `cq${d.substring(0, 1).toUpperCase()}${d.substring(
        1
      )}`;
    };
    return e.forEach((a) => {
      let d = a;
      d.startsWith(":") && (d = c(d)), s[d] = o[a];
    }), s;
  }
}, oe = /* @__PURE__ */ v({
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
    const e = o, s = b("isInEditor", N.isInEditor()), c = L(), a = A(), d = _(() => {
      const r = {}, { componentProperties: p } = e;
      return s && (r["data-cq-data-path"] = p.cqPath, e.editConfig.resourceType && (r["data-cq-resource-type"] = e.editConfig.resourceType)), r;
    }), m = _(() => {
      var i;
      const r = {}, { componentProperties: p } = e, { appliedCssClassNames: t } = p, n = [];
      return t && n.push(t), (i = e == null ? void 0 : e.containerProps) != null && i.class && n.push(e.containerProps.class), n.length && (r.class = n.join(" ")), r;
    }), l = s && typeof e.editConfig.isEmpty == "function" && e.editConfig.isEmpty(e.componentProperties), h = _(() => l ? {
      class: "cq-placeholder",
      "data-emptytext": e.editConfig.emptyLabel
    } : null);
    return U(() => {
      console.log("EditableProvider mounted properties: ", e), console.log("EditableProvider mounted attributes: ", a);
    }), V(() => {
      console.log("EditableProvider updated properties: ", e), console.log("EditableProvider updated attributes: ", a);
    }), (r, p) => {
      var t, n, i, g;
      return !f(s) && e.componentProperties.hasOwnProperty("aemNoDecoration") && e.componentProperties.aemNoDecoration ? (u(), P(E((n = (t = f(c)).default) == null ? void 0 : n.call(t)[0]), I(S({ key: 0 }, { ...f(a) })), null, 16)) : (u(), C("div", I(S({ key: 1 }, { ...d.value, ...m.value })), [
        (u(), P(E((g = (i = f(c)).default) == null ? void 0 : g.call(i)[0]), I(T({
          ...f(a),
          componentProperties: e.componentProperties
        })), null, 16)),
        h.value ? (u(), C("div", I(S({ key: 0 }, h.value)), null, 16)) : B("", !0)
      ], 16));
    };
  }
}), ne = /* @__PURE__ */ v({
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
    const e = o, s = L(), c = A();
    return (a, d) => (u(), P(oe, I(T({
      ...f(c),
      componentProperties: { ...f(c) },
      editConfig: e.editConfig
    })), {
      default: G(() => {
        var m, l;
        return [
          (u(), P(E((l = (m = f(s)).default) == null ? void 0 : l.call(m)[0])))
        ];
      }),
      _: 1
    }, 16));
  }
}), re = /* @__PURE__ */ v({
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
    const e = o, s = L(), c = A(), a = b("isInEditor", N.isInEditor()), d = W({}), m = () => {
      const { pagePath: p, itemPath: t, injectPropsOnInit: n, cqPath: i } = e;
      return x.getCQPath({
        pagePath: p,
        itemPath: t,
        injectPropsOnInit: n,
        cqPath: i
      });
    }, l = _(() => ({
      ...c,
      cqPath: m(),
      ...d.value
    })), h = (p) => {
      const { pagePath: t, itemPath: n, injectPropsOnInit: i } = e, g = p || e.cqPath || t && x.getCQPath({ pagePath: t, itemPath: n, injectPropsOnInit: i });
      g && R.getData({
        path: g,
        forceReload: e.cqForceReload
      }).then((y) => {
        y && Object.keys(y).length > 0 && (d.value = x.modelToProps(y), i && a && Z.dispatchGlobalCustomEvent(
          "cq-async-content-loaded",
          {}
        ));
      }).catch((y) => {
        console.error(y);
      });
    }, r = h.bind(null, m());
    return U(() => {
      const p = m();
      e.injectPropsOnInit && h(p), R.addListener(p, r);
    }), H(() => {
      R.removeListener(e.cqPath, r);
    }), (p, t) => {
      var n, i;
      return u(), P(E((i = (n = f(s)).default) == null ? void 0 : i.call(n)[0]), I(T(l.value)), null, 16);
    };
  }
}), se = /* @__PURE__ */ v({
  inheritAttrs: !1,
  __name: "CompositeModelProvider",
  props: {
    modelConfig: {
      type: Object,
      default: () => ({ injectPropsOnInit: !1, forceReload: !1 })
    }
  },
  setup(o) {
    const e = o, s = L(), c = A(), { modelConfig: a } = J(e), d = c.cqForceReload || a.value.forceReload, { injectPropsOnInit: m } = a.value;
    return (l, h) => (u(), P(re, S({
      "cq-force-reload": f(d),
      "inject-props-on-init": f(m)
    }, { ...f(c) }), {
      default: G(() => {
        var r, p;
        return [
          (u(), P(E((p = (r = f(s)).default) == null ? void 0 : p.call(r)[0])))
        ];
      }),
      _: 1
    }, 16, ["cq-force-reload", "inject-props-on-init"]));
  }
}), ae = /* @__PURE__ */ v({
  inheritAttrs: !1,
  __name: "ContextProvider",
  setup(o) {
    const e = L(), s = A(), c = b("componentMapping", new O()), a = b("isInEditor", N.isInEditor());
    return z("isInEditor", a), z("componentMapping", c), (d, m) => {
      var l, h;
      return u(), P(E((h = (l = f(e)).default) == null ? void 0 : h.call(l)[0]), I(T({ ...f(s) })), null, 16);
    };
  }
}), ce = (o) => j(ae, {}, () => [j(o)]), pe = (o, e) => j(se, { modelConfig: e }, () => [j(o)]), ie = (o, e) => j(ne, { editConfig: e }, () => [j(o)]), le = (o, e, s) => {
  const {
    injectPropsOnInit: c = !0,
    forceReload: a = !1,
    ...d
  } = s || {}, m = {
    injectPropsOnInit: c,
    forceReload: a,
    ...d
  };
  let l = o;
  return l = ce(
    pe(ie(l, e), m)
  ), l;
}, de = O.map, ue = O.get;
O.map = function(e, s, c = {
  isEmpty: () => !1
}, a = {}) {
  const { injectPropsOnInit: d = !1, ...m } = a || {}, l = le(s, c, {
    injectPropsOnInit: d,
    ...m
  });
  return de.call(O, e, l), l;
};
O.get = ue;
const be = (o) => (e, s, c = {}) => (
  // @ts-ignore
  O.map(o, e, s, c)
), Ee = (o, e, s, c) => {
  let a = [];
  o && (a = [o]), e && a.push(e);
  const d = s == null ? void 0 : s.class;
  return d && !c && a.push(d), a;
}, Oe = (o) => ({
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
}), me = ["data-cq-data-path", "data-emptytext"], he = /* @__PURE__ */ v({
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
    return (s, c) => (u(), C("div", {
      "data-cq-data-path": e.path,
      "data-emptytext": e.emptyLabel,
      class: "aem-AllowedComponent--component cq-placeholder placeholder"
    }, null, 8, me));
  }
}), fe = ["data-text"], Pe = /* @__PURE__ */ v({
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
    return (c, a) => {
      var d;
      return u(), C("div", {
        class: Q([
          "aem-AllowedComponent--list",
          (d = e.placeholderProps) == null ? void 0 : d.placeholderClassNames
        ])
      }, [
        X("div", {
          "data-text": s.value,
          class: "aem-AllowedComponent--title"
        }, null, 8, fe),
        (u(!0), C($, null, k(e.components, (m) => (u(), P(he, {
          key: m.path,
          "empty-label": m.title,
          path: m.path
        }, null, 8, ["empty-label", "path"]))), 128))
      ], 2);
    };
  }
}), ge = ["data-cq-data-path"], ye = /* @__PURE__ */ v({
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
    return (s, c) => (u(), C("div", {
      class: Q(e.placeholderClassNames),
      "data-cq-data-path": `${e.cqPath}/*`
    }, null, 10, ge));
  }
}), Ce = /* @__PURE__ */ v({
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
    const e = o, s = typeof e.isInEditor < "u" ? e.isInEditor : b("isInEditor", N.isInEditor()), c = b("componentMapping", new O()), a = (r) => {
      var p;
      return ((p = e.cqPath) == null ? void 0 : p.length) > 0 ? `${e.cqPath}/${r}` : r;
    }, d = (r, p, t) => {
      const n = a(t);
      return j(r, {
        ...p,
        cqPath: n,
        containerProps: typeof e.getItemComponentProps == "function" ? e.getItemComponentProps(t) : {}
      });
    }, m = _(() => {
      let r = {};
      return typeof e.getContainerProps == "function" ? r = e.getContainerProps() : (r = {
        class: "aem-container"
      }, s && (r["data-cq-data-path"] = e.cqPath)), r;
    }), l = _(() => {
      const r = [];
      return Object.keys(e.cqItems).length > 0 && e.cqItemsOrder.length > 0 && e.cqItemsOrder.forEach((p) => {
        const t = x.modelToProps(
          e.cqItems[p]
        );
        if (t && typeof t.cqType < "u") {
          const n = c.get(t.cqType);
          n && r.push(
            d(n, t, p)
          );
        }
      }), r;
    }), h = _(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    });
    return (r, p) => !f(s) && e.aemNoDecoration ? (u(!0), C($, { key: 0 }, k(l.value, (t) => (u(), P(E(t), {
      key: t.toString()
    }))), 128)) : (u(), C("div", I(S({ key: 1 }, { ...m.value })), [
      (u(!0), C($, null, k(l.value, (t) => (u(), P(E(t), {
        key: t.toString()
      }))), 128)),
      f(s) ? (u(), P(ye, I(S({ key: 0 }, h.value)), null, 16)) : B("", !0)
    ], 16));
  }
}), qe = /* @__PURE__ */ v({
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
    const e = o, s = typeof e.isInEditor < "u" ? e.isInEditor : b("isInEditor", N.isInEditor()), c = _(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    }), a = A();
    return (d, m) => {
      var l;
      return u(), C($, null, [
        f(s) && e.allowedComponents && ((l = e.allowedComponents) != null && l.applicable) ? (u(), P(Pe, {
          key: 0,
          components: e.allowedComponents.components,
          "cq-path": e.cqPath,
          "empty-label": e._allowedComponentPlaceholderListEmptyLabel,
          "placeholder-props": c.value,
          title: e.title
        }, null, 8, ["components", "cq-path", "empty-label", "placeholder-props", "title"])) : B("", !0),
        Y(Ce, S({
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
}), je = /* @__PURE__ */ v({
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
    const e = o, s = b("isInEditor", N.isInEditor()), c = b("componentMapping", new O()), a = (r) => {
      var p;
      return ((p = e.cqPath) == null ? void 0 : p.length) > 0 ? `${e.cqPath}/jcr:content/${r}` : r;
    }, d = (r, p, t) => {
      const n = a(t);
      return j(r, {
        ...p,
        cqPath: n,
        containerProps: {}
      });
    }, m = _(() => {
      const r = [];
      return Object.keys(e.cqItems).length > 0 && e.cqItemsOrder.length > 0 && e.cqItemsOrder.forEach((p) => {
        const t = x.modelToProps(
          e.cqItems[p]
        );
        if (t && typeof t.cqType < "u") {
          const n = c.get(t.cqType);
          n && r.push(
            d(n, t, p)
          );
        }
      }), r;
    }), l = _(() => {
      const r = [];
      return Object.keys(e.cqChildren).length === 0 || Object.keys(e.cqChildren).forEach((p) => {
        const t = x.modelToProps(
          e.cqChildren[p]
        );
        if (t && typeof t.cqType < "u") {
          const n = c.get(t.cqType);
          n && r.push(
            j(n, { ...t, cqPath: t.cqPath })
          );
        }
      }), r;
    }), h = _(() => {
      const r = {
        class: "aem-page"
      };
      return s && (r["data-cq-data-path"] = e.cqPath), r;
    });
    return (r, p) => (u(), C("div", I(T(h.value)), [
      (u(!0), C($, null, k(m.value, (t) => (u(), P(E(t), {
        key: t.toString()
      }))), 128)),
      (u(!0), C($, null, k(l.value, (t) => (u(), P(E(t), {
        key: t.toString()
      }))), 128))
    ], 16));
  }
}), we = /* @__PURE__ */ v({
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
    const e = o, s = A(), c = typeof e.isInEditor < "u" ? e.isInEditor : b("isInEditor", N.isInEditor()), a = () => {
      const l = {}, h = ["aem-container"];
      return e.gridClassNames && h.push(e.gridClassNames), l.class = h.join(" "), c && (l["data-cq-data-path"] = e.cqPath), l;
    }, d = () => {
      const l = {
        cqPath: e.cqPath
      }, h = [
        "new",
        "section",
        "aem-Grid-newComponent"
      ];
      return l.placeholderClassNames = h.join(" "), l;
    }, m = (l) => {
      const h = {};
      return e.columnClassNames && e.columnClassNames[l] && (h.class = e.columnClassNames[l]), h;
    };
    return (l, h) => (u(), P(qe, S({
      "cq-path": e.cqPath,
      "get-container-props": a,
      "get-item-component-props": m,
      "get-placeholder-props": d,
      "is-in-editor": f(c)
    }, { ...f(s) }), null, 16, ["cq-path", "is-in-editor"]));
  }
});
export {
  he as AllowedComponentPlaceholder,
  Pe as AllowedComponentPlaceholderList,
  qe as AllowedComponentsContainer,
  Ne as ComponentMapping,
  ne as CompositeEditableProvider,
  se as CompositeModelProvider,
  Ce as Container,
  ye as ContainerPlaceholder,
  ae as ContextProvider,
  oe as EditableProvider,
  be as MapTo,
  re as ModelProvider,
  je as Page,
  we as ResponsiveGrid,
  x as Utils,
  Ee as componentClassNames,
  Oe as componentProperties,
  ce as withContext,
  ie as withEditable,
  pe as withModel
};
