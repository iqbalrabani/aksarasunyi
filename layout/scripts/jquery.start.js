/*
Template Name: Sislaf
Author: <a href="https://www.os-templates.com/">OS Templates</a>
Author URI: https://www.os-templates.com/
Copyright: OS-Templates.com
Licence: Free to use under our free template licence terms
Licence URI: https://www.os-templates.com/template-terms
File: Back to Top JS
*/

jQuery("#start").click(function () {
    jQuery("body,html").animate({
        scrollTop: 2100
    }, 1000);
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#start").addClass("visible");
    } else {
        jQuery("#start").removeClass("visible");
    }
});