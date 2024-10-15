import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// Path to the JSON file
const dbPath = path.join(process.cwd(), 'src/utils/_data/db.json');

// Handle GET request for users
export async function GET() {
  try {
    const data = await fs.readFile(dbPath, 'utf-8');
    const jsonData = JSON.parse(data);

    // Return the users data from the JSON
    return NextResponse.json(jsonData.users);
  } catch (error) {
    console.error('Error reading users data:', error);
    return NextResponse.json({ message: 'Error reading users data' }, { status: 500 });
  }
}
