$(document).ready(function() {
    // http://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';
    // At least Safari 3+: "[object HTMLElementConstructor]"
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/ false || !!document.documentMode;
    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;
    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;
    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;
    window.os = {
        isOpera: isOpera,
        isFirefox: isFirefox,
        isSafari: isSafari,
        isIE: isIE,
        isEdge: isEdge,
        isChrome: isChrome,
        isBlink: isBlink
    };

    // disable/enable scroll (mousewheel and keys) from http://stackoverflow.com/a/4770179
    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    var keys = [32, 37, 38, 39, 40],
        wheelIter = 0;

    function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;
    }

    function keydown(e) {
        for (var i = keys.length; i--;) {
            if (e.keyCode === keys[i]) {
                preventDefault(e);
                return;
            }
        }
    }

    function touchmove(e) {
        preventDefault(e);
    }

    function wheel(e) {
        preventDefault(e);
    }

    function disable_scroll() {
        window.onmousewheel = document.onmousewheel = wheel;
        document.onkeydown = keydown;
        document.body.ontouchmove = touchmove;
    }

    function enable_scroll() {
        window.onmousewheel = document.onmousewheel = document.onkeydown = document.body.ontouchmove = null;
    }

    // load font
    function loadFont(fontName) {
        fontName = fontName.replace(/\s+/g, '+');
        var linkFont = document.createElement('link');
        linkFont.rel = 'stylesheet';
        linkFont.type = 'text/css';
        linkFont.href = 'https://fonts.googleapis.com/css?family=' + fontName + ':100,400';
        document.getElementsByTagName('head')[0].appendChild(linkFont);
    }
    function loadFontAwesome(){
        var linkFont = document.createElement('link');
        linkFont.rel = 'stylesheet';
        linkFont.type = 'text/css';
        linkFont.href = "../assets/css/font-awesome/font-awesome.min.css";
        document.getElementsByTagName('head')[0].appendChild(linkFont);
    }
    loadFont('Lato');
    loadFont('Roboto Slab');
    loadFontAwesome();

    $(function() {
        // show content after document ready
        document.body.style.opacity = 1;

        // scroll animation when click anchor
        var layoutContent = document.querySelector('article');
        var ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf("ucbrowser") < 0) { // not UCBrowser
            $('a[href*=#]:not([href=#])').click(function() {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        var offset = $(layoutContent).scrollTop() + target.offset().top - 25;
                        $('html, body').animate({
                            scrollTop: offset
                        }, 700, 'easeOutQuint');
                        return false;
                    }
                }
            });
        }

    });
});
