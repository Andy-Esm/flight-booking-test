export interface Response {
	result: Result;
}
interface Result {
	flights: Flight2[];
	bestPrices: BestPrices;
}
interface BestPrices {
	ONE_CONNECTION: ONECONNECTION;
	DIRECT: ONECONNECTION;
}
interface ONECONNECTION {
	bestFlights: BestFlight[];
}
interface BestFlight {
	carrier: Carrier;
	price: Total;
}
interface Flight2 {
	hasExtendedFare: boolean;
	flight: Flight;
	flightToken: string;
}
export interface Flight {
	carrier: Carrier;
	price: Price;
	servicesStatuses: ServicesStatuses;
	legs: Leg[];
	exchange: Exchange;
	isTripartiteContractDiscountApplied: boolean;
	international: boolean;
	seats: Seat[];
	refund: Refund;
	airlineAlliance?: PassengerType;
}
interface Refund {
	ADULT: ADULT3;
}
interface ADULT3 {
	refundableBeforeDeparture: boolean;
	refundableAfterDeparture: boolean;
	refundBeforeDeparture?: Total;
	refundAfterDeparture?: Total;
}
interface Seat {
	count: number;
	type: PassengerType;
}
interface Exchange {
	ADULT: ADULT2;
}
interface ADULT2 {
	exchangeableBeforeDeparture: boolean;
	exchangeAfterDeparture: Total;
	exchangeBeforeDeparture: Total;
	exchangeableAfterDeparture: boolean;
}
export interface Leg {
	duration: number;
	segments: Segment[];
}
interface Segment {
	classOfServiceCode: string;
	classOfService: PassengerType;
	departureAirport: PassengerType;
	departureCity?: PassengerType;
	aircraft: PassengerType;
	travelDuration: number;
	arrivalCity?: PassengerType;
	arrivalDate: string;
	flightNumber: string;
	techStopInfos: any[];
	departureDate: string;
	stops: number;
	servicesDetails: ServicesDetails;
	airline: Carrier;
	starting: boolean;
	arrivalAirport: PassengerType;
	operatingAirline?: Carrier;
}
interface ServicesDetails {
	freeCabinLuggage: FreeCabinLuggage;
	paidCabinLuggage: FreeCabinLuggage;
	tariffName?: string;
	fareBasis: FareBasis;
	freeLuggage: FreeLuggage;
	paidLuggage: FreeCabinLuggage;
}
interface FreeLuggage {
	ADULT: ADULT;
}
interface ADULT {
	nil: boolean;
	pieces?: number;
	unit?: string;
}
interface FareBasis {
	ADULT: string;
}
interface FreeCabinLuggage {}
interface ServicesStatuses {
	baggage: PassengerType;
	exchange: PassengerType;
	refund: PassengerType;
}
interface Price {
	total: Total;
	totalFeeAndTaxes: Total;
	rates: Rates;
	passengerPrices: PassengerPrice[];
}
interface PassengerPrice {
	total: Total;
	passengerType: PassengerType;
	singlePassengerTotal: Total;
	passengerCount: number;
	tariff: Total;
	feeAndTaxes: Total;
}
interface PassengerType {
	uid: string;
	caption: string;
}
interface Rates {
	totalUsd: TotalUsd;
	totalEur: TotalUsd;
}
interface TotalUsd {
	amount: string;
	currencyCode: string;
}
interface Total {
	amount: string;
	currency: string;
	currencyCode: string;
}
interface Carrier {
	uid: string;
	caption: string;
	airlineCode: string;
}
