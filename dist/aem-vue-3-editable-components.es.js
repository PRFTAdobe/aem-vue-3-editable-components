import { h as N, defineComponent as C, inject as I, useSlots as k, useAttrs as w, computed as _, unref as h, openBlock as f, createBlock as P, resolveDynamicComponent as b, normalizeProps as v, mergeProps as S, createElementBlock as q, guardReactiveProps as $, createCommentVNode as z, withCtx as U, ref as Q, onMounted as H, onUnmounted as W, toRefs as V, provide as R, normalizeClass as G, createElementVNode as J, Fragment as L, renderList as D } from "vue";
import { ComponentMapping as E } from "@adobe/aem-spa-component-mapping";
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
  function o(u) {
    "@babel/helpers - typeof";
    return o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
      return typeof i;
    } : function(i) {
      return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
    }, o(u);
  }
  var n = 47, r = 46, a = function(i) {
    var l = o(i);
    if (l !== "string")
      throw new TypeError("Expected a string, got a ".concat(l));
  }, c = function(i, l) {
    for (var d = "", g = 0, O = -1, j = 0, M, y = 0; y <= i.length; ++y) {
      if (y < i.length)
        M = i.charCodeAt(y);
      else {
        if (M === n)
          break;
        M = n;
      }
      if (M === n) {
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
            l && (d.length > 0 ? d += "/.." : d = "..", g = 2);
          } else
            d.length > 0 ? d += "/" + i.slice(O + 1, y) : d = i.slice(O + 1, y), g = y - O - 1;
        O = y, j = 0;
      } else
        M === r && j !== -1 ? ++j : j = -1;
    }
    return d;
  }, s = function(i) {
    try {
      return decodeURIComponent(i);
    } catch {
      return i;
    }
  }, p = function(i) {
    a(i);
    var l = i;
    if (l.length === 0)
      return ".";
    var d = l.charCodeAt(0) === n, g = l.charCodeAt(l.length - 1) === n;
    return l = s(l), l = c(l, !d), l.length === 0 && !d && (l = "."), l.length > 0 && g && (l += "/"), d ? "/" + l : l;
  }, m = p;
  e.default = m, t.exports = e.default;
})(B, B.exports);
var Z = B.exports;
const K = /* @__PURE__ */ Y(Z), x = {
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
    return Object.keys(e).length > 0 && o.length > 0 && o.forEach((p) => {
      const m = this.modelToProps(
        e[p]
      );
      if (m && typeof m.cqType < "u") {
        const u = c.get(m.cqType);
        n && (m.aemNoDecoration = n), u && s.push(
          this.connectComponentWithItem(
            u,
            m,
            p,
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
    const e = t, o = I("isInEditor", A.isInEditor()), n = k(), r = w(), a = _(() => {
      const p = {}, { componentProperties: m } = e;
      return o && (p["data-cq-data-path"] = m.cqPath, e.editConfig.resourceType && (p["data-cq-resource-type"] = e.editConfig.resourceType)), p;
    }), c = _(() => {
      var l;
      const p = {}, { componentProperties: m } = e, { appliedCssClassNames: u } = m, i = [];
      return u && i.push(u), (l = e == null ? void 0 : e.containerProps) != null && l.class && i.push(e.containerProps.class), i.length && (p.class = i.join(" ")), p;
    }), s = _(() => o && typeof e.editConfig.isEmpty == "function" && e.editConfig.isEmpty(e.componentProperties) ? {
      class: "cq-placeholder",
      "data-emptytext": e.editConfig.emptyLabel
    } : null);
    return (p, m) => {
      var u, i, l, d;
      return !h(o) && e.componentProperties.hasOwnProperty("aemNoDecoration") && e.componentProperties.aemNoDecoration || e.componentProperties.hasOwnProperty("cqHierarchyType") && e.componentProperties.cqHierarchyType === "page" ? (f(), P(b((i = (u = h(n)).default) == null ? void 0 : i.call(u)[0]), v(S({ key: 0 }, { ...h(r), containerProps: e.containerProps })), null, 16)) : (f(), q("div", v(S({ key: 1 }, { ...a.value, ...c.value })), [
        (f(), P(b((d = (l = h(n)).default) == null ? void 0 : d.call(l)[0]), v($({
          ...h(r),
          componentProperties: e.componentProperties
        })), null, 16)),
        s.value ? (f(), q("div", v(S({ key: 0 }, s.value)), null, 16)) : z("", !0)
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
    const e = t, o = k(), n = w();
    return (r, a) => (f(), P(ee, v($({
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
    const e = t, o = k(), n = w(), r = I("isInEditor", A.isInEditor()), a = Q(n), c = () => {
      const { pagePath: m, itemPath: u, injectPropsOnInit: i, cqPath: l } = e;
      return x.getCQPath({
        pagePath: m,
        itemPath: u,
        injectPropsOnInit: i,
        cqPath: l
      });
    }, s = (m) => {
      const { pagePath: u, itemPath: i, injectPropsOnInit: l } = e, d = m || e.cqPath || u && x.getCQPath({ pagePath: u, itemPath: i, injectPropsOnInit: l });
      d && F.getData({
        path: d,
        forceReload: e.cqForceReload
      }).then((g) => {
        g && Object.keys(g).length > 0 && (Object.assign(a.value, x.modelToProps(g)), l && r && X.dispatchGlobalCustomEvent(
          "cq-async-content-loaded",
          {}
        ));
      }).catch((g) => {
        console.error(g);
      });
    }, p = s.bind(null, c());
    return H(() => {
      const m = c();
      e.injectPropsOnInit && s(m), F.addListener(m, p);
    }), W(() => {
      F.removeListener(e.cqPath, p);
    }), (m, u) => {
      var i, l;
      return f(), P(b((l = (i = h(o)).default) == null ? void 0 : l.call(i)[0]), v($({
        cqPath: c(),
        ...a.value
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
  setup(t) {
    const e = t, o = k(), n = w(), { modelConfig: r } = V(e), a = n.cqForceReload || r.value.forceReload, { injectPropsOnInit: c } = r.value;
    return (s, p) => (f(), P(oe, S({
      "cq-force-reload": h(a),
      "inject-props-on-init": h(c)
    }, { ...h(n) }), {
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
    const e = k(), o = w(), n = I("componentMapping", new E()), r = I("isInEditor", A.isInEditor());
    return R("isInEditor", r), R("componentMapping", n), (a, c) => {
      var s, p;
      return f(), P(b((p = (s = h(e)).default) == null ? void 0 : p.call(s)[0]), v($({ ...h(o) })), null, 16);
    };
  }
}), se = (t) => N(re, {}, () => [N(t)]), ae = (t, e) => N(ne, { modelConfig: e }, () => [N(t)]), ce = (t, e) => N(te, { editConfig: e }, () => [N(t)]), ie = (t, e, o) => {
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
  return s = se(
    ae(ce(s, e), c)
  ), s;
}, pe = E.map, le = E.get;
E.map = function(e, o, n = {
  isEmpty: () => !1
}, r = {}) {
  const { injectPropsOnInit: a = !1, ...c } = r || {}, s = ie(o, n, {
    injectPropsOnInit: a,
    ...c
  });
  return pe.call(E, e, s), s;
};
E.get = le;
const ve = (t) => (e, o, n = {}) => (
  // @ts-ignore
  E.map(t, e, o, n)
), Ie = (t, e, o, n, r, a) => {
  let c = [];
  t && (c = [t]), e && c.push(e), o && c.push(...o.split(" "));
  const s = n == null ? void 0 : n.class;
  return a && s && !r && c.push(s), c;
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
    return (o, n) => (f(), q("div", {
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
    return (n, r) => {
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
        (f(!0), q(L, null, D(e.components, (c) => (f(), P(me, {
          key: c.path,
          "empty-label": c.title,
          path: c.path
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
    return (o, n) => (f(), q("div", {
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
    const e = t, o = typeof e.isInEditor < "u" ? e.isInEditor : I("isInEditor", A.isInEditor()), n = I("componentMapping", new E()), r = _(() => {
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
        n
      )
    ), c = _(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    });
    return (s, p) => (f(), q("div", v($({ ...r.value })), [
      (f(!0), q(L, null, D(a.value, (m) => (f(), P(b(m), {
        key: m.toString()
      }))), 128)),
      h(o) ? (f(), P(Pe, v(S({ key: 0 }, c.value)), null, 16)) : z("", !0)
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
    const e = t, o = typeof e.isInEditor < "u" ? e.isInEditor : I("isInEditor", A.isInEditor()), n = _(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    }), r = w();
    return (a, c) => {
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
    const e = t, o = w(), n = I("isInEditor", A.isInEditor()), r = I("componentMapping", new E()), a = _(
      () => x.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        e.aemNoDecoration,
        () => ({}),
        !0,
        r
      )
    ), c = _(
      () => x.getChildPages(e.cqChildren, r)
    ), s = _(() => {
      const p = ["aem-page"];
      o.cssClassNames && p.push(...o.cssClassNames.split(" "));
      const m = {
        class: p.join(" ")
      };
      return n && (m["data-cq-data-path"] = e.cqPath), m;
    });
    return (p, m) => (f(), q("div", v($(s.value)), [
      (f(!0), q(L, null, D(a.value, (u) => (f(), P(b(u), {
        key: u.toString()
      }))), 128)),
      (f(!0), q(L, null, D(c.value, (u) => (f(), P(b(u), {
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
    const e = t, o = w(), n = typeof e.isInEditor < "u" ? e.isInEditor : I("isInEditor", A.isInEditor()), r = () => {
      const s = {}, p = ["aem-container"];
      return e.gridClassNames && p.push(e.gridClassNames), s.class = p.join(" "), n && (s["data-cq-data-path"] = e.cqPath), s;
    }, a = () => {
      const s = {
        cqPath: e.cqPath
      }, p = [
        "new",
        "section",
        "aem-Grid-newComponent"
      ];
      return s.placeholderClassNames = p.join(" "), s;
    }, c = (s) => {
      const p = {};
      return e.columnClassNames && e.columnClassNames[s] && (p.class = e.columnClassNames[s]), p;
    };
    return (s, p) => (f(), P(ye, S({
      "aem-no-decoration": e.aemNoDecoration,
      "cq-path": e.cqPath,
      "get-container-props": r,
      "get-item-component-props": c,
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
