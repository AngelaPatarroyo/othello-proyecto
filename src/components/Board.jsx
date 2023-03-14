import React, { useState, useEffect } from "react";
import ScoreBoard from './ScoreBoard'
import Swal from 'sweetalert2'
import BoardSizeChange from "./BoardSizeChange";
import { hasPossibleMoves } from "./CheckPossibleMoves";
import TileChecker from "./TileChecker";


/* false = turno blanco
    true = turno negro */

/* 1=blanco
2=negro
0=vacio */

const Board = () => {
  const [turn, setTurn] = useState(true);
  const [matriz, setMatriz] = useState([

    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [whiteCount, setWhiteCount] = useState(32);
  const [blackCount, setBlackCount] = useState(32);
  const [endGame, setEndGame] = useState(false);

  useEffect(() => {
    const white = 32 - matriz.reduce(
      (acc, x) => acc + x.filter((value) => value === 1).length,
      0
    );
    const black = 32 - matriz.reduce(
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

    
  }, [matriz, whiteCount, blackCount, turn]);

  

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
        <BoardSizeChange
          setMatriz={setMatriz}
          turn={turn}
          setTurn={setTurn}
          setEndGame={setEndGame}
        />
        <ScoreBoard
          setTurn={setTurn}
          setMatriz={setMatriz}
          setBlackCount={setBlackCount}
          setWhiteCount={setWhiteCount}
          whiteCount={whiteCount}
          blackCount={blackCount}
          turn={turn}
          setEndGame={setEndGame}
        />
      </div>
    </div>
  );
}

export default Board