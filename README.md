# Tic-Tac-Toe Game with Time Travel

Simple Tic-Tac-Toe game made with React Js. In this game you can also Time Travel from to any place were you have creates the move on game board.
We have use React Hooks

## 🔗 Live Demo

[Click Here ](https://tic-tac-toe-frontend-chi.vercel.app/)

## Tech Stack

**Server:** React Js, React Hooks, Functional Components

## NPM Packages

- [React Js](https://www.npmjs.com/package/react)

## Getting Started

### Prerequisites

Clone the project

```bash
  git clone https://github.com/karangorania/tic-tac-toe-frontend
```

Go to the project directory

```bash
  cd tic-tac-toe-frontend
```

Install dependencies

```bash
  npm i
```

Start the server

```bash
  npm start
```

Open Localhost in your Browser

```
http://localhost:3000/
```

## How it’s made

First of all I created three file in Components folder.

- `Square.js`
- `Board.js`
- `Game.js`

In `Square.js` I created the button which will work as square of the game board. I will pass the value using props using other file.

In `Board.js` I created printSquare function which it will take square from square file & I will put into div 9 times so, prefect square will made.

In `Game.js` is main file will hold all logic of the game.
First I have created empty array of 9.

`const boardStart = ['', '', '', '', '', '', '', '', ''];`

Then I have created 2 useState one History & second currentIndex.

## Winning Condition

    [0, 1, 2], //horizontal
    [3, 4, 5], //horizontal
    [6, 7, 8], //horizontal
    [0, 3, 6], //vertical
    [1, 4, 7], //vertical
    [2, 5, 8], //vertical
    [0, 4, 8], //cross
    [2, 4, 6], // cross
