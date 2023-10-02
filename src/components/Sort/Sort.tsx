import {ChangeEvent} from 'react';
import {CustomInput} from '../CustomInput';
import styles from './Sort.module.css';

interface SortProps {
	onSortChange: (value: string) => void;
	sortDirection: string;
}

export const Sort = ({onSortChange, sortDirection}: SortProps) => {
	const handleSortChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		onSortChange(newValue);
	};

	return (
		<div className={styles.sort}>
			<h3>Сортировать</h3>
			<div className={styles.radioWrapper}>
				<CustomInput
					name="sort"
					type="radio"
					labelPosition="right"
					id="increase"
					children="- по возрастанию цены"
					className={styles.radio}
					checked={sortDirection === 'increase'}
					onChange={handleSortChange}
					value="increase"
				/>
				<CustomInput
					name="sort"
					type="radio"
					labelPosition="right"
					id="decrease"
					children="- по убыванию цены"
					className={styles.radio}
					checked={sortDirection === 'decrease'}
					onChange={handleSortChange}
					value="decrease"
				/>

				<CustomInput
					name="sort"
					type="radio"
					labelPosition="right"
					id="time"
					children="- по времени в пути"
					className={styles.radio}
					checked={sortDirection === 'time'}
					onChange={handleSortChange}
					value="time"
				/>
			</div>
		</div>
	);
};
