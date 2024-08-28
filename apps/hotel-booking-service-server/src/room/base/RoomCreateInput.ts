/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HotelWhereUniqueInput } from "../../hotel/base/HotelWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsNumber,
  Min,
  Max,
} from "class-validator";
import { Type } from "class-transformer";
import { ReservationCreateNestedManyWithoutRoomsInput } from "./ReservationCreateNestedManyWithoutRoomsInput";

@InputType()
class RoomCreateInput {
  @ApiProperty({
    required: false,
    type: () => HotelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HotelWhereUniqueInput)
  @IsOptional()
  @Field(() => HotelWhereUniqueInput, {
    nullable: true,
  })
  hotel?: HotelWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  numberField?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: () => ReservationCreateNestedManyWithoutRoomsInput,
  })
  @ValidateNested()
  @Type(() => ReservationCreateNestedManyWithoutRoomsInput)
  @IsOptional()
  @Field(() => ReservationCreateNestedManyWithoutRoomsInput, {
    nullable: true,
  })
  reservations?: ReservationCreateNestedManyWithoutRoomsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  typeField?: string | null;
}

export { RoomCreateInput as RoomCreateInput };