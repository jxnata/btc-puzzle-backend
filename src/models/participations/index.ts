import mongoose, { Schema } from "mongoose";
import IParticipation from "./types";

const ParticipationSchema = new Schema<IParticipation>({
	pool: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Pool",
		required: true,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	block: {
		start: {
			type: String,
			required: true,
		},
		end: {
			type: String,
			required: true,
		},
	},
	finished: {
		type: Boolean,
		default: false,
	},
	is_winner: {
		type: Boolean,
		default: false,
	},
	finished_at: {
		type: Date,
		required: false,
	},
	created_at: {
		type: Date,
		default: Date.now,
	},
});

const Participations = mongoose.model<IParticipation>("Participation", ParticipationSchema, "participations");

export default Participations;
