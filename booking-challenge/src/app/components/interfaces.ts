export interface Hours {
  value: string;
}

export interface Booking {
  date: Date;
  destination: string;
  hour: string;
  numPassengers: number;
  origin: string;
}