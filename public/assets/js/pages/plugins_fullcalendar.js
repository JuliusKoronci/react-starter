$(function() {
    // fullcalendar
    altair_fullcalendar.calendar_selectable();
});
altair_fullcalendar = {
    calendar_selectable: function() {
        var $calendar_selectable = $('#calendar_selectable'),
            calendarColorsWrapper = $('<div id="calendar_colors_wrapper"></div>');

        var calendarColorPicker = altair_helpers.color_picker(calendarColorsWrapper).prop('outerHTML');

        if($calendar_selectable.length) {
            $calendar_selectable.fullCalendar({
                header: {
                    left: 'title today',
                    center: '',
                    right: 'month,agendaWeek,agendaDay,listWeek prev,next'
                },
                buttonIcons: {
                    prev: 'md-left-single-arrow',
                    next: 'md-right-single-arrow',
                    prevYear: 'md-left-double-arrow',
                    nextYear: 'md-right-double-arrow'
                },
                buttonText: {
                    today: ' ',
                    month: ' ',
                    week: ' ',
                    day: ' '
                },
                aspectRatio: 2.1,
                defaultDate: moment(),
                selectable: true,
                selectHelper: true,
                select: function(start, end) {
                    UIkit.modal.prompt('' +
                        '<h3 class="heading_b uk-margin-medium-bottom">New Event</h3><div class="uk-margin-medium-bottom" id="calendar_colors">' +
                        'Event Color:' +
                        calendarColorPicker +
                        '</div>' +
                        'Event Title:',
                        '', function(newvalue){
                            if($.trim( newvalue ) !== '') {
                                var eventData,
                                    eventColor = $('#calendar_colors_wrapper').find('input').val();
                                eventData = {
                                    title: newvalue,
                                    start: start,
                                    end: end,
                                    color: eventColor ? eventColor : ''
                                };
                                $calendar_selectable.fullCalendar('renderEvent', eventData, true); // stick? = true
                                $calendar_selectable.fullCalendar('unselect');
                            }
                        }, {
                            labels: {
                                Ok: 'Add Event'
                            }
                        });
                },
                editable: true,
                eventLimit: true,
                timeFormat: '(HH)(:mm)',
                events: [
                    {
                        title: 'All Day Event',
                        start: moment().startOf('month').add(25, 'days').format('YYYY-MM-DD')
                    },
                    {
                        title: 'Long Event',
                        start: moment().startOf('month').add(3, 'days').format('YYYY-MM-DD'),
                        end: moment().startOf('month').add(7, 'days').format('YYYY-MM-DD')
                    },
                    {
                        id: 999,
                        title: 'Repeating Event',
                        start: moment().startOf('month').add(8, 'days').format('YYYY-MM-DD'),
                        color: '#689f38'
                    },
                    {
                        id: 999,
                        title: 'Repeating Event',
                        start: moment().startOf('month').add(15, 'days').format('YYYY-MM-DD'),
                        color: '#689f38'
                    },
                    {
                        title: 'Conference',
                        start: moment().startOf('day').add(14, 'hours').format('YYYY-MM-DD HH:mm'),
                        end: moment().startOf('day').add(15, 'hours').format('YYYY-MM-DD HH:mm')
                    },
                    {
                        title: 'Meeting',
                        start: moment().startOf('month').add(14, 'days').add(10, 'hours').format('YYYY-MM-DD HH:mm'),
                        color: '#7b1fa2'
                    },
                    {
                        title: 'Lunch',
                        start: moment().startOf('day').add(11, 'hours').format('YYYY-MM-DD HH:mm'),
                        color: '#d84315'
                    },
                    {
                        title: 'Meeting',
                        start: moment().startOf('day').add(8, 'hours').format('YYYY-MM-DD HH:mm'),
                        color: '#7b1fa2'
                    },
                    {
                        title: 'Happy Hour',
                        start: moment().startOf('month').add(1, 'days').format('YYYY-MM-DD')
                    },
                    {
                        title: 'Dinner',
                        start: moment().startOf('day').add(19, 'hours').format('YYYY-MM-DD HH:mm')
                    },
                    {
                        title: 'Birthday Party',
                        start: moment().startOf('month').add(23, 'days').format('YYYY-MM-DD')
                    },
                    {
                        title: 'NEW RELEASE (link)',
                        url: 'http://themeforest.net/user/tzd/portfolio',
                        start: moment().startOf('month').add(10, 'days').format('YYYY-MM-DD'),
                        color: '#0097a7'
                    }
                ]
            });
        }
    }
};

/*// calendar events
 var $calendar_selectable = $('#calendar_selectable'),
 calendarColorsWrapper = $('<div id="calendar_colors_wrapper"></div>');

 var calendarColorPicker = altair_helpers.color_picker(calendarColorsWrapper).prop('outerHTML');

 // EVENT UPDATE

 // modal
 var eUpdateModal = UIkit.modal("#calUpdate_event");

 // color picker
 altair_helpers.color_picker($('#eUpdate_colors'));

 // date range
 $dp_start = $('#eUpdate_start');
 $dp_end = $('#eUpdate_end');

 dp_start_date = UIkit.datepicker($dp_start, {
 format:'YYYY-MM-DD'
 });

 dp_end_date = UIkit.datepicker($dp_end, {
 format:'YYYY-MM-DD'
 });

 $dp_start.on('change',function() {
 dp_end_date.options.minDate = $dp_start.val();
 });

 $dp_end.on('change',function() {
 dp_start_date.options.maxDate =  moment($dp_end.val()).add(1, 'days').format('YYYY-MM-DD');
 });

 // EVENT UPDATE END

 if($calendar_selectable.length) {
 $calendar_selectable.fullCalendar({
 header: {
 left: 'title today',
 center: '',
 right: 'month,agendaWeek,agendaDay prev,next'
 },
 buttonIcons: {
 prev: 'md-left-single-arrow',
 next: 'md-right-single-arrow',
 prevYear: 'md-left-double-arrow',
 nextYear: 'md-right-double-arrow'
 },
 buttonText: {
 today: ' ',
 month: ' ',
 week: ' ',
 day: ' '
 },
 aspectRatio: 2.1,
 defaultDate: moment(),
 selectable: true,
 selectHelper: true,
 eventClick: function(event, element) {

 var e_title = event.title,
 e_start = event.start ? moment(new Date(event.start)).format('YYYY-MM-DD') : '',
 e_end = event.end ? moment(new Date(event.end)).subtract('1','days').format('YYYY-MM-DD') : '',
 updatedEvent = event;

 // update fields
 var uTitle = $('#eUpdate_title').val(e_title),
 uStart = $('#eUpdate_start').val(e_start),
 uEnd = $('#eUpdate_end').val(e_end);

 altair_md.update_input($('#eUpdate_title,#eUpdate_start,#eUpdate_end'));

 // reset colorpicker
 $('#eUpdate_colors')
 .find('.active_color').removeClass('active_color')
 .end()
 .find('input').val('');

 // reset datepicker
 dp_end_date.options.minDate = (e_start != '') ? e_start : false;
 dp_start_date.options.maxDate = (e_end != '') ? moment(e_end).add(1, 'days').format('YYYY-MM-DD') : false;

 // show modal
 eUpdateModal.show();

 // save event
 $('#eUpdate_btn').off('click').on('click',function(e) {
 e.preventDefault();
 var start = uStart.val(),
 end = uEnd.val(),
 color = $('#eUpdate_colors').find('input').val();

 updatedEvent['title'] = uTitle.val();
 updatedEvent['start'] = (start != '') ? moment(new Date(start)).format() : '';
 updatedEvent['end'] = (end != '') ? moment(new Date(end)).add(1, 'days').format() : '';
 if (color != '') {
 updatedEvent['color'] =  color;
 }

 // SAVE EVENT OBJECT TO DB



 // update event (add it as a success callback after adding to db)
 $calendar_selectable.fullCalendar('updateEvent', event);

 // hide modal
 eUpdateModal.hide();
 })

 },
 select: function (start, end) {
 UIkit.modal.prompt('' +
 '<h3 class="heading_b uk-margin-medium-bottom">New Event</h3><div class="uk-margin-medium-bottom" id="calendar_colors">' +
 'Event Color:' +
 calendarColorPicker +
 '</div>' +
 'Event Title:',
 '', function (newvalue) {
 if ($.trim(newvalue) !== '') {
 var eventData,
 eventColor = $('#calendar_colors_wrapper').find('input').val();
 eventData = {
 title: newvalue,
 start: start,
 end: end,
 color: eventColor ? eventColor : ''
 };
 $calendar_selectable.fullCalendar('renderEvent', eventData, true); // stick? = true
 $calendar_selectable.fullCalendar('unselect');
 }
 }, {
 labels: {
 Ok: 'Add Event'
 }
 });
 },
 editable: true,
 eventLimit: true,
 timeFormat: '(HH)(:mm)',
 events: [
 {
 title: 'All Day Event',
 start: moment().startOf('month').add(25, 'days').format('YYYY-MM-DD')
 },
 {
 title: 'Long Event',
 start: moment().startOf('month').add(3, 'days').format('YYYY-MM-DD'),
 end: moment().startOf('month').add(7, 'days').format('YYYY-MM-DD')
 },
 {
 id: 999,
 title: 'Repeating Event',
 start: moment().startOf('month').add(8, 'days').format('YYYY-MM-DD'),
 color: '#689f38'
 },
 {
 id: 999,
 title: 'Repeating Event',
 start: moment().startOf('month').add(15, 'days').format('YYYY-MM-DD'),
 color: '#689f38'
 },
 {
 title: 'Conference',
 start: moment().startOf('day').add(14, 'hours').format('YYYY-MM-DD HH:mm'),
 end: moment().startOf('day').add(15, 'hours').format('YYYY-MM-DD HH:mm')
 },
 {
 title: 'Meeting',
 start: moment().startOf('month').add(14, 'days').add(10, 'hours').format('YYYY-MM-DD HH:mm'),
 color: '#7b1fa2'
 },
 {
 title: 'Lunch',
 start: moment().startOf('day').add(11, 'hours').format('YYYY-MM-DD HH:mm'),
 color: '#d84315'
 },
 {
 title: 'Meeting',
 start: moment().startOf('day').add(8, 'hours').format('YYYY-MM-DD HH:mm'),
 color: '#7b1fa2'
 },
 {
 title: 'Happy Hour',
 start: moment().startOf('month').add(1, 'days').format('YYYY-MM-DD')
 },
 {
 title: 'Dinner',
 start: moment().startOf('day').add(19, 'hours').format('YYYY-MM-DD HH:mm')
 },
 {
 title: 'Birthday Party',
 start: moment().startOf('month').add(23, 'days').format('YYYY-MM-DD')
 },
 {
 title: 'NEW RELEASE (link)',
 url: 'http://themeforest.net/user/tzd/portfolio',
 start: moment().startOf('month').add(10, 'days').format('YYYY-MM-DD'),
 color: '#0097a7'
 }
 ]
 });
 }*/