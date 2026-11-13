# Lab 4: User Authentication API

An Express API for registering users, logging in, and changing passwords. User records are stored in the included SQLite database, and passwords are hashed with bcrypt.

## Requirements

- Node.js and npm

## Setup and run

From this directory:

```bash
npm install
node app.js
```

The API listens at `http://localhost:3000`. The included `userData.db` is opened from this project directory.

## Endpoints

| Method | Path | Description |
|---|---|---|
| POST | `/register` | Register a user |
| POST | `/login` | Authenticate a user |
| PUT | `/change-password` | Change a user's password |

### Register

Request body:

```json
{
  "username": "adam_richard",
  "name": "Adam Richard",
  "password": "richard_567",
  "gender": "male",
  "location": "Detroit"
}
```

Returns `400 User already exists` for an existing username, `400 Password is too short` when the password has fewer than five characters, or `200 User created successfully` when registration succeeds.

### Login

Request body:

```json
{
  "username": "adam_richard",
  "password": "richard_567"
}
```

Returns `400 Invalid user` for an unregistered username, `400 Invalid password` for an incorrect password, or `200 Login success!` when login succeeds.

### Change password

Request body:

```json
{
  "username": "adam_richard",
  "oldPassword": "richard_567",
  "newPassword": "richard@123"
}
```

Returns `400 Invalid current password` when the current password is incorrect, `400 Password is too short` when the new password has fewer than five characters, or `200 Password updated` when the password changes successfully.
