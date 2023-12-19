import { h as N, defineComponent as y, inject as q, useSlots as $, useAttrs as S, computed as C, unref as h, openBlock as f, createBlock as P, resolveDynamicComponent as I, normalizeProps as v, mergeProps as w, createElementBlock as _, guardReactiveProps as k, createCommentVNode as z, withCtx as U, reactive as W, onMounted as G, onUnmounted as H, watch as V, toRefs as J, provide as R, normalizeClass as Q, createElementVNode as X, Fragment as L, renderList as D, onUpdated as Y } from "vue";
import { ComponentMapping as b } from "@adobe/aem-spa-component-mapping";
import { ComponentMapping as Ae } from "@adobe/aem-spa-component-mapping";
import { AuthoringUtils as A, ModelManager as F, PathUtils as Z } from "@adobe/aem-spa-page-model-manager";
function K(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var B = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  function n(d) {
    "@babel/helpers - typeof";
    return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
      return typeof l;
    } : function(l) {
      return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
    }, n(d);
  }
  var r = 47, o = 46, a = function(l) {
    var m = n(l);
    if (m !== "string")
      throw new TypeError("Expected a string, got a ".concat(m));
  }, p = function(l, m) {
    for (var c = "", E = 0, O = -1, j = 0, M, g = 0; g <= l.length; ++g) {
      if (g < l.length)
        M = l.charCodeAt(g);
      else {
        if (M === r)
          break;
        M = r;
      }
      if (M === r) {
        if (!(O === g - 1 || j === 1))
          if (O !== g - 1 && j === 2) {
            if (c.length < 2 || E !== 2 || c.charCodeAt(c.length - 1) !== o || c.charCodeAt(c.length - 2) !== o) {
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
        M === o && j !== -1 ? ++j : j = -1;
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
    var m = l;
    if (m.length === 0)
      return ".";
    var c = m.charCodeAt(0) === r, E = m.charCodeAt(m.length - 1) === r;
    return m = s(m), m = p(m, !c), m.length === 0 && !c && (m = "."), m.length > 0 && E && (m += "/"), c ? "/" + m : m;
  }, u = i;
  e.default = u, t.exports = e.default;
})(B, B.exports);
var ee = B.exports;
const te = /* @__PURE__ */ K(ee), x = {
  getItemPath(t, e, n) {
    let r = (e == null ? void 0 : e.length) > 0 ? `${e}/${t}` : t;
    return n && (r = (e == null ? void 0 : e.length) > 0 ? `${e}/jcr:content/${t}` : t), r;
  },
  connectComponentWithItem(t, e, n, r, o, a) {
    const p = this.getItemPath(n, r, a);
    return N(t, {
      ...e,
      cqPath: p,
      containerProps: o(n)
    });
  },
  getChildComponents(t, e, n, r, o, a, p) {
    const s = [];
    return Object.keys(e).length > 0 && n.length > 0 && n.forEach((i) => {
      const u = this.modelToProps(
        e[i]
      );
      if (u && typeof u.cqType < "u") {
        const d = p.get(u.cqType);
        r && (u.aemNoDecoration = r), d && s.push(
          this.connectComponentWithItem(
            d,
            u,
            i,
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
    return r && !o && (o = te(
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
}, oe = /* @__PURE__ */ y({
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
    const e = t, n = q("isInEditor", A.isInEditor()), r = $(), o = S(), a = C(() => {
      const i = {}, { componentProperties: u } = e, { cqPath: d } = u;
      return n && (i["data-cq-data-path"] = d, e.editConfig.resourceType && (i["data-cq-resource-type"] = e.editConfig.resourceType)), i;
    }), p = C(() => {
      var c;
      const i = {}, { componentProperties: u } = e, { appliedCssClassNames: d, cqType: l } = u, m = [];
      return d && m.push(d), (c = e == null ? void 0 : e.containerProps) != null && c.class && m.push(e.containerProps.class), l && (l != null && l.endsWith("/container")) && m.push("aem-editable"), m.length && (i.class = m.join(" ")), i;
    }), s = C(() => n && typeof e.editConfig.isEmpty == "function" && e.editConfig.isEmpty(e.componentProperties) ? {
      class: "cq-placeholder",
      "data-emptytext": e.editConfig.emptyLabel
    } : null);
    return (i, u) => {
      var d, l, m, c;
      return !h(n) && e.componentProperties.hasOwnProperty("aemNoDecoration") && e.componentProperties.aemNoDecoration || e.componentProperties.hasOwnProperty("cqHierarchyType") && e.componentProperties.cqHierarchyType === "page" ? (f(), P(I((l = (d = h(r)).default) == null ? void 0 : l.call(d)[0]), v(w({ key: 0 }, { ...h(o), containerProps: e.containerProps })), null, 16)) : (f(), _("div", v(w({ key: 1 }, { ...a.value, ...p.value })), [
        (f(), P(I((c = (m = h(r)).default) == null ? void 0 : c.call(m)[0]), v(k({
          ...h(o),
          componentProperties: e.componentProperties
        })), null, 16)),
        s.value ? (f(), _("div", v(w({ key: 0 }, s.value)), null, 16)) : z("", !0)
      ], 16));
    };
  }
}), ne = /* @__PURE__ */ y({
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
    const e = t, n = $(), r = S();
    return (o, a) => (f(), P(oe, v(k({
      ...h(r),
      componentProperties: { ...h(r) },
      editConfig: e.editConfig
    })), {
      default: U(() => {
        var p, s;
        return [
          (f(), P(I((s = (p = h(n)).default) == null ? void 0 : s.call(p)[0])))
        ];
      }),
      _: 1
    }, 16));
  }
}), re = /* @__PURE__ */ y({
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
    const e = t, n = $(), r = q("isInEditor", A.isInEditor()), o = W(e.modelProperties), a = () => {
      const { pagePath: i, itemPath: u, injectPropsOnInit: d, cqPath: l } = e;
      return x.getCQPath({
        pagePath: i,
        itemPath: u,
        injectPropsOnInit: d,
        cqPath: l
      });
    }, p = (i) => {
      const { pagePath: u, itemPath: d, injectPropsOnInit: l } = e, m = i || e.cqPath || u && x.getCQPath({ pagePath: u, itemPath: d, injectPropsOnInit: l });
      m && F.getData({
        path: m,
        forceReload: e.cqForceReload
      }).then((c) => {
        c && Object.keys(c).length > 0 && (Object.assign(o, x.modelToProps(c)), l && r && Z.dispatchGlobalCustomEvent(
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
    }), V(
      () => e.modelProperties,
      async (i, u) => {
        i !== u && Object.assign(o, e.modelProperties);
      }
    ), (i, u) => {
      var d, l;
      return f(), P(I((l = (d = h(n)).default) == null ? void 0 : l.call(d)[0]), w({
        key: e.modelProperties
      }, {
        ...o,
        cqPath: a()
      }), null, 16);
    };
  }
}), se = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "CompositeModelProvider",
  props: {
    modelConfig: {
      type: Object,
      default: () => ({ injectPropsOnInit: !1, forceReload: !1 })
    }
  },
  setup(t) {
    const e = t, n = $(), r = S(), { modelConfig: o } = J(e), a = r.cqForceReload || o.value.forceReload, { injectPropsOnInit: p } = o.value;
    return (s, i) => (f(), P(re, w({
      "cq-force-reload": h(a),
      "inject-props-on-init": h(p),
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
}), ae = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "ContextProvider",
  setup(t) {
    const e = $(), n = S(), r = q("componentMapping", new b()), o = q("isInEditor", A.isInEditor());
    return R("isInEditor", o), R("componentMapping", r), (a, p) => {
      var s, i;
      return f(), P(I((i = (s = h(e)).default) == null ? void 0 : i.call(s)[0]), v(k({ ...h(n) })), null, 16);
    };
  }
}), ie = (t) => N(ae, {}, () => [N(t)]), ce = (t, e) => N(se, { modelConfig: e }, () => [N(t)]), pe = (t, e) => N(ne, { editConfig: e }, () => [N(t)]), le = (t, e, n) => {
  const {
    injectPropsOnInit: r = !0,
    forceReload: o = !1,
    ...a
  } = n || {}, p = {
    injectPropsOnInit: r,
    forceReload: o,
    ...a
  };
  let s = t;
  return s = ie(
    ce(pe(s, e), p)
  ), s;
}, de = b.map, me = b.get;
b.map = function(e, n, r = {
  isEmpty: () => !1
}, o = {}) {
  const { injectPropsOnInit: a = !1, ...p } = o || {}, s = le(n, r, {
    injectPropsOnInit: a,
    ...p
  });
  return de.call(b, e, s), s;
};
b.get = me;
const be = (t) => (e, n, r = {}) => (
  // @ts-ignore
  b.map(t, e, n, r)
), Ee = (t, e, n, r, o, a) => {
  let p = [];
  t && (p = [t]), e && p.push(e), n && p.push(...n.split(" "));
  const s = r == null ? void 0 : r.class;
  return a && s && !o && p.push(s), p;
}, Oe = (t) => ({
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
}), ue = ["data-cq-data-path", "data-emptytext"], fe = /* @__PURE__ */ y({
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
    }, null, 8, ue));
  }
}), he = ["data-text"], Pe = /* @__PURE__ */ y({
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
        X("div", {
          "data-text": n.value,
          class: "aem-AllowedComponent--title"
        }, null, 8, he),
        (f(!0), _(L, null, D(e.components, (p) => (f(), P(fe, {
          key: p.path,
          "empty-label": p.title,
          path: p.path
        }, null, 8, ["empty-label", "path"]))), 128))
      ], 2);
    };
  }
}), ge = ["data-cq-data-path"], ye = /* @__PURE__ */ y({
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
    }, null, 10, ge));
  }
}), Ce = /* @__PURE__ */ y({
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
    const e = t, n = typeof e.isInEditor < "u" ? e.isInEditor : q("isInEditor", A.isInEditor()), r = q("componentMapping", new b()), o = C(() => {
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
    ), p = C(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    });
    return (s, i) => (f(), _("div", v(k({ ...o.value })), [
      (f(!0), _(L, null, D(a.value, (u) => (f(), P(I(u), {
        key: u.toString()
      }))), 128)),
      h(n) ? (f(), P(ye, v(w({ key: 0 }, p.value)), null, 16)) : z("", !0)
    ], 16));
  }
}), _e = /* @__PURE__ */ y({
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
    const e = t, n = typeof e.isInEditor < "u" ? e.isInEditor : q("isInEditor", A.isInEditor()), r = C(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    }), o = S();
    return (a, p) => {
      var s;
      return h(n) && e.allowedComponents && ((s = e.allowedComponents) != null && s.applicable) ? (f(), P(Pe, {
        key: 0,
        components: e.allowedComponents.components,
        "cq-path": e.cqPath,
        "empty-label": e._allowedComponentPlaceholderListEmptyLabel,
        "placeholder-props": r.value,
        title: e.title
      }, null, 8, ["components", "cq-path", "empty-label", "placeholder-props", "title"])) : (f(), P(Ce, w({
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
}), je = /* @__PURE__ */ y({
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
    const e = S(), n = q("isInEditor", A.isInEditor()), r = q("componentMapping", new b()), o = t, a = C(
      () => x.getChildComponents(
        o.cqPath,
        o.cqItems,
        o.cqItemsOrder,
        o.aemNoDecoration,
        () => ({}),
        !0,
        r
      )
    ), p = C(
      () => x.getChildPages(o.cqChildren, r)
    ), s = C(() => {
      const i = ["aem-page"];
      e.cssClassNames && i.push(...e.cssClassNames.split(" "));
      const u = {
        class: i.join(" ")
      };
      return n && (u["data-cq-data-path"] = o.cqPath), u;
    });
    return G(() => {
      e.title && (document.title = e.title);
    }), Y(() => {
      e.title && (document.title = e.title);
    }), (i, u) => (f(), _("div", v(k(s.value)), [
      (f(!0), _(L, null, D(a.value, (d) => (f(), P(I(d), {
        key: d.toString()
      }))), 128)),
      (f(!0), _(L, null, D(p.value, (d) => (f(), P(I(d), {
        key: d.toString()
      }))), 128))
    ], 16));
  }
}), we = /* @__PURE__ */ y({
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
    const e = t, n = S(), r = typeof e.isInEditor < "u" ? e.isInEditor : q("isInEditor", A.isInEditor()), o = () => {
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
    return (s, i) => (f(), P(_e, w({
      "aem-no-decoration": e.aemNoDecoration,
      "cq-path": e.cqPath,
      "get-container-props": o,
      "get-item-component-props": p,
      "get-placeholder-props": a,
      "is-in-editor": h(r),
      title: e.title
    }, { ...h(n) }), null, 16, ["aem-no-decoration", "cq-path", "is-in-editor", "title"]));
  }
});
export {
  fe as AllowedComponentPlaceholder,
  Pe as AllowedComponentPlaceholderList,
  _e as AllowedComponentsContainer,
  Ae as ComponentMapping,
  ne as CompositeEditableProvider,
  se as CompositeModelProvider,
  Ce as Container,
  ye as ContainerPlaceholder,
  ae as ContextProvider,
  oe as EditableProvider,
  be as MapTo,
  re as ModelProvider,
  je as Page,
  we as ResponsiveGrid,
  x as Utils,
  Ee as componentClassNames,
  Oe as componentProperties,
  ie as withContext,
  pe as withEditable,
  ce as withModel
};
