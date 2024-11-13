import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class UserOrderByWithRelationInputStrict
  implements RestrictProperties<UserOrderByWithRelationInputStrict, Prisma.UserOrderByWithRelationInput>
{
  uid: Prisma.SortOrder
  createdAt: Prisma.SortOrder
  updatedAt: Prisma.SortOrder
  name: Prisma.SortOrder | Prisma.SortOrderInput
  image: Prisma.SortOrder | Prisma.SortOrderInput
  Credentials: Prisma.CredentialsOrderByWithRelationInput
  AuthProvider: Prisma.AuthProviderOrderByWithRelationInput
  Admin: Prisma.AdminOrderByWithRelationInput
  Manager: Prisma.ManagerOrderByWithRelationInput
  Valet: Prisma.ValetOrderByWithRelationInput
  Customer: Prisma.CustomerOrderByWithRelationInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}


@InputType()
export class UserOrderByWithRelationInput extends PartialType(
  UserOrderByWithRelationInputStrict,
) {}

@InputType()
export class UserOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
