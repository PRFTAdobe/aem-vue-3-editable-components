import { h as N, defineComponent as C, inject as b, useSlots as L, useAttrs as w, computed as v, unref as h, openBlock as u, createBlock as P, resolveDynamicComponent as E, normalizeProps as I, mergeProps as S, createElementBlock as q, guardReactiveProps as x, createCommentVNode as U, withCtx as z, onMounted as G, onUnmounted as W, ref as H, toRefs as V, provide as R, normalizeClass as Q, createElementVNode as J, Fragment as k, renderList as D, onUpdated as X } from "vue";
import { ComponentMapping as O } from "@adobe/aem-spa-component-mapping";
import { ComponentMapping as Se } from "@adobe/aem-spa-component-mapping";
import { AuthoringUtils as A, ModelManager as F, PathUtils as Y } from "@adobe/aem-spa-page-model-manager";
function Z(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var B = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  function o(m) {
    "@babel/helpers - typeof";
    return o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
      return typeof l;
    } : function(l) {
      return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
    }, o(m);
  }
  var r = 47, n = 46, a = function(l) {
    var p = o(l);
    if (p !== "string")
      throw new TypeError("Expected a string, got a ".concat(p));
  }, d = function(l, p) {
    for (var i = "", _ = 0, g = -1, j = 0, $, y = 0; y <= l.length; ++y) {
      if (y < l.length)
        $ = l.charCodeAt(y);
      else {
        if ($ === r)
          break;
        $ = r;
      }
      if ($ === r) {
        if (!(g === y - 1 || j === 1))
          if (g !== y - 1 && j === 2) {
            if (i.length < 2 || _ !== 2 || i.charCodeAt(i.length - 1) !== n || i.charCodeAt(i.length - 2) !== n) {
              if (i.length > 2) {
                var T = i.lastIndexOf("/");
                if (T !== i.length - 1) {
                  T === -1 ? (i = "", _ = 0) : (i = i.slice(0, T), _ = i.length - 1 - i.lastIndexOf("/")), g = y, j = 0;
                  continue;
                }
              } else if (i.length === 2 || i.length === 1) {
                i = "", _ = 0, g = y, j = 0;
                continue;
              }
            }
            p && (i.length > 0 ? i += "/.." : i = "..", _ = 2);
          } else
            i.length > 0 ? i += "/" + l.slice(g + 1, y) : i = l.slice(g + 1, y), _ = y - g - 1;
        g = y, j = 0;
      } else
        $ === n && j !== -1 ? ++j : j = -1;
    }
    return i;
  }, s = function(l) {
    try {
      return decodeURIComponent(l);
    } catch {
      return l;
    }
  }, c = function(l) {
    a(l);
    var p = l;
    if (p.length === 0)
      return ".";
    var i = p.charCodeAt(0) === r, _ = p.charCodeAt(p.length - 1) === r;
    return p = s(p), p = d(p, !i), p.length === 0 && !i && (p = "."), p.length > 0 && _ && (p += "/"), i ? "/" + p : p;
  }, f = c;
  e.default = f, t.exports = e.default;
})(B, B.exports);
var K = B.exports;
const ee = /* @__PURE__ */ Z(K), M = {
  getItemPath(t, e, o) {
    let r = (e == null ? void 0 : e.length) > 0 ? `${e}/${t}` : t;
    return o && (r = (e == null ? void 0 : e.length) > 0 ? `${e}/jcr:content/${t}` : t), r;
  },
  connectComponentWithItem(t, e, o, r, n, a) {
    const d = this.getItemPath(o, r, a);
    return N(t, {
      ...e,
      cqPath: d,
      containerProps: n(o)
    });
  },
  getChildComponents(t, e, o, r, n, a, d) {
    const s = [];
    return Object.keys(e).length > 0 && o.length > 0 && o.forEach((c) => {
      const f = this.modelToProps(
        e[c]
      );
      if (f && typeof f.cqType < "u") {
        const m = d.get(f.cqType);
        r && (f.aemNoDecoration = r), m && s.push(
          this.connectComponentWithItem(
            m,
            f,
            c,
            t,
            n,
            a
          )
        );
      }
    }), s;
  },
  getChildPages(t, e) {
    const o = [];
    return Object.keys(t).length === 0 || Object.keys(t).forEach((r) => {
      const n = this.modelToProps(
        t[r]
      );
      if (n && typeof n.cqType < "u") {
        const a = e.get(n.cqType);
        a && o.push(
          N(a, { ...n, cqPath: n.cqPath })
        );
      }
    }), o;
  },
  getCQPath(t) {
    const { pagePath: e = "", itemPath: o = "", injectPropsOnInit: r } = t;
    let { cqPath: n = "" } = t;
    return r && !n && (n = ee(
      o ? `${e}/jcr:content/${o}` : e
    ), n = n.replace(/^\.$/, "")), n;
  },
  modelToProps(t) {
    const e = Object.getOwnPropertyNames(t), o = {}, r = (n) => {
      const a = n.substring(1);
      return `cq${a.substring(0, 1).toUpperCase()}${a.substring(
        1
      )}`;
    };
    return e.forEach((n) => {
      let a = n;
      a.startsWith(":") && (a = r(a)), o[a] = t[n];
    }), o;
  }
}, te = /* @__PURE__ */ C({
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
  setup(t) {
    const e = t, o = b("isInEditor", A.isInEditor()), r = L(), n = w(), a = v(() => {
      const c = {}, { componentProperties: f } = e, { cqPath: m } = f;
      return o && (c["data-cq-data-path"] = m, e.editConfig.resourceType && (c["data-cq-resource-type"] = e.editConfig.resourceType)), c;
    }), d = v(() => {
      var i;
      const c = {}, { componentProperties: f } = e, { appliedCssClassNames: m, cqType: l } = f, p = [];
      return m && p.push(m), (i = e == null ? void 0 : e.containerProps) != null && i.class && p.push(e.containerProps.class), l && (l != null && l.endsWith("/container")) && p.push("aem-editable"), p.length && (c.class = p.join(" ")), c;
    }), s = v(() => o && typeof e.editConfig.isEmpty == "function" && e.editConfig.isEmpty(e.componentProperties) ? {
      class: "cq-placeholder",
      "data-emptytext": e.editConfig.emptyLabel
    } : null);
    return (c, f) => {
      var m, l, p, i;
      return !h(o) && e.componentProperties.hasOwnProperty("aemNoDecoration") && e.componentProperties.aemNoDecoration || e.componentProperties.hasOwnProperty("cqHierarchyType") && e.componentProperties.cqHierarchyType === "page" ? (u(), P(E((l = (m = h(r)).default) == null ? void 0 : l.call(m)[0]), I(S({ key: 0 }, { ...h(n), containerProps: e.containerProps })), null, 16)) : (u(), q("div", I(S({ key: 1 }, { ...a.value, ...d.value })), [
        (u(), P(E((i = (p = h(r)).default) == null ? void 0 : i.call(p)[0]), I(x({
          ...h(n),
          componentProperties: e.componentProperties
        })), null, 16)),
        s.value ? (u(), q("div", I(S({ key: 0 }, s.value)), null, 16)) : U("", !0)
      ], 16));
    };
  }
}), oe = /* @__PURE__ */ C({
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
  setup(t) {
    const e = t, o = L(), r = w();
    return (n, a) => (u(), P(te, I(x({
      ...h(r),
      componentProperties: { ...h(r) },
      editConfig: e.editConfig
    })), {
      default: z(() => {
        var d, s;
        return [
          (u(), P(E((s = (d = h(o)).default) == null ? void 0 : s.call(d)[0])))
        ];
      }),
      _: 1
    }, 16));
  }
}), ne = /* @__PURE__ */ C({
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
    modelProperties: {
      type: Object,
      default: () => ({})
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
  emits: ["updateModel"],
  setup(t, { emit: e }) {
    const o = t, r = L(), n = w(), a = b("isInEditor", A.isInEditor()), d = e, s = () => {
      const { pagePath: m, itemPath: l, injectPropsOnInit: p, cqPath: i } = o;
      return M.getCQPath({
        pagePath: m,
        itemPath: l,
        injectPropsOnInit: p,
        cqPath: i
      });
    }, c = (m) => {
      const { pagePath: l, itemPath: p, injectPropsOnInit: i } = o, _ = m || o.cqPath || l && M.getCQPath({ pagePath: l, itemPath: p, injectPropsOnInit: i });
      _ && F.getData({
        path: _,
        forceReload: o.cqForceReload
      }).then((g) => {
        g && Object.keys(g).length > 0 && (d("updateModel", {
          ...n,
          ...M.modelToProps(g),
          cqPath: s()
        }), i && a && Y.dispatchGlobalCustomEvent(
          "cq-async-content-loaded",
          {}
        ));
      }).catch((g) => {
        console.error(g);
      });
    }, f = c.bind(null, s());
    return G(() => {
      const m = s();
      o.injectPropsOnInit && c(m), F.addListener(m, f);
    }), W(() => {
      F.removeListener(o.cqPath, f);
    }), (m, l) => {
      var p, i;
      return u(), P(E((i = (p = h(r)).default) == null ? void 0 : i.call(p)[0]), I(x(t.modelProperties)), null, 16);
    };
  }
}), re = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "CompositeModelProvider",
  props: {
    modelConfig: {
      type: Object,
      default: () => ({ injectPropsOnInit: !1, forceReload: !1 })
    }
  },
  setup(t) {
    const e = t, o = L(), r = w(), n = H(r), { modelConfig: a } = V(e), d = r.cqForceReload || a.value.forceReload, { injectPropsOnInit: s } = a.value, c = (f) => {
      n.value = f;
    };
    return (f, m) => (u(), P(ne, S({
      "cq-force-reload": h(d),
      "inject-props-on-init": h(s),
      "model-properties": n.value
    }, n.value, { onUpdateModel: c }), {
      default: z(() => {
        var l, p;
        return [
          (u(), P(E((p = (l = h(o)).default) == null ? void 0 : p.call(l)[0])))
        ];
      }),
      _: 1
    }, 16, ["cq-force-reload", "inject-props-on-init", "model-properties"]));
  }
}), se = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "ContextProvider",
  setup(t) {
    const e = L(), o = w(), r = b("componentMapping", new O()), n = b("isInEditor", A.isInEditor());
    return R("isInEditor", n), R("componentMapping", r), (a, d) => {
      var s, c;
      return u(), P(E((c = (s = h(e)).default) == null ? void 0 : c.call(s)[0]), I(x({ ...h(o) })), null, 16);
    };
  }
}), ae = (t) => N(se, {}, () => [N(t)]), ie = (t, e) => N(re, { modelConfig: e }, () => [N(t)]), ce = (t, e) => N(oe, { editConfig: e }, () => [N(t)]), pe = (t, e, o) => {
  const {
    injectPropsOnInit: r = !0,
    forceReload: n = !1,
    ...a
  } = o || {}, d = {
    injectPropsOnInit: r,
    forceReload: n,
    ...a
  };
  let s = t;
  return s = ae(
    ie(ce(s, e), d)
  ), s;
}, le = O.map, de = O.get;
O.map = function(e, o, r = {
  isEmpty: () => !1
}, n = {}) {
  const { injectPropsOnInit: a = !1, ...d } = n || {}, s = pe(o, r, {
    injectPropsOnInit: a,
    ...d
  });
  return le.call(O, e, s), s;
};
O.get = de;
const Ie = (t) => (e, o, r = {}) => (
  // @ts-ignore
  O.map(t, e, o, r)
), be = (t, e, o, r, n, a) => {
  let d = [];
  t && (d = [t]), e && d.push(e), o && d.push(...o.split(" "));
  const s = r == null ? void 0 : r.class;
  return a && s && !n && d.push(s), d;
}, Ee = (t) => ({
  aemNoDecoration: {
    type: Boolean,
    default: !1
  },
  appliedCssClassNames: {
    type: String
  },
  baseCssClass: {
    type: String,
    default: t
  },
  containerProps: {
    type: Object,
    default: () => {
    }
  },
  cssClassNames: {
    type: String
  },
  // eslint-disable-next-line vue/require-default-prop
  id: {
    type: String
  }
}), me = ["data-cq-data-path", "data-emptytext"], ue = /* @__PURE__ */ C({
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
  setup(t) {
    const e = t;
    return (o, r) => (u(), q("div", {
      "data-cq-data-path": e.path,
      "data-emptytext": e.emptyLabel,
      class: "aem-AllowedComponent--component cq-placeholder placeholder"
    }, null, 8, me));
  }
}), fe = ["data-text"], he = /* @__PURE__ */ C({
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
  setup(t) {
    const e = t, o = v(
      () => e.components && e.components.length > 0 ? e.title : e.emptyLabel
    );
    return (r, n) => {
      var a;
      return u(), q("div", {
        class: Q([
          "aem-AllowedComponent--list",
          (a = e.placeholderProps) == null ? void 0 : a.placeholderClassNames
        ])
      }, [
        J("div", {
          "data-text": o.value,
          class: "aem-AllowedComponent--title"
        }, null, 8, fe),
        (u(!0), q(k, null, D(e.components, (d) => (u(), P(ue, {
          key: d.path,
          "empty-label": d.title,
          path: d.path
        }, null, 8, ["empty-label", "path"]))), 128))
      ], 2);
    };
  }
}), Pe = ["data-cq-data-path"], ge = /* @__PURE__ */ C({
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
  setup(t) {
    const e = t;
    return (o, r) => (u(), q("div", {
      class: Q(e.placeholderClassNames),
      "data-cq-data-path": `${e.cqPath}/*`
    }, null, 10, Pe));
  }
}), ye = /* @__PURE__ */ C({
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
  setup(t) {
    const e = t, o = b("isInEditor", A.isInEditor()), r = typeof e.isInEditor < "u" ? e.isInEditor : o, n = b("componentMapping", new O()), a = v(() => {
      let c = {};
      return typeof e.getContainerProps == "function" ? c = e.getContainerProps() : (c = {
        class: "aem-container"
      }, r && (c["data-cq-data-path"] = e.cqPath)), c;
    }), d = v(
      () => M.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        e.aemNoDecoration,
        typeof e.getItemComponentProps == "function" ? e.getItemComponentProps : () => ({}),
        !1,
        n
      )
    ), s = v(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    });
    return (c, f) => (u(), q("div", I(x({ ...a.value })), [
      (u(!0), q(k, null, D(d.value, (m) => (u(), P(E(m), {
        key: m.toString()
      }))), 128)),
      h(o) ? (u(), P(ge, I(S({ key: 0 }, s.value)), null, 16)) : U("", !0)
    ], 16));
  }
}), Ce = /* @__PURE__ */ C({
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
  setup(t) {
    const e = t, o = typeof e.isInEditor < "u" ? e.isInEditor : b("isInEditor", A.isInEditor()), r = v(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    }), n = w();
    return (a, d) => {
      var s;
      return h(o) && e.allowedComponents && ((s = e.allowedComponents) != null && s.applicable) ? (u(), P(he, {
        key: 0,
        components: e.allowedComponents.components,
        "cq-path": e.cqPath,
        "empty-label": e._allowedComponentPlaceholderListEmptyLabel,
        "placeholder-props": r.value,
        title: e.title
      }, null, 8, ["components", "cq-path", "empty-label", "placeholder-props", "title"])) : (u(), P(ye, S({
        key: 1,
        "aem-no-decoration": e.aemNoDecoration,
        "cq-items": e.cqItems,
        "cq-items-order": e.cqItemsOrder,
        "cq-path": e.cqPath,
        "get-container-props": e.getContainerProps,
        "get-item-component-props": e.getItemComponentProps,
        "get-placeholder-props": e.getPlaceholderProps,
        "is-in-editor": h(o)
      }, { ...h(n) }), null, 16, ["aem-no-decoration", "cq-items", "cq-items-order", "cq-path", "get-container-props", "get-item-component-props", "get-placeholder-props", "is-in-editor"]));
    };
  }
}), Oe = /* @__PURE__ */ C({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Page",
  inheritAttrs: !1,
  __name: "Page",
  props: {
    aemNoDecoration: {
      type: Boolean,
      default: !1
    },
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
  setup(t) {
    const e = w(), o = b("isInEditor", A.isInEditor()), r = b("componentMapping", new O()), n = t, a = v(
      () => M.getChildComponents(
        n.cqPath,
        n.cqItems,
        n.cqItemsOrder,
        n.aemNoDecoration,
        () => ({}),
        !0,
        r
      )
    ), d = v(
      () => M.getChildPages(n.cqChildren, r)
    ), s = v(() => {
      const c = ["aem-page"];
      e.cssClassNames && c.push(...e.cssClassNames.split(" "));
      const f = {
        class: c.join(" ")
      };
      return o && (f["data-cq-data-path"] = n.cqPath), f;
    });
    return G(() => {
      e.title && (document.title = e.title);
    }), X(() => {
      e.title && (document.title = e.title);
    }), (c, f) => (u(), q("div", I(x(s.value)), [
      (u(!0), q(k, null, D(a.value, (m) => (u(), P(E(m), {
        key: m.toString()
      }))), 128)),
      (u(!0), q(k, null, D(d.value, (m) => (u(), P(E(m), {
        key: m.toString()
      }))), 128))
    ], 16));
  }
}), je = /* @__PURE__ */ C({
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
    },
    title: {
      type: String,
      default: "Layout Container"
    }
  },
  setup(t) {
    const e = t, o = w(), r = typeof e.isInEditor < "u" ? e.isInEditor : b("isInEditor", A.isInEditor()), n = () => {
      const s = {}, c = ["aem-container"];
      return e.gridClassNames && c.push(e.gridClassNames), s.class = c.join(" "), r && (s["data-cq-data-path"] = e.cqPath), s;
    }, a = () => {
      const s = {
        cqPath: e.cqPath
      }, c = [
        "new",
        "section",
        "aem-Grid-newComponent"
      ];
      return s.placeholderClassNames = c.join(" "), s;
    }, d = (s) => {
      const c = {};
      return e.columnClassNames && e.columnClassNames[s] && (c.class = e.columnClassNames[s]), c;
    };
    return (s, c) => (u(), P(Ce, S({
      "aem-no-decoration": e.aemNoDecoration,
      "cq-path": e.cqPath,
      "get-container-props": n,
      "get-item-component-props": d,
      "get-placeholder-props": a,
      "is-in-editor": h(r),
      title: e.title
    }, { ...h(o) }), null, 16, ["aem-no-decoration", "cq-path", "is-in-editor", "title"]));
  }
});
export {
  ue as AllowedComponentPlaceholder,
  he as AllowedComponentPlaceholderList,
  Ce as AllowedComponentsContainer,
  Se as ComponentMapping,
  oe as CompositeEditableProvider,
  re as CompositeModelProvider,
  ye as Container,
  ge as ContainerPlaceholder,
  se as ContextProvider,
  te as EditableProvider,
  Ie as MapTo,
  ne as ModelProvider,
  Oe as Page,
  je as ResponsiveGrid,
  M as Utils,
  be as componentClassNames,
  Ee as componentProperties,
  ae as withContext,
  ce as withEditable,
  ie as withModel
};
