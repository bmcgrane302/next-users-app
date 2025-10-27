import { NextResponse } from 'next/server';
import { getAllUsers } from '../../../lib/mock-db';

export const GET = async () => {
  const response = await getAllUsers();
  if (!response) {
    return NextResponse.json({ message: 'No users found' }, { status: 404 });
  }
  return NextResponse.json(response);
}
