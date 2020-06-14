# SelectJs
<h1 align="center">
   <img alt="Logo" src="https://www.selectionjs.com/img/selectjs.jpg"/>
</h1>
<h3 align="center">
	This library is great for accomplishing common JavaScript tasks. provide many functions, whether the matter is related to  select element DOM , animation ,events or effects 
</h3>
Include via [jsdelivr.com](https://www.jsdelivr.com/)

```html
<script src="https://cdn.jsdelivr.net/gh/housseynCheriet/SelectJs/selectjs.min.1.js"></script>
```
## Usage
### Selecting DOM elements:
```javascript

var elems=select('.div',2,3,'.div2',3,4);//Select the nth(2),nth(3) element from class ".div" and nth(3),nth(4) element from class ".div2"
elems.forEach(function( el ) {
    el.style.background="green";
})
```
<img alt="Selecting DOM elements" src="https://www.selectionjs.com/img/select_img1.jpg"/>

### More explanation clearly here: <a href="https://www.selectionjs.com">www.selectionjs.com</a>
### Animation:
 - There are 43 types of easing in animation (cubicbezier,linear,vibration,cubicin,...)
 <img alt="Selecting DOM elements" src="https://www.selectionjs.com/img/select_img2.jpg"/>

```javascript
var objectProperty={typeAnimation:"bounceout","property":[{transform:["translateY","rotateZ","rotateX"]},"left"],
from:[{transform:[100,9000,3000]},800],to:0,duration:10000}
var objectProperty2={typeAnimation:"vibration","property":[{backgroundColor:["rgbR","rgbG","rgbB"]},"borderRadius"],
from:[{backgroundColor:[10,250,10]},50],to:[{backgroundColor:[100,20,220]},0],vibrationStep:50,duration:10000}
var objectProperty3={typeAnimation:"elasticin","property":[{transform:["translateZ","rotateY","rotateZ"]},"left"],
from:[{transform:[-600,900,3000]},0],to:[{transform:[0]},700],duration:10000}
animate(select('#div'),objectProperty,objectProperty2,select('.cube'),objectProperty3)();
//Or select(animate(select('#div'),objectProperty,objectProperty2,select('.cube'),objectProperty3));  
```
<img alt="Selecting DOM elements" src="https://www.selectionjs.com/img/select_gif1.gif"/>
