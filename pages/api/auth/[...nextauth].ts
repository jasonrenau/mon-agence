import { env } from "@/lib/env";
import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const googleId = env.GOOGLE_ID;
const googleSecret = env.GOOGLE_SECRET;

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  // theme: {
  //   logo: "/images/logo-text.png",
  // },

  providers: [
    GoogleProvider({
      clientId: googleId,
      clientSecret: googleSecret,
    }),
  ],
  callbacks: {
    session: async ({ session, user }) => {
      session.user.id = user.id;
      session.user.image = user.image;
      const role = await prisma.user.findUnique({
        where: { id: user.id },
        select: { role: true },
      });

      session.user.role = role?.role;

      return session;
    },
  },
  secret: env.AUTH_SECRET,
};

export default NextAuth(authOptions);
