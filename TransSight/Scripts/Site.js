$(function () {
    // Add pagename class to the body tag
    var parts = window.location.pathname.split('/');
    var pageName = parts[parts.length - 1];
    $('body').addClass('body-' + (pageName ? pageName.toLowerCase() : 'home'));

    // Adjust footer position if shape tracing toolbar is present
    if ($('#shape-tracing-container').length) {
        $('#layout-footer').css('bottom', '2rem');
    }
});