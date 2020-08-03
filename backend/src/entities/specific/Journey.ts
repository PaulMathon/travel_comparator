import { City } from './City';
import { ApiType, ApiProvider } from '../../api/TravelApi';

export enum EntityType {
  journey = 'journey',
  station = 'station',
  location = 'location'
}

/**
 * https://github.com/public-transport/friendly-public-transport-format
 */
export interface IJourney {
	type: EntityType.journey,
	id: string,
	legs: [{
		origin: {
			type: EntityType.station,
			id: "10001",
			name: "Foo Station",
			location: {
				type: "location",
				longitude: -20,
				latitude: 30
			}
		},
		destination: {
			type: EntityType.station,
			id: "10003",
			name: "Baz Main Station",
			location: {
				type: EntityType.location,
				longitude: 20,
				latitude: -30,
				altitude: 1400
			}
		},
		departure: "2017-03-16T20:00:00+01:00",
		departurePlatform: "4-1",
		departureDelay: null,
		arrival: "2017-03-17T15:00:00+02:00",
		arrivalPlatform: "9",
		arrivalDelay: 0,
		schedule: {
			type: "schedule",
			id: "1234",
			route: {
				type: "route",
				id: "123",
				line: {
					type: "line",
					id: "12",
					name: "Magic Intercontinental Express",
					mode: "train",
					operator: {
						type: "operator",
						id: "1",
						name: "1 Railways Inc."
					}
				},
				stops: [
					"10001",
					{
						type: "stop",
						id: "10002-a",
						station: {
							type: "station",
							id: "10002",
							name: "Bar City Center"
						},
						name: "train station"
					},
					"10003"
				]
			},
			mode: "train",
			sequence: [
				{
					departure: 0
				},
				{
					arrival: 3600,
					departure: 3720
				},
				{
					arrival: 64800
				}
			],
			starts: [
				1489604400,
				1489690800,
				1489777200
			]
		},
		stopovers: [{
			type: "stopover",
			stop: "10001",
			arrival: null,
			arrivalPlatform: null,
			departure: "2017-03-16T20:00:00+01:00",
			departurePlatform: "4-1",
			departureDelay: null
		}, {
			type: "stopover",
			top: "10002-a",
			arrival: "2017-03-16T21:01:30+01:00",
			arrivalPlatform: "C",
			arrivalDelay: 90,
			departure: "2017-03-16T21:03:00+01:00",
			departurePlatform: "C",
			departureDelay: 60
		}, {
			type: "stopover",
			stop: "10003",
			arrival: "2017-03-17T15:00:00+02:00",
			arrivalPlatform: "9",
			arrivalDelay: 0,
			departure: null,
			departurePlatform: null
		}],
		public: true,
		operator: {
			type: "operator",
			id: "2",
			name: "2 Replacement Railway Services Inc."
		},
		price: {
			amount: 19.95,
			currency: "EUR"
		}
	}],
	price: {
		amount: 19.95,
		currency: "EUR"
	}
}
