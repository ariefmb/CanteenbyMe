'use server';

import { cookies } from 'next/headers';

const cookie = cookies();

export const setCookie = async (name: string, value: string, expires: Date) => {
  cookie.set(name, value, {
    httpOnly: true,
    expires,
  });
};

export const deleteCookie = async (name: string) => {
  cookie.delete(name);
};

export const getCookie = (name: string) => cookie.get(name)?.value;
