import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

// Frame to render cat quize
async function getResponse(req: NextRequest): Promise<NextResponse> {
  let accountAddress: string | undefined = '';
  let text: string | undefined = '';

  const body: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });

  if (isValid) {
    accountAddress = message.interactor.verified_accounts[0];
  }
  console.log("message here", message)
  console.log("address here", accountAddress)

  if (message?.input) {
    text = message.input;
  }

  // user will only have one option to choose from so it will always be the button 1 that is clicked
  if (message?.button === 1) {
    return catFrame();
  }
}


// Frame functions
function catFrame() {
  return new NextResponse(
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
      postUrl: `${NEXT_PUBLIC_URL}/api/pizzaFrame`, // for next frame to return
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
