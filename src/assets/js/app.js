function isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints;
}

function preloadImages(images) {
    if (images.length > 0) {
        var img = new Image ();
        img.onload = function() {
            preloadImages(images.slice(1));
        }
        img.src = images[0];
    }
}

$(function() {
    preloadImages($.map($('div[data-preload]'), function (item){ return item.dataset || item.dataset.preload }));

    // load lines background after all resources are downloaded
    $(".dating-resume-lines, .homepage-lines").css(
        "background-image",
        "url(/img/homepage/lines-bg.png)"
    );

    if (isTouchDevice()) {
        $("body").css("cursor", "pointer");
        $('[data-toggle="popover"]').popover({ trigger: "hover" });
    } else {
        $('[data-toggle="popover"]').popover({ trigger: "focus" });
    }

    $(document).on("show.bs.popover", function(event) {
        $('[data-toggle="popover"]').not(event.target).popover("hide");
    });

    $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" });

    $(".carousel").bcSwipe();

    $('[data-toggle="popover"]').eq(4).popover("show");

    $(window).load(function() {
        $('#landing-tips [data-toggle="popover"]').eq(0).popover("show");
    });

    // Tandem tags filter
    $(".tandem .tandem-all").click(function() {
        $(".active").removeClass("active");
        $(this).addClass("active");
        $(".tandem .abillity-tandem-1, .tandem .abillity-tandem-2").show();
    });

    $(".tandem .tandem-1").click(function() {
        $(".active").removeClass("active");
        $(this).addClass("active");
        $(".tandem .abillity-tandem-1").show();
        $(".tandem .abillity-tandem-2").hide();
    });

    $(".tandem .tandem-2").click(function() {
        $(".active").removeClass("active");
        $(this).addClass("active");
        $(".tandem .abillity-tandem-2").show();
        $(".tandem .abillity-tandem-1").hide();
    });

    $('.who-are-you .select-state, .who-are-you .carousel-indicators li').click(function() {
        setTimeout(function() {
            $('.state-view.active [data-toggle="popover"]').first().popover('show');
        }, 610)
    });
});
