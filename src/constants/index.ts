import dotenv from "dotenv";
dotenv.config();

export const SECRET_KEY = `${process.env.SECRET_KEY}`;

export const MIN_BLOCK_SIZE = 100_000_000;
export const MAX_BLOCK_SIZE = 1_000_000_000;