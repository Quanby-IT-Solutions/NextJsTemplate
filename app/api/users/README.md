# Users API Usage Documentation

## Base URL

```bash
/api/users
```

## Endpoints

### 1. GET `/api/users`

Retrieve users from the database. You can filter results using optional query parameters.

**Query Parameters:**

- `id`: User ID
- `email`: User email
- `first_name`: First name
- `last_name`: Last name
- `page`: Pagination page number (optional)
- `limit`: Number of records per page (optional)

**Example Requests:**

```bash
GET /api/users?id=123
GET /api/users?email=user@example.com&page=1&limit=10
```

### 2. PUT `/api/users`

Update user information based on their `id`.

**Request Body:**

```json
{
  "id": 123,
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com"
}
```

**Example Request:**

```bash
PUT /api/users
```

### 3. DELETE `/api/users`

Archive a user by setting their `status` to `archived`. Requires `id` in the request body.

**Request Body:**

```json
{
  "id": 123
}
```

**Example Request:**

```bash
DELETE /api/users
```

## Error Handling

In case of an error, the API will return a response in the following format:

```json
{
  "error": "Error message here"
}
```
