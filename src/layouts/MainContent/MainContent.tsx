import {useState} from 'react';
import {Button} from '../../components/Button';
import styles from './MainContent.module.css';
import {type ExtendedFlight} from '../../helpers/flightsData';
import {TicketInfo} from './TicketInfo';

interface MainContentProps {
	flights: ExtendedFlight[];
}

export const MainContent = ({flights}: MainContentProps) => {
	const [visibleTicketCount, setVisibleTicketCount] = useState(3);

	const handleShowMoreClick = () => {
		setVisibleTicketCount(visibleTicketCount + 3);
	};

	return (
		<main className={styles.main}>
			<>
				{flights.slice(0, visibleTicketCount).map((flight) => (
					<div key={flight.token}>
						<TicketInfo flight={flight} />
						<Button
							type="button"
							size="full"
							style="primary"
							className={styles.ticketBtn}
						>
							Выбрать
						</Button>
					</div>
				))}
			</>

			<div className={styles.btnWrapper}>
				<Button
					type="button"
					size="small"
					style="secondary"
					className={styles.mainBtn}
					onClick={handleShowMoreClick}
				>
					Показать еще
				</Button>
			</div>
		</main>
	);
};
