import { Document } from "mongoose";

export default interface IUser extends Document {
	username: string;
	address: string;
	created_at: Date;
}
