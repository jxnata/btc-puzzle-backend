import mongoose, { Document } from "mongoose";

export default interface IReward extends Document {
	pool: mongoose.Types.ObjectId
	winner: mongoose.Types.ObjectId;
	total: string;
	fee: string;
	transaction: string;
	confirmed: boolean;
	created_at: Date;
}
