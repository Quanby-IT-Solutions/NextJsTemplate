/**
 * Enum representing the possible statuses of a user.
 */
export enum UserStatus {
    Offline = "offline",
    Online = "online",
    Away = "away",
}

/**
 * Enum representing the possible roles in the application.
 */
export enum AppRole {
    Admin = "admin",
    User = "user",
    Moderator = "moderator",
}

/**
 * Enum representing the possible permissions in the application.
 */
export enum AppPermission {
    Read = "read",
    Write = "write",
    Execute = "execute",
}

/**
 * Interface representing a user.
 * Corresponds to the `users` table in the database.
 */
export interface User {
    id: string;                  // UUID, primary key
    email: string;               // Email address, must be unique
    first_name?: string;         // First name of the user, optional
    last_name?: string;          // Last name of the user, optional
    organization_id?: string;    // Organization the user belongs to, optional
    bio?: string;                // Short bio, optional
    avatar_url?: string;         // URL to the user's avatar, optional
    date_of_birth?: Date;        // User's date of birth, optional
    phone_number?: string;       // User's phone number, optional
    created_at?: string;         // Timestamp when the user was created, optional
    updated_at?: string;         // Timestamp when the user was last updated, optional
    status: UserStatus;          // User's current status, defaults to 'offline'
}

/**
 * Interface representing a user role.
 * Corresponds to the `user_roles` table in the database.
 */
export interface UserRole {
    id: number;                 // Identity column, primary key
    user_id: string;            // UUID, foreign key referencing `users`
    role: AppRole;              // Role assigned to the user
}

/**
 * Interface representing a role.
 * Corresponds to the `roles` table in the database.
 */
export interface Role {
    id: string;                 // UUID, primary key
    name: string;               // Role name, must be unique within the organization
    organization_id?: string;   // Organization the role belongs to, optional
    description?: string;       // Description of the role, optional
    created_at?: string;        // Timestamp when the role was created, optional
    updated_at?: string;        // Timestamp when the role was last updated, optional
}

/**
 * Interface representing a role permission.
 * Corresponds to the `role_permissions` table in the database.
 */
export interface RolePermission {
    id: number;                 // Identity column, primary key
    role: AppRole;              // Role associated with the permission
    permission: AppPermission;  // Permission assigned to the role
}

/**
 * Interface representing a permission.
 * Corresponds to the `permissions` table in the database.
 */
export interface Permission {
    id: string;                 // UUID, primary key
    role_id?: string;           // Foreign key referencing the role, optional
    name: string;               // Permission name
    description?: string;       // Permission description, optional
    created_at?: string;        // Timestamp when the permission was created, optional
    updated_at?: string;        // Timestamp when the permission was last updated, optional
}

/**
 * Interface representing an organization.
 * Corresponds to the `organizations` table in the database.
 */
export interface Organization {
    id: string;                 // UUID, primary key
    name: string;               // Organization name, must be unique
    domain: string;             // Organization domain, must be unique
    website?: string;           // Website URL, optional
    created_at?: string;        // Timestamp when the organization was created, optional
    updated_at?: string;        // Timestamp when the organization was last updated, optional
}

/**
 * Interface representing a message.
 * Corresponds to the `messages` table in the database.
 */
export interface Message {
    id: number;                 // Identity column, primary key
    inserted_at: string;        // Timestamp when the message was inserted
    message?: string;           // Message content, optional
    user_id: string;            // UUID, foreign key referencing `users`
    channel_id: number;         // Foreign key referencing `channels`
}

/**
 * Interface representing a chat channel.
 * Corresponds to the `channels` table in the database.
 */
export interface Channel {
    id: number;                 // Identity column, primary key
    inserted_at: string;        // Timestamp when the channel was created
    slug: string;               // Unique slug for the channel
    created_by: string;         // UUID, foreign key referencing `users`
}
