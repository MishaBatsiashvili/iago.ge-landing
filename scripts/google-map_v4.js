
        // console.log("reassigning initMap");
       initMap = function(){
        //   console.log("running initMap");
            // Styles a map in night mode.
            var iagoWine = {lat : 41.8854483, lng: 44.6523333};
            var map = new google.maps.Map(document.getElementById('map'), {
              center: iagoWine,
              zoom: 16,
              styles: [
                    {
                        "featureType": "administrative",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "color": "#FFFFFF"
                            },
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape.man_made",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            },
                            {
                                "color": "#303030"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape.natural",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#222222"
                            },
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            },
                            {
                                "color": "#FFFFFF"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            },
                            {
                                "color": "#808080"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "color": "#FFFFFF"
                            },
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#303030"
                            }
                        ]
                    }
                ]
            });
    
            var marker = new google.maps.Marker({
              position : {lat:41.8854483, lng:44.6523333},
              map : map
            })

        } 

