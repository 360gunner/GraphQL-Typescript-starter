import { UserQuery } from "../queries/UserQuery";
import { UserMutation } from "../mutations/UserMutation";
import { UserSubscription } from "../subscriptions/UserSubscription";
import { IResolvers } from "apollo-server";

/**
 * @description holds user resolver
 */

export const UserResolver: IResolvers = {
  Query: UserQuery,
  Mutation: UserMutation,
  Subscription: UserSubscription,
};
