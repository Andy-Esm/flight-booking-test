import {Sort, Filter, AirlinesFilter} from '../../components';
import styles from './Sidebar.module.css';

interface SidebarProps {
	setSort: (value: string) => void;
	airlines: string[];
	onAirlinesChoice: (airlines: string[]) => void;
	sortDirection: string;
	onStopsChoice: (values: string[]) => void;
	onPriceMax: (price: number) => void;
	onPriceMin: (price: number) => void;
}

export const Sidebar = ({
	setSort,
	airlines,
	onAirlinesChoice,
	sortDirection,
	onStopsChoice,
	onPriceMin,
	onPriceMax,
}: SidebarProps) => {
	return (
		<div className={styles.sidebar}>
			<Sort onSortChange={setSort} sortDirection={sortDirection} />
			<Filter
				onStopsChoice={onStopsChoice}
				onPriceMin={onPriceMin}
				onPriceMax={onPriceMax}
			/>
			<AirlinesFilter airlines={airlines} onFilter={onAirlinesChoice} />
		</div>
	);
};
