import argon2 from "argon2";

import prisma from "~/prisma";
import { BadCredentialsError, NotFoundError } from "~/errors";
import builder from "~/builder";
import { createSession } from "../utils";
import { AuthSuccess } from "../objects";

const LoginInput = builder.inputType("LoginInput", {
  fields: (t) => ({
    username: t.string(),
    password: t.string(),
  }),
});

builder.mutationField("login", (t) =>
  t.field({
    errors: {
      types: [BadCredentialsError],
    },
    type: AuthSuccess,
    args: {
      input: t.arg({ type: LoginInput }),
    },
    resolve: async (_root, { input }, ctx) => {
      const account = await prisma.account.findUnique({
        where: {
          username: input.username,
        },
      });

      if (!account)
        throw new NotFoundError("Account", "username", input.username);

      try {
        if (!(await argon2.verify(account.passwordHash, input.password)))
          // skip to catch and throw BadCredentialsError if verify returns false
          throw new Error();
      } catch {
        throw new BadCredentialsError();
      }

      return {
        session: await createSession(account),
        account,
      };
    },
  })
);
