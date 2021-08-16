/**
 * SelectJs library and framework of JavaScript
 * @version v1
 * @author Housseyn Cheriet
 * @copyright 脗漏2021 Housseyn Cheriet
 * Released under the MIT license
 **/
! function(b) {
    for (var r = 0, e = ["ms", "moz", "webkit", "o"], n = e.length; - 1 < --n && !b.requestAnimationFrame;) b.requestAnimationFrame = b[e[n] + "RequestAnimationFrame"], b.cancelAnimationFrame = b[e[n] + "CancelAnimationFrame"] || b[e[n] + "CancelRequestAnimationFrame"];
    b.requestAnimationFrame || (b.requestAnimationFrame = function(e, n) {
        var t = (new Date).getTime(),
            a = Math.max(0, 16 - (t - r)),
            c = b.setTimeout(function() {
                e(t + a)
            }, a);
        return r = t + a, c
    }), b.cancelAnimationFrame || (b.cancelAnimationFrame = function(e) {
        clearTimeout(e)
    })
    
    var _touchEv = "ontouchstart" in window,
        touchEvent = {
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
        };
    var bindEvent = function(e, n, t) {
        if (_touchEv && touchEvent[t[0]] != undefined)
            t[0] = touchEvent[t[0]];
        e.addEventListener ? "e" == t[2] ? e.addEventListener(t[0], n, t[1]) :
         "r" == t[2] && e.removeEventListener(t[0], n, t[1]) : 
         e.attachEvent && ("e" == t[2] ? 
            e.attachEvent("on" + t[0], function() {
            n.call(event.srcElement, event)
        }) : 
            "r" == t[2])
    };

    function checkValEvent(nn, n, n2, b) {
        if ("number" == typeof b)
            return [nn[b], nn[b] != undefined ? nn[b] : (n2 != undefined ? n2 : n)];
        else
            return [, n2 != undefined ? n2 : n];
    }
    b.select = function() {
        for (var e, b = 0, bb = 0, n = ["click", !1, "e"], n2, n3, nn = {}, t = [], a = [], a2 = [], aa = [], c = 0; void 0 !== arguments[c]; c++)
            if ("string" == typeof arguments[c]) 0 === arguments[c].search("e:") || 0 === arguments[c].search("r:") ?
                (e = arguments[c].split(":"), n[2] = e[0], 2 == e.length && (ev1 = e[1].split("|"), allEvent.includes(ev1[0]) && (n[0] = ev1[0], n[1] = !1, void 0 === ev1[1] || "true" !== ev1[1] && "false" !== ev1[1] || (n[1] = "true" === ev1[1]))) &&
                    "number" == typeof arguments[c + 1] && (nn[bb] = [...n])
                ) :
                ((t = []), Array.prototype.push.apply(t, document.querySelectorAll(arguments[c])),
                    0 != t.length &&
                    (arguments[c + 1] == undefined || "function" == typeof arguments[c + 1] || ("string" == typeof arguments[c + 1] && 0 !== arguments[c + 1].search("e:") && 0 !== arguments[c + 1].search("r:"))) &&
                    (Array.prototype.push.apply(aa, t), Array.prototype.push.apply(a, t), Array.prototype.push.apply(a2, t))
                );
            else if ("number" == typeof arguments[c]) {
            aa.push(t[arguments[c]]);
            a.push(t[arguments[c]], bb);
            a2.push(t[arguments[c]], bb);
            bb++;
        } else if (Array.isArray(arguments[c])) Array.prototype.push.apply(aa, arguments[c]), Array.prototype.push.apply(a, arguments[c]);
        else if ("object" == typeof arguments[c]) aa.push(arguments[c]), a.push(arguments[c]);
        else if ("function" == typeof arguments[c]) {
            if ("mySelectedFunc" == (arguments[c].toString().match(/^function\s*([^\s(]+)/) || [])[1]) 0 == a.length && (a = t), 0 == a.length ? arguments[c]() : (arguments[c](copy(a2), copy(n), nn), a2 = []);
            else if (0 == a.length && (a = t), 0 == a.length) arguments[c]();
            else {
                for (b; void 0 !== a[b]; b++) {
                    if ("number" != typeof a[b]) {
                        n3 = checkValEvent(nn, n, n2, a[b + 1]);
                        if (n3[0]) n2 = n3[0];
                        bindEvent(a[b], arguments[c], n3[1]);
                    }
                }
            }
        }
        if (0 != aa.length) return 1 == aa.length ? aa[0] : aa
    }
    b.hideShow = function() {
        var all = arguments;
        return function mySelectedFunc(el, ev, evv) {
            var uu = [],
                hsElem = [],
                hsDisp = [
                    ["none", ""]
                ],
                hsStyle = [],
                bolDisp = 1,
                getStl = true,
                ev2, ev3;
            var objDisp = {};
            if (null == el) {
                help();
                hideShow2();
            } else {
                if (el) {
                    if (!Array.isArray(el))
                        el = [el]
                }
                for (var u = 0; void 0 !== el[u]; u++) {
                    if ("number" != typeof el[u])
                        uu.push(el[u]);
                }
                help();
                for (var m = 0; m < el.length; m++) {
                    if ("number" != typeof el[m]) {
                        ev3 = checkValEvent(evv, ev, ev2, el[m + 1]);
                        if (ev3[0]) ev2 = ev3[0];
                        bindEvent(el[m], hideShow2, ev3[1])
                    }
                }
            }

            function hideShow2() {
                bolDisp = bolDisp == 1 ? 0 : 1;
                for (var m = 0; m < hsDisp.length; m++) {
                    for (var n = 0; n < hsElem[m].length; n++) {
                        if (getStl && (hsDisp[m][0] == "" || hsDisp[m][1] == "")) {
                            objDisp["_" + m + "" + n] = getStyle(hsElem[m][n], 'display');
                        }
                        if (hsDisp[m][bolDisp] == "") {
                            hsElem[m][n].style.display = objDisp["_" + m + "" + n];
                        } else {
                            hsElem[m][n].style.display = hsDisp[m][bolDisp];
                        }
                    }
                }
                if (getStl)
                    getStl = false;
            }

            function help() {
                if (all.length == 0) {
                    hsElem = [uu];
                } else {
                    var spDisp, spElem = [],
                        j = 0,
                        bolDispString = true;
                    for (var i = 0; i < all.length; i++) {
                        if (bolDispString && "string" == typeof all[i]) {
                            var sp = all[i].split("|");
                            spDisp = [sp[0]];
                            if (sp[1] != undefined) {
                                spDisp[1] = sp[1];
                            } else
                                spDisp[1] = "";
                            if (j == 0) {
                                hsDisp = [spDisp];
                                j++;
                            } else
                                hsDisp.push(spDisp);
                            bolDispString = false;
                        } else {
                            bolDispString = true;
                            if (Array.isArray(all[i])) {
                                Array.prototype.push.apply(spElem, all[i]);
                            } else if (typeof all[i] === "object") {
                                spElem.push([all[i]]);
                            }
                            if (all[i + 1] == undefined || typeof all[i + 1] == "string") {
                                hsElem.push(spElem);
                                spElem = [];
                            }
                        }
                    }
                }
            }
        }
    }
    b.drag = function() {
        var all = arguments;
        return function mySelectedFunc(el, ev, evv) {
            var uu = [],
                e = [
                    ["mousedown", !1, "e"],
                    ["mousemove", !1, "e"],
                    ["mouseup", !1, "e"]
                ],
                ev2, ev3;
            var draged = [];
            whereDraged = [document.body];
            var j = 0,
                k = 0,
                inThis = false;
            if (null == el) {
                help();
                darg2(draged, whereDraged, e)("no");
            } else {
                if (el) {
                    if (!Array.isArray(el))
                        el = [el]
                }
                for (var u = 0; void 0 !== el[u]; u++) {
                    if ("number" != typeof el[u])
                        uu.push(el[u]);
                }
                help();
                for (var m = 0; m < el.length; m++) {
                    if ("number" != typeof el[m]) {
                        ev3 = checkValEvent(evv, ev, ev2, el[m + 1]);
                        if (ev3[0]) ev2 = ev3[0];
                        bindEvent(el[m], darg2(draged, whereDraged, e), ev3[1])
                    }
                }
            }

            function help() {
                if (all.length == 0) {
                    inThis = true;
                    draged = uu;
                } else {
                    for (var i = 0; i < all.length; i++) {
                        if ("string" == typeof all[i] && 0 === all[i].search("e:")) {
                            var sp = all[i].split(":");
                            if (sp.length == 2) {
                                var sp2 = sp[1].split("|");
                                if (allEvent.includes(sp2[0]))
                                    e[j][0] = sp2[0];
                                if (typeof sp2[1] === "boolean")
                                    e[j][1] = sp2[1];
                            }
                            j++;
                        } else if (all[i] === 0 && k == 0) {
                            inThis = true;
                            draged = uu;
                            k++;
                        } else {
                            if (!Array.isArray(all[i])) {
                                all[i] = [all[i]];
                            }
                            if (k == 0) {
                                draged = all[i];
                            } else if (k == 1) {
                                whereDraged = all[i];
                            }
                            k++;
                        }
                    }
                }
            }

            function darg2() {
                return function drag3(eve) {
                    var objPrprt = {},
                        isDown = [];
                    bindEvent(document.body, mouseMove(draged, whereDraged[0]), e[1])
                    bindEvent(document.body, mouseUp, e[2])
                    if (eve == "no") {
                        for (var h = 0; h < draged.length; h++) {
                            objPrprt[h] = {};
                            bindEvent(draged[h], mouseDown(h, whereDraged[0]), e[0])
                        }
                    } else {
                        if (!inThis) {
                            for (var m = 0; m < el.length; m++) {
                                bindEvent(el[m], drag3, [ev[0], ev[1], 'r']);
                            }
                            inThis = true;
                            for (var h = 0; h < draged.length; h++) {
                                objPrprt[h] = {};
                                bindEvent(draged[h], mouseDown(h, whereDraged[0]), e[0])
                            }
                        } else {
                            bindEvent(this, drag3, [ev[0], ev[1], 'r']);
                            objPrprt[0] = {};
                            bindEvent(this, mouseDown(0, whereDraged[0]), e[0])
                        }
                    }

                    function mouseMove(ele, whereD) {
                        return function(event) {
                            event.stopPropagation();
                            var i;
                            for (var ii = 0; ii < isDown.length; ii++) {
                                i = isDown[ii];
                                if (objPrprt[i].isDown) {
                                    bndWD = whereD.getBoundingClientRect();
                                    bnd = ele[i].getBoundingClientRect();
                                    if (_touchEv) {
                                        var x = event.changedTouches[0].clientX - objPrprt[i].shiftX;
                                        var y = event.changedTouches[0].clientY - objPrprt[i].shiftY;
                                    } else {
                                        var x = event.pageX - objPrprt[i].shiftX;
                                        var y = event.pageY - objPrprt[i].shiftY;
                                    }
                                    if (x < objPrprt[i].leftMin)
                                        x = objPrprt[i].leftMin;
                                    else
                                    if (x > objPrprt[i].leftMax)
                                        x = objPrprt[i].leftMax;
                                    if (y < objPrprt[i].topMin)
                                        y = objPrprt[i].topMin;
                                    else
                                    if (y > objPrprt[i].topMax)
                                        y = objPrprt[i].topMax;
                                    ele[i].style.top = y + 'px';
                                    ele[i].style.left = x + 'px';
                                }
                            }
                        }
                    }

                    function mouseDown(i, whereD) {
                        return function(event) {
                            event.stopPropagation();
                            if (!isDown.includes(i))
                                isDown.push(i);
                            objPrprt[i].isDown = true;
                            var left_ = getNumber(getStyle(this, 'left')),
                                top_ = getNumber(getStyle(this, 'top'));
                            if (left_)
                                left_ = Number(left_[0]);
                            else
                                left_ = 0;
                            if (top_)
                                top_ = Number(top_[0]);
                            else
                                top_ = 0;
                            var bndWD = whereD.getBoundingClientRect(),
                                bnd = this.getBoundingClientRect();
                            objPrprt[i].leftMin = bndWD.left - bnd.left + left_;
                            objPrprt[i].leftMax = bndWD.right - bnd.right + left_;
                            objPrprt[i].topMin = bndWD.top - bnd.top + top_;
                            objPrprt[i].topMax = bndWD.bottom - bnd.bottom + top_;
                            if (_touchEv) {
                                objPrprt[i].shiftX = event.changedTouches[0].clientX - left_;
                                objPrprt[i].shiftY = event.changedTouches[0].clientY - top_;
                            } else {
                                objPrprt[i].shiftX = event.pageX - left_;
                                objPrprt[i].shiftY = event.pageY - top_;
                            }
                        }
                    }

                    function mouseUp(event) {
                        event.stopPropagation();
                        isDown = false;
                        for (var i = 0; i < isDown.length; i++) {
                            objPrprt[isDown[i]].isDown = false;
                        }
                        isDown = [];
                    }
                }
            }
        }

        function mouseDown(event) {
            event.stopPropagation();
            isDown = true;
            var left_ = getNumber(getStyle(this, 'left')),
                top_ = getNumber(getStyle(this, 'top'));
            if (left_)
                left_ = Number(left_[0]);
            else
                left_ = 0;
            if (top_)
                top_ = Number(top_[0]);
            else
                top_ = 0;
            bndWD = whereElem.getBoundingClientRect();
            bnd = elem.getBoundingClientRect();
            shiftLeftMin = bndWD.left - bnd.left + left_;
            shiftLeftMax = bndWD.right - bnd.right + left_;
            shiftTopMin = bndWD.top - bnd.top + top_;
            shiftTopMax = bndWD.bottom - bnd.bottom + top_;
            if (_touchEv) {
                shiftX = event.changedTouches[0].clientX - left_;
                shiftY = event.changedTouches[0].clientY - top_;
            } else {
                shiftX = event.pageX - left_;
                shiftY = event.pageY - top_;
            }
        }

        function mouseUp(event) {
            event.stopPropagation();
            isDown = false;
        }
    }
    b.animate = function() {
        typeof arguments;
        var s = arguments,
            storeTransform = [];
        var s2 = copy(Array.prototype.slice.call(arguments));
        return function mySelectedFunc(e, n, nn) {
            //var s2 = copy(Array.prototype.slice.call(s));
            var n2, n3, x, y, fromY, toY, xFrom, xTo, objFrom, objTo, t, r = [],
                rr = [],
                bolNext = false,
                a = {
                    color: {},
                    transform: {},
                    from: {},
                    to: {}
                };
            help();

            function help() {
                if (e != undefined) {
                    if (!Array.isArray(e)) {
                        e = [e];
                    }
                    rr = e;
                }
                var _2ndFor = false;
                for (var c = 0, sc = s.length; c < sc; c++) {
                    y = 0;
                    if (bolNext || (Array.isArray(s2[c]) || isElement(s2[c]))) {
                        if (_2ndFor) {
                            Array.isArray(s2[c]) || (s2[c] = [s2[c]]), Array.prototype.push.apply(r, s2[c]);
                        }
                        bolNext = false;
                    } else if (typeof s2[c] === 'object' && s2[c] !== null) {
                        if (_2ndFor) {
                            if (c == 0) {
                                for (var u = 0; void 0 !== e[u]; u++) {
                                    if ("number" != typeof e[u])
                                        r.push(e[u]);
                                }
                            }
                            if (e != undefined) {
                                for (var j = 0; void 0 !== rr[j]; j++) {
                                    if ("number" != typeof rr[j]) {
                                        n3 = checkValEvent(nn, n, n2, rr[j + 1]);
                                        if (n3[0]) n2 = n3[0];
                                        bindEvent(rr[j], o(r, s, s2, c), n3[1]);
                                    }
                                }
                            } else
                                o(r, s, s2, c)();
                        } else {
                            bolNext = false;
                            objFrom = false, objTo = false;
                            if ("object" == typeof s2[c].from)
                                objFrom = true;
                            if ("object" == typeof s2[c].to)
                                objTo = true;
                            if (s2[c].typeAnimation == "vibration" && s2[c].vibrationStep == undefined) {
                                s2[c].vibrationStep = 6;
                            } else {
                                (t = getNumber(s2[c].typeAnimation)) && 4 == t.length && (s2[c].cubicbezier = t, s2[c].typeAnimation = "cubicbezier")
                            }
                            if (s2[c].boucle && s2[c].boucleType == undefined)
                                s2[c].boucleType = "return";
                            !s2[c].callback &&
                                (Array.isArray(s2[c].property) || s2[c].property != undefined && (s2[c].property = [s2[c].property])) && s2[c].property.forEach(function(e) {
                                    if (!objFrom)
                                        xFrom = s2[c].from;
                                    else
                                        fromY = s2[c]["from"][y];
                                    if (!objTo)
                                        xTo = s2[c].to;
                                    else
                                        toY = s2[c]["to"][y];
                                    if ("object" == typeof e) {
                                        thisItem = Object.keys(e)[0], Array.isArray(e[thisItem]) || (e[thisItem] = [e[thisItem]]);
                                        ((-1 != thisItem.toLowerCase().indexOf("color") && (a.color[thisItem] = whoproperty[thisItem])) ||
                                            -1 != thisItem.toLowerCase().indexOf("transform")) &&
                                        (x = 0, a["from"][thisItem] = {}, a["to"][thisItem] = {},
                                            e[thisItem].forEach(function(e) {
                                                if (thisItem.toLowerCase() == "transform")
                                                    a[thisItem][e] = 0;
                                                else
                                                    a.color[thisItem][e] = 0;
                                                if (objFrom) {
                                                    if (fromY[thisItem] != undefined) {
                                                        if (typeof fromY[thisItem] == "number") {
                                                            xFrom = a["from"][thisItem][e] = fromY[thisItem];
                                                        } else
                                                        if (Array.isArray(fromY[thisItem])) {
                                                            if (fromY[thisItem][x] != undefined) {
                                                                xFrom = a["from"][thisItem][e] = fromY[thisItem][x];
                                                            } else
                                                                a["from"][thisItem][e] = xFrom;
                                                        } else
                                                        if (fromY[thisItem][e] != undefined) {
                                                            xFrom = a["from"][thisItem][e] = fromY[thisItem][e];
                                                        }
                                                    } else
                                                        a["from"][thisItem][e] = xFrom;
                                                } else {
                                                    a["from"][thisItem][e] = s2[c].from;
                                                }
                                                if (objTo) {
                                                    if (toY[thisItem] != undefined) {
                                                        if (typeof toY[thisItem] == "number") {
                                                            xTo = a["to"][thisItem][e] = toY[thisItem];
                                                        } else
                                                        if (Array.isArray(toY[thisItem])) {
                                                            if (toY[thisItem][x] != undefined) {
                                                                xTo = a["to"][thisItem][e] = toY[thisItem][x];
                                                            } else
                                                                a["to"][thisItem][e] = xTo;
                                                        } else
                                                        if (toY[thisItem][e] != undefined) {
                                                            xTo = a["to"][thisItem][e] = toY[thisItem][e];
                                                        }
                                                    } else
                                                        a["to"][thisItem][e] = xTo;
                                                } else {
                                                    a["to"][thisItem][e] = s2[c].to;
                                                }
                                                x++;
                                            }), y++)
                                    } else {
                                        if (objFrom) {
                                            if (fromY[e] != undefined) {
                                                xFrom = a["from"][e] = fromY[e];
                                            } else
                                            if (fromY != undefined) {
                                                xFrom = a["from"][e] = fromY;
                                            }
                                            a["from"][e] = xFrom;
                                        } else {
                                            a["from"][e] = s2[c].from;
                                        }
                                        if (objTo) {
                                            if (toY[e] != undefined) {
                                                xTo = a["to"][e] = toY[e];
                                            } else
                                            if (toY != undefined) {
                                                xTo = a["to"][e] = toY;
                                            } else
                                                a["to"][e] = xTo;
                                        } else {
                                            a["to"][e] = s2[c].to;
                                        }
                                        y++;
                                    }
                                });
                            s2[c].storeValueAnim = copy(a);
                            a = {
                                color: {},
                                transform: {},
                                from: {},
                                to: {}
                            };
                        }
                        if (s[c + 1] != undefined && (Array.isArray(s[c + 1]) || isElement(s[c + 1]))) {
                            bolNext = true;
                            r = [];
                        }
                    }
                    if (c == sc - 1 && !_2ndFor) {
                        bolNext = false;
                        _2ndFor = true;
                        c = -1;
                    }
                }
            }

            function o(r, ss_, sss, ccc) {
                var l = ss_[ccc],
                    typeAnimationReal = sss[ccc].typeAnimation,
                    typeAnimationImpair = typeAnimationReal;
                //l2.timeline , l2.startafter , l2.delay ... same of : l.timeline , l.startafter , l.delay
                if (!isNaN(Number(l.timeline)))
                    l.timeline = Number(l.timeline);
                else
                    l.timeline = 0;
                if (!isNaN(Number(l.startafter)))
                    l.startafter = Number(l.startafter);
                else
                    l.startafter = 0;
                if (l.boucle) {
                    if (!isNaN(Number(l.delay)))
                        l.delay = Number(l.delay);
                    else
                        l.delay = undefined;
                    if (l.boucleType == "returnRepeat" || l.boucleType == "repeatReturn") {
                        typeAnimationImpair = Easing[typeAnimationReal][1];
                    }
                }

                
                        
                        
                return function e(n) {


                    var diffTimePause=0,pauseBol,tPause;
                    if (l.pause) {
                            l.pause[1]=l.pause[1].replace('e:','r:');
                            select(...l.pause);
                            l.pause[1]=l.pause[1].replace('r:','e:');
                            if (Array.isArray(l.pause)) {
                                l.pause[2]=function pause() {
                                   pauseBol  ? (pauseBol = false, diffTimePause += Date.now() - tPause) : (pauseBol = true, tPause = Date.now());
                                };
                                select(...l.pause);
                                
                                                        }
                               
                        }
                            
                        
                    var s = Date.now();
                    var t, a, aa, c
                    if (l.timeline != 0) {
                        r.forEach(function(e, index) {
                            ee([e], index, l.timeline * index + l.startafter, l.startafter);
                        })
                    } else {
                         ee(r, 0, 0 + l.startafter, l.startafter);
                    }

                    function ee(r, idx, difT, strtA) {
                        if (l.animFram)
                            cancelAnimationFrame(l.animFram[idx]);
                        else
                            l.animFram = {};
                        var l2 = copy(sss[ccc]);
                            
                            
                        l2.changetypeAnim = l2.typeAnimation;
                        l2.countSkip = 0;
                        l2.countSkip2 = 0;
                        var cS, sVidx = l2.storeValueAnim,
                            storeTransform = copy(l2.storeValueAnim.transform),
                            storeColor = copy(l2.storeValueAnim.color);
                            function ee2() {
                            if (pauseBol) {
                                l.animFram[idx] = requestAnimationFrame(ee2);
                                return;
                            }
                            var sVidx2, delay = 0,
                                b = Date.now() - (s + difT + diffTimePause);
                               
                                    
                            if (b >= 0) {
                                if (l2.boucle) {
                                    if (l2.delay != undefined) {
                                        delay = l2.delay;
                                        cS = Math.floor((b + delay) / (l2.duration + delay))
                                        if (cS != l2.countSkip) {
                                            l2.countSkip = cS;
                                            //if(!l2.skipDelay) //important
                                            l2.skip = l2.skipDelay = true;
                                        } else {
                                            l2.skip = false;
                                            if (b % (l2.duration + delay) < l2.duration) {
                                                l2.skipDelay = false;
                                                if (l2.countSkip2 != l2.countSkip) {
                                                    l2.countSkip2 = l2.countSkip;
                                                    l2.skip2 = true;
                                                } else
                                                    l2.skip2 = false;
                                            }
                                        }
                                    } else {
                                        cS = Math.floor((b + delay) / (l2.duration + delay))
                                        if (cS != l2.countSkip) {
                                            l2.countSkip = l2.countSkip2 = cS;
                                            l2.skip = l2.skip2 = true;
                                        } else {
                                            l2.skip = l2.skip2 = false;
                                        }
                                    }
                                    l2.timeEasing = b % (l2.duration + delay);
                                    if (l2.skip) {
                                        l2.impair ? (l2.impair = false, l2.changetypeAnim = typeAnimationReal) :
                                            (l2.impair = true, l2.changetypeAnim = typeAnimationImpair);
                                        if (l2.impair || l2.boucleType.indexOf("repeat") == 0)
                                            l2.timeEasing = l2.duration;
                                        else
                                            l2.timeEasing = 0;
                                    } else if (!l2.skipDelay) {
                                        if (l2.impair && l2.boucleType.indexOf("return") == 0)
                                            l2.timeEasing = l2.duration - l2.timeEasing;
                                    }
                                } else {
                                    b < l2.duration ? l2.timeEasing = b : l2.timeEasing = l2.duration;
                                }
                                if (!l2.skipDelay || l2.skip) {
                                    a = Easing[l2.changetypeAnim][0](l2.timeEasing, 0, 1, l2.duration, l2, idx);
                                    if (l2.callback)
                                        r.forEach(function(el, index) {
                                            l2.callback(el, a, l2, index);
                                        });
                                    else
                                        l2.property.forEach(function(e) {
                                            if (t = Object.keys(e)[0], "transform" == t.toLowerCase() && null != sVidx[t]) {
                                                e.transform.forEach(function(e) {
                                                    aa = sVidx["from"][t][e] + a * (sVidx["to"][t][e] - sVidx["from"][t][e]);
                                                    r.forEach(function(e2) {
                                                        storeTransform[e] = aa
                                                    });
                                                });
                                                c = "";
                                                Object.keys(storeTransform).forEach(key => {
                                                    c += " " + repalce[key].replace("*", storeTransform[key])
                                                });
                                                r.forEach(function(el) {
                                                    el.style.transform = c;
                                                });
                                            } else if (-1 != t.toLowerCase().indexOf("color") && null != sVidx.color) {
                                                for (var n in e[t].forEach(function(e) {
                                                        aa = sVidx["from"][t][e] + a * (sVidx["to"][t][e] - sVidx["from"][t][e]);
                                                        storeColor[t][e] = aa
                                                    }), c = repalce.rgba, color)
                                                    c = c.replace(new RegExp(n, "g"), storeColor[t][n]);
                                                r.forEach(function(el) {
                                                    el.style[t] = c
                                                })
                                            } else "string" == typeof e && (t = e), c = (l2.px == "%" ? repalce[t].replace("px", "%") : repalce[t]).replace("*", sVidx["from"][t] + a * (sVidx["to"][t] - sVidx["from"][t])), r.forEach(function(e) {
                                                e.style[t] = c
                                            })
                                        });
                                    //l2.skip=false;
                                }
                            }
                            (l2.boucle || b < l2.duration) && (l.animFram[idx] = requestAnimationFrame(ee2))
                        }
                        ee2();
                    }
                }
            }
        }
    }
    var transformproperty = ["transform", "translateX", "translateY", "translateZ", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "skewX", "skewY"],
        rgbaproperty = ["rgbR", "rgbG", "rgbB", "rgbA"],
        color = {
            rgbR: 255,
            rgbG: 255,
            rgbB: 255,
            rgbA: 1
        };
    whoproperty = {
        color: color,
        background: color,
        backgroundColor: color,
        borderColor: color
    };
    var repalce = {
            zIndex: "*",
            left: "*px",
            top: "*px",
            bottom: "*px",
            right: "*px",
            width: "*px",
            height: "*px",
            minWidth: "*px",
            minHeight: "*px",
            maxWidth: "*px",
            maxHeight: "*px",
            padding: "*px",
            margin: "*px",
            borderRadius: "*%",
            borderWidth: "*px",
            borderTopWidth: "*px",
            borderRightWidth: "*px",
            borderBottomWidth: "*px",
            borderLeftWidth: "*px",
            borderImageWidth: "*px",
            strokeWidth: "*px",
            strokeHeight: "*px",
            strokeOpacity: "*",
            opacity: "*",
            translateX: "translateX(*px)",
            translateY: "translateY(*px)",
            translateZ: "translateZ(*px)",
            rotateX: "rotateX(*deg)",
            rotateY: "rotateY(*deg)",
            rotateZ: "rotateZ(*deg)",
            scale: "scale(*)",
            scaleX: "scaleX(*)",
            scaleY: "scaleY(*)",
            skewX: "skewX(*deg)",
            skewY: "skewY(*deg)",
            rgbR: "rgba(*,",
            rgbG: "*,",
            rgbB: "*,",
            rgba: "rgba(rgbR,rgbG,rgbB,rgbA)",
            opacity: "*"
        },
        Easing = {
            linear: [function(e, n, t, a) {
                return t * e / a + n
            }, "linear"],
            quadin: [function(e, n, t, a) {
                return t * (e /= a) * e + n
            }, "quadout"],
            quadout: [function(e, n, t, a) {
                return -t * (e /= a) * (e - 2) + n
            }, "quadin"],
            quadinout: [function(e, n, t, a) {
                return (e /= a / 2) < 1 ? t / 2 * e * e + n : -t / 2 * (--e * (e - 2) - 1) + n
            }, "quadoutin"],
            quadoutin: [function(e, n, t, a) {
                var p = e / a,
                    p0;
                if (p < 0.5) {
                    p0 = 1 - 2 * p;
                    return t * (0.5 * (1 - (p0 * p0))) + n;
                } else {
                    p0 = p * 2 - 1;
                    return t * (0.5 * (p0 * p0) + 0.5) + n;
                }
            }, "quadinout"],
            cubicin: [function(e, n, t, a) {
                return t * (e /= a) * e * e + n
            }, "cubicout"],
            cubicout: [function(e, n, t, a) {
                return t * ((e = e / a - 1) * e * e + 1) + n
            }, "cubicin"],
            cubicinout: [function(e, n, t, a) {
                return (e /= a / 2) < 1 ? t / 2 * e * e * e + n : t / 2 * ((e -= 2) * e * e + 2) + n
            }, "cubicoutin"],
            cubicoutin: [function(e, n, t, a) {
                var p = e / a,
                    p0;
                if (p < 0.5) {
                    p0 = 1 - 2 * p;
                    return t * (0.5 * (1 - (p0 * p0 * p0))) + n;
                } else {
                    p0 = p * 2 - 1;
                    return t * (0.5 * (p0 * p0 * p0) + 0.5) + n;
                }
            }, "cubicinout"],
            quartin: [function(e, n, t, a) {
                return t * (e /= a) * e * e * e + n
            }, "quartout"],
            quartout: [function(e, n, t, a) {
                return -t * ((e = e / a - 1) * e * e * e - 1) + n
            }, "quartin"],
            quartinout: [function(e, n, t, a) {
                return (e /= a / 2) < 1 ? t / 2 * e * e * e * e + n : -t / 2 * ((e -= 2) * e * e * e - 2) + n
            }, "quartoutin"],
            quartoutin: [function(e, n, t, a) {
                var p = e / a,
                    p0;
                if (p < 0.5) {
                    p0 = 1 - 2 * p;
                    return t * (0.5 * (1 - (p0 * p0 * p0 * p0))) + n;
                } else {
                    p0 = p * 2 - 1;
                    return t * (0.5 * (p0 * p0 * p0 * p0) + 0.5) + n;
                }
            }, "quartinout"],
            quintin: [function(e, n, t, a) {
                return t * (e /= a) * e * e * e * e + n
            }, "quintout"],
            quintout: [function(e, n, t, a) {
                return t * ((e = e / a - 1) * e * e * e * e + 1) + n
            }, "quintin"],
            quintinout: [function(e, n, t, a) {
                return (e /= a / 2) < 1 ? t / 2 * e * e * e * e * e + n : t / 2 * ((e -= 2) * e * e * e * e + 2) + n
            }, "quintoutin"],
            quintoutin: [function(e, n, t, a) {
                var p = e / a,
                    p0;
                if (p < 0.5) {
                    p0 = 1 - 2 * p;
                    return t * (0.5 * (1 - (p0 * p0 * p0 * p0 * p0))) + n;
                } else {
                    p0 = p * 2 - 1;
                    return t * (0.5 * (p0 * p0 * p0 * p0 * p0) + 0.5) + n;
                }
            }, "quintinout"],
            sinein: [function(e, n, t, a) {
                return -t * Math.cos(e / a * (Math.PI / 2)) + t + n
            }, "sineout"],
            sineout: [function(e, n, t, a) {
                return t * Math.sin(e / a * (Math.PI / 2)) + n
            }, "sinein"],
            sineinout: [function(e, n, t, a) {
                return -t / 2 * (Math.cos(Math.PI * e / a) - 1) + n
            }, "sineoutin"],
            sineoutin: [function(e, n, t, a) {
                var p = e / a,
                    p0;
                if (p < 0.5) {
                    p0 = 1 - 2 * p;
                    return t * (0.5 * (1 - (1 - Math.cos(p0 * Math.PI / 2)))) + n;
                } else {
                    p0 = p * 2 - 1;
                    return t * (0.5 * (1 - Math.cos(p0 * Math.PI / 2)) + 0.5) + n;
                }
            }, "sineinout"],
            expoin: [function(e, n, t, a) {
                return 0 == e ? n : t * Math.pow(2, 10 * (e / a - 1)) + n
            }, "expoout"],
            expoout: [function(e, n, t, a) {
                return e == a ? n + t : t * (1 - Math.pow(2, -10 * e / a)) + n
            }, "expoin"],
            expoinout: [function(e, n, t, a) {
                return 0 == e ? n : e == a ? n + t : (e /= a / 2) < 1 ? t / 2 * Math.pow(2, 10 * (e - 1)) + n : t / 2 * (2 - Math.pow(2, -10 * --e)) + n
            }, "expooutin"],
            expooutin: [function(e, n, t, a) {
                var p = e / a,
                    p0;
                if (p == 0) {
                    return n;
                } else if (p == 1) {
                    return n + t;
                } else
                if (p < 0.5) {
                    p0 = 1 - 2 * p;
                    return t * (0.5 * (1 - (Math.pow(2, 10 * (p0 - 1))))) + n;
                } else {
                    p0 = p * 2 - 1;
                    return t * (0.5 * (Math.pow(2, 10 * (p0 - 1))) + 0.5) + n;
                }
            }, "expoinout"],
            circin: [function(e, n, t, a) {
                return -t * (Math.sqrt(1 - (e /= a) * e) - 1) + n
            }, "circout"],
            circout: [function(e, n, t, a) {
                return t * Math.sqrt(1 - (e = e / a - 1) * e) + n
            }, "circin"],
            circinout: [function(e, n, t, a) {
                return (e /= a / 2) < 1 ? -t / 2 * (Math.sqrt(1 - e * e) - 1) + n : t / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + n
            }, "circoutin"],
            circoutin: [function(e, n, t, a) {
                var p = e / a,
                    p0;
                if (p < 0.5) {
                    p0 = 1 - 2 * p;
                    return t * (0.5 * Math.sqrt(1 - p0 * p0)) + n;
                } else {
                    p0 = p * 2 - 1;
                    return t * (0.5 * (1 - Math.sqrt(1 - p0 * p0)) + 0.5) + n;
                }
            }, "circinout"],
            elasticin: [function(e, n, t, a) {
                var c = 1.70158,
                    b = 0,
                    r = t;
                return 0 == e ? n : 1 == (e /= a) ? n + t : (b = b || .3 * a, c = r < Math.abs(t) ? (r = t, b / 4) : b / (2 * Math.PI) * Math.asin(t / r), -(r * Math.pow(2, 10 * --e) * Math.sin((e * a - c) * (2 * Math.PI) / b)) + n)
            }, "elasticout"],
            elasticout: [function(e, n, t, a) {
                var c = 1.70158,
                    b = 0,
                    r = t;
                return 0 == e ? n : 1 == (e /= a) ? n + t : (b = b || .3 * a, c = r < Math.abs(t) ? (r = t, b / 4) : b / (2 * Math.PI) * Math.asin(t / r), r * Math.pow(2, -10 * e) * Math.sin((e * a - c) * (2 * Math.PI) / b) + t + n)
            }, "elasticin"],
            elasticinout: [function(e, n, t, a) {
                var c = 1.70158,
                    b = 0,
                    r = t;
                return 0 == e ? n : 2 == (e /= a / 2) ? n + t : (b = b || a * (.3 * 1.5), c = r < Math.abs(t) ? (r = t, b / 4) : b / (2 * Math.PI) * Math.asin(t / r), e < 1 ? r * Math.pow(2, 10 * --e) * Math.sin((e * a - c) * (2 * Math.PI) / b) * -.5 + n : r * Math.pow(2, -10 * --e) * Math.sin((e * a - c) * (2 * Math.PI) / b) * .5 + t + n)
            }, "elasticoutin"],
            elasticoutin: [function(e, n, t, a) {
                var p = e / a,
                    p0;
                if (p === 0) {
                    return n;
                } else if (p === 1) {
                    return t + n;
                }
                if (p < 0.5) {
                    p0 = 1 - 2 * p;
                    return t * (0.5 * (1 - (-Math.pow(2, 8 * (p0 - 1)) * Math.sin(((p0 - 1) * 80 - 7.5) * Math.PI / 15)))) + n;
                } else {
                    p0 = p * 2 - 1;
                    return t * (0.5 * (-Math.pow(2, 8 * (p0 - 1)) * Math.sin(((p0 - 1) * 80 - 7.5) * Math.PI / 15)) + 0.5) + n
                }
            }, "elasticinout"],
            backin: [function(e, n, t, a) {
                return t * (e /= a) * e * (2.70158 * e - 1.70158) + n
            }, "backout"],
            backout: [function(e, n, t, a) {
                return t * ((e = e / a - 1) * e * (2.70158 * e + 1.70158) + 1) + n
            }, "backin"],
            backinout: [function(e, n, t, a) {
                var c = 1.70158;
                return (e /= a / 2) < 1 ? t / 2 * (e * e * ((1 + (c *= 1.525)) * e - c)) + n : t / 2 * ((e -= 2) * e * ((1 + (c *= 1.525)) * e + c) + 2) + n
            }, "backoutin"],
            backoutin: [function(e, n, t, a) {
                var p = e / a,
                    p0;
                if (p < 0.5) {
                    p0 = 1 - 2 * p;
                    return t * (0.5 * (1 - p0 * p0 * (3 * p0 - 2))) + n;
                } else {
                    p0 = p * 2 - 1;
                    return t * (0.5 * p0 * p0 * (3 * p0 - 2) + 0.5) + n;
                }
            }, "backinout"],
            bouncein: [function(e, n, t, a) {
                return t - Easing.bounceout[0](a - e, 0, t, a) + n
            }, "bounceout"],
            bounceout: [function(e, n, t, a) {
                return (e /= a) < 1 / 2.75 ? t * (7.5625 * e * e) + n : e < 2 / 2.75 ? t * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + n : e < 2.5 / 2.75 ? t * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n : t * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
            }, "bouncein"],
            bounceinout: [function(e, n, t, a) {
                return e < a / 2 ? .5 * Easing.bouncein[0](2 * e, 0, t, a) + n : .5 * Easing.bounceout[0](2 * e - a, 0, t, a) + .5 * t + n
            }, "bounceoutin"],
            bounceoutin: [function(e, n, t, a) {
                var p = e / a,
                    p0, pow2, bounce = 4;
                if (p < 0.5) {
                    p0 = 1 - 2 * p;
                    while (p0 < ((pow2 = Math.pow(2, --bounce)) - 1) / 11) {}
                    return t * (0.5 * (1 - (1 / Math.pow(4, 3 - bounce) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - p0, 2)))) + n;
                } else {
                    p0 = p * 2 - 1;
                    while (p0 < ((pow2 = Math.pow(2, --bounce)) - 1) / 11) {}
                    return t * (0.5 * (1 / Math.pow(4, 3 - bounce) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - p0, 2)) + 0.5) + n;
                }
            }, "bounceinout"],
            vibration: [function(e, n, t, a, c) {
                return n + (t - n) / 2 + Math.sin(e * Math.PI / (a / c.vibrationStep) + 3 * Math.PI / 2) * (t - n) / 2
            }, "vibration"],
            cubicbezier: [function(e, n, t, a, c, idx) {
                var q = 1,
                    qq = 0,
                    sol;
                if (c.impair && (c.boucleType == "returnRepeat" || c.boucleType == "repeatReturn")) {
                    q = -1, qq = 1;
                }
                var b = e / a,
                    r = 1 - b,
                    l = Number(q * c.cubicbezier[0] + qq),
                    o = Number(q * c.cubicbezier[2] + qq);
                if ((sol = solveCubic(3 * l - 3 * o + 1, 0 - 6 * l + 3 * o, 3 * l, 0 - b))) {
                    b = sol;
                    r = 1 - b;
                }
                return y = (r = 1 - b) * r * r * 0 + 3 * r * r * b * Number(q * c.cubicbezier[1] + qq) + 3 * r * b * b * Number(q * c.cubicbezier[3] + qq) + b * b * b * 1, n + y * t
            }, "cubicbezier"]
        },
        allEvent = ["abort", "afterprint", "animationend", "animationiteration", "animationstart", "appinstalled", "audioprocess", "audioend", "audiostart", "beforeprint", "beforeunload", "beginEvent", "blur", "boundary", "cached", "canplay", "canplaythrough", "change", "chargingchange", "chargingtimechange", "checking", "click", "close", "complete", "compositionend", "compositionstart", "compositionupdate", "contextmenu", "copy", "cut", "dblclick", "devicechange", "devicelight", "devicemotion", "deviceorientation", "deviceproximity", "dischargingtimechange", "DOMActivate", "DOMAttributeNameChanged", "DOMAttrModified", "DOMCharacterDataModified", "DOMContentLoaded", "DOMElementNameChanged", "DOMFocusIn", "DOMFocusOut", "DOMNodeInserted", "DOMNodeInsertedIntoDocument", "DOMNodeRemoved", "DOMNodeRemovedFromDocument", "DOMSubtreeModified", "downloading", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "durationchange", "emptied", "end", "ended", "endEvent", "error", "focus", "focusin", "focusout", "fullscreenchange", "fullscreenerror", "gamepadconnected", "gamepaddisconnected", "gotpointercapture", "hashchange", "lostpointercapture", "input", "invalid", "keydown", "keypress", "keyup", "languagechange", "levelchange", "load", "loadeddata", "loadedmetadata", "loadend", "loadstart", "mark", "message", "messageerror", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "nomatch", "notificationclick", "noupdate", "obsolete", "offline", "online", "open", "orientationchange", "pagehide", "pageshow", "paste", "pause", "pointercancel", "pointerdown", "pointerenter", "pointerleave", "pointerlockchange", "pointerlockerror", "pointermove", "pointerout", "pointerover", "pointerup", "play", "playing", "popstate", "progress", "push", "pushsubscriptionchange", "ratechange", "readystatechange", "repeatEvent", "reset", "resize", "resourcetimingbufferfull", "result", "resume", "scroll", "seeked", "seeking", "select", "selectstart", "selectionchange", "show", "slotchange", "soundend", "soundstart", "speechend", "speechstart", "stalled", "start", "storage", "submit", "success", "suspend", "SVGAbort", "SVGError", "SVGLoad", "SVGResize", "SVGScroll", "SVGUnload", "SVGZoom", "timeout", "timeupdate", "touchcancel", "touchend", "touchmove", "touchstart", "transitionend", "unload", "updateready", "userproximity", "voiceschanged", "visibilitychange", "volumechange", "waiting", "wheel"];

    function solveCubic(a, b, c, d) {
        var p = (3 * a * c - b * b) / (3 * a * a);
        var q = (2 * b * b * b - 9 * a * b * c + 27 * a * a * d) / (27 * a * a * a);
        var r;
        [0].concat([1, 3]);
        if (Math.abs(p) < 1e-8) {
            if ((r = cuberoot(-q) - b / (3 * a)) <= 1 && r >= 0)
                return r;
        } else if (Math.abs(q) < 1e-8) {
            if (((r = Math.sqrt(-p) - b / (3 * a)) <= 1 && r >= 0) || ((r = -Math.sqrt(-p) - b / (3 * a)) <= 1 && r >= 0))
                return r;
            else return 0;
        } else {
            var D = q * q / 4 + p * p * p / 27;
            if (Math.abs(D) < 1e-8) {
                if (((r = -1.5 * q / p - b / (3 * a)) <= 1 && r >= 0) || ((r = 3 * q / p - b / (3 * a)) <= 1 && r >= 0))
                    return r;
            } else if (D > 0) {
                var u = cuberoot(-q / 2 - Math.sqrt(D));
                if ((r = (u - p / (3 * u)) - b / (3 * a)) <= 1 && r >= 0)
                    return r;
            } else {
                var u = 2 * Math.sqrt(-p / 3);
                var t = Math.acos(3 * q / p / u) / 3;
                var k = 2 * Math.PI / 3;
                if (((r = u * Math.cos(t) - b / (3 * a)) <= 1 && r >= 0) || ((r = u * Math.cos(t - k) - b / (3 * a)) <= 1 && r >= 0) || ((r = u * Math.cos(t - 2 * k) - b / (3 * a)) <= 1 && r >= 0))
                    return r;
            }
        }
    }

    function cuberoot(e) {
        var n = Math.pow(Math.abs(e), 1 / 3);
        return e < 0 ? -n : n
    }

    function getNumber(str) {
        return str.match(/[+-]?\d+(\.\d+)?/g);
    }

    function getStyle(el, cssprop) {
        if (el.currentStyle) //IE
            return el.currentStyle[cssprop]
        else if (document.defaultView && document.defaultView.getComputedStyle)
            return document.defaultView.getComputedStyle(el, "")[cssprop]
        else
            return el.style[cssprop]
    }

    function isElement(element) {
        return element instanceof Element || element instanceof HTMLDocument;
    }
    const getCircularReplacer = () => {
        const seen = new WeakSet();
        return (key, value) => {
            if (typeof value === "object" && value !== null) {
                if (seen.has(value)) {
                    return;
                }
                seen.add(value);
            }
            return value;
        };
    };

    function copy2(e) {
        return JSON.parse(JSON.stringify(e, getCircularReplacer()));
    }

    function copy3(e) {
        return JSON.parse(JSON.stringify(e));
    }
    b.copy = function(obj) {
        var retObj;
        _assignProps = function(obj, keyIndex, retObj) {
            var subType = Object.prototype.toString.call(obj[keyIndex]);
            if (subType === "[object Object]" || subType === "[object Array]") {
                retObj[keyIndex] = copy(obj[keyIndex]);
            } else {
                retObj[keyIndex] = obj[keyIndex];
            }
        };
        if (Object.prototype.toString.call(obj) === "[object Object]") {
            retObj = {};
            for (key in obj) {
                this._assignProps(obj, key, retObj);
            }
        } else if (Object.prototype.toString.call(obj) == "[object Array]") {
            retObj = [];
            for (var i = 0; i < obj.length; i++) {
                this._assignProps(obj, i, retObj);
            }
        };
        return retObj;
    }

    function isO(e) {
        return "object" != typeof e || Array.isArray(e) || null === e ? e : [e]
    }
    b.scroLoad = function(elemScr, elemchild, el0, el1, prprt, dif, scro, fun_call) {
        var argu = arguments;
        elemScr.addEventListener("scroll", function() {
            if (elemScr[scro] && (argu[el0].getBoundingClientRect()[prprt] - argu[el1].getBoundingClientRect()[prprt] < dif)) {
                elemScr[scro] = false;
                fun_call();
            }
        });
    }
}(window);
