import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Button 1',
    },
    {
      action: 'link',
      label: 'Link to Google',
      target: 'https://www.google.com',
    },
    {
      label: 'Redirect to pictures',
      action: 'post_redirect',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/Heading.png`,
    aspectRatio: '1:1',
  },
  input: {
    text: 'Tell me a boat story',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'Darian.xyz',
  description: 'LFG',
  openGraph: {
    title: 'Darian.xyz',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/Heading.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Darian.xyz</h1>
    </>
  );
}
