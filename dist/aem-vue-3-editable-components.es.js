import { ComponentMapping as O } from "@adobe/aem-spa-component-mapping";
import { ComponentMapping as Nt } from "@adobe/aem-spa-component-mapping";
import { defineComponent as q, inject as I, useSlots as L, useAttrs as $, computed as v, unref as P, openBlock as u, createBlock as g, resolveDynamicComponent as b, normalizeProps as E, mergeProps as A, createElementBlock as y, guardReactiveProps as T, createCommentVNode as B, withCtx as Q, toRefs as D, reactive as U, onMounted as W, toRef as H, onUnmounted as J, provide as G, h as j, normalizeClass as V, createElementVNode as X, Fragment as x, renderList as k, createVNode as Y } from "vue";
import { AuthoringUtils as S, ModelManager as F, PathUtils as Z } from "@adobe/aem-spa-page-model-manager";
function K(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var z = { exports: {} };
(function(o, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  function n(p) {
    "@babel/helpers - typeof";
    return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, n(p);
  }
  var c = 47, a = 46, d = function(e) {
    var r = n(e);
    if (r !== "string")
      throw new TypeError("Expected a string, got a ".concat(r));
  }, m = function(e, r) {
    for (var i = "", f = 0, _ = -1, w = 0, M, C = 0; C <= e.length; ++C) {
      if (C < e.length)
        M = e.charCodeAt(C);
      else {
        if (M === c)
          break;
        M = c;
      }
      if (M === c) {
        if (!(_ === C - 1 || w === 1))
          if (_ !== C - 1 && w === 2) {
            if (i.length < 2 || f !== 2 || i.charCodeAt(i.length - 1) !== a || i.charCodeAt(i.length - 2) !== a) {
              if (i.length > 2) {
                var R = i.lastIndexOf("/");
                if (R !== i.length - 1) {
                  R === -1 ? (i = "", f = 0) : (i = i.slice(0, R), f = i.length - 1 - i.lastIndexOf("/")), _ = C, w = 0;
                  continue;
                }
              } else if (i.length === 2 || i.length === 1) {
                i = "", f = 0, _ = C, w = 0;
                continue;
              }
            }
            r && (i.length > 0 ? i += "/.." : i = "..", f = 2);
          } else
            i.length > 0 ? i += "/" + e.slice(_ + 1, C) : i = e.slice(_ + 1, C), f = C - _ - 1;
        _ = C, w = 0;
      } else
        M === a && w !== -1 ? ++w : w = -1;
    }
    return i;
  }, l = function(e) {
    try {
      return decodeURIComponent(e);
    } catch {
      return e;
    }
  }, h = function(e) {
    d(e);
    var r = e;
    if (r.length === 0)
      return ".";
    var i = r.charCodeAt(0) === c, f = r.charCodeAt(r.length - 1) === c;
    return r = l(r), r = m(r, !i), r.length === 0 && !i && (r = "."), r.length > 0 && f && (r += "/"), i ? "/" + r : r;
  }, s = h;
  t.default = s, o.exports = t.default;
})(z, z.exports);
var tt = z.exports;
const et = /* @__PURE__ */ K(tt), N = {
  getCQPath(o) {
    const { pagePath: t = "", itemPath: n = "", injectPropsOnInit: c } = o;
    let { cqPath: a = "" } = o;
    return c && !a && (a = et(
      n ? `${t}/jcr:content/${n}` : t
    ), a = a.replace(/^\.$/, "")), a;
  },
  modelToProps(o) {
    const t = Object.getOwnPropertyNames(o), n = {}, c = (a) => {
      const d = a.substring(1);
      return `cq${d.substring(0, 1).toUpperCase()}${d.substring(
        1
      )}`;
    };
    return t.forEach((a) => {
      let d = a;
      d.startsWith(":") && (d = c(d)), n[d] = o[a];
    }), n;
  }
}, ot = /* @__PURE__ */ q({
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
  setup(o) {
    const t = o, { editConfig: n } = t, c = I("isInEditor", S.isInEditor()), a = L(), d = $(), m = v(() => {
      const p = {}, { componentProperties: e } = t;
      return c && (p["data-cq-data-path"] = e.cqPath, n.resourceType && (p["data-cq-resource-type"] = n.resourceType)), p;
    }), l = v(() => {
      var f;
      const p = {}, { componentProperties: e } = t, { appliedCssClassNames: r } = e, i = [];
      return r && i.push(r), (f = t == null ? void 0 : t.containerProps) != null && f.class && i.push(t.containerProps.class), i.length && (p.class = i.join(" ")), p;
    }), h = c && typeof n.isEmpty == "function" && // eslint-disable-next-line vue/no-setup-props-destructure
    n.isEmpty(t.componentProperties), s = v(() => h ? {
      class: "cq-placeholder",
      "data-emptytext": n.emptyLabel
    } : null);
    return (p, e) => {
      var r, i, f, _;
      return !P(c) && o.componentProperties.hasOwnProperty("aemNoDecoration") && o.componentProperties.aemNoDecoration ? (u(), g(b((i = (r = P(a)).default) == null ? void 0 : i.call(r)[0]), E(A({ key: 0 }, { ...P(d) })), null, 16)) : (u(), y("div", E(A({ key: 1 }, { ...m.value, ...l.value })), [
        (u(), g(b((_ = (f = P(a)).default) == null ? void 0 : _.call(f)[0]), E(T({
          ...P(d),
          componentProperties: t.componentProperties
        })), null, 16)),
        s.value ? (u(), y("div", E(A({ key: 0 }, s.value)), null, 16)) : B("", !0)
      ], 16));
    };
  }
}), nt = /* @__PURE__ */ q({
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
  setup(o) {
    const t = o, n = L(), c = $();
    return (a, d) => (u(), g(ot, E(T({ ...P(c), componentProperties: { ...P(c) }, editConfig: t.editConfig })), {
      default: Q(() => {
        var m, l;
        return [
          (u(), g(b((l = (m = P(n)).default) == null ? void 0 : l.call(m)[0])))
        ];
      }),
      _: 1
    }, 16));
  }
}), rt = /* @__PURE__ */ q({
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
  setup(o) {
    const t = o, n = L(), c = $();
    let a = D(U(c));
    const d = I("isInEditor", S.isInEditor()), m = (s) => {
      const { pagePath: p, itemPath: e, injectPropsOnInit: r } = t, i = s || t.cqPath || p && N.getCQPath({ pagePath: p, itemPath: e, injectPropsOnInit: r });
      i && F.getData({
        path: i,
        forceReload: t.cqForceReload
      }).then((f) => {
        f && Object.keys(f).length > 0 && (a = {
          ...a,
          ...D(U(N.modelToProps(f)))
        }, r && d && Z.dispatchGlobalCustomEvent(
          "cq-async-content-loaded",
          {}
        ));
      }).catch((f) => {
        console.error(f);
      });
    }, l = () => {
      const { pagePath: s, itemPath: p, injectPropsOnInit: e, cqPath: r } = t;
      return N.getCQPath({
        pagePath: s,
        itemPath: p,
        injectPropsOnInit: e,
        cqPath: r
      });
    }, h = m.bind(null, l());
    return W(() => {
      const s = l();
      a.cqPath = H(s), t.injectPropsOnInit && m(s), F.addListener(s, h);
    }), J(() => {
      F.removeListener(t.cqPath, h);
    }), (s, p) => {
      var e, r;
      return u(), g(b((r = (e = P(n)).default) == null ? void 0 : r.call(e)[0]), E(T(P(a))), null, 16);
    };
  }
}), st = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "CompositeModelProvider",
  props: {
    modelConfig: {
      type: Object,
      default: () => ({ injectPropsOnInit: !1, forceReload: !1 })
    }
  },
  setup(o) {
    const t = o, n = L(), c = $(), { modelConfig: a } = D(t), d = c.cqForceReload || a.value.forceReload, { injectPropsOnInit: m } = a.value;
    return (l, h) => (u(), g(rt, A({
      "cq-force-reload": P(d),
      "inject-props-on-init": P(m)
    }, { ...P(c) }), {
      default: Q(() => {
        var s, p;
        return [
          (u(), g(b((p = (s = P(n)).default) == null ? void 0 : p.call(s)[0])))
        ];
      }),
      _: 1
    }, 16, ["cq-force-reload", "inject-props-on-init"]));
  }
}), at = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "ContextProvider",
  setup(o) {
    const t = L(), n = I("componentMapping", new O()), c = I("isInEditor", S.isInEditor());
    return G("isInEditor", c), G("componentMapping", n), (a, d) => {
      var m, l;
      return u(), g(b((l = (m = P(t)).default) == null ? void 0 : l.call(m)[0]));
    };
  }
}), ct = (o) => j(at, {}, () => [j(o)]), pt = (o, t) => j(st, { modelConfig: t }, () => [j(o)]), lt = (o, t) => j(nt, { editConfig: t }, () => [j(o)]), it = (o, t, n) => {
  const {
    injectPropsOnInit: c = !0,
    forceReload: a = !1,
    ...d
  } = n || {}, m = {
    injectPropsOnInit: c,
    forceReload: a,
    ...d
  };
  let l = o;
  return l = ct(
    pt(lt(l, t), m)
  ), l;
}, dt = O.map, mt = O.get;
O.map = function(t, n, c = {
  isEmpty: () => !1
}, a = {}) {
  const { injectPropsOnInit: d = !1, ...m } = a || {}, l = it(n, c, {
    injectPropsOnInit: d,
    ...m
  });
  return dt.call(O, t, l), l;
};
O.get = mt;
const bt = (o) => (t, n, c = {}) => (
  // @ts-ignore
  O.map(o, t, n, c)
), Et = (o, t, n, c) => {
  let a = [];
  o && (a = [o]), t && a.push(t);
  const d = n == null ? void 0 : n.class;
  return d && !c && a.push(d), a;
}, Ot = (o) => ({
  appliedCssClassNames: {
    type: String
  },
  baseCssClass: {
    type: String,
    default: o
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
}), ut = ["data-cq-data-path", "data-emptytext"], ht = /* @__PURE__ */ q({
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
  setup(o) {
    const t = o;
    return (n, c) => (u(), y("div", {
      "data-cq-data-path": t.path,
      "data-emptytext": t.emptyLabel,
      class: "aem-AllowedComponent--component cq-placeholder placeholder"
    }, null, 8, ut));
  }
}), ft = ["data-text"], Pt = /* @__PURE__ */ q({
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
  setup(o) {
    const t = o, n = v(
      () => t.components && t.components.length > 0 ? t.title : t.emptyLabel
    );
    return (c, a) => {
      var d;
      return u(), y("div", {
        class: V([
          "aem-AllowedComponent--list",
          (d = t.placeholderProps) == null ? void 0 : d.placeholderClassNames
        ])
      }, [
        X("div", {
          "data-text": n.value,
          class: "aem-AllowedComponent--title"
        }, null, 8, ft),
        (u(!0), y(x, null, k(t.components, (m) => (u(), g(ht, {
          key: m.path,
          "empty-label": m.title,
          path: m.path
        }, null, 8, ["empty-label", "path"]))), 128))
      ], 2);
    };
  }
}), gt = ["data-cq-data-path"], yt = /* @__PURE__ */ q({
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
  setup(o) {
    const t = o;
    return (n, c) => (u(), y("div", {
      class: V(t.placeholderClassNames),
      "data-cq-data-path": `${t.cqPath}/*`
    }, null, 10, gt));
  }
}), Ct = /* @__PURE__ */ q({
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
    }
  },
  setup(o) {
    const t = o, n = I("isInEditor", S.isInEditor()), c = I("componentMapping", new O()), a = (s) => {
      var p;
      return ((p = t.cqPath) == null ? void 0 : p.length) > 0 ? `${t.cqPath}/${s}` : s;
    }, d = (s, p, e) => {
      const r = a(e);
      return j(s, {
        ...p,
        cqPath: r,
        containerProps: typeof t.getItemComponentProps == "function" ? t.getItemComponentProps(e) : {}
      });
    }, m = v(() => {
      let s = {};
      return typeof t.getContainerProps == "function" ? s = t.getContainerProps() : (s = {
        class: "aem-container"
      }, n && (s["data-cq-data-path"] = t.cqPath)), s;
    }), l = v(() => {
      const s = [];
      return Object.keys(t.cqItems).length > 0 && t.cqItemsOrder.length > 0 && t.cqItemsOrder.forEach((p) => {
        const e = N.modelToProps(
          t.cqItems[p]
        );
        if (e && typeof e.cqType < "u") {
          const r = c.get(e.cqType);
          r && s.push(
            d(r, e, p)
          );
        }
      }), s;
    }), h = v(() => typeof t.getPlaceholderProps == "function" ? t.getPlaceholderProps() : {
      cqPath: t.cqPath,
      placeholderClassNames: "new section"
    });
    return (s, p) => !P(n) && t.aemNoDecoration ? (u(!0), y(x, { key: 0 }, k(l.value, (e) => (u(), g(b(e), {
      key: e.toString()
    }))), 128)) : (u(), y("div", E(A({ key: 1 }, { ...m.value })), [
      (u(!0), y(x, null, k(l.value, (e) => (u(), g(b(e), {
        key: e.toString()
      }))), 128)),
      P(n) ? (u(), g(yt, E(A({ key: 0 }, h.value)), null, 16)) : B("", !0)
    ], 16));
  }
}), qt = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "AllowedComponentsContainer",
  props: {
    // eslint-disable-next-line vue/prop-name-casing
    _allowedComponentPlaceholderListEmptyLabel: {
      type: String,
      default: "No allowed components"
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
    // eslint-disable-next-line vue/require-default-prop
    title: {
      type: String
    }
  },
  setup(o) {
    const t = o, n = I("isInEditor", S.isInEditor()), c = v(() => typeof t.getPlaceholderProps == "function" ? t.getPlaceholderProps() : {
      cqPath: t.cqPath,
      placeholderClassNames: "new section"
    }), a = $();
    return (d, m) => {
      var l;
      return u(), y(x, null, [
        P(n) && t.allowedComponents && ((l = t.allowedComponents) != null && l.applicable) ? (u(), g(Pt, {
          key: 0,
          components: t.allowedComponents.components,
          "cq-path": t.cqPath,
          "empty-label": t._allowedComponentPlaceholderListEmptyLabel,
          "placeholder-props": c.value,
          title: t.title
        }, null, 8, ["components", "cq-path", "empty-label", "placeholder-props", "title"])) : B("", !0),
        Y(Ct, A({
          "cq-items": t.cqItems,
          "cq-items-order": t.cqItemsOrder,
          "cq-path": t.cqPath,
          "get-container-props": t.getContainerProps,
          "get-item-component-props": t.getItemComponentProps,
          "get-placeholder-props": t.getPlaceholderProps
        }, { ...P(a) }), null, 16, ["cq-items", "cq-items-order", "cq-path", "get-container-props", "get-item-component-props", "get-placeholder-props"])
      ], 64);
    };
  }
}), jt = /* @__PURE__ */ q({
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
  setup(o) {
    const t = o, n = I("isInEditor", S.isInEditor()), c = I("componentMapping", new O()), a = (s) => {
      var p;
      return ((p = t.cqPath) == null ? void 0 : p.length) > 0 ? `${t.cqPath}/jcr:content/${s}` : s;
    }, d = (s, p, e) => {
      const r = a(e);
      return j(s, {
        ...p,
        cqPath: r,
        containerProps: {}
      });
    }, m = v(() => {
      const s = [];
      return Object.keys(t.cqItems).length > 0 && t.cqItemsOrder.length > 0 && t.cqItemsOrder.forEach((p) => {
        const e = N.modelToProps(
          t.cqItems[p]
        );
        if (e && typeof e.cqType < "u") {
          const r = c.get(e.cqType);
          r && s.push(
            d(r, e, p)
          );
        }
      }), s;
    }), l = v(() => {
      const s = [];
      return Object.keys(t.cqChildren).length === 0 || Object.keys(t.cqChildren).forEach((p) => {
        const e = N.modelToProps(
          t.cqChildren[p]
        );
        if (e && typeof e.cqType < "u") {
          const r = c.get(e.cqType);
          r && s.push(
            j(r, { ...e, cqPath: e.cqPath })
          );
        }
      }), s;
    }), h = v(() => {
      const s = {
        class: "aem-page"
      };
      return n && (s["data-cq-data-path"] = t.cqPath), s;
    });
    return (s, p) => (u(), y("div", E(T(h.value)), [
      (u(!0), y(x, null, k(m.value, (e) => (u(), g(b(e), {
        key: e.toString()
      }))), 128)),
      (u(!0), y(x, null, k(l.value, (e) => (u(), g(b(e), {
        key: e.toString()
      }))), 128))
    ], 16));
  }
}), wt = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "ResponsiveGrid",
  props: {
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
    }
  },
  setup(o) {
    const t = o, n = $(), c = I("isInEditor", S.isInEditor()), a = () => {
      const l = {}, h = ["aem-container"];
      return t.gridClassNames && h.push(t.gridClassNames), l.class = h.join(" "), c && (l["data-cq-data-path"] = t.cqPath), l;
    }, d = () => {
      const l = {
        cqPath: t.cqPath
      }, h = [
        "new",
        "section",
        "aem-Grid-newComponent"
      ];
      return l.placeholderClassNames = h.join(" "), l;
    }, m = (l) => {
      const h = {};
      return t.columnClassNames && t.columnClassNames[l] && (h.class = t.columnClassNames[l]), h;
    };
    return (l, h) => (u(), g(qt, A({
      "cq-path": t.cqPath,
      "get-container-props": a,
      "get-item-component-props": m,
      "get-placeholder-props": d
    }, { ...P(n) }), null, 16, ["cq-path"]));
  }
});
export {
  ht as AllowedComponentPlaceholder,
  Pt as AllowedComponentPlaceholderList,
  qt as AllowedComponentsContainer,
  Nt as ComponentMapping,
  nt as CompositeEditableProvider,
  st as CompositeModelProvider,
  Ct as Container,
  yt as ContainerPlaceholder,
  at as ContextProvider,
  ot as EditableProvider,
  bt as MapTo,
  rt as ModelProvider,
  jt as Page,
  wt as ResponsiveGrid,
  N as Utils,
  Et as componentClassNames,
  Ot as componentProperties,
  ct as withContext,
  lt as withEditable,
  pt as withModel
};
