import { Document } from "mongoose";

export default interface IPuzzle extends Document {
	name: string;
	reward: string;
	address: string;
	range: {
		min: string;
		max: string;
	};
	private_key: string;
	public_key: string;
	solver: string;
	solved_at: Date;
	created_at: Date;
}
