import { pubsub } from "../graphql";

export const USER_CREATED = "USER_CREATED";
export const USER_UPDATED = "USER_UPDATED";
export const USER_DELETED = "USER_DELETED";

export const UserSubscription = {
  userCreated: {
    subscribe: () => pubsub.asyncIterator([USER_CREATED]),
  },
  userUpdated: {
    subscribe: () => pubsub.asyncIterator([USER_UPDATED]),
  },
  userDeleted: {
    subscribe: () => pubsub.asyncIterator([USER_DELETED]),
  },
};
