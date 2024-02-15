import { getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../config';

export function incorrectFrame(returnFrame: string) {
  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          action: 'post',
          label: 'Try again',
        },
      ],
      image: {
        src: `${NEXT_PUBLIC_URL}/incorrect.png`,
        aspectRatio: '1:1',
      },
      postUrl: `${NEXT_PUBLIC_URL}/api/${returnFrame}`, // for next frame to return
    }),
  );
}
