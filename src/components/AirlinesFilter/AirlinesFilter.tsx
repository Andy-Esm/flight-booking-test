import {useState, ChangeEvent} from 'react';
import {CustomInput} from '../CustomInput';
import styles from './AirlinesFilter.module.css';

interface AirlinesFilterProps {
	airlines: string[];
	onFilter: (airlines: string[]) => void;
}

export const AirlinesFilter = ({airlines, onFilter}: AirlinesFilterProps) => {
	const [filteredAirlines, setFilteredAirlines] = useState<string[]>([]);

	const handleOnChecked = (event: ChangeEvent<HTMLInputElement>) => {
		const checkAirline = event.target.value;
		const updatedFilter = event.target.checked
			? [...filteredAirlines, checkAirline]
			: filteredAirlines.filter((airline) => airline !== checkAirline);

		setFilteredAirlines([...updatedFilter]);
		onFilter?.(updatedFilter);
	};

	// const handleApplyFilters = () => {
	// 	onFilter?.(filteredAirlines);
	// };

	return (
		<div className={styles.company}>
			<h3>Авиакомпании</h3>
			{airlines.map((airline) => (
				<div key={airline}>
					<CustomInput
						type="checkbox"
						labelPosition="right"
						id={airline}
						name="flight-change"
						value={airline}
						onChange={handleOnChecked}
					>
						{airline}
					</CustomInput>
				</div>
			))}
		</div>
	);
};
