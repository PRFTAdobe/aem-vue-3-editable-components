import { h as N, defineComponent as _, inject as I, useSlots as L, useAttrs as w, computed as C, unref as h, openBlock as f, createBlock as P, resolveDynamicComponent as b, normalizeProps as q, mergeProps as S, createElementBlock as v, guardReactiveProps as $, createCommentVNode as U, withCtx as G, reactive as R, onMounted as Q, onUnmounted as H, toRefs as V, provide as z, normalizeClass as W, createElementVNode as J, Fragment as k, renderList as D, onUpdated as X } from "vue";
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
  var n = 47, r = 46, a = function(l) {
    var c = o(l);
    if (c !== "string")
      throw new TypeError("Expected a string, got a ".concat(c));
  }, i = function(l, c) {
    for (var p = "", g = 0, O = -1, j = 0, M, y = 0; y <= l.length; ++y) {
      if (y < l.length)
        M = l.charCodeAt(y);
      else {
        if (M === n)
          break;
        M = n;
      }
      if (M === n) {
        if (!(O === y - 1 || j === 1))
          if (O !== y - 1 && j === 2) {
            if (p.length < 2 || g !== 2 || p.charCodeAt(p.length - 1) !== r || p.charCodeAt(p.length - 2) !== r) {
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
        M === r && j !== -1 ? ++j : j = -1;
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
    var p = c.charCodeAt(0) === n, g = c.charCodeAt(c.length - 1) === n;
    return c = s(c), c = i(c, !p), c.length === 0 && !p && (c = "."), c.length > 0 && g && (c += "/"), p ? "/" + c : c;
  }, m = d;
  e.default = m, t.exports = e.default;
})(B, B.exports);
var K = B.exports;
const ee = /* @__PURE__ */ Z(K), x = {
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
    return Object.keys(e).length > 0 && o.length > 0 && o.forEach((d) => {
      const m = this.modelToProps(
        e[d]
      );
      if (m && typeof m.cqType < "u") {
        const u = i.get(m.cqType);
        n && (m.aemNoDecoration = n), u && s.push(
          this.connectComponentWithItem(
            u,
            m,
            d,
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
    const e = t, o = I("isInEditor", A.isInEditor()), n = L(), r = w(), a = C(() => {
      const d = {}, { componentProperties: m } = e;
      return o && (d["data-cq-data-path"] = m.cqPath, e.editConfig.resourceType && (d["data-cq-resource-type"] = e.editConfig.resourceType)), d;
    }), i = C(() => {
      var p;
      const d = {}, { componentProperties: m } = e, { appliedCssClassNames: u, cqType: l } = m, c = [];
      return u && c.push(u), (p = e == null ? void 0 : e.containerProps) != null && p.class && c.push(e.containerProps.class), l && (l != null && l.endsWith("/container")) && c.push("aem-editable"), c.length && (d.class = c.join(" ")), d;
    }), s = C(() => o && typeof e.editConfig.isEmpty == "function" && e.editConfig.isEmpty(e.componentProperties) ? {
      class: "cq-placeholder",
      "data-emptytext": e.editConfig.emptyLabel
    } : null);
    return (d, m) => {
      var u, l, c, p;
      return !h(o) && e.componentProperties.hasOwnProperty("aemNoDecoration") && e.componentProperties.aemNoDecoration || e.componentProperties.hasOwnProperty("cqHierarchyType") && e.componentProperties.cqHierarchyType === "page" ? (f(), P(b((l = (u = h(n)).default) == null ? void 0 : l.call(u)[0]), q(S({ key: 0 }, { ...h(r), containerProps: e.containerProps })), null, 16)) : (f(), v("div", q(S({ key: 1 }, { ...a.value, ...i.value })), [
        (f(), P(b((p = (c = h(n)).default) == null ? void 0 : p.call(c)[0]), q($({
          ...h(r),
          componentProperties: e.componentProperties
        })), null, 16)),
        s.value ? (f(), v("div", q(S({ key: 0 }, s.value)), null, 16)) : U("", !0)
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
    const e = t, o = L(), n = w();
    return (r, a) => (f(), P(te, q($({
      ...h(n),
      componentProperties: { ...h(n) },
      editConfig: e.editConfig
    })), {
      default: G(() => {
        var i, s;
        return [
          (f(), P(b((s = (i = h(o)).default) == null ? void 0 : s.call(i)[0])))
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
    const e = t, o = L(), n = I("isInEditor", A.isInEditor()), r = R(w()), a = R({}), i = C(() => {
      const { pagePath: m, itemPath: u, injectPropsOnInit: l, cqPath: c } = e;
      return x.getCQPath({
        pagePath: m,
        itemPath: u,
        injectPropsOnInit: l,
        cqPath: c
      });
    }), s = (m) => {
      const { pagePath: u, itemPath: l, injectPropsOnInit: c } = e, p = m || e.cqPath || u && x.getCQPath({ pagePath: u, itemPath: l, injectPropsOnInit: c });
      p && F.getData({
        path: p,
        forceReload: e.cqForceReload
      }).then((g) => {
        g && Object.keys(g).length > 0 && (Object.assign(a, x.modelToProps(g)), c && n && Y.dispatchGlobalCustomEvent(
          "cq-async-content-loaded",
          {}
        ));
      }).catch((g) => {
        console.error(g);
      });
    }, d = s.bind(null, i.value);
    return Q(() => {
      const m = i.value;
      e.injectPropsOnInit && s(m), F.addListener(m, d);
    }), H(() => {
      F.removeListener(e.cqPath, d);
    }), (m, u) => {
      var l, c;
      return f(), P(b((c = (l = h(o)).default) == null ? void 0 : c.call(l)[0]), q($({
        pagePath: t.pagePath,
        itemPath: t.itemPath,
        cqPath: i.value,
        ...r,
        ...a
      })), null, 16);
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
    const e = t, o = L(), n = w(), { modelConfig: r } = V(e), a = n.cqForceReload || r.value.forceReload, { injectPropsOnInit: i } = r.value;
    return (s, d) => (f(), P(ne, S({
      "cq-force-reload": h(a),
      "inject-props-on-init": h(i)
    }, { ...h(n) }), {
      default: G(() => {
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
    const e = L(), o = w(), n = I("componentMapping", new E()), r = I("isInEditor", A.isInEditor());
    return z("isInEditor", r), z("componentMapping", n), (a, i) => {
      var s, d;
      return f(), P(b((d = (s = h(e)).default) == null ? void 0 : d.call(s)[0]), q($({ ...h(o) })), null, 16);
    };
  }
}), ae = (t) => N(se, {}, () => [N(t)]), ie = (t, e) => N(re, { modelConfig: e }, () => [N(t)]), ce = (t, e) => N(oe, { editConfig: e }, () => [N(t)]), pe = (t, e, o) => {
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
  return s = ae(
    ie(ce(s, e), i)
  ), s;
}, le = E.map, de = E.get;
E.map = function(e, o, n = {
  isEmpty: () => !1
}, r = {}) {
  const { injectPropsOnInit: a = !1, ...i } = r || {}, s = pe(o, n, {
    injectPropsOnInit: a,
    ...i
  });
  return le.call(E, e, s), s;
};
E.get = de;
const Ie = (t) => (e, o, n = {}) => (
  // @ts-ignore
  E.map(t, e, o, n)
), be = (t, e, o, n, r, a) => {
  let i = [];
  t && (i = [t]), e && i.push(e), o && i.push(...o.split(" "));
  const s = n == null ? void 0 : n.class;
  return a && s && !r && i.push(s), i;
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
    return (o, n) => (f(), v("div", {
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
    const e = t, o = C(
      () => e.components && e.components.length > 0 ? e.title : e.emptyLabel
    );
    return (n, r) => {
      var a;
      return f(), v("div", {
        class: W([
          "aem-AllowedComponent--list",
          (a = e.placeholderProps) == null ? void 0 : a.placeholderClassNames
        ])
      }, [
        J("div", {
          "data-text": o.value,
          class: "aem-AllowedComponent--title"
        }, null, 8, fe),
        (f(!0), v(k, null, D(e.components, (i) => (f(), P(ue, {
          key: i.path,
          "empty-label": i.title,
          path: i.path
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
    return (o, n) => (f(), v("div", {
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
    const e = t, o = typeof e.isInEditor < "u" ? e.isInEditor : I("isInEditor", A.isInEditor()), n = I("componentMapping", new E()), r = C(() => {
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
    return (s, d) => (f(), v("div", q($({ ...r.value })), [
      (f(!0), v(k, null, D(a.value, (m) => (f(), P(b(m), {
        key: m.toString()
      }))), 128)),
      h(o) ? (f(), P(ge, q(S({ key: 0 }, i.value)), null, 16)) : U("", !0)
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
    const e = t, o = typeof e.isInEditor < "u" ? e.isInEditor : I("isInEditor", A.isInEditor()), n = C(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    }), r = w();
    return (a, i) => {
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
    const e = w(), o = I("isInEditor", A.isInEditor()), n = I("componentMapping", new E()), r = t, a = C(
      () => x.getChildComponents(
        r.cqPath,
        r.cqItems,
        r.cqItemsOrder,
        r.aemNoDecoration,
        () => ({}),
        !0,
        n
      )
    ), i = C(
      () => x.getChildPages(r.cqChildren, n)
    ), s = C(() => {
      const d = ["aem-page"];
      e.cssClassNames && d.push(...e.cssClassNames.split(" "));
      const m = {
        class: d.join(" ")
      };
      return o && (m["data-cq-data-path"] = r.cqPath), m;
    });
    return Q(() => {
      e.title && (document.title = e.title);
    }), X(() => {
      e.title && (document.title = e.title);
    }), (d, m) => (f(), v("div", q($(s.value)), [
      (f(!0), v(k, null, D(a.value, (u) => (f(), P(b(u), {
        key: u.toString()
      }))), 128)),
      (f(!0), v(k, null, D(i.value, (u) => (f(), P(b(u), {
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
    const e = t, o = w(), n = typeof e.isInEditor < "u" ? e.isInEditor : I("isInEditor", A.isInEditor()), r = () => {
      const s = {}, d = ["aem-container"];
      return e.gridClassNames && d.push(e.gridClassNames), s.class = d.join(" "), n && (s["data-cq-data-path"] = e.cqPath), s;
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
    return (s, d) => (f(), P(Ce, S({
      "aem-no-decoration": e.aemNoDecoration,
      "cq-path": e.cqPath,
      "get-container-props": r,
      "get-item-component-props": i,
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
