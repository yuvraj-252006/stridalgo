# STRIDALGO - API Documentation

# Authentication APIs

POST /api/auth/signup
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/forgot-password
POST /api/auth/reset-password
GET /api/auth/profile

---

# Dashboard APIs

GET /api/dashboard
GET /api/dashboard/stats
GET /api/dashboard/activity

---

# Question APIs

GET /api/questions
GET /api/questions/random
GET /api/questions/:id
GET /api/questions/difficulty/:level
GET /api/questions/topic/:topic

---

# Submission APIs

POST /api/submissions
GET /api/submissions
GET /api/submissions/:id

---

# Reward APIs

GET /api/rewards
GET /api/rewards/xp
GET /api/rewards/coins
GET /api/rewards/medals

---

# City APIs

GET /api/city
PATCH /api/city/update
GET /api/city/buildings

---

# Building APIs

GET /api/buildings
POST /api/buildings
PATCH /api/buildings/:id

---

# Achievement APIs

GET /api/achievements
GET /api/achievements/user

---

# Leaderboard APIs

GET /api/leaderboard
GET /api/leaderboard/global
GET /api/leaderboard/friends

---

# Tournament APIs

GET /api/tournaments
GET /api/tournaments/:id
POST /api/tournaments/join
GET /api/tournaments/leaderboard

---

# Weather APIs

GET /api/weather
PATCH /api/weather/update

---

# Notification APIs

GET /api/notifications
PATCH /api/notifications/read
DELETE /api/notifications/:id
