$(function() {
    altair_push_notifications.init();
});

altair_push_notifications  = {
    init: function() {

        $('#pushDemo').on('click',function(e){
            e.preventDefault();
            Push.create("Hello!", {
                body: "How's it hangin'?",
                icon: 'assets/img/avatars/avatar_11@2x.png',
                timeout: 10000,
                onClick: function () {
                    window.focus();
                    this.close();
                }
            });
        })

    }
};