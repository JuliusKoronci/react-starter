$(function() {
    altair_search_page.init_map();
});

altair_search_page = {
    init_map: function() {

        // set min height for map
        function updateheight() {
            $('#map_search').css({
                minHeight: $window.height() - $('#header_main').height() - 59
            });
        }
        updateheight();

    // create map and markers

        var $map_search = $('#map_search'),
            $map_search_list = $('#map_search_list').children('li'),
            marker_url = isHighDensity() ? 'assets/img/md-images/ic_place_red_48dp.png' : 'assets/img/md-images/ic_place_red_24dp.png',
            marker_size = isHighDensity() ? new google.maps.Size(48, 48) : new google.maps.Size(24, 24),
            marker_scaled_size = new google.maps.Size(24, 24),
            marker_zoom = 12,
            locations_data = [];

        // get locations from data atributes
        $map_search_list.each(function () {
            var $this = $(this),
                locations = {
                    lat: $this.attr('data-gmap-lat'),
                    lon: $this.attr('data-gmap-lon'),
                    title: $this.attr('data-gmap-company'),
                    html: '<div class="gmap-info-window" style="max-width: 180px;">'
                    + '<h3>' + $this.attr('data-gmap-company') + '</h3>'
                    + '<p>' + $this.attr('data-gmap-company-address') + '</p>'
                    + '<p class="uk-margin-small-top"><a target="_blank" href="https://www.google.com/maps/dir/Current+Location/'+$this.attr('data-gmap-lat') +','+$this.attr('data-gmap-lon')+'">Get Directions</a></p>'
                    + '</div>',
                    zoom: marker_zoom,
                    icon: {
                        url: marker_url,
                        size: marker_size,
                        scaledSize: marker_scaled_size
                    }
                };
            locations_data.push(locations);
        });

        // init map
        var mapSearch = new Maplace({
            map_div: '#map_search',
            locations: locations_data,
            controls_on_map: false,
            map_options: {
                set_center: [40.85167, -93.259932],
                zoom: 12,
                streetViewControl: false
            },
            styles: {
                'Blue water': [{
                    "featureType": "water",
                    "stylers": [{"color": "#46bcec"}, {"visibility": "on"}]
                }, {"featureType": "landscape", "stylers": [{"color": "#f2f2f2"}]}, {
                    "featureType": "road",
                    "stylers": [{"saturation": -100}, {"lightness": 45}]
                }, {
                    "featureType": "road.highway",
                    "stylers": [{"visibility": "simplified"}]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [{"visibility": "off"}]
                }, {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [{"color": "#444444"}]
                }, {"featureType": "transit", "stylers": [{"visibility": "off"}]}, {
                    "featureType": "poi",
                    "stylers": [{"visibility": "off"}]
                }]
            }
        }).Load();

        // jump to marker
        var enterTimeout;
        $map_search_list
            .on('click', function (e) {
                e.preventDefault();
                var $this = $(this),
                    $this_index = $this.index();
                $this
                    .addClass('md-list-item-active')
                    .siblings()
                    .removeClass('md-list-item-active');

                mapSearch.ViewOnMap($this_index+1);
            });
            // uncoment this code to show marker on mouseenter
            /*.on('mouseenter', function (e) {
                e.preventDefault();
                clearTimeout(enterTimeout);
                var $this = $(this),
                    $this_index = $this.index();

                enterTimeout = setTimeout(function() {
                    $map_search_list.removeClass('md-list-item-active');
                    //mapSearch.ViewOnMap($this_index+1);
                    google.maps.event.trigger(mapSearch.markers[$this_index], 'click');
                },300)

            });*/

        function updateMap() {
            var gmap_search = mapSearch.oMap;
            google.maps.event.trigger(gmap_search, 'resize');
            gmap_search.fitBounds(mapSearch.oBounds);
        }

        // update/init map when it become visible
        $(".map_search_wrapper").on('display.uk.check', function(){
            updateMap();
        });

        // resize map on window resize event
        $(window).on('debouncedresize', function () {
            updateheight();
            updateMap();
        });

        // show/hide map search list
        $('#map_search_list_toggle').on('click', function(e) {
            e.preventDefault();
            $('.map_search_wrapper').toggleClass('map_search_list_active');
            setTimeout(function() {
                updateMap();
            },290)
        })

    }
};