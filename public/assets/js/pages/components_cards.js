$(function() {
    $('#randomize').click(function(e) {
        e.preventDefault();
        var rand = Math.floor((Math.random() * 100) + 1);

        altair_md.card_progress('#random_progress',rand,true);
        $('#progress_value').text(rand);

    });
});