import { Customer } from "../customer/Customer";
import { Payment } from "../payment/Payment";
import { Room } from "../room/Room";

export type Reservation = {
  checkInDate: Date | null;
  checkOutDate: Date | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  payments?: Array<Payment>;
  room?: Room | null;
  updatedAt: Date;
};
