import { Hotel } from "../hotel/Hotel";
import { Reservation } from "../reservation/Reservation";

export type Room = {
  createdAt: Date;
  hotel?: Hotel | null;
  id: string;
  numberField: string | null;
  price: number | null;
  reservations?: Array<Reservation>;
  typeField: string | null;
  updatedAt: Date;
};
