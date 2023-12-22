import { h as w, defineComponent as C, inject as I, useSlots as L, useAttrs as S, computed as _, unref as h, openBlock as f, createBlock as P, resolveDynamicComponent as b, normalizeProps as q, mergeProps as N, createElementBlock as v, guardReactiveProps as x, createCommentVNode as U, withCtx as z, onMounted as G, onUnmounted as W, ref as H, toRefs as V, provide as B, normalizeClass as Q, createElementVNode as J, Fragment as k, renderList as D, onUpdated as X } from "vue";
import { ComponentMapping as E } from "@adobe/aem-spa-component-mapping";
import { ComponentMapping as Se } from "@adobe/aem-spa-component-mapping";
import { AuthoringUtils as A, ModelManager as F, PathUtils as Y } from "@adobe/aem-spa-page-model-manager";
function Z(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var R = { exports: {} };
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
  var n = 47, r = 46, a = function(l) {
    var c = o(l);
    if (c !== "string")
      throw new TypeError("Expected a string, got a ".concat(c));
  }, p = function(l, c) {
    for (var d = "", g = 0, O = -1, j = 0, $, y = 0; y <= l.length; ++y) {
      if (y < l.length)
        $ = l.charCodeAt(y);
      else {
        if ($ === n)
          break;
        $ = n;
      }
      if ($ === n) {
        if (!(O === y - 1 || j === 1))
          if (O !== y - 1 && j === 2) {
            if (d.length < 2 || g !== 2 || d.charCodeAt(d.length - 1) !== r || d.charCodeAt(d.length - 2) !== r) {
              if (d.length > 2) {
                var T = d.lastIndexOf("/");
                if (T !== d.length - 1) {
                  T === -1 ? (d = "", g = 0) : (d = d.slice(0, T), g = d.length - 1 - d.lastIndexOf("/")), O = y, j = 0;
                  continue;
                }
              } else if (d.length === 2 || d.length === 1) {
                d = "", g = 0, O = y, j = 0;
                continue;
              }
            }
            c && (d.length > 0 ? d += "/.." : d = "..", g = 2);
          } else
            d.length > 0 ? d += "/" + l.slice(O + 1, y) : d = l.slice(O + 1, y), g = y - O - 1;
        O = y, j = 0;
      } else
        $ === r && j !== -1 ? ++j : j = -1;
    }
    return d;
  }, s = function(l) {
    try {
      return decodeURIComponent(l);
    } catch {
      return l;
    }
  }, i = function(l) {
    a(l);
    var c = l;
    if (c.length === 0)
      return ".";
    var d = c.charCodeAt(0) === n, g = c.charCodeAt(c.length - 1) === n;
    return c = s(c), c = p(c, !d), c.length === 0 && !d && (c = "."), c.length > 0 && g && (c += "/"), d ? "/" + c : c;
  }, u = i;
  e.default = u, t.exports = e.default;
})(R, R.exports);
var K = R.exports;
const ee = /* @__PURE__ */ Z(K), M = {
  getItemPath(t, e, o) {
    let n = (e == null ? void 0 : e.length) > 0 ? `${e}/${t}` : t;
    return o && (n = (e == null ? void 0 : e.length) > 0 ? `${e}/jcr:content/${t}` : t), n;
  },
  connectComponentWithItem(t, e, o, n, r, a) {
    const p = this.getItemPath(o, n, a);
    return w(t, {
      ...e,
      cqPath: p,
      containerProps: r(o)
    });
  },
  getChildComponents(t, e, o, n, r, a, p) {
    const s = [];
    return Object.keys(e).length > 0 && o.length > 0 && o.forEach((i) => {
      const u = this.modelToProps(
        e[i]
      );
      if (u && typeof u.cqType < "u") {
        const m = p.get(u.cqType);
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
          w(a, { ...r, cqPath: r.cqPath })
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
    const e = t, o = I("isInEditor", A.isInEditor()), n = L(), r = S(), a = _(() => {
      const i = {}, { componentProperties: u } = e, { cqPath: m } = u;
      return o && (i["data-cq-data-path"] = m, e.editConfig.resourceType && (i["data-cq-resource-type"] = e.editConfig.resourceType)), i;
    }), p = _(() => {
      var d;
      const i = {}, { componentProperties: u } = e, { appliedCssClassNames: m, cqType: l } = u, c = [];
      return m && c.push(m), (d = e == null ? void 0 : e.containerProps) != null && d.class && c.push(e.containerProps.class), l && (l != null && l.endsWith("/container")) && c.push("aem-editable"), c.length && (i.class = c.join(" ")), i;
    }), s = _(() => o && typeof e.editConfig.isEmpty == "function" && e.editConfig.isEmpty(e.componentProperties) ? {
      class: "cq-placeholder",
      "data-emptytext": e.editConfig.emptyLabel
    } : null);
    return (i, u) => {
      var m, l, c, d;
      return !h(o) && e.componentProperties.hasOwnProperty("aemNoDecoration") && e.componentProperties.aemNoDecoration || e.componentProperties.hasOwnProperty("cqHierarchyType") && e.componentProperties.cqHierarchyType === "page" ? (f(), P(b((l = (m = h(n)).default) == null ? void 0 : l.call(m)[0]), q(N({ key: 0 }, { ...h(r), containerProps: e.containerProps })), null, 16)) : (f(), v("div", q(N({ key: 1 }, { ...a.value, ...p.value })), [
        (f(), P(b((d = (c = h(n)).default) == null ? void 0 : d.call(c)[0]), q(x({
          ...h(r),
          componentProperties: e.componentProperties
        })), null, 16)),
        s.value ? (f(), v("div", q(N({ key: 0 }, s.value)), null, 16)) : U("", !0)
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
    const e = t, o = L(), n = S();
    return (r, a) => (f(), P(te, q(x({
      ...h(n),
      componentProperties: { ...h(n) },
      editConfig: e.editConfig
    })), {
      default: z(() => {
        var p, s;
        return [
          (f(), P(b((s = (p = h(o)).default) == null ? void 0 : s.call(p)[0])))
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
    const o = t, n = L(), r = I("isInEditor", A.isInEditor()), a = e, p = () => {
      const { pagePath: u, itemPath: m, injectPropsOnInit: l, cqPath: c } = o;
      return M.getCQPath({
        pagePath: u,
        itemPath: m,
        injectPropsOnInit: l,
        cqPath: c
      });
    }, s = (u) => {
      const { pagePath: m, itemPath: l, injectPropsOnInit: c } = o, d = u || o.cqPath || m && M.getCQPath({ pagePath: m, itemPath: l, injectPropsOnInit: c });
      d && F.getData({
        path: d,
        forceReload: o.cqForceReload
      }).then((g) => {
        console.log(
          "Ran ModelProvider to retrieve the following data: ",
          g
        ), g && Object.keys(g).length > 0 && (a("updateModel", {
          ...M.modelToProps(g),
          cqPath: p()
        }), c && r && Y.dispatchGlobalCustomEvent(
          "cq-async-content-loaded",
          {}
        ));
      }).catch((g) => {
        console.error(g);
      });
    }, i = s.bind(null, p());
    return G(() => {
      const u = p();
      o.injectPropsOnInit && s(u), F.addListener(u, i);
    }), W(() => {
      F.removeListener(o.cqPath, i);
    }), (u, m) => {
      var l, c;
      return f(), P(b((c = (l = h(n)).default) == null ? void 0 : c.call(l)[0]), q(x(t.modelProperties)), null, 16);
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
    const e = t, o = L(), n = S(), r = H(n), { modelConfig: a } = V(e), p = n.cqForceReload || a.value.forceReload, { injectPropsOnInit: s } = a.value, i = (u) => {
      Object.assign(r.value, u);
    };
    return (u, m) => (f(), P(ne, N({
      "cq-force-reload": h(p),
      "inject-props-on-init": h(s),
      "model-properties": { ...h(n) }
    }, r.value, { onUpdateModel: i }), {
      default: z(() => {
        var l, c;
        return [
          (f(), P(b((c = (l = h(o)).default) == null ? void 0 : c.call(l)[0])))
        ];
      }),
      _: 1
    }, 16, ["cq-force-reload", "inject-props-on-init", "model-properties"]));
  }
}), se = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "ContextProvider",
  setup(t) {
    const e = L(), o = S(), n = I("componentMapping", new E()), r = I("isInEditor", A.isInEditor());
    return B("isInEditor", r), B("componentMapping", n), (a, p) => {
      var s, i;
      return f(), P(b((i = (s = h(e)).default) == null ? void 0 : i.call(s)[0]), q(x({ ...h(o) })), null, 16);
    };
  }
}), ae = (t) => w(se, {}, () => [w(t)]), ie = (t, e) => w(re, { modelConfig: e }, () => [w(t)]), ce = (t, e) => w(oe, { editConfig: e }, () => [w(t)]), pe = (t, e, o) => {
  const {
    injectPropsOnInit: n = !0,
    forceReload: r = !1,
    ...a
  } = o || {}, p = {
    injectPropsOnInit: n,
    forceReload: r,
    ...a
  };
  let s = t;
  return s = ae(
    ie(ce(s, e), p)
  ), s;
}, le = E.map, de = E.get;
E.map = function(e, o, n = {
  isEmpty: () => !1
}, r = {}) {
  const { injectPropsOnInit: a = !1, ...p } = r || {}, s = pe(o, n, {
    injectPropsOnInit: a,
    ...p
  });
  return le.call(E, e, s), s;
};
E.get = de;
const Ie = (t) => (e, o, n = {}) => (
  // @ts-ignore
  E.map(t, e, o, n)
), be = (t, e, o, n, r, a) => {
  let p = [];
  t && (p = [t]), e && p.push(e), o && p.push(...o.split(" "));
  const s = n == null ? void 0 : n.class;
  return a && s && !r && p.push(s), p;
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
        (f(!0), v(k, null, D(e.components, (p) => (f(), P(ue, {
          key: p.path,
          "empty-label": p.title,
          path: p.path
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
    }), p = _(
      () => M.getChildComponents(
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
    return (i, u) => (f(), v("div", q(x({ ...a.value })), [
      (f(!0), v(k, null, D(p.value, (m) => (f(), P(b(m), {
        key: m.toString()
      }))), 128)),
      h(o) ? (f(), P(ge, q(N({ key: 0 }, s.value)), null, 16)) : U("", !0)
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
    }), r = S();
    return (a, p) => {
      var s;
      return h(o) && e.allowedComponents && ((s = e.allowedComponents) != null && s.applicable) ? (f(), P(he, {
        key: 0,
        components: e.allowedComponents.components,
        "cq-path": e.cqPath,
        "empty-label": e._allowedComponentPlaceholderListEmptyLabel,
        "placeholder-props": n.value,
        title: e.title
      }, null, 8, ["components", "cq-path", "empty-label", "placeholder-props", "title"])) : (f(), P(ye, N({
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
    const e = S(), o = I("isInEditor", A.isInEditor()), n = I("componentMapping", new E()), r = t, a = _(
      () => M.getChildComponents(
        r.cqPath,
        r.cqItems,
        r.cqItemsOrder,
        r.aemNoDecoration,
        () => ({}),
        !0,
        n
      )
    ), p = _(
      () => M.getChildPages(r.cqChildren, n)
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
    }), (i, u) => (f(), v("div", q(x(s.value)), [
      (f(!0), v(k, null, D(a.value, (m) => (f(), P(b(m), {
        key: m.toString()
      }))), 128)),
      (f(!0), v(k, null, D(p.value, (m) => (f(), P(b(m), {
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
    const e = t, o = S(), n = typeof e.isInEditor < "u" ? e.isInEditor : I("isInEditor", A.isInEditor()), r = () => {
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
    }, p = (s) => {
      const i = {};
      return e.columnClassNames && e.columnClassNames[s] && (i.class = e.columnClassNames[s]), i;
    };
    return (s, i) => (f(), P(Ce, N({
      "aem-no-decoration": e.aemNoDecoration,
      "cq-path": e.cqPath,
      "get-container-props": r,
      "get-item-component-props": p,
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
  M as Utils,
  be as componentClassNames,
  Ee as componentProperties,
  ae as withContext,
  ce as withEditable,
  ie as withModel
};
