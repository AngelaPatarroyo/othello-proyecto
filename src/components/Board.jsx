import React, { useState, useEffect } from "react";
import ScoreBoard from './ScoreBoard'
import Swal from 'sweetalert2'
import { hasPossibleMoves } from "./CheckPossibleMoves";
import TileChecker from "./TileChecker";


/* false = turno blanco
    true = turno negro */

/* 1=blanco
2=negro
0=vacio */

const baseMatriz = () => [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 2, 0, 0, 0],
  [0, 0, 0, 2, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

const baseMatriz10x10 = () => [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const Board = () => {
  const [turn, setTurn] = useState(true);
  const [matriz, setMatriz] = useState(baseMatriz);
  const [boardSize, setBoardSize] = useState(8);
  const [whiteCount, setWhiteCount] = useState(32);
  const [blackCount, setBlackCount] = useState(32);
  const [endGame, setEndGame] = useState(false);

  const handleBoardSize = () => {
    if (boardSize === 8) {
      setBoardSize(10);
      setMatriz(baseMatriz10x10());
    } else {
      setMatriz(baseMatriz());
      setBoardSize(8);
    }
    if (turn === false) {
      setTurn(true);
      setEndGame(false);
    }
  };
  
  useEffect(() => {
    const white = (boardSize === 8 ? 32 : 50) - matriz.reduce(
      (acc, x) => acc + x.filter((value) => value === 1).length,
      0
    );
    const black = (boardSize === 8 ? 32 : 50) - matriz.reduce(
      (acc, x) => acc + x.filter((value) => value === 2).length,
      0
    );
    setWhiteCount(white);
    setBlackCount(black);

    // verifica si algún color alcanzó 32
    if (white <= 0 || black <= 0) {
      setEndGame(true);
      // aquí se puede detener el juego de alguna manera
      Swal.fire({
        title: `Game Over!!! The winner is ... ${white <= 0 ? 'White' : 'Black'}`,
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
        backdrop: `
    rgba(0,0,123,0.4)
    url("https://sweetalert2.github.io/images/nyan-cat.gif")
    left top
    no-repeat
    `
      });
    } else if (!hasPossibleMoves(matriz, turn)) {
      setEndGame(true)
      Swal.fire({
        title: `Uh-oh, no more moves for you ...The winner is ${whiteCount < blackCount ? 'White' : 'Black'}`,
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
        backdrop: `
    rgba(0,0,123,0.4)
    url("https://sweetalert2.github.io/images/nyan-cat.gif")
    left top
    no-repeat
    `
      });
    }
  }, [matriz, whiteCount, blackCount, turn, boardSize]);

  return (
    <div className="flex gap-x- my-7 ml-32">
      <div className="mt-14">
        {matriz.map((row, rowIndex) => (
          <div key={rowIndex} className="flex shadow-lg shadow-slate-700">
            {row.map((value, colIndex) => (
              <TileChecker
                x={rowIndex}
                y={colIndex}
                endGame={endGame}
                turn={turn}
                matriz={matriz}
                setMatriz={setMatriz}
                setTurn={setTurn}
                key={colIndex}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="w-max">
        <div className="absolute top-0 right-0 mt-8 mr-24 flex justify-center items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={handleBoardSize}
          >
            Change the board size
          </button>
        </div>
        <ScoreBoard
          whiteCount={whiteCount}
          blackCount={blackCount}
          turn={turn}
          boardSize={boardSize}
          baseMatriz={baseMatriz}
          matriz={matriz}
          setMatriz={setMatriz}
          setWhiteCount={setWhiteCount}
          setBlackCount={setBlackCount}
          setTurn={setTurn}
          setEndGame={setEndGame}
          baseMatriz10x10={baseMatriz10x10}
        />
      </div>
    </div>
  );
}

export default Board