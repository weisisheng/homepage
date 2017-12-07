function byChunks(items, chunkSize) {
    const pieces = items.length / chunkSize;

    var wrapper = jQuery("<div/>");
    var dots = jQuery("<div />");
    var item;

    for (var i = 0; i < pieces; i++) {
        item = $("<div/>", {
            class: "successful-resumes-carousel-align",
        });

        for (var j = 0; j < chunkSize; j++) {
            item.append($(items[i * chunkSize + j]));
        }

        wrapper.append(
            $("<div/>", {
                class: "item item-bg " + (i === 0 ? "active" : ""),
            }).append(item)
        );

        dots.append(
            $("<li />", {
                "data-target": "#resume",
                class: i === 0 ? "active" : "",
                "data-slide-to": i,
            })
        );
    }

    $("#resume-dots").html(dots.html());
    $(".successful-resumes-carousel-items").html(wrapper.html());

    if (pieces > 1) {
        $(".successful-resumes-resumes-list .carousel-control").show();
    } else {
        $(".successful-resumes-resumes-list .carousel-control").hide();
    }
}

function onResize(items) {
    var CHUNK_SIZE = 1;

    var width = document.body.scrollWidth;

    if (width > 1200) {
        CHUNK_SIZE = 4;
    } else if (width > 992) {
        CHUNK_SIZE = 3;
    } else if (width > 768) {
        CHUNK_SIZE = 2;
    }

    byChunks(items, CHUNK_SIZE, "hidden-xs hidden-md hidden-lg");
    $("#resume").carousel();
}

(function() {
    var items = jQuery(".resume-container");

    $(window).resize(function() {
        onResize(items);
    });
    onResize(items);
})();