import { Field, ObjectType } from '@nestjs/graphql'
import { User as UserType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class User implements RestrictProperties<User, UserType> {
  // so if you want to remove something you can use the Omit<UserType,'name'>
  createdAt: Date
  updatedAt: Date
  uid: string
  @Field({ nullable: true })
  name: string
  image: string

  // ToDo add below to make optional fields optional.
  // @Field({nullable:true})
}
