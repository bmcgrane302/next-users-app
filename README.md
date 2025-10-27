# Next.js Users App

A simple user directory built with **Next.js 16** to demonstrate dynamic routing, API routes, and server-side rendering.

---

## Features

- Home page listing users from a mock API  
- Profile page (`/users/[id]`) showing user details and friends  
- Centralized mock data (`lib/mock-db.js`) for easy replacement with a real database  
- UI built with **TailwindCSS**  


---

## Project Structure
```
app/
├── api/users/route.js # Returns all users
├── api/users/[id]/route.js # Returns single user + friends
├── users/[id]/page.js # Dynamic user page
├── components/ # UserCard, UserProfile, FriendsCard
├── layout.js # Global layout with nav
└── page.js # Home page
lib/
└── mock-db.js # Mock user data


```

## Run Locally

```bash
git clone https://github.com/<your-username>/next-users-app.git
cd next-users-app
npm install
npm run dev
