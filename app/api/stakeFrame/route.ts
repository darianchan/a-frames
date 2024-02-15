import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

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

  // it looks like all the buttons are indexed according to their order in the array
  if (message?.button === 1) {
    return stakeFrame();
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

function stakeFrame() {
  return new NextResponse(
    getFrameHtmlResponse({
        input: {
            text: 'Enter the amount of ETH you want to stake',
        },
      buttons: [
        {
          action: 'post',
          label: 'Submit stake',
        }
      ],
      image: {
        src: `${NEXT_PUBLIC_URL}/park-1.png`,
        aspectRatio: '1:1',
      },
      postUrl: `${NEXT_PUBLIC_URL}/api/catFrame`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
