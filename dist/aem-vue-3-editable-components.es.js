import { ComponentMapping as O } from "@adobe/aem-spa-component-mapping";
import { ComponentMapping as we } from "@adobe/aem-spa-component-mapping";
import { defineComponent as q, inject as b, useSlots as T, useAttrs as N, computed as _, unref as f, openBlock as m, createBlock as P, resolveDynamicComponent as E, normalizeProps as I, mergeProps as v, createElementBlock as C, guardReactiveProps as L, createCommentVNode as z, withCtx as U, ref as Q, onMounted as H, onUnmounted as W, toRefs as V, provide as B, h as j, normalizeClass as G, createElementVNode as J, Fragment as k, renderList as M } from "vue";
import { AuthoringUtils as A, ModelManager as F, PathUtils as X } from "@adobe/aem-spa-page-model-manager";
function Y(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var R = { exports: {} };
(function(n, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  function s(r) {
    "@babel/helpers - typeof";
    return s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
      return typeof o;
    } : function(o) {
      return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, s(r);
  }
  var c = 47, i = 46, l = function(o) {
    var t = s(o);
    if (t !== "string")
      throw new TypeError("Expected a string, got a ".concat(t));
  }, u = function(o, t) {
    for (var a = "", g = 0, w = -1, S = 0, $, y = 0; y <= o.length; ++y) {
      if (y < o.length)
        $ = o.charCodeAt(y);
      else {
        if ($ === c)
          break;
        $ = c;
      }
      if ($ === c) {
        if (!(w === y - 1 || S === 1))
          if (w !== y - 1 && S === 2) {
            if (a.length < 2 || g !== 2 || a.charCodeAt(a.length - 1) !== i || a.charCodeAt(a.length - 2) !== i) {
              if (a.length > 2) {
                var D = a.lastIndexOf("/");
                if (D !== a.length - 1) {
                  D === -1 ? (a = "", g = 0) : (a = a.slice(0, D), g = a.length - 1 - a.lastIndexOf("/")), w = y, S = 0;
                  continue;
                }
              } else if (a.length === 2 || a.length === 1) {
                a = "", g = 0, w = y, S = 0;
                continue;
              }
            }
            t && (a.length > 0 ? a += "/.." : a = "..", g = 2);
          } else
            a.length > 0 ? a += "/" + o.slice(w + 1, y) : a = o.slice(w + 1, y), g = y - w - 1;
        w = y, S = 0;
      } else
        $ === i && S !== -1 ? ++S : S = -1;
    }
    return a;
  }, p = function(o) {
    try {
      return decodeURIComponent(o);
    } catch {
      return o;
    }
  }, d = function(o) {
    l(o);
    var t = o;
    if (t.length === 0)
      return ".";
    var a = t.charCodeAt(0) === c, g = t.charCodeAt(t.length - 1) === c;
    return t = p(t), t = u(t, !a), t.length === 0 && !a && (t = "."), t.length > 0 && g && (t += "/"), a ? "/" + t : t;
  }, h = d;
  e.default = h, n.exports = e.default;
})(R, R.exports);
var Z = R.exports;
const K = /* @__PURE__ */ Y(Z), x = {
  getCQPath(n) {
    const { pagePath: e = "", itemPath: s = "", injectPropsOnInit: c } = n;
    let { cqPath: i = "" } = n;
    return c && !i && (i = K(
      s ? `${e}/jcr:content/${s}` : e
    ), i = i.replace(/^\.$/, "")), i;
  },
  modelToProps(n) {
    const e = Object.getOwnPropertyNames(n), s = {}, c = (i) => {
      const l = i.substring(1);
      return `cq${l.substring(0, 1).toUpperCase()}${l.substring(
        1
      )}`;
    };
    return e.forEach((i) => {
      let l = i;
      l.startsWith(":") && (l = c(l)), s[l] = n[i];
    }), s;
  }
}, ee = /* @__PURE__ */ q({
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
  setup(n) {
    const e = n, s = b("isInEditor", A.isInEditor()), c = T(), i = N(), l = _(() => {
      const d = {}, { componentProperties: h } = e;
      return s && (d["data-cq-data-path"] = h.cqPath, e.editConfig.resourceType && (d["data-cq-resource-type"] = e.editConfig.resourceType)), d;
    }), u = _(() => {
      var t;
      const d = {}, { componentProperties: h } = e, { appliedCssClassNames: r } = h, o = [];
      return r && o.push(r), (t = e == null ? void 0 : e.containerProps) != null && t.class && o.push(e.containerProps.class), o.length && (d.class = o.join(" ")), d;
    }), p = _(() => s && typeof e.editConfig.isEmpty == "function" && e.editConfig.isEmpty(e.componentProperties) ? {
      class: "cq-placeholder",
      "data-emptytext": e.editConfig.emptyLabel
    } : null);
    return (d, h) => {
      var r, o, t, a;
      return !f(s) && e.componentProperties.hasOwnProperty("aemNoDecoration") && e.componentProperties.aemNoDecoration || e.componentProperties.hasOwnProperty("cqHierarchyType") && e.componentProperties.cqHierarchyType === "page" ? (m(), P(E((o = (r = f(c)).default) == null ? void 0 : o.call(r)[0]), I(v({ key: 0 }, { ...f(i) })), null, 16)) : (m(), C("div", I(v({ key: 1 }, { ...l.value, ...u.value })), [
        (m(), P(E((a = (t = f(c)).default) == null ? void 0 : a.call(t)[0]), I(L({
          ...f(i),
          componentProperties: e.componentProperties
        })), null, 16)),
        p.value ? (m(), C("div", I(v({ key: 0 }, p.value)), null, 16)) : z("", !0)
      ], 16));
    };
  }
}), te = /* @__PURE__ */ q({
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
  setup(n) {
    const e = n, s = T(), c = N();
    return (i, l) => (m(), P(ee, I(L({
      ...f(c),
      componentProperties: { ...f(c) },
      editConfig: e.editConfig
    })), {
      default: U(() => {
        var u, p;
        return [
          (m(), P(E((p = (u = f(s)).default) == null ? void 0 : p.call(u)[0])))
        ];
      }),
      _: 1
    }, 16));
  }
}), oe = /* @__PURE__ */ q({
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
  setup(n) {
    const e = n, s = T(), c = N(), i = b("isInEditor", A.isInEditor()), l = Q(c), u = () => {
      const { pagePath: h, itemPath: r, injectPropsOnInit: o, cqPath: t } = e;
      return x.getCQPath({
        pagePath: h,
        itemPath: r,
        injectPropsOnInit: o,
        cqPath: t
      });
    }, p = (h) => {
      const { pagePath: r, itemPath: o, injectPropsOnInit: t } = e, a = h || e.cqPath || r && x.getCQPath({ pagePath: r, itemPath: o, injectPropsOnInit: t });
      a && F.getData({
        path: a,
        forceReload: e.cqForceReload
      }).then((g) => {
        g && Object.keys(g).length > 0 && (Object.assign(l.value, x.modelToProps(g)), t && i && X.dispatchGlobalCustomEvent(
          "cq-async-content-loaded",
          {}
        ));
      }).catch((g) => {
        console.error(g);
      });
    }, d = p.bind(null, u());
    return H(() => {
      const h = u();
      e.injectPropsOnInit && p(h), F.addListener(h, d);
    }), W(() => {
      F.removeListener(e.cqPath, d);
    }), (h, r) => {
      var o, t;
      return m(), P(E((t = (o = f(s)).default) == null ? void 0 : t.call(o)[0]), I(L({
        cqPath: u(),
        ...l.value
      })), null, 16);
    };
  }
}), ne = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "CompositeModelProvider",
  props: {
    modelConfig: {
      type: Object,
      default: () => ({ injectPropsOnInit: !1, forceReload: !1 })
    }
  },
  setup(n) {
    const e = n, s = T(), c = N(), { modelConfig: i } = V(e), l = c.cqForceReload || i.value.forceReload, { injectPropsOnInit: u } = i.value;
    return (p, d) => (m(), P(oe, v({
      "cq-force-reload": f(l),
      "inject-props-on-init": f(u)
    }, { ...f(c) }), {
      default: U(() => {
        var h, r;
        return [
          (m(), P(E((r = (h = f(s)).default) == null ? void 0 : r.call(h)[0])))
        ];
      }),
      _: 1
    }, 16, ["cq-force-reload", "inject-props-on-init"]));
  }
}), re = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "ContextProvider",
  setup(n) {
    const e = T(), s = N(), c = b("componentMapping", new O()), i = b("isInEditor", A.isInEditor());
    return B("isInEditor", i), B("componentMapping", c), (l, u) => {
      var p, d;
      return m(), P(E((d = (p = f(e)).default) == null ? void 0 : d.call(p)[0]), I(L({ ...f(s) })), null, 16);
    };
  }
}), se = (n) => j(re, {}, () => [j(n)]), ae = (n, e) => j(ne, { modelConfig: e }, () => [j(n)]), ce = (n, e) => j(te, { editConfig: e }, () => [j(n)]), ie = (n, e, s) => {
  const {
    injectPropsOnInit: c = !0,
    forceReload: i = !1,
    ...l
  } = s || {}, u = {
    injectPropsOnInit: c,
    forceReload: i,
    ...l
  };
  let p = n;
  return p = se(
    ae(ce(p, e), u)
  ), p;
}, pe = O.map, le = O.get;
O.map = function(e, s, c = {
  isEmpty: () => !1
}, i = {}) {
  const { injectPropsOnInit: l = !1, ...u } = i || {}, p = ie(s, c, {
    injectPropsOnInit: l,
    ...u
  });
  return pe.call(O, e, p), p;
};
O.get = le;
const Ie = (n) => (e, s, c = {}) => (
  // @ts-ignore
  O.map(n, e, s, c)
), ve = (n, e, s, c) => {
  let i = [];
  n && (i = [n]), e && i.push(e);
  const l = s == null ? void 0 : s.class;
  return l && !c && i.push(l), i;
}, be = (n) => ({
  appliedCssClassNames: {
    type: String
  },
  baseCssClass: {
    type: String,
    default: n
  },
  containerProps: {
    type: Object,
    default: () => {
    }
  },
  // eslint-disable-next-line vue/require-default-prop
  id: {
    type: String
  }
}), de = ["data-cq-data-path", "data-emptytext"], me = /* @__PURE__ */ q({
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
  setup(n) {
    const e = n;
    return (s, c) => (m(), C("div", {
      "data-cq-data-path": e.path,
      "data-emptytext": e.emptyLabel,
      class: "aem-AllowedComponent--component cq-placeholder placeholder"
    }, null, 8, de));
  }
}), ue = ["data-text"], fe = /* @__PURE__ */ q({
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
  setup(n) {
    const e = n, s = _(
      () => e.components && e.components.length > 0 ? e.title : e.emptyLabel
    );
    return (c, i) => {
      var l;
      return m(), C("div", {
        class: G([
          "aem-AllowedComponent--list",
          (l = e.placeholderProps) == null ? void 0 : l.placeholderClassNames
        ])
      }, [
        J("div", {
          "data-text": s.value,
          class: "aem-AllowedComponent--title"
        }, null, 8, ue),
        (m(!0), C(k, null, M(e.components, (u) => (m(), P(me, {
          key: u.path,
          "empty-label": u.title,
          path: u.path
        }, null, 8, ["empty-label", "path"]))), 128))
      ], 2);
    };
  }
}), he = ["data-cq-data-path"], Pe = /* @__PURE__ */ q({
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
  setup(n) {
    const e = n;
    return (s, c) => (m(), C("div", {
      class: G(e.placeholderClassNames),
      "data-cq-data-path": `${e.cqPath}/*`
    }, null, 10, he));
  }
}), ge = /* @__PURE__ */ q({
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
  setup(n) {
    const e = n, s = N(), c = typeof e.isInEditor < "u" ? e.isInEditor : b("isInEditor", A.isInEditor()), i = b("componentMapping", new O()), l = (r) => {
      var o;
      return ((o = e.cqPath) == null ? void 0 : o.length) > 0 ? `${e.cqPath}/${r}` : r;
    }, u = (r, o, t) => {
      const a = l(t);
      return j(r, {
        ...o,
        cqPath: a,
        containerProps: typeof e.getItemComponentProps == "function" ? e.getItemComponentProps(t) : {}
      });
    }, p = _(() => {
      let r = {};
      return typeof e.getContainerProps == "function" ? r = e.getContainerProps() : (r = {
        class: "aem-container"
      }, c && (r["data-cq-data-path"] = e.cqPath)), r;
    }), d = _(() => {
      const r = [];
      return Object.keys(e.cqItems).length > 0 && e.cqItemsOrder.length > 0 && e.cqItemsOrder.forEach((o) => {
        const t = x.modelToProps(
          e.cqItems[o]
        );
        if (t && typeof t.cqType < "u") {
          const a = i.get(t.cqType);
          a && r.push(
            u(a, t, o)
          );
        }
      }), r;
    }), h = _(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    });
    return (r, o) => !f(c) && e.aemNoDecoration ? (m(!0), C(k, { key: 0 }, M(d.value, (t) => (m(), P(E(t), v({
      key: t.toString()
    }, { ...f(s) }), null, 16))), 128)) : (m(), C("div", I(v({ key: 1 }, { ...p.value })), [
      (m(!0), C(k, null, M(d.value, (t) => (m(), P(E(t), v({
        key: t.toString()
      }, { ...f(s) }), null, 16))), 128)),
      f(c) ? (m(), P(Pe, I(v({ key: 0 }, h.value)), null, 16)) : z("", !0)
    ], 16));
  }
}), ye = /* @__PURE__ */ q({
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
  setup(n) {
    const e = n, s = typeof e.isInEditor < "u" ? e.isInEditor : b("isInEditor", A.isInEditor()), c = _(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    }), i = N();
    return (l, u) => {
      var p;
      return f(s) && e.allowedComponents && ((p = e.allowedComponents) != null && p.applicable) ? (m(), P(fe, {
        key: 0,
        components: e.allowedComponents.components,
        "cq-path": e.cqPath,
        "empty-label": e._allowedComponentPlaceholderListEmptyLabel,
        "placeholder-props": c.value,
        title: e.title
      }, null, 8, ["components", "cq-path", "empty-label", "placeholder-props", "title"])) : (m(), P(ge, v({
        key: 1,
        "aem-no-decoration": e.aemNoDecoration,
        "cq-items": e.cqItems,
        "cq-items-order": e.cqItemsOrder,
        "cq-path": e.cqPath,
        "get-container-props": e.getContainerProps,
        "get-item-component-props": e.getItemComponentProps,
        "get-placeholder-props": e.getPlaceholderProps,
        "is-in-editor": f(s)
      }, { ...f(i) }), null, 16, ["aem-no-decoration", "cq-items", "cq-items-order", "cq-path", "get-container-props", "get-item-component-props", "get-placeholder-props", "is-in-editor"]));
    };
  }
}), Ee = /* @__PURE__ */ q({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Page",
  inheritAttrs: !1,
  __name: "Page",
  props: {
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
  setup(n) {
    const e = n, s = N(), c = b("isInEditor", A.isInEditor()), i = b("componentMapping", new O()), l = (r) => {
      var o;
      return ((o = e.cqPath) == null ? void 0 : o.length) > 0 ? `${e.cqPath}/jcr:content/${r}` : r;
    }, u = (r, o, t) => {
      const a = l(t);
      return j(r, {
        ...o,
        cqPath: a,
        containerProps: {}
      });
    }, p = _(() => {
      const r = [];
      return Object.keys(e.cqItems).length > 0 && e.cqItemsOrder.length > 0 && e.cqItemsOrder.forEach((o) => {
        const t = x.modelToProps(
          e.cqItems[o]
        );
        if (t && typeof t.cqType < "u") {
          const a = i.get(t.cqType);
          a && r.push(
            u(a, t, o)
          );
        }
      }), r;
    }), d = _(() => {
      const r = [];
      return Object.keys(e.cqChildren).length === 0 || Object.keys(e.cqChildren).forEach((o) => {
        const t = x.modelToProps(
          e.cqChildren[o]
        );
        if (t && typeof t.cqType < "u") {
          const a = i.get(t.cqType);
          a && r.push(
            j(a, { ...t, cqPath: t.cqPath })
          );
        }
      }), r;
    }), h = _(() => {
      const r = ["aem-page"];
      s.cssClassNames && r.push(...s.cssClassNames.split(" "));
      const o = {
        class: r.join(" ")
      };
      return c && (o["data-cq-data-path"] = e.cqPath), o;
    });
    return (r, o) => (m(), C("div", I(L(h.value)), [
      (m(!0), C(k, null, M(p.value, (t) => (m(), P(E(t), {
        key: t.toString()
      }))), 128)),
      (m(!0), C(k, null, M(d.value, (t) => (m(), P(E(t), {
        key: t.toString()
      }))), 128))
    ], 16));
  }
}), Oe = /* @__PURE__ */ q({
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
  setup(n) {
    const e = n, s = N(), c = typeof e.isInEditor < "u" ? e.isInEditor : b("isInEditor", A.isInEditor()), i = () => {
      const p = {}, d = ["aem-container"];
      return e.gridClassNames && d.push(e.gridClassNames), p.class = d.join(" "), c && (p["data-cq-data-path"] = e.cqPath), p;
    }, l = () => {
      const p = {
        cqPath: e.cqPath
      }, d = [
        "new",
        "section",
        "aem-Grid-newComponent"
      ];
      return p.placeholderClassNames = d.join(" "), p;
    }, u = (p) => {
      const d = {};
      return e.columnClassNames && e.columnClassNames[p] && (d.class = e.columnClassNames[p]), e.aemNoDecoration && (d["data-no-decoration"] = !0), d;
    };
    return (p, d) => (m(), P(ye, v({
      "aem-no-decoration": e.aemNoDecoration,
      "cq-path": e.cqPath,
      "get-container-props": i,
      "get-item-component-props": u,
      "get-placeholder-props": l,
      "is-in-editor": f(c)
    }, { ...f(s) }), null, 16, ["aem-no-decoration", "cq-path", "is-in-editor"]));
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
  Ie as MapTo,
  oe as ModelProvider,
  Ee as Page,
  Oe as ResponsiveGrid,
  x as Utils,
  ve as componentClassNames,
  be as componentProperties,
  se as withContext,
  ce as withEditable,
  ae as withModel
};
