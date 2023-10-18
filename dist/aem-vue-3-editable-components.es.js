import { h as N, defineComponent as y, inject as v, useSlots as k, useAttrs as w, computed as C, unref as h, openBlock as f, createBlock as P, resolveDynamicComponent as I, normalizeProps as q, mergeProps as S, createElementBlock as _, guardReactiveProps as $, createCommentVNode as z, withCtx as U, ref as Q, onMounted as H, onUnmounted as W, toRefs as V, provide as R, normalizeClass as G, createElementVNode as J, Fragment as L, renderList as D } from "vue";
import { ComponentMapping as b } from "@adobe/aem-spa-component-mapping";
import { ComponentMapping as we } from "@adobe/aem-spa-component-mapping";
import { AuthoringUtils as A, ModelManager as F, PathUtils as X } from "@adobe/aem-spa-page-model-manager";
function Y(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var B = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  function o(d) {
    "@babel/helpers - typeof";
    return o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(p) {
      return typeof p;
    } : function(p) {
      return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p;
    }, o(d);
  }
  var n = 47, r = 46, a = function(p) {
    var m = o(p);
    if (m !== "string")
      throw new TypeError("Expected a string, got a ".concat(m));
  }, i = function(p, m) {
    for (var l = "", E = 0, O = -1, j = 0, M, g = 0; g <= p.length; ++g) {
      if (g < p.length)
        M = p.charCodeAt(g);
      else {
        if (M === n)
          break;
        M = n;
      }
      if (M === n) {
        if (!(O === g - 1 || j === 1))
          if (O !== g - 1 && j === 2) {
            if (l.length < 2 || E !== 2 || l.charCodeAt(l.length - 1) !== r || l.charCodeAt(l.length - 2) !== r) {
              if (l.length > 2) {
                var T = l.lastIndexOf("/");
                if (T !== l.length - 1) {
                  T === -1 ? (l = "", E = 0) : (l = l.slice(0, T), E = l.length - 1 - l.lastIndexOf("/")), O = g, j = 0;
                  continue;
                }
              } else if (l.length === 2 || l.length === 1) {
                l = "", E = 0, O = g, j = 0;
                continue;
              }
            }
            m && (l.length > 0 ? l += "/.." : l = "..", E = 2);
          } else
            l.length > 0 ? l += "/" + p.slice(O + 1, g) : l = p.slice(O + 1, g), E = g - O - 1;
        O = g, j = 0;
      } else
        M === r && j !== -1 ? ++j : j = -1;
    }
    return l;
  }, s = function(p) {
    try {
      return decodeURIComponent(p);
    } catch {
      return p;
    }
  }, c = function(p) {
    a(p);
    var m = p;
    if (m.length === 0)
      return ".";
    var l = m.charCodeAt(0) === n, E = m.charCodeAt(m.length - 1) === n;
    return m = s(m), m = i(m, !l), m.length === 0 && !l && (m = "."), m.length > 0 && E && (m += "/"), l ? "/" + m : m;
  }, u = c;
  e.default = u, t.exports = e.default;
})(B, B.exports);
var Z = B.exports;
const K = /* @__PURE__ */ Y(Z), x = {
  getItemPath(t, e, o) {
    let n = (e == null ? void 0 : e.length) > 0 ? `${e}/${t}` : t;
    return o && (n = (e == null ? void 0 : e.length) > 0 ? `${e}/jcr:content/${t}` : t), n;
  },
  connectComponentWithItem(t, e, o, n, r, a) {
    const i = this.getItemPath(o, n, a);
    return N(t, {
      ...e,
      cqPath: i,
      containerProps: r(o)
    });
  },
  getChildComponents(t, e, o, n, r, a, i) {
    const s = [];
    return Object.keys(e).length > 0 && o.length > 0 && o.forEach((c) => {
      const u = this.modelToProps(
        e[c]
      );
      if (u && typeof u.cqType < "u") {
        const d = i.get(u.cqType);
        n && (u.aemNoDecoration = n), d && s.push(
          this.connectComponentWithItem(
            d,
            u,
            c,
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
    return n && !r && (r = K(
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
}, ee = /* @__PURE__ */ y({
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
    const e = t, o = v("isInEditor", A.isInEditor()), n = k(), r = w(), a = C(() => {
      const c = {}, { componentProperties: u } = e;
      return o && (c["data-cq-data-path"] = u.cqPath, e.editConfig.resourceType && (c["data-cq-resource-type"] = e.editConfig.resourceType)), c;
    }), i = C(() => {
      var m;
      const c = {}, { componentProperties: u } = e, { appliedCssClassNames: d } = u, p = [];
      return d && p.push(d), (m = e == null ? void 0 : e.containerProps) != null && m.class && p.push(e.containerProps.class), p.length && (c.class = p.join(" ")), c;
    }), s = C(() => o && typeof e.editConfig.isEmpty == "function" && e.editConfig.isEmpty(e.componentProperties) ? {
      class: "cq-placeholder",
      "data-emptytext": e.editConfig.emptyLabel
    } : null);
    return (c, u) => {
      var d, p, m, l;
      return !h(o) && e.componentProperties.hasOwnProperty("aemNoDecoration") && e.componentProperties.aemNoDecoration || e.componentProperties.hasOwnProperty("cqHierarchyType") && e.componentProperties.cqHierarchyType === "page" ? (f(), P(I((p = (d = h(n)).default) == null ? void 0 : p.call(d)[0]), q(S({ key: 0 }, { ...h(r), containerProps: e.containerProps })), null, 16)) : (f(), _("div", q(S({ key: 1 }, { ...a.value, ...i.value })), [
        (f(), P(I((l = (m = h(n)).default) == null ? void 0 : l.call(m)[0]), q($({
          ...h(r),
          componentProperties: e.componentProperties
        })), null, 16)),
        s.value ? (f(), _("div", q(S({ key: 0 }, s.value)), null, 16)) : z("", !0)
      ], 16));
    };
  }
}), te = /* @__PURE__ */ y({
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
    const e = t, o = k(), n = w();
    return (r, a) => (f(), P(ee, q($({
      ...h(n),
      componentProperties: { ...h(n) },
      editConfig: e.editConfig
    })), {
      default: U(() => {
        var i, s;
        return [
          (f(), P(I((s = (i = h(o)).default) == null ? void 0 : s.call(i)[0])))
        ];
      }),
      _: 1
    }, 16));
  }
}), oe = /* @__PURE__ */ y({
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
    const e = t, o = k(), n = v("isInEditor", A.isInEditor()), r = Q(w()), a = () => {
      const { pagePath: c, itemPath: u, injectPropsOnInit: d, cqPath: p } = e;
      return x.getCQPath({
        pagePath: c,
        itemPath: u,
        injectPropsOnInit: d,
        cqPath: p
      });
    }, i = (c) => {
      const { pagePath: u, itemPath: d, injectPropsOnInit: p } = e, m = c || e.cqPath || u && x.getCQPath({ pagePath: u, itemPath: d, injectPropsOnInit: p });
      m && F.getData({
        path: m,
        forceReload: e.cqForceReload
      }).then((l) => {
        l && Object.keys(l).length > 0 && (Object.assign(r.value, x.modelToProps(l)), p && n && X.dispatchGlobalCustomEvent(
          "cq-async-content-loaded",
          {}
        ));
      }).catch((l) => {
        console.error(l);
      });
    }, s = i.bind(null, a());
    return H(() => {
      const c = a();
      e.injectPropsOnInit && i(c), F.addListener(c, s);
    }), W(() => {
      F.removeListener(e.cqPath, s);
    }), (c, u) => {
      var d, p;
      return f(), P(I((p = (d = h(o)).default) == null ? void 0 : p.call(d)[0]), q($({
        cqPath: a(),
        ...r.value
      })), null, 16);
    };
  }
}), ne = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "CompositeModelProvider",
  props: {
    modelConfig: {
      type: Object,
      default: () => ({ injectPropsOnInit: !1, forceReload: !1 })
    }
  },
  setup(t) {
    const e = t, o = k(), n = w(), { modelConfig: r } = V(e), a = n.cqForceReload || r.value.forceReload, { injectPropsOnInit: i } = r.value;
    return (s, c) => (f(), P(oe, S({
      "cq-force-reload": h(a),
      "inject-props-on-init": h(i)
    }, { ...h(n) }), {
      default: U(() => {
        var u, d;
        return [
          (f(), P(I((d = (u = h(o)).default) == null ? void 0 : d.call(u)[0])))
        ];
      }),
      _: 1
    }, 16, ["cq-force-reload", "inject-props-on-init"]));
  }
}), re = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "ContextProvider",
  setup(t) {
    const e = k(), o = w(), n = v("componentMapping", new b()), r = v("isInEditor", A.isInEditor());
    return R("isInEditor", r), R("componentMapping", n), (a, i) => {
      var s, c;
      return f(), P(I((c = (s = h(e)).default) == null ? void 0 : c.call(s)[0]), q($({ ...h(o) })), null, 16);
    };
  }
}), se = (t) => N(re, {}, () => [N(t)]), ae = (t, e) => N(ne, { modelConfig: e }, () => [N(t)]), ce = (t, e) => N(te, { editConfig: e }, () => [N(t)]), ie = (t, e, o) => {
  const {
    injectPropsOnInit: n = !0,
    forceReload: r = !1,
    ...a
  } = o || {}, i = {
    injectPropsOnInit: n,
    forceReload: r,
    ...a
  };
  let s = t;
  return s = se(
    ae(ce(s, e), i)
  ), s;
}, pe = b.map, le = b.get;
b.map = function(e, o, n = {
  isEmpty: () => !1
}, r = {}) {
  const { injectPropsOnInit: a = !1, ...i } = r || {}, s = ie(o, n, {
    injectPropsOnInit: a,
    ...i
  });
  return pe.call(b, e, s), s;
};
b.get = le;
const ve = (t) => (e, o, n = {}) => (
  // @ts-ignore
  b.map(t, e, o, n)
), Ie = (t, e, o, n, r, a) => {
  let i = [];
  t && (i = [t]), e && i.push(e), o && i.push(...o.split(" "));
  const s = n == null ? void 0 : n.class;
  return a && s && !r && i.push(s), i;
}, be = (t) => ({
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
}), de = ["data-cq-data-path", "data-emptytext"], me = /* @__PURE__ */ y({
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
    return (o, n) => (f(), _("div", {
      "data-cq-data-path": e.path,
      "data-emptytext": e.emptyLabel,
      class: "aem-AllowedComponent--component cq-placeholder placeholder"
    }, null, 8, de));
  }
}), ue = ["data-text"], fe = /* @__PURE__ */ y({
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
      var a;
      return f(), _("div", {
        class: G([
          "aem-AllowedComponent--list",
          (a = e.placeholderProps) == null ? void 0 : a.placeholderClassNames
        ])
      }, [
        J("div", {
          "data-text": o.value,
          class: "aem-AllowedComponent--title"
        }, null, 8, ue),
        (f(!0), _(L, null, D(e.components, (i) => (f(), P(me, {
          key: i.path,
          "empty-label": i.title,
          path: i.path
        }, null, 8, ["empty-label", "path"]))), 128))
      ], 2);
    };
  }
}), he = ["data-cq-data-path"], Pe = /* @__PURE__ */ y({
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
    return (o, n) => (f(), _("div", {
      class: G(e.placeholderClassNames),
      "data-cq-data-path": `${e.cqPath}/*`
    }, null, 10, he));
  }
}), ge = /* @__PURE__ */ y({
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
    const e = t, o = typeof e.isInEditor < "u" ? e.isInEditor : v("isInEditor", A.isInEditor()), n = v("componentMapping", new b()), r = C(() => {
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
        n
      )
    ), i = C(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    });
    return (s, c) => (f(), _("div", q($({ ...r.value })), [
      (f(!0), _(L, null, D(a.value, (u) => (f(), P(I(u), {
        key: u.toString()
      }))), 128)),
      h(o) ? (f(), P(Pe, q(S({ key: 0 }, i.value)), null, 16)) : z("", !0)
    ], 16));
  }
}), ye = /* @__PURE__ */ y({
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
    return (a, i) => {
      var s;
      return h(o) && e.allowedComponents && ((s = e.allowedComponents) != null && s.applicable) ? (f(), P(fe, {
        key: 0,
        components: e.allowedComponents.components,
        "cq-path": e.cqPath,
        "empty-label": e._allowedComponentPlaceholderListEmptyLabel,
        "placeholder-props": n.value,
        title: e.title
      }, null, 8, ["components", "cq-path", "empty-label", "placeholder-props", "title"])) : (f(), P(ge, S({
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
}), Ee = /* @__PURE__ */ y({
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
    const e = t, o = w(), n = v("isInEditor", A.isInEditor()), r = v("componentMapping", new b()), a = C(
      () => x.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        e.aemNoDecoration,
        () => ({}),
        !0,
        r
      )
    ), i = C(
      () => x.getChildPages(e.cqChildren, r)
    ), s = C(() => {
      const c = ["aem-page"];
      o.cssClassNames && c.push(...o.cssClassNames.split(" "));
      const u = {
        class: c.join(" ")
      };
      return n && (u["data-cq-data-path"] = e.cqPath), u;
    });
    return (c, u) => (f(), _("div", q($(s.value)), [
      (f(!0), _(L, null, D(a.value, (d) => (f(), P(I(d), {
        key: d.toString()
      }))), 128)),
      (f(!0), _(L, null, D(i.value, (d) => (f(), P(I(d), {
        key: d.toString()
      }))), 128))
    ], 16));
  }
}), Oe = /* @__PURE__ */ y({
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
  setup(t) {
    const e = t, o = w(), n = typeof e.isInEditor < "u" ? e.isInEditor : v("isInEditor", A.isInEditor()), r = () => {
      const s = {}, c = ["aem-container"];
      return e.gridClassNames && c.push(e.gridClassNames), s.class = c.join(" "), n && (s["data-cq-data-path"] = e.cqPath), s;
    }, a = () => {
      const s = {
        cqPath: e.cqPath
      }, c = [
        "new",
        "section",
        "aem-Grid-newComponent"
      ];
      return s.placeholderClassNames = c.join(" "), s;
    }, i = (s) => {
      const c = {};
      return e.columnClassNames && e.columnClassNames[s] && (c.class = e.columnClassNames[s]), c;
    };
    return (s, c) => (f(), P(ye, S({
      "aem-no-decoration": e.aemNoDecoration,
      "cq-path": e.cqPath,
      "get-container-props": r,
      "get-item-component-props": i,
      "get-placeholder-props": a,
      "is-in-editor": h(n)
    }, { ...h(o) }), null, 16, ["aem-no-decoration", "cq-path", "is-in-editor"]));
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
  ve as MapTo,
  oe as ModelProvider,
  Ee as Page,
  Oe as ResponsiveGrid,
  x as Utils,
  Ie as componentClassNames,
  be as componentProperties,
  se as withContext,
  ce as withEditable,
  ae as withModel
};
