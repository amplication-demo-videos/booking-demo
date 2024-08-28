/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PaymentService } from "../payment.service";
import { PaymentCreateInput } from "./PaymentCreateInput";
import { Payment } from "./Payment";
import { PaymentFindManyArgs } from "./PaymentFindManyArgs";
import { PaymentWhereUniqueInput } from "./PaymentWhereUniqueInput";
import { PaymentUpdateInput } from "./PaymentUpdateInput";

export class PaymentControllerBase {
  constructor(protected readonly service: PaymentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Payment })
  async createPayment(
    @common.Body() data: PaymentCreateInput
  ): Promise<Payment> {
    return await this.service.createPayment({
      data: {
        ...data,

        reservation: data.reservation
          ? {
              connect: data.reservation,
            }
          : undefined,
      },
      select: {
        amount: true,
        createdAt: true,
        id: true,
        paymentDate: true,
        paymentMethod: true,

        reservation: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Payment] })
  @ApiNestedQuery(PaymentFindManyArgs)
  async payments(@common.Req() request: Request): Promise<Payment[]> {
    const args = plainToClass(PaymentFindManyArgs, request.query);
    return this.service.payments({
      ...args,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        paymentDate: true,
        paymentMethod: true,

        reservation: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Payment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async payment(
    @common.Param() params: PaymentWhereUniqueInput
  ): Promise<Payment | null> {
    const result = await this.service.payment({
      where: params,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        paymentDate: true,
        paymentMethod: true,

        reservation: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Payment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePayment(
    @common.Param() params: PaymentWhereUniqueInput,
    @common.Body() data: PaymentUpdateInput
  ): Promise<Payment | null> {
    try {
      return await this.service.updatePayment({
        where: params,
        data: {
          ...data,

          reservation: data.reservation
            ? {
                connect: data.reservation,
              }
            : undefined,
        },
        select: {
          amount: true,
          createdAt: true,
          id: true,
          paymentDate: true,
          paymentMethod: true,

          reservation: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Payment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePayment(
    @common.Param() params: PaymentWhereUniqueInput
  ): Promise<Payment | null> {
    try {
      return await this.service.deletePayment({
        where: params,
        select: {
          amount: true,
          createdAt: true,
          id: true,
          paymentDate: true,
          paymentMethod: true,

          reservation: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
