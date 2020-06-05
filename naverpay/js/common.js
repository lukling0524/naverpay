$(document).ready(function () {
    // one page.js setting  
    $("#onepage").onepage_scroll({
        sectionContainer: "div.page",
        easing: "ease",
        animationTime: 1000,
        pagination: true,
        updateURL: false,
        beforeMove: function (index) { },
        afterMove: function (index) { },
        loop: false,
        keyboard: true,
        responsiveFallback: false,
        direction: "vertical"
    });

    $('.slide_container').each(function () {
        //slide
        var frame = $('.frame'),
            slide = frame.find('.slide'),
            slideWidth = slide.width(),
            slideCount = slide.length,
            arrow = $('.arrow button'),
            pagination = $('.pagination li'),
            dot = pagination.find('a'),
            index = 0;

        //좌,우 화살표 클릭
        arrow.on('click', function () {
            if ($(this).hasClass('next')) {
                index++;
                if (index > slideCount - 1) index = 0;
                mainSlide();
            } else {
                index--;
                if (index < 0) index = slideCount - 1;
                mainSlide();
            }
        });

        //인디케이터 클릭
        dot.on('click', function () {
            index = $(this).parent().index();
            frame.animate({ 'margin-left': - slideWidth * index }, 800, 'swing');

            dot.removeClass('on');
            $(this).addClass('on');
        });

        function mainSlide() {
            frame.animate({ 'margin-left': - slideWidth * index }, 800, 'swing');
            dot.removeClass('on');
            pagination.eq(index).find('a').addClass('on');
        }
    });


}); //document END;


jQuery.event.special.mousewheel = {
    setup: function (_, ns, handle) {
        // console.log(ns); 
        if (ns.includes("noPreventDefault")) {
            this.addEventListener("mousewheel", handle, { passive: true });
        } else {
            this.addEventListener("mousewheel", handle, { passive: false });
        }
    }
};



