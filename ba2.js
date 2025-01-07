/* _ba2_version @version: 1.0.81-rc.1 */
"use strict";
function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread()
}
function _arrayWithoutHoles(e) {
    if (Array.isArray(e))
        return _arrayLikeToArray(e)
}
function _iterableToArray(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
        return Array.from(e)
}
function _unsupportedIterableToArray(e, t) {
    var n;
    if (e)
        return "string" == typeof e ? _arrayLikeToArray(e, t) : "Map" === (n = "Object" === (n = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0
}
function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, a = new Array(t); n < t; n++)
        a[n] = e[n];
    return a
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}
!function() {
    var o, e = "1.0.81-rc.1", t = location.hostname, n = /(localhost|\d+\.\d+\.\d+\.\d+)/.test(t), t = /^admin(\-(pre2|pre|dev|daily|daily2))?\.yueyuechuxing\.cn$/.test(t);
    (n || t) && (window._ba2 = window._ba2 || [],
    window._ba2.push(["conf", "mode", "history"]),
    window._ba2.push(["set", "app_id", 1]),
    window._ba2.push(["set", "app_version", "4.0.0"]),
    window._ba2.push(["set", "app_system", 2]),
    window._ba2.push(["set", "log_version", e]),
    window._ba2.push(["conf", "img_url", "/admin/v1/common/log/collect"]),
    o = function() {
        var o = this;
        setTimeout(function() {
            var e = o.tmpData.ext && o.tmpData.ext.tab_name || null
              , t = document.querySelectorAll(".el-tabs__item.is-active,.el-radio-button.is-active,.ant-tabs-tab.ant-tabs-tab-active")
              , n = {
                tab_name: {}
            }
              , a = 0;
            if (t.forEach(function(e) {
                var t = e.childNodes && 1 === e.childNodes.length && e.childNodes[0].title || e.title || e.innerText;
                t && (e.offsetWidth || e.offsetHeight || e.getClientRects().length) && (n.tab_name["tab_name_".concat(++a)] = "string" == typeof (e = t) ? (e = e.replace(/\n/g, "-"),
                encodeURIComponent(e)) : "")
            }),
            JSON.stringify(n.tab_name) !== JSON.stringify(e))
                if (e && o.report({
                    event_type: "lv",
                    event_time: (new Date).getTime(),
                    ext: o.tmpData.ext
                }),
                0 < a)
                    window._ba2.push(["setTmp", "ext", n]),
                    o.report({
                        event_type: "pv",
                        event_time: (new Date).getTime(),
                        ext: n
                    });
                else
                    try {
                        delete o.tmpData.ext.tab_name
                    } catch (e) {}
        }, 0)
    }
    ,
    window._ba2.push(["afterPv", function() {
        var t = this
          , n = !1
          , a = new MutationObserver(function(e) {
            e && e.forEach && (Math.round(performance.now()),
            e.forEach(function(e) {
                e && e.addedNodes && e.addedNodes.forEach && e.addedNodes.forEach(function(e) {
                    !n && e.classList && e.classList.length && (_toConsumableArray(e.classList).includes("el-tabs__item") || _toConsumableArray(e.classList).includes("ant-tabs-tab")) && (n = !0,
                    o.call(t),
                    a.disconnect())
                })
            }))
        }
        );
        a.observe(document, {
            childList: !0,
            subtree: !0
        }),
        setTimeout(function() {
            try {
                a.disconnect()
            } catch (e) {
                console.log(e)
            }
        }, 1e4)
    }
    ]),
    window._ba2.push(["listen", "click", "click", [["el-form-item", ">el-form-item__label"], ["el-switch", "is-active"], "el-step", "el-tabs__item", ["el-tabs__item", o], "el-radio-button", ["el-radio-button", o], "el-radio", "el-checkbox", "el-date-editor", "el-select-dropdown__item", "el-table__cell", ["ant-form-item", ">ant-form-item-label"], ["ant-switch", "ant-switch-checked"], "ant-anchor-link", "ant-tabs-tab", ["ant-tabs-tab", o], "ant-radio-wrapper", "ant-checkbox-wrapper", "ant-picker", "ant-select-item", "ant-table-cell"]]),
    window.onload = function() {
        var e = {}
          , t = window.performance.memory ? {
            jsHeapSizeLimit: window.performance.memory.jsHeapSizeLimit,
            totalJSHeapSize: window.performance.memory.totalJSHeapSize,
            usedJSHeapSize: window.performance.memory.usedJSHeapSize
        } : {}
          , n = window.performance.timing;
        if (n) {
            if ("function" == typeof window.PerformanceNavigationTiming)
                try {
                    var a = window.performance.getEntriesByType("navigation")[0];
                    a && (n = a)
                } catch (e) {}
            e.dnsTime = n.domainLookupEnd - n.domainLookupStart,
            e.appcacheTime = n.domainLookupStart - n.fetchStart,
            e.tcpTime = n.connectEnd - n.connectStart,
            e.reqTime = n.responseEnd - n.responseStart,
            e.blankTime = (n.domInteractive || n.domLoading) - n.fetchStart,
            window._ba2 && window._ba2.push(["custom_event", function() {
                this.report && this.report({
                    event_time: Date.now(),
                    event_type: "fs-page-timeing",
                    ext: {
                        pageTimes: e,
                        memory: t
                    }
                })
            }
            ]);
            var o = {};
            (window.performance.getEntriesByType("resource") || []).forEach(function(e) {
                var t, n;
                e && ((t = {}).name = e.name,
                t.dnsTime = e.domainLookupEnd - e.domainLookupStart,
                t.appcacheTime = e.domainLookupStart - e.fetchStart,
                t.tcpTime = e.connectEnd - e.connectStart,
                t.reqTime = e.responseEnd - e.responseStart,
                t.encodedBodySize = e.encodedBodySize,
                n = t.dnsTime + t.appcacheTime + t.tcpTime + t.reqTime,
                e && e.name && /.*\.js/.test(e.name) && (o.js ? 150 < n && o.js.push(t) : o.js = []),
                e) && e.name && /.*\.css/.test(e.name) && (o.css ? 150 < n && o.css.push(t) : o.css = [])
            }),
            window._ba2 && window._ba2.push(["custom_event", function() {
                var e = o.js && o.js.length
                  , t = o.css && o.css.length;
                !e && !t || 1083 < JSON.stringify(o).length || this.report && this.report({
                    event_time: Date.now(),
                    event_type: "fs-resource-timeing",
                    ext: {
                        resourceEntry: o
                    }
                })
            }
            ])
        }
    }
    ,
    n = document.createElement("script"),
    t = document.currentScript.src,
    n.src = t.replace(/[^\/]+$/, "_ba.js?appid=".concat(1, "&v=").concat(e)),
    (t = document.getElementsByTagName("script")[0]).parentNode.insertBefore(n, t))
}();
