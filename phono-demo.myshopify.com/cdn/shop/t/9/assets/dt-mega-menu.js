/** Shopify CDN: Minification failed

Line 81:4 Transforming let to the configured target environment ("es5") is not supported yet

**/

$(document).ready(function($) {
    "use strict";

    $('.menu-item-has-children > a').mouseenter(function(e) {
        var selected = $(this);
        if (selected.next('div.sub-menu-block').hasClass('is-hidden')) {
            selected.addClass('selected').next('div.sub-menu-block').removeClass('is-hidden');
        } else {
            selected.removeClass('selected').next('div.sub-menu-block').addClass('is-hidden');
        }
        e.preventDefault();
    }).mouseleave(function(e) {
        var selected = $(this);
        if (selected.next('div.sub-menu-block').hasClass('is-hidden')) {
            selected.addClass('selected').next('div.sub-menu-block').removeClass('is-hidden');
        } else {
            selected.removeClass('selected').next('div.sub-menu-block').addClass('is-hidden');
        }
        e.preventDefault();
    });


    function megaMenu() {

        if ($("#header").length) {
            var parentRow = $("#header");
            var parentLeft = parseInt(parentRow.css("marginLeft").replace('px', '80px'));
        } else {
            var parentRow = $("#header");
            var parentLeft = parseInt(parentRow.offset().left);

        }
        var parentWidth = parentRow.width();
        $("#header .page-width .dt-nav li:not(.close-nav)").each(function() {
            var thisItem = $(this);
            if (thisItem.hasClass('has-mega-menu')) {
                var thisItemLeft = thisItem.find('a').offset().left;
                var menuLeft = parseInt(thisItemLeft - parentLeft);
                // var menuLeft = menuLeft - 50;   
                thisItem.find('.sub-menu-block').css('width', parentWidth);
                thisItem.find('.sub-menu-block').css('left', -menuLeft);
            }
        });

        $("sticky-header .dt-nav li:not(.close-nav)").each(function() {
            var thisItem = $(this);
            if (thisItem.hasClass('has-mega-menu')) {
                var thisItemLeft = thisItem.find('a').offset().left;
                var menuLeft = parseInt(thisItemLeft - parentLeft);
                thisItem.find('.sub-menu-block').css('width', parentWidth);
                thisItem.find('.sub-menu-block').css('left', -menuLeft);
            }
        });

        window.setTimeout(function() {
            $(window).trigger('resize');
        }, 800);
    }

    var megaMenuResize = false;
    $(window).bind("resize", function() {
        if (!megaMenuResize) {
            megaMenu();
            megaMenuResize = true;
        }
    });
    megaMenu();
});


$(function() {
    if ($(window).width() >= 750) {
        $('.tabs-nav a').click(function() {
            let id = $(this).attr('href');
            $('.tabs-nav li').removeClass('active');
            $(this).parent().addClass('active');
            $(this).parent().parent().parent().parent().addClass('active');
            $('.tabs-content li.dt-sc-menu-tabs').hide();
            $(this).parent().parent().parent().parent().find(id).show();

            return false;
        });
    }
    if ($(window).width() <= 749) {
        $('.mobileTabs .tabs  li').each(function() {
            $(this).click(function() {
                $(this).next('div').slideToggle(0);
            });
        })
    }
});