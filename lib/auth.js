import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("openFund");

const REGISTER_BONUS = {
  supporter: 50,
  creator: 20,
};

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: "supporter",
        returned: true,
      },
      credits: {
        type: "number",
        required: false,
        defaultValue: 0,
        input: false,
        returned: true,
      },
    },
  },
  databaseHooks: {
    user: {
      create: {
        before: async (user) => ({
          data: {
            ...user,
            credits: REGISTER_BONUS[user.role] ?? REGISTER_BONUS.supporter,
          },
        }),
      },
    },
  },
});
