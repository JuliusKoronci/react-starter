var $chatbox_wrapper = $('#chatbox_wrapper');

$(function() {
    $body.addClass('sidebar_secondary_active sidebar_secondary_persisten');

    altair_chat_alt.chat_list();
    altair_chat_alt.chatboxes();
});

altair_chat_alt = {
    chat_list: function() {
        var source = $("#chatbox_template").html();
        // show chatbox
        $('#chatboxes').on('click','> li', function() {
            var $this = $(this),
                isActive = $this.hasClass('chatbox_active');

            if(!isActive) {
                $this.addClass('chatbox_active');
                var context = {
                    username: $(this).attr('data-user'),
                    conversation: [
                        {
                            avatarUrl: 'assets/img/avatars/'+$(this).attr('data-user-avatar')+'_tn.png',
                            messages: [
                                {
                                    time: 1473940165000,
                                    text: 'lorem ipsum dolor sit amet...'
                                },
                                {
                                    time: 1473940165000,
                                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, est, quasi. Accusamus adipisci consequuntur exercitationem inventore itaque'
                                },
                                {
                                    time: 1473940165000,
                                    text: 'Enim, est, quasi. Accusamus adipisci consequuntur exercitationem inventore itaque'
                                }
                            ]
                        },
                        {
                            own: true,
                            messages: [
                                {
                                    time: 1473940165000,
                                    text: 'Accusamus adipisci consequuntur exercitationem inventore itaque'
                                },
                                {
                                    time: 1473940165000,
                                    text: 'consequuntur exercitationem inventore itaque'
                                },
                                {
                                    time: 1473940165000,
                                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                                }
                            ]
                        }
                    ]
                },
                template = Handlebars.compile(source);

                Handlebars.registerPartial("conversation", $("#chatbox_conversation").html());
                Handlebars.registerPartial("messages", $("#chatbox_messages").html());

                var html = template(context);
                $chatbox_wrapper.prepend(html);

                var $chatbox =  $chatbox_wrapper.children('.chatbox:first-child'),
                    $chatbox_content = $chatbox.find('.chatbox_content');

                $chatbox_content.scrollTop($chatbox_content[0].scrollHeight);

            }
        });
    },
    chatboxes: function () {

        // disable page scroll when scrolling chatbox content
        $chatbox_wrapper.on( 'mousewheel DOMMouseScroll', '.chatbox_content', function (e) {
            var e0 = e.originalEvent;
            var delta = e0.wheelDelta || -e0.detail;
            this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
            e.preventDefault();
        });

        // make chatbox active
        $chatbox_wrapper.on('click','.chatbox',function(e) {
            e.preventDefault();
            if($(e.target).closest('.chatbox_close').length) {
                return;
            }
            $chatbox_wrapper.find('.cb_active').not($(this)).removeClass('cb_active');
            var $chatbox = $(this);
            if(!$chatbox.hasClass('cb_active')) {
                $chatbox.addClass('cb_active');
                if(!$(e.target).closest('.actions_dropdown').length) {
                    $chatbox.find('.message_input').focus();
                }
            }
        });
        // make chatbox inactive
        $document.on('click',function(e) {
            if(!$(e.target).closest('.chatbox').length) {
                $chatbox_wrapper.find('.cb_active').removeClass('cb_active');
            }
        });

        // close chatbox
        $chatbox_wrapper.on('click','.chatbox_close',function(e) {
            e.preventDefault();

            var $chatbox = $(this).closest('.chatbox').addClass('removing'),
                user = $chatbox.attr('data-user');
            setTimeout(function() {
                $('#chatboxes').children('li[data-user="'+user+'"]').removeClass('chatbox_active');
                $chatbox.remove();
            },280)
        });

        // send message
        $chatbox_wrapper.on('keyup','.message_input',function(e) {
            var $this = $(this);
            e.preventDefault();
            var code = e.keyCode || e.which;
            if(code == 13 && $this.val() != '') {
                var $chatbox = $(this).closest('.chatbox'),
                    $chatbox_content = $chatbox.find('.chatbox_content'),
                    conversation_template = Handlebars.compile($("#chatbox_conversation").html());
                    messages_template = Handlebars.compile($("#chatbox_messages").html());

                var context = {
                    conversation: [
                        {
                            own: true,
                            messages: [
                                {
                                    time: new Date().getTime(),
                                    text: $this.val()
                                }
                            ]
                        }
                    ]
                };

                var conversation = conversation_template(context),
                    messages = messages_template(context.conversation[0]);

                if(!$chatbox_content.children('.chatbox_message:last-child').hasClass('own')) {
                    $chatbox_content.append(conversation);
                } else {
                    $chatbox_content.children('.chatbox_message:last-child').children('ul').append(messages);
                }

                $(this).val('');

                $chatbox_content.scrollTop($chatbox_content[0].scrollHeight);

            }
        });

    }
};