import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  paymentDate?: SortOrder;
  paymentMethod?: SortOrder;
  reservationId?: SortOrder;
  updatedAt?: SortOrder;
};
