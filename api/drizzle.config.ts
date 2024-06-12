import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/database/schema.ts",
  dialect: "mysql",
  out: "./drizzle",
  dbCredentials: {
    host: "localhost",
    user: "root",
    password: "root",
    database: "plazza",
  },
  verbose: true,
  strict: true,
});
