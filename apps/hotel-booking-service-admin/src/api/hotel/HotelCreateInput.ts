import { RoomCreateNestedManyWithoutHotelsInput } from "./RoomCreateNestedManyWithoutHotelsInput";

export type HotelCreateInput = {
  description?: string | null;
  location?: string | null;
  name?: string | null;
  rooms?: RoomCreateNestedManyWithoutHotelsInput;
};
