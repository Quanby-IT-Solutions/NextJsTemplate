import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { User } from '@/src/utils/interfaces/user_management';

// Path to the JSON file
const dbPath = path.join(process.cwd(), 'src/utils/_data/db.json');

// Handle GET request for a user by slug
export async function GET(request: Request, { params }: { params: { slug: string } }) {
    try {
        const data = await fs.readFile(dbPath, 'utf-8');
        const jsonData = JSON.parse(data);

        // Find the user by slug
        const user = jsonData.users.find((user: User) => user.id === params.slug);

        if (user) {
            return NextResponse.json(user);
        } else {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }
    } catch (error) {
        console.error('Error reading users data:', error);
        return NextResponse.json({ message: 'Error reading user data' }, { status: 500 });
    }
}
