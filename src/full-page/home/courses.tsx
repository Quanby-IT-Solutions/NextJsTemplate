import { Badge } from '@/src/components/ui/badge';
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

async function getCourses(): Promise<Course[]> {
    const response = await fetch('http://localhost:4000/courses');
    if (!response.ok) {
        throw new Error("Failed to fetch courses");
    }
    return response.json();
}

export default async function Courses() {
    const courses = await getCourses();

    return (
        <main>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map((course) => (
                    <Card key={course.id}>
                        <CardHeader>
                            <Avatar>
                                <AvatarImage
                                    src={`https://via.placeholder.com/150/0000FF/FFFFFF?text=${encodeURIComponent(course.name)}`}
                                    alt={course.name}
                                />
                                <AvatarFallback>
                                    {course.name.slice(0, 2)}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle>{course.code}</CardTitle>
                                <CardDescription>{course.name}</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p>{course.department}</p>
                            <p>Credits: {course.credits}</p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="secondary">
                                Learn More
                            </Button>
                            {course.isActive ? <Badge>Active</Badge> : <Badge>Inactive</Badge>}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </main>
    );
}
