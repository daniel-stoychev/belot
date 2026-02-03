# 🂡 Belot Score Counter (React Web)

A simple **mobile‑first web application** for tracking scores in the popular card game **Belot** (played by 4 players / 2 teams).
This project is built as a **junior‑friendly portfolio project**, focusing on clean React fundamentals, clear state management, and responsive UI.

---

## 🎯 Project Goals

- Practice **React fundamentals** (hooks, state, components)
- Build a **real, usable app** from scratch
- Apply **mobile‑first responsive design**
- Create a solid **portfolio project** with clear scope
- Prepare logic that can later be reused for React Native

---

## 🧩 Features (MVP)

- Two teams (Team A & Team B)
- Manual input of points per round
- Automatic score calculation
- Display current total score
- Reset game functionality
- Simple and clean mobile UI

---

## 🚀 Tech Stack

- **React** (Web)
- **Vite**
- CSS (or CSS Modules / Tailwind – optional)

---

## 📱 Design Approach

- Mobile‑first layout
- Touch‑friendly buttons
- Clear typography
- Minimal UI (no animations required)

---

## 📂 Suggested Project Structure

```
/src
 ├── components
 │   ├── Header.jsx
 │   ├── ScoreBoard.jsx
 │   └── Button.jsx
 ├── logic
 │   └── gameLogic.js
 ├── pages
 │   └── Game.jsx
 ├── App.jsx
 └── main.jsx
```

---

## 🧠 Game Logic (Simplified)

- Each team has a total score
- User inputs points for a round
- Points are added to the selected team
- No advanced rules (calling, bonuses, etc.)

---

## 🛠️ Development Steps

### 1️⃣ Project Setup

- Create React project (Vite)
- Run project locally

### 2️⃣ Base Layout

- Create main game screen
- Display two teams side by side
- Add placeholders for scores

### 3️⃣ State Management

- Store team scores in state
- Handle score updates
- Handle game reset

### 4️⃣ Score Input

- Input field for points
- Buttons to assign points to a team
- Basic validation (numbers only)

### 5️⃣ Mobile Optimization

- Responsive layout
- Large buttons
- Test on real phone (browser)

### 6️⃣ Polish

- Clean UI
- Remove unused code
- Add basic README

---

## 🧪 Testing Checklist

- [ ] App works on mobile browsers
- [ ] Score updates correctly
- [ ] Reset works
- [ ] No console errors
- [ ] UI does not overflow screen

---

## 📈 Possible Future Improvements

- Game history
- Configurable target score (501 / 1001)
- Dark mode
- Team names
- React Native version

---

## 👨‍💻 Author

Built as a learning & portfolio project by a junior React developer.

---

## 📄 License

MIT

## TODOS

### Initial setup

- [x] Do initial commit
- [x] Clean create vite dummy data
- [x] Update main & App jsx
- [x] Install React Router
- [x] Add Header.jsx
- [x] Add ScoreBoard.jsx
- [x] Add Button.jsx

### Base Layout

- [x] Update Header
- [] Create main game screen
  - [x] Add Header.module.css
  - [x] Add global CSS
  - [x] Display two teams and input fields
  - [x] Add ScoreBoard.module.css
  - [x] Setup Button.jsx & Button.module.css
- [] Add gameLogic.js
  - [x] Setup form and print results in console
  - [x] Calculate scores and add new container of scores are larger than 0
  - []
  - []
- []
- []
