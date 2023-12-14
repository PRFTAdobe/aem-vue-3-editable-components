import { h as N, defineComponent as y, inject as v, useSlots as L, useAttrs as S, computed as C, unref as h, openBlock as f, createBlock as P, resolveDynamicComponent as I, normalizeProps as q, mergeProps as w, createElementBlock as _, guardReactiveProps as $, createCommentVNode as z, withCtx as U, onMounted as G, onUnmounted as W, toRefs as H, provide as R, normalizeClass as Q, createElementVNode as V, Fragment as k, renderList as D, onUpdated as J } from "vue";
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
  function n(d) {
    "@babel/helpers - typeof";
    return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(m) {
      return typeof m;
    } : function(m) {
      return m && typeof Symbol == "function" && m.constructor === Symbol && m !== Symbol.prototype ? "symbol" : typeof m;
    }, n(d);
  }
  var r = 47, o = 46, a = function(m) {
    var p = n(m);
    if (p !== "string")
      throw new TypeError("Expected a string, got a ".concat(p));
  }, i = function(m, p) {
    for (var l = "", E = 0, O = -1, j = 0, M, g = 0; g <= m.length; ++g) {
      if (g < m.length)
        M = m.charCodeAt(g);
      else {
        if (M === r)
          break;
        M = r;
      }
      if (M === r) {
        if (!(O === g - 1 || j === 1))
          if (O !== g - 1 && j === 2) {
            if (l.length < 2 || E !== 2 || l.charCodeAt(l.length - 1) !== o || l.charCodeAt(l.length - 2) !== o) {
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
            p && (l.length > 0 ? l += "/.." : l = "..", E = 2);
          } else
            l.length > 0 ? l += "/" + m.slice(O + 1, g) : l = m.slice(O + 1, g), E = g - O - 1;
        O = g, j = 0;
      } else
        M === o && j !== -1 ? ++j : j = -1;
    }
    return l;
  }, s = function(m) {
    try {
      return decodeURIComponent(m);
    } catch {
      return m;
    }
  }, c = function(m) {
    a(m);
    var p = m;
    if (p.length === 0)
      return ".";
    var l = p.charCodeAt(0) === r, E = p.charCodeAt(p.length - 1) === r;
    return p = s(p), p = i(p, !l), p.length === 0 && !l && (p = "."), p.length > 0 && E && (p += "/"), l ? "/" + p : p;
  }, u = c;
  e.default = u, t.exports = e.default;
})(B, B.exports);
var Z = B.exports;
const K = /* @__PURE__ */ Y(Z), x = {
  getItemPath(t, e, n) {
    let r = (e == null ? void 0 : e.length) > 0 ? `${e}/${t}` : t;
    return n && (r = (e == null ? void 0 : e.length) > 0 ? `${e}/jcr:content/${t}` : t), r;
  },
  connectComponentWithItem(t, e, n, r, o, a) {
    const i = this.getItemPath(n, r, a);
    return N(t, {
      ...e,
      cqPath: i,
      containerProps: o(n)
    });
  },
  getChildComponents(t, e, n, r, o, a, i) {
    const s = [];
    return Object.keys(e).length > 0 && n.length > 0 && n.forEach((c) => {
      const u = this.modelToProps(
        e[c]
      );
      if (u && typeof u.cqType < "u") {
        const d = i.get(u.cqType);
        r && (u.aemNoDecoration = r), d && s.push(
          this.connectComponentWithItem(
            d,
            u,
            c,
            t,
            o,
            a
          )
        );
      }
    }), s;
  },
  getChildPages(t, e) {
    const n = [];
    return Object.keys(t).length === 0 || Object.keys(t).forEach((r) => {
      const o = this.modelToProps(
        t[r]
      );
      if (o && typeof o.cqType < "u") {
        const a = e.get(o.cqType);
        a && n.push(
          N(a, { ...o, cqPath: o.cqPath })
        );
      }
    }), n;
  },
  getCQPath(t) {
    const { pagePath: e = "", itemPath: n = "", injectPropsOnInit: r } = t;
    let { cqPath: o = "" } = t;
    return r && !o && (o = K(
      n ? `${e}/jcr:content/${n}` : e
    ), o = o.replace(/^\.$/, "")), o;
  },
  modelToProps(t) {
    const e = Object.getOwnPropertyNames(t), n = {}, r = (o) => {
      const a = o.substring(1);
      return `cq${a.substring(0, 1).toUpperCase()}${a.substring(
        1
      )}`;
    };
    return e.forEach((o) => {
      let a = o;
      a.startsWith(":") && (a = r(a)), n[a] = t[o];
    }), n;
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
    const e = t, n = v("isInEditor", A.isInEditor()), r = L(), o = S(), a = C(() => {
      const c = {}, { componentProperties: u } = e;
      return n && (c["data-cq-data-path"] = u.cqPath, e.editConfig.resourceType && (c["data-cq-resource-type"] = e.editConfig.resourceType)), c;
    }), i = C(() => {
      var l;
      const c = {}, { componentProperties: u } = e, { appliedCssClassNames: d, cqType: m } = u, p = [];
      return d && p.push(d), (l = e == null ? void 0 : e.containerProps) != null && l.class && p.push(e.containerProps.class), m && (m != null && m.endsWith("/container")) && p.push("aem-editable"), p.length && (c.class = p.join(" ")), c;
    }), s = C(() => n && typeof e.editConfig.isEmpty == "function" && e.editConfig.isEmpty(e.componentProperties) ? {
      class: "cq-placeholder",
      "data-emptytext": e.editConfig.emptyLabel
    } : null);
    return (c, u) => {
      var d, m, p, l;
      return !h(n) && e.componentProperties.hasOwnProperty("aemNoDecoration") && e.componentProperties.aemNoDecoration || e.componentProperties.hasOwnProperty("cqHierarchyType") && e.componentProperties.cqHierarchyType === "page" ? (f(), P(I((m = (d = h(r)).default) == null ? void 0 : m.call(d)[0]), q(w({ key: 0 }, { ...h(o), containerProps: e.containerProps })), null, 16)) : (f(), _("div", q(w({ key: 1 }, { ...a.value, ...i.value })), [
        (f(), P(I((l = (p = h(r)).default) == null ? void 0 : l.call(p)[0]), q($({
          ...h(o),
          componentProperties: e.componentProperties
        })), null, 16)),
        s.value ? (f(), _("div", q(w({ key: 0 }, s.value)), null, 16)) : z("", !0)
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
    const e = t, n = L(), r = S();
    return (o, a) => (f(), P(ee, q($({
      ...h(r),
      componentProperties: { ...h(r) },
      editConfig: e.editConfig
    })), {
      default: U(() => {
        var i, s;
        return [
          (f(), P(I((s = (i = h(n)).default) == null ? void 0 : s.call(i)[0])))
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
    itemPath: {
      type: String
    },
    modelProperties: {
      type: Object,
      default: () => ({})
    },
    // eslint-disable-next-line vue/require-default-prop
    pagePath: {
      type: String
    }
  },
  setup(t) {
    const e = t, n = L(), r = v("isInEditor", A.isInEditor()), o = () => {
      const { pagePath: s, itemPath: c, injectPropsOnInit: u, cqPath: d } = e;
      return x.getCQPath({
        pagePath: s,
        itemPath: c,
        injectPropsOnInit: u,
        cqPath: d
      });
    }, a = (s) => {
      const { pagePath: c, itemPath: u, injectPropsOnInit: d } = e, m = s || e.cqPath || c && x.getCQPath({ pagePath: c, itemPath: u, injectPropsOnInit: d });
      m && F.getData({
        path: m,
        forceReload: e.cqForceReload
      }).then((p) => {
        p && Object.keys(p).length > 0 && (Object.assign(e.modelProperties, x.modelToProps(p)), d && r && X.dispatchGlobalCustomEvent(
          "cq-async-content-loaded",
          {}
        ));
      }).catch((p) => {
        console.error(p);
      });
    }, i = a.bind(null, o());
    return G(() => {
      const s = o();
      e.injectPropsOnInit && a(s), F.addListener(s, i);
    }), W(() => {
      F.removeListener(e.cqPath, i);
    }), (s, c) => {
      var u, d;
      return f(), P(I((d = (u = h(n)).default) == null ? void 0 : d.call(u)[0]), q($({ ...t.modelProperties, cqPath: o() })), null, 16);
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
    const e = t, n = L(), r = S(), { modelConfig: o } = H(e), a = r.cqForceReload || o.value.forceReload, { injectPropsOnInit: i } = o.value;
    return (s, c) => (f(), P(oe, w({
      "cq-force-reload": h(a),
      "inject-props-on-init": h(i),
      "model-properties": { ...h(r) }
    }, { ...h(r) }), {
      default: U(() => {
        var u, d;
        return [
          (f(), P(I((d = (u = h(n)).default) == null ? void 0 : d.call(u)[0])))
        ];
      }),
      _: 1
    }, 16, ["cq-force-reload", "inject-props-on-init", "model-properties"]));
  }
}), re = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "ContextProvider",
  setup(t) {
    const e = L(), n = S(), r = v("componentMapping", new b()), o = v("isInEditor", A.isInEditor());
    return R("isInEditor", o), R("componentMapping", r), (a, i) => {
      var s, c;
      return f(), P(I((c = (s = h(e)).default) == null ? void 0 : c.call(s)[0]), q($({ ...h(n) })), null, 16);
    };
  }
}), se = (t) => N(re, {}, () => [N(t)]), ae = (t, e) => N(ne, { modelConfig: e }, () => [N(t)]), ie = (t, e) => N(te, { editConfig: e }, () => [N(t)]), ce = (t, e, n) => {
  const {
    injectPropsOnInit: r = !0,
    forceReload: o = !1,
    ...a
  } = n || {}, i = {
    injectPropsOnInit: r,
    forceReload: o,
    ...a
  };
  let s = t;
  return s = se(
    ae(ie(s, e), i)
  ), s;
}, pe = b.map, le = b.get;
b.map = function(e, n, r = {
  isEmpty: () => !1
}, o = {}) {
  const { injectPropsOnInit: a = !1, ...i } = o || {}, s = ce(n, r, {
    injectPropsOnInit: a,
    ...i
  });
  return pe.call(b, e, s), s;
};
b.get = le;
const ve = (t) => (e, n, r = {}) => (
  // @ts-ignore
  b.map(t, e, n, r)
), Ie = (t, e, n, r, o, a) => {
  let i = [];
  t && (i = [t]), e && i.push(e), n && i.push(...n.split(" "));
  const s = r == null ? void 0 : r.class;
  return a && s && !o && i.push(s), i;
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
    return (n, r) => (f(), _("div", {
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
    const e = t, n = C(
      () => e.components && e.components.length > 0 ? e.title : e.emptyLabel
    );
    return (r, o) => {
      var a;
      return f(), _("div", {
        class: Q([
          "aem-AllowedComponent--list",
          (a = e.placeholderProps) == null ? void 0 : a.placeholderClassNames
        ])
      }, [
        V("div", {
          "data-text": n.value,
          class: "aem-AllowedComponent--title"
        }, null, 8, ue),
        (f(!0), _(k, null, D(e.components, (i) => (f(), P(me, {
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
    return (n, r) => (f(), _("div", {
      class: Q(e.placeholderClassNames),
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
    const e = t, n = typeof e.isInEditor < "u" ? e.isInEditor : v("isInEditor", A.isInEditor()), r = v("componentMapping", new b()), o = C(() => {
      let s = {};
      return typeof e.getContainerProps == "function" ? s = e.getContainerProps() : (s = {
        class: "aem-container"
      }, n && (s["data-cq-data-path"] = e.cqPath)), s;
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
    ), i = C(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    });
    return (s, c) => (f(), _("div", q($({ ...o.value })), [
      (f(!0), _(k, null, D(a.value, (u) => (f(), P(I(u), {
        key: u.toString()
      }))), 128)),
      h(n) ? (f(), P(Pe, q(w({ key: 0 }, i.value)), null, 16)) : z("", !0)
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
    const e = t, n = typeof e.isInEditor < "u" ? e.isInEditor : v("isInEditor", A.isInEditor()), r = C(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    }), o = S();
    return (a, i) => {
      var s;
      return h(n) && e.allowedComponents && ((s = e.allowedComponents) != null && s.applicable) ? (f(), P(fe, {
        key: 0,
        components: e.allowedComponents.components,
        "cq-path": e.cqPath,
        "empty-label": e._allowedComponentPlaceholderListEmptyLabel,
        "placeholder-props": r.value,
        title: e.title
      }, null, 8, ["components", "cq-path", "empty-label", "placeholder-props", "title"])) : (f(), P(ge, w({
        key: 1,
        "aem-no-decoration": e.aemNoDecoration,
        "cq-items": e.cqItems,
        "cq-items-order": e.cqItemsOrder,
        "cq-path": e.cqPath,
        "get-container-props": e.getContainerProps,
        "get-item-component-props": e.getItemComponentProps,
        "get-placeholder-props": e.getPlaceholderProps,
        "is-in-editor": h(n)
      }, { ...h(o) }), null, 16, ["aem-no-decoration", "cq-items", "cq-items-order", "cq-path", "get-container-props", "get-item-component-props", "get-placeholder-props", "is-in-editor"]));
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
    const e = S(), n = v("isInEditor", A.isInEditor()), r = v("componentMapping", new b()), o = t, a = C(
      () => x.getChildComponents(
        o.cqPath,
        o.cqItems,
        o.cqItemsOrder,
        o.aemNoDecoration,
        () => ({}),
        !0,
        r
      )
    ), i = C(
      () => x.getChildPages(o.cqChildren, r)
    ), s = C(() => {
      const c = ["aem-page"];
      e.cssClassNames && c.push(...e.cssClassNames.split(" "));
      const u = {
        class: c.join(" ")
      };
      return n && (u["data-cq-data-path"] = o.cqPath), u;
    });
    return G(() => {
      e.title && (document.title = e.title);
    }), J(() => {
      e.title && (document.title = e.title);
    }), (c, u) => (f(), _("div", q($(s.value)), [
      (f(!0), _(k, null, D(a.value, (d) => (f(), P(I(d), {
        key: d.toString()
      }))), 128)),
      (f(!0), _(k, null, D(i.value, (d) => (f(), P(I(d), {
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
    },
    title: {
      type: String,
      default: "Layout Container"
    }
  },
  setup(t) {
    const e = t, n = S(), r = typeof e.isInEditor < "u" ? e.isInEditor : v("isInEditor", A.isInEditor()), o = () => {
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
    }, i = (s) => {
      const c = {};
      return e.columnClassNames && e.columnClassNames[s] && (c.class = e.columnClassNames[s]), c;
    };
    return (s, c) => (f(), P(ye, w({
      "aem-no-decoration": e.aemNoDecoration,
      "cq-path": e.cqPath,
      "get-container-props": o,
      "get-item-component-props": i,
      "get-placeholder-props": a,
      "is-in-editor": h(r),
      title: e.title
    }, { ...h(n) }), null, 16, ["aem-no-decoration", "cq-path", "is-in-editor", "title"]));
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
  ie as withEditable,
  ae as withModel
};
