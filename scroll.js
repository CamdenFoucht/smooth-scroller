    let scrollY = 0;
    let distance = 30;
    let speed = 10;

    function smoothScrollDown(id) {
        let currentY = window.pageYOffset;
        let targetY = document.getElementById(id).offsetTop;
        let bodyHeight = document.body.offsetHeight;
        let yPos = currentY + window.innerHeight;
        let scroller = setTimeout(() => smoothScrollDown(id), speed);
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

    function smoothScrollUp(id) {
        let currentY = window.pageYOffset;
        let targetY = document.getElementById(id).offsetTop;
        let scroller = setTimeout(() => smoothScrollUp(id), speed);
        if (currentY > targetY) {
            scrollY = currentY - distance;
            window.scroll(0, scrollY);
        } else {
            clearTimeout(scroller);
        }
    }