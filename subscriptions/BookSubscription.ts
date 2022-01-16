import { pubsub } from "../graphql";

export const BOOK_CREATED = "BOOK_CREATED";
export const BOOK_UPDATED = "BOOK_UPDATED";
export const BOOK_DELETED = "BOOK_DELETED";

export const BookSubscription = {
  bookCreated: {
    subscribe: () => pubsub.asyncIterator([BOOK_CREATED]),
  },
  bookUpdated: {
    subscribe: () => pubsub.asyncIterator([BOOK_UPDATED]),
  },
  bookDeleted: {
    subscribe: () => pubsub.asyncIterator([BOOK_DELETED]),
  },
};
