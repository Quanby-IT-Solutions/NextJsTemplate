# Next JS built in API server for test

Note: This data, or any json file can be used for example purposes only. This json, can be fetch here using json server.

## Step 1: Installation

    ```cmd
    npm install -g json-server # globall installation, can be used later for other projects
    ```

## Step 2: Usage

    ```bash
    # json-server --watch {your_folder}
    json-server --watch ./src/utils/_data/db.json --port 4000
    ```

    This will wrap the data in an API and serves it on port 4000 for us. yey!

## Step 3: Fetching

    Refer to the cmd with the command used above to see all available endpoints.

## Step 4: Create the Interface

    On my example, Courses. You will find it in the interfaces folder and see dummy_courses.ts.
    This is for intellisense. It will help us to know what properties we have in the data.

    Note: It should match the json exactly.

    Json:

    ```json
    [
        {
            "id": 1,
            "name": "Introduction to Computer Science",
            "code": "CS101",
            "credits": 3,
            "department": "Computer Science",
            "description": "An introductory course to computer science, focusing on programming and computational thinking.",
            "imageUrl": "https://via.placeholder.com/150/0000FF/FFFFFF?text=CS101",
            "isActive": true
        },
        ...
        ..
        .
    ]
    ```

    Interface of the Course:

    ```ts
    interface Course {
        id: number;
        name: string;
        code: string;
        credits: number;
        department: string;
        description: string;
        imageUrl: string;
        isActive: boolean;
    }
    ```

## Step 5: Usage in components

    sample: src\full-page\auth\courses.tsx

    ```tsx
    // function declaration to get the courses
    async function getCourses(): Promise<Course[]> {
        const response = await fetch('http://localhost:4000/courses');
        return response.json();
    }

    // inside the export, first make it async
    // export default -> export default async
    export default async function Courses() {
        // call the function to get the courses
        const courses = await getCourses();

        return (
            <main>
                <div className="grid grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <Card key={course.id}>
                            <CardHeader>
                                <CardTitle>{course.code}</CardTitle>
                                <CardDescription>{course.department}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>{course.name}</p>
                                <p>{course.credits}</p>
                            </CardContent>
                            <CardFooter>
                                <Link href={''} className="btn btn-primary">
                                    Learn More
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </main>
        )
    }
    ```
