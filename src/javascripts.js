/*! For license information please see modern.js.LICENSE.txt */
(() => {
    var e = {
        3099: e => {
            e.exports = function (e) {
                if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
                return e
            }
        }, 9670: (e, t, n) => {
            var r = n(111);
            e.exports = function (e) {
                if (!r(e)) throw TypeError(String(e) + " is not an object");
                return e
            }
        }, 1318: (e, t, n) => {
            var r = n(5656), o = n(7466), i = n(1400), s = function (e) {
                return function (t, n, s) {
                    var a, c = r(t), l = o(c.length), u = i(s, l);
                    if (e && n != n) {
                        for (; l > u;) if ((a = c[u++]) != a) return !0
                    } else for (; l > u; u++) if ((e || u in c) && c[u] === n) return e || u || 0;
                    return !e && -1
                }
            };
            e.exports = {includes: s(!0), indexOf: s(!1)}
        }, 9341: (e, t, n) => {
            "use strict";
            var r = n(7293);
            e.exports = function (e, t) {
                var n = [][e];
                return !!n && r((function () {
                    n.call(null, t || function () {
                        throw 1
                    }, 1)
                }))
            }
        }, 3671: (e, t, n) => {
            var r = n(3099), o = n(7908), i = n(8361), s = n(7466), a = function (e) {
                return function (t, n, a, c) {
                    r(n);
                    var l = o(t), u = i(l), d = s(l.length), h = e ? d - 1 : 0, f = e ? -1 : 1;
                    if (a < 2) for (; ;) {
                        if (h in u) {
                            c = u[h], h += f;
                            break
                        }
                        if (h += f, e ? h < 0 : d <= h) throw TypeError("Reduce of empty array with no initial value")
                    }
                    for (; e ? h >= 0 : d > h; h += f) h in u && (c = n(c, u[h], h, l));
                    return c
                }
            };
            e.exports = {left: a(!1), right: a(!0)}
        }, 4326: e => {
            var t = {}.toString;
            e.exports = function (e) {
                return t.call(e).slice(8, -1)
            }
        }, 9920: (e, t, n) => {
            var r = n(6656), o = n(3887), i = n(1236), s = n(3070);
            e.exports = function (e, t) {
                for (var n = o(t), a = s.f, c = i.f, l = 0; l < n.length; l++) {
                    var u = n[l];
                    r(e, u) || a(e, u, c(t, u))
                }
            }
        }, 8880: (e, t, n) => {
            var r = n(9781), o = n(3070), i = n(9114);
            e.exports = r ? function (e, t, n) {
                return o.f(e, t, i(1, n))
            } : function (e, t, n) {
                return e[t] = n, e
            }
        }, 9114: e => {
            e.exports = function (e, t) {
                return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
            }
        }, 9781: (e, t, n) => {
            var r = n(7293);
            e.exports = !r((function () {
                return 7 != Object.defineProperty({}, 1, {
                    get: function () {
                        return 7
                    }
                })[1]
            }))
        }, 317: (e, t, n) => {
            var r = n(7854), o = n(111), i = r.document, s = o(i) && o(i.createElement);
            e.exports = function (e) {
                return s ? i.createElement(e) : {}
            }
        }, 5268: (e, t, n) => {
            var r = n(4326), o = n(7854);
            e.exports = "process" == r(o.process)
        }, 8113: (e, t, n) => {
            var r = n(5005);
            e.exports = r("navigator", "userAgent") || ""
        }, 7392: (e, t, n) => {
            var r, o, i = n(7854), s = n(8113), a = i.process, c = a && a.versions, l = c && c.v8;
            l ? o = (r = l.split("."))[0] + r[1] : s && (!(r = s.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = s.match(/Chrome\/(\d+)/)) && (o = r[1]), e.exports = o && +o
        }, 748: e => {
            e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        }, 2109: (e, t, n) => {
            var r = n(7854), o = n(1236).f, i = n(8880), s = n(1320), a = n(3505), c = n(9920), l = n(4705);
            e.exports = function (e, t) {
                var n, u, d, h, f, p = e.target, m = e.global, v = e.stat;
                if (n = m ? r : v ? r[p] || a(p, {}) : (r[p] || {}).prototype) for (u in t) {
                    if (h = t[u], d = e.noTargetGet ? (f = o(n, u)) && f.value : n[u], !l(m ? u : p + (v ? "." : "#") + u, e.forced) && void 0 !== d) {
                        if (typeof h == typeof d) continue;
                        c(h, d)
                    }
                    (e.sham || d && d.sham) && i(h, "sham", !0), s(n, u, h, e)
                }
            }
        }, 7293: e => {
            e.exports = function (e) {
                try {
                    return !!e()
                } catch (t) {
                    return !0
                }
            }
        }, 5005: (e, t, n) => {
            var r = n(857), o = n(7854), i = function (e) {
                return "function" == typeof e ? e : void 0
            };
            e.exports = function (e, t) {
                return arguments.length < 2 ? i(r[e]) || i(o[e]) : r[e] && r[e][t] || o[e] && o[e][t]
            }
        }, 7854: (e, t, n) => {
            var r = function (e) {
                return e && e.Math == Math && e
            };
            e.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof n.g && n.g) || function () {
                return this
            }() || Function("return this")()
        }, 6656: e => {
            var t = {}.hasOwnProperty;
            e.exports = function (e, n) {
                return t.call(e, n)
            }
        }, 3501: e => {
            e.exports = {}
        }, 4664: (e, t, n) => {
            var r = n(9781), o = n(7293), i = n(317);
            e.exports = !r && !o((function () {
                return 7 != Object.defineProperty(i("div"), "a", {
                    get: function () {
                        return 7
                    }
                }).a
            }))
        }, 8361: (e, t, n) => {
            var r = n(7293), o = n(4326), i = "".split;
            e.exports = r((function () {
                return !Object("z").propertyIsEnumerable(0)
            })) ? function (e) {
                return "String" == o(e) ? i.call(e, "") : Object(e)
            } : Object
        }, 2788: (e, t, n) => {
            var r = n(5465), o = Function.toString;
            "function" != typeof r.inspectSource && (r.inspectSource = function (e) {
                return o.call(e)
            }), e.exports = r.inspectSource
        }, 9909: (e, t, n) => {
            var r, o, i, s = n(8536), a = n(7854), c = n(111), l = n(8880), u = n(6656), d = n(5465), h = n(6200),
                f = n(3501), p = a.WeakMap;
            if (s) {
                var m = d.state || (d.state = new p), v = m.get, g = m.has, _ = m.set;
                r = function (e, t) {
                    return t.facade = e, _.call(m, e, t), t
                }, o = function (e) {
                    return v.call(m, e) || {}
                }, i = function (e) {
                    return g.call(m, e)
                }
            } else {
                var y = h("state");
                f[y] = !0, r = function (e, t) {
                    return t.facade = e, l(e, y, t), t
                }, o = function (e) {
                    return u(e, y) ? e[y] : {}
                }, i = function (e) {
                    return u(e, y)
                }
            }
            e.exports = {
                set: r, get: o, has: i, enforce: function (e) {
                    return i(e) ? o(e) : r(e, {})
                }, getterFor: function (e) {
                    return function (t) {
                        var n;
                        if (!c(t) || (n = o(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                        return n
                    }
                }
            }
        }, 4705: (e, t, n) => {
            var r = n(7293), o = /#|\.prototype\./, i = function (e, t) {
                var n = a[s(e)];
                return n == l || n != c && ("function" == typeof t ? r(t) : !!t)
            }, s = i.normalize = function (e) {
                return String(e).replace(o, ".").toLowerCase()
            }, a = i.data = {}, c = i.NATIVE = "N", l = i.POLYFILL = "P";
            e.exports = i
        }, 111: e => {
            e.exports = function (e) {
                return "object" == typeof e ? null !== e : "function" == typeof e
            }
        }, 1913: e => {
            e.exports = !1
        }, 8536: (e, t, n) => {
            var r = n(7854), o = n(2788), i = r.WeakMap;
            e.exports = "function" == typeof i && /native code/.test(o(i))
        }, 3070: (e, t, n) => {
            var r = n(9781), o = n(4664), i = n(9670), s = n(7593), a = Object.defineProperty;
            t.f = r ? a : function (e, t, n) {
                if (i(e), t = s(t, !0), i(n), o) try {
                    return a(e, t, n)
                } catch (r) {
                }
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                return "value" in n && (e[t] = n.value), e
            }
        }, 1236: (e, t, n) => {
            var r = n(9781), o = n(5296), i = n(9114), s = n(5656), a = n(7593), c = n(6656), l = n(4664),
                u = Object.getOwnPropertyDescriptor;
            t.f = r ? u : function (e, t) {
                if (e = s(e), t = a(t, !0), l) try {
                    return u(e, t)
                } catch (n) {
                }
                if (c(e, t)) return i(!o.f.call(e, t), e[t])
            }
        }, 8006: (e, t, n) => {
            var r = n(6324), o = n(748).concat("length", "prototype");
            t.f = Object.getOwnPropertyNames || function (e) {
                return r(e, o)
            }
        }, 5181: (e, t) => {
            t.f = Object.getOwnPropertySymbols
        }, 6324: (e, t, n) => {
            var r = n(6656), o = n(5656), i = n(1318).indexOf, s = n(3501);
            e.exports = function (e, t) {
                var n, a = o(e), c = 0, l = [];
                for (n in a) !r(s, n) && r(a, n) && l.push(n);
                for (; t.length > c;) r(a, n = t[c++]) && (~i(l, n) || l.push(n));
                return l
            }
        }, 5296: (e, t) => {
            "use strict";
            var n = {}.propertyIsEnumerable, r = Object.getOwnPropertyDescriptor, o = r && !n.call({1: 2}, 1);
            t.f = o ? function (e) {
                var t = r(this, e);
                return !!t && t.enumerable
            } : n
        }, 3887: (e, t, n) => {
            var r = n(5005), o = n(8006), i = n(5181), s = n(9670);
            e.exports = r("Reflect", "ownKeys") || function (e) {
                var t = o.f(s(e)), n = i.f;
                return n ? t.concat(n(e)) : t
            }
        }, 857: (e, t, n) => {
            var r = n(7854);
            e.exports = r
        }, 1320: (e, t, n) => {
            var r = n(7854), o = n(8880), i = n(6656), s = n(3505), a = n(2788), c = n(9909), l = c.get, u = c.enforce,
                d = String(String).split("String");
            (e.exports = function (e, t, n, a) {
                var c, l = !!a && !!a.unsafe, h = !!a && !!a.enumerable, f = !!a && !!a.noTargetGet;
                "function" == typeof n && ("string" != typeof t || i(n, "name") || o(n, "name", t), (c = u(n)).source || (c.source = d.join("string" == typeof t ? t : ""))), e !== r ? (l ? !f && e[t] && (h = !0) : delete e[t], h ? e[t] = n : o(e, t, n)) : h ? e[t] = n : s(t, n)
            })(Function.prototype, "toString", (function () {
                return "function" == typeof this && l(this).source || a(this)
            }))
        }, 4488: e => {
            e.exports = function (e) {
                if (null == e) throw TypeError("Can't call method on " + e);
                return e
            }
        }, 3505: (e, t, n) => {
            var r = n(7854), o = n(8880);
            e.exports = function (e, t) {
                try {
                    o(r, e, t)
                } catch (n) {
                    r[e] = t
                }
                return t
            }
        }, 6200: (e, t, n) => {
            var r = n(2309), o = n(9711), i = r("keys");
            e.exports = function (e) {
                return i[e] || (i[e] = o(e))
            }
        }, 5465: (e, t, n) => {
            var r = n(7854), o = n(3505), i = "__core-js_shared__", s = r[i] || o(i, {});
            e.exports = s
        }, 2309: (e, t, n) => {
            var r = n(1913), o = n(5465);
            (e.exports = function (e, t) {
                return o[e] || (o[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: "3.9.1",
                mode: r ? "pure" : "global",
                copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
            })
        }, 1400: (e, t, n) => {
            var r = n(9958), o = Math.max, i = Math.min;
            e.exports = function (e, t) {
                var n = r(e);
                return n < 0 ? o(n + t, 0) : i(n, t)
            }
        }, 5656: (e, t, n) => {
            var r = n(8361), o = n(4488);
            e.exports = function (e) {
                return r(o(e))
            }
        }, 9958: e => {
            var t = Math.ceil, n = Math.floor;
            e.exports = function (e) {
                return isNaN(e = +e) ? 0 : (e > 0 ? n : t)(e)
            }
        }, 7466: (e, t, n) => {
            var r = n(9958), o = Math.min;
            e.exports = function (e) {
                return e > 0 ? o(r(e), 9007199254740991) : 0
            }
        }, 7908: (e, t, n) => {
            var r = n(4488);
            e.exports = function (e) {
                return Object(r(e))
            }
        }, 7593: (e, t, n) => {
            var r = n(111);
            e.exports = function (e, t) {
                if (!r(e)) return e;
                var n, o;
                if (t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
                if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e))) return o;
                if (!t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
                throw TypeError("Can't convert object to primitive value")
            }
        }, 9711: e => {
            var t = 0, n = Math.random();
            e.exports = function (e) {
                return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++t + n).toString(36)
            }
        }, 5827: (e, t, n) => {
            "use strict";
            var r = n(2109), o = n(3671).left, i = n(9341), s = n(7392), a = n(5268);
            r({target: "Array", proto: !0, forced: !i("reduce") || !a && s > 79 && s < 83}, {
                reduce: function (e) {
                    return o(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        }, 7856: function (e) {
            e.exports = function () {
                "use strict";

                function e(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                    return Array.from(e)
                }

                var t = Object.hasOwnProperty, n = Object.setPrototypeOf, r = Object.isFrozen,
                    o = Object.getPrototypeOf, i = Object.getOwnPropertyDescriptor, s = Object.freeze, a = Object.seal,
                    c = Object.create, l = "undefined" != typeof Reflect && Reflect, u = l.apply, d = l.construct;
                u || (u = function (e, t, n) {
                    return e.apply(t, n)
                }), s || (s = function (e) {
                    return e
                }), a || (a = function (e) {
                    return e
                }), d || (d = function (t, n) {
                    return new (Function.prototype.bind.apply(t, [null].concat(e(n))))
                });
                var h = k(Array.prototype.forEach), f = k(Array.prototype.pop), p = k(Array.prototype.push),
                    m = k(String.prototype.toLowerCase), v = k(String.prototype.match), g = k(String.prototype.replace),
                    _ = k(String.prototype.indexOf), y = k(String.prototype.trim), b = k(RegExp.prototype.test),
                    w = S(TypeError);

                function k(e) {
                    return function (t) {
                        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                        return u(e, t, r)
                    }
                }

                function S(e) {
                    return function () {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return d(e, n)
                    }
                }

                function x(e, t) {
                    n && n(e, null);
                    for (var o = t.length; o--;) {
                        var i = t[o];
                        if ("string" == typeof i) {
                            var s = m(i);
                            s !== i && (r(t) || (t[o] = s), i = s)
                        }
                        e[i] = !0
                    }
                    return e
                }

                function E(e) {
                    var n = c(null), r = void 0;
                    for (r in e) u(t, e, [r]) && (n[r] = e[r]);
                    return n
                }

                function A(e, t) {
                    for (; null !== e;) {
                        var n = i(e, t);
                        if (n) {
                            if (n.get) return k(n.get);
                            if ("function" == typeof n.value) return k(n.value)
                        }
                        e = o(e)
                    }

                    function r(e) {
                        return console.warn("fallback value for", e), null
                    }

                    return r
                }

                var L = s(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
                    T = s(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
                    C = s(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
                    O = s(["animate", "color-profile", "cursor", "discard", "fedropshadow", "feimage", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
                    I = s(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
                    D = s(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
                    N = s(["#text"]),
                    M = s(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns"]),
                    q = s(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
                    F = s(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
                    R = s(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
                    P = a(/\{\{[\s\S]*|[\s\S]*\}\}/gm), j = a(/<%[\s\S]*|[\s\S]*%>/gm),
                    B = a(/^data-[\-\w.\u00B7-\uFFFF]/), z = a(/^aria-[\-\w]+$/),
                    U = a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
                    $ = a(/^(?:\w+script|data):/i),
                    H = a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
                    W = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    };

                function G(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                    return Array.from(e)
                }

                var V = function () {
                    return "undefined" == typeof window ? null : window
                }, K = function (e, t) {
                    if ("object" !== (void 0 === e ? "undefined" : W(e)) || "function" != typeof e.createPolicy) return null;
                    var n = null, r = "data-tt-policy-suffix";
                    t.currentScript && t.currentScript.hasAttribute(r) && (n = t.currentScript.getAttribute(r));
                    var o = "dompurify" + (n ? "#" + n : "");
                    try {
                        return e.createPolicy(o, {
                            createHTML: function (e) {
                                return e
                            }
                        })
                    } catch (i) {
                        return console.warn("TrustedTypes policy " + o + " could not be created."), null
                    }
                };

                function Y() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V(), t = function (e) {
                        return Y(e)
                    };
                    if (t.version = "2.2.7", t.removed = [], !e || !e.document || 9 !== e.document.nodeType) return t.isSupported = !1, t;
                    var n = e.document, r = e.document, o = e.DocumentFragment, i = e.HTMLTemplateElement, a = e.Node,
                        c = e.Element, l = e.NodeFilter, u = e.NamedNodeMap,
                        d = void 0 === u ? e.NamedNodeMap || e.MozNamedAttrMap : u, k = e.Text, S = e.Comment,
                        Z = e.DOMParser, X = e.trustedTypes, J = c.prototype, Q = A(J, "cloneNode"),
                        ee = A(J, "nextSibling"), te = A(J, "childNodes"), ne = A(J, "parentNode");
                    if ("function" == typeof i) {
                        var re = r.createElement("template");
                        re.content && re.content.ownerDocument && (r = re.content.ownerDocument)
                    }
                    var oe = K(X, n), ie = oe && Re ? oe.createHTML("") : "", se = r, ae = se.implementation,
                        ce = se.createNodeIterator, le = se.getElementsByTagName, ue = se.createDocumentFragment,
                        de = n.importNode, he = {};
                    try {
                        he = E(r).documentMode ? r.documentMode : {}
                    } catch (mt) {
                    }
                    var fe = {};
                    t.isSupported = "function" == typeof ne && ae && void 0 !== ae.createHTMLDocument && 9 !== he;
                    var pe = P, me = j, ve = B, ge = z, _e = $, ye = H, be = U, we = null,
                        ke = x({}, [].concat(G(L), G(T), G(C), G(I), G(N))), Se = null,
                        xe = x({}, [].concat(G(M), G(q), G(F), G(R))), Ee = null, Ae = null, Le = !0, Te = !0, Ce = !1,
                        Oe = !1, Ie = !1, De = !1, Ne = !1, Me = !1, qe = !1, Fe = !0, Re = !1, Pe = !0, je = !0,
                        Be = !1, ze = {},
                        Ue = x({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
                        $e = null, He = x({}, ["audio", "video", "img", "source", "image", "track"]), We = null,
                        Ge = x({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "summary", "title", "value", "style", "xmlns"]),
                        Ve = null, Ke = r.createElement("form"), Ye = function (e) {
                            Ve && Ve === e || (e && "object" === (void 0 === e ? "undefined" : W(e)) || (e = {}), e = E(e), we = "ALLOWED_TAGS" in e ? x({}, e.ALLOWED_TAGS) : ke, Se = "ALLOWED_ATTR" in e ? x({}, e.ALLOWED_ATTR) : xe, We = "ADD_URI_SAFE_ATTR" in e ? x(E(Ge), e.ADD_URI_SAFE_ATTR) : Ge, $e = "ADD_DATA_URI_TAGS" in e ? x(E(He), e.ADD_DATA_URI_TAGS) : He, Ee = "FORBID_TAGS" in e ? x({}, e.FORBID_TAGS) : {}, Ae = "FORBID_ATTR" in e ? x({}, e.FORBID_ATTR) : {}, ze = "USE_PROFILES" in e && e.USE_PROFILES, Le = !1 !== e.ALLOW_ARIA_ATTR, Te = !1 !== e.ALLOW_DATA_ATTR, Ce = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Oe = e.SAFE_FOR_TEMPLATES || !1, Ie = e.WHOLE_DOCUMENT || !1, Me = e.RETURN_DOM || !1, qe = e.RETURN_DOM_FRAGMENT || !1, Fe = !1 !== e.RETURN_DOM_IMPORT, Re = e.RETURN_TRUSTED_TYPE || !1, Ne = e.FORCE_BODY || !1, Pe = !1 !== e.SANITIZE_DOM, je = !1 !== e.KEEP_CONTENT, Be = e.IN_PLACE || !1, be = e.ALLOWED_URI_REGEXP || be, Oe && (Te = !1), qe && (Me = !0), ze && (we = x({}, [].concat(G(N))), Se = [], !0 === ze.html && (x(we, L), x(Se, M)), !0 === ze.svg && (x(we, T), x(Se, q), x(Se, R)), !0 === ze.svgFilters && (x(we, C), x(Se, q), x(Se, R)), !0 === ze.mathMl && (x(we, I), x(Se, F), x(Se, R))), e.ADD_TAGS && (we === ke && (we = E(we)), x(we, e.ADD_TAGS)), e.ADD_ATTR && (Se === xe && (Se = E(Se)), x(Se, e.ADD_ATTR)), e.ADD_URI_SAFE_ATTR && x(We, e.ADD_URI_SAFE_ATTR), je && (we["#text"] = !0), Ie && x(we, ["html", "head", "body"]), we.table && (x(we, ["tbody"]), delete Ee.tbody), s && s(e), Ve = e)
                        }, Ze = x({}, ["mi", "mo", "mn", "ms", "mtext"]),
                        Xe = x({}, ["foreignobject", "desc", "title", "annotation-xml"]), Je = x({}, T);
                    x(Je, C), x(Je, O);
                    var Qe = x({}, I);
                    x(Qe, D);
                    var et = "http://www.w3.org/1998/Math/MathML", tt = "http://www.w3.org/2000/svg",
                        nt = "http://www.w3.org/1999/xhtml", rt = function (e) {
                            var t = ne(e);
                            t && t.tagName || (t = {namespaceURI: nt, tagName: "template"});
                            var n = m(e.tagName), r = m(t.tagName);
                            if (e.namespaceURI === tt) return t.namespaceURI === nt ? "svg" === n : t.namespaceURI === et ? "svg" === n && ("annotation-xml" === r || Ze[r]) : Boolean(Je[n]);
                            if (e.namespaceURI === et) return t.namespaceURI === nt ? "math" === n : t.namespaceURI === tt ? "math" === n && Xe[r] : Boolean(Qe[n]);
                            if (e.namespaceURI === nt) {
                                if (t.namespaceURI === tt && !Xe[r]) return !1;
                                if (t.namespaceURI === et && !Ze[r]) return !1;
                                var o = x({}, ["title", "style", "font", "a", "script"]);
                                return !Qe[n] && (o[n] || !Je[n])
                            }
                            return !1
                        }, ot = function (e) {
                            p(t.removed, {element: e});
                            try {
                                e.parentNode.removeChild(e)
                            } catch (mt) {
                                try {
                                    e.outerHTML = ie
                                } catch (mt) {
                                    e.remove()
                                }
                            }
                        }, it = function (e, n) {
                            try {
                                p(t.removed, {attribute: n.getAttributeNode(e), from: n})
                            } catch (mt) {
                                p(t.removed, {attribute: null, from: n})
                            }
                            if (n.removeAttribute(e), "is" === e && !Se[e]) if (Me || qe) try {
                                ot(n)
                            } catch (mt) {
                            } else try {
                                n.setAttribute(e, "")
                            } catch (mt) {
                            }
                        }, st = function (e) {
                            var t = void 0, n = void 0;
                            if (Ne) e = "<remove></remove>" + e; else {
                                var o = v(e, /^[\r\n\t ]+/);
                                n = o && o[0]
                            }
                            var i = oe ? oe.createHTML(e) : e;
                            try {
                                t = (new Z).parseFromString(i, "text/html")
                            } catch (mt) {
                            }
                            if (!t || !t.documentElement) {
                                var s = (t = ae.createHTMLDocument("")).body;
                                s.parentNode.removeChild(s.parentNode.firstElementChild), s.outerHTML = i
                            }
                            return e && n && t.body.insertBefore(r.createTextNode(n), t.body.childNodes[0] || null), le.call(t, Ie ? "html" : "body")[0]
                        }, at = function (e) {
                            return ce.call(e.ownerDocument || e, e, l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT, (function () {
                                return l.FILTER_ACCEPT
                            }), !1)
                        }, ct = function (e) {
                            return !(e instanceof k || e instanceof S || "string" == typeof e.nodeName && "string" == typeof e.textContent && "function" == typeof e.removeChild && e.attributes instanceof d && "function" == typeof e.removeAttribute && "function" == typeof e.setAttribute && "string" == typeof e.namespaceURI && "function" == typeof e.insertBefore)
                        }, lt = function (e) {
                            return "object" === (void 0 === a ? "undefined" : W(a)) ? e instanceof a : e && "object" === (void 0 === e ? "undefined" : W(e)) && "number" == typeof e.nodeType && "string" == typeof e.nodeName
                        }, ut = function (e, n, r) {
                            fe[e] && h(fe[e], (function (e) {
                                e.call(t, n, r, Ve)
                            }))
                        }, dt = function (e) {
                            var n = void 0;
                            if (ut("beforeSanitizeElements", e, null), ct(e)) return ot(e), !0;
                            if (v(e.nodeName, /[\u0080-\uFFFF]/)) return ot(e), !0;
                            var r = m(e.nodeName);
                            if (ut("uponSanitizeElement", e, {
                                tagName: r,
                                allowedTags: we
                            }), !lt(e.firstElementChild) && (!lt(e.content) || !lt(e.content.firstElementChild)) && b(/<[/\w]/g, e.innerHTML) && b(/<[/\w]/g, e.textContent)) return ot(e), !0;
                            if (!we[r] || Ee[r]) {
                                if (je && !Ue[r]) {
                                    var o = ne(e), i = te(e);
                                    if (i && o) for (var s = i.length - 1; s >= 0; --s) o.insertBefore(Q(i[s], !0), ee(e))
                                }
                                return ot(e), !0
                            }
                            return e instanceof c && !rt(e) ? (ot(e), !0) : "noscript" !== r && "noembed" !== r || !b(/<\/no(script|embed)/i, e.innerHTML) ? (Oe && 3 === e.nodeType && (n = e.textContent, n = g(n, pe, " "), n = g(n, me, " "), e.textContent !== n && (p(t.removed, {element: e.cloneNode()}), e.textContent = n)), ut("afterSanitizeElements", e, null), !1) : (ot(e), !0)
                        }, ht = function (e, t, n) {
                            if (Pe && ("id" === t || "name" === t) && (n in r || n in Ke)) return !1;
                            if (Te && b(ve, t)) ; else if (Le && b(ge, t)) ; else {
                                if (!Se[t] || Ae[t]) return !1;
                                if (We[t]) ; else if (b(be, g(n, ye, ""))) ; else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== _(n, "data:") || !$e[e]) if (Ce && !b(_e, g(n, ye, ""))) ; else if (n) return !1
                            }
                            return !0
                        }, ft = function (e) {
                            var n = void 0, r = void 0, o = void 0, i = void 0;
                            ut("beforeSanitizeAttributes", e, null);
                            var s = e.attributes;
                            if (s) {
                                var a = {attrName: "", attrValue: "", keepAttr: !0, allowedAttributes: Se};
                                for (i = s.length; i--;) {
                                    var c = n = s[i], l = c.name, u = c.namespaceURI;
                                    if (r = y(n.value), o = m(l), a.attrName = o, a.attrValue = r, a.keepAttr = !0, a.forceKeepAttr = void 0, ut("uponSanitizeAttribute", e, a), r = a.attrValue, !a.forceKeepAttr && (it(l, e), a.keepAttr)) if (b(/\/>/i, r)) it(l, e); else {
                                        Oe && (r = g(r, pe, " "), r = g(r, me, " "));
                                        var d = e.nodeName.toLowerCase();
                                        if (ht(d, o, r)) try {
                                            u ? e.setAttributeNS(u, l, r) : e.setAttribute(l, r), f(t.removed)
                                        } catch (mt) {
                                        }
                                    }
                                }
                                ut("afterSanitizeAttributes", e, null)
                            }
                        }, pt = function e(t) {
                            var n = void 0, r = at(t);
                            for (ut("beforeSanitizeShadowDOM", t, null); n = r.nextNode();) ut("uponSanitizeShadowNode", n, null), dt(n) || (n.content instanceof o && e(n.content), ft(n));
                            ut("afterSanitizeShadowDOM", t, null)
                        };
                    return t.sanitize = function (r, i) {
                        var s = void 0, c = void 0, l = void 0, u = void 0, d = void 0;
                        if (r || (r = "\x3c!--\x3e"), "string" != typeof r && !lt(r)) {
                            if ("function" != typeof r.toString) throw w("toString is not a function");
                            if ("string" != typeof (r = r.toString())) throw w("dirty is not a string, aborting")
                        }
                        if (!t.isSupported) {
                            if ("object" === W(e.toStaticHTML) || "function" == typeof e.toStaticHTML) {
                                if ("string" == typeof r) return e.toStaticHTML(r);
                                if (lt(r)) return e.toStaticHTML(r.outerHTML)
                            }
                            return r
                        }
                        if (De || Ye(i), t.removed = [], "string" == typeof r && (Be = !1), Be) ; else if (r instanceof a) 1 === (c = (s = st("\x3c!----\x3e")).ownerDocument.importNode(r, !0)).nodeType && "BODY" === c.nodeName || "HTML" === c.nodeName ? s = c : s.appendChild(c); else {
                            if (!Me && !Oe && !Ie && -1 === r.indexOf("<")) return oe && Re ? oe.createHTML(r) : r;
                            if (!(s = st(r))) return Me ? null : ie
                        }
                        s && Ne && ot(s.firstChild);
                        for (var h = at(Be ? r : s); l = h.nextNode();) 3 === l.nodeType && l === u || dt(l) || (l.content instanceof o && pt(l.content), ft(l), u = l);
                        if (u = null, Be) return r;
                        if (Me) {
                            if (qe) for (d = ue.call(s.ownerDocument); s.firstChild;) d.appendChild(s.firstChild); else d = s;
                            return Fe && (d = de.call(n, d, !0)), d
                        }
                        var f = Ie ? s.outerHTML : s.innerHTML;
                        return Oe && (f = g(f, pe, " "), f = g(f, me, " ")), oe && Re ? oe.createHTML(f) : f
                    }, t.setConfig = function (e) {
                        Ye(e), De = !0
                    }, t.clearConfig = function () {
                        Ve = null, De = !1
                    }, t.isValidAttribute = function (e, t, n) {
                        Ve || Ye({});
                        var r = m(e), o = m(t);
                        return ht(r, o, n)
                    }, t.addHook = function (e, t) {
                        "function" == typeof t && (fe[e] = fe[e] || [], p(fe[e], t))
                    }, t.removeHook = function (e) {
                        fe[e] && f(fe[e])
                    }, t.removeHooks = function (e) {
                        fe[e] && (fe[e] = [])
                    }, t.removeAllHooks = function () {
                        fe = {}
                    }, t
                }

                return Y()
            }()
        }
    }, t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {exports: {}};
        return e[r].call(o.exports, o, o.exports, n), o.exports
    }

    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {a: t}), t
    }, n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {enumerable: !0, get: t[r]})
    }, n.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        "use strict";
        var e, t, r, o, i = {}, s = [], a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

        function c(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function l(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        }

        function u(e, t, n) {
            var r, o, i, s = arguments, a = {};
            for (i in t) "key" == i ? r = t[i] : "ref" == i ? o = t[i] : a[i] = t[i];
            if (arguments.length > 3) for (n = [n], i = 3; i < arguments.length; i++) n.push(s[i]);
            if (null != n && (a.children = n), "function" == typeof e && null != e.defaultProps) for (i in e.defaultProps) void 0 === a[i] && (a[i] = e.defaultProps[i]);
            return d(e, a, r, o, null)
        }

        function d(t, n, r, o, i) {
            var s = {
                type: t,
                props: n,
                key: r,
                ref: o,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __d: void 0,
                __c: null,
                __h: null,
                constructor: void 0,
                __v: null == i ? ++e.__v : i
            };
            return null != e.vnode && e.vnode(s), s
        }

        function h(e) {
            return e.children
        }

        function f(e, t) {
            this.props = e, this.context = t
        }

        function g() {
            for (var e; g.__r = t.length;) e = t.sort((function (e, t) {
                return e.__v.__b - t.__v.__b
            })), t = [], e.some((function (e) {
                var t, n, r, o, i, s;
                e.__d && (i = (o = (t = e).__v).__e, (s = t.__P) && (n = [], (r = c({}, o)).__v = o.__v + 1, E(s, o, r, t.__n, void 0 !== s.ownerSVGElement, null != o.__h ? [i] : null, n, null == i ? p(o) : i, o.__h), A(n, o), o.__e != i && m(o)))
            }))
        }

        e = {
            __e: function (e, t) {
                for (var n, r, o; t = t.__;) if ((n = t.__c) && !n.__) try {
                    if ((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)), o = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), o = n.__d), o) return n.__E = n
                } catch (t) {
                    e = t
                }
                throw e
            }, __v: 0
        }, f.prototype.setState = function (e, t) {
            var n;
            n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = c({}, this.state), "function" == typeof e && (e = e(c({}, n), this.props)), e && c(n, e), null != e && this.__v && (t && this.__h.push(t), v(this))
        }, f.prototype.forceUpdate = function (e) {
            this.__v && (this.__e = !0, e && this.__h.push(e), v(this))
        }, f.prototype.render = h, t = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0;
        const D = "is-active";
        const N = class {
            static selector() {
                return "[data-collapsible]"
            }

            constructor(e) {
                this.block = e, this.items = e.querySelectorAll(".js-collapsible"), this.actions = e.querySelectorAll(".js-collapsible-action"), this.content = e.querySelectorAll(".js-collapsible-inner"), this.bindEvents()
            }

            bindEvents() {
                const e = (e, t) => {
                    const n = this.block.querySelector(".is-active");
                    if (this.activeIndex === t) return e.classList.remove(D), e.setAttribute("aria-expanded", "false"), e.querySelector(".js-collapsible-inner").setAttribute("aria-hidden", "true"), void (this.activeIndex = null);
                    n && (n.classList.remove(D), n.setAttribute("aria-expanded", "false"), n.querySelector(".js-collapsible-inner").setAttribute("aria-hidden", "true")), this.activeIndex = t, e.classList.add(D), e.setAttribute("aria-expanded", "true"), this.content[t].setAttribute("aria-hidden", "false")
                };
                this.items.forEach(((t, n) => {
                    this.actions[n].addEventListener("click", (r => {
                        const o = window.getSelection().toString().trim();
                        "A" === r.target.tagName && r.target !== r.currentTarget || o.length <= 0 && e(t, n)
                    }))
                })), document.addEventListener("keypress", (t => {
                    const n = t.keyCode || t.which, r = this.block.querySelector(".js-collapsible:focus");
                    if (r) {
                        const o = Array.prototype.indexOf.call(r.parentElement.children, r);
                        32 !== n && 13 !== n || (t.preventDefault(), e(r, o))
                    }
                }))
            }
        };

        const z = class {
            static selector() {
                return "[data-mobile-menu-toggle]"
            }

            constructor(e) {
                this.node = e, this.body = document.querySelector("body"), this.navbar = document.querySelector("[data-mobile-menu-header]"), this.nav = document.querySelector("[data-mobile-menu]"), this.overlay = document.querySelector("[data-mobile-menu-overlay]"), this.state = {open: !1}, this.bindEventListeners()
            }

            bindEventListeners() {
                this.node.addEventListener("click", (() => {
                    this.toggle()
                })), this.overlay.addEventListener("click", (() => {
                    this.close()
                }))
            }

            toggle() {
                this.state.open ? this.close() : this.open()
            }

            open() {
                this.node.classList.add("is-open"), this.overlay.classList.add("active"), this.navbar.classList.add("active"), this.openMobileMenu(), this.state.open = !0
            }

            close() {
                this.node.classList.remove("is-open"), this.overlay.classList.remove("active"), this.navbar.classList.remove("active"), this.closeMobileMenu(), this.state.open = !1
            }

            openMobileMenu() {
                this.body.classList.add("no-scroll"), this.nav.classList.add("is-visible")
            }

            closeMobileMenu() {
                this.body.classList.remove("no-scroll"), this.nav.classList.remove("is-visible")
            }
        }, U = "stages-block__stage--active";
        const $ = class {
            static selector() {
                return "[data-stages]"
            }

            constructor(e) {
                this.block = e, this.stages = this.block.querySelectorAll("[data-stage]"), this.bindEvents(), this.stages.forEach((e => {
                    e.clientHeight > 75 && this.block.classList.add("stages-block__stage--long")
                }))
            }

            bindEvents() {
                const e = () => {
                    window.innerWidth < 768 ? this.stages.forEach((e => e.getBoundingClientRect().top <= 200 ? (e.classList.add(U), null) : (e.classList.remove(U), null))) : this.stages.forEach((e => {
                        e.classList.remove(U)
                    }))
                };
                window.addEventListener("scroll", e), e()
            }
        }, H = "multi-toggle__button--active";
        const W = class {
            static selector() {
                return "[data-multi-toggle]"
            }

            constructor(e) {
                this.toggle = e, this.field = this.toggle.querySelector("input"), this.buttons = this.toggle.querySelectorAll("button"), this.bindEvents()
            }

            bindEvents() {
                this.buttons.forEach((e => {
                    e.addEventListener("click", (() => {
                        this.toggle.querySelector(`.${H}`).classList.remove(H), e.classList.add(H);
                        const t = e.getAttribute("data-value");
                        this.field.setAttribute("value", t)
                    }))
                }))
            }
        };
        const G = class {
            static selector() {
                return "[data-toggle]"
            }

            constructor(e) {
                this.fields = [].slice.call(document.getElementsByClassName("js-toggle")), this.bindEvents()
            }

            setCheckboxes(e) {
                this.fields.forEach((t => {
                    t.checked = e
                }))
            }

            bindEvents() {
                window.addEventListener("load", (() => {
                    if (window.tag && window.tag.privacy) {
                        var e;
                        const {privacy: t} = window.tag;
                        this.fields.forEach((e => {
                            e.addEventListener("change", (n => {
                                n.preventDefault(), e.checked ? (t.setVisitorOptout(), this.setCheckboxes(!0)) : (t.setVisitorMode("cnil", "exempt"), this.setCheckboxes(!1)), window.tag.dispatch()
                            })), e.removeAttribute("disabled")
                        })), "optout" === (null === (e = t.getVisitorMode()) || void 0 === e ? void 0 : e.name) && this.setCheckboxes(!0)
                    }
                }))
            }
        }, V = "missions__tabs-item", K = "missions__tabs-item--active";
        const Y = class {
            static selector() {
                return "[data-navsticky]"
            }

            constructor(e) {
                this.nav = e, this.elements = this.nav.querySelectorAll("[data-id]"), this.setActiveTab(), this.handleShrinkTabs()
            }

            setActiveTab() {
                const e = new Array;
                Array.prototype.forEach.call(this.elements, (function (t) {
                    e.push(t.id)
                })), "IntersectionObserver" in window && e.length > 0 && e.forEach(((e, t) => {
                    const n = document.getElementById(e);
                    new IntersectionObserver((function ([e]) {
                        if (e.isIntersecting) {
                            const e = document.querySelectorAll(`.${V}`);
                            [].forEach.call(e, (function (e) {
                                e.classList.remove(K)
                            })), document.querySelectorAll(`.${V}`)[t].classList.add(K)
                        }
                    }), {rootMargin: "-45% 0px -55%"}).observe(n)
                }))
            }

            handleShrinkTabs() {
                const e = document.getElementById("nav");
                if ("IntersectionObserver" in window && e) {
                    const t = 100;
                    new IntersectionObserver((function ([t]) {
                        e.getBoundingClientRect().top <= 0 ? e.classList.add("is-sticky") : e.classList.remove("is-sticky")
                    }), {
                        threshold: function () {
                            const e = [];
                            for (let n = 1; n <= t; n++) {
                                const r = n / t;
                                e.push(r)
                            }
                            return e.push(0), e
                        }()
                    }).observe(document.querySelector("div[data-header-sticky]"))
                }
            }
        };
        const Z = class {
                static selector() {
                    return "[data-domain-form]"
                }

                constructor(e) {
                    this.form = e, this.bindEvents()
                }

                bindEvents() {
                    this.form.addEventListener("submit", (e => {
                        e.preventDefault();
                        const t = e.target.getAttribute("data-shop-endpoint"),
                            n = e.target.getAttribute("data-tld-endpoint"), r = [...new FormData(e.target).entries()],
                            o = Object.fromEntries(r),
                            i = o.search.startsWith(".") ? `${window.location.origin}${n}` : `${t}/domain/${o.type}`;
                        if (o.search.startsWith(".")) {
                            const e = n.includes("?") ? "&" : "?";
                            window.location.href = `${i}${e}prefix=${o.search}`
                        } else {
                            const e = t.includes("?") ? "&" : "?",
                                n = r.map((e => e[0] && "type" !== e[0] ? `${encodeURIComponent(e[0])}=${encodeURIComponent(e[1])}` : "")).filter(Boolean).sort().join("&");
                            window.location.href = `${i}${e}${n}`
                        }
                    }))
                }
            }, X = "locked", J = "comparative-table__cell--active", Q = "comparative-table__header-column--active",
            ee = "comparative-table__footer-column--active";
        const te = class {
            static selector() {
                return "[data-comparative-table]"
            }

            constructor(e) {
                this.anchor = e, this.activeCell = null, this.locked = !1, this.columnHeaders = e.querySelectorAll("[data-comparative-header]"), this.columnFooters = e.querySelectorAll("[data-comparative-footer]"), this.cells = e.querySelectorAll("[data-comparative-cell]"), this.bindEvents(), this.columnIndex = null
            }

            setColumn(e, t) {
                if (this.locked) return;
                if (this.activeCell === e && t) return;
                const n = this.columnHeaders[e], r = this.columnFooters[e];
                t ? (this.activeCell = e, "row" !== n.scope && n.classList.add(Q), r && 0 !== this.activeCell && r.classList.add(ee)) : (this.activeCell = null, n.classList.remove(Q), r && r.classList.remove(ee)), this.cells.forEach((n => {
                    n.cellIndex <= e && e < n.cellIndex + n.colSpan && (t ? n.classList.add(J) : n.classList.remove(J))
                }))
            }

            lockColumn(e) {
                this.setColumn(e, !0), this.anchor.classList.add(X), this.locked = !0
            }

            unlockColumn(e) {
                this.locked = !1, this.anchor.classList.remove(X), this.setColumn(e, !1)
            }

            handleClick(e, t) {
                this.locked ? (this.unlockColumn(this.columnIndex), e && this.columnIndex !== e && (this.columnIndex = e, this.lockColumn(e))) : "row" !== t.target.scope && (this.lockColumn(e), this.columnIndex = e)
            }

            bindEvents() {
                document.addEventListener("click", (e => {
                    this.anchor.contains(e.target) || this.locked && this.unlockColumn(this.columnIndex)
                })), this.cells.forEach((e => {
                    e.addEventListener("mouseenter", (() => {
                        this.setColumn(e.cellIndex, !0)
                    })), e.addEventListener("mouseleave", (() => {
                        this.setColumn(e.cellIndex, !1)
                    })), e.addEventListener("touchstart", (() => {
                        this.setColumn(e.cellIndex, !0)
                    })), e.addEventListener("touchend", (() => {
                        this.setColumn(e.cellIndex, !1)
                    })), e.addEventListener("click", (() => {
                        this.locked && this.unlockColumn(this.columnIndex)
                    }))
                })), this.columnHeaders.forEach(((e, t) => {
                    e.addEventListener("click", (e => this.handleClick(t, e)))
                })), this.columnFooters.forEach(((e, t) => {
                    e.addEventListener("click", (e => this.handleClick(t, e)))
                }))
            }
        };

        class ne {
            static selector() {
                return "[data-language-picker]"
            }

            constructor(e) {
                this.anchor = e, this.active = !1, this.pickerId = this.anchor.getAttribute("data-language-picker"), this.picker = document.querySelector(this.pickerId), this.closePickerButton = this.picker.querySelector("[data-language-picker-close]"), this.bindEvents()
            }

            openPicker() {
                ne.closeAllPickers(), this.picker.classList.add("is-active"), this.active = !0;
                const {hash: e} = window.location;
                this.picker.querySelectorAll("a").forEach((t => {
                    t.attributes.href.value = `${t.attributes.href.value}${e}`
                }))
            }

            closePicker() {
                this.picker.classList.remove("is-active"), this.active = !1
            }

            static closeAllPickers() {
                for (const e of document.querySelectorAll("[data-language-picker-close]")) e.click()
            }

            togglePicker() {
                this.active ? this.closePicker() : this.openPicker()
            }

            bindEvents() {
                this.anchor.addEventListener("click", (e => {
                    e.preventDefault(), this.togglePicker()
                })), this.anchor.addEventListener("keypress", (e => {
                    e.preventDefault();
                    const t = e.keyCode || e.which;
                    32 !== t && 13 !== t || this.togglePicker()
                })), document.addEventListener("keydown", (e => {
                    27 === (e.keyCode || e.which) && this.closePicker()
                })), this.closePickerButton.addEventListener("click", (() => this.closePicker()))
            }
        }

        const re = ne, oe = "disabled";
        const ie = class {
            static selector() {
                return "[data-scroll-jump]"
            }

            constructor(e) {
                this.button = e, this.scrollContainerId = e.getAttribute("data-scroll-jump"), this.scrollDirectionInverted = "true" === e.getAttribute("data-scroll-jump-invert"), this.scrollContainer = document.querySelector(this.scrollContainerId), this.bindEvents()
            }

            isScrollFinished() {
                const e = this.scrollContainer.scrollLeft / (this.scrollContainer.scrollWidth - this.scrollContainer.clientWidth);
                return this.scrollDirectionInverted ? 0 === e : 1 === e
            }

            updateButtonState() {
                this.isScrollFinished() ? this.button.classList.add(oe) : this.button.classList.remove(oe)
            }

            bindEvents() {
                this.scrollContainer.addEventListener("scroll", (() => this.updateButtonState())), this.button.addEventListener("click", (() => {
                    if (this.isScrollFinished()) return;
                    let e = this.scrollContainer.scrollLeft;
                    const t = this.scrollContainer.clientWidth, n = this.scrollContainer.scrollWidth;
                    this.scrollDirectionInverted && (e = this.scrollContainer.scrollWidth - this.scrollContainer.clientWidth);
                    const r = n - (e + t), o = r / Math.ceil(r / t), i = this.scrollDirectionInverted ? e - o : e + o;
                    this.scrollContainer.scroll({left: i, behavior: "smooth"}), this.updateButtonState()
                })), this.updateButtonState()
            }
        }, se = "extended-domain-table__search--active", ae = "extended-domain-table__filter--active";
        const ce = class {
            static selector() {
                return "[data-table-search]"
            }

            constructor(e) {
                this.searchForm = e, this.submitButtonId = e.getAttribute("data-table-search-submit"), this.submitButton = document.querySelector(this.submitButtonId), this.closeButtonId = e.getAttribute("data-table-search-close"), this.closeButton = document.querySelector(this.closeButtonId), this.inputForm = e.querySelector("[name='prefix']"), this.filterForm = document.querySelector(`.${ae}`), this.active = this.searchForm.classList.contains(se), this.bindEvents()
            }

            bindEvents() {
                document.addEventListener("click", (e => {
                    this.searchForm.contains(e.target) || this.submitButton.contains(e.target) || this.active && (this.searchForm.classList.remove(se), this.filterForm && this.filterForm.classList.add(ae), this.active = !1)
                })), this.submitButton.addEventListener("click", (() => {
                    this.active ? this.inputForm.value && this.searchForm.submit() : (this.searchForm.classList.add(se), this.filterForm && this.filterForm.classList.remove(ae), this.inputForm.focus(), this.active = !this.active)
                })), this.closeButton.addEventListener("click", (() => {
                    this.active && (this.searchForm.classList.remove(se), this.filterForm && this.filterForm.classList.add(ae), this.active = !1)
                }))
            }
        }, le = "active";
        const ue = class {
            static selector() {
                return "[data-tooltip]"
            }

            constructor(e) {
                this.hoverSpot = e, this.popupId = e.getAttribute("data-tooltip"), this.popup = document.querySelector(this.popupId), this.active = !1;
                const t = this.popup.parentNode.getBoundingClientRect();
                this.top = t.top + window.pageYOffset - document.documentElement.clientTop, this.bindEvents()
            }

            bindEvents() {
                this.hoverSpot.addEventListener("mouseover", (e => {
                    this.popup.style.top = e.target.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop - this.top + 20 + "px", this.popup.classList.add(le)
                })), this.hoverSpot.addEventListener("mouseleave", (() => {
                    this.popup.classList.remove(le)
                }))
            }
        };
        n(5827);
        const de = class {
            static selector() {
                return "[data-pricing-options]"
            }

            constructor(e) {
                this.node = e, this.toggle = this.node.querySelector("[data-pricing-toggle]"), this.form = this.node.querySelector("[data-pricing-form]"), this.selectCurenciesField = this.node.querySelector('[name="currency"]'), this.selectTaxesField = this.node.querySelector('[name="taxes"]'), this.bindEventListeners()
            }

            bindEventListeners() {
                const e = [...document.querySelectorAll("link[data-slug]")].reduce(((e, t) => {
                    const {hreflang: n} = t, {value: r} = t.attributes["data-slug"];
                    return e[n] = r, e
                }), {}), {node: t} = this;
                this.toggle.addEventListener("click", (() => {
                    this.node.classList.add("pricing-options-bar--active")
                })), this.form.addEventListener("change", (n => {
                    n.stopPropagation();
                    const {target: r} = n, {value: o} = r;
                    if (this.form.querySelectorAll("select").forEach((e => {
                        if (n.target.name === e.name) return !0
                    })), "serviceWorker" in navigator) {
                        if ("c" === r.attributes.name.value) {
                            !async function (e, t) {
                                let {pathname: n} = window.location;
                                const r = n.split("/")[1], o = await P("locale") || r;
                                let i;
                                if (B("currency").catch((() => {
                                })), B("taxes").catch((() => {
                                })), o.includes("-")) {
                                    const e = o.split("-");
                                    ("zh" !== e[0] || e.length > 2) && e.pop(), i = e.join("-")
                                } else i = o;
                                const s = `${i}-${e}`;
                                t[s] ? (B("c").catch((() => {
                                })), j({key: "locale", value: t[s]}).catch((() => {
                                })).then((() => {
                                    new URL(window.location).searchParams.delete("c"), n = n.replace(r, t[s])
                                }))) : (j({key: "c", value: e}), j({key: "locale", value: i}).catch((() => {
                                })).then((() => {
                                    new URL(window.location).searchParams.set("c", e), n = n.replace(r, i)
                                })))
                            }(o, e);
                            const n = this.node.querySelector("select[data-address-endpoint]").attributes["data-address-endpoint"].value;
                            return void fetch(`${n}/address/countries/${o}`, {mode: "cors"}).then((async function (e) {
                                const {search: n} = window.location,
                                    r = n ? n.substring(1).split(",")[0].split("&") : [];
                                let o;
                                r.length > 0 && (o = r.reduce(((e, t) => {
                                    const [n, r] = t.split("=");
                                    return e[n] = r, e
                                }), {}));
                                const i = t.querySelector('select[name="currency"]'),
                                    s = t.querySelector('select[name="taxes"]'),
                                    a = s.attributes["data-taxes-trad"].value,
                                    c = s.attributes["data-notaxes-trad"].value,
                                    l = await e.json(), {currencies: u} = l, {taxes: d} = l;

                                function h(e, t = !1, n = "") {
                                    const r = document.createElement("option");
                                    return r.setAttribute("value", e), r.innerHTML = n || e, t && r.setAttribute("selected", "selected"), r
                                }

                                let f;
                                if (i.querySelectorAll("*").forEach((e => e.remove())), s.querySelectorAll("*").forEach((e => e.remove())), u.length > 0 && u.forEach((e => {
                                    let t;
                                    t = o && o.currency === e ? h(e, !0) : h(e), i.appendChild(t)
                                })), f = 0 === d.length || o && "no" === o.taxes ? h("no", !0, c) : h("no", !1, c), s.appendChild(f), d.length > 0) {
                                    let e;
                                    const t = a.replace("${rate}", d[0].rate.toString());
                                    e = o && "yes" === o.taxes ? h("yes", !0, t) : h("yes", !1, t), s.appendChild(e)
                                }
                            })).catch((e => {
                                throw new Error(e)
                            }))
                        }
                        if ("grid" === r.attributes.name.value && "A" === o) return void B("grid");
                        j({key: r.attributes.name.value, value: o})
                    }
                }))
            }
        };
        var he = n(7856), fe = n.n(he);

        function pe() {
            return (pe = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        const me = ({placeholder: e}) => u("div", {className: "news-feed__post"}, u("img", {
                src: e,
                alt: "",
                className: "news-feed__post-image",
                height: "150",
                width: "336"
            }), u("div", {className: "news-feed__post-title news-feed__post-title--placeholder"}), u("div", {className: "news-feed__post-description news-feed__post-description--placeholder"})),
            ve = ({
                      id: e,
                      link: t,
                      image: n,
                      placeholder: r,
                      backgroundColor: o,
                      title: i,
                      description: s
                  }) => u("a", {key: e, className: "news-feed__post", href: t}, u("img", {
                src: n || r,
                className: "news-feed__post-image",
                loading: "lazy",
                alt: "",
                height: "150",
                width: "336",
                style: o && {backgroundColor: o}
            }), u("h4", {
                className: "news-feed__post-title",
                dangerouslySetInnerHTML: {__html: i}
            }), u("div", {className: "news-feed__post-description", dangerouslySetInnerHTML: {__html: s}}));

        class ge extends f {
            constructor(e) {
                super(e), this.state = {posts: []}
            }

            componentDidMount() {
                const {feedUrl: e, feedLang: t, feedCategory: n, feedTag: r} = this.props;
                this.fetchPosts(e, null != t ? t : "en", n, r)
            }

            fetchPosts(e, t, n, r, o = "2") {
                fetch(`${e}?lang=${t}&limit=${o}${n ? `&category=${n}` : ""}${r ? `&tag=${r}` : ""}`).then((e => e.json())).then((e => null == e ? void 0 : e.map((e => {
                    var t;
                    return {
                        id: e.id,
                        title: fe().sanitize(null === (t = e.title) || void 0 === t ? void 0 : t.rendered),
                        image: e.image_src_set.x1,
                        description: fe().sanitize(e.excerpt.rendered),
                        link: e.link,
                        backgroundColor: e.color
                    }
                })))).then((e => {
                    this.setState({posts: e})
                }))
            }

            render() {
                const {posts: e} = this.state, {placeholder: t} = this.props;
                return 0 === e.length ? u(h, null, u(me, {placeholder: t}), u(me, {placeholder: t})) : e.map((e => u(ve, pe({}, e, {placeholder: t}))))
            }
        }

        ge.defaultProps = {feedCategory: null, feedTag: null}, ve.defaultProps = {image: "", backgroundColor: ""};
        const _e = "user-segments__tab--active", ye = "user-segments__tab-content--hidden";
        const be = class {
            static selector() {
                return "[data-user-segments]"
            }

            constructor(e) {
                this.container = e, this.elements = this.container.querySelectorAll("[data-id]"), this.navItem = this.container.querySelectorAll("[data-anchor]"), this.activeTabAnchor = window.location.hash.replace("#", ""), this.bindEvents()
            }

            activeNav(e) {
                e.classList.add(_e)
            }

            desactiveNav(e) {
                e.classList.remove(_e)
            }

            updateState(e) {
                this.elements.forEach((t => {
                    t.attributes["data-id"] && t.attributes["data-id"].value === this.activeTabAnchor ? (e && this.activeNav(e), t.classList.remove(ye)) : t.classList.add(ye)
                }))
            }

            bindEvents() {
                Array.prototype.map.call(this.elements, (e => e.id)).includes(this.activeTabAnchor) || (this.activeTabAnchor = void 0), !this.activeTabAnchor && this.navItem[0] && this.navItem[0].attributes["data-anchor"] && (this.activeTabAnchor = this.navItem[0].attributes["data-anchor"].value, this.activeNav(this.navItem[0])), this.activeTabAnchor && this.navItem && (this.navItem.forEach((e => {
                    e.attributes["data-anchor"].value === this.activeTabAnchor && this.activeNav(e)
                })), this.updateState()), this.navItem.forEach((e => {
                    e.addEventListener("click", (e => {
                        var t, n, r;
                        this.activeTabAnchor = (null === (t = e.currentTarget.attributes["data-anchor"]) || void 0 === t ? void 0 : t.value) || (null === (n = e.currentTarget.attributes.href) || void 0 === n ? void 0 : n.value.replace("#", "")), "object" == typeof window.history && "replaceState" in window.history && (e.preventDefault(), window.history.replaceState({}, e.currentTarget.textContent.trim(), `#${this.activeTabAnchor}`)), null !== (r = e.currentTarget.attributes["data-anchor"]) && void 0 !== r && r.value && (window.location.hash = e.currentTarget.attributes["data-anchor"].value), (e.currentTarget.attributes["data-anchor"] || e.currentTarget.attributes.href) && (this.updateState(e.currentTarget), this.navItem.forEach((e => {
                            e.attributes["data-anchor"] && e.attributes["data-anchor"].value !== this.activeTabAnchor && this.desactiveNav(e)
                        })), e.target.blur())
                    }))
                }))
            }
        }, we = "cookie-info--active";
        const ke = class {
            static selector() {
                return "[data-liveChat]"
            }

            constructor(e) {
                this.anchor = e, this.chatClosed = this.anchor.querySelector(".cookie-info__closed"), this.active = !1, this.closeChatButton = this.anchor.querySelector("[data-liveChat-close]"), this.linkChat = this.anchor.querySelectorAll("a"), this.acceptButton = this.anchor.querySelector("[data-liveChat-accept]"), this.script = document.querySelector("[data-chat-script]"), this.hasCookieZopim = !1, this.bindEvents()
            }

            openInfo() {
                this.anchor.classList.add(we), this.active = !0
            }

            closeInfo() {
                this.anchor.classList.remove(we), this.active = !1
            }

            zopimScript(e) {
                window.$zopim || function (e, t) {
                    var n = window.$zopim = function (e) {
                        n._.push(e)
                    }, r = n.s = e.createElement(t), o = e.getElementsByTagName(t)[0];
                    n.set = function (e) {
                        n.set._.push(e)
                    }, n._ = [], n.set._ = [], r.defer = !0, r.setAttribute("charset", "utf-8"), r.setAttribute("src", "https://v2.zopim.com/?DRL49mDICZUfknExghxjoOwO891X6ZN8"), n.t = +new Date, r.type = "text/javascript", o && o.parentNode && o.parentNode.insertBefore(r, o)
                }(document, "script"), window.$zopim((() => {
                    const t = window.$zopim.livechat;
                    t.setGreetings({
                        online: this.anchor.attributes["data-trad-online"].value,
                        offline: this.anchor.attributes["data-trad-offline"].value
                    }), t.prechatForm.setGreetings(this.anchor.attributes["data-trad-prechatForm"].value), t.theme.setColors({
                        badge: "#6640fe",
                        primary: "#3939b7"
                    }), t.theme.reload(), e ? ($zopim.livechat.cookieLaw.comply(), t.button.hide()) : (t.button.setHideWhenOffline(!1), t.button.show(), t.setOnConnected((() => {
                        t.setOnStatus((e => {
                            const n = window.$zopim.livechat.isChatting(),
                                r = window.$zopim.livechat.window.getDisplay();
                            "online" === e ? n || r ? (n || r) && t.button.hide() : t.button.show() : n || t.button.show()
                        }))
                    }))), t.window.onShow((() => {
                        t.window.show(), window.setTimeout((() => {
                            t.button.setHideWhenOffline(!0)
                        }), 0)
                    })), t.window.onHide((() => {
                        window.setTimeout((() => {
                            t.button.setHideWhenOffline(!1), t.button.show()
                        }), 0)
                    }))
                }))
            }

            bindEvents() {
                if (document.cookie) {
                    "1" === document.cookie.split(";").reduce(((e, t) => (e[t.split("=")[0].trim()] = t.split("=")[1].trim(), e)), {}).__zlcprivacy ? (this.hasCookieZopim = !0, this.zopimScript()) : this.anchor.style.display = "block"
                } else this.anchor.style.display = "block";
                this.hasCookieZopim || (document.addEventListener("click", (e => {
                    this.anchor.contains(e.target) || this.closeInfo()
                })), this.chatClosed.addEventListener("click", (e => {
                    this.active || this.openInfo()
                })), this.linkChat.forEach((e => {
                    e.addEventListener("click", (() => {
                        this.closeInfo()
                    }))
                })), this.acceptButton.addEventListener("click", (() => {
                    const e = location.hostname.replace(/.+?\./, "");
                    document.cookie = `__zlcprivacy=1;path=/;max-age=31536000;samesite=lax;domain=${e}`, this.zopimScript(!0), this.anchor.style.display = "none", this.closeInfo()
                })), this.closeChatButton.addEventListener("click", (() => {
                    this.closeInfo()
                })))
            }
        }, Se = "registration__form-position-error";
        const xe = class {
            static selector() {
                return "[data-registration-form]"
            }

            constructor(e) {
                this.form = e, this.button = this.form.querySelector("button"), this.containerForm = this.form.querySelector("form"), this.containerFormDefault = this.form.querySelector(".registration__form-default"), this.containerFormConfirmed = this.form.querySelector(".registration__form-confirmed"), this.badge = this.form.querySelector(".registration__badge"), this.error = this.form.querySelector(".registration__form-container-error"), this.bindEvents()
            }

            sendData(e) {
                const t = this.form.attributes["data-endpoint-newletter"].value,
                    n = this.form.attributes["data-registration-form"].value,
                    r = this.form.attributes["data-locale"].value,
                    o = Array.prototype.reduce.call(e.target.form, ((e, t) => (t.name && t.value && (e[t.name] = t.value), e)), {}), {email: i} = o;
                delete o.email;
                const s = new Headers;
                s.append("Content-Type", "application/json");
                const a = {
                    method: "POST",
                    headers: s,
                    mode: "cors",
                    body: JSON.stringify({email: i, attributes: o, mailing_lists: [n], locale: r})
                };
                t ? this.containerForm.checkValidity() && (e.preventDefault(), fetch(`${t}/subscriptions`, a).then((e => {
                    const {ok: t} = e;
                    if (!t) throw this.error.classList.add(Se), new Error(e.statusText);
                    this.error.classList.remove(Se), this.containerFormDefault.style.display = "none", this.containerFormConfirmed.style.display = "block", this.badge.style.backgroundColor = "#6640fe"
                })).catch((e => {
                    throw this.error.classList.add(Se), new Error(e)
                }))) : console.warn("Missing endpoint configuration")
            }

            bindEvents() {
                this.button.onclick = e => this.sendData(e)
            }
        };

        function Ee() {
            !function () {
                let e = [...document.querySelectorAll(".grid--masonry")];
                if (e.length && "masonry" !== getComputedStyle(e[0]).gridTemplateRows) {
                    function t() {
                        e.forEach((e => {
                            const t = getComputedStyle(e._el).gridTemplateColumns.split(" ").length;
                            e.ncol !== t && (e.ncol = t, e.items.forEach((e => e.style.removeProperty("margin-top"))), e.gap = parseFloat(getComputedStyle(e._el).gridRowGap), e.ncol > 1 && (isNaN(e.gap) && console.warn("Property `grid-row-gap` is missing", e), e.items.slice(t).forEach(((t, n) => {
                                const r = e.items[n].getBoundingClientRect().bottom, o = t.getBoundingClientRect().top;
                                t.style.marginTop = r + e.gap - o + "px"
                            }))))
                        }))
                    }

                    e = e.map((e => (e.style.alignItems = "flex-start", {
                        _el: e,
                        gap: parseFloat(getComputedStyle(e).gridRowGap),
                        items: [...e.childNodes].filter((e => 1 === e.nodeType && -1 != +getComputedStyle(e).gridColumnEnd)),
                        ncol: 0
                    }))), document.addEventListener("DOMContentLoaded", (() => {
                        t(), window.addEventListener("resize", t, !1)
                    }), !1)
                }
            }();
            for (const e of document.querySelectorAll(re.selector())) new re(e);
            for (const e of document.querySelectorAll(ie.selector())) new ie(e);
            for (const e of document.querySelectorAll(ce.selector())) new ce(e);
            for (const e of document.querySelectorAll(ue.selector())) new ue(e);
            for (const e of document.querySelectorAll(ke.selector())) new ke(e);
            for (const e of document.querySelectorAll(te.selector())) new te(e);
            for (const e of document.querySelectorAll(de.selector())) new de(e);
            for (const e of document.querySelectorAll($.selector())) new $(e);
            for (const e of document.querySelectorAll(W.selector())) new W(e);
            new G;
            for (const e of document.querySelectorAll(Z.selector())) new Z(e);
            for (const e of document.querySelectorAll(xe.selector())) new xe(e);
            for (const e of document.querySelectorAll(N.selector())) new N(e);
            for (const e of document.querySelectorAll(z.selector())) new z(e);
            for (const e of document.querySelectorAll("[data-subnav] a")) e.addEventListener("touchend", (e => {
                const t = e.currentTarget.nextElementSibling, n = t && null !== t.offsetParent;
                t && !n && (e.preventDefault(), e.currentTarget.focus())
            }));
            for (const e of document.querySelectorAll("[data-news-feed]")) {
                const t = e.querySelector(".news-feed__container"), n = e.getAttribute("data-feed-api-url"),
                    r = e.getAttribute("data-feed-lang"), o = e.getAttribute("data-feed-category"),
                    i = e.getAttribute("data-feed-tag"), s = e.getAttribute("data-feed-placeholder");
                I(u(ge, {feedUrl: n, feedLang: r, feedCategory: o, feedTag: i, placeholder: s}), t)
            }
            for (const e of document.querySelectorAll(be.selector())) new be(e);
            for (const e of document.querySelectorAll(Y.selector())) new Y(e);
            "serviceWorker" in navigator && ["click", "auxclick"].forEach((e => {
                document.addEventListener(e, (async e => {
                    if (e.target.classList.contains("footer__language-picker-link")) {
                        const {target: t} = e, {value: n} = t.attributes.hreflang;
                        e.target.classList.contains("is-region") && (B("c").catch((() => {
                        })), B("currency").catch((() => {
                        })), B("taxes").catch((() => {
                        })));
                        if (e.ctrlKey || e.shiftKey || e.metaKey || 0 !== e.button) return B("locale").catch((() => {
                        }));
                        e.preventDefault();
                        const r = await P("c");
                        return r && n.includes(r) && B("c").catch((() => {
                        })), j({key: "locale", value: n}).catch((() => {
                        })).then((() => {
                            window.location.assign(t.attributes.href.value)
                        }))
                    }
                }))
            }));
            !["/admin/", "/django-admin", "/pattern-library"].includes(window.location.pathname) && M()
        }

        window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach), /complete|interactive|loaded/.test(document.readyState) ? Ee() : document.addEventListener("DOMContentLoaded", Ee, !1), document.addEventListener("touchstart", (function () {
        }), !1), "serviceWorker" in navigator && navigator.serviceWorker.register("/service-worker.js").catch((function () {
        }))
    })()
})();
