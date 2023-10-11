import { ComponentMapping as b } from "@adobe/aem-spa-component-mapping";
import { ComponentMapping as we } from "@adobe/aem-spa-component-mapping";
import { defineComponent as C, inject as v, useSlots as k, useAttrs as w, computed as q, unref as h, openBlock as f, createBlock as P, resolveDynamicComponent as E, normalizeProps as I, mergeProps as A, createElementBlock as _, guardReactiveProps as $, createCommentVNode as z, withCtx as U, ref as Q, onMounted as H, onUnmounted as W, toRefs as V, provide as B, h as O, normalizeClass as G, createElementVNode as J, Fragment as T, renderList as L } from "vue";
import { AuthoringUtils as S, ModelManager as F, PathUtils as X } from "@adobe/aem-spa-page-model-manager";
function Y(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var R = { exports: {} };
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
  var a = 47, c = 46, l = function(t) {
    var o = r(t);
    if (o !== "string")
      throw new TypeError("Expected a string, got a ".concat(o));
  }, m = function(t, o) {
    for (var i = "", g = 0, N = -1, j = 0, M, y = 0; y <= t.length; ++y) {
      if (y < t.length)
        M = t.charCodeAt(y);
      else {
        if (M === a)
          break;
        M = a;
      }
      if (M === a) {
        if (!(N === y - 1 || j === 1))
          if (N !== y - 1 && j === 2) {
            if (i.length < 2 || g !== 2 || i.charCodeAt(i.length - 1) !== c || i.charCodeAt(i.length - 2) !== c) {
              if (i.length > 2) {
                var D = i.lastIndexOf("/");
                if (D !== i.length - 1) {
                  D === -1 ? (i = "", g = 0) : (i = i.slice(0, D), g = i.length - 1 - i.lastIndexOf("/")), N = y, j = 0;
                  continue;
                }
              } else if (i.length === 2 || i.length === 1) {
                i = "", g = 0, N = y, j = 0;
                continue;
              }
            }
            o && (i.length > 0 ? i += "/.." : i = "..", g = 2);
          } else
            i.length > 0 ? i += "/" + t.slice(N + 1, y) : i = t.slice(N + 1, y), g = y - N - 1;
        N = y, j = 0;
      } else
        M === c && j !== -1 ? ++j : j = -1;
    }
    return i;
  }, p = function(t) {
    try {
      return decodeURIComponent(t);
    } catch {
      return t;
    }
  }, u = function(t) {
    l(t);
    var o = t;
    if (o.length === 0)
      return ".";
    var i = o.charCodeAt(0) === a, g = o.charCodeAt(o.length - 1) === a;
    return o = p(o), o = m(o, !i), o.length === 0 && !i && (o = "."), o.length > 0 && g && (o += "/"), i ? "/" + o : o;
  }, d = u;
  e.default = d, n.exports = e.default;
})(R, R.exports);
var Z = R.exports;
const K = /* @__PURE__ */ Y(Z), x = {
  getCQPath(n) {
    const { pagePath: e = "", itemPath: r = "", injectPropsOnInit: a } = n;
    let { cqPath: c = "" } = n;
    return a && !c && (c = K(
      r ? `${e}/jcr:content/${r}` : e
    ), c = c.replace(/^\.$/, "")), c;
  },
  modelToProps(n) {
    const e = Object.getOwnPropertyNames(n), r = {}, a = (c) => {
      const l = c.substring(1);
      return `cq${l.substring(0, 1).toUpperCase()}${l.substring(
        1
      )}`;
    };
    return e.forEach((c) => {
      let l = c;
      l.startsWith(":") && (l = a(l)), r[l] = n[c];
    }), r;
  }
}, ee = /* @__PURE__ */ C({
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
    const e = n, r = v("isInEditor", S.isInEditor()), a = k(), c = w(), l = q(() => {
      const u = {}, { componentProperties: d } = e;
      return r && (u["data-cq-data-path"] = d.cqPath, e.editConfig.resourceType && (u["data-cq-resource-type"] = e.editConfig.resourceType)), u;
    }), m = q(() => {
      var o;
      const u = {}, { componentProperties: d } = e, { appliedCssClassNames: s } = d, t = [];
      return s && t.push(s), (o = e == null ? void 0 : e.containerProps) != null && o.class && t.push(e.containerProps.class), t.length && (u.class = t.join(" ")), u;
    }), p = q(() => r && typeof e.editConfig.isEmpty == "function" && e.editConfig.isEmpty(e.componentProperties) ? {
      class: "cq-placeholder",
      "data-emptytext": e.editConfig.emptyLabel
    } : null);
    return (u, d) => {
      var s, t, o, i;
      return !h(r) && e.componentProperties.hasOwnProperty("aemNoDecoration") && e.componentProperties.aemNoDecoration || e.componentProperties.hasOwnProperty("cqHierarchyType") && e.componentProperties.cqHierarchyType === "page" ? (f(), P(E((t = (s = h(a)).default) == null ? void 0 : t.call(s)[0]), I(A({ key: 0 }, { ...h(c), containerProps: e.containerProps })), null, 16)) : (f(), _("div", I(A({ key: 1 }, { ...l.value, ...m.value })), [
        (f(), P(E((i = (o = h(a)).default) == null ? void 0 : i.call(o)[0]), I($({
          ...h(c),
          componentProperties: e.componentProperties
        })), null, 16)),
        p.value ? (f(), _("div", I(A({ key: 0 }, p.value)), null, 16)) : z("", !0)
      ], 16));
    };
  }
}), te = /* @__PURE__ */ C({
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
    const e = n, r = k(), a = w();
    return (c, l) => (f(), P(ee, I($({
      ...h(a),
      componentProperties: { ...h(a) },
      editConfig: e.editConfig
    })), {
      default: U(() => {
        var m, p;
        return [
          (f(), P(E((p = (m = h(r)).default) == null ? void 0 : p.call(m)[0])))
        ];
      }),
      _: 1
    }, 16));
  }
}), oe = /* @__PURE__ */ C({
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
    const e = n, r = k(), a = w(), c = v("isInEditor", S.isInEditor()), l = Q(a), m = () => {
      const { pagePath: d, itemPath: s, injectPropsOnInit: t, cqPath: o } = e;
      return x.getCQPath({
        pagePath: d,
        itemPath: s,
        injectPropsOnInit: t,
        cqPath: o
      });
    }, p = (d) => {
      const { pagePath: s, itemPath: t, injectPropsOnInit: o } = e, i = d || e.cqPath || s && x.getCQPath({ pagePath: s, itemPath: t, injectPropsOnInit: o });
      i && F.getData({
        path: i,
        forceReload: e.cqForceReload
      }).then((g) => {
        g && Object.keys(g).length > 0 && (Object.assign(l.value, x.modelToProps(g)), o && c && X.dispatchGlobalCustomEvent(
          "cq-async-content-loaded",
          {}
        ));
      }).catch((g) => {
        console.error(g);
      });
    }, u = p.bind(null, m());
    return H(() => {
      const d = m();
      e.injectPropsOnInit && p(d), F.addListener(d, u);
    }), W(() => {
      F.removeListener(e.cqPath, u);
    }), (d, s) => {
      var t, o;
      return f(), P(E((o = (t = h(r)).default) == null ? void 0 : o.call(t)[0]), I($({
        cqPath: m(),
        ...l.value
      })), null, 16);
    };
  }
}), ne = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "CompositeModelProvider",
  props: {
    modelConfig: {
      type: Object,
      default: () => ({ injectPropsOnInit: !1, forceReload: !1 })
    }
  },
  setup(n) {
    const e = n, r = k(), a = w(), { modelConfig: c } = V(e), l = a.cqForceReload || c.value.forceReload, { injectPropsOnInit: m } = c.value;
    return (p, u) => (f(), P(oe, A({
      "cq-force-reload": h(l),
      "inject-props-on-init": h(m)
    }, { ...h(a) }), {
      default: U(() => {
        var d, s;
        return [
          (f(), P(E((s = (d = h(r)).default) == null ? void 0 : s.call(d)[0])))
        ];
      }),
      _: 1
    }, 16, ["cq-force-reload", "inject-props-on-init"]));
  }
}), re = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "ContextProvider",
  setup(n) {
    const e = k(), r = w(), a = v("componentMapping", new b()), c = v("isInEditor", S.isInEditor());
    return B("isInEditor", c), B("componentMapping", a), (l, m) => {
      var p, u;
      return f(), P(E((u = (p = h(e)).default) == null ? void 0 : u.call(p)[0]), I($({ ...h(r) })), null, 16);
    };
  }
}), se = (n) => O(re, {}, () => [O(n)]), ae = (n, e) => O(ne, { modelConfig: e }, () => [O(n)]), ce = (n, e) => O(te, { editConfig: e }, () => [O(n)]), ie = (n, e, r) => {
  const {
    injectPropsOnInit: a = !0,
    forceReload: c = !1,
    ...l
  } = r || {}, m = {
    injectPropsOnInit: a,
    forceReload: c,
    ...l
  };
  let p = n;
  return p = se(
    ae(ce(p, e), m)
  ), p;
}, pe = b.map, le = b.get;
b.map = function(e, r, a = {
  isEmpty: () => !1
}, c = {}) {
  const { injectPropsOnInit: l = !1, ...m } = c || {}, p = ie(r, a, {
    injectPropsOnInit: l,
    ...m
  });
  return pe.call(b, e, p), p;
};
b.get = le;
const Ie = (n) => (e, r, a = {}) => (
  // @ts-ignore
  b.map(n, e, r, a)
), ve = (n, e, r, a, c) => {
  let l = [];
  n && (l = [n]), e && l.push(e);
  const m = r == null ? void 0 : r.class;
  return c && m && !a && l.push(m), l;
}, be = (n) => ({
  aemNoDecoration: {
    type: Boolean,
    default: !1
  },
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
}), de = ["data-cq-data-path", "data-emptytext"], me = /* @__PURE__ */ C({
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
    return (r, a) => (f(), _("div", {
      "data-cq-data-path": e.path,
      "data-emptytext": e.emptyLabel,
      class: "aem-AllowedComponent--component cq-placeholder placeholder"
    }, null, 8, de));
  }
}), ue = ["data-text"], fe = /* @__PURE__ */ C({
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
    const e = n, r = q(
      () => e.components && e.components.length > 0 ? e.title : e.emptyLabel
    );
    return (a, c) => {
      var l;
      return f(), _("div", {
        class: G([
          "aem-AllowedComponent--list",
          (l = e.placeholderProps) == null ? void 0 : l.placeholderClassNames
        ])
      }, [
        J("div", {
          "data-text": r.value,
          class: "aem-AllowedComponent--title"
        }, null, 8, ue),
        (f(!0), _(T, null, L(e.components, (m) => (f(), P(me, {
          key: m.path,
          "empty-label": m.title,
          path: m.path
        }, null, 8, ["empty-label", "path"]))), 128))
      ], 2);
    };
  }
}), he = ["data-cq-data-path"], Pe = /* @__PURE__ */ C({
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
    return (r, a) => (f(), _("div", {
      class: G(e.placeholderClassNames),
      "data-cq-data-path": `${e.cqPath}/*`
    }, null, 10, he));
  }
}), ge = /* @__PURE__ */ C({
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
    const e = n, r = typeof e.isInEditor < "u" ? e.isInEditor : v("isInEditor", S.isInEditor()), a = v("componentMapping", new b()), c = (d) => {
      var s;
      return ((s = e.cqPath) == null ? void 0 : s.length) > 0 ? `${e.cqPath}/${d}` : d;
    }, l = (d, s, t) => {
      const o = c(t);
      return O(d, {
        ...s,
        cqPath: o,
        containerProps: typeof e.getItemComponentProps == "function" ? e.getItemComponentProps(t) : {}
      });
    }, m = q(() => {
      let d = {};
      return typeof e.getContainerProps == "function" ? d = e.getContainerProps() : (d = {
        class: "aem-container"
      }, r && (d["data-cq-data-path"] = e.cqPath)), d;
    }), p = q(() => {
      const d = [];
      return Object.keys(e.cqItems).length > 0 && e.cqItemsOrder.length > 0 && e.cqItemsOrder.forEach((s) => {
        const t = x.modelToProps(
          e.cqItems[s]
        );
        if (t && typeof t.cqType < "u") {
          const o = a.get(t.cqType);
          e.aemNoDecoration && (t.aemNoDecoration = e.aemNoDecoration), o && d.push(
            l(o, t, s)
          );
        }
      }), d;
    }), u = q(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    });
    return (d, s) => (f(), _("div", I($({ ...m.value })), [
      (f(!0), _(T, null, L(p.value, (t) => (f(), P(E(t), {
        key: t.toString()
      }))), 128)),
      h(r) ? (f(), P(Pe, I(A({ key: 0 }, u.value)), null, 16)) : z("", !0)
    ], 16));
  }
}), ye = /* @__PURE__ */ C({
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
  setup(n) {
    const e = n, r = typeof e.isInEditor < "u" ? e.isInEditor : v("isInEditor", S.isInEditor()), a = q(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    }), c = w();
    return (l, m) => {
      var p;
      return h(r) && e.allowedComponents && ((p = e.allowedComponents) != null && p.applicable) ? (f(), P(fe, {
        key: 0,
        components: e.allowedComponents.components,
        "cq-path": e.cqPath,
        "empty-label": e._allowedComponentPlaceholderListEmptyLabel,
        "placeholder-props": a.value,
        title: e.title
      }, null, 8, ["components", "cq-path", "empty-label", "placeholder-props", "title"])) : (f(), P(ge, A({
        key: 1,
        "aem-no-decoration": e.aemNoDecoration,
        "cq-items": e.cqItems,
        "cq-items-order": e.cqItemsOrder,
        "cq-path": e.cqPath,
        "get-container-props": e.getContainerProps,
        "get-item-component-props": e.getItemComponentProps,
        "get-placeholder-props": e.getPlaceholderProps,
        "is-in-editor": h(r)
      }, { ...h(c) }), null, 16, ["aem-no-decoration", "cq-items", "cq-items-order", "cq-path", "get-container-props", "get-item-component-props", "get-placeholder-props", "is-in-editor"]));
    };
  }
}), Ee = /* @__PURE__ */ C({
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
    const e = n, r = w(), a = v("isInEditor", S.isInEditor()), c = v("componentMapping", new b()), l = (s) => {
      var t;
      return ((t = e.cqPath) == null ? void 0 : t.length) > 0 ? `${e.cqPath}/jcr:content/${s}` : s;
    }, m = (s, t, o) => {
      const i = l(o);
      return O(s, {
        ...t,
        cqPath: i,
        containerProps: {}
      });
    }, p = q(() => {
      const s = [];
      return Object.keys(e.cqItems).length > 0 && e.cqItemsOrder.length > 0 && e.cqItemsOrder.forEach((t) => {
        const o = x.modelToProps(
          e.cqItems[t]
        );
        if (o && typeof o.cqType < "u") {
          const i = c.get(o.cqType);
          i && s.push(
            m(i, o, t)
          );
        }
      }), s;
    }), u = q(() => {
      const s = [];
      return Object.keys(e.cqChildren).length === 0 || Object.keys(e.cqChildren).forEach((t) => {
        const o = x.modelToProps(
          e.cqChildren[t]
        );
        if (o && typeof o.cqType < "u") {
          const i = c.get(o.cqType);
          i && s.push(
            O(i, { ...o, cqPath: o.cqPath })
          );
        }
      }), s;
    }), d = q(() => {
      const s = ["aem-page"];
      r.cssClassNames && s.push(...r.cssClassNames.split(" "));
      const t = {
        class: s.join(" ")
      };
      return a && (t["data-cq-data-path"] = e.cqPath), t;
    });
    return (s, t) => (f(), _("div", I($(d.value)), [
      (f(!0), _(T, null, L(p.value, (o) => (f(), P(E(o), {
        key: o.toString()
      }))), 128)),
      (f(!0), _(T, null, L(u.value, (o) => (f(), P(E(o), {
        key: o.toString()
      }))), 128))
    ], 16));
  }
}), Oe = /* @__PURE__ */ C({
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
    }
  },
  setup(n) {
    const e = n, r = w(), a = typeof e.isInEditor < "u" ? e.isInEditor : v("isInEditor", S.isInEditor()), c = () => {
      const p = {}, u = ["aem-container"];
      return e.gridClassNames && u.push(e.gridClassNames), p.class = u.join(" "), a && (p["data-cq-data-path"] = e.cqPath), p;
    }, l = () => {
      const p = {
        cqPath: e.cqPath
      }, u = [
        "new",
        "section",
        "aem-Grid-newComponent"
      ];
      return p.placeholderClassNames = u.join(" "), p;
    }, m = (p) => {
      const u = {};
      return e.columnClassNames && e.columnClassNames[p] && (u.class = e.columnClassNames[p]), u;
    };
    return (p, u) => (f(), P(ye, A({
      "aem-no-decoration": e.aemNoDecoration,
      "cq-path": e.cqPath,
      "get-container-props": c,
      "get-item-component-props": m,
      "get-placeholder-props": l,
      "is-in-editor": h(a)
    }, { ...h(r) }), null, 16, ["aem-no-decoration", "cq-path", "is-in-editor"]));
  }
});
export {
  me as AllowedComponentPlaceholder,
  fe as AllowedComponentPlaceholderList,
  ye as AllowedComponentsContainer,
  we as ComponentMapping,
  te as CompositeEditableProvider,
  ne as CompositeModelProvider,
  ge as Container,
  Pe as ContainerPlaceholder,
  re as ContextProvider,
  ee as EditableProvider,
  Ie as MapTo,
  oe as ModelProvider,
  Ee as Page,
  Oe as ResponsiveGrid,
  x as Utils,
  ve as componentClassNames,
  be as componentProperties,
  se as withContext,
  ce as withEditable,
  ae as withModel
};
