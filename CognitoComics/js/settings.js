
// iPhone scrollTo
setTimeout(function () {
  window.scrollTo(0, 1);
}, 1000);

// Page Slide for Mobile
$("#open").pageslide({ direction: "left"});

// Sticky nav

$(window).load(function(){
  $("#mainnav").sticky({ topSpacing: 0 });
});


// One Page Navigation

$('#fluid-nav').onePageNav({
    currentClass: 'current',
    changeHash: true,
    scrollSpeed: 750,
    scrollOffset: 0,
    scrollThreshold: 0.5,
    filter: ':not(.external)',
    easing: 'swing',
    begin: function() {
        $.pageslide.close();
    },
    end: function() {
        //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
    }
});


// Smooth scroll

$(document).ready(function() {

    $(".scroll-link").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });

});

