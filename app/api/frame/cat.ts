import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

let catFrame = new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          action: 'post',
          label: 'Conita',
        },
        {
          action: 'post',
          label: 'Dog',
        },
        {
          action: 'post',
          label: 'Bieber',
        },
        {
          action: 'post',
          label: 'Gato',
        },
      ],
      image: {
        src: `${NEXT_PUBLIC_URL}/cat.png`,
        aspectRatio: '1:1',
      },
      postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
    }),
  );

  export default catFrame