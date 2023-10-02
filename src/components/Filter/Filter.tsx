import {CustomInput} from '../CustomInput';
import {useState, ChangeEvent} from 'react';
import styles from './Filter.module.css';

interface FilterProps {
	onStopsChoice: (values: string[]) => void;
	onPriceMax: (price: number) => void;
	onPriceMin: (price: number) => void;
}

export const Filter = ({onStopsChoice, onPriceMax, onPriceMin}: FilterProps) => {
	const [filteredStops, setFilteredStops] = useState<string[]>([]);

	const handleStopFilter = (event: ChangeEvent<HTMLInputElement>) => {
		const number = event.target.value;
		const updatedFilter = event.target.checked
			? [...filteredStops, number]
			: filteredStops.filter((airline) => airline !== number);

		setFilteredStops([...updatedFilter]);
		onStopsChoice(updatedFilter);
	};

	const handleMinPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
		const minPrice = Number(event.target.value);
		onPriceMin(minPrice);
	};

	const handleMaxPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
		const maxPrice = Number(event.target.value);
		onPriceMax(maxPrice);
	};

	return (
		<div className={styles.filter}>
			<h3>Фильтровать</h3>
			<CustomInput
				type="checkbox"
				labelPosition="right"
				id="stops1"
				name="flight-change"
				children="- 1 пересадка"
				onChange={handleStopFilter}
				value="1"
			/>
			<CustomInput
				type="checkbox"
				labelPosition="right"
				id="stops0"
				name="flight-change"
				children="- без пересадок"
				value="0"
				onChange={handleStopFilter}
			/>
			<div className={styles.price}>
				<h3>Цена</h3>
				<CustomInput
					type="text"
					placeholder="0 руб"
					id="minimum-price"
					name="minimum-price"
					labelPosition="left"
					// value={''}
					onChange={handleMinPriceChange}
					children="от"
				/>
				<CustomInput
					type="text"
					placeholder="0 руб"
					id="maximum-price"
					name="maximum-price"
					labelPosition="left"
					// value={''}
					onChange={handleMaxPriceChange}
					children="до"
				/>
			</div>
		</div>
	);
};
