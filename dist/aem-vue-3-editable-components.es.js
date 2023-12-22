import { h as N, defineComponent as y, inject as v, useSlots as L, useAttrs as w, computed as C, unref as h, openBlock as u, createBlock as P, resolveDynamicComponent as I, normalizeProps as q, mergeProps as S, createElementBlock as _, guardReactiveProps as M, createCommentVNode as z, withCtx as U, reactive as W, onMounted as G, onUnmounted as H, toRefs as V, provide as R, normalizeClass as Q, createElementVNode as J, Fragment as k, renderList as D, onUpdated as X } from "vue";
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
  function o(d) {
    "@babel/helpers - typeof";
    return o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
      return typeof l;
    } : function(l) {
      return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
    }, o(d);
  }
  var n = 47, r = 46, i = function(l) {
    var m = o(l);
    if (m !== "string")
      throw new TypeError("Expected a string, got a ".concat(m));
  }, p = function(l, m) {
    for (var c = "", E = 0, O = -1, j = 0, $, g = 0; g <= l.length; ++g) {
      if (g < l.length)
        $ = l.charCodeAt(g);
      else {
        if ($ === n)
          break;
        $ = n;
      }
      if ($ === n) {
        if (!(O === g - 1 || j === 1))
          if (O !== g - 1 && j === 2) {
            if (c.length < 2 || E !== 2 || c.charCodeAt(c.length - 1) !== r || c.charCodeAt(c.length - 2) !== r) {
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
            m && (c.length > 0 ? c += "/.." : c = "..", E = 2);
          } else
            c.length > 0 ? c += "/" + l.slice(O + 1, g) : c = l.slice(O + 1, g), E = g - O - 1;
        O = g, j = 0;
      } else
        $ === r && j !== -1 ? ++j : j = -1;
    }
    return c;
  }, s = function(l) {
    try {
      return decodeURIComponent(l);
    } catch {
      return l;
    }
  }, a = function(l) {
    i(l);
    var m = l;
    if (m.length === 0)
      return ".";
    var c = m.charCodeAt(0) === n, E = m.charCodeAt(m.length - 1) === n;
    return m = s(m), m = p(m, !c), m.length === 0 && !c && (m = "."), m.length > 0 && E && (m += "/"), c ? "/" + m : m;
  }, f = a;
  e.default = f, t.exports = e.default;
})(B, B.exports);
var K = B.exports;
const ee = /* @__PURE__ */ Z(K), x = {
  getItemPath(t, e, o) {
    let n = (e == null ? void 0 : e.length) > 0 ? `${e}/${t}` : t;
    return o && (n = (e == null ? void 0 : e.length) > 0 ? `${e}/jcr:content/${t}` : t), n;
  },
  connectComponentWithItem(t, e, o, n, r, i) {
    const p = this.getItemPath(o, n, i);
    return N(t, {
      ...e,
      cqPath: p,
      containerProps: r(o)
    });
  },
  getChildComponents(t, e, o, n, r, i, p) {
    const s = [];
    return Object.keys(e).length > 0 && o.length > 0 && o.forEach((a) => {
      const f = this.modelToProps(
        e[a]
      );
      if (f && typeof f.cqType < "u") {
        const d = p.get(f.cqType);
        n && (f.aemNoDecoration = n), d && s.push(
          this.connectComponentWithItem(
            d,
            f,
            a,
            t,
            r,
            i
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
        const i = e.get(r.cqType);
        i && o.push(
          N(i, { ...r, cqPath: r.cqPath })
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
      const i = r.substring(1);
      return `cq${i.substring(0, 1).toUpperCase()}${i.substring(
        1
      )}`;
    };
    return e.forEach((r) => {
      let i = r;
      i.startsWith(":") && (i = n(i)), o[i] = t[r];
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
    const e = t, o = v("isInEditor", A.isInEditor()), n = L(), r = w(), i = C(() => {
      const a = {}, { componentProperties: f } = e, { cqPath: d } = f;
      return o && (a["data-cq-data-path"] = d, e.editConfig.resourceType && (a["data-cq-resource-type"] = e.editConfig.resourceType)), a;
    }), p = C(() => {
      var c;
      const a = {}, { componentProperties: f } = e, { appliedCssClassNames: d, cqType: l } = f, m = [];
      return d && m.push(d), (c = e == null ? void 0 : e.containerProps) != null && c.class && m.push(e.containerProps.class), l && (l != null && l.endsWith("/container")) && m.push("aem-editable"), m.length && (a.class = m.join(" ")), a;
    }), s = C(() => o && typeof e.editConfig.isEmpty == "function" && e.editConfig.isEmpty(e.componentProperties) ? {
      class: "cq-placeholder",
      "data-emptytext": e.editConfig.emptyLabel
    } : null);
    return (a, f) => {
      var d, l, m, c;
      return !h(o) && e.componentProperties.hasOwnProperty("aemNoDecoration") && e.componentProperties.aemNoDecoration || e.componentProperties.hasOwnProperty("cqHierarchyType") && e.componentProperties.cqHierarchyType === "page" ? (u(), P(I((l = (d = h(n)).default) == null ? void 0 : l.call(d)[0]), q(S({ key: 0 }, { ...h(r), containerProps: e.containerProps })), null, 16)) : (u(), _("div", q(S({ key: 1 }, { ...i.value, ...p.value })), [
        (u(), P(I((c = (m = h(n)).default) == null ? void 0 : c.call(m)[0]), q(M({
          ...h(r),
          componentProperties: e.componentProperties
        })), null, 16)),
        s.value ? (u(), _("div", q(S({ key: 0 }, s.value)), null, 16)) : z("", !0)
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
    const e = t, o = L(), n = w();
    return (r, i) => (u(), P(te, q(M({
      ...h(n),
      componentProperties: { ...h(n) },
      editConfig: e.editConfig
    })), {
      default: U(() => {
        var p, s;
        return [
          (u(), P(I((s = (p = h(o)).default) == null ? void 0 : s.call(p)[0])))
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
  setup(t) {
    const e = t, o = L(), n = v("isInEditor", A.isInEditor()), r = W(w()), i = () => {
      const { pagePath: a, itemPath: f, injectPropsOnInit: d, cqPath: l } = e;
      return x.getCQPath({
        pagePath: a,
        itemPath: f,
        injectPropsOnInit: d,
        cqPath: l
      });
    }, p = (a) => {
      const { pagePath: f, itemPath: d, injectPropsOnInit: l } = e, m = a || e.cqPath || f && x.getCQPath({ pagePath: f, itemPath: d, injectPropsOnInit: l });
      m && F.getData({
        path: m,
        forceReload: e.cqForceReload
      }).then((c) => {
        c && Object.keys(c).length > 0 && (Object.assign(r, x.modelToProps(c)), l && n && Y.dispatchGlobalCustomEvent(
          "cq-async-content-loaded",
          {}
        ));
      }).catch((c) => {
        console.error(c);
      });
    }, s = p.bind(null, i());
    return G(() => {
      const a = i();
      e.injectPropsOnInit && p(a), F.addListener(a, s);
    }), H(() => {
      F.removeListener(e.cqPath, s);
    }), (a, f) => {
      var d, l;
      return u(), P(I((l = (d = h(o)).default) == null ? void 0 : l.call(d)[0]), q(M({
        cqPath: i(),
        ...r
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
    const e = t, o = L(), n = w(), { modelConfig: r } = V(e), i = n.cqForceReload || r.value.forceReload, { injectPropsOnInit: p } = r.value;
    return (s, a) => (u(), P(ne, S({
      "cq-force-reload": h(i),
      "inject-props-on-init": h(p),
      "model-properties": { ...h(n) }
    }, { ...h(n) }), {
      default: U(() => {
        var f, d;
        return [
          (u(), P(I((d = (f = h(o)).default) == null ? void 0 : d.call(f)[0])))
        ];
      }),
      _: 1
    }, 16, ["cq-force-reload", "inject-props-on-init", "model-properties"]));
  }
}), se = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "ContextProvider",
  setup(t) {
    const e = L(), o = w(), n = v("componentMapping", new b()), r = v("isInEditor", A.isInEditor());
    return R("isInEditor", r), R("componentMapping", n), (i, p) => {
      var s, a;
      return u(), P(I((a = (s = h(e)).default) == null ? void 0 : a.call(s)[0]), q(M({ ...h(o) })), null, 16);
    };
  }
}), ae = (t) => N(se, {}, () => [N(t)]), ie = (t, e) => N(re, { modelConfig: e }, () => [N(t)]), ce = (t, e) => N(oe, { editConfig: e }, () => [N(t)]), pe = (t, e, o) => {
  const {
    injectPropsOnInit: n = !0,
    forceReload: r = !1,
    ...i
  } = o || {}, p = {
    injectPropsOnInit: n,
    forceReload: r,
    ...i
  };
  let s = t;
  return s = ae(
    ie(ce(s, e), p)
  ), s;
}, le = b.map, de = b.get;
b.map = function(e, o, n = {
  isEmpty: () => !1
}, r = {}) {
  const { injectPropsOnInit: i = !1, ...p } = r || {}, s = pe(o, n, {
    injectPropsOnInit: i,
    ...p
  });
  return le.call(b, e, s), s;
};
b.get = de;
const Ie = (t) => (e, o, n = {}) => (
  // @ts-ignore
  b.map(t, e, o, n)
), be = (t, e, o, n, r, i) => {
  let p = [];
  t && (p = [t]), e && p.push(e), o && p.push(...o.split(" "));
  const s = n == null ? void 0 : n.class;
  return i && s && !r && p.push(s), p;
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
    return (o, n) => (u(), _("div", {
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
    return (n, r) => {
      var i;
      return u(), _("div", {
        class: Q([
          "aem-AllowedComponent--list",
          (i = e.placeholderProps) == null ? void 0 : i.placeholderClassNames
        ])
      }, [
        J("div", {
          "data-text": o.value,
          class: "aem-AllowedComponent--title"
        }, null, 8, fe),
        (u(!0), _(k, null, D(e.components, (p) => (u(), P(ue, {
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
    return (o, n) => (u(), _("div", {
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
    const e = t, o = v("isInEditor", A.isInEditor()), n = typeof e.isInEditor < "u" ? e.isInEditor : o, r = v("componentMapping", new b()), i = C(() => {
      let a = {};
      return typeof e.getContainerProps == "function" ? a = e.getContainerProps() : (a = {
        class: "aem-container"
      }, n && (a["data-cq-data-path"] = e.cqPath)), a;
    }), p = C(
      () => x.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        e.aemNoDecoration,
        typeof e.getItemComponentProps == "function" ? e.getItemComponentProps : () => ({}),
        !1,
        r
      )
    ), s = C(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    });
    return (a, f) => (u(), _("div", q(M({ ...i.value })), [
      (u(!0), _(k, null, D(p.value, (d) => (u(), P(I(d), {
        key: d.toString()
      }))), 128)),
      h(o) ? (u(), P(ge, q(S({ key: 0 }, s.value)), null, 16)) : z("", !0)
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
    const e = t, o = typeof e.isInEditor < "u" ? e.isInEditor : v("isInEditor", A.isInEditor()), n = C(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    }), r = w();
    return (i, p) => {
      var s;
      return h(o) && e.allowedComponents && ((s = e.allowedComponents) != null && s.applicable) ? (u(), P(he, {
        key: 0,
        components: e.allowedComponents.components,
        "cq-path": e.cqPath,
        "empty-label": e._allowedComponentPlaceholderListEmptyLabel,
        "placeholder-props": n.value,
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
      }, { ...h(r) }), null, 16, ["aem-no-decoration", "cq-items", "cq-items-order", "cq-path", "get-container-props", "get-item-component-props", "get-placeholder-props", "is-in-editor"]));
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
    const e = w(), o = v("isInEditor", A.isInEditor()), n = v("componentMapping", new b()), r = t, i = C(
      () => x.getChildComponents(
        r.cqPath,
        r.cqItems,
        r.cqItemsOrder,
        r.aemNoDecoration,
        () => ({}),
        !0,
        n
      )
    ), p = C(
      () => x.getChildPages(r.cqChildren, n)
    ), s = C(() => {
      const a = ["aem-page"];
      e.cssClassNames && a.push(...e.cssClassNames.split(" "));
      const f = {
        class: a.join(" ")
      };
      return o && (f["data-cq-data-path"] = r.cqPath), f;
    });
    return G(() => {
      e.title && (document.title = e.title);
    }), X(() => {
      e.title && (document.title = e.title);
    }), (a, f) => (u(), _("div", q(M(s.value)), [
      (u(!0), _(k, null, D(i.value, (d) => (u(), P(I(d), {
        key: d.toString()
      }))), 128)),
      (u(!0), _(k, null, D(p.value, (d) => (u(), P(I(d), {
        key: d.toString()
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
    const e = t, o = w(), n = typeof e.isInEditor < "u" ? e.isInEditor : v("isInEditor", A.isInEditor()), r = () => {
      const s = {}, a = ["aem-container"];
      return e.gridClassNames && a.push(e.gridClassNames), s.class = a.join(" "), n && (s["data-cq-data-path"] = e.cqPath), s;
    }, i = () => {
      const s = {
        cqPath: e.cqPath
      }, a = [
        "new",
        "section",
        "aem-Grid-newComponent"
      ];
      return s.placeholderClassNames = a.join(" "), s;
    }, p = (s) => {
      const a = {};
      return e.columnClassNames && e.columnClassNames[s] && (a.class = e.columnClassNames[s]), a;
    };
    return (s, a) => (u(), P(Ce, S({
      "aem-no-decoration": e.aemNoDecoration,
      "cq-path": e.cqPath,
      "get-container-props": r,
      "get-item-component-props": p,
      "get-placeholder-props": i,
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
