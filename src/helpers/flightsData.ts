import flightsData from '../../flights.json';
import {Flight, Response, Leg} from '../responseTypes';
import {v4 as uuidv4} from 'uuid';
const data: Response = flightsData as Response;

export interface ExtendedFlight extends Flight {
	token: string;
}

const flights: Record<string, ExtendedFlight> = {};

Object.values(data.result.flights).map((flight) => {
	const id = uuidv4();
	flights[id] = {...flight.flight, token: id};
});

export const flightsArray: ExtendedFlight[] = Object.values(flights);

export const legCompanies = (leg: Leg) => {
	const companies: string[] = [];
	leg.segments.forEach((segment) => {
		if (companies.includes(segment.airline.caption)) return;
		companies.push(segment.airline.caption);
	});
	return companies.toString().split(' ');
};

export const getFlightStops = (flight: ExtendedFlight) => {
	const flightStops = flight.legs.reduce((stops, leg) => {
		return (stops += leg.segments.length - 1);
	}, 0);

	return flightStops > 0 ? 1 : 0;
};

export const getStops = (flightsArray: ExtendedFlight[]) => {
	const stops: number[] = [];
	flightsArray.forEach((item) => {
		const segmentsStop = getFlightStops(item);

		if (stops.includes(segmentsStop)) return;
		stops.push(segmentsStop);
	});
	return stops;
};

export const getAirlines = (flightsArray: ExtendedFlight[]) => {
	const companies: string[] = [];
	flightsArray.forEach((item) => {
		const airline = item.carrier.caption;
		if (companies.includes(airline)) return;
		companies.push(airline);
	});
	return companies;
};

export const duration = function formatTime(minute: number) {
	const hours = Math.floor(minute / 60);
	const minutes = minute % 60;

	const formatedHours = String(hours).padStart(1, '0');
	const formatedMinutes = String(minutes).padStart(2, '0');

	return `${formatedHours} ч ${formatedMinutes} мин`;
};

export const flightDateTime = function formatDate(date: Date) {
	const day = String(date.getDate()).padStart(2, '0');
	const monthNames = [
		'янв.',
		'фев.',
		'мар.',
		'апр.',
		'мая',
		'июн.',
		'июл.',
		'авг.',
		'сен.',
		'окт.',
		'ноя.',
		'дек.',
	];
	const monthIndex = date.getMonth();
	const month = monthNames[monthIndex];
	const weekDayNames = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
	const weekDayIndex = date.getDay();
	const weekDay = weekDayNames[weekDayIndex];
	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');

	return `${hours} : ${minutes} ${day} ${month} ${weekDay}`;
};
export const sortFlights = (
	flights: ExtendedFlight[],
	sortType: string
): ExtendedFlight[] => {
	// Реализация сортировки по выбранному типу
	if (sortType === 'increase') {
		return flights.sort(
			(a, b) => Number(a.price.total.amount) - Number(b.price.total.amount)
		);
	} else if (sortType === 'decrease') {
		return flights.sort(
			(a, b) => Number(b.price.total.amount) - Number(a.price.total.amount)
		);
	} else if (sortType === 'time') {
		return flights.sort((a, b) => {
			return (
				Number(
					a.legs.reduce((result, leg) => {
						return (result += leg.duration);
					}, 0)
				) -
				Number(
					b.legs.reduce((result, leg) => {
						return (result += leg.duration);
					}, 0)
				)
			);
		});
	}

	return flights;
};
