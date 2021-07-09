import argon2 from "argon2";
import * as z from "zod";

import builder from "~/builder";
import { ValidationError } from "~/errors";
import prisma from "~/prisma";
import { createSession } from "../utils";
import { AuthSuccess } from "../objects";

const RegisterInput = builder.inputType("RegisterInput", {
  fields: (t) => ({
    username: t.string(),
    password: t.string({
      validate: {
        schema: z
          .string()
          .min(8, "Password must be a minimum of 8 characters")
          .max(64, "Password must not be longer than 64 characters"),
      },
    }),
  }),
});

builder.mutationField("register", (t) =>
  t.field({
    type: AuthSuccess,
    args: {
      input: t.arg({ type: RegisterInput }),
    },
    resolve: async (_root, { input }) => {
      const existingAccount = await prisma.account.findUnique({
        where: {
          username: input.username,
        },
      });

      if (existingAccount)
        throw new ValidationError("Failed to register new account", {
          username: "Username is already taken",
        });

      const account = await prisma.account.create({
        data: {
          username: input.username,
          passwordHash: await argon2.hash(input.password),
        },
      });

      return {
        session: await createSession(account),
        account,
      };
    },
  })
);
