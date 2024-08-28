import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ReservationWhereUniqueInput } from "../reservation/ReservationWhereUniqueInput";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  paymentDate?: DateTimeNullableFilter;
  paymentMethod?: StringNullableFilter;
  reservation?: ReservationWhereUniqueInput;
};
