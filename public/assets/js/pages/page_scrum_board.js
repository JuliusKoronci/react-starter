$(function() {
    // set width for scrum board container
    altair_scrum_board.init();
    // draggable tasks
    altair_scrum_board.draggable_tasks();
});

altair_scrum_board = {
    init: function() {
        var $scrumBoard = $('#scrum_board'),
            childWidth = $scrumBoard.children('div').width(),
            childsCount = $scrumBoard.children('div').length;

            $scrumBoard.width(childWidth * childsCount);
    },
    draggable_tasks: function() {

        var drake = dragula($('.scrum_column > div').toArray());

        var containers = drake.containers,
            length = containers.length;

        for (var i = 0; i < length; i++) {
            $(containers[i]).addClass('dragula dragula-vertical');
        }

        drake.on('drop', function(el, target, source, sibling) {
            console.log(el);
            console.log(target);
            console.log(source);
        })

    }
};