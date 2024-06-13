import mongoose, { Document } from "mongoose";

export default interface IPool extends Document {
	puzzle: mongoose.Types.ObjectId
	blocks: number;
	created_at: Date;
}
