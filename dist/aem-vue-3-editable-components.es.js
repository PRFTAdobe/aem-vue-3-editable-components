import { h as N, defineComponent as y, inject as v, useSlots as L, useAttrs as w, computed as C, unref as h, openBlock as f, createBlock as P, resolveDynamicComponent as I, normalizeProps as q, mergeProps as S, createElementBlock as _, guardReactiveProps as M, createCommentVNode as z, withCtx as U, reactive as W, onMounted as G, onUnmounted as H, toRefs as V, provide as R, normalizeClass as Q, createElementVNode as J, Fragment as k, renderList as D, onUpdated as X } from "vue";
import { ComponentMapping as b } from "@adobe/aem-spa-component-mapping";
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
    var d = o(l);
    if (d !== "string")
      throw new TypeError("Expected a string, got a ".concat(d));
  }, p = function(l, d) {
    for (var c = "", E = 0, O = -1, j = 0, $, g = 0; g <= l.length; ++g) {
      if (g < l.length)
        $ = l.charCodeAt(g);
      else {
        if ($ === r)
          break;
        $ = r;
      }
      if ($ === r) {
        if (!(O === g - 1 || j === 1))
          if (O !== g - 1 && j === 2) {
            if (c.length < 2 || E !== 2 || c.charCodeAt(c.length - 1) !== n || c.charCodeAt(c.length - 2) !== n) {
              if (c.length > 2) {
                var T = c.lastIndexOf("/");
                if (T !== c.length - 1) {
                  T === -1 ? (c = "", E = 0) : (c = c.slice(0, T), E = c.length - 1 - c.lastIndexOf("/")), O = g, j = 0;
                  continue;
                }
              } else if (c.length === 2 || c.length === 1) {
                c = "", E = 0, O = g, j = 0;
                continue;
              }
            }
            d && (c.length > 0 ? c += "/.." : c = "..", E = 2);
          } else
            c.length > 0 ? c += "/" + l.slice(O + 1, g) : c = l.slice(O + 1, g), E = g - O - 1;
        O = g, j = 0;
      } else
        $ === n && j !== -1 ? ++j : j = -1;
    }
    return c;
  }, s = function(l) {
    try {
      return decodeURIComponent(l);
    } catch {
      return l;
    }
  }, i = function(l) {
    a(l);
    var d = l;
    if (d.length === 0)
      return ".";
    var c = d.charCodeAt(0) === r, E = d.charCodeAt(d.length - 1) === r;
    return d = s(d), d = p(d, !c), d.length === 0 && !c && (d = "."), d.length > 0 && E && (d += "/"), c ? "/" + d : d;
  }, u = i;
  e.default = u, t.exports = e.default;
})(B, B.exports);
var K = B.exports;
const ee = /* @__PURE__ */ Z(K), x = {
  getItemPath(t, e, o) {
    let r = (e == null ? void 0 : e.length) > 0 ? `${e}/${t}` : t;
    return o && (r = (e == null ? void 0 : e.length) > 0 ? `${e}/jcr:content/${t}` : t), r;
  },
  connectComponentWithItem(t, e, o, r, n, a) {
    const p = this.getItemPath(o, r, a);
    return N(t, {
      ...e,
      cqPath: p,
      containerProps: n(o)
    });
  },
  getChildComponents(t, e, o, r, n, a, p) {
    const s = [];
    return Object.keys(e).length > 0 && o.length > 0 && o.forEach((i) => {
      const u = this.modelToProps(
        e[i]
      );
      if (u && typeof u.cqType < "u") {
        const m = p.get(u.cqType);
        r && (u.aemNoDecoration = r), m && s.push(
          this.connectComponentWithItem(
            m,
            u,
            i,
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
}, te = /* @__PURE__ */ y({
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
    const e = t, o = v("isInEditor", A.isInEditor()), r = L(), n = w(), a = C(() => {
      const i = {}, { componentProperties: u } = e;
      return o && (i["data-cq-data-path"] = u.cqPath, e.editConfig.resourceType && (i["data-cq-resource-type"] = e.editConfig.resourceType)), i;
    }), p = C(() => {
      var c;
      const i = {}, { componentProperties: u } = e, { appliedCssClassNames: m, cqType: l } = u, d = [];
      return m && d.push(m), (c = e == null ? void 0 : e.containerProps) != null && c.class && d.push(e.containerProps.class), l && (l != null && l.endsWith("/container")) && d.push("aem-editable"), d.length && (i.class = d.join(" ")), i;
    }), s = C(() => o && typeof e.editConfig.isEmpty == "function" && e.editConfig.isEmpty(e.componentProperties) ? {
      class: "cq-placeholder",
      "data-emptytext": e.editConfig.emptyLabel
    } : null);
    return (i, u) => {
      var m, l, d, c;
      return !h(o) && e.componentProperties.hasOwnProperty("aemNoDecoration") && e.componentProperties.aemNoDecoration || e.componentProperties.hasOwnProperty("cqHierarchyType") && e.componentProperties.cqHierarchyType === "page" ? (f(), P(I((l = (m = h(r)).default) == null ? void 0 : l.call(m)[0]), q(S({ key: 0 }, { ...h(n), containerProps: e.containerProps })), null, 16)) : (f(), _("div", q(S({ key: 1 }, { ...a.value, ...p.value })), [
        (f(), P(I((c = (d = h(r)).default) == null ? void 0 : c.call(d)[0]), q(M({
          ...h(n),
          componentProperties: e.componentProperties
        })), null, 16)),
        s.value ? (f(), _("div", q(S({ key: 0 }, s.value)), null, 16)) : z("", !0)
      ], 16));
    };
  }
}), oe = /* @__PURE__ */ y({
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
    return (n, a) => (f(), P(te, q(M({
      ...h(r),
      componentProperties: { ...h(r) },
      editConfig: e.editConfig
    })), {
      default: U(() => {
        var p, s;
        return [
          (f(), P(I((s = (p = h(o)).default) == null ? void 0 : s.call(p)[0])))
        ];
      }),
      _: 1
    }, 16));
  }
}), ne = /* @__PURE__ */ y({
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
    itemPath: {
      type: String
    },
    // eslint-disable-next-line vue/require-default-prop
    pagePath: {
      type: String
    }
  },
  setup(t) {
    const e = t, o = L(), r = v("isInEditor", A.isInEditor()), n = W({}), a = () => {
      const { pagePath: i, itemPath: u, injectPropsOnInit: m, cqPath: l } = e;
      return x.getCQPath({
        pagePath: i,
        itemPath: u,
        injectPropsOnInit: m,
        cqPath: l
      });
    }, p = (i) => {
      const { pagePath: u, itemPath: m, injectPropsOnInit: l } = e, d = i || e.cqPath || u && x.getCQPath({ pagePath: u, itemPath: m, injectPropsOnInit: l });
      d && F.getData({
        path: d,
        forceReload: e.cqForceReload
      }).then((c) => {
        c && Object.keys(c).length > 0 && (Object.assign(n, x.modelToProps(c)), l && r && Y.dispatchGlobalCustomEvent(
          "cq-async-content-loaded",
          {}
        ));
      }).catch((c) => {
        console.error(c);
      });
    }, s = p.bind(null, a());
    return G(() => {
      const i = a();
      e.injectPropsOnInit && p(i), F.addListener(i, s);
    }), H(() => {
      F.removeListener(e.cqPath, s);
    }), (i, u) => {
      var m, l;
      return f(), P(I((l = (m = h(o)).default) == null ? void 0 : l.call(m)[0]), q(M({
        ...w(),
        ...n,
        cqPath: a()
      })), null, 16);
    };
  }
}), re = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "CompositeModelProvider",
  props: {
    modelConfig: {
      type: Object,
      default: () => ({ injectPropsOnInit: !1, forceReload: !1 })
    }
  },
  setup(t) {
    const e = t, o = L(), r = w(), { modelConfig: n } = V(e), a = r.cqForceReload || n.value.forceReload, { injectPropsOnInit: p } = n.value;
    return (s, i) => (f(), P(ne, S({
      "cq-force-reload": h(a),
      "inject-props-on-init": h(p)
    }, { ...h(r) }), {
      default: U(() => {
        var u, m;
        return [
          (f(), P(I((m = (u = h(o)).default) == null ? void 0 : m.call(u)[0])))
        ];
      }),
      _: 1
    }, 16, ["cq-force-reload", "inject-props-on-init"]));
  }
}), se = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "ContextProvider",
  setup(t) {
    const e = L(), o = w(), r = v("componentMapping", new b()), n = v("isInEditor", A.isInEditor());
    return R("isInEditor", n), R("componentMapping", r), (a, p) => {
      var s, i;
      return f(), P(I((i = (s = h(e)).default) == null ? void 0 : i.call(s)[0]), q(M({ ...h(o) })), null, 16);
    };
  }
}), ae = (t) => N(se, {}, () => [N(t)]), ie = (t, e) => N(re, { modelConfig: e }, () => [N(t)]), ce = (t, e) => N(oe, { editConfig: e }, () => [N(t)]), pe = (t, e, o) => {
  const {
    injectPropsOnInit: r = !0,
    forceReload: n = !1,
    ...a
  } = o || {}, p = {
    injectPropsOnInit: r,
    forceReload: n,
    ...a
  };
  let s = t;
  return s = ae(
    ie(ce(s, e), p)
  ), s;
}, le = b.map, de = b.get;
b.map = function(e, o, r = {
  isEmpty: () => !1
}, n = {}) {
  const { injectPropsOnInit: a = !1, ...p } = n || {}, s = pe(o, r, {
    injectPropsOnInit: a,
    ...p
  });
  return le.call(b, e, s), s;
};
b.get = de;
const Ie = (t) => (e, o, r = {}) => (
  // @ts-ignore
  b.map(t, e, o, r)
), be = (t, e, o, r, n, a) => {
  let p = [];
  t && (p = [t]), e && p.push(e), o && p.push(...o.split(" "));
  const s = r == null ? void 0 : r.class;
  return a && s && !n && p.push(s), p;
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
}), me = ["data-cq-data-path", "data-emptytext"], ue = /* @__PURE__ */ y({
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
    return (o, r) => (f(), _("div", {
      "data-cq-data-path": e.path,
      "data-emptytext": e.emptyLabel,
      class: "aem-AllowedComponent--component cq-placeholder placeholder"
    }, null, 8, me));
  }
}), fe = ["data-text"], he = /* @__PURE__ */ y({
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
    const e = t, o = C(
      () => e.components && e.components.length > 0 ? e.title : e.emptyLabel
    );
    return (r, n) => {
      var a;
      return f(), _("div", {
        class: Q([
          "aem-AllowedComponent--list",
          (a = e.placeholderProps) == null ? void 0 : a.placeholderClassNames
        ])
      }, [
        J("div", {
          "data-text": o.value,
          class: "aem-AllowedComponent--title"
        }, null, 8, fe),
        (f(!0), _(k, null, D(e.components, (p) => (f(), P(ue, {
          key: p.path,
          "empty-label": p.title,
          path: p.path
        }, null, 8, ["empty-label", "path"]))), 128))
      ], 2);
    };
  }
}), Pe = ["data-cq-data-path"], ge = /* @__PURE__ */ y({
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
    return (o, r) => (f(), _("div", {
      class: Q(e.placeholderClassNames),
      "data-cq-data-path": `${e.cqPath}/*`
    }, null, 10, Pe));
  }
}), ye = /* @__PURE__ */ y({
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
    const e = t, o = typeof e.isInEditor < "u" ? e.isInEditor : v("isInEditor", A.isInEditor()), r = v("componentMapping", new b()), n = C(() => {
      let s = {};
      return typeof e.getContainerProps == "function" ? s = e.getContainerProps() : (s = {
        class: "aem-container"
      }, o && (s["data-cq-data-path"] = e.cqPath)), s;
    }), a = C(
      () => x.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        e.aemNoDecoration,
        typeof e.getItemComponentProps == "function" ? e.getItemComponentProps : () => ({}),
        !1,
        r
      )
    ), p = C(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    });
    return (s, i) => (f(), _("div", q(M({ ...n.value })), [
      (f(!0), _(k, null, D(a.value, (u) => (f(), P(I(u), {
        key: u.toString()
      }))), 128)),
      h(o) ? (f(), P(ge, q(S({ key: 0 }, p.value)), null, 16)) : z("", !0)
    ], 16));
  }
}), Ce = /* @__PURE__ */ y({
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
    const e = t, o = typeof e.isInEditor < "u" ? e.isInEditor : v("isInEditor", A.isInEditor()), r = C(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    }), n = w();
    return (a, p) => {
      var s;
      return h(o) && e.allowedComponents && ((s = e.allowedComponents) != null && s.applicable) ? (f(), P(he, {
        key: 0,
        components: e.allowedComponents.components,
        "cq-path": e.cqPath,
        "empty-label": e._allowedComponentPlaceholderListEmptyLabel,
        "placeholder-props": r.value,
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
      }, { ...h(n) }), null, 16, ["aem-no-decoration", "cq-items", "cq-items-order", "cq-path", "get-container-props", "get-item-component-props", "get-placeholder-props", "is-in-editor"]));
    };
  }
}), Oe = /* @__PURE__ */ y({
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
    const e = w(), o = v("isInEditor", A.isInEditor()), r = v("componentMapping", new b()), n = t, a = C(
      () => x.getChildComponents(
        n.cqPath,
        n.cqItems,
        n.cqItemsOrder,
        n.aemNoDecoration,
        () => ({}),
        !0,
        r
      )
    ), p = C(
      () => x.getChildPages(n.cqChildren, r)
    ), s = C(() => {
      const i = ["aem-page"];
      e.cssClassNames && i.push(...e.cssClassNames.split(" "));
      const u = {
        class: i.join(" ")
      };
      return o && (u["data-cq-data-path"] = n.cqPath), u;
    });
    return G(() => {
      e.title && (document.title = e.title);
    }), X(() => {
      e.title && (document.title = e.title);
    }), (i, u) => (f(), _("div", q(M(s.value)), [
      (f(!0), _(k, null, D(a.value, (m) => (f(), P(I(m), {
        key: m.toString()
      }))), 128)),
      (f(!0), _(k, null, D(p.value, (m) => (f(), P(I(m), {
        key: m.toString()
      }))), 128))
    ], 16));
  }
}), je = /* @__PURE__ */ y({
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
    const e = t, o = w(), r = typeof e.isInEditor < "u" ? e.isInEditor : v("isInEditor", A.isInEditor()), n = () => {
      const s = {}, i = ["aem-container"];
      return e.gridClassNames && i.push(e.gridClassNames), s.class = i.join(" "), r && (s["data-cq-data-path"] = e.cqPath), s;
    }, a = () => {
      const s = {
        cqPath: e.cqPath
      }, i = [
        "new",
        "section",
        "aem-Grid-newComponent"
      ];
      return s.placeholderClassNames = i.join(" "), s;
    }, p = (s) => {
      const i = {};
      return e.columnClassNames && e.columnClassNames[s] && (i.class = e.columnClassNames[s]), i;
    };
    return (s, i) => (f(), P(Ce, S({
      "aem-no-decoration": e.aemNoDecoration,
      "cq-path": e.cqPath,
      "get-container-props": n,
      "get-item-component-props": p,
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
  x as Utils,
  be as componentClassNames,
  Ee as componentProperties,
  ae as withContext,
  ce as withEditable,
  ie as withModel
};
