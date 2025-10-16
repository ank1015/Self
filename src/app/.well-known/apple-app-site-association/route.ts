import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    webcredentials: {
      apps: ['DVY24XXNPC.com.notacoder.wallet'],
    },
  };

  return NextResponse.json(data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
