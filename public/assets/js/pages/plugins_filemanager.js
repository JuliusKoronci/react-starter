$(function() {
    // filemanager
    $('#fileManager').elfinder({
        height: $('body').height() - 140,
        url : 'file_manager/php/connector.minimal.php'  // connector URL (REQUIRED)
        // lang: ''                        // language (OPTIONAL)
    });
});