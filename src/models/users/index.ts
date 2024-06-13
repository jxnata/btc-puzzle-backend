import mongoose, { Schema } from "mongoose";
import IUser from "./types";

const UserSchema = new Schema<IUser>({
	username: {
		type: String,
		required: true,
		lowercase: true,
		trim: true,
		unique: true,
	},
	address: {
		type: String,
		required: true,
		trim: true,
		unique: true,
	},
	winner: {
		type: Boolean,
		default: false,
	},
	created_at: {
		type: Date,
		default: Date.now,
	},
});

const Users = mongoose.model<IUser>("User", UserSchema, "users");

export default Users;
