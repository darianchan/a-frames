import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      action: 'post',
      label: 'Auto',
    },
    {
      action: 'post',
      label: 'Busa',
    },
    {
      action: 'post',
      label: 'Agua',
    },
    {
      action: 'post',
      label: 'Caro',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/car.png`,
    aspectRatio: '1:1',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'Darian.xyz',
  description: 'LFG',
  openGraph: {
    title: 'Darian.xyz',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/park-3.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>hello 123</h1>
    </>
  );
}
