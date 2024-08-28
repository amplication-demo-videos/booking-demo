import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { PaymentCreateNestedManyWithoutReservationsInput } from "./PaymentCreateNestedManyWithoutReservationsInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type ReservationCreateInput = {
  checkInDate?: Date | null;
  checkOutDate?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
  payments?: PaymentCreateNestedManyWithoutReservationsInput;
  room?: RoomWhereUniqueInput | null;
};
