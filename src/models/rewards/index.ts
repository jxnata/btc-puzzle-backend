import mongoose, { Schema } from "mongoose";
import IReward from "./types";

const RewardSchema = new Schema<IReward>({
	pool: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Pool",
		required: true,
		unique: true,
	},
	winner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	total: {
		type: String,
		required: true,
	},
	fee: {
		type: String,
		required: true,
	},
	transaction: {
		type: String,
		required: true,
	},
	confirmed: {
		type: Boolean,
		default: false,
	},
	created_at: {
		type: Date,
		default: Date.now,
	},
});

const Rewards = mongoose.model<IReward>("Reward", RewardSchema, "Rewards");

export default Rewards;
