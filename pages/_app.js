import { SpeedInsights } from '@vercel/speed-insights/next';
npm i @vercel/speed-insights
export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}
