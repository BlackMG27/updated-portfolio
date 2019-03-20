//code for smooth scroll
$('a[href*="#"]')
// Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length
                ? target
                : $('[name=' + this.hash.slice(1) + ']');
            // Checks to see if the link exists
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target
                        .offset()
                        .top
                }, 900, function () {
                    // Callback after animation Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        // Checking if the target was focused
                        return false;
                    } else {
                        // Adding tabindex for elements not focusable
                        $target.attr('tabindex', '-1');
                        // Set focus again
                        $target.focus();
                    };
                });
            }
        }
    });

function openNav() {
    document
        .getElementById('topNav')
        .style
        .width = '250px';
    document
        .getElementById('main')
        .style
        .marginLeft = '250px';
}

function closeNav() {
    document
        .getElementById('topNav')
        .style
        .width = '0';
    document
        .getElementById('main')
        .style
        .marginLeft = '0';
}