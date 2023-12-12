import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      /** The user's id address. */
      id?: string;
      role?: string;
    };
  }
}
