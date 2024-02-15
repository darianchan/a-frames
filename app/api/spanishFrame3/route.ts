import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';
import { incorrectFrame } from '../incorrectFrame';

// Frame to render first spanish frame
async function getResponse(req: NextRequest): Promise<NextResponse> {
  let accountAddress: string | undefined = '';
  let text: string | undefined = '';

  const body: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });

  if (isValid) {
    accountAddress = message.interactor.verified_accounts[0];
  }

  if (message?.input) {
    text = message.input;
  }

  // user will only have one option to choose from so it will always be the button 1 that is clicked
  if (message?.button === 1) {
    return spanishFrame3();
  } else if (message?.button === 1) {
    return incorrectFrame(`spanishFrame2`);
  }

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: `Story$$$$$: ${text} 🌲`,
        },
      ],
      image: {
        src: `${NEXT_PUBLIC_URL}/park-1.png`,
        aspectRatio: '1:1',
      },
      postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
    }),
  );
}

// Frame functions
function spanishFrame3() {
  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          action: 'post',
          label: 'True',
        },
        {
          action: 'post',
          label: 'False',
        },
      ],
      image: {
        src: `${NEXT_PUBLIC_URL}/spanish-3.png`,
        aspectRatio: '1:1',
      },
      postUrl: `${NEXT_PUBLIC_URL}/api/spanishFrame4`, // for next frame to return
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
