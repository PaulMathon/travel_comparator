const example = {
    "tickets": [],
    "links": [
        {
            "href": "https://api.sncf.com/v1/coverage/sncf/journeys?to=admin%3Afr%3A69123&datetime_represents=departure&from=admin%3Afr%3A75056&datetime=20200215T115201",
            "type": "next",
            "rel": "next",
            "templated": false
        },
        {
            "href": "https://api.sncf.com/v1/coverage/sncf/journeys?to=admin%3Afr%3A69123&datetime_represents=arrival&from=admin%3Afr%3A75056&datetime=20200215T135559",
            "type": "prev",
            "rel": "prev",
            "templated": false
        },
        {
            "href": "https://api.sncf.com/v1/coverage/sncf/journeys?to=admin%3Afr%3A69123&datetime_represents=departure&from=admin%3Afr%3A75056&datetime=20200215T000000",
            "type": "first",
            "rel": "first",
            "templated": false
        },
        {
            "href": "https://api.sncf.com/v1/coverage/sncf/journeys?to=admin%3Afr%3A69123&datetime_represents=arrival&from=admin%3Afr%3A75056&datetime=20200215T235959",
            "type": "last",
            "rel": "last",
            "templated": false
        },
        {
            "href": "https://api.sncf.com/v1/coverage/sncf/stop_points/{stop_point.id}",
            "type": "stop_point",
            "rel": "stop_points",
            "templated": true
        },
        {
            "href": "https://api.sncf.com/v1/coverage/sncf/stop_areas/{stop_area.id}",
            "type": "stop_area",
            "rel": "stop_areas",
            "templated": true
        },
        {
            "href": "https://api.sncf.com/v1/coverage/sncf/vehicle_journeys/{vehicle_journey.id}",
            "type": "vehicle_journey",
            "rel": "vehicle_journeys",
            "templated": true
        },
        {
            "href": "https://api.sncf.com/v1/coverage/sncf/routes/{route.id}",
            "type": "route",
            "rel": "routes",
            "templated": true
        },
        {
            "href": "https://api.sncf.com/v1/coverage/sncf/commercial_modes/{commercial_mode.id}",
            "type": "commercial_mode",
            "rel": "commercial_modes",
            "templated": true
        },
        {
            "href": "https://api.sncf.com/v1/coverage/sncf/lines/{line.id}",
            "type": "line",
            "rel": "lines",
            "templated": true
        },
        {
            "href": "https://api.sncf.com/v1/coverage/sncf/physical_modes/{physical_mode.id}",
            "type": "physical_mode",
            "rel": "physical_modes",
            "templated": true
        },
        {
            "href": "https://api.sncf.com/v1/coverage/sncf/networks/{network.id}",
            "type": "network",
            "rel": "networks",
            "templated": true
        }
    ],
    "journeys": [
        {
            "status": "",
            "distances": {
                "taxi": 0,
                "car": 0,
                "walking": 0,
                "bike": 0,
                "ridesharing": 0
            },
            "links": [
                {
                    "href": "https://api.sncf.com/v1/coverage/sncf/journeys?first_section_mode%5B%5D=walking&direct_path=none&to=admin%3Afr%3A69123&datetime_represents=departure&is_journey_schedules=True&datetime=20200215T110001&last_section_mode%5B%5D=walking&min_nb_journeys=5&min_nb_transfers=0&allowed_id%5B%5D=stop_point%3AOCE%3ASP%3ATGVINOUI-87723197&allowed_id%5B%5D=stop_point%3AOCE%3ASP%3ATGVINOUI-87686006&from=admin%3Afr%3A75056",
                    "type": "journeys",
                    "rel": "same_journey_schedules",
                    "templated": false
                }
            ],
            "tags": [
                "walking",
                "ecologic"
            ],
            "nb_transfers": 0,
            "durations": {
                "taxi": 0,
                "walking": 0,
                "car": 0,
                "ridesharing": 0,
                "bike": 0,
                "total": 7440
            },
            "arrival_date_time": "20200215T135600",
            "calendars": [
                {
                    "exceptions": [
                        {
                            "type": "remove",
                            "datetime": "20200317"
                        },
                        {
                            "type": "remove",
                            "datetime": "20200318"
                        }
                    ],
                    "active_periods": [
                        {
                            "begin": "20200125",
                            "end": "20200329"
                        }
                    ],
                    "week_pattern": {
                        "monday": true,
                        "tuesday": true,
                        "friday": false,
                        "wednesday": true,
                        "thursday": true,
                        "sunday": false,
                        "saturday": true
                    }
                }
            ],
            "departure_date_time": "20200215T115200",
            "requested_date_time": "20200215T110001",
            "fare": {
                "found": false,
                "total": {
                    "value": "0.0"
                },
                "links": []
            },
            "co2_emission": {
                "value": 1345.3324,
                "unit": "gEC"
            },
            "type": "best",
            "duration": 7440,
            "sections": [
                {
                    "from": {
                        "embedded_type": "administrative_region",
                        "quality": 0,
                        "administrative_region": {
                            "insee": "75056",
                            "name": "Paris",
                            "level": 8,
                            "coord": {
                                "lat": "48.8566969",
                                "lon": "2.3514616"
                            },
                            "label": "Paris (75000-75116)",
                            "id": "admin:fr:75056",
                            "zip_code": "75000;75116"
                        },
                        "name": "Paris (75000-75116)",
                        "id": "admin:fr:75056"
                    },
                    "links": [],
                    "arrival_date_time": "20200215T115200",
                    "co2_emission": {
                        "value": 0,
                        "unit": ""
                    },
                    "to": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "name": "Paris-Gare-de-Lyon",
                            "links": [],
                            "coord": {
                                "lat": "48.844922",
                                "lon": "2.373462"
                            },
                            "label": "Paris-Gare-de-Lyon (Paris)",
                            "equipments": [],
                            "administrative_regions": [
                                {
                                    "insee": "75056",
                                    "name": "Paris",
                                    "level": 8,
                                    "coord": {
                                        "lat": "48.8566969",
                                        "lon": "2.3514616"
                                    },
                                    "label": "Paris (75000-75116)",
                                    "id": "admin:fr:75056",
                                    "zip_code": "75000;75116"
                                }
                            ],
                            "fare_zone": {
                                "name": "0"
                            },
                            "id": "stop_point:OCE:SP:TGVINOUI-87686006",
                            "stop_area": {
                                "codes": [
                                    {
                                        "type": "CR-CI-CH",
                                        "value": "0087-686006-BV"
                                    },
                                    {
                                        "type": "CR-CI-CH",
                                        "value": "0087-686006-BV"
                                    },
                                    {
                                        "type": "UIC8",
                                        "value": "87686006"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OCE87686006"
                                    }
                                ],
                                "name": "Paris-Gare-de-Lyon",
                                "links": [],
                                "coord": {
                                    "lat": "48.844922",
                                    "lon": "2.373462"
                                },
                                "label": "Paris-Gare-de-Lyon (Paris)",
                                "timezone": "Europe/Paris",
                                "id": "stop_area:OCE:SA:87686006"
                            }
                        },
                        "quality": 0,
                        "name": "Paris-Gare-de-Lyon (Paris)",
                        "id": "stop_point:OCE:SP:TGVINOUI-87686006"
                    },
                    "departure_date_time": "20200215T115200",
                    "duration": 0,
                    "type": "crow_fly",
                    "id": "section_0_0",
                    "mode": "walking"
                },
                {
                    "from": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "name": "Paris-Gare-de-Lyon",
                            "links": [],
                            "coord": {
                                "lat": "48.844922",
                                "lon": "2.373462"
                            },
                            "label": "Paris-Gare-de-Lyon (Paris)",
                            "equipments": [],
                            "administrative_regions": [
                                {
                                    "insee": "75056",
                                    "name": "Paris",
                                    "level": 8,
                                    "coord": {
                                        "lat": "48.8566969",
                                        "lon": "2.3514616"
                                    },
                                    "label": "Paris (75000-75116)",
                                    "id": "admin:fr:75056",
                                    "zip_code": "75000;75116"
                                }
                            ],
                            "fare_zone": {
                                "name": "0"
                            },
                            "id": "stop_point:OCE:SP:TGVINOUI-87686006",
                            "stop_area": {
                                "codes": [
                                    {
                                        "type": "CR-CI-CH",
                                        "value": "0087-686006-BV"
                                    },
                                    {
                                        "type": "CR-CI-CH",
                                        "value": "0087-686006-BV"
                                    },
                                    {
                                        "type": "UIC8",
                                        "value": "87686006"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OCE87686006"
                                    }
                                ],
                                "name": "Paris-Gare-de-Lyon",
                                "links": [],
                                "coord": {
                                    "lat": "48.844922",
                                    "lon": "2.373462"
                                },
                                "label": "Paris-Gare-de-Lyon (Paris)",
                                "timezone": "Europe/Paris",
                                "id": "stop_area:OCE:SA:87686006"
                            }
                        },
                        "quality": 0,
                        "name": "Paris-Gare-de-Lyon (Paris)",
                        "id": "stop_point:OCE:SP:TGVINOUI-87686006"
                    },
                    "links": [
                        {
                            "type": "vehicle_journey",
                            "id": "vehicle_journey:OCE:SN006613F04004"
                        },
                        {
                            "type": "line",
                            "id": "line:OCE:138"
                        },
                        {
                            "type": "route",
                            "id": "route:OCE:138-TGVINOUI-87686006-87722025"
                        },
                        {
                            "type": "commercial_mode",
                            "id": "commercial_mode:INOUI"
                        },
                        {
                            "type": "physical_mode",
                            "id": "physical_mode:LongDistanceTrain"
                        },
                        {
                            "type": "network",
                            "id": "network:sncf"
                        }
                    ],
                    "arrival_date_time": "20200215T135600",
                    "additional_informations": [
                        "regular"
                    ],
                    "co2_emission": {
                        "value": 1345.3324,
                        "unit": "gEC"
                    },
                    "display_informations": {
                        "direction": "Lyon-Perrache (Lyon)",
                        "code": "",
                        "network": "SNCF",
                        "links": [],
                        "color": "000000",
                        "name": "Paris <> Lyon <> Saint Etienne",
                        "physical_mode": "Train grande vitesse",
                        "headsign": "6613",
                        "label": "Paris <> Lyon <> Saint Etienne",
                        "equipments": [],
                        "text_color": "FFFFFF",
                        "commercial_mode": "TGV INOUI",
                        "description": ""
                    },
                    "to": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "name": "Lyon-Part-Dieu",
                            "links": [],
                            "coord": {
                                "lat": "45.760585",
                                "lon": "4.859435"
                            },
                            "label": "Lyon-Part-Dieu (Lyon)",
                            "equipments": [],
                            "administrative_regions": [
                                {
                                    "insee": "69123",
                                    "name": "Lyon",
                                    "level": 8,
                                    "coord": {
                                        "lat": "45.7578137",
                                        "lon": "4.8320114"
                                    },
                                    "label": "Lyon",
                                    "id": "admin:fr:69123",
                                    "zip_code": ""
                                }
                            ],
                            "fare_zone": {
                                "name": "0"
                            },
                            "id": "stop_point:OCE:SP:TGVINOUI-87723197",
                            "stop_area": {
                                "codes": [
                                    {
                                        "type": "CR-CI-CH",
                                        "value": "0087-723197-BV"
                                    },
                                    {
                                        "type": "CR-CI-CH",
                                        "value": "0087-723197-BV"
                                    },
                                    {
                                        "type": "UIC8",
                                        "value": "87723197"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OCE87723197"
                                    }
                                ],
                                "name": "Lyon-Part-Dieu",
                                "links": [],
                                "coord": {
                                    "lat": "45.760585",
                                    "lon": "4.859435"
                                },
                                "label": "Lyon-Part-Dieu (Lyon)",
                                "timezone": "Europe/Paris",
                                "id": "stop_area:OCE:SA:87723197"
                            }
                        },
                        "quality": 0,
                        "name": "Lyon-Part-Dieu (Lyon)",
                        "id": "stop_point:OCE:SP:TGVINOUI-87723197"
                    },
                    "base_arrival_date_time": "20200215T135600",
                    "base_departure_date_time": "20200215T115200",
                    "departure_date_time": "20200215T115200",
                    "geojson": {
                        "type": "LineString",
                        "properties": [
                            {
                                "length": 395686
                            }
                        ],
                        "coordinates": [
                            [
                                2.373462,
                                48.844922
                            ],
                            [
                                4.499388,
                                46.765309
                            ],
                            [
                                4.859435,
                                45.760585
                            ]
                        ]
                    },
                    "duration": 7440,
                    "type": "public_transport",
                    "id": "section_1_0",
                    "data_freshness": "base_schedule",
                    "stop_date_times": [
                        {
                            "stop_point": {
                                "name": "Paris-Gare-de-Lyon",
                                "links": [],
                                "coord": {
                                    "lat": "48.844922",
                                    "lon": "2.373462"
                                },
                                "label": "Paris-Gare-de-Lyon (Paris)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "0"
                                },
                                "id": "stop_point:OCE:SP:TGVINOUI-87686006"
                            },
                            "links": [],
                            "arrival_date_time": "20200215T115200",
                            "additional_informations": [],
                            "departure_date_time": "20200215T115200",
                            "base_arrival_date_time": "20200215T115200",
                            "base_departure_date_time": "20200215T115200"
                        },
                        {
                            "stop_point": {
                                "name": "Creusot - TGV (le)",
                                "links": [],
                                "coord": {
                                    "lat": "46.765309",
                                    "lon": "4.499388"
                                },
                                "label": "Creusot - TGV (le) (Écuisses)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "0"
                                },
                                "id": "stop_point:OCE:SP:TGVINOUI-87694109"
                            },
                            "links": [],
                            "arrival_date_time": "20200215T131300",
                            "additional_informations": [],
                            "departure_date_time": "20200215T131600",
                            "base_arrival_date_time": "20200215T131300",
                            "base_departure_date_time": "20200215T131600"
                        },
                        {
                            "stop_point": {
                                "name": "Lyon-Part-Dieu",
                                "links": [],
                                "coord": {
                                    "lat": "45.760585",
                                    "lon": "4.859435"
                                },
                                "label": "Lyon-Part-Dieu (Lyon)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "0"
                                },
                                "id": "stop_point:OCE:SP:TGVINOUI-87723197"
                            },
                            "links": [],
                            "arrival_date_time": "20200215T135600",
                            "additional_informations": [],
                            "departure_date_time": "20200215T140100",
                            "base_arrival_date_time": "20200215T135600",
                            "base_departure_date_time": "20200215T140100"
                        }
                    ]
                },
                {
                    "from": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "name": "Lyon-Part-Dieu",
                            "links": [],
                            "coord": {
                                "lat": "45.760585",
                                "lon": "4.859435"
                            },
                            "label": "Lyon-Part-Dieu (Lyon)",
                            "equipments": [],
                            "administrative_regions": [
                                {
                                    "insee": "69123",
                                    "name": "Lyon",
                                    "level": 8,
                                    "coord": {
                                        "lat": "45.7578137",
                                        "lon": "4.8320114"
                                    },
                                    "label": "Lyon",
                                    "id": "admin:fr:69123",
                                    "zip_code": ""
                                }
                            ],
                            "fare_zone": {
                                "name": "0"
                            },
                            "id": "stop_point:OCE:SP:TGVINOUI-87723197",
                            "stop_area": {
                                "codes": [
                                    {
                                        "type": "CR-CI-CH",
                                        "value": "0087-723197-BV"
                                    },
                                    {
                                        "type": "CR-CI-CH",
                                        "value": "0087-723197-BV"
                                    },
                                    {
                                        "type": "UIC8",
                                        "value": "87723197"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OCE87723197"
                                    }
                                ],
                                "name": "Lyon-Part-Dieu",
                                "links": [],
                                "coord": {
                                    "lat": "45.760585",
                                    "lon": "4.859435"
                                },
                                "label": "Lyon-Part-Dieu (Lyon)",
                                "timezone": "Europe/Paris",
                                "id": "stop_area:OCE:SA:87723197"
                            }
                        },
                        "quality": 0,
                        "name": "Lyon-Part-Dieu (Lyon)",
                        "id": "stop_point:OCE:SP:TGVINOUI-87723197"
                    },
                    "links": [],
                    "arrival_date_time": "20200215T135600",
                    "co2_emission": {
                        "value": 0,
                        "unit": ""
                    },
                    "to": {
                        "embedded_type": "administrative_region",
                        "quality": 0,
                        "administrative_region": {
                            "insee": "69123",
                            "name": "Lyon",
                            "level": 8,
                            "coord": {
                                "lat": "45.7578137",
                                "lon": "4.8320114"
                            },
                            "label": "Lyon",
                            "id": "admin:fr:69123",
                            "zip_code": ""
                        },
                        "name": "Lyon",
                        "id": "admin:fr:69123"
                    },
                    "departure_date_time": "20200215T135600",
                    "duration": 0,
                    "type": "crow_fly",
                    "id": "section_2_0",
                    "mode": "walking"
                }
            ]
        }
    ],
    "disruptions": [],
    "notes": [],
    "feed_publishers": [],
    "context": {
        "timezone": "Europe/Paris",
        "current_datetime": "20200215T103325",
        "car_direct_path": {
            "co2_emission": {
                "value": 97403.1729927853,
                "unit": "gEC"
            }
        }
    },
    "exceptions": []
}