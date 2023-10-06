$(window).width() > 990 && jQuery(function($2) {
    $2(".dt-sc-hotspot-item").each(function() {
        var pop = $2(this).find(".dt-sc-hotspot-popup");
        pop.click(function(e) {
            e.stopPropagation()
        }), $2(this).find("a.dt-sc-hotspot-marker").click(function(e) {
            e.preventDefault(), e.stopPropagation(), $2(this).closest(".dt-sc-hotspot-item").addClass("open"), $2(this).closest(".dt-sc-hotspot-popup").toggleClass("dt-sc-popup-open")
        }), $2(document).click(function() {
            pop.removeClass("dt-sc-popup-open"), $2(".dt-sc-hotspot-item").removeClass("open")
        })
    })
}), $(window).width() < 991 && ($(".dt-sc-hotspot-popup").addClass("mfp-hide"), $(".dt-sc-hotspot-marker").each(function() {
    $(this).magnificPopup({
        type: "inline"
    })
}));
//# sourceMappingURL=/cdn/shop/t/9/assets/hotspot.js.map?v=130613439816656625081677841969