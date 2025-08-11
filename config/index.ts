import path from "path";
import fs from "fs";
import dotenv from "dotenv";

const env = (process.env.APP_ENV || "").trim();
const envPath = path.resolve(`${process.cwd()}/config`, `.env.${env}`);
const defaultEnvPath = path.resolve(`${process.cwd()}/config`, ".env");
dotenv.config({
  path: fs.existsSync(envPath) ? envPath : defaultEnvPath,
});
