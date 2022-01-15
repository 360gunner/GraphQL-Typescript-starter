import { pubsub } from "../graphql";

const USER_CREATED = "USER_CREATED";

export const UserSubscription = {
  userCreated: {
    subscribe: () => pubsub.asyncIterator([USER_CREATED]),
  },
};
