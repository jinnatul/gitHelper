$(function() {

    // preloader
    $("main").hide();
    setTimeout(function() {
        $('.mainLoader').fadeOut();
        $("main").show();
    }, 1000);
    

    // collapsible
    $(document).ready(function() {
        $('.collapsible').collapsible();
    })

    // Smooth scrolling
    var scrollLink = $(".scroll");
    scrollLink.click(function(e) {
        e.preventDefault();
        $("body,html").animate(
        {
            scrollTop: $(this.hash).offset().top
        },
        2000
        );
    });
})