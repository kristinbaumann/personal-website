$(document).ready(function() {

    // bind event to trigger of Welcome section
    var layoutContent = document.querySelector('article');
    $('#welcomeContainer').on('click', '.trigger', function() {
        var offset = $(layoutContent).scrollTop() + $('#about').offset().top;
        $('html, body').animate({
            scrollTop: offset
        }, 700, 'easeOutQuint');
    });
    $('.home-page').on('click', '.triggerExperience', function() {
        ga('send', 'event', 'Navigation', 'click', 'Experience');
        var offset = $(layoutContent).scrollTop() + $('#experience').offset().top;
        $('html, body').animate({
            scrollTop: offset
        }, 700, 'easeOutQuint');
    });
    $('.home-page').on('click', '.triggerPortfolio', function() {
        ga('send', 'event', 'Navigation', 'click', 'Portfolio');
        var offset = $(layoutContent).scrollTop() + $('#portfolio').offset().top;
        $('html, body').animate({
            scrollTop: offset
        }, 700, 'easeOutQuint');
    });
    $('.home-page').on('click', '.triggerBlog', function() {
        ga('send', 'event', 'Navigation', 'click', 'Blog');
        var offset = $(layoutContent).scrollTop() + $('#blogs').offset().top;
        $('html, body').animate({
            scrollTop: offset
        }, 700, 'easeOutQuint');
    });


    function loadSection(sectionId, nextSectionId) {
        var $section = $('#' + sectionId);
        var $nextSection = $('#' + nextSectionId);
        $section.children('.opacity-0').removeClass('opacity-0');
        // lazyload by aload
        $section.find('*[data-aload]').each(function(i, ele) {
            aload(ele);
        });
        // preload resource of next section for better experience
        $nextSection.find('*[data-aload]').each(function(i, ele) {
            aload(ele);
        });
    }

    // scroll to top after reload/go back
    window.onbeforeunload = function() {
        document.body.style.opacity = 0;
        window.scrollTo(0, 0);
    }


    var arrSections = []; // array of unloaded section ID
    $('section').each(function(i, ele) {
        if (i > 0) {
            arrSections.push(ele.id);
        }
    });
    // lazyload when scrolling
    $(document).scroll(function() {
        if (arrSections.length > 0) {
            var sectionId = arrSections[0];
            var nextSectionId = arrSections[1];
            var docScrollTop = $(document).scrollTop();
            var nextOffset = $('#' + sectionId).offset().top - window.innerHeight / 2;
            if (docScrollTop > nextOffset) {
                ga('send', 'event', 'Loading', 'scroll', sectionId);
                loadSection(sectionId, nextSectionId);
                arrSections.splice(0, 1); // remove loaded section ID
            }
        }
    });

    var listSwiper = {};
    // open popup event
    $(document).on('opened', '.remodal', function() {
        // init swiper in project popup
        var remodalId = $(this).data('remodal-id');
        ga('send', 'event', 'Portfolio', 'open', remodalId);
        if (!listSwiper[remodalId]) {
            new Swiper($(this).children('.swiper-container')[0], {
                // autoplay: 5000,
                preloadImages: false,
                lazyLoading: true,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                slidesPerView: 1,
                spaceBetween: 10,
                keyboardControl: true,
                a11y: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev'
            });
            listSwiper[remodalId] = true;
        }
        // load youtube iframe
        $(this).find('*[data-aload]').each(function(i, ele) {
            aload(ele);
        });
    });
    // stop playing video after closing popup
    $(document).on('closed', '.remodal', function(e) {
        $('iframe').each(function() {
            this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        });
    });
});
