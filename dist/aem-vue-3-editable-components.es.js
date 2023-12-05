import { h as N, defineComponent as _, inject as I, useSlots as L, useAttrs as w, computed as y, unref as h, openBlock as f, createBlock as P, resolveDynamicComponent as b, normalizeProps as q, mergeProps as S, createElementBlock as v, guardReactiveProps as $, createCommentVNode as z, withCtx as U, reactive as H, onMounted as G, onUnmounted as V, onUpdated as Q, toRefs as J, provide as R, normalizeClass as W, createElementVNode as X, Fragment as k, renderList as D } from "vue";
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
  function o(u) {
    "@babel/helpers - typeof";
    return o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
      return typeof l;
    } : function(l) {
      return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
    }, o(u);
  }
  var r = 47, n = 46, a = function(l) {
    var i = o(l);
    if (i !== "string")
      throw new TypeError("Expected a string, got a ".concat(i));
  }, c = function(l, i) {
    for (var p = "", g = 0, O = -1, j = 0, M, C = 0; C <= l.length; ++C) {
      if (C < l.length)
        M = l.charCodeAt(C);
      else {
        if (M === r)
          break;
        M = r;
      }
      if (M === r) {
        if (!(O === C - 1 || j === 1))
          if (O !== C - 1 && j === 2) {
            if (p.length < 2 || g !== 2 || p.charCodeAt(p.length - 1) !== n || p.charCodeAt(p.length - 2) !== n) {
              if (p.length > 2) {
                var T = p.lastIndexOf("/");
                if (T !== p.length - 1) {
                  T === -1 ? (p = "", g = 0) : (p = p.slice(0, T), g = p.length - 1 - p.lastIndexOf("/")), O = C, j = 0;
                  continue;
                }
              } else if (p.length === 2 || p.length === 1) {
                p = "", g = 0, O = C, j = 0;
                continue;
              }
            }
            i && (p.length > 0 ? p += "/.." : p = "..", g = 2);
          } else
            p.length > 0 ? p += "/" + l.slice(O + 1, C) : p = l.slice(O + 1, C), g = C - O - 1;
        O = C, j = 0;
      } else
        M === n && j !== -1 ? ++j : j = -1;
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
    var i = l;
    if (i.length === 0)
      return ".";
    var p = i.charCodeAt(0) === r, g = i.charCodeAt(i.length - 1) === r;
    return i = s(i), i = c(i, !p), i.length === 0 && !p && (i = "."), i.length > 0 && g && (i += "/"), p ? "/" + i : i;
  }, m = d;
  e.default = m, t.exports = e.default;
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
      const m = this.modelToProps(
        e[d]
      );
      if (m && typeof m.cqType < "u") {
        const u = c.get(m.cqType);
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
    const e = t, o = I("isInEditor", A.isInEditor()), r = L(), n = w(), a = y(() => {
      const d = {}, { componentProperties: m } = e;
      return o && (d["data-cq-data-path"] = m.cqPath, e.editConfig.resourceType && (d["data-cq-resource-type"] = e.editConfig.resourceType)), d;
    }), c = y(() => {
      var p;
      const d = {}, { componentProperties: m } = e, { appliedCssClassNames: u, cqType: l } = m, i = [];
      return u && i.push(u), (p = e == null ? void 0 : e.containerProps) != null && p.class && i.push(e.containerProps.class), l && (l != null && l.endsWith("/container")) && i.push("aem-editable"), i.length && (d.class = i.join(" ")), d;
    }), s = y(() => o && typeof e.editConfig.isEmpty == "function" && e.editConfig.isEmpty(e.componentProperties) ? {
      class: "cq-placeholder",
      "data-emptytext": e.editConfig.emptyLabel
    } : null);
    return (d, m) => {
      var u, l, i, p;
      return !h(o) && e.componentProperties.hasOwnProperty("aemNoDecoration") && e.componentProperties.aemNoDecoration || e.componentProperties.hasOwnProperty("cqHierarchyType") && e.componentProperties.cqHierarchyType === "page" ? (f(), P(b((l = (u = h(r)).default) == null ? void 0 : l.call(u)[0]), q(S({ key: 0 }, { ...h(n), containerProps: e.containerProps })), null, 16)) : (f(), v("div", q(S({ key: 1 }, { ...a.value, ...c.value })), [
        (f(), P(b((p = (i = h(r)).default) == null ? void 0 : p.call(i)[0]), q($({
          ...h(n),
          componentProperties: e.componentProperties
        })), null, 16)),
        s.value ? (f(), v("div", q(S({ key: 0 }, s.value)), null, 16)) : z("", !0)
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
    const e = t, o = L(), r = w();
    return (n, a) => (f(), P(te, q($({
      ...h(r),
      componentProperties: { ...h(r) },
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
    const e = t, o = L(), r = I("isInEditor", A.isInEditor()), n = H({}), a = y(() => {
      const { pagePath: m, itemPath: u, injectPropsOnInit: l, cqPath: i } = e;
      return x.getCQPath({
        pagePath: m,
        itemPath: u,
        injectPropsOnInit: l,
        cqPath: i
      });
    }), c = y(() => ({
      ...w(),
      ...n,
      cqPath: a.value
    })), s = (m) => {
      const { pagePath: u, itemPath: l, injectPropsOnInit: i } = e, p = m || e.cqPath || u && x.getCQPath({ pagePath: u, itemPath: l, injectPropsOnInit: i });
      p && F.getData({
        path: p,
        forceReload: e.cqForceReload
      }).then((g) => {
        g && Object.keys(g).length > 0 && (Object.assign(n, x.modelToProps(g)), i && r && Y.dispatchGlobalCustomEvent(
          "cq-async-content-loaded",
          {}
        ));
      }).catch((g) => {
        console.error(g);
      });
    }, d = s.bind(null, a.value);
    return G(() => {
      const m = a.value;
      e.injectPropsOnInit && s(m), F.addListener(m, d);
    }), V(() => {
      F.removeListener(e.cqPath, d);
    }), Q(() => {
      console.log(`${a.value} has been updated`);
    }), (m, u) => {
      var l, i;
      return f(), P(b((i = (l = h(o)).default) == null ? void 0 : i.call(l)[0]), q($(c.value)), null, 16);
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
    const e = t, o = L(), r = w(), { modelConfig: n } = J(e), a = r.cqForceReload || n.value.forceReload, { injectPropsOnInit: c } = n.value;
    return (s, d) => (f(), P(ne, S({
      "cq-force-reload": h(a),
      "inject-props-on-init": h(c)
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
}), se = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "ContextProvider",
  setup(t) {
    const e = L(), o = w(), r = I("componentMapping", new E()), n = I("isInEditor", A.isInEditor());
    return R("isInEditor", n), R("componentMapping", r), (a, c) => {
      var s, d;
      return f(), P(b((d = (s = h(e)).default) == null ? void 0 : d.call(s)[0]), q($({ ...h(o) })), null, 16);
    };
  }
}), ae = (t) => N(se, {}, () => [N(t)]), ie = (t, e) => N(re, { modelConfig: e }, () => [N(t)]), ce = (t, e) => N(oe, { editConfig: e }, () => [N(t)]), pe = (t, e, o) => {
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
}, le = E.map, de = E.get;
E.map = function(e, o, r = {
  isEmpty: () => !1
}, n = {}) {
  const { injectPropsOnInit: a = !1, ...c } = n || {}, s = pe(o, r, {
    injectPropsOnInit: a,
    ...c
  });
  return le.call(E, e, s), s;
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
        class: W([
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
      class: W(e.placeholderClassNames),
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
    const e = t, o = typeof e.isInEditor < "u" ? e.isInEditor : I("isInEditor", A.isInEditor()), r = I("componentMapping", new E()), n = y(() => {
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
    return (s, d) => (f(), v("div", q($({ ...n.value })), [
      (f(!0), v(k, null, D(a.value, (m) => (f(), P(b(m), {
        key: m.toString()
      }))), 128)),
      h(o) ? (f(), P(ge, q(S({ key: 0 }, c.value)), null, 16)) : z("", !0)
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
    const e = t, o = typeof e.isInEditor < "u" ? e.isInEditor : I("isInEditor", A.isInEditor()), r = y(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
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
    const e = w(), o = I("isInEditor", A.isInEditor()), r = I("componentMapping", new E()), n = t, a = y(
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
      const m = {
        class: d.join(" ")
      };
      return o && (m["data-cq-data-path"] = n.cqPath), m;
    });
    return G(() => {
      e.title && (document.title = e.title);
    }), Q(() => {
      e.title && (document.title = e.title);
    }), (d, m) => (f(), v("div", q($(s.value)), [
      (f(!0), v(k, null, D(a.value, (u) => (f(), P(b(u), {
        key: u.toString()
      }))), 128)),
      (f(!0), v(k, null, D(c.value, (u) => (f(), P(b(u), {
        key: u.toString()
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
    const e = t, o = w(), r = typeof e.isInEditor < "u" ? e.isInEditor : I("isInEditor", A.isInEditor()), n = () => {
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
