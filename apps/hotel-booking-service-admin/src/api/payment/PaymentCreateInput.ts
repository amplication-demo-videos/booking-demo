import { ReservationWhereUniqueInput } from "../reservation/ReservationWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  paymentDate?: Date | null;
  paymentMethod?: string | null;
  reservation?: ReservationWhereUniqueInput | null;
};
