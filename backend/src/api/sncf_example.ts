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
          "href": "https://api.sncf.com/v1/coverage/sncf/journeys?first_section_mode%5B%5D=walking&direct_path=none&to=stop_area%3AOCE%3ASA%3A87722025&is_journey_schedules=True&datetime=20200323T083030&last_section_mode%5B%5D=walking&min_nb_journeys=5&min_nb_transfers=0&allowed_id%5B%5D=stop_point%3AOCE%3ASP%3ATGVINOUI-87722025&allowed_id%5B%5D=stop_point%3AOCE%3ASP%3ATGVINOUI-87686006&from=stop_area%3AOCE%3ASA%3A87686006",
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
      "total": 7800
  },
  "arrival_date_time": "20200323T150900",
  "calendars": [
      {
          "active_periods": [
              {
                  "begin": "20200323",
                  "end": "20200324"
              }
          ],
          "week_pattern": {
              "monday": true,
              "tuesday": false,
              "friday": false,
              "wednesday": false,
              "thursday": false,
              "sunday": false,
              "saturday": false
          }
      }
  ],
  "departure_date_time": "20200323T125900",
  "requested_date_time": "20200323T083030",
  "fare": {
      "found": false,
      "total": {
          "value": "0.0"
      },
      "links": []
  },
  "co2_emission": {
      "value": 1338.9744,
      "unit": "gEC"
  },
  "type": "best",
  "duration": 7800,
  "sections": [
      {
          "from": {
              "embedded_type": "stop_area",
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
                  "timezone": "Europe/Paris",
                  "id": "stop_area:OCE:SA:87686006"
              },
              "quality": 0,
              "name": "Paris-Gare-de-Lyon (Paris)",
              "id": "stop_area:OCE:SA:87686006"
          },
          "links": [],
          "arrival_date_time": "20200323T125900",
          "co2_emission": {
              "value": 0.0,
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
          "departure_date_time": "20200323T125900",
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
                  "id": "vehicle_journey:OCE:BOA006615OCESNF-20200323"
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
          "arrival_date_time": "20200323T150900",
          "additional_informations": [
              "regular"
          ],
          "co2_emission": {
              "value": 1338.9744,
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
              "headsign": "6615",
              "label": "Paris <> Lyon <> Saint Etienne",
              "equipments": [],
              "text_color": "FFFFFF",
              "commercial_mode": "TGV INOUI",
              "description": ""
          },
          "to": {
              "embedded_type": "stop_point",
              "stop_point": {
                  "name": "Lyon-Perrache",
                  "links": [],
                  "coord": {
                      "lat": "45.748785",
                      "lon": "4.825941"
                  },
                  "label": "Lyon-Perrache (Lyon)",
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
                  "id": "stop_point:OCE:SP:TGVINOUI-87722025",
                  "stop_area": {
                      "codes": [
                          {
                              "type": "CR-CI-CH",
                              "value": "0087-722025-BV"
                          },
                          {
                              "type": "CR-CI-CH",
                              "value": "0087-722025-BV"
                          },
                          {
                              "type": "UIC8",
                              "value": "87722025"
                          },
                          {
                              "type": "external_code",
                              "value": "OCE87722025"
                          }
                      ],
                      "name": "Lyon-Perrache",
                      "links": [],
                      "coord": {
                          "lat": "45.748785",
                          "lon": "4.825941"
                      },
                      "label": "Lyon-Perrache (Lyon)",
                      "timezone": "Europe/Paris",
                      "id": "stop_area:OCE:SA:87722025"
                  }
              },
              "quality": 0,
              "name": "Lyon-Perrache (Lyon)",
              "id": "stop_point:OCE:SP:TGVINOUI-87722025"
          },
          "base_arrival_date_time": "20200323T150900",
          "base_departure_date_time": "20200323T125900",
          "departure_date_time": "20200323T125900",
          "geojson": {
              "type": "LineString",
              "properties": [
                  {
                      "length": 393816
                  }
              ],
              "coordinates": [
                  [
                      2.373462,
                      48.844922
                  ],
                  [
                      4.859435,
                      45.760585
                  ],
                  [
                      4.825941,
                      45.748785
                  ]
              ]
          },
          "duration": 7800,
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
                  "arrival_date_time": "20200323T125900",
                  "additional_informations": [],
                  "departure_date_time": "20200323T125900",
                  "base_arrival_date_time": "20200323T125900",
                  "base_departure_date_time": "20200323T125900"
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
                  "arrival_date_time": "20200323T145600",
                  "additional_informations": [],
                  "departure_date_time": "20200323T150100",
                  "base_arrival_date_time": "20200323T145600",
                  "base_departure_date_time": "20200323T150100"
              },
              {
                  "stop_point": {
                      "name": "Lyon-Perrache",
                      "links": [],
                      "coord": {
                          "lat": "45.748785",
                          "lon": "4.825941"
                      },
                      "label": "Lyon-Perrache (Lyon)",
                      "equipments": [],
                      "fare_zone": {
                          "name": "0"
                      },
                      "id": "stop_point:OCE:SP:TGVINOUI-87722025"
                  },
                  "links": [],
                  "arrival_date_time": "20200323T150900",
                  "additional_informations": [],
                  "departure_date_time": "20200323T150900",
                  "base_arrival_date_time": "20200323T150900",
                  "base_departure_date_time": "20200323T150900"
              }
          ]
      },
      {
          "from": {
              "embedded_type": "stop_point",
              "stop_point": {
                  "name": "Lyon-Perrache",
                  "links": [],
                  "coord": {
                      "lat": "45.748785",
                      "lon": "4.825941"
                  },
                  "label": "Lyon-Perrache (Lyon)",
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
                  "id": "stop_point:OCE:SP:TGVINOUI-87722025",
                  "stop_area": {
                      "codes": [
                          {
                              "type": "CR-CI-CH",
                              "value": "0087-722025-BV"
                          },
                          {
                              "type": "CR-CI-CH",
                              "value": "0087-722025-BV"
                          },
                          {
                              "type": "UIC8",
                              "value": "87722025"
                          },
                          {
                              "type": "external_code",
                              "value": "OCE87722025"
                          }
                      ],
                      "name": "Lyon-Perrache",
                      "links": [],
                      "coord": {
                          "lat": "45.748785",
                          "lon": "4.825941"
                      },
                      "label": "Lyon-Perrache (Lyon)",
                      "timezone": "Europe/Paris",
                      "id": "stop_area:OCE:SA:87722025"
                  }
              },
              "quality": 0,
              "name": "Lyon-Perrache (Lyon)",
              "id": "stop_point:OCE:SP:TGVINOUI-87722025"
          },
          "links": [],
          "arrival_date_time": "20200323T150900",
          "co2_emission": {
              "value": 0.0,
              "unit": ""
          },
          "to": {
              "embedded_type": "stop_area",
              "stop_area": {
                  "codes": [
                      {
                          "type": "CR-CI-CH",
                          "value": "0087-722025-BV"
                      },
                      {
                          "type": "CR-CI-CH",
                          "value": "0087-722025-BV"
                      },
                      {
                          "type": "UIC8",
                          "value": "87722025"
                      },
                      {
                          "type": "external_code",
                          "value": "OCE87722025"
                      }
                  ],
                  "name": "Lyon-Perrache",
                  "links": [],
                  "coord": {
                      "lat": "45.748785",
                      "lon": "4.825941"
                  },
                  "label": "Lyon-Perrache (Lyon)",
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
                  "timezone": "Europe/Paris",
                  "id": "stop_area:OCE:SA:87722025"
              },
              "quality": 0,
              "name": "Lyon-Perrache (Lyon)",
              "id": "stop_area:OCE:SA:87722025"
          },
          "departure_date_time": "20200323T150900",
          "duration": 0,
          "type": "crow_fly",
          "id": "section_2_0",
          "mode": "walking"
      }
  ]
}