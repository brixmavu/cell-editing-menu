//Trigger action when the contextmenu is about to be shown
$(".layout_template").on('contextmenu', function (event) {
    // prevent the default contextmenu
    event.preventDefault();

    $('.custom-menu').finish().toggle(100).

        //right position (mouse)
        css({
            top: event.pageY + "px",
            left: event.pageX + "px"
        });
});

$(".layout_template").mousedown(function (e) {
    //if the clicked element is not the menu
    if (!$(e.target).parents(".custom-menu").length > 0) {
        //hide it
        $(".custom-menu").hide(100);
    }
});

// if the menu element is clicked
$(".custom-menu li").on('click', function () {
    // Triggered action name
    switch ($(this).attr('data-action')) {
        case 'first':
            alert('msg');
            break;
        case 'second':
            alert('msg');
            break;
        case 'third':
            alert('msg');
            break;
    }
});

$('.custom-menu').hide(100);