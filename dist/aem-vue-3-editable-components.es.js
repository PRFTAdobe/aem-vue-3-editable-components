import { h as N, defineComponent as _, inject as q, useSlots as M, useAttrs as w, computed as y, unref as h, openBlock as f, createBlock as P, resolveDynamicComponent as b, normalizeProps as I, mergeProps as S, createElementBlock as v, guardReactiveProps as L, createCommentVNode as U, withCtx as z, reactive as W, onMounted as G, onUnmounted as H, onUpdated as V, toRefs as J, provide as R, normalizeClass as Q, createElementVNode as X, Fragment as k, renderList as D } from "vue";
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
    return o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(p) {
      return typeof p;
    } : function(p) {
      return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p;
    }, o(m);
  }
  var r = 47, n = 46, a = function(p) {
    var l = o(p);
    if (l !== "string")
      throw new TypeError("Expected a string, got a ".concat(l));
  }, c = function(p, l) {
    for (var i = "", g = 0, O = -1, j = 0, $, C = 0; C <= p.length; ++C) {
      if (C < p.length)
        $ = p.charCodeAt(C);
      else {
        if ($ === r)
          break;
        $ = r;
      }
      if ($ === r) {
        if (!(O === C - 1 || j === 1))
          if (O !== C - 1 && j === 2) {
            if (i.length < 2 || g !== 2 || i.charCodeAt(i.length - 1) !== n || i.charCodeAt(i.length - 2) !== n) {
              if (i.length > 2) {
                var T = i.lastIndexOf("/");
                if (T !== i.length - 1) {
                  T === -1 ? (i = "", g = 0) : (i = i.slice(0, T), g = i.length - 1 - i.lastIndexOf("/")), O = C, j = 0;
                  continue;
                }
              } else if (i.length === 2 || i.length === 1) {
                i = "", g = 0, O = C, j = 0;
                continue;
              }
            }
            l && (i.length > 0 ? i += "/.." : i = "..", g = 2);
          } else
            i.length > 0 ? i += "/" + p.slice(O + 1, C) : i = p.slice(O + 1, C), g = C - O - 1;
        O = C, j = 0;
      } else
        $ === n && j !== -1 ? ++j : j = -1;
    }
    return i;
  }, s = function(p) {
    try {
      return decodeURIComponent(p);
    } catch {
      return p;
    }
  }, d = function(p) {
    a(p);
    var l = p;
    if (l.length === 0)
      return ".";
    var i = l.charCodeAt(0) === r, g = l.charCodeAt(l.length - 1) === r;
    return l = s(l), l = c(l, !i), l.length === 0 && !i && (l = "."), l.length > 0 && g && (l += "/"), i ? "/" + l : l;
  }, u = d;
  e.default = u, t.exports = e.default;
})(B, B.exports);
var K = B.exports;
const ee = /* @__PURE__ */ Z(K), x = {
  getItemPath(t, e, o) {
    let r = (e == null ? void 0 : e.length) > 0 ? `${e}/${t}` : t;
    return o && (r = (e == null ? void 0 : e.length) > 0 ? `${e}/jcr:content/${t}` : t), r;
  },
  connectComponentWithItem(t, e, o, r, n, a) {
    const c = this.getItemPath(o, r, a);
    return N(t, {
      ...e,
      cqPath: c,
      containerProps: n(o)
    });
  },
  getChildComponents(t, e, o, r, n, a, c) {
    const s = [];
    return Object.keys(e).length > 0 && o.length > 0 && o.forEach((d) => {
      const u = this.modelToProps(
        e[d]
      );
      if (u && typeof u.cqType < "u") {
        const m = c.get(u.cqType);
        r && (u.aemNoDecoration = r), m && s.push(
          this.connectComponentWithItem(
            m,
            u,
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
}, te = /* @__PURE__ */ _({
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
    const e = t, o = q("isInEditor", A.isInEditor()), r = M(), n = w(), a = y(() => {
      const d = {}, { componentProperties: u } = e;
      return o && (d["data-cq-data-path"] = u.cqPath, e.editConfig.resourceType && (d["data-cq-resource-type"] = e.editConfig.resourceType)), d;
    }), c = y(() => {
      var i;
      const d = {}, { componentProperties: u } = e, { appliedCssClassNames: m, cqType: p } = u, l = [];
      return m && l.push(m), (i = e == null ? void 0 : e.containerProps) != null && i.class && l.push(e.containerProps.class), p && (p != null && p.endsWith("/container")) && l.push("aem-editable"), l.length && (d.class = l.join(" ")), d;
    }), s = y(() => o && typeof e.editConfig.isEmpty == "function" && e.editConfig.isEmpty(e.componentProperties) ? {
      class: "cq-placeholder",
      "data-emptytext": e.editConfig.emptyLabel
    } : null);
    return (d, u) => {
      var m, p, l, i;
      return !h(o) && e.componentProperties.hasOwnProperty("aemNoDecoration") && e.componentProperties.aemNoDecoration || e.componentProperties.hasOwnProperty("cqHierarchyType") && e.componentProperties.cqHierarchyType === "page" ? (f(), P(b((p = (m = h(r)).default) == null ? void 0 : p.call(m)[0]), I(S({ key: 0 }, { ...h(n), containerProps: e.containerProps })), null, 16)) : (f(), v("div", I(S({ key: 1 }, { ...a.value, ...c.value })), [
        (f(), P(b((i = (l = h(r)).default) == null ? void 0 : i.call(l)[0]), I(L({
          ...h(n),
          componentProperties: e.componentProperties
        })), null, 16)),
        s.value ? (f(), v("div", I(S({ key: 0 }, s.value)), null, 16)) : U("", !0)
      ], 16));
    };
  }
}), oe = /* @__PURE__ */ _({
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
    const e = t, o = M(), r = w();
    return (n, a) => (f(), P(te, I(L({
      ...h(r),
      componentProperties: { ...h(r) },
      editConfig: e.editConfig
    })), {
      default: z(() => {
        var c, s;
        return [
          (f(), P(b((s = (c = h(o)).default) == null ? void 0 : s.call(c)[0])))
        ];
      }),
      _: 1
    }, 16));
  }
}), ne = /* @__PURE__ */ _({
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
    const e = t, o = M(), r = q("isInEditor", A.isInEditor()), n = W({}), a = y(() => {
      const { pagePath: u, itemPath: m, injectPropsOnInit: p, cqPath: l } = e;
      return x.getCQPath({
        pagePath: u,
        itemPath: m,
        injectPropsOnInit: p,
        cqPath: l
      });
    }), c = y(() => ({
      ...w(),
      ...n,
      cqPath: a.value
    })), s = (u) => {
      const { pagePath: m, itemPath: p, injectPropsOnInit: l } = e, i = u || e.cqPath || m && x.getCQPath({ pagePath: m, itemPath: p, injectPropsOnInit: l });
      i && F.getData({
        path: i,
        forceReload: e.cqForceReload
      }).then((g) => {
        g && Object.keys(g).length > 0 && (Object.assign(n, x.modelToProps(g)), l && r && Y.dispatchGlobalCustomEvent(
          "cq-async-content-loaded",
          {}
        ));
      }).catch((g) => {
        console.error(g);
      });
    }, d = s.bind(null, a.value);
    return G(() => {
      const u = a.value;
      e.injectPropsOnInit && s(u), F.addListener(u, d);
    }), H(() => {
      F.removeListener(e.cqPath, d);
    }), V(() => {
      console.log(`${a.value} has been updated`);
    }), (u, m) => {
      var p, l;
      return f(), P(b((l = (p = h(o)).default) == null ? void 0 : l.call(p)[0]), {
        modelValue: c.value,
        "onUpdate:modelValue": m[0] || (m[0] = (i) => c.value = i)
      }, null, 8, ["modelValue"]);
    };
  }
}), re = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "CompositeModelProvider",
  props: {
    modelConfig: {
      type: Object,
      default: () => ({ injectPropsOnInit: !1, forceReload: !1 })
    }
  },
  setup(t) {
    const e = t, o = M(), r = w(), { modelConfig: n } = J(e), a = r.cqForceReload || n.value.forceReload, { injectPropsOnInit: c } = n.value;
    return (s, d) => (f(), P(ne, S({
      "cq-force-reload": h(a),
      "inject-props-on-init": h(c)
    }, { ...h(r) }), {
      default: z(() => {
        var u, m;
        return [
          (f(), P(b((m = (u = h(o)).default) == null ? void 0 : m.call(u)[0])))
        ];
      }),
      _: 1
    }, 16, ["cq-force-reload", "inject-props-on-init"]));
  }
}), se = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "ContextProvider",
  setup(t) {
    const e = M(), o = w(), r = q("componentMapping", new E()), n = q("isInEditor", A.isInEditor());
    return R("isInEditor", n), R("componentMapping", r), (a, c) => {
      var s, d;
      return f(), P(b((d = (s = h(e)).default) == null ? void 0 : d.call(s)[0]), I(L({ ...h(o) })), null, 16);
    };
  }
}), ae = (t) => N(se, {}, () => [N(t)]), ie = (t, e) => N(re, { modelConfig: e }, () => [N(t)]), ce = (t, e) => N(oe, { editConfig: e }, () => [N(t)]), le = (t, e, o) => {
  const {
    injectPropsOnInit: r = !0,
    forceReload: n = !1,
    ...a
  } = o || {}, c = {
    injectPropsOnInit: r,
    forceReload: n,
    ...a
  };
  let s = t;
  return s = ae(
    ie(ce(s, e), c)
  ), s;
}, pe = E.map, de = E.get;
E.map = function(e, o, r = {
  isEmpty: () => !1
}, n = {}) {
  const { injectPropsOnInit: a = !1, ...c } = n || {}, s = le(o, r, {
    injectPropsOnInit: a,
    ...c
  });
  return pe.call(E, e, s), s;
};
E.get = de;
const Ie = (t) => (e, o, r = {}) => (
  // @ts-ignore
  E.map(t, e, o, r)
), be = (t, e, o, r, n, a) => {
  let c = [];
  t && (c = [t]), e && c.push(e), o && c.push(...o.split(" "));
  const s = r == null ? void 0 : r.class;
  return a && s && !n && c.push(s), c;
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
}), me = ["data-cq-data-path", "data-emptytext"], ue = /* @__PURE__ */ _({
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
    return (o, r) => (f(), v("div", {
      "data-cq-data-path": e.path,
      "data-emptytext": e.emptyLabel,
      class: "aem-AllowedComponent--component cq-placeholder placeholder"
    }, null, 8, me));
  }
}), fe = ["data-text"], he = /* @__PURE__ */ _({
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
    const e = t, o = y(
      () => e.components && e.components.length > 0 ? e.title : e.emptyLabel
    );
    return (r, n) => {
      var a;
      return f(), v("div", {
        class: Q([
          "aem-AllowedComponent--list",
          (a = e.placeholderProps) == null ? void 0 : a.placeholderClassNames
        ])
      }, [
        X("div", {
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
}), Pe = ["data-cq-data-path"], ge = /* @__PURE__ */ _({
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
    return (o, r) => (f(), v("div", {
      class: Q(e.placeholderClassNames),
      "data-cq-data-path": `${e.cqPath}/*`
    }, null, 10, Pe));
  }
}), ye = /* @__PURE__ */ _({
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
    const e = t, o = typeof e.isInEditor < "u" ? e.isInEditor : q("isInEditor", A.isInEditor()), r = q("componentMapping", new E()), n = y(() => {
      let s = {};
      return typeof e.getContainerProps == "function" ? s = e.getContainerProps() : (s = {
        class: "aem-container"
      }, o && (s["data-cq-data-path"] = e.cqPath)), s;
    }), a = y(
      () => x.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        e.aemNoDecoration,
        typeof e.getItemComponentProps == "function" ? e.getItemComponentProps : () => ({}),
        !1,
        r
      )
    ), c = y(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    });
    return (s, d) => (f(), v("div", I(L({ ...n.value })), [
      (f(!0), v(k, null, D(a.value, (u) => (f(), P(b(u), {
        key: u.toString()
      }))), 128)),
      h(o) ? (f(), P(ge, I(S({ key: 0 }, c.value)), null, 16)) : U("", !0)
    ], 16));
  }
}), Ce = /* @__PURE__ */ _({
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
    const e = t, o = typeof e.isInEditor < "u" ? e.isInEditor : q("isInEditor", A.isInEditor()), r = y(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    }), n = w();
    return (a, c) => {
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
}), Oe = /* @__PURE__ */ _({
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
    const e = w(), o = q("isInEditor", A.isInEditor()), r = q("componentMapping", new E()), n = t, a = y(
      () => x.getChildComponents(
        n.cqPath,
        n.cqItems,
        n.cqItemsOrder,
        n.aemNoDecoration,
        () => ({}),
        !0,
        r
      )
    ), c = y(
      () => x.getChildPages(n.cqChildren, r)
    ), s = y(() => {
      const d = ["aem-page"];
      e.cssClassNames && d.push(...e.cssClassNames.split(" "));
      const u = {
        class: d.join(" ")
      };
      return o && (u["data-cq-data-path"] = n.cqPath), u;
    });
    return G(() => {
      e.title && (document.title = e.title);
    }), V(() => {
      e.title && (document.title = e.title);
    }), (d, u) => (f(), v("div", I(L(s.value)), [
      (f(!0), v(k, null, D(a.value, (m) => (f(), P(b(m), {
        key: m.toString()
      }))), 128)),
      (f(!0), v(k, null, D(c.value, (m) => (f(), P(b(m), {
        key: m.toString()
      }))), 128))
    ], 16));
  }
}), je = /* @__PURE__ */ _({
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
    const e = t, o = w(), r = typeof e.isInEditor < "u" ? e.isInEditor : q("isInEditor", A.isInEditor()), n = () => {
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
    }, c = (s) => {
      const d = {};
      return e.columnClassNames && e.columnClassNames[s] && (d.class = e.columnClassNames[s]), d;
    };
    return (s, d) => (f(), P(Ce, S({
      "aem-no-decoration": e.aemNoDecoration,
      "cq-path": e.cqPath,
      "get-container-props": n,
      "get-item-component-props": c,
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
