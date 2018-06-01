var smoothScroller = (function() {
    var scrollY = 0;
    var distance = 30;
    var speed = 10;

    var __scrollDown = function(id) {
        var currentY = window.pageYOffset;
        var targetY = document.getElementById(id).offsetTop;
        var bodyHeight = document.body.offsetHeight;
        var yPos = currentY + window.innerHeight;
        var scroller = setTimeout(() => __scrollDown(id), speed);
        if (yPos > bodyHeight) {
            clearTimeout(scroller);
        } else {
            if (currentY < targetY) {
                scrollY = currentY + distance;
                window.scroll(0, scrollY);
            } else {
                clearTimeout(scroller);
            }
        }
    }

    var __scrollUp = function(id) {
        var currentY = window.pageYOffset;
        var targetY = document.getElementById(id).offsetTop;
        var scroller = setTimeout(() => __scrollUp(id), speed);
        if (currentY > targetY) {
            scrollY = currentY - distance;
            window.scroll(0, scrollY);
        } else {
            clearTimeout(scroller);
        }
    }

    return {
        scrollDown: __scrollDown,
        scrollUp: __scrollUp
    }

})();