import { h as w, defineComponent as C, inject as v, useSlots as M, useAttrs as S, computed as _, unref as h, openBlock as f, createBlock as P, resolveDynamicComponent as b, normalizeProps as I, mergeProps as N, createElementBlock as q, guardReactiveProps as k, createCommentVNode as z, withCtx as U, reactive as Q, onMounted as W, onUnmounted as H, toRefs as V, provide as R, normalizeClass as G, createElementVNode as J, Fragment as L, renderList as D } from "vue";
import { ComponentMapping as E } from "@adobe/aem-spa-component-mapping";
import { ComponentMapping as we } from "@adobe/aem-spa-component-mapping";
import { AuthoringUtils as A, ModelManager as B, PathUtils as X } from "@adobe/aem-spa-page-model-manager";
function Y(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var F = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  function o(u) {
    "@babel/helpers - typeof";
    return o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
      return typeof l;
    } : function(l) {
      return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
    }, o(u);
  }
  var r = 47, n = 46, a = function(l) {
    var c = o(l);
    if (c !== "string")
      throw new TypeError("Expected a string, got a ".concat(c));
  }, i = function(l, c) {
    for (var p = "", g = 0, O = -1, j = 0, $, y = 0; y <= l.length; ++y) {
      if (y < l.length)
        $ = l.charCodeAt(y);
      else {
        if ($ === r)
          break;
        $ = r;
      }
      if ($ === r) {
        if (!(O === y - 1 || j === 1))
          if (O !== y - 1 && j === 2) {
            if (p.length < 2 || g !== 2 || p.charCodeAt(p.length - 1) !== n || p.charCodeAt(p.length - 2) !== n) {
              if (p.length > 2) {
                var T = p.lastIndexOf("/");
                if (T !== p.length - 1) {
                  T === -1 ? (p = "", g = 0) : (p = p.slice(0, T), g = p.length - 1 - p.lastIndexOf("/")), O = y, j = 0;
                  continue;
                }
              } else if (p.length === 2 || p.length === 1) {
                p = "", g = 0, O = y, j = 0;
                continue;
              }
            }
            c && (p.length > 0 ? p += "/.." : p = "..", g = 2);
          } else
            p.length > 0 ? p += "/" + l.slice(O + 1, y) : p = l.slice(O + 1, y), g = y - O - 1;
        O = y, j = 0;
      } else
        $ === n && j !== -1 ? ++j : j = -1;
    }
    return p;
  }, s = function(l) {
    try {
      return decodeURIComponent(l);
    } catch {
      return l;
    }
  }, d = function(l) {
    a(l);
    var c = l;
    if (c.length === 0)
      return ".";
    var p = c.charCodeAt(0) === r, g = c.charCodeAt(c.length - 1) === r;
    return c = s(c), c = i(c, !p), c.length === 0 && !p && (c = "."), c.length > 0 && g && (c += "/"), p ? "/" + c : c;
  }, m = d;
  e.default = m, t.exports = e.default;
})(F, F.exports);
var Z = F.exports;
const K = /* @__PURE__ */ Y(Z), x = {
  getItemPath(t, e, o) {
    let r = (e == null ? void 0 : e.length) > 0 ? `${e}/${t}` : t;
    return o && (r = (e == null ? void 0 : e.length) > 0 ? `${e}/jcr:content/${t}` : t), r;
  },
  connectComponentWithItem(t, e, o, r, n, a) {
    const i = this.getItemPath(o, r, a);
    return w(t, {
      ...e,
      cqPath: i,
      containerProps: n(o)
    });
  },
  getChildComponents(t, e, o, r, n, a, i) {
    const s = [];
    return Object.keys(e).length > 0 && o.length > 0 && o.forEach((d) => {
      const m = this.modelToProps(
        e[d]
      );
      if (m && typeof m.cqType < "u") {
        const u = i.get(m.cqType);
        r && (m.aemNoDecoration = r), u && s.push(
          this.connectComponentWithItem(
            u,
            m,
            d,
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
          w(a, { ...n, cqPath: n.cqPath })
        );
      }
    }), o;
  },
  getCQPath(t) {
    const { pagePath: e = "", itemPath: o = "", injectPropsOnInit: r } = t;
    let { cqPath: n = "" } = t;
    return r && !n && (n = K(
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
  setup(t) {
    const e = t, o = v("isInEditor", A.isInEditor()), r = M(), n = S(), a = _(() => {
      const d = {}, { componentProperties: m } = e;
      return o && (d["data-cq-data-path"] = m.cqPath, e.editConfig.resourceType && (d["data-cq-resource-type"] = e.editConfig.resourceType)), d;
    }), i = _(() => {
      var p;
      const d = {}, { componentProperties: m } = e, { appliedCssClassNames: u, cqType: l } = m, c = [];
      return u && c.push(u), (p = e == null ? void 0 : e.containerProps) != null && p.class && c.push(e.containerProps.class), l && (l != null && l.endsWith("/container")) && c.push("aem-editable"), c.length && (d.class = c.join(" ")), d;
    }), s = _(() => o && typeof e.editConfig.isEmpty == "function" && e.editConfig.isEmpty(e.componentProperties) ? {
      class: "cq-placeholder",
      "data-emptytext": e.editConfig.emptyLabel
    } : null);
    return (d, m) => {
      var u, l, c, p;
      return !h(o) && e.componentProperties.hasOwnProperty("aemNoDecoration") && e.componentProperties.aemNoDecoration || e.componentProperties.hasOwnProperty("cqHierarchyType") && e.componentProperties.cqHierarchyType === "page" ? (f(), P(b((l = (u = h(r)).default) == null ? void 0 : l.call(u)[0]), I(N({ key: 0 }, { ...h(n), containerProps: e.containerProps })), null, 16)) : (f(), q("div", I(N({ key: 1 }, { ...a.value, ...i.value })), [
        (f(), P(b((p = (c = h(r)).default) == null ? void 0 : p.call(c)[0]), I(k({
          ...h(n),
          componentProperties: e.componentProperties
        })), null, 16)),
        s.value ? (f(), q("div", I(N({ key: 0 }, s.value)), null, 16)) : z("", !0)
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
  setup(t) {
    const e = t, o = M(), r = S();
    return (n, a) => (f(), P(ee, I(k({
      ...h(r),
      componentProperties: { ...h(r) },
      editConfig: e.editConfig
    })), {
      default: U(() => {
        var i, s;
        return [
          (f(), P(b((s = (i = h(o)).default) == null ? void 0 : s.call(i)[0])))
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
  setup(t) {
    const e = t, o = M(), r = v("isInEditor", A.isInEditor()), n = Q({});
    Object.assign(n, S());
    const a = () => {
      const { pagePath: m, itemPath: u, injectPropsOnInit: l, cqPath: c } = e;
      return x.getCQPath({
        pagePath: m,
        itemPath: u,
        injectPropsOnInit: l,
        cqPath: c
      });
    }, i = (m) => {
      const { pagePath: u, itemPath: l, injectPropsOnInit: c } = e, p = m || e.cqPath || u && x.getCQPath({ pagePath: u, itemPath: l, injectPropsOnInit: c });
      p && B.getData({
        path: p,
        forceReload: e.cqForceReload
      }).then((g) => {
        g && Object.keys(g).length > 0 && (Object.assign(n, x.modelToProps(g)), c && r && X.dispatchGlobalCustomEvent(
          "cq-async-content-loaded",
          {}
        ));
      }).catch((g) => {
        console.error(g);
      });
    }, s = i.bind(null, a());
    W(() => {
      const m = a();
      Object.assign(n, { cqPath: m }), e.injectPropsOnInit && i(m), B.addListener(m, s);
    }), H(() => {
      B.removeListener(e.cqPath, s);
    });
    const d = (m) => (console.log(m), !0);
    return (m, u) => {
      var l, c;
      return f(), P(b((c = (l = h(o)).default) == null ? void 0 : c.call(l)[0]), N({
        "data-bounded": d(n)
      }, n), null, 16, ["data-bounded"]);
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
  setup(t) {
    const e = t, o = M(), r = S(), { modelConfig: n } = V(e), a = r.cqForceReload || n.value.forceReload, { injectPropsOnInit: i } = n.value;
    return (s, d) => (f(), P(oe, N({
      "cq-force-reload": h(a),
      "inject-props-on-init": h(i)
    }, { ...h(r) }), {
      default: U(() => {
        var m, u;
        return [
          (f(), P(b((u = (m = h(o)).default) == null ? void 0 : u.call(m)[0])))
        ];
      }),
      _: 1
    }, 16, ["cq-force-reload", "inject-props-on-init"]));
  }
}), re = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "ContextProvider",
  setup(t) {
    const e = M(), o = S(), r = v("componentMapping", new E()), n = v("isInEditor", A.isInEditor());
    return R("isInEditor", n), R("componentMapping", r), (a, i) => {
      var s, d;
      return f(), P(b((d = (s = h(e)).default) == null ? void 0 : d.call(s)[0]), I(k({ ...h(o) })), null, 16);
    };
  }
}), se = (t) => w(re, {}, () => [w(t)]), ae = (t, e) => w(ne, { modelConfig: e }, () => [w(t)]), ie = (t, e) => w(te, { editConfig: e }, () => [w(t)]), ce = (t, e, o) => {
  const {
    injectPropsOnInit: r = !0,
    forceReload: n = !1,
    ...a
  } = o || {}, i = {
    injectPropsOnInit: r,
    forceReload: n,
    ...a
  };
  let s = t;
  return s = se(
    ae(ie(s, e), i)
  ), s;
}, pe = E.map, le = E.get;
E.map = function(e, o, r = {
  isEmpty: () => !1
}, n = {}) {
  const { injectPropsOnInit: a = !1, ...i } = n || {}, s = ce(o, r, {
    injectPropsOnInit: a,
    ...i
  });
  return pe.call(E, e, s), s;
};
E.get = le;
const ve = (t) => (e, o, r = {}) => (
  // @ts-ignore
  E.map(t, e, o, r)
), Ie = (t, e, o, r, n, a) => {
  let i = [];
  t && (i = [t]), e && i.push(e), o && i.push(...o.split(" "));
  const s = r == null ? void 0 : r.class;
  return a && s && !n && i.push(s), i;
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
  setup(t) {
    const e = t;
    return (o, r) => (f(), q("div", {
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
  setup(t) {
    const e = t, o = _(
      () => e.components && e.components.length > 0 ? e.title : e.emptyLabel
    );
    return (r, n) => {
      var a;
      return f(), q("div", {
        class: G([
          "aem-AllowedComponent--list",
          (a = e.placeholderProps) == null ? void 0 : a.placeholderClassNames
        ])
      }, [
        J("div", {
          "data-text": o.value,
          class: "aem-AllowedComponent--title"
        }, null, 8, ue),
        (f(!0), q(L, null, D(e.components, (i) => (f(), P(me, {
          key: i.path,
          "empty-label": i.title,
          path: i.path
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
  setup(t) {
    const e = t;
    return (o, r) => (f(), q("div", {
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
  setup(t) {
    const e = t, o = typeof e.isInEditor < "u" ? e.isInEditor : v("isInEditor", A.isInEditor()), r = v("componentMapping", new E()), n = _(() => {
      let s = {};
      return typeof e.getContainerProps == "function" ? s = e.getContainerProps() : (s = {
        class: "aem-container"
      }, o && (s["data-cq-data-path"] = e.cqPath)), s;
    }), a = _(
      () => x.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        e.aemNoDecoration,
        typeof e.getItemComponentProps == "function" ? e.getItemComponentProps : () => ({}),
        !1,
        r
      )
    ), i = _(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    });
    return (s, d) => (f(), q("div", I(k({ ...n.value })), [
      (f(!0), q(L, null, D(a.value, (m) => (f(), P(b(m), {
        key: m.toString()
      }))), 128)),
      h(o) ? (f(), P(Pe, I(N({ key: 0 }, i.value)), null, 16)) : z("", !0)
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
  setup(t) {
    const e = t, o = typeof e.isInEditor < "u" ? e.isInEditor : v("isInEditor", A.isInEditor()), r = _(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    }), n = S();
    return (a, i) => {
      var s;
      return h(o) && e.allowedComponents && ((s = e.allowedComponents) != null && s.applicable) ? (f(), P(fe, {
        key: 0,
        components: e.allowedComponents.components,
        "cq-path": e.cqPath,
        "empty-label": e._allowedComponentPlaceholderListEmptyLabel,
        "placeholder-props": r.value,
        title: e.title
      }, null, 8, ["components", "cq-path", "empty-label", "placeholder-props", "title"])) : (f(), P(ge, N({
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
}), Ee = /* @__PURE__ */ C({
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
    const e = t, o = S(), r = v("isInEditor", A.isInEditor()), n = v("componentMapping", new E()), a = _(
      () => x.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        e.aemNoDecoration,
        () => ({}),
        !0,
        n
      )
    ), i = _(
      () => x.getChildPages(e.cqChildren, n)
    ), s = _(() => {
      const d = ["aem-page"];
      o.cssClassNames && d.push(...o.cssClassNames.split(" "));
      const m = {
        class: d.join(" ")
      };
      return r && (m["data-cq-data-path"] = e.cqPath), m;
    });
    return (d, m) => (f(), q("div", I(k(s.value)), [
      (f(!0), q(L, null, D(a.value, (u) => (f(), P(b(u), {
        key: u.toString()
      }))), 128)),
      (f(!0), q(L, null, D(i.value, (u) => (f(), P(b(u), {
        key: u.toString()
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
  setup(t) {
    const e = t, o = S(), r = typeof e.isInEditor < "u" ? e.isInEditor : v("isInEditor", A.isInEditor()), n = () => {
      const s = {}, d = ["aem-container"];
      return e.gridClassNames && d.push(e.gridClassNames), s.class = d.join(" "), r && (s["data-cq-data-path"] = e.cqPath), s;
    }, a = () => {
      const s = {
        cqPath: e.cqPath
      }, d = [
        "new",
        "section",
        "aem-Grid-newComponent"
      ];
      return s.placeholderClassNames = d.join(" "), s;
    }, i = (s) => {
      const d = {};
      return e.columnClassNames && e.columnClassNames[s] && (d.class = e.columnClassNames[s]), d;
    };
    return (s, d) => (f(), P(ye, N({
      "aem-no-decoration": e.aemNoDecoration,
      "cq-path": e.cqPath,
      "get-container-props": n,
      "get-item-component-props": i,
      "get-placeholder-props": a,
      "is-in-editor": h(r)
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
  ie as withEditable,
  ae as withModel
};
