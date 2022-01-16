import { BookQuery } from "../queries/BookQuery";
import { BookMutation } from "../mutations/BookMutation";
import { BookSubscription } from "../subscriptions/BookSubscription";
import { IResolvers } from "apollo-server";

/**
 * @description holds book resolver
 */

export const BookResolver: IResolvers = {
  Query: BookQuery,
  Mutation: BookMutation,
  Subscription: BookSubscription,
}