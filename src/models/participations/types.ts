import mongoose, { Document } from "mongoose";

export default interface IParticipation extends Document {
	pool: mongoose.Types.ObjectId;
	user: mongoose.Types.ObjectId;
	block: {
		start: string;
		end: string;
	};
	finished: boolean;
	is_winner: boolean;
	finished_at: Date;
	created_at: Date;
}
