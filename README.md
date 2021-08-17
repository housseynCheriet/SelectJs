# SelectJs
<h1 align="center">
   <img alt="Logo" src="https://selectjs.vercel.app/src/img/selectjs.jpg"/>
</h1>
<h3 align="center">
	This library is great for accomplishing common JavaScript tasks. provide many functions, whether the matter is related to  select element DOM , animation ,events or effects 
</h3>
Include via [jsdelivr.com](https://www.jsdelivr.com/)

```html
<script src="https://cdn.jsdelivr.net/gh/housseynCheriet/SelectJs/selectjs.1.js"></script>
```
## 1-Usage
### Selecting DOM elements:
```javascript

var elems=select('.div',2,3,'.div2',3,4);//Select the nth(2),nth(3) element from class ".div" and nth(3),nth(4) element from class ".div2"
elems.forEach(function( el ) {
    el.style.background="green";
})
```
<img alt="Selecting DOM elements" src="https://selectjs.vercel.app/src/img/select_img1.jpg"/>

### More explanation clearly here: <a href="https://selectjs.vercel.app">selectjs.vercel.app</a>

## 2-What is in the library?
### -Animation <a href="https://easing-animations.vercel.app">Look here</a>:
 - There are 43 types of easing in animation (cubicbezier,linear,vibration,cubicin,...)
 <img alt="Selecting DOM elements" src="https://selectjs.vercel.app/src/img/select_img2.jpg"/>

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
<img alt="Selecting DOM elements" src="https://selectjs.vercel.app/src/img/select_gif1.gif"/>

### More explanation clearly here: <a href="https://selectjs.vercel.app/animation.html">Animation</a>

### -Event triggering animation:

```javascript
var objectProperty={typeAnimation:"bounceout","property":[{transform:["translateZ","rotateZ","rotateX"]},"left"],
from:800,to:0,duration:2000}
var objectProperty2={typeAnimation:"bounceout","property":"borderRadius",
from:50,to:0,duration:2000}
var objectProperty3={typeAnimation:"bounceout","property":[{transform:["translateX","rotateY","rotateZ"]},"left"],
from:0,to:500,duration:2000}
select("#event_here",animate(select('#div'),objectProperty,objectProperty2,select('.cube'),objectProperty3));//"e:x|y"  x:event,y:(false or true) is a useCapture,"e:click|false" is Default
 
```
<img alt="Selecting DOM elements" src="https://selectjs.vercel.app/src/img/select_gif2.gif"/>

### More explanation clearly here: <a href="https://selectjs.vercel.app/eventTriggeringAnimation.html">Event triggering animation</a>

### -Event triggering any function: <a href="https://selectjs.vercel.app/selectJs_DOM_EventListener.html">DOM Event Listener</a>

### -Image Slider:

### The explanation clearly here: <a href="https://selectjs.vercel.app/imageSlider.html">Image Slider</a>

### -Drag and Drop Elements:
```html
Drag’n’Drop algorithm
drag(d,w,string1,string2,string3)();
d (Obligatory):the element dragged.
w (Optional):Where to drag the element dragged.
string1,string2,string3 (Optional): the type of event ,("e:mousedown","e:mousemove","e:mouseup") is default.
```

### More explanation clearly here: <a href="https://selectjs.vercel.app/dragAndDrop.html">Drag and Drop</a>

### -Supported browsers:

Firefox 2+
Safari 3+
Opera 9.64+
Chrome (all versions)
IE10, IE11, Edge

We love feedback!
-----------------

