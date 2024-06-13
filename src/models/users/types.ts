import mongoose, { Document } from "mongoose";

export default interface IUser extends Document {
	username: string;
	address: string;
	winner: boolean;
	created_at: Date;
}
