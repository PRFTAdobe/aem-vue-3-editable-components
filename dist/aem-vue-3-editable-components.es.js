import { ComponentMapping as O } from "@adobe/aem-spa-component-mapping";
import { ComponentMapping as Ae } from "@adobe/aem-spa-component-mapping";
import { defineComponent as q, inject as I, useSlots as L, useAttrs as $, computed as v, unref as P, openBlock as u, createBlock as g, resolveDynamicComponent as b, normalizeProps as E, mergeProps as A, createElementBlock as y, guardReactiveProps as T, createCommentVNode as B, withCtx as Q, toRefs as D, reactive as U, onMounted as W, toRef as H, onUnmounted as J, provide as G, h as j, normalizeClass as V, createElementVNode as X, Fragment as x, renderList as k, createVNode as Y } from "vue";
import { AuthoringUtils as S, ModelManager as F, PathUtils as Z } from "@adobe/aem-spa-page-model-manager";
function K(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var z = { exports: {} };
(function(o, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  function s(a) {
    "@babel/helpers - typeof";
    return s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t;
    } : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, s(a);
  }
  var c = 47, p = 46, d = function(t) {
    var n = s(t);
    if (n !== "string")
      throw new TypeError("Expected a string, got a ".concat(n));
  }, m = function(t, n) {
    for (var i = "", f = 0, _ = -1, w = 0, M, C = 0; C <= t.length; ++C) {
      if (C < t.length)
        M = t.charCodeAt(C);
      else {
        if (M === c)
          break;
        M = c;
      }
      if (M === c) {
        if (!(_ === C - 1 || w === 1))
          if (_ !== C - 1 && w === 2) {
            if (i.length < 2 || f !== 2 || i.charCodeAt(i.length - 1) !== p || i.charCodeAt(i.length - 2) !== p) {
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
            n && (i.length > 0 ? i += "/.." : i = "..", f = 2);
          } else
            i.length > 0 ? i += "/" + t.slice(_ + 1, C) : i = t.slice(_ + 1, C), f = C - _ - 1;
        _ = C, w = 0;
      } else
        M === p && w !== -1 ? ++w : w = -1;
    }
    return i;
  }, l = function(t) {
    try {
      return decodeURIComponent(t);
    } catch {
      return t;
    }
  }, h = function(t) {
    d(t);
    var n = t;
    if (n.length === 0)
      return ".";
    var i = n.charCodeAt(0) === c, f = n.charCodeAt(n.length - 1) === c;
    return n = l(n), n = m(n, !i), n.length === 0 && !i && (n = "."), n.length > 0 && f && (n += "/"), i ? "/" + n : n;
  }, r = h;
  e.default = r, o.exports = e.default;
})(z, z.exports);
var ee = z.exports;
const te = /* @__PURE__ */ K(ee), N = {
  getCQPath(o) {
    const { pagePath: e = "", itemPath: s = "", injectPropsOnInit: c } = o;
    let { cqPath: p = "" } = o;
    return c && !p && (p = te(
      s ? `${e}/jcr:content/${s}` : e
    ), p = p.replace(/^\.$/, "")), p;
  },
  modelToProps(o) {
    const e = Object.getOwnPropertyNames(o), s = {}, c = (p) => {
      const d = p.substring(1);
      return `cq${d.substring(0, 1).toUpperCase()}${d.substring(
        1
      )}`;
    };
    return e.forEach((p) => {
      let d = p;
      d.startsWith(":") && (d = c(d)), s[d] = o[p];
    }), s;
  }
}, oe = /* @__PURE__ */ q({
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
    const e = o, { editConfig: s } = e, c = I("isInEditor", S.isInEditor()), p = L(), d = $(), m = v(() => {
      const a = {}, { componentProperties: t } = e;
      return c && (a["data-cq-data-path"] = t.cqPath, s.resourceType && (a["data-cq-resource-type"] = s.resourceType)), a;
    }), l = v(() => {
      var f;
      const a = {}, { componentProperties: t } = e, { appliedCssClassNames: n } = t, i = [];
      return n && i.push(n), (f = e == null ? void 0 : e.containerProps) != null && f.class && i.push(e.containerProps.class), i.length && (a.class = i.join(" ")), a;
    }), h = c && typeof s.isEmpty == "function" && // eslint-disable-next-line vue/no-setup-props-destructure
    s.isEmpty(e.componentProperties), r = v(() => h ? {
      class: "cq-placeholder",
      "data-emptytext": s.emptyLabel
    } : null);
    return (a, t) => {
      var n, i, f, _;
      return !P(c) && o.componentProperties.hasOwnProperty("aemNoDecoration") && o.componentProperties.aemNoDecoration ? (u(), g(b((i = (n = P(p)).default) == null ? void 0 : i.call(n)[0]), E(A({ key: 0 }, { ...P(d) })), null, 16)) : (u(), y("div", E(A({ key: 1 }, { ...m.value, ...l.value })), [
        (u(), g(b((_ = (f = P(p)).default) == null ? void 0 : _.call(f)[0]), E(T({
          ...P(d),
          componentProperties: e.componentProperties
        })), null, 16)),
        r.value ? (u(), y("div", E(A({ key: 0 }, r.value)), null, 16)) : B("", !0)
      ], 16));
    };
  }
}), ne = /* @__PURE__ */ q({
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
    const e = o, s = L(), c = $();
    return (p, d) => (u(), g(oe, E(T({ ...P(c), componentProperties: { ...P(c) }, editConfig: e.editConfig })), {
      default: Q(() => {
        var m, l;
        return [
          (u(), g(b((l = (m = P(s)).default) == null ? void 0 : l.call(m)[0])))
        ];
      }),
      _: 1
    }, 16));
  }
}), re = /* @__PURE__ */ q({
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
    const e = o, s = L(), c = $();
    let p = D(U(c));
    const d = I("isInEditor", S.isInEditor()), m = (r) => {
      const { pagePath: a, itemPath: t, injectPropsOnInit: n } = e, i = r || e.cqPath || a && N.getCQPath({ pagePath: a, itemPath: t, injectPropsOnInit: n });
      i && F.getData({
        path: i,
        forceReload: e.cqForceReload
      }).then((f) => {
        f && Object.keys(f).length > 0 && (p = {
          ...p,
          ...D(U(N.modelToProps(f)))
        }, n && d && Z.dispatchGlobalCustomEvent(
          "cq-async-content-loaded",
          {}
        ));
      }).catch((f) => {
        console.error(f);
      });
    }, l = () => {
      const { pagePath: r, itemPath: a, injectPropsOnInit: t, cqPath: n } = e;
      return N.getCQPath({
        pagePath: r,
        itemPath: a,
        injectPropsOnInit: t,
        cqPath: n
      });
    }, h = m.bind(null, l());
    return W(() => {
      const r = l();
      p.cqPath = H(r), e.injectPropsOnInit && m(r), F.addListener(r, h);
    }), J(() => {
      F.removeListener(e.cqPath, h);
    }), (r, a) => {
      var t, n;
      return u(), g(b((n = (t = P(s)).default) == null ? void 0 : n.call(t)[0]), E(T(P(p))), null, 16);
    };
  }
}), se = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "CompositeModelProvider",
  props: {
    modelConfig: {
      type: Object,
      default: () => ({ injectPropsOnInit: !1, forceReload: !1 })
    }
  },
  setup(o) {
    const e = o, s = L(), c = $(), { modelConfig: p } = D(e), d = c.cqForceReload || p.value.forceReload, { injectPropsOnInit: m } = p.value;
    return (l, h) => (u(), g(re, A({
      "cq-force-reload": P(d),
      "inject-props-on-init": P(m)
    }, { ...P(c) }), {
      default: Q(() => {
        var r, a;
        return [
          (u(), g(b((a = (r = P(s)).default) == null ? void 0 : a.call(r)[0])))
        ];
      }),
      _: 1
    }, 16, ["cq-force-reload", "inject-props-on-init"]));
  }
}), ae = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "ContextProvider",
  setup(o) {
    const e = L(), s = I("componentMapping", new O()), c = I("isInEditor", S.isInEditor());
    return G("isInEditor", c), G("componentMapping", s), (p, d) => {
      var m, l;
      return u(), g(b((l = (m = P(e)).default) == null ? void 0 : l.call(m)[0]));
    };
  }
}), ce = (o) => j(ae, {}, () => [j(o)]), pe = (o, e) => j(se, { modelConfig: e }, () => [j(o)]), le = (o, e) => j(ne, { editConfig: e }, () => [j(o)]), ie = (o, e, s) => {
  const {
    injectPropsOnInit: c = !0,
    forceReload: p = !1,
    ...d
  } = s || {}, m = {
    injectPropsOnInit: c,
    forceReload: p,
    ...d
  };
  let l = o;
  return l = ce(
    pe(le(l, e), m)
  ), l;
}, de = O.map, me = O.get;
O.map = function(e, s, c = {
  isEmpty: () => !1
}, p = {}) {
  const { injectPropsOnInit: d = !1, ...m } = p || {}, l = ie(s, c, {
    injectPropsOnInit: d,
    ...m
  });
  return de.call(O, e, l), l;
};
O.get = me;
const be = (o) => (e, s, c = {}) => (
  // @ts-ignore
  O.map(o, e, s, c)
), ue = ["data-cq-data-path", "data-emptytext"], he = /* @__PURE__ */ q({
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
    const e = o;
    return (s, c) => (u(), y("div", {
      "data-cq-data-path": e.path,
      "data-emptytext": e.emptyLabel,
      class: "aem-AllowedComponent--component cq-placeholder placeholder"
    }, null, 8, ue));
  }
}), fe = ["data-text"], Pe = /* @__PURE__ */ q({
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
    const e = o, s = v(
      () => e.components && e.components.length > 0 ? e.title : e.emptyLabel
    );
    return (c, p) => {
      var d;
      return u(), y("div", {
        class: V([
          "aem-AllowedComponent--list",
          (d = e.placeholderProps) == null ? void 0 : d.placeholderClassNames
        ])
      }, [
        X("div", {
          "data-text": s.value,
          class: "aem-AllowedComponent--title"
        }, null, 8, fe),
        (u(!0), y(x, null, k(e.components, (m) => (u(), g(he, {
          key: m.path,
          "empty-label": m.title,
          path: m.path
        }, null, 8, ["empty-label", "path"]))), 128))
      ], 2);
    };
  }
}), ge = ["data-cq-data-path"], ye = /* @__PURE__ */ q({
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
    const e = o;
    return (s, c) => (u(), y("div", {
      class: V(e.placeholderClassNames),
      "data-cq-data-path": `${e.cqPath}/*`
    }, null, 10, ge));
  }
}), Ce = /* @__PURE__ */ q({
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
    const e = o, s = I("isInEditor", S.isInEditor()), c = I("componentMapping", new O()), p = (r) => {
      var a;
      return ((a = e.cqPath) == null ? void 0 : a.length) > 0 ? `${e.cqPath}/${r}` : r;
    }, d = (r, a, t) => {
      const n = p(t);
      return j(r, {
        ...a,
        cqPath: n,
        containerProps: typeof e.getItemComponentProps == "function" ? e.getItemComponentProps(t) : {}
      });
    }, m = v(() => {
      let r = {};
      return typeof e.getContainerProps == "function" ? r = e.getContainerProps() : (r = {
        class: "aem-container"
      }, s && (r["data-cq-data-path"] = e.cqPath)), r;
    }), l = v(() => {
      const r = [];
      return Object.keys(e.cqItems).length > 0 && e.cqItemsOrder.length > 0 && e.cqItemsOrder.forEach((a) => {
        const t = N.modelToProps(
          e.cqItems[a]
        );
        if (t && typeof t.cqType < "u") {
          const n = c.get(t.cqType);
          n && r.push(
            d(n, t, a)
          );
        }
      }), r;
    }), h = v(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    });
    return (r, a) => !P(s) && e.aemNoDecoration ? (u(!0), y(x, { key: 0 }, k(l.value, (t) => (u(), g(b(t), {
      key: t.toString()
    }))), 128)) : (u(), y("div", E(A({ key: 1 }, { ...m.value })), [
      (u(!0), y(x, null, k(l.value, (t) => (u(), g(b(t), {
        key: t.toString()
      }))), 128)),
      P(s) ? (u(), g(ye, E(A({ key: 0 }, h.value)), null, 16)) : B("", !0)
    ], 16));
  }
}), qe = /* @__PURE__ */ q({
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
    const e = o, s = I("isInEditor", S.isInEditor()), c = v(() => typeof e.getPlaceholderProps == "function" ? e.getPlaceholderProps() : {
      cqPath: e.cqPath,
      placeholderClassNames: "new section"
    }), p = $();
    return (d, m) => {
      var l;
      return u(), y(x, null, [
        P(s) && e.allowedComponents && ((l = e.allowedComponents) != null && l.applicable) ? (u(), g(Pe, {
          key: 0,
          components: e.allowedComponents.components,
          "cq-path": e.cqPath,
          "empty-label": e._allowedComponentPlaceholderListEmptyLabel,
          "placeholder-props": c.value,
          title: e.title
        }, null, 8, ["components", "cq-path", "empty-label", "placeholder-props", "title"])) : B("", !0),
        Y(Ce, A({
          "cq-items": e.cqItems,
          "cq-items-order": e.cqItemsOrder,
          "cq-path": e.cqPath,
          "get-container-props": e.getContainerProps,
          "get-item-component-props": e.getItemComponentProps,
          "get-placeholder-props": e.getPlaceholderProps
        }, { ...P(p) }), null, 16, ["cq-items", "cq-items-order", "cq-path", "get-container-props", "get-item-component-props", "get-placeholder-props"])
      ], 64);
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
  setup(o) {
    const e = o, s = I("isInEditor", S.isInEditor()), c = I("componentMapping", new O()), p = (r) => {
      var a;
      return ((a = e.cqPath) == null ? void 0 : a.length) > 0 ? `${e.cqPath}/jcr:content/${r}` : r;
    }, d = (r, a, t) => {
      const n = p(t);
      return j(r, {
        ...a,
        cqPath: n,
        containerProps: {}
      });
    }, m = v(() => {
      const r = [];
      return Object.keys(e.cqItems).length > 0 && e.cqItemsOrder.length > 0 && e.cqItemsOrder.forEach((a) => {
        const t = N.modelToProps(
          e.cqItems[a]
        );
        if (t && typeof t.cqType < "u") {
          const n = c.get(t.cqType);
          n && r.push(
            d(n, t, a)
          );
        }
      }), r;
    }), l = v(() => {
      const r = [];
      return Object.keys(e.cqChildren).length === 0 || Object.keys(e.cqChildren).forEach((a) => {
        const t = N.modelToProps(
          e.cqChildren[a]
        );
        if (t && typeof t.cqType < "u") {
          const n = c.get(t.cqType);
          n && r.push(
            j(n, { ...t, cqPath: t.cqPath })
          );
        }
      }), r;
    }), h = v(() => {
      const r = {
        class: "aem-page"
      };
      return s && (r["data-cq-data-path"] = e.cqPath), r;
    });
    return (r, a) => (u(), y("div", E(T(h.value)), [
      (u(!0), y(x, null, k(m.value, (t) => (u(), g(b(t), {
        key: t.toString()
      }))), 128)),
      (u(!0), y(x, null, k(l.value, (t) => (u(), g(b(t), {
        key: t.toString()
      }))), 128))
    ], 16));
  }
}), Oe = /* @__PURE__ */ q({
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
    const e = o, s = $(), c = I("isInEditor", S.isInEditor()), p = () => {
      const l = {}, h = ["aem-container"];
      return e.gridClassNames && h.push(e.gridClassNames), l.class = h.join(" "), c && (l["data-cq-data-path"] = e.cqPath), l;
    }, d = () => {
      const l = {
        cqPath: e.cqPath
      }, h = [
        "new",
        "section",
        "aem-Grid-newComponent"
      ];
      return l.placeholderClassNames = h.join(" "), l;
    }, m = (l) => {
      const h = {};
      return e.columnClassNames && e.columnClassNames[l] && (h.class = e.columnClassNames[l]), h;
    };
    return (l, h) => (u(), g(qe, A({
      "cq-path": e.cqPath,
      "get-container-props": p,
      "get-item-component-props": m,
      "get-placeholder-props": d
    }, { ...P(s) }), null, 16, ["cq-path"]));
  }
});
export {
  he as AllowedComponentPlaceholder,
  Pe as AllowedComponentPlaceholderList,
  qe as AllowedComponentsContainer,
  Ae as ComponentMapping,
  ne as CompositeEditableProvider,
  se as CompositeModelProvider,
  Ce as Container,
  ye as ContainerPlaceholder,
  ae as ContextProvider,
  oe as EditableProvider,
  be as MapTo,
  re as ModelProvider,
  Ee as Page,
  Oe as ResponsiveGrid,
  N as Utils,
  ce as withContext,
  le as withEditable,
  pe as withModel
};
