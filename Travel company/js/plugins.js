/*global $, alert, console*/

$(function () {
    'use strict';
    var myHeader = $('.header');
    // Adjust header height
    myHeader.height($(window).height());
    $(window).resize(function () {
        myHeader.height($(window).height());
    });

    //Active page
    $('.links li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});
