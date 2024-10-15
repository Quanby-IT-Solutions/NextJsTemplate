import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { Course } from '@/src/utils/interfaces/dummy_courses';

// Path to the JSON file
const dbPath = path.join(process.cwd(), 'src/utils/_data/db.json');

// Handle GET request for a course by slug
export async function GET(request: Request, { params }: { params: { slug: string } }) {
    try {
        const data = await fs.readFile(dbPath, 'utf-8');
        const jsonData = JSON.parse(data);

        // Find the course by slug
        const course = jsonData.courses.find((course: Course) => course.id === parseInt(params.slug));

        if (course) {
            return NextResponse.json(course);
        } else {
            return NextResponse.json({ message: 'Course not found' }, { status: 404 });
        }
    } catch (error) {
        console.error('Error reading course data:', error);
        return NextResponse.json({ message: 'Error reading course data' }, { status: 500 });
    }
}
