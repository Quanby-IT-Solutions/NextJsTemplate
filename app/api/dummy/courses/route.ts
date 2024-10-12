import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// Path to the JSON file
const dbPath = path.join(process.cwd(), 'src/utils/_data/db.json');

// Handle GET request for courses
export async function GET() {
  try {
    const data = await fs.readFile(dbPath, 'utf-8');
    const jsonData = JSON.parse(data);

    // Return the courses data from the JSON
    return NextResponse.json(jsonData.courses);
  } catch (error) {
    return NextResponse.json({ message: 'Error reading courses data' }, { status: 500 });
  }
}
