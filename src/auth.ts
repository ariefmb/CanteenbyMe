import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import { Adapter } from 'next-auth/adapters';
import Google from 'next-auth/providers/google';
import prisma from '@/libs/auth/prisma';

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  adapter: PrismaAdapter(prisma) as Adapter,
  callbacks: {
    // Using the `...rest` parameter to be able to narrow down the type based on `trigger`
    async session({ session, trigger, newSession }) {
      if (trigger === 'update' && newSession?.name) {
        session.user.name = newSession.name;
      }
      return session;
    },
  },
  providers: [
    Google({
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
});
