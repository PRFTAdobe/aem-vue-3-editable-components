import { h as N, defineComponent as C, inject as I, useSlots as L, useAttrs as w, computed as _, unref as h, openBlock as f, createBlock as P, resolveDynamicComponent as b, normalizeProps as q, mergeProps as S, createElementBlock as v, guardReactiveProps as $, createCommentVNode as z, withCtx as U, ref as W, onMounted as G, onUnmounted as H, toRefs as V, provide as R, normalizeClass as Q, createElementVNode as J, Fragment as k, renderList as D, onUpdated as X } from "vue";
import { ComponentMapping as E } from "@adobe/aem-spa-component-mapping";
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
    return o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(d) {
      return typeof d;
    } : function(d) {
      return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
    }, o(m);
  }
  var n = 47, r = 46, a = function(d) {
    var p = o(d);
    if (p !== "string")
      throw new TypeError("Expected a string, got a ".concat(p));
  }, c = function(d, p) {
    for (var l = "", g = 0, O = -1, j = 0, M, y = 0; y <= d.length; ++y) {
      if (y < d.length)
        M = d.charCodeAt(y);
      else {
        if (M === n)
          break;
        M = n;
      }
      if (M === n) {
        if (!(O === y - 1 || j === 1))
          if (O !== y - 1 && j === 2) {
            if (l.length < 2 || g !== 2 || l.charCodeAt(l.length - 1) !== r || l.charCodeAt(l.length - 2) !== r) {
              if (l.length > 2) {
                var T = l.lastIndexOf("/");
                if (T !== l.length - 1) {
                  T === -1 ? (l = "", g = 0) : (l = l.slice(0, T), g = l.length - 1 - l.lastIndexOf("/")), O = y, j = 0;
                  continue;
                }
              } else if (l.length === 2 || l.length === 1) {
                l = "", g = 0, O = y, j = 0;
                continue;
              }
            }
            p && (l.length > 0 ? l += "/.." : l = "..", g = 2);
          } else
            l.length > 0 ? l += "/" + d.slice(O + 1, y) : l = d.slice(O + 1, y), g = y - O - 1;
        O = y, j = 0;
      } else
        M === r && j !== -1 ? ++j : j = -1;
    }
    return l;
  }, s = function(d) {
    try {
      return decodeURIComponent(d);
    } catch {
      return d;
    }
  }, i = function(d) {
    a(d);
    var p = d;
    if (p.length === 0)
      return ".";
    var l = p.charCodeAt(0) === n, g = p.charCodeAt(p.length - 1) === n;
    return p = s(p), p = c(p, !l), p.length === 0 && !l && (p = "."), p.length > 0 && g && (p += "/"), l ? "/" + p : p;
  }, u = i;
  e.default = u, t.exports = e.default;
})(B, B.exports);
var K = B.exports;
const ee = /* @__PURE__ */ Z(K), x = {
  getItemPath(t, e, o) {
    let n = (e == null ? void 0 : e.length) > 0 ? `${e}/${t}` : t;
    return o && (n = (e == null ? void 0 : e.length) > 0 ? `${e}/jcr:content/${t}` : t), n;
  },
  connectComponentWithItem(t, e, o, n, r, a) {
    const c = this.getItemPath(o, n, a);
    return N(t, {
      ...e,
      cqPath: c,
      containerProps: r(o)
    });
  },
  getChildComponents(t, e, o, n, r, a, c) {
    const s = [];
    return Object.keys(e).length > 0 && o.length > 0 && o.forEach((i) => {
      const u = this.modelToProps(
        e[i]
      );
      if (u && typeof u.cqType < "u") {
        const m = c.get(u.cqType);
        n && (u.aemNoDecoration = n), m && s.push(
          this.connectComponentWithItem(
            m,
            u,
            i,
            t,
            r,
            a
          )
        );
      }
    }), s;
  },
  getChildPages(t, e) {
    const o = [];
    return Object.keys(t).length === 0 || Object.keys(t).forEach((n) => {
      const r = this.modelToProps(
        t[n]
      );
      if (r && typeof r.cqType < "u") {
        const a = e.get(r.cqType);
        a && o.push(
          N(a, { ...r, cqPath: r.cqPath })
        );
      }
    }), o;
  },
  getCQPath(t) {
    const { pagePath: e = "", itemPath: o = "", injectPropsOnInit: n } = t;
    let { cqPath: r = "" } = t;
    return n && !r && (r = ee(
      o ? `${e}/jcr:content/${o}` : e
    ), r = r.replace(/^\.$/, "")), r;
  },
  modelToProps(t) {
    const e = Object.getOwnPropertyNames(t), o = {}, n = (r) => {
      const a = r.substring(1);
      return `cq${a.substring(0, 1).toUpperCase()}${a.substring(
        1
      )}`;
    };
    return e.forEach((r) => {
      let a = r;
      a.startsWith(":") && (a = n(a)), o[a] = t[r];
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
    const e = t, o = I("isInEditor", A.isInEditor()), n = L(), r = w(), a = _(() => {
      const i = {}, { componentProperties: u } = e, { cqPath: m } = u;
      return o && (i["data-cq-data-path"] = m, e.editConfig.resourceType && (i["data-cq-resource-type"] = e.editConfig.resourceType)), i;
    }), c = _(() => {
      var l;
      const i = {}, { componentProperties: u } = e, { appliedCssClassNames: m, cqType: d } = u, p = [];
      return m && p.push(m), (l = e == null ? void 0 : e.containerProps) != null && l.class && p.push(e.containerProps.class), d && (d != null && d.endsWith("/container")) && p.push("aem-editable"), p.length && (i.class = p.join(" ")), i;
    }), s = _(() => o && typeof e.editConfig.isEmpty == "function" && e.editConfig.isEmpty(e.componentProperties) ? {
      class: "cq-placeholder",
      "data-emptytext": e.editConfig.emptyLabel
    } : null);
    return (i, u) => {
      var m, d, p, l;
      return !h(o) && e.componentProperties.hasOwnProperty("aemNoDecoration") && e.componentProperties.aemNoDecoration || e.componentProperties.hasOwnProperty("cqHierarchyType") && e.componentProperties.cqHierarchyType === "page" ? (f(), P(b((d = (m = h(n)).default) == null ? void 0 : d.call(m)[0]), q(S({ key: 0 }, { ...h(r), containerProps: e.containerProps })), null, 16)) : (f(), v("div", q(S({ key: 1 }, { ...a.value, ...c.value })), [
        (f(), P(b((l = (p = h(n)).default) == null ? void 0 : l.call(p)[0]), q($({
          ...h(r),
          componentProperties: e.componentProperties
        })), null, 16)),
        s.value ? (f(), v("div", q(S({ key: 0 }, s.value)), null, 16)) : z("", !0)
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
    const e = t, o = L(), n = w();
    return (r, a) => (f(), P(te, q($({
      ...h(n),
      componentProperties: { ...h(n) },
      editConfig: e.editConfig
    })), {
      default: U(() => {
        var c, s;
        return [
          (f(), P(b((s = (c = h(o)).default) == null ? void 0 : s.call(c)[0])))
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
    // eslint-disable-next-line vue/require-default-prop
    pagePath: {
      type: String
    },
    // eslint-disable-next-line vue/require-default-prop
    itemPath: {
      type: String
    }
  },
  setup(t) {
    const e = t, o = L(), n = w(), r = I("isInEditor", A.isInEditor()), a = W(n), c = () => {
      const { pagePath: u, itemPath: m, injectPropsOnInit: d, cqPath: p } = e;
      return x.getCQPath({
        pagePath: u,
        itemPath: m,
        injectPropsOnInit: d,
        cqPath: p
      });
    }, s = (u) => {
      const { pagePath: m, itemPath: d, injectPropsOnInit: p } = e, l = u || e.cqPath || m && x.getCQPath({ pagePath: m, itemPath: d, injectPropsOnInit: p });
      l && F.getData({
        path: l,
        forceReload: e.cqForceReload
      }).then((g) => {
        g && Object.keys(g).length > 0 && (a.value = {
          ...a.value,
          ...x.modelToProps(g),
          cqPath: c()
        }, p && r && Y.dispatchGlobalCustomEvent(
          "cq-async-content-loaded",
          {}
        ));
      }).catch((g) => {
        console.error(g);
      });
    }, i = s.bind(null, c());
    return G(() => {
      const u = c();
      e.injectPropsOnInit && s(u), F.addListener(u, i);
    }), H(() => {
      F.removeListener(e.cqPath, i);
    }), (u, m) => {
      var d, p;
      return f(), P(b((p = (d = h(o)).default) == null ? void 0 : p.call(d)[0]), q($(a.value)), null, 16);
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
    const e = t, o = L(), n = w(), { modelConfig: r } = V(e), a = n.cqForceReload || r.value.forceReload, { injectPropsOnInit: c } = r.value;
    return (s, i) => (f(), P(ne, S({
      "cq-force-reload": h(a),
      "inject-props-on-init": h(c)
    }, { ...h(n) }), {
      default: U(() => {
        var u, m;
        return [
          (f(), P(b((m = (u = h(o)).default) == null ? void 0 : m.call(u)[0])))
        ];
      }),
      _: 1
    }, 16, ["cq-force-reload", "inject-props-on-init"]));
  }
}), se = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "ContextProvider",
  setup(t) {
    const e = L(), o = w(), n = I("componentMapping", new E()), r = I("isInEditor", A.isInEditor());
    return R("isInEditor", r), R("componentMapping", n), (a, c) => {
      var s, i;
      return f(), P(b((i = (s = h(e)).default) == null ? void 0 : i.call(s)[0]), q($({ ...h(o) })), null, 16);
    };
  }
}), ae = (t) => N(se, {}, () => [N(t)]), ie = (t, e) => N(re, { modelConfig: e }, () => [N(t)]), ce = (t, e) => N(oe, { editConfig: e }, () => [N(t)]), pe = (t, e, o) => {
  const {
    injectPropsOnInit: n = !0,
    forceReload: r = !1,
    ...a
  } = o || {}, c = {
    injectPropsOnInit: n,
    forceReload: r,
    ...a
  };
  let s = t;
  return s = ae(
    ie(ce(s, e), c)
  ), s;
}, le = E.map, de = E.get;
E.map = function(e, o, n = {
  isEmpty: () => !1
}, r = {}) {
  const { injectPropsOnInit: a = !1, ...c } = r || {}, s = pe(o, n, {
    injectPropsOnInit: a,
    ...c
  });
  return le.call(E, e, s), s;
};
E.get = de;
const Ie = (t) => (e, o, n = {}) => (
  // @ts-ignore
  E.map(t, e, o, n)
), be = (t, e, o, n, r, a) => {
  let c = [];
  t && (c = [t]), e && c.push(e), o && c.push(...o.split(" "));
  const s = n == null ? void 0 : n.class;
  return a && s && !r && c.push(s), c;
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
    return (o, n) => (f(), v("div", {
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
    const e = t, o = _(
      () => e.components && e.components.length > 0 ? e.title : e.emptyLabel
    );
    return (n, r) => {
      var a;
      return f(), v("div", {
        class: Q([
          "aem-AllowedComponent--list",
          (a = e.placeholderProps) == null ? void 0 : a.placeholderClassNames
        ])
      }, [
        J("div", {
          "data-text": o.value,
          class: "aem-AllowedComponent--title"
        }, null, 8, fe),
        (f(!0), v(k, null, D(e.components, (c) => (f(), P(ue, {
          key: c.path,
          "empty-label": c.title,
          path: c.path
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
    return (o, n) => (f(), v("div", {
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
    const e = t, o = I("isInEditor", A.isInEditor()), n = typeof e.isInEditor < "u" ? e.isInEditor : o, r = I("componentMapping", new E()), a = _(() => {
      let i = {};
      return typeof e.getContainerProps == "function" ? i = e.getContainerProps() : (i = {
        class: "aem-container"
      }, n && (i["data-cq-data-path"] = e.cqPath)), i;
    }), c = _(
      () => x.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        e.aemNoDecoration,
        typeof e.getItemComponentProps == "function" ? e.getItemComponentProps : () => ({}),
        !1,
        r
      )
    ), s = _(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    });
    return (i, u) => (f(), v("div", q($({ ...a.value })), [
      (f(!0), v(k, null, D(c.value, (m) => (f(), P(b(m), {
        key: m.toString()
      }))), 128)),
      h(o) ? (f(), P(ge, q(S({ key: 0 }, s.value)), null, 16)) : z("", !0)
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
    const e = t, o = typeof e.isInEditor < "u" ? e.isInEditor : I("isInEditor", A.isInEditor()), n = _(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    }), r = w();
    return (a, c) => {
      var s;
      return h(o) && e.allowedComponents && ((s = e.allowedComponents) != null && s.applicable) ? (f(), P(he, {
        key: 0,
        components: e.allowedComponents.components,
        "cq-path": e.cqPath,
        "empty-label": e._allowedComponentPlaceholderListEmptyLabel,
        "placeholder-props": n.value,
        title: e.title
      }, null, 8, ["components", "cq-path", "empty-label", "placeholder-props", "title"])) : (f(), P(ye, S({
        key: 1,
        "aem-no-decoration": e.aemNoDecoration,
        "cq-items": e.cqItems,
        "cq-items-order": e.cqItemsOrder,
        "cq-path": e.cqPath,
        "get-container-props": e.getContainerProps,
        "get-item-component-props": e.getItemComponentProps,
        "get-placeholder-props": e.getPlaceholderProps,
        "is-in-editor": h(o)
      }, { ...h(r) }), null, 16, ["aem-no-decoration", "cq-items", "cq-items-order", "cq-path", "get-container-props", "get-item-component-props", "get-placeholder-props", "is-in-editor"]));
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
    const e = w(), o = I("isInEditor", A.isInEditor()), n = I("componentMapping", new E()), r = t, a = _(
      () => x.getChildComponents(
        r.cqPath,
        r.cqItems,
        r.cqItemsOrder,
        r.aemNoDecoration,
        () => ({}),
        !0,
        n
      )
    ), c = _(
      () => x.getChildPages(r.cqChildren, n)
    ), s = _(() => {
      const i = ["aem-page"];
      e.cssClassNames && i.push(...e.cssClassNames.split(" "));
      const u = {
        class: i.join(" ")
      };
      return o && (u["data-cq-data-path"] = r.cqPath), u;
    });
    return G(() => {
      e.title && (document.title = e.title);
    }), X(() => {
      e.title && (document.title = e.title);
    }), (i, u) => (f(), v("div", q($(s.value)), [
      (f(!0), v(k, null, D(a.value, (m) => (f(), P(b(m), {
        key: m.toString()
      }))), 128)),
      (f(!0), v(k, null, D(c.value, (m) => (f(), P(b(m), {
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
    const e = t, o = w(), n = typeof e.isInEditor < "u" ? e.isInEditor : I("isInEditor", A.isInEditor()), r = () => {
      const s = {}, i = ["aem-container"];
      return e.gridClassNames && i.push(e.gridClassNames), s.class = i.join(" "), n && (s["data-cq-data-path"] = e.cqPath), s;
    }, a = () => {
      const s = {
        cqPath: e.cqPath
      }, i = [
        "new",
        "section",
        "aem-Grid-newComponent"
      ];
      return s.placeholderClassNames = i.join(" "), s;
    }, c = (s) => {
      const i = {};
      return e.columnClassNames && e.columnClassNames[s] && (i.class = e.columnClassNames[s]), i;
    };
    return (s, i) => (f(), P(Ce, S({
      "aem-no-decoration": e.aemNoDecoration,
      "cq-path": e.cqPath,
      "get-container-props": r,
      "get-item-component-props": c,
      "get-placeholder-props": a,
      "is-in-editor": h(n),
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
  x as Utils,
  be as componentClassNames,
  Ee as componentProperties,
  ae as withContext,
  ce as withEditable,
  ie as withModel
};
