# 🎮 Game Review API

A REST API for game reviews built with Node.js, Express, Prisma and MongoDB.

> Project developed as part of the Trainee program at **[Atria Júnior](https://www.atriajr.com.br/)** — junior company of the Faculty of Technology at Unicamp (FT-Unicamp) — in the IT projects team.

---

## 🚀 Technologies

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [MongoDB Atlas](https://www.mongodb.com/atlas)
- [JWT](https://jwt.io/) — authentication
- [Bcrypt](https://www.npmjs.com/package/bcrypt) — password encryption

---

## 📁 Project structure

```
src/
├── controllers/        # Handles requests and calls services
├── services/           # Business logic and database communication
├── routes/             # Route definitions
├── middlewares/        # JWT authentication
├── prisma/             # PrismaClient instance
prisma/
└── schema.prisma       # Database models
server.js               # Application entry point
```

---

## ⚙️ How to run

### Prerequisites

- Node.js installed
- [MongoDB Atlas](https://www.mongodb.com/atlas) account with a cluster created

### Step by step

1. Clone the repository:
```bash
git clone https://github.com/GuDMancio/game-review-api.git
cd game-review-api
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables — create a `.env` file at the root based on `.env.example`:
```env
DATABASE_URL="mongodb+srv://user:password@cluster.mongodb.net/dbname?appName=AppName"
JWT_SECRET="your_secret_key_here"
```

To generate a secure `JWT_SECRET`:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

4. Generate Prisma Client:
```bash
npx prisma generate
```

5. Start the server:
```bash
node src/server.js
```

---

## 🔐 Authentication

The API uses JWT. To access protected routes, include the token in the request header:

```
Authorization: Bearer <your_token>
```

The token is obtained by logging in at `POST /auth/login`.

Update and delete routes for users verify that the token belongs to the user themselves — it is not possible to modify or delete another user's account.

---

## 📌 Routes

### Auth
| Method | Route | Description |
|--------|-------|-------------|
| POST | `/auth/login` | Login and token generation |

### Users
| Method | Route | Description | Auth |
|--------|-------|-------------|------|
| POST | `/user` | Create user | ❌ |
| GET | `/user` | List users | ✅ |
| PUT | `/user/:id` | Update user | ✅ (own user only) |
| DELETE | `/user/:id` | Delete user | ✅ (own user only) |

### Reviews
| Method | Route | Description | Auth |
|--------|-------|-------------|------|
| POST | `/reviews` | Create review | ✅ |
| GET | `/reviews` | List reviews | ❌ |
| PUT | `/reviews/:id` | Update review | ✅ |
| DELETE | `/reviews/:id` | Delete review | ✅ |

---

## 📝 Usage examples

### Create user
```json
POST /user
{
  "name": "Gustavo",
  "email": "gustavo@gmail.com",
  "password": "12345"
}
```

### Login
```json
POST /auth/login
{
  "email": "gustavo@gmail.com",
  "password": "12345"
}
```

### Create review
```json
POST /reviews
Authorization: Bearer <token>
{
  "rating": 9,
  "comment": "Amazing game!",
  "gameId": "game_id_here"
}
```

---

## 🏛️ About

Project developed by **Gustavo Domingues** during the Trainee program at **[Atria Júnior](https://www.linkedin.com/company/atria-jr/posts/?feedView=all)**, junior company of the Faculty of Technology at Unicamp (FT-Unicamp), in the IT projects team.
