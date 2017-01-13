$(function() {

    // append modal to <body>
    $body.append('<div class="uk-modal" id="modal_idle">' +
        '<div class="uk-modal-dialog">' +
            '<div class="uk-modal-header">' +
                '<h3 class="uk-modal-title">Your session is about to expire!</h3>' +
            '</div>' +
            '<p>You\'ve been inactive for a while. For your security, we\'ll log you out automatically.</p>' +
            '<p>Click "Stay Online" to continue your session.</p>' +
            '<p>Your session will expire in <span class="uk-text-bold md-color-red-500" id="sessionSecondsRemaining"></span> seconds.</p>' +
            '<div class="uk-modal-footer uk-text-right">' +
                '<button id="staySigned" type="button" class="md-btn md-btn-flat uk-modal-close">Stay Online</button><button type="button" class="md-btn md-btn-flat md-btn-flat-primary" id="logoutSession">Logout</button>' +
            '</div>' +
        '</div>' +
    '</div>');

    var modal = UIkit.modal("#modal_idle", {
            bgclose: false
        }),
        session = {
            //Logout Settings
            inactiveTimeout: 5000,      //(ms) The time until we display a warning message
            warningTimeout: 30000,      //(ms) The time until we log them out
            minWarning: 5000,           //(ms) If they come back to page (on mobile), The minumum amount, before we just log them out
            warningStart: null,         //Date time the warning was started
            warningTimer: null,         //Timer running every second to countdown to logout
            autologout: {
                logouturl: "login.html"
            },
            logout: function () {       //Logout function once warningTimeout has expired
                window.location = session.autologout.logouturl;
            }
        },
        $sessionCounter = $('#sessionSecondsRemaining').html(session.warningTimeout/1000);

    $(document).on("idle.idleTimer", function (event, elem, obj) {
        //Get time when user was last active
        var diff = (+new Date()) - obj.lastActive - obj.timeout,
            warning = (+new Date()) - diff;

        //On mobile js is paused, so see if this was triggered while we were sleeping
        if (diff >= session.warningTimeout || warning <= session.minWarning) {
            modal.hide();
        } else {
            //Show dialog, and note the time
            $sessionCounter.html(Math.round((session.warningTimeout - diff) / 1000));
            modal.show();
            session.warningStart = (+new Date()) - diff;

            //Update counter downer every second
            session.warningTimer = setInterval(function () {
                var remaining = Math.round((session.warningTimeout / 1000) - (((+new Date()) - session.warningStart) / 1000));
                if (remaining >= 0) {
                    $sessionCounter.html(remaining);
                } else {
                    session.logout();
                }
            }, 1000)
        }
    });

    $body
        //User clicked ok to stay online
        .on('click','#staySigned', function () {
            clearTimeout(session.warningTimer);
            modal.hide();
        })
        //User clicked logout
        .on('click','#logoutSession', function () {
            session.logout();
        });

    //Set up the timer, if inactive for 5 seconds log them out
    $(document).idleTimer(session.inactiveTimeout);

});
