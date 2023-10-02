import {useState, useEffect} from 'react';
import styles from './App.module.css';
import {MainContent, Sidebar} from './layouts';
import {
	sortFlights,
	flightsArray,
	getAirlines,
	ExtendedFlight,
	getFlightStops,
} from './helpers/flightsData';

export const App = () => {
	const [sortDirection, setSortDirection] = useState<string>('increase');
	const [sortedFlights, setSortedFlights] = useState<ExtendedFlight[]>([]);
	const [filterByCompany, setFilterByCompany] = useState<string[]>([]);
	const [filterByStops, setFilterByStops] = useState<number[]>([]);
	const [filterByPrice, setFilterByPrice] = useState<number[]>([]);

	const handleApplyPriceMin = (minPrice: number) => {
		filterByPrice[0] = minPrice;
		setFilterByPrice([...filterByPrice]);
	};

	const handleApplyPriceMax = (maxPrice: number) => {
		filterByPrice[1] = maxPrice;
		setFilterByPrice([...filterByPrice]);
	};

	const handleSortChange = (sortType: string) => {
		setSortDirection(sortType);
	};

	useEffect(() => {
		if (flightsArray) {
			const sorted = sortFlights(flightsArray, sortDirection);
			setSortedFlights([...sorted]);
		}
	}, [sortDirection]);

	useEffect(() => {
		console.log(filterByPrice);
	}, [filterByPrice]);

	const airlines = getAirlines(flightsArray);

	const handleFilterByAirlines = (airlinesChoice: string[]) => {
		setFilterByCompany(airlinesChoice);
	};

	const filteredByCompany =
		filterByCompany.length === 0
			? sortedFlights
			: sortedFlights.filter((flight) => {
					if (filterByCompany.includes(flight.carrier.caption)) return flight;
					// eslint-disable-next-line no-mixed-spaces-and-tabs
			  });

	const handleFilterByStops = (stopsCount: string[]) => {
		const stopsCountNumbers = stopsCount.map((stop) => Number(stop));
		setFilterByStops(stopsCountNumbers);
	};

	const filteredByStops =
		filterByStops.length === 0
			? filteredByCompany
			: filteredByCompany.filter((flight) => {
					const flightStopsCount = getFlightStops(flight);
					if (filterByStops.includes(flightStopsCount)) return flight;
					// eslint-disable-next-line no-mixed-spaces-and-tabs
			  });

	const filterFlightsByPrice = (flights: ExtendedFlight[]) => {
		if (!filterByPrice[0] && !filterByPrice[1]) return flights;
		if (filterByPrice[0])
			flights.filter(
				(flight) => Number(flight.price.total.amount) > filterByPrice[0]
			);
		if (filterByPrice[1])
			flights = flights.filter(
				(flight) => Number(flight.price.total.amount) < filterByPrice[1]
			);
		return [...flights];
	};

	const filteredByPrice = filterFlightsByPrice(filteredByStops);

	return (
		<div className={styles.container}>
			<Sidebar
				onStopsChoice={handleFilterByStops}
				setSort={handleSortChange}
				airlines={airlines}
				onAirlinesChoice={handleFilterByAirlines}
				sortDirection={sortDirection}
				onPriceMin={handleApplyPriceMin}
				onPriceMax={handleApplyPriceMax}
			/>
			<MainContent flights={filteredByPrice} />
		</div>
	);
};
