      /**
 * http://www.selectionjs.com  
 * SelectJs library and framework of JavaScript
 * Image Slider 
 * @version v0.5
 * @author Housseyn Cheriet
 * @copyright ©2020 Housseyn Cheriet
 * Released under the MIT license
**/
 function slider(n, el, img, col, row, strTitle, divCube) {
     var col=typeof col!="number"&&col>0?col:8,
     row=typeof row!="number"&&row>0?row:1,
     strTitle=strTitle!=undefined?strTitle:[],
     divCube=divCube!=undefined?divCube:false;
    var file_str = false;
    var difColRow = row * col;
     var ease_, transformType, transformRotatePrprt, pos_H, pos_W, prprt;
    var src_img = [],
        n_s = document.querySelector('.selectJsSlid #s-c1 .s_bullets'),
        class_res = '',
        img_res_ = [];
    n_s.innerHTML = '';
    for (var i = 0; i < img.length; i++) {
        if (file_str)
            src_img.push(window.URL.createObjectURL(img[i]))
        else {
            img_res_[i] = new Image();
            img_res_[i].src = img[i];
            if (i != 0)
                img_res_[i].onload = function(i) {
                    return function() {
                        img[i] = img_res_[i].src;
                    }
                }(i);
        }
        n_s.insertAdjacentHTML("beforeEnd", '<span class="n_elem" data-n="' + i + '"></span>');
    }
    if (file_str)
        img = src_img;
    else class_res = 'class="asyncImage_slide" ';
    img_res_[i] = new Image();
    var regex = /[+-]?\d+(\.\d+)?/g;
    var _parentBoundingClientRect;
    var height_ = (_parentBoundingClientRect = document.querySelector('#Couv0').parentElement.getBoundingClientRect()).height;
    el.style.height = height_ + "px";
    var width_ = _parentBoundingClientRect.width;
    el.style.width = width_ + "px";
    window.addEventListener("resize", function() {
        if (!divCube) {
            height_ = (_parentBoundingClientRect = document.querySelector('#Couv0').parentElement.getBoundingClientRect()).height;
            el.style.height = height_ + "px";
            width_ = _parentBoundingClientRect.width;
            el.style.width = width_ + "px";
            var el_chld_ = el.children[0].children[0];
            el_chld_.style.height = height_ + "px";
            el_chld_.style.width = width_ + "px";
            el_chld_.style.zIndex = "1";
            el_chld_.children[0].style.height = height_ + "px";
            el_chld_.children[0].style.width = width_ + "px";
        }
    });
    var w_global = el.getBoundingClientRect().width;
    var h_global = el.getBoundingClientRect().height;
    var w_crop_chld = Math.floor(w_global / col);
    var h_crop_chld = Math.floor(h_global / row);
    var z = 0;
    el.style.display = "none";
    el.insertAdjacentHTML("beforeEnd", '<div class="crop' + n + ' scene" style="position:  absolute;width:100%;height:100%;"></div>');
    var el_ = document.querySelector('.crop' + n);
    for (var i = 0; i < col; i++) {
        if (divCube) {
            el_.insertAdjacentHTML("beforeEnd", '<div class="cubeBox crop_chld' + (z * col + i) + '" id="D3Cube">' +
                '<div class="box__face box__face--front">' + '<img ' + class_res + 'src="' + img[0] + '" style="position:  absolute;width:' + (w_global) + 'px;height:' + (h_global) + 'px;">' +
                '</div><div class="box__face box__face--back">' + '<img ' + class_res + 'src="' + img[0] + '" style="position:  absolute;width:' + (w_global) + 'px;height:' + (h_global) + 'px;">' +
                '</div><div class="box__face box__face--right">' + '<img ' + class_res + 'src="' + img[0] + '" style="position:  absolute;width:' + (w_global) + 'px;height:' + (h_global) + 'px;">' +
                '</div><div class="box__face box__face--left">' + '<img ' + class_res + 'src="' + img[0] + '" style="position:  absolute;width:' + (w_global) + 'px;height:' + (h_global) + 'px;">' +
                '</div><div class="box__face box__face--top">' + '<img ' + class_res + 'src="' + img[0] + '" style="position:  absolute;width:' + (w_global) + 'px;height:' + (w_global) + 'px;">' +
                '</div><div class="box__face box__face--bottom">' + '<img ' + class_res + 'src="' + img[0] + '" style="position:  absolute;width:' + (w_global) + 'px;height:' + (w_global) + 'px;">' +
                '</div></div>');
        } else
            el_.insertAdjacentHTML("beforeEnd", '<div class="crop_chld' + (z * col + i) + '" style="position:  absolute;overflow: hidden;"><img ' + class_res + 'src="' + img[0] + '" style="position:  absolute;width:' + (w_global) + 'px;height:' + (h_global) + 'px;">');
        if (i == col - 1) {
            z++;
            if (z < row) {
                i = -1;
            }
        }
    }
    select('.selectJsSlid #s-c1 .n_elem', function(elemParent, el_, inc) {
        return function() {
            elemParent.style.display = "block";
            var col_param = 0;
            var row_param = 0;
            colx = col;
            rowy = row;
            colx = Math.floor(Math.random() * col) + 1;
            rowy = Math.floor(Math.random() * row) + 1
            var p_rndm = 0,
                p_rndm_max = 2;
            var wH_rndm = Math.floor(Math.random() * 2);
            var t_rndm = Math.floor(Math.random() * 8) + 1,
                pos_rndm = Math.floor(Math.random() * 9);
            ease_ = Math.floor(Math.random() * 41);
            if (divCube) {
                transformType = 0;
                transformRotatePrprt = 0;
                transformType = Math.floor(Math.random() * 2)
                transformRotatePrprt = Math.floor(Math.random() * 6)
                if (transformRotatePrprt > 3) {
                    transformType = 1;
                } else
                if (transformType == 1 && (transformRotatePrprt == 2 || transformRotatePrprt == 3)) {
                    transformType = 0;
                }
                console.log(transformType + "---" + transformRotatePrprt + "---" + t_rndm);
            }
            var w_global = elemParent.getBoundingClientRect().width;
            var h_global = elemParent.getBoundingClientRect().height;
            w_crop_chld = Math.floor(w_global / colx);
            h_crop_chld = Math.floor(h_global / rowy);
            z = 0;
            var bol = 1;
            var ar = []
            var n_elem;
            if (event.target != undefined && event.target.dataset.n != undefined)
                inc = event.target.dataset.n;
            else if (inc == img.length) {
                inc = 0;
            }
            document.querySelector('#int_ro').innerText = strTitle[inc];
            var val, url_img = img[inc];
            el_[0].children[0].style.zIndex = "0";
            for (var i = rowy * colx; i < difColRow; i++) {
                el_[i].style.display = 'none';
                clearTimeout(el_[i].sit_out);
                cancelAnimationFrame(el_[i].sit);
            }
            difColRow = rowy * colx;
            var zIndxRow = Math.floor(rowy / 2);
            var zIndxCol = Math.floor(colx / 2);
            for (var i = 0; i < colx; i++) {
                var z_colx_i = z * colx + i;
                var el = el_[z_colx_i];
                el.style.display = 'none';
                clearTimeout(el.sit_out);
                if (divCube) {
                    if (z > zIndxRow) {
                        if (i > zIndxCol)
                            el.style.zIndex = zIndxRow - z - i;
                        else
                            el.style.zIndex = zIndxRow - z;
                    } else
                    if (i > zIndxCol)
                        el.style.zIndex = -i;
                    else
                        el.style.zIndex = 0;
                    for (var j = 0; j < 6; j++) {
                        el.children[j].children[0].setAttribute("src", url_img);
                    }
                } else
                    el.children[0].setAttribute("src", url_img);
                var _top = z * h_crop_chld;
                var _left = i * w_crop_chld;
                var _width = w_crop_chld + (divCube ? 0 : 1);
                var _height = h_crop_chld + (divCube ? 0 : 1);
                var aleat0 = 1,
                    aleat1 = 1;
                if (!divCube) {
                    if (p_rndm + 1 == p_rndm_max && p_rndm < 2) {
                        ar[z_colx_i] = []
                        if (z != 0) {
                            ar[z_colx_i][0] = ar[z_colx_i][1] = ar[i + colx * (z - 1)][0] == 1 ? -1 : 1
                        } else if (i != 0) {
                            ar[i][0] = ar[i][1] = ar[i - 1][0] == 1 ? -1 : 1;
                        } else
                            ar[z_colx_i] = [1, 1]
                    } else {
                        ar[z_colx_i] = [Math.random() < 0.5 ? -1 : 1, Math.random() < 0.5 ? -1 : 1]
                        if (z != 0) {
                            if (ar[z_colx_i][0] == ar[i + colx * (z - 1)][0] && ar[z_colx_i][1] == ar[i + colx * (z - 1)][1])
                                ar[z_colx_i][0] = ar[z_colx_i][0] == 1 ? -1 : 1;
                            if (i != 0) {
                                if (ar[z_colx_i][0] == ar[z_colx_i - 1][0] && ar[z_colx_i][1] == ar[z_colx_i - 1][1]) {
                                    if (ar[z_colx_i][0] == ar[i + colx * (z - 1)][0])
                                        ar[z_colx_i][0] = ar[z_colx_i][0] == 1 ? -1 : 1;
                                    else
                                        ar[z_colx_i][1] = ar[z_colx_i][1] == 1 ? -1 : 1;
                                }
                            }
                        } else if (i != 0) {
                            if (ar[i][0] == ar[i - 1][0] && ar[i][1] == ar[i - 1][1])
                                ar[i][0] = ar[i][0] == 1 ? -1 : 1;
                        }
                    }
                    aleat0 = ar[z_colx_i][0];
                    aleat1 = ar[z_colx_i][1];
                }
                if (el.sit != undefined)
                    cancelAnimationFrame(el.sit);
                var t = 100;
                var col_ = colx - 1;
                var row_ = rowy - 1;
                var mul0 = 4;
                var mul1 = 8;
                transformRotate = [
                    [{
                        traZ: 300,
                        roX: 180,
                        roZ: 180
                    }, {
                        traZ: transformType == 1 ? -_height : -_width,
                        roX: 0,
                        roZ: 0
                    }, "rotateX(roXdeg) rotateZ(roZdeg) translateZ(traZpx)"],
                    [{
                        roX: 300,
                        roZ: 400
                    }, {
                        roX: 180,
                        roZ: 180
                    }, "rotateX(roXdeg) rotateZ(roZdeg)", "rotateX(180deg) rotateZ(180deg)"],
                    [{
                        traZ: -1200,
                        traX: 200,
                        roY: 200,
                        roX: 180
                    }, {
                        traZ: -_width / 2,
                        traX: _width / 2,
                        roY: -90,
                        roX: 0
                    }, "translateZ(traZpx) translateX(traXpx) rotateY(roYdeg) rotateX(roXdeg)"],
                    [{
                        traZ: -1200,
                        traX: 200,
                        roY: 200,
                        roX: 180
                    }, {
                        traZ: -_width / 2,
                        traX: -_width / 2,
                        roY: 90,
                        roX: 0
                    }, "translateZ(traZpx) translateX(traXpx) rotateY(roYdeg) rotateX(roXdeg)"],
                    [{
                        traY: -1200,
                        traZ: 200,
                        roY: 900,
                        roX: 180
                    }, {
                        traY: _height / 2,
                        traZ: -_height / 2,
                        roY: 0,
                        roX: -90
                    }, "rotateX(roXdeg) rotateY(roYdeg) translateY(traYpx) translateZ(traZpx)"],
                    [{
                        traY: -1200,
                        traZ: 200,
                        roY: 900,
                        roX: 180
                    }, {
                        traY: -_height / 2,
                        traZ: -_height / 2,
                        roY: 0,
                        roX: 90
                    }, "rotateX(roXdeg) translateY(traYpx) translateZ(traZpx)"]
                ];
                var prprt_rndm = [];
                switch (t_rndm) {
                    case 0:
                        T_ = 0;
                        break;
                    case 1:
                        T_ = (i + z) * mul0;
                        break;
                    case 2:
                        T_ = (z) * mul1;
                        break;
                    case 3:
                        T_ = (z + col_ - i) * mul0;
                        break;
                    case 4:
                        T_ = (col_ - i) * mul1;
                        break;
                    case 5:
                        T_ = (row_ - z + col_ - i) * mul0;
                        break;
                    case 6:
                        T_ = (row_ - z) * mul1;
                        break;
                    case 7:
                        T_ = (row_ - z + i) * mul0;
                        break;
                    case 8:
                        T_ = (i) * mul1;
                }
                if (divCube) {
                    var prprt = [
                        ["top", _top, "*px", aleat0, h_global - _height],
                        ["left", _left, "*px", aleat1, w_global / 2 - _width / 2],
                        ["width", _width, "*px", wH_rndm ? -1 : aleat0],
                        ["height", _height, "*px", wH_rndm ? -1 : aleat0],
                        ["transform", 0, "rotate(*deg)", aleat0, 600],
                        ["transform", 0, "skewY(*deg)", aleat0, 100]
                    ];
                    for (var p = 0; p < 4; p++) {
                        el.style[prprt[p][0]] = prprt[p][1] + 'px';
                    }
                    prprt_rndm.push(["transform", transformRotate[transformRotatePrprt]]);
                    if (transformType == 1) {
                        transformVal = ["rotateY(  0deg) translateZ( HHpx)",
                            "rotateY(180deg) translateX(-WWpx)",
                            "rotateY( 90deg) translateZ(WWpx) translateX(-HHpx)",
                            "rotateY(-90deg)",
                            "rotateX( 90deg)",
                            "rotateX(-90deg) translateZ(HHpx) translateY(-HHpx)"
                        ];
                        el.style.transform = "translateZ(-" + _height + "px)";
                        el.style.left = _left + 'px';
                        for (var j = 0; j < 6; j++) {
                            el.children[j].style.height = _height + 'px';
                            if (j == 2 || j == 3) {
                                el.children[j].style.width = _height + 'px';
                                el.children[j].children[0].style.height = _height + 'px';
                                el.children[j].children[0].style.width = _height + 'px';
                                el.children[j].children[0].style.left = 0 + 'px';
                                el.children[j].children[0].style.top = 0 + 'px';
                            } else {
                                if (transformRotatePrprt == j) {
                                    el.children[j].children[0].style.height = h_global + 'px';
                                    el.children[j].children[0].style.width = w_global + 'px';
                                    el.children[j].children[0].style.left = -_left + 'px';
                                    el.children[j].children[0].style.top = -_top + 'px';
                                } else {
                                    el.children[j].children[0].style.height = _height + 'px';
                                    el.children[j].children[0].style.width = _width + 'px';
                                    el.children[j].children[0].style.left = 0 + 'px';
                                    el.children[j].children[0].style.top = 0 + 'px';
                                }
                                el.children[j].style.width = _width + 'px';
                            }
                            el.children[j].style.transform = transformVal[j].replace(/WW/g, _width).replace(/HH/g, _height).replace(/SS/g, _height);
                        }
                    } else {
                        transformVal = ["rotateY(  0deg) translateZ( SSpx)",
                            "rotateY(180deg) translateX(-WWpx)",
                            "rotateY( 90deg) translateZ(WWpx) translateX(-SSpx)",
                            "rotateY(-90deg)",
                            "rotateX( 90deg)",
                            "rotateX(-90deg) translateZ(HHpx) translateY(-SSpx)"
                        ];
                        el.style.transform = "translateZ(-" + _width + "px)";
                        for (var j = 0; j < 6; j++) {
                            if (j == 4 || j == 5) {
                                el.children[j].style.height = _width + 'px';
                                el.children[j].style.width = _width + 'px';
                                el.children[j].children[0].style.height = _width + 'px';
                                el.children[j].children[0].style.width = _width + 'px';
                                el.children[j].children[0].style.left = 0 + 'px';
                                el.children[j].children[0].style.top = 0 + 'px';
                            } else {
                                el.children[j].style.height = _height + 'px';
                                if (transformRotatePrprt == j) {
                                    el.children[j].children[0].style.height = h_global + 'px';
                                    el.children[j].children[0].style.width = w_global + 'px';
                                    el.children[j].children[0].style.left = -_left + 'px';
                                    el.children[j].children[0].style.top = -_top + 'px';
                                } else {
                                    el.children[j].children[0].style.height = _height + 'px';
                                    el.children[j].children[0].style.width = _width + 'px';
                                    el.children[j].children[0].style.left = 0 + 'px';
                                    el.children[j].children[0].style.top = 0 + 'px';
                                }
                                el.children[j].style.width = _width + 'px';
                            }
                            el.children[j].style.transform = transformVal[j].replace(/WW/g, _width).replace(/HH/g, _height).replace(/SS/g, _width);
                        }
                    }
                    el.duration = 3000;
                } else {
                    el.children[0].style.width = w_global + 'px';
                    el.children[0].style.height = h_global + 'px';
                    el.children[0].style.top = -_top + 'px';
                    el.children[0].style.left = -_left + 'px';
                    el.duration = 1000;
                    switch (pos_rndm) {
                        case 0:
                            pos_H = h_global / 2 - _height / 2;
                            pos_W = w_global / 2 - _width / 2;
                            break;
                        case 1:
                            pos_H = 0;
                            pos_W = 0;
                            break;
                        case 2:
                            pos_H = 0;
                            pos_W = w_global / 2 - _width / 2;
                            break;
                        case 3:
                            pos_H = 0;
                            pos_W = w_global - _width;
                            break;
                        case 4:
                            pos_H = h_global / 2 - _height / 2;
                            pos_W = w_global - _width;
                            break;
                        case 5:
                            pos_H = h_global - _height;
                            pos_W = w_global - _width;
                            break;
                        case 6:
                            pos_H = h_global - _height;
                            pos_W = w_global / 2 - _width / 2;
                            break;
                        case 7:
                            pos_H = h_global - _height;
                            0;
                            break;
                        case 8:
                            pos_H = h_global / 2 - _height / 2;
                            pos_W = 0;
                    }
                    prprt = [
                        ["top", _top, "*px", aleat0, pos_H],
                        ["left", _left, "*px", aleat1, pos_W],
                        ["width", _width, "*px", wH_rndm ? -1 : aleat0],
                        ["height", _height, "*px", wH_rndm ? -1 : aleat0],
                        ["transform", 0, "rotate(*deg)", aleat0, 600],
                        ["transform", 0, "skewY(*deg)", aleat0, 100]
                    ];
                    for (var p = 0; p < 4; p++) {
                        el.style[prprt[p][0]] = prprt[p][1] + 'px';
                    }
                    prprt_rndm.push(prprt[0], prprt[1], prprt[3], prprt[4]);
                }
                el.prprt = prprt_rndm;
                el.sit_out = setTimeout(function(ell) {
                    return () => {
                        ell.style.display = "block";
                        myT(ell, 0)
                    }
                }(el), T_ * 50);
                if (i == colx - 1) {
                    z++;
                    if (z < rowy) {
                        i = -1;
                    }
                }
            }
            inc++;
        }
    }(el, document.querySelector('.crop1').children, 0))
    if (!file_str) {
        var img_res__len = img_res_.length,
            bol_img_load = true;
        img_res_[img_res__len] = new Image();
        img_res_[img_res__len].src = img[0];
        img_res_[0].onload = () => {
            img[0] = img_res_[0].src;
            if (bol_img_load) {
                bol_img_load = false;
                select('.selectJsSlid #s-c1 .n_elem.s_next').click();
            }
        };
        img_res_[img_res__len].onload = () => {
            if (bol_img_load) {
                bol_img_load = false;
                select('.selectJsSlid #s-c1 .n_elem.s_next').click();
            }
        };
    } else
        select('.selectJsSlid #s-c1 .n_elem.s_next').click();

    function getN(v) {
        return parseFloat(v);
    }

    function myT(el, typ) {
        el.t = Date.now();
        var zz = z = 0;
        var strPrprt = "";

        function myT2() {
            el.difTime = (Date.now() - el.t);
            if (el.difTime < el.duration) {
                el.prprt.forEach(function(item) {
                    if (item[0] == "transform") {
                        strPrprt = item[1][2];
                        for (var key in item[1][0]) {
                            z = Easing[Object.keys(Easing)[ease_]][0](el.difTime, item[1][0][key], item[1][1][key] - item[1][0][key], el.duration);
                            strPrprt = strPrprt.replace(new RegExp(key, "g"), z);
                        }
                        el.style[item[0]] = strPrprt;
                    } else {
                        z = Easing[Object.keys(Easing)[ease_]][0](el.difTime, item[4], item[1] - item[4], el.duration);
                        el.style[item[0]] = item[2].replace("*", z);
                    }
                })
                el.sit = requestAnimationFrame(myT2);
            } else {
                el.prprt.forEach(function(item) {
                    if (item[0] == "transform") {
                        strPrprt = item[1][2];
                        for (var key in item[1][1]) {
                            strPrprt = strPrprt.replace(new RegExp(key, "g"), item[1][1][key]);
                        }
                        el.style[item[0]] = strPrprt;
                    } else
                        el.style[item[0]] = item[2].replace("*", item[1]);
                })
            }
        }
        el.sit = requestAnimationFrame(myT2);
    }
}
