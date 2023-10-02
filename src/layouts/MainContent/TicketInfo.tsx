import styles from './TicketInfo.module.css';
import {Flight} from '../../responseTypes';
import {legCompanies, duration, flightDateTime} from '../../helpers/flightsData';
import ClockIcon from '../../assets/icons8-clock.svg';
interface TicketInfoProps {
	flight: Flight;
}

export const TicketInfo = ({flight}: TicketInfoProps) => {
	return (
		<>
			<div className={styles.ticket}>
				<div className={styles.ticketHeader}>
					<span>{flight.carrier.uid}</span>
					<div className={styles.priceBox}>
						<span
							className={styles.price}
						>{`${flight.price.total.amount} ${flight.price.total.currency}`}</span>
						<p>Стоимость для одного взрослого пассажира</p>
					</div>
				</div>
				{/* [0].segments[0].departureAirport.caption */}
				<div className={styles.ticketBody}>
					<div>
						{flight.legs.map((leg) => (
							<div key={leg.duration} className={styles.ticketBox}>
								<div className={styles.ticketDest}>
									<div className={styles.departure}>
										{/* <segment1/> */}
										<div>{leg.segments[0].departureCity?.caption}, </div>
										<div>{leg.segments[0].departureAirport.caption}</div>
										<div className={styles.AirportUid}>
											({leg.segments[0].departureAirport.uid})
										</div>
									</div>
									<div className={styles.departure}>
										{/* <segment2/> */}
										<div>{leg.segments.slice(-1)[0].arrivalCity?.caption}</div>
										<div>{leg.segments.slice(-1)[0].arrivalAirport.caption}</div>
										<div className={styles.AirportUid}>
											({leg.segments.slice(-1)[0].arrivalAirport.uid})
										</div>
									</div>
								</div>
								<div className={styles.ticketDate}>
									<div>
										{flightDateTime(new Date(leg.segments[0].departureDate))}
									</div>
									<div className={styles.duration}>
										<img src={ClockIcon} alt="" width={18} height={18} />
										{duration(leg.duration)}
									</div>
									<div>
										{flightDateTime(new Date(leg.segments.slice(-1)[0].arrivalDate))}
									</div>
								</div>
								<div className={styles.ticketStop}>{`${
									leg.segments.length - 1
								} пересадка`}</div>
								<div className={styles.ticketCompany}>
									Рейс выполняет: {legCompanies(leg)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
