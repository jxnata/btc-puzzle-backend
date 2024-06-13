import { Document } from "mongoose";

export default interface IUser extends Document {
	username: string;
	address: string;
	role: 'admin' | 'user';
	created_at: Date;
}
