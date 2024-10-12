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
    firstName?: string;          // First name of the user, optional
    lastName?: string;           // Last name of the user, optional
    organizationId?: string;     // Organization the user belongs to, optional
    bio?: string;                // Short bio, optional
    avatarUrl?: string;          // URL to the user's avatar, optional
    dateOfBirth?: Date;          // User's date of birth, optional
    phoneNumber?: string;        // User's phone number, optional
    createdAt?: string;          // Timestamp when the user was created, optional
    updatedAt?: string;          // Timestamp when the user was last updated, optional
    status: UserStatus;          // User's current status, defaults to 'offline'
}

/**
 * Interface representing a user role.
 * Corresponds to the `user_roles` table in the database.
 */
export interface UserRole {
    id: number;                 // Identity column, primary key
    userId: string;             // UUID, foreign key referencing `users`
    role: AppRole;              // Role assigned to the user
}

/**
 * Interface representing a role.
 * Corresponds to the `roles` table in the database.
 */
export interface Role {
    id: string;                 // UUID, primary key
    name: string;               // Role name, must be unique within the organization
    organizationId?: string;    // Organization the role belongs to, optional
    description?: string;       // Description of the role, optional
    createdAt?: string;         // Timestamp when the role was created, optional
    updatedAt?: string;         // Timestamp when the role was last updated, optional
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
    roleId?: string;            // Foreign key referencing the role, optional
    name: string;               // Permission name
    description?: string;       // Permission description, optional
    createdAt?: string;         // Timestamp when the permission was created, optional
    updatedAt?: string;         // Timestamp when the permission was last updated, optional
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
    createdAt?: string;         // Timestamp when the organization was created, optional
    updatedAt?: string;         // Timestamp when the organization was last updated, optional
}

/**
 * Interface representing a message.
 * Corresponds to the `messages` table in the database.
 */
export interface Message {
    id: number;                 // Identity column, primary key
    insertedAt: string;         // Timestamp when the message was inserted
    message?: string;           // Message content, optional
    userId: string;             // UUID, foreign key referencing `users`
    channelId: number;          // Foreign key referencing `channels`
}

/**
 * Interface representing a chat channel.
 * Corresponds to the `channels` table in the database.
 */
export interface Channel {
    id: number;                 // Identity column, primary key
    insertedAt: string;         // Timestamp when the channel was created
    slug: string;               // Unique slug for the channel
    createdBy: string;          // UUID, foreign key referencing `users`
}
