import mongoose from "mongoose";
import puzzles from "../constants/puzzles";
import Puzzles from "../models/puzzles";
import dotenv from "dotenv";
dotenv.config();

async function create() {
	try {
		await mongoose.connect(process.env.DATABASE_URL!);

		const batch = await Puzzles.insertMany(puzzles);
		console.log(`created puzzles: ${batch.length}`);
	} catch (error) {
		console.error('failed to create puzzles', error);
	}
}

create();
