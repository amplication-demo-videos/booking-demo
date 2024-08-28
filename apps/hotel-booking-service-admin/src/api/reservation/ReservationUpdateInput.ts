import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { PaymentUpdateManyWithoutReservationsInput } from "./PaymentUpdateManyWithoutReservationsInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type ReservationUpdateInput = {
  checkInDate?: Date | null;
  checkOutDate?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
  payments?: PaymentUpdateManyWithoutReservationsInput;
  room?: RoomWhereUniqueInput | null;
};
