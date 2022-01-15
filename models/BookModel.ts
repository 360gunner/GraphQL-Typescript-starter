import { Schema, Model, Connection } from "mongoose";

/**
 * @description holds book model
 */

/**
 * Book interface
 */
export interface IBook {
  id: string;
  name: string;
  description: string;
  transform: () => IBook;
}

/**
 * book schema
 */
const schema = new Schema<IBook>({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
});

/**
 * transforms book object,
 * changes _id to id
 */
schema.methods.transform = function () {
  var obj = this.toObject();

  var id = obj._id;
  delete obj._id;
  obj.id = id;

  return obj;
};

// book collection name
const collectionName: string = "book";

/**
 * creates book model
 * @param conn database connection
 * @returns book model
 */
const BookModel = (conn: Connection): Model<IBook> =>
  conn.model(collectionName, schema);

export default BookModel;
