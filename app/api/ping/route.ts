import { NextResponse } from 'next/server';

export async function GET() {
  console.log('Log in the Ping GET route');
  console.warn('Warn in the Ping GET route');
  console.error('Error in the Ping GET route');

  return NextResponse.json({ message: 'pong' });
}