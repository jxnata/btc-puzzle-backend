import mongoose, { Schema } from "mongoose";
import IPuzzle from "./types";

const PuzzleSchema = new Schema<IPuzzle>({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	reward: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
		trim: true,
		unique: true,
	},
	range: {
		min: {
			type: String,
			required: true,
		},
		max: {
			type: String,
			required: true,
		},
	},
	private_key: {
		type: String,
		required: false,
	},
	public_key: {
		type: String,
		required: false,
	},
	solver: {
		type: String,
		required: false,
	},
	solved_at: {
		type: Date,
		required: false,
	},
	created_at: {
		type: Date,
		default: Date.now,
	},
});

const Puzzles = mongoose.model<IPuzzle>("Puzzle", PuzzleSchema, "puzzles");

export default Puzzles;
