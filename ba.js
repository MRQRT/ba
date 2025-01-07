/* _ba2_version @version: 1.0.77 */
"use strict";
function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread()
}
function _arrayWithoutHoles(e) {
    if (Array.isArray(e)) return _arrayLikeToArray(e)
}
function _iterableToArray(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
}
function _unsupportedIterableToArray(e, t) {
    var n;
    if (e) return "string" == typeof e ? _arrayLikeToArray(e, t) : "Map" === (n = "Object" === (n = Object.prototype.toString
            .call(e).slice(8, -1)) && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) :
        "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0
}
function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
    return o
}
function _nonIterableSpread() {
    throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    )
}! function () {
    var a, e = "1.0.77",
        t = location.hostname,
        n = /(dev|daily|daily2|test|localhost|\d+\.\d+\.\d+\.\d+)/.test(t),
        o = /(localhost|\d+\.\d+\.\d+\.\d+)/.test(t),
        n = n ? "https://admin-daily.yueyuechuxing.cn" : "https://admin.yueyuechuxing.cn",
        t = /^admin(\-(pre2|pre|dev|daily|daily2))?\.yueyuechuxing\.cn$/.test(t);
    (o || t) && (window._ba2 = window._ba2 || [], window._ba2.push(["conf", "mode", "history"]), window._ba2.push([
        "set", "app_id", 1]), window._ba2.push(["set", "app_version", "4.0.0"]), window._ba2.push(["set",
        "app_system", 2]), window._ba2.push(["set", "log_version", e]), window._ba2.push(["conf", "img_url", "".concat(
        n, "/h5/v1/common/log/collect")]), a = function () {
        var a = this;
        setTimeout(function () {
            var e = a.tmpData.ext && a.tmpData.ext.tab_name || null,
                t = document.querySelectorAll(".el-tabs__item.is-active,.el-radio-button.is-active"),
                n = {
                    tab_name: {}
                },
                o = 0;
            if (t.forEach(function (e) {
                    var t = e.childNodes && 1 === e.childNodes.length && e.childNodes[0].title || e.title ||
                        e.innerText;
                    t && (e.offsetWidth || e.offsetHeight || e.getClientRects().length) && (n.tab_name[
                        "tab_name_".concat(++o)] = "string" == typeof (e = t) ? (e = e.replace(
                        /\n/g, "-"), encodeURIComponent(e)) : "")
                }), JSON.stringify(n.tab_name) !== JSON.stringify(e))
                if (e && a.report({
                        event_type: "lv",
                        event_time: (new Date).getTime(),
                        ext: a.tmpData.ext
                    }), 0 < o) window._ba2.push(["setTmp", "ext", n]), a.report({
                    event_type: "pv",
                    event_time: (new Date).getTime(),
                    ext: n
                });
                else try {
                    delete a.tmpData.ext.tab_name
                } catch (e) {}
        }, 0)
    }, window._ba2.push(["afterPv", function () {
        var t = this,
            n = !1,
            o = new MutationObserver(function (e) {
                e && e.forEach && (Math.round(performance.now()), e.forEach(function (e) {
                    e && e.addedNodes && e.addedNodes.forEach && e.addedNodes.forEach(
                        function (e) {
                            !n && e.classList && e.classList.length &&
                                _toConsumableArray(e.classList).includes(
                                    "el-tabs__item") && (n = !0, a.call(t), o.disconnect())
                        })
                }))
            });
        o.observe(document, {
            childList: !0,
            subtree: !0
        }), setTimeout(function () {
            try {
                o.disconnect()
            } catch (e) {
                console.log(e)
            }
        }, 1e4)
    }]), window._ba2.push(["listen", "click", "click", [["el-form-item", ">el-form-item__label"], ["el-switch",
            "is-active"], "el-step", "el-tabs__item", ["el-tabs__item", a], "el-radio-button", [
            "el-radio-button", a], "el-radio", "el-checkbox", "el-date-editor", "el-select-dropdown__item",
        "el-table__cell"]]), window.onload = function () {
        var e = {},
            t = window.performance.memory ? {
                jsHeapSizeLimit: window.performance.memory.jsHeapSizeLimit,
                totalJSHeapSize: window.performance.memory.totalJSHeapSize,
                usedJSHeapSize: window.performance.memory.usedJSHeapSize
            } : {},
            n = window.performance.timing;
        if (n) {
            if ("function" == typeof window.PerformanceNavigationTiming) try {
                var o = window.performance.getEntriesByType("navigation")[0];
                o && (n = o)
            } catch (e) {}
            e.dnsTime = n.domainLookupEnd - n.domainLookupStart, e.appcacheTime = n.domainLookupStart - n.fetchStart,
                e.tcpTime = n.connectEnd - n.connectStart, e.reqTime = n.responseEnd - n.responseStart, e.blankTime =
                (n.domInteractive || n.domLoading) - n.fetchStart, window._ba2 && window._ba2.push(["custom_event",
                    function () {
                        this.report && this.report({
                            event_time: Date.now(),
                            event_type: "fs-page-timeing",
                            ext: {
                                pageTimes: e,
                                memory: t
                            }
                        })
                    }]);
            var a = {};
            (window.performance.getEntriesByType("resource") || []).forEach(function (e) {
                var t, n;
                e && ((t = {}).name = e.name, t.dnsTime = e.domainLookupEnd - e.domainLookupStart, t.appcacheTime =
                        e.domainLookupStart - e.fetchStart, t.tcpTime = e.connectEnd - e.connectStart, t.reqTime =
                        e.responseEnd - e.responseStart, t.encodedBodySize = e.encodedBodySize, n = t.dnsTime +
                        t.appcacheTime + t.tcpTime + t.reqTime, e && e.name && /.*\.js/.test(e.name) && (a.js ?
                            150 < n && a.js.push(t) : a.js = []), e) && e.name && /.*\.css/.test(e.name) &&
                    (a.css ? 150 < n && a.css.push(t) : a.css = [])
            }), window._ba2 && window._ba2.push(["custom_event", function () {
                var e = a.js && a.js.length,
                    t = a.css && a.css.length;
                !e && !t || 1083 < JSON.stringify(a).length || this.report && this.report({
                    event_time: Date.now(),
                    event_type: "fs-resource-timeing",
                    ext: {
                        resourceEntry: a
                    }
                })
            }])
        }
    }, o = document.createElement("script"), t = document.currentScript.src, o.src = t.replace(/[^\/]+$/,
        "_ba.js?appid=".concat(1, "&v=").concat(e)), (n = document.getElementsByTagName("script")[0]).parentNode.insertBefore(
        o, n))
}();