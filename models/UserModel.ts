import { Schema, Model, Connection } from "mongoose";

/**
 * @description holds user model
 */

/**
 * User interface
 */
// 1. Create an interface representing a document in MongoDB.
export interface IUser {
  id: string;
  name: string;
  password?: string;
  email: string;
  transform: () => IUser;
}

/**
 * user schema
 */
// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IUser>({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

/**
 * transforms user object, removes password and
 * changes _id to id
 */
schema.methods.transform = function () {
  var obj = this.toObject();
  delete obj.password;

  var id = obj._id;
  delete obj._id;
  obj.id = id;

  return obj;
};

// user collection name
const collectionName: string = "user";

/**
 * creates user model
 * @returns user model
 */
// 3. Create a Model.
const UserModel = (conn: Connection): Model<IUser> =>
  conn.model(collectionName, schema);

export default UserModel;
