import { Reservation } from "../reservation/Reservation";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  id: string;
  paymentDate: Date | null;
  paymentMethod: string | null;
  reservation?: Reservation | null;
  updatedAt: Date;
};
