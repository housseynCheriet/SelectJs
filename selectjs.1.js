/**
 * SelectJs library and framework of JavaScript
 * @version v1
 * @author Housseyn Cheriet
 * @copyright ©2020 Housseyn Cheriet
 * Released under the MIT license
 **/
 var _touchEv = "ontouchstart" in window,
    touchEvent = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
    };
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
}(window);
var bindEvent = function(e, n, t) {
    if (_touchEv && touchEvent[t[0]] != undefined)
        t[0] = touchEvent[t[0]];
    e.addEventListener ? "e" == t[2] ? e.addEventListener(t[0], n, t[1]) : "r" == t[2] && e.removeEventListener(t[0], n, t[1]) : e.attachEvent && ("e" == t[2] ? e.attachEvent("on" + t[0], function() {
        n.call(event.srcElement, event)
    }) : "r" == t[2] && console.error("Attempted to listen to events during the capture phase on a browser that does not support the capture phase. Your application will not receive some events."))
};

function checkValEvent(nn, n, n2, b) {
    if ("number" == typeof b)
        return [nn[b], nn[b] != undefined ? nn[b] : (n2 != undefined ? n2 : n)];
    else
        return [, n2 != undefined ? n2 : n];
}

function select() {
    for (var e, b = 0, bb = 0, n = ["click", !1, "e"], n2, n3, nn = {}, t = [], a = [], a2 = [], aa = [], c = 0; void 0 !== arguments[c]; c++)
        if ("string" == typeof arguments[c]) 0 === arguments[c].search("e:") || 0 === arguments[c].search("r:") ?
            (e = arguments[c].split(":"), n[2] = e[0], 2 == e.length && (ev1 = e[1].split("|"), allEvent.includes(ev1[0]) && (n[0] = ev1[0], n[1] = !1, void 0 === ev1[1] || "true" !== ev1[1] && "false" !== ev1[1] || (n[1] = "true" === ev1[1]))) &&
                "number" == typeof arguments[c + 1] && (nn[bb] = copy(n))
            ) :
            ( /*0 != t.length&&*/ (t = []), Array.prototype.push.apply(t, document.querySelectorAll(arguments[c])),
                0 != t.length &&
                //("number" != typeof arguments[c + 1] && (Array.prototype.push.apply(aa, t),Array.prototype.push.apply(a, t)), void 0 !== arguments[c + 1] && ("string" != typeof arguments[c + 1] || 0 === arguments[c + 1].search("e:") && 0 !== arguments[c + 1].search("r:") || (t = [])))
                //("number" != typeof arguments[c + 1] && (Array.prototype.push.apply(aa, t),Array.prototype.push.apply(a, t)), void 0 !== arguments[c + 1] && ("string" != typeof arguments[c + 1] || 0 === arguments[c + 1].search("e:") && 0 !== arguments[c + 1].search("r:") || (t = [])))
                //(arguments[c+1]==undefined||("string" == typeof arguments[c+1] && 0 !== arguments[c+1].search("e:")&&0 !== arguments[c+1].search("r:"))) &&  (Array.prototype.push.apply(aa, t),Array.prototype.push.apply(a, t),t=[])
                (arguments[c + 1] == undefined || "function" == typeof arguments[c + 1] || ("string" == typeof arguments[c + 1] && 0 !== arguments[c + 1].search("e:") && 0 !== arguments[c + 1].search("r:"))) &&
                (Array.prototype.push.apply(aa, t), Array.prototype.push.apply(a, t), Array.prototype.push.apply(a2, t))
                // ((arguments[c+1]==undefined||"function" == typeof arguments[c+1])||("number" != typeof arguments[c + 1] && ("string" == typeof arguments[c + 1]&&0 !== arguments[c+1].search("e:")&&0 !== arguments[c+1].search("r:")))) && (Array.prototype.push.apply(aa, t),Array.prototype.push.apply(a, t),Array.prototype.push.apply(a2, t))
            );
        else if ("number" == typeof arguments[c]) {
        aa.push(t[arguments[c]]);
        a.push(t[arguments[c]], bb);
        a2.push(t[arguments[c]], bb);
        bb++;
        // void 0 !== arguments[c + 1] && "number" != typeof arguments[c + 1] && (t = []); 
        //"string" == typeof arguments[c+1] && (0 !== arguments[c+1].search("e:")&&0 !== arguments[c+1].search("r:")) && (t = []);
    } else if (Array.isArray(arguments[c])) Array.prototype.push.apply(aa, arguments[c]), Array.prototype.push.apply(a, arguments[c]);
    else if ("object" == typeof arguments[c]) aa.push(arguments[c]), a.push(arguments[c]);
    else if ("function" == typeof arguments[c]) {
        if ("mySelectedFunc" == (arguments[c].toString().match(/^function\s*([^\s(]+)/) || [])[1]) 0 == a.length && (a = t), 0 == a.length ? arguments[c]() : (arguments[c](copy(a2), copy(n), nn), a2 = []);
        else if (0 == a.length && (a = t), 0 == a.length) arguments[c]();
        else {
            // 0 != t.length && (Array.prototype.push.apply(a, t))
            for (b; void 0 !== a[b]; b++) {
                if ("number" != typeof a[b]) {
                    n3 = checkValEvent(nn, n, n2, a[b + 1]);
                    if (n3[0]) n2 = n3[0];
                    bindEvent(a[b], arguments[c], n3[1]);
                }
            }
        }
        //"string" == typeof arguments[c + 1] && 0 !== arguments[c + 1].search("e:") && (t = [], a = [])
        //"function" != typeof arguments[c + 1] && (t = [], a = [],nn={})   
        //"string" == typeof arguments[c+1] && (0 !== arguments[c+1].search("e:")&&0 !== arguments[c+1].search("r:")) && (t = [])
    }
    if (0 != aa.length) return 1 == aa.length ? aa[0] : aa
}

function hideShow() {
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

function drag() {
    var all = arguments;
    return function mySelectedFunc(el, ev, evv) { //n,nn
        var uu = [],
            e = [
                ["mousedown", !1, "e"],
                ["mouseup", !1, "e"],
                ["mousemove", !1, "e"]
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
                    //bindEvent(el[m], darg2( draged,whereDraged, e), ev)
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
                bindEvent(document.body, mouseMove(draged, whereDraged[0]), e[2])
                bindEvent(document.body, mouseUp, e[1])
                if (eve == "no") {
                    for (var h = 0; h < draged.length; h++) {
                        objPrprt[h] = {};
                        bindEvent(draged[h], mouseDown(h, whereDraged[0]), e[0])
                    }
                } else { //draged,whereDraged, e
                    if (!inThis) { //select('.initialEvents',drag(select('.draged')/*,Defaul:tdocument.body*/) //Or  select('.initialEvents',drag(select('.draged'),select('.whereDraged'))) 
                        for (var m = 0; m < el.length; m++) {
                            bindEvent(el[m], drag3, [ev[0], ev[1], 'r']);
                        }
                        inThis = true;
                        for (var h = 0; h < draged.length; h++) {
                            objPrprt[h] = {};
                            bindEvent(draged[h], mouseDown(h, whereDraged[0]), e[0])
                        }
                    } else { //select('.draged',drag()) //Or  select('.draged',drag(0,select('.whereDraged'))) 
                        bindEvent(this, drag3, [ev[0], ev[1], 'r']);
                        //allEvents(this,whereDraged[0]);
                        objPrprt[0] = {};
                        bindEvent(this, mouseDown(0, whereDraged[0]), e[0])
                    }
                }

                function mouseMove(ele, whereD) {
                    return function(event) {
                        // if (this !== event.target) return;
                        event.stopPropagation();
                        //console.log("mouseMove");
                        var i;
                        for (var ii = 0; ii < isDown.length; ii++) {
                            i = isDown[ii];
                            if (objPrprt[i].isDown) {
                                //console.log(isDown);
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
                                //console.log(x,y);
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
                        //if(isDown!=0) return;
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
                        //shiftScrollX=scrollX;
                        //shiftScrollY=scrollY;
                        if (_touchEv) {
                            objPrprt[i].shiftX = event.changedTouches[0].clientX - /*this.getBoundingClientRect().left -*/ left_;
                            objPrprt[i].shiftY = event.changedTouches[0].clientY - /*this.getBoundingClientRect().top -*/ top_;
                        } else {
                            objPrprt[i].shiftX = event.pageX - /*this.getBoundingClientRect().left -*/ left_;
                            objPrprt[i].shiftY = event.pageY - /*this.getBoundingClientRect().top -*/ top_;
                        }
                        //console.log("mouseDown")
                    }
                }

                function mouseUp(event) {
                    event.stopPropagation();
                    isDown = false;
                    for (var i = 0; i < isDown.length; i++) {
                        objPrprt[isDown[i]].isDown = false;
                    }
                    isDown = [];
                    //console.log("mouseUp")
                }
                /**************/
                /*************/
                function allEvents(elem, whereElem) {
                    var isDown = false,
                        shiftX, shiftY, bndWD, bnd, shiftLeftMin, shiftLeftMax, shiftTopMin, shiftTopMax;
                    bindEvent(elem, mouseDown, e[0])
                    bindEvent(document.body, mouseMove(elem, whereElem), e[2])
                    bindEvent(document.body, mouseUp, e[1])
                        //bindEvent(elem, mouseUp, e[1])
                    function mouseMove(ele, whereD) {
                        return function(event) {
                            // if (this !== event.target) return;
                            event.stopPropagation();
                            //console.log("mouseMove");
                            if (isDown) {
                                //console.log(isDown);
                                bndWD = whereD.getBoundingClientRect();
                                bnd = ele.getBoundingClientRect();
                                /*var x = event.pageX - bounds.left - bnd.left - scrollX + shiftX;
                                 var y = event.pageY - bounds.top - bnd.top - scrollY + shiftY;*/
                                if (_touchEv) {
                                    var x = event.changedTouches[0].clientX - shiftX;
                                    var y = event.changedTouches[0].clientY - shiftY;
                                } else {
                                    var x = event.pageX - shiftX;
                                    var y = event.pageY - shiftY;
                                }
                                if (x < shiftLeftMin)
                                    x = shiftLeftMin;
                                else
                                if (x > shiftLeftMax)
                                    x = shiftLeftMax;
                                if (y < shiftTopMin)
                                    y = shiftTopMin;
                                else
                                if (y > shiftTopMax)
                                    y = shiftTopMax;
                                ele.style.top = y + 'px';
                                ele.style.left = x + 'px';
                                //console.log(x,y);
                            }
                        }
                    }

                    function mouseDown(event) {
                        event.stopPropagation();
                        isDown = true;
                        //if(isDown!=0) return;
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
                        //shiftScrollX=scrollX;
                        //shiftScrollY=scrollY;
                        if (_touchEv) {
                            shiftX = event.changedTouches[0].clientX - /*this.getBoundingClientRect().left -*/ left_;
                            shiftY = event.changedTouches[0].clientY - /*this.getBoundingClientRect().top -*/ top_;
                        } else {
                            shiftX = event.pageX - /*this.getBoundingClientRect().left -*/ left_;
                            shiftY = event.pageY - /*this.getBoundingClientRect().top -*/ top_;
                        }
                        //console.log("mouseDown")
                    }

                    function mouseUp(event) {
                        event.stopPropagation();
                        isDown = false;
                        //console.log("mouseUp")
                    }
                }
            }
        }
    }
}

function animate() {
    var s = arguments;
    return function mySelectedFunc(e, n, nn) {
        var n2, n3, x, y, fromY, toY, xFrom, xTo, objFrom, objTo, t, r = [],
            rr = [],
            bolNext = false,
            a = {
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
            for (var c = 0; void 0 !== s[c]; c++) {
                y = 0, objFrom = false, objTo = false;
                if ("object" == typeof s[c].from)
                    objFrom = true;
                if ("object" == typeof s[c].to)
                    objTo = true;
                if (bolNext || (Array.isArray(s[c]) || isElement(s[c]))) {
                    Array.isArray(s[c]) || (s[c] = [s[c]]), Array.prototype.push.apply(r, s[c]); //r = s[c];
                    bolNext = false;
                } else {
                    bolNext = false;
                    if (c == 0) {
                        // Array.prototype.push.apply(r, e);//r = e; 
                        for (var u = 0; void 0 !== e[u]; u++) {
                            if ("number" != typeof e[u])
                                r.push(e[u]);
                        }
                    }
                    if (s[c].typeAnimation == "vibration" && s[c].vibrationStep == undefined) {
                        s[c].vibrationStep = 6;
                    } else {
                        (t = getNumber(s[c].typeAnimation)) && 4 == t.length && (s[c].cubicbezier = t, s[c].typeAnimation = "cubicbezier")
                    }
                    if (s[c].boucle && s[c].boucleType == undefined)
                        s[c].boucleType = "return";
                    Array.isArray(s[c].property) || (s[c].property = [s[c].property]), s[c].property.forEach(function(e) {
                        if (!objFrom)
                            xFrom = s[c].from;
                        else
                            fromY = s[c]["from"][y];
                        if (!objTo)
                            xTo = s[c].to;
                        else
                            toY = s[c]["to"][y];
                        if ("object" == typeof e) {
                            thisItem = Object.keys(e)[0], Array.isArray(e[thisItem]) || (e[thisItem] = [e[thisItem]]);
                            ((-1 != thisItem.toLowerCase().indexOf("color") && (a[thisItem] = whoproperty[thisItem])) ||
                                -1 != thisItem.toLowerCase().indexOf("transform")) &&
                            (x = 0, a["from"][thisItem] = {}, a["to"][thisItem] = {},
                                e[thisItem].forEach(function(e) {
                                    a[thisItem][e] = 0;
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
                                        a["from"][thisItem][e] = s[c].from;
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
                                        a["to"][thisItem][e] = s[c].to;
                                    }
                                    x++;
                                }), y++)
                        } else {
                            /////// a[e] = 0;
                            if (objFrom) {
                                if (fromY[e] != undefined) {
                                    xFrom = a["from"][e] = fromY[e];
                                } else
                                if (fromY != undefined) {
                                    xFrom = a["from"][e] = fromY;
                                }
                                a["from"][e] = xFrom;
                            } else {
                                a["from"][e] = s[c].from;
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
                                a["to"][e] = s[c].to;
                            }
                            y++;
                        }
                    });
                    s[c].storeValueAnim = s[c].storeValueAnimCopie = a;
                    if (e != undefined) {
                        for (var l = 0; void 0 !== rr[l]; l++) {
                            if ("number" != typeof rr[l]) {
                                n3 = checkValEvent(nn, n, n2, rr[l + 1]);
                                if (n3[0]) n2 = n3[0];
                                //bindEvent(rr[l], o(r, s[c], c), n);
                                //uu.push(rr[l]);
                                // bindEvent(rr[l], o(r, s[c], c), n3[1]);
                                bindEvent(rr[l], o(r, s[c], c), n3[1]);
                            }
                        }
                    } else
                        o(r, s[c], c)();
                    a = {
                        transform: {},
                        from: {},
                        to: {}
                    };
                    if (s[c + 1] != undefined && (Array.isArray(s[c + 1]) || isElement(s[c + 1]))) {
                        bolNext = true;
                        r = [];
                    }
                }
            }
        }

        function o(r, l, e) {
            var o, s = 0;
            // u = l.typeAnimation + "_" + e;
            var typeAnimation = l.typeAnimation,
                typeAnimationImpair = typeAnimation;
            if (l.boucle && (l.boucleType == "returnRepeat" || l.boucleType == "repeatReturn")) {
                typeAnimationImpair = Easing[l.typeAnimation][1];
            }
            // var s = Date.now();
            return function e(n) {
                "object" == typeof n && (cancelAnimationFrame(l.animFram), l.storeValueAnim = l.storeValueAnimCopie, s = 0), 0 == s && (s = Date.now());
                var t, a, aa, c, b = Date.now() - s;
                if (l.boucle) {
                    /*if((b+16)%l.duration<16)
                    b=Math.floor((b+16)/l.duration);
                                  */
                    o = b % l.duration;
                    if (Math.floor(b / l.duration) % 2 == 1) {
                        l.impair = true;
                        typeAnimation = typeAnimationImpair;
                        if (l.boucleType.indexOf("return") == 0) //
                        {
                            o = l.duration - o;
                            if (o < 16) {
                                o = 0;
                            }
                        } else if (l.boucleType.indexOf("repeat") == 0) {
                            if (o > l.duration - 16) {
                                o = l.duration;
                            }
                        }
                    } else {
                        l.impair = false;
                        typeAnimation = l.typeAnimation;
                        if (o > l.duration - 16) {
                            o = l.duration;
                        }
                    }
                } else {
                    b < l.duration ? o = b : (o = l.duration, s = 0);
                }
                //console.log(typeAnimation)
                /*a = Easing[typeAnimation][0](o, l.from, l.to - l.from, l.duration, l)*/
                a = Easing[typeAnimation][0](o, 0, 1, l.duration, l), l.property.forEach(function(e) {
                    if (t = Object.keys(e)[0], null != l.storeValueAnim[t]) {
                        if ("transform" == t.toLowerCase()) c = "", e.transform.forEach(function(e) {
                            aa = l.storeValueAnim["from"][t][e] + a * (l.storeValueAnim["to"][t][e] - l.storeValueAnim["from"][t][e]);
                            l.storeValueAnim.transform[e] = aa, c += " " + repalce[e].replace("*", aa)
                        }), r.forEach(function(e) {
                            e.style.transform = c
                        });
                        else if (-1 != t.toLowerCase().indexOf("color")) {
                            for (var n in e[t].forEach(function(e) {
                                    aa = l.storeValueAnim["from"][t][e] + a * (l.storeValueAnim["to"][t][e] - l.storeValueAnim["from"][t][e]);
                                    l.storeValueAnim[t][e] = aa
                                }), c = repalce.rgba, color) c = c.replace(new RegExp(n, "g"), l.storeValueAnim[t][n]);
                            r.forEach(function(e) {
                                e.style[t] = c
                            })
                        }
                    } else "string" == typeof e && (t = e), c = repalce[t].replace("*", l.storeValueAnim["from"][t] + a * (l.storeValueAnim["to"][t] - l.storeValueAnim["from"][t])), r.forEach(function(e) {
                        e.style[t] = c
                    })
                }), (l.boucle || b < l.duration) && (l.animFram = requestAnimationFrame(e))
            }
        }
    }
}
var transformproperty = ["transform", "translateX", "translateY", "translateZ", "rotateX", "rotateY", "rotateZ", "scaleX", "scaleY", "skewX", "skewY"],
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
        left: "*px",
        top: "*px",
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
            //return Easing["sineoutin"](e, n, t, a)
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
            //return Easing["expooutin"](e, n, t, a)
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
            //return Easing["circoutin"](e, n, t, a)
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
            //return Easing["elasticoutin"](e, n, t, a)
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
            //return Easing["backoutin"](e, n, t, a)
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
            //return Easing["bounceoutin"](e, n, t, a)
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
        cubicbezier: [function(e, n, t, a, c) {
            // var q1=c.cubicbezier[0],q2=c.cubicbezier[2];
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
            /*   return solveCubic(3 * l - 3 * o + 1, 0 - 6 * l + 3 * o, 3 * l, 0 - b).forEach(function(e) {
                e <= 1 && 0 <= e && (b = e)
            }), y = (r = 1 - b) * r * r * 0 + 3 * r * r * b * Number(q*c.cubicbezier[1]+qq) + 3 * r * b * b * Number(q*c.cubicbezier[3]+qq) + b * b * b * 1/*,console.log(e/a ,n + y * t), n + y * t
*/
            if ((sol = solveCubic(3 * l - 3 * o + 1, 0 - 6 * l + 3 * o, 3 * l, 0 - b))) {
                b = sol;
                r = 1 - b;
            }
            return y = (r = 1 - b) * r * r * 0 + 3 * r * r * b * Number(q * c.cubicbezier[1] + qq) + 3 * r * b * b * Number(q * c.cubicbezier[3] + qq) + b * b * b * 1, n + y * t
        }, "cubicbezier"]
    },
    allEvent = ["abort", "afterprint", "animationend", "animationiteration", "animationstart", "appinstalled", "audioprocess", "audioend", "audiostart", "beforeprint", "beforeunload", "beginEvent", "blur", "boundary", "cached", "canplay", "canplaythrough", "change", "chargingchange", "chargingtimechange", "checking", "click", "close", "complete", "compositionend", "compositionstart", "compositionupdate", "contextmenu", "copy", "cut", "dblclick", "devicechange", "devicelight", "devicemotion", "deviceorientation", "deviceproximity", "dischargingtimechange", "DOMActivate", "DOMAttributeNameChanged", "DOMAttrModified", "DOMCharacterDataModified", "DOMContentLoaded", "DOMElementNameChanged", "DOMFocusIn", "DOMFocusOut", "DOMNodeInserted", "DOMNodeInsertedIntoDocument", "DOMNodeRemoved", "DOMNodeRemovedFromDocument", "DOMSubtreeModified", "downloading", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "durationchange", "emptied", "end", "ended", "endEvent", "error", "focus", "focusin", "focusout", "fullscreenchange", "fullscreenerror", "gamepadconnected", "gamepaddisconnected", "gotpointercapture", "hashchange", "lostpointercapture", "input", "invalid", "keydown", "keypress", "keyup", "languagechange", "levelchange", "load", "loadeddata", "loadedmetadata", "loadend", "loadstart", "mark", "message", "messageerror", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "nomatch", "notificationclick", "noupdate", "obsolete", "offline", "online", "open", "orientationchange", "pagehide", "pageshow", "paste", "pause", "pointercancel", "pointerdown", "pointerenter", "pointerleave", "pointerlockchange", "pointerlockerror", "pointermove", "pointerout", "pointerover", "pointerup", "play", "playing", "popstate", "progress", "push", "pushsubscriptionchange", "ratechange", "readystatechange", "repeatEvent", "reset", "resize", "resourcetimingbufferfull", "result", "resume", "scroll", "seeked", "seeking", "select", "selectstart", "selectionchange", "show", "slotchange", "soundend", "soundstart", "speechend", "speechstart", "stalled", "start", "storage", "submit", "success", "suspend", "SVGAbort", "SVGError", "SVGLoad", "SVGResize", "SVGScroll", "SVGUnload", "SVGZoom", "timeout", "timeupdate", "touchcancel", "touchend", "touchmove", "touchstart", "transitionend", "unload", "updateready", "userproximity", "voiceschanged", "visibilitychange", "volumechange", "waiting", "wheel"];

function copy(e, n) {
    var t, a, c = Array.isArray(e) ? [] : {};
    for (a in e) t = e[a], c[a] = !0 === n ? Array.isArray(t) ? copy(t, n) : t : "object" == typeof t ? copy(t) : t;
    return c
}

function solveCubic(a, b, c, d) {
    /*if (Math.abs(a) < 1e-8) { // Quadratic case, ax^2+bx+c=0
        a = b; b = c; c = d;
        if (Math.abs(a) < 1e-8) { // Linear case, ax+b=0
            a = b; b = c;
            if (Math.abs(a) < 1e-8) // Degenerate case
                return [];
            return [-b/a];
        }

        var D = b*b - 4*a*c;
        if (Math.abs(D) < 1e-8)
            return [-b/(2*a)];
        else if (D > 0)
            return [(-b+Math.sqrt(D))/(2*a), (-b-Math.sqrt(D))/(2*a)];
        return [];
    }
*/
    // Convert to depressed cubic t^3+pt+q = 0 (subst x = t - b/3a)
    var p = (3 * a * c - b * b) / (3 * a * a);
    var q = (2 * b * b * b - 9 * a * b * c + 27 * a * a * d) / (27 * a * a * a);
    var r;
    [0].concat([1, 3]);
    if (Math.abs(p) < 1e-8) { // p = 0 -> t^3 = -q -> t = -q^1/3
        if ((r = cuberoot(-q) - b / (3 * a)) <= 1 && r >= 0)
            return r;
    } else if (Math.abs(q) < 1e-8) {
        if (((r = Math.sqrt(-p) - b / (3 * a)) <= 1 && r >= 0) || ((r = -Math.sqrt(-p) - b / (3 * a)) <= 1 && r >= 0))
            return r;
        else return 0;
    } else {
        var D = q * q / 4 + p * p * p / 27;
        if (Math.abs(D) < 1e-8) { // D = 0 -> two roots
            if (((r = -1.5 * q / p - b / (3 * a)) <= 1 && r >= 0) || ((r = 3 * q / p - b / (3 * a)) <= 1 && r >= 0))
                return r;
        } else if (D > 0) { // Only one real root
            var u = cuberoot(-q / 2 - Math.sqrt(D));
            if ((r = (u - p / (3 * u)) - b / (3 * a)) <= 1 && r >= 0)
                return r;
        } else { // D < 0, three roots, but needs to use complex numbers/trigonometric solution
            var u = 2 * Math.sqrt(-p / 3);
            var t = Math.acos(3 * q / p / u) / 3; // D < 0 implies p < 0 and acos argument in [-1..1]
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
    else if (document.defaultView && document.defaultView.getComputedStyle) //Firefox
        return document.defaultView.getComputedStyle(el, "")[cssprop]
    else //try and get inline style
        return el.style[cssprop]
}

function isElement(element) {
    return element instanceof Element || element instanceof HTMLDocument;
}

function copy(e) {
    //var l,r,n;l=Array.isArray(e)?[]:{};for(n in e)r=e[n],l[n]=t===!0?Array.isArray(r)?copy(r,t):r:"object"==typeof r?copy(r):r;return l
    var l, r, n;
    l = Array.isArray(e) ? [] : {};
    for (n in e) r = e[n], l[n] = Array.isArray(r) ? copy(r) : r;
    return l
}

function isO(e) {
    return "object" != typeof e || Array.isArray(e) || null === e ? e : [e]
}

function isO(e) {
    return "object" != typeof e || Array.isArray(e) || null === e ? e : [e]
}

function scroLoad(elemScr, elemchild, el0, el1, prprt, dif, scro, fun_call) {
    var argu = arguments;
    elemScr.addEventListener("scroll", function() {
        //console.log(elemScr.getBoundingClientRect()[prprt]+' -- '+elemchild.getBoundingClientRect()[prprt]+' -- '+(argu[el0].getBoundingClientRect()[prprt]-argu[el1].getBoundingClientRect()[prprt]))
        if (elemScr[scro] && (argu[el0].getBoundingClientRect()[prprt] - argu[el1].getBoundingClientRect()[prprt] < dif)) {
            elemScr[scro] = false;
            fun_call();
            //console.log(elemScr.getBoundingClientRect()[prprt]+' --------- '+elemchild.getBoundingClientRect()[prprt])
        }
    });
}
