import mongoose, { Schema } from "mongoose";
import IPool from "./types";

const PoolSchema = new Schema<IPool>({
	puzzle: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Puzzle",
		required: true,
		unique: true,
	},
	blocks: {
		type: Number,
		required: true,
	},
	created_at: {
		type: Date,
		default: Date.now,
	},
});

const Pools = mongoose.model<IPool>("Pool", PoolSchema, "Pools");

export default Pools;
