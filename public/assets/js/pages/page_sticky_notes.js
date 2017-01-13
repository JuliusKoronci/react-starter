$(function() {
    // add note
    altair_sticky_notes.add_note();
    // note actions
    altair_sticky_notes.actions();
    // load sticky notes
    altair_sticky_notes.load_notes();

    // slider fix
    $('#top_bar').find('.uk-slidenav-position').on('focusitem.uk.slider', function(event, index, item) {
        $(event.target).addClass('uk-slidenav-hover');
    });
});

var $note_template = $('#note_template').html(),
    $note_form_template = $('#note_form_template').html(),
    $note_form_text = $('.note_form_text'),
    $form = $('#note_form'),
    $form_card = $form.closest('.md-card'),
    $grid = $('#notes_grid'),
    pallete = ['md-bg-white','md-bg-red-500','md-bg-pink-500','md-bg-purple-500','md-bg-indigo-500','md-bg-blue-500','md-bg-cyan-500','md-bg-teal-500','md-bg-green-500','md-bg-lime-500','md-bg-yellow-500','md-bg-amber-500','md-bg-brown-500','md-bg-blue-grey-500'],
    $card = $form.closest('.md-card'),
    // callback after note color select
    changeBg = function(remove) {
        var color = $('#notes_colors_wrapper').find('input').val();
        if(typeof color != 'undefined') {
            $.each(pallete,function (key,value) {
                var color = replaceColor(value);
                if($card.hasClass(color)) {
                    $card.removeClass(color);
                }
            });
            if(!remove) {
                $card.addClass(replaceColor(color));
            }
        }
    },
    // notes color picker
    notesColorPicker = altair_helpers.color_picker($('<div id="notes_colors_wrapper"></div>'),pallete,changeBg).prop('outerHTML');

function hide_note_form() {
    $form.fadeOut('fast',function() {
        changeBg(true);
        $form.html('');
        $form_card.velocity('reverse', {
            complete: function() {
                $note_form_text.show();
                $form_card.removeClass('card-expanded');
            }
        });
        $window.resize();
    });
}

function replaceColor(color) {
    if(color) {
        var replaceColor = color.split('-'),
            lastEl = replaceColor[replaceColor.length -1];
        if(!isNaN(lastEl)) {
            replaceColor.pop();
            var replacedColor = replaceColor.join('-') + '-100'
        } else {
            var replacedColor = replaceColor.join('-')
        }
        return replacedColor;
    } else {
        return false;
    }
}

altair_sticky_notes = {
    add_note: function() {

        $form_card.css({
            minHeight: $form_card.actual('height')
        });

        // show note form
        $form_card.on('click', function(e) {
            if(!$form_card.hasClass('card-expanded')) {
                var template = Handlebars.compile($note_form_template),
                    context = {
                        'labels': [
                            {
                                'text': 'label 1',
                                'text_safe': 'label_1',
                                'type': 'default'
                            },
                            {
                                'text': 'label 2',
                                'text_safe': 'label_2',
                                'type': 'warning'
                            },
                            {
                                'text': 'label 3',
                                'text_safe': 'label_3',
                                'type': 'danger'
                            },
                            {
                                'text': 'label 4',
                                'val': 'label_4',
                                'type': 'success'
                            },
                            {
                                'text': 'label 5',
                                'text_safe': 'label_5',
                                'type': 'primary'
                            }
                        ]
                    };
                    html = template(context);

                $form.hide().html(html);
                $note_form_text.hide();

                var minHeight = $form.actual('height');

                $form_card
                    .velocity({
                        minHeight: minHeight
                    }, {
                        duration: 200,
                        easing: easing_swiftOut,
                        complete: function (elements) {
                            $form.fadeIn('fast');
                            $('#note_f_title').focus();
                            $window.resize();
                        }
                    });

                $form_card.addClass('card-expanded');

                $('#notes_cp').append(notesColorPicker);
                // initialize md inputs
                altair_md.inputs($form);
                // initialize textarea autosize
                altair_forms.textarea_autosize();
                // initialize iCheck checkboxes
                altair_md.checkbox_radio($form.find('[data-md-icheck]'));
            }

        });

        // add note
        $form.on('click', '#note_add', function(e) {
            e.preventDefault();
            var $title_input = $('#note_f_title'),
                title = $title_input.val(),
                $content_input = $('#note_f_content'),
                content = $content_input.val().replace(/\n/g, '<br />');

            $title_input.removeClass('md-input-danger');
            $content_input.removeClass('md-input-danger');

            if(title == '') {
                $title_input.addClass('md-input-danger');
                altair_md.update_input($title_input);
                return;
            }
            if(content == '') {
                $content_input.addClass('md-input-danger');
                altair_md.update_input($content_input);
                return;
            }

            if(title && content) {
                var color = $('#notes_cp').find('input').val(),
                    context = [{
                        'time': new Date().getTime(),
                        'color': replaceColor(color),
                        'title': title,
                        'content': content
                    }],
                    checkboxes = $('input[name="checkboxes"]'),
                    labels = $('input[name="labels"]');

                if(checkboxes) {
                    var checklist = [];
                    $.each(checkboxes,function (key,value) {
                        var $this = $(value);
                        checklist.push({
                            'id': $this.attr('id'),
                            'checked': $this.is(':checked'),
                            'title': $this.attr('data-title')
                        })
                    });
                    context[0].checklist = checklist;
                }

                if(labels) {
                    var labels_list = [];
                    $.each(labels,function (key,value) {
                        var $this = $(value);
                        if($this.is(':checked')) {
                            labels_list.push({
                                'type': $this.attr('data-style'),
                                'text': $this.attr('data-label'),
                                'text_safe': $this.attr('data-label').split(' ').join('-')
                            })
                        }
                    });
                    if(labels_list) {
                        context[0].labels = labels_list;
                    }
                }

                var template = Handlebars.compile($note_template),
                    html = template(context);

                $grid.prepend(html);
                $window.resize();

                // initialize iCheck
                altair_md.checkbox_radio($grid.find('[data-md-icheck]'));

                hide_note_form();
            }

        });

        // add checklist item
        var addChecklist_item = function() {
            var $note_form_checkbox_template = $('#note_form_checkbox_template').html(),
                template = Handlebars.compile($note_form_checkbox_template),
                $title_input = $('#checklist_item'),
                title = $title_input.val(),
                context = {
                    id: randID_generator(),
                    'title':  title
                },
                checklist_item = template(context);

            if(title != '') {
                var $list = $('#notes_checklist').children('ul');
                $list.append(checklist_item);
                $title_input.val('');
                altair_md.checkbox_radio($list.find('[data-md-icheck]'));
            }
        };

        // remove checklist item
        $form.on('click','.remove_checklist_item',function() {
            var $this = $(this),
                $thisItem = $this.closest('li');
            $thisItem.remove();
        });

        $form.on('click', '#checkbox_add', function(e) {
            e.preventDefault();
            addChecklist_item();
        });
        $form.on('keypress', '#checklist_item', function(e) {
            if(e.which == 13) {
                addChecklist_item();
            }
        });

        // close note form
        $(document).on('click keydown', function(e) {
            var code = e.which || e.keyCode;
            if ( $form_card.hasClass('card-expanded') && (!$(e.target).closest($form_card).length  || code == 27) ) {
                if(code != 27 && code != 1) {
                    return;
                }
                hide_note_form();
            }
        });

    },
    // note actions
    actions: function() {
        // remove note
        $grid.on('click','.note_action_remove', function() {
            var $this_note = $(this).closest('.md-card').parent();
            $this_note.addClass('uk-animation-scale-up uk-animation-reverse');
            setTimeout(function() {
                $this_note.remove();
            },300);
        });
    },
    // load notes
    load_notes: function() {
        var context = [
            {
                'time': 1475604600000,
                'color': 'md-bg-red-100',
                'title': 'Lorem impsum dolor sit',
                'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam molestias quidem repellendus saepe vero! Assumenda fugiat perferendis reiciendis repellat voluptas?',
                'labels': [
                    {
                        'type': 'primary',
                        'text': 'label 5',
                        'text_safe': 'label-5'
                    }
                ]
            },
            {
                'time': 1475691265322,
                'title': 'Lorem ipsum',
                'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam molestias quidem repellendus saepe vero!',
                'labels': [
                    {
                        'type': 'default',
                        'text': 'label 1',
                        'text_safe': 'label-1'
                    }
                ],
                'checklist': [
                    {
                        'checked': false,
                        'title': 'first item'
                    },
                    {
                        'checked': true,
                        'title': 'second item'
                    },
                    {
                        'checked': false,
                        'title': 'third item'
                    },
                    {
                        'checked': false,
                        'title': 'fourth item'
                    }
                ]
            },
            {
                'time': 1475691265322,
                'color': 'md-bg-green-100',
                'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda fugiat perferendis reiciendis repellat voluptas?',
                'labels': [
                    {
                        'type': 'warning',
                        'text': 'label 2',
                        'text_safe': 'label-2'
                    },
                    {
                        'type': 'danger',
                        'text': 'label 3',
                        'text_safe': 'label-3'
                    }
                ]
            },
            {
                'time': 1475604600000,
                'color': 'md-bg-yellow-100',
                'title': 'Lorem impsum dolor sit',
                'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam molestias quidem repellendus saepe vero! Assumenda fugiat perferendis reiciendis repellat voluptas?',
                'labels': [
                    {
                        'type': 'success',
                        'text': 'label 4',
                        'text_safe': 'label-4'
                    },
                    {
                        'type': 'primary',
                        'text': 'label 5',
                        'text_safe': 'label-5'
                    }
                ]
            }
        ];

        var template = Handlebars.compile($note_template),
            html = template(context);

        $grid.prepend(html);

        // initialize iCheck
        altair_md.checkbox_radio($grid.find('[data-md-icheck]'));

    }
};