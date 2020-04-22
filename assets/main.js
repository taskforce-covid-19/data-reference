$(function () {
    $(".js-open-details").on("click", function (e) {
        e.preventDefault();
        $(this).parents(".card").find(".overlay-panel").addClass("active");
    });
    $(".js-close-details").on("click", function (e) {
        e.preventDefault();
        $(this).parents(".overlay-panel").removeClass("active");
    });

    $(".js-btn-filter").on("click", function (e) {
        e.preventDefault();
        var $btn = $(this);
        var $siblings = $btn.siblings();
        var $cards = $(".card-risorsa");
        var tipo = $btn.data("tipo");

        // switch on clicked button
        $btn.removeClass("btn-outline-primary").addClass("btn-primary");

        // switch off sibling buttons
        $siblings.each(function () {
            var $sibling = $(this);
            $sibling.removeClass("btn-primary");
            if ($sibling.is("button")) {
                $sibling.addClass("btn-outline-primary");
            }
        });

        $cards.each(function () {
            var $card = $(this);
            if (tipo == "" || $card.data("tipo") == tipo) {
                $card.show();
            } else {
                $card.hide();
            }
        });
    });

    $(".js-radio-filter").on("click", function (e) {
        var $cards = $(".card-risorsa");

        var titolare = $('input[name="topic-filters"]:checked', '#topic-filters').val();
        $cards.each(function () {
            var $card = $(this);
            if (titolare == "" || $card.data("titolare") == titolare) {
                $card.show();
            } else {
                $card.hide();
            }
        });
    });
});
