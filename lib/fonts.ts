import { Open_Sans, Sora } from 'next/font/google';

export const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  weight: ['400', '600', '700'],
});

export const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  weight: ['400', '600', '700'],
});

export const fontVariables = `${openSans.variable} ${sora.variable}`;
