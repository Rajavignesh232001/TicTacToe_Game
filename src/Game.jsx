import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Game = () => {
  const navigate = useNavigate();
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`;

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className='game-bg-container'>
      <div className='game-heading-bar'>
        <button className='left' onClick={() => navigate('/')}>👈</button>
        <h1 className='right'>Tic-Tac-Toe</h1>
      </div>
      <div className='game-body'>
        <h2 className='sub-title'>{status}</h2>
        <div className="board">
          {board.map((cell, index) => (
            <button key={index} className="cell" onClick={() => handleClick(index)}>
              {cell}
            </button>
          ))}
        </div>
        <button className="reset-btn" onClick={resetGame}>Reset</button>
      </div>
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
