import mongoose, { Schema } from "mongoose";
import IUser from "./types";

const UserSchema = new Schema<IUser>({
	username: {
		type: String,
		required: true,
		trim: true,
		unique: true,
		validation: {
			is: /^[a-zA-Z0-9._]+$/,
		}
	},
	address: {
		type: String,
		required: true,
		trim: true,
		unique: true,
	},
	created_at: {
		type: Date,
		default: Date.now,
	},
});

const Users = mongoose.model<IUser>("User", UserSchema, "users");

export default Users;
