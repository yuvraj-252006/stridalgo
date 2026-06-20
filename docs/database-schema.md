# STRIDALGO - Database Schema

## Users Table

Purpose:
Stores all user information and progress.

Fields:
- id
- username
- email
- password
- profile_image
- xp
- coins
- level
- floors
- city_level
- streak
- total_questions_solved
- total_easy_solved
- total_medium_solved
- total_hard_solved
- created_at
- updated_at

---

## Questions Table

Purpose:
Stores all DSA questions.

Fields:
- id
- title
- slug
- difficulty
- topic
- description
- constraints
- examples
- hints
- starter_code
- time_limit
- memory_limit
- created_at
- updated_at

---

## Test Cases Table

Purpose:
Stores test cases for every question.

Fields:
- id
- question_id
- input
- expected_output
- is_hidden
- created_at

---

## Submissions Table

Purpose:
Stores all user submissions.

Fields:
- id
- user_id
- question_id
- language
- code
- status
- runtime
- memory
- points
- submitted_at

---

## Buildings Table

Purpose:
Stores city buildings and their progress.

Fields:
- id
- user_id
- building_type
- floors
- level
- position_x
- position_y
- created_at
- updated_at

---

## Achievements Table

Purpose:
Stores badges and achievements.

Fields:
- id
- title
- description
- icon
- reward
- created_at

---

## User Achievements Table

Purpose:
Tracks achievements earned by users.

Fields:
- id
- user_id
- achievement_id
- earned_at

---

## Leaderboard Table

Purpose:
Stores ranking information.

Fields:
- id
- user_id
- rank
- xp
- floors
- updated_at

---

## Tournaments Table

Purpose:
Stores tournament information.

Fields:
- id
- title
- description
- start_date
- end_date
- reward
- status
- created_at

---

## Tournament Participants Table

Purpose:
Stores tournament participants.

Fields:
- id
- tournament_id
- user_id
- score
- rank
- joined_at

---

## Weather Table

Purpose:
Stores unlocked weather effects.

Fields:
- id
- user_id
- weather_type
- unlocked_at

---

## Notifications Table

Purpose:
Stores system notifications.

Fields:
- id
- user_id
- title
- message
- is_read
- created_at
