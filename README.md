# ♟️ Real-Time Multiplayer Chess Game
### A socket.io powered online chess platform with live move synchronization

## 🚀 Features
- Real-time multiplayer gameplay using Socket.io

- Chess logic powered by chess.js

- Player role assignment (White/Black/Spectator)

- Move validation and turn management

- Responsive chess board with piece dragging

## 🛠️ Tech Stack
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Chess.js](https://img.shields.io/badge/chess.js-%23777CB3.svg?style=for-the-badge&logo=chess&logoColor=white)

## 📂 Project Structure
| Location            | File            | Purpose                          |
|---------------------|-----------------|----------------------------------|
| /public/js/         | chessgame.js    | Client-side game logic           |
| /views/             | index.ejs       | Game interface template          |
| /                   | app.js          | Server & socket configuration    |
| /                   | package.json    | Project dependencies             |


## 🎮 How to Play
1. Clone the repository

2. Install dependencies: npm install

3. Start server: node app.js

4. Open localhost:3000 in two browsers to play

## 🔌 Dependencies
- express - Web server framework

- socket.io - Real-time communication

- chess.js - Chess move validation

- ejs - Templating engine

