import { Session } from 'next-auth';
import getSession from '../auth/getSession';

export async function getSessionToken() {
  const session = (await getSession()) as Session;
  const sessionToken = session.sessionToken;
  return session ?? 'null';
}
