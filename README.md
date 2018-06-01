# smooth-scroller
Smooth scrolling effect using Javascript



<h2>How to use</h2>

<h4>First import the scroll.js file into your HTML file </h4>

```html

<script src="./scroll.js"></script>

```

<h4>Using the smoothScroller module, call scrollUp or scrollDown passing the id of the target element</h4>

```html

<a href="#" onclick="smoothScroller.scrollUp('yourElementIdHere'); return false;"> Smooth scroll upwards </a>
<a href="#" onclick="smoothScroller.scrollDown('yourElementIdHere'); return false;"> Smooth scroll downwards </a>


```


<h4>Change the scroll settings by changing the speed or distance variable in scroll.js</h4>

```js

var distance = 30;
var speed = 10;

```

<h2> Live example </h2>
<p>https://s3-us-west-1.amazonaws.com/smooth-scroller/index.html</p>
