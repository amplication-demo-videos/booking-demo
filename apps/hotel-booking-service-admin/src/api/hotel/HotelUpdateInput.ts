import { RoomUpdateManyWithoutHotelsInput } from "./RoomUpdateManyWithoutHotelsInput";

export type HotelUpdateInput = {
  description?: string | null;
  location?: string | null;
  name?: string | null;
  rooms?: RoomUpdateManyWithoutHotelsInput;
};
