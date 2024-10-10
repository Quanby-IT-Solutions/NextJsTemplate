# Project Documentation

This project provides the foundation for our system’s frontend architecture using **Codux** and **React**, leveraging **Tailwind CSS** for styling, and **Supabase** for authentication and database management. This document outlines the structure of the project and provides guidance for maintainers to ensure consistency, scalability, and ease of use.

## Project Structure

Our folder structure is designed to promote reusability, scalability, and separation of concerns. Here's an overview of the key directories and files.

```bash
src/
    _codux/
        (visualization and component testing environment for Codux)

    components/
        (dynamic components without hardcoded data for flexibility)

    full-pages/
        (full-page components assembling dynamic components for production)

    utils/
        (utilities, Supabase configurations, and context management)
    
    boards-global-setup.ts
        (global Tailwind CSS setup for Codux)
```

### Detailed Explanation

### `_codux/`

- This folder contains all files and configurations related to **Codux**, our desktop tool for visualizing and managing components. It provides a convenient way to view and test individual components in isolation.
- **Important**: Keep this folder clean and updated as it aids in component debugging and visualization.

### `components/`

- This is the heart of our project where **dynamic components** are built.
- **Guidelines**:
  - **Do not hardcode data**: All components must remain dynamic to ensure they can handle different data inputs.
  - **Reusability**: Components should be designed with flexibility in mind, promoting reuse across the system without the need for duplicating logic or styling.
  - **Formality**: Always document components well, explaining their intended usage and input/output properties. This will streamline future development as the application scales.

### `full-pages/`

- **Purpose**: This folder is dedicated to assembling components into full-page layouts, integrating API calls, user interaction logic, and other full-page functionality.
- **Best Practice**:
  - Full-pages are responsible for data management, API calls, and passing data into dynamic components from the `components/` folder.
  - Avoid repeating logic inside full-page components; delegate as much logic to reusable components or utility functions.

### `utils/`

- Contains utility files and configuration necessary for the smooth operation of the app, especially third-party integrations.
  
#### Subfolders

1. **interfaces/**
   - Store TypeScript interfaces here. All components must use interfaces for props, data types, and API responses to maintain type safety.

2. **supabase/**
   - **client.ts**: Configuration and initialization of the Supabase client. Handles connection to the Supabase backend.
   - **middleware.ts**: Middleware logic that may be needed for managing API calls, authentication, or other server interactions.
   - **server.ts**: Contains server-side logic for interacting with Supabase in server environments (i.e., SSR or serverless functions).

3. **user-context.ts**
   - This file is for managing global state related to user authentication and context using React’s Context API. It simplifies access to user information across components and full-pages without having to pass props deeply through the component tree.

### `boards-global-setup.ts`

- **Function**: This file ensures that **Tailwind CSS** is globally applied to all components within the Codux environment.
- **Note**: This file is crucial for maintaining visual consistency between Codux and the actual app styling, ensuring that components look the same in both environments.

## General Guidelines for Development

### 1. **Use Tailwind CSS Wisely**

- Tailwind should be the default styling tool for all components.
- Avoid duplicating styles across components; use utility classes effectively.

### 2. **Dynamic and Reusable Components**

- All components should be designed to handle varying data through props or context.
- Components must be self-contained and flexible enough to be reused in multiple places without modification.

### 3. **Component Consistency**

- Follow consistent naming conventions for files, functions, and variables. Use `PascalCase` for component names and `camelCase` for functions and variables.
- Ensure that the folder structure is followed closely to avoid clutter and confusion.

### 4. **Supabase Configuration**

- The Supabase integration should always be managed through the files in the `utils/supabase/` folder.
- Avoid making direct API calls in components. All database interactions should go through utility functions defined in the `supabase/` folder for consistency and reusability.

### 5. **Avoid Redundancy**

- Components and utilities should be reusable and flexible. If you find yourself copying code across files, refactor it into a utility or reusable component to prevent redundancy.

### 6. **Global State and Context**

- Utilize React’s Context API for managing global state, such as user information or app-wide settings. This is particularly important for user authentication.
- Place all context-related files in the `utils/` folder to maintain structure and organization.

### 7. **Codux for Visualization**

- **Codux** is a powerful tool for visualizing and debugging components. Always use Codux to test your components before integrating them into the full-page components to catch issues early in the development process.

## Maintaining the Project

### Code Reviews

- Always ensure that all new code is reviewed by at least one other team member.
- Ensure components are well-documented before merging any changes.

### Testing

- Components should be visually tested in **Codux** and integrated properly with Tailwind before being committed to the codebase.
- Unit tests should be added to validate the functionality of reusable components.

### Future Considerations

- Keep scalability in mind: As the project grows, we may need to split components or utilities into more specific folders.
- Keep an eye on performance: Ensure components and full-pages are optimized for performance, particularly in API handling and rendering.

## Conclusion

This project follows a modular approach to frontend development with a strong emphasis on reusability, scalability, and clean architecture. Maintaining this structure and adhering to the provided guidelines will ensure that the project remains easy to develop, debug, and scale over time.
